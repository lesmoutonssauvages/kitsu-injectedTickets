import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import { searchForWorkspaceRoot } from 'vite'

import { kitsuInlineCss } from './inline-css.js'
import { readManifestPluginId } from './manifest-id.js'
import { DEFAULT_SHARED_DEPS, kitsuSharedDeps } from './shared-deps.js'

export { kitsuInlineCss } from './inline-css.js'
export { readManifestPluginId } from './manifest-id.js'
export {
  DEFAULT_SHARED_DEPS,
  SHARED_GLOBAL,
  kitsuSharedDeps,
} from './shared-deps.js'

/** URL Zou serves the plugin `dist/` folder from. */
export const kitsuPluginBase = pluginId => `/api/plugins/${pluginId}/frontend/`

/**
 * Vite config for an injected Kitsu plugin: single ESM entry at
 * `dist/plugin.js`, stylesheet inlined, Vue stack borrowed from the host.
 *
 * Contract: Kitsu `feat/plugins-injected` + Zou `feature/plugin-injected`.
 */
export const defineKitsuPluginConfig = (options = {}) => {
  const {
    entry = 'src/plugin.js',
    shared = DEFAULT_SHARED_DEPS,
    root,
    vue: vueOptions,
    server,
  } = options

  const frontendRoot = root ?? process.cwd()
  const pluginId = options.pluginId ?? readManifestPluginId(frontendRoot)

  return {
    base: kitsuPluginBase(pluginId),
    publicDir: false,
    define: {
      __KITSU_PLUGIN_ID__: JSON.stringify(pluginId),
    },
    plugins: [
      vue(vueOptions),
      kitsuSharedDeps({ root, shared }),
      kitsuInlineCss({ pluginId }),
      {
        name: 'kitsu-plugin-serve-base',
        config(_config, env) {
          if (env.command !== 'serve') return
          return { base: '/' }
        },
      },
    ],
    server: {
      host: true,
      cors: true,
      ...server,
      fs: {
        ...server?.fs,
        allow: [
          searchForWorkspaceRoot(frontendRoot),
          path.resolve(frontendRoot),
          ...(server?.fs?.allow ?? []),
        ],
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: false,
      sourcemap: true,
      emptyOutDir: true,
      lib: {
        entry,
        formats: ['es'],
        fileName: () => 'plugin.js',
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'chunks/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  }
}
