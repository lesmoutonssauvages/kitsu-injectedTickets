/**
 * Declarative wrapper over the raw host contract (`{ activate, deactivate }`).
 * Host: Kitsu `feat/flagged-inject-plugin` (`src/lib/plugins/runtime.js`).
 *
 * `id` defaults to `__KITSU_PLUGIN_ID__` injected by `defineKitsuPluginConfig`
 * from the Zou `manifest.toml`.
 */
export const definePlugin = definition => {
  const { messages, store, routes, setup, teardown } = definition
  const id =
    definition.id ||
    (typeof __KITSU_PLUGIN_ID__ === 'string' && __KITSU_PLUGIN_ID__
      ? __KITSU_PLUGIN_ID__
      : undefined)

  const plugin = {
    id,

    async activate(context) {
      const resolvedId = id ?? context.pluginId
      if (!resolvedId) {
        throw new Error(
          'definePlugin: missing plugin id. Use defineKitsuPluginConfig() (reads ../manifest.toml) or pass id explicitly.',
        )
      }
      if (id && id !== context.pluginId) {
        throw new Error(
          `plugin id mismatch: the bundle declares "${id}" but the host loaded it as "${context.pluginId}"`,
        )
      }
      if (messages) context.addMessages(messages)
      if (store) {
        context.registerStoreModule(`kitsu-plugin-${context.pluginId}`, store)
      }
      if (routes) context.addRoutes(routes)
      await setup?.(context)
    },

    async deactivate(context) {
      await teardown?.(context)
    },
  }

  // When the plugin runs on its own Vite instance, accept the entry so the
  // host can deactivate/reactivate instead of leaving a half-updated module.
  if (import.meta.hot) {
    if (!id) {
      console.warn(
        '[plugins] HMR disabled: missing plugin id (defineKitsuPluginConfig / definePlugin id)',
      )
    } else {
      import.meta.hot.accept(module => {
        void globalThis.__KITSU_PLUGIN_RELOAD__?.(id, module)
      })
    }
  }

  return plugin
}
