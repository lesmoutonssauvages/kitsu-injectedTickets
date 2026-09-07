import { usePluginContext } from 'kitsu-plugin-kit'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { asEpisodeId } from './useTicketsApi'

const asParam = (value: unknown): string | null =>
  typeof value === 'string' && value.length > 0 ? value : null

/**
 * Production / episode of the current page. Route params are read before the
 * plugin context so filters are already correct on the first render of a
 * deep link.
 */
export const useTicketsScope = () => {
  const route = useRoute()
  const context = usePluginContext()

  const productionId = computed(
    () =>
      asParam(route.params.production_id) ??
      asParam(context.value?.productionId),
  )

  // Kitsu uses episode_id=all on the all-episodes URL, which is not a UUID:
  // it still means "episode scope", but it is not a filterable value.
  const rawEpisodeId = computed(
    () => asParam(route.params.episode_id) ?? asParam(context.value?.episodeId),
  )
  const episodeId = computed(() => asEpisodeId(rawEpisodeId.value))

  return { productionId, episodeId }
}
