import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * The host stamps the plugin context on the `meta` of every route it registers
 * for that plugin (`PLUGIN_CONTEXT_META_KEY` in Kitsu `src/lib/plugins/context.js`).
 */
export const PLUGIN_CONTEXT_META_KEY = 'kitsuPlugin'

export const usePluginContext = () => {
  const route = useRoute()
  return computed(() => route.meta[PLUGIN_CONTEXT_META_KEY] ?? null)
}
