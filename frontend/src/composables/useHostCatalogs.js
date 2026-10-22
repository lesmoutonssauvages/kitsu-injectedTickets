import { computed } from 'vue'
import { useStore } from 'vuex'

/** with-tasks sequences expose episode_id; plain sequences use parent_id. */
export const sequenceEpisodeId = sequence =>
  sequence?.parent_id || sequence?.episode_id || null

/**
 * Host Kitsu Vuex catalogs (open productions, people, task types, entities).
 * Prefer these over re-fetching Zou list endpoints from the plugin.
 */
export const useHostCatalogs = () => {
  const store = useStore()

  const openProductions = computed(
    () => store.getters.openProductions ?? [],
  )

  const people = computed(() => {
    const list = store.getters.people ?? []
    return list.map(p => ({
      id: p.id,
      full_name: p.full_name || p.name || p.id,
    }))
  })

  const episodeNameById = computed(() => {
    const map = {}
    const episodeMap = store.getters.episodeMap
    episodeMap?.forEach?.((ep, id) => {
      if (ep?.name) map[id] = ep.name
    })
    for (const ep of store.getters.episodes ?? []) {
      if (ep?.id && ep?.name) map[ep.id] = ep.name
    }
    const current = store.getters.currentEpisode
    if (
      current?.id &&
      current?.name &&
      !['all', 'main'].includes(current.id)
    ) {
      map[current.id] = current.name
    }
    return map
  })

  const ensureHostCatalogs = async () => {
    const tasks = []
    if (!openProductions.value.length) {
      tasks.push(store.dispatch('loadOpenProductions').catch(() => undefined))
    }
    if (!people.value.length) {
      tasks.push(store.dispatch('loadPeople').catch(() => undefined))
    }
    if (!store.getters.taskTypes?.length) {
      tasks.push(store.dispatch('loadTaskTypes').catch(() => undefined))
    }
    await Promise.all(tasks)
  }

  const resolveProduction = projectId => {
    const map = store.getters.productionMap
    return (
      map?.get?.(projectId) ??
      openProductions.value.find(p => p.id === projectId) ??
      null
    )
  }

  const ensureProduction = async projectId => {
    if (!store.getters.productionMap?.get?.(projectId)) {
      await store.dispatch('loadProduction', projectId).catch(() => undefined)
    }
    if (store.getters.currentProduction?.id !== projectId) {
      await store.dispatch('setProduction', projectId)
    }
    return resolveProduction(projectId)
  }

  const taskTypesFor = projectId => {
    if (projectId) {
      const fromProduction = store.getters.getProductionTaskTypes?.(projectId)
      if (fromProduction?.length) return fromProduction
    }
    return store.getters.taskTypes ?? []
  }

  const assetTypesFor = projectId => {
    if (
      store.getters.currentProduction?.id === projectId &&
      store.getters.productionAssetTypes?.length
    ) {
      return store.getters.productionAssetTypes
    }
    return store.getters.assetTypes ?? []
  }

  const loadEpisodes = () =>
    store.dispatch('loadEpisodes').catch(() => undefined)

  const loadEntityCatalogs = async projectId => {
    await ensureProduction(projectId)
    const episode = store.getters.currentEpisode
    const wasWide = Boolean(episode && ['all', 'main'].includes(episode.id))
    if (wasWide) {
      await store.dispatch('setCurrentEpisode', null)
    }

    let sequencesFromApi = []
    try {
      await store.dispatch('loadEpisodes').catch(() => undefined)
      // Capture loadSequences return value: loadShots → loadSequencesWithTasks
      // overwrites the store with with-tasks payloads that omit parent_id.
      const sequencesPromise = store
        .dispatch('loadSequences')
        .then(list => (Array.isArray(list) ? list : []))
        .catch(() => [])
      await Promise.all([
        store
          .dispatch('loadAssets', {
            all: true,
            withTasks: false,
            withShared: false,
          })
          .catch(() => undefined),
        sequencesPromise,
        store.dispatch('loadShots').catch(() => undefined),
        store.dispatch('loadEdits').catch(() => undefined),
      ])
      sequencesFromApi = await sequencesPromise
    } finally {
      if (wasWide) {
        await store.dispatch('setCurrentEpisode', episode.id)
      }
    }

    const storeSequences = store.getters.sequences ?? []
    const sequences =
      sequencesFromApi.length > 0
        ? sequencesFromApi
        : storeSequences.map(s => ({
            ...s,
            parent_id: sequenceEpisodeId(s),
          }))

    return {
      assetTypes: assetTypesFor(projectId),
      assets: (store.getters.assets ?? []).map(a => ({
        id: a.id,
        name: a.name,
        entity_type_id: a.entity_type_id || a.asset_type_id,
      })),
      shots: store.getters.shots ?? [],
      sequences,
      episodes: store.getters.episodes ?? [],
      edits: store.getters.edits ?? [],
    }
  }

  const getCachedTask = taskId => store.getters.taskMap?.get?.(taskId)

  const loadTask = taskId => store.dispatch('loadTask', { taskId })

  const loadTasksForEntity = entityId =>
    store.dispatch('loadTasks', { entity_id: entityId })

  return {
    openProductions,
    people,
    episodeNameById,
    ensureHostCatalogs,
    ensureProduction,
    taskTypesFor,
    loadEpisodes,
    loadEntityCatalogs,
    getCachedTask,
    loadTask,
    loadTasksForEntity,
  }
}
