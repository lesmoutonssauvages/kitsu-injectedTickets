import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { DEFAULT_SHARED_DEPS, SHARED_GLOBAL } from './shared-global.js'

export { DEFAULT_SHARED_DEPS, SHARED_GLOBAL } from './shared-global.js'

const VIRTUAL_PREFIX = '\0kitsu-shared:'
const IDENTIFIER_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/

const RESERVED_WORDS = new Set([
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
])

const pickEsmEntry = field => {
  if (typeof field === 'string') return field
  if (!field || typeof field !== 'object') return null
  for (const condition of ['import', 'module', 'browser', 'default']) {
    if (condition in field) {
      const entry = pickEsmEntry(field[condition] ?? null)
      if (entry) return entry
    }
  }
  return null
}

const resolveEsmEntry = (root, name) => {
  const require = createRequire(path.join(root, 'noop.js'))
  const manifestPath = require.resolve(`${name}/package.json`)
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const exported = manifest.exports?.['.'] ?? manifest.exports ?? null
  const entry = pickEsmEntry(exported) ?? manifest.module ?? manifest.main
  if (!entry) {
    throw new Error(`no ESM entry declared by "${name}"`)
  }
  return path.join(path.dirname(manifestPath), entry)
}

const collectExportNames = async (root, name) => {
  const entry = resolveEsmEntry(root, name)
  const module = await import(pathToFileURL(entry).href)
  return Object.keys(module).filter(
    exportName =>
      exportName !== 'default' &&
      IDENTIFIER_RE.test(exportName) &&
      !RESERVED_WORDS.has(exportName),
  )
}

const buildShim = (name, exportNames) =>
  [
    `const __kitsuShared = globalThis.${SHARED_GLOBAL}`,
    `if (!__kitsuShared) {`,
    `  throw new Error('Kitsu plugin: host shared modules are missing (globalThis.${SHARED_GLOBAL}).')`,
    `}`,
    `const __kitsuModule = __kitsuShared.modules[${JSON.stringify(name)}]`,
    `if (!__kitsuModule) {`,
    `  throw new Error('Kitsu plugin: the host does not share ${name}.')`,
    `}`,
    `export default __kitsuModule.default ?? __kitsuModule`,
    ...exportNames.map(
      exportName =>
        `export const ${exportName} = __kitsuModule[${JSON.stringify(exportName)}]`,
    ),
    '',
  ].join('\n')

/**
 * Rewrites imports of shared packages into lookups on the host globals.
 */
export const kitsuSharedDeps = ({
  root,
  shared = DEFAULT_SHARED_DEPS,
} = {}) => {
  const exportNames = new Map()
  let pluginRoot = root

  return {
    name: 'kitsu-plugin-shared-deps',
    enforce: 'pre',

    configResolved(config) {
      pluginRoot ??= config.root
    },

    resolveId(source) {
      return shared.includes(source) ? VIRTUAL_PREFIX + source : null
    },

    async load(id) {
      if (!id.startsWith(VIRTUAL_PREFIX)) return null
      const name = id.slice(VIRTUAL_PREFIX.length)
      if (!exportNames.has(name)) {
        try {
          exportNames.set(name, await collectExportNames(pluginRoot, name))
        } catch (error) {
          this.error(
            `Cannot share "${name}" with the Kitsu host: ${error.message}. ` +
              'Install it as a dependency of the plugin frontend, at the version the host uses.',
          )
        }
      }
      return buildShim(name, exportNames.get(name))
    },
  }
}
