import { computed } from 'vue'
import { useStore } from 'vuex'

import type { Person, Production } from './useTicketsApi'

type Named = { id: string; name: string }

export type HostSequence = {
  id: string
  name: string
  parent_id?: string | null
  episode_id?: string | null
}

export type HostTask = {
  id: string
  entity_id?: string
  entity?: {
    id: string
    name: string
    entity_type_id?: string
    parent_id?: string
  }
  entity_type?: { id: string; name: string }
  entity_type_name?: string
  task_type_id?: string
  task_type_name?: string
  task_type?: { name: string }
  sequence?: HostSequence & { name: string }
  episode?: { id: string; name: string }
  episode_id?: string
  episode_name?: string
  sequence_name?: string
}

export type HostEntityCatalogs = {
  assetTypes: Named[]
  assets: Array<{ id: string; name: string; entity_type_id?: string }>
  shots: Array<{
    id: string
    name: string
    sequence_id?: string
    parent_id?: string
  }>
  sequences: HostSequence[]
  episodes: Array<{ id: string; name: string }>
  edits: Array<{
    id: string
    name: string
    episode_id?: string
    parent_id?: string
  }>
}

/** with-tasks sequences expose episode_id; plain sequences use parent_id. */
export const sequenceEpisodeId = (
  sequence: HostSequence | undefined | null,
): string | null => sequence?.parent_id || sequence?.episode_id || null

/**
 * Host Kitsu Vuex catalogs (open productions, people, task types, entities).
 * Prefer these over re-fetching Zou list endpoints from the plugin.
 */
export const useHostCatalogs = () => {
  const store = useStore()

  const openProductions = computed(
    (): Production[] =>
      (store.getters.openProductions as Production[] | undefined) ?? [],
  )

  const people = computed((): Person[] => {
    const list =
      (store.getters.people as Array<{
        id: string
        full_name?: string
        name?: string
      }> | undefined) ?? []
    return list.map((p) => ({
      id: p.id,
      full_name: p.full_name || p.name || p.id,
    }))
  })

  const episodeNameById = computed((): Record<string, string> => {
    const map: Record<string, string> = {}
    const episodeMap = store.getters.episodeMap as
      | Map<string, { name?: string }>
      | undefined
    episodeMap?.forEach?.((ep, id) => {
      if (ep?.name) map[id] = ep.name
    })
    for (const ep of (store.getters.episodes as Array<{
      id?: string
      name?: string
    }> | undefined) ?? []) {
      if (ep?.id && ep?.name) map[ep.id] = ep.name
    }
    const current = store.getters.currentEpisode as {
      id?: string
      name?: string
    } | null
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
    const tasks: Promise<unknown>[] = []
    if (!openProductions.value.length) {
      tasks.push(store.dispatch('loadOpenProductions').catch(() => undefined))
    }
    if (!people.value.length) {
      tasks.push(store.dispatch('loadPeople').catch(() => undefined))
    }
    if (!(store.getters.taskTypes as unknown[] | undefined)?.length) {
      tasks.push(store.dispatch('loadTaskTypes').catch(() => undefined))
    }
    await Promise.all(tasks)
  }

  const resolveProduction = (projectId: string): Production | null => {
    const map = store.getters.productionMap as
      | Map<string, Production>
      | undefined
    return map?.get?.(projectId) ??
      openProductions.value.find((p) => p.id === projectId) ??
      null
  }

  const ensureProduction = async (projectId: string) => {
    if (!store.getters.productionMap?.get?.(projectId)) {
      await store.dispatch('loadProduction', projectId).catch(() => undefined)
    }
    if (store.getters.currentProduction?.id !== projectId) {
      await store.dispatch('setProduction', projectId)
    }
    return resolveProduction(projectId)
  }

  const taskTypesFor = (projectId: string | null): Named[] => {
    if (projectId) {
      const fromProduction = store.getters.getProductionTaskTypes?.(
        projectId,
      ) as Named[] | undefined
      if (fromProduction?.length) return fromProduction
    }
    return (store.getters.taskTypes as Named[] | undefined) ?? []
  }

  const assetTypesFor = (projectId: string): Named[] => {
    if (
      store.getters.currentProduction?.id === projectId &&
      (store.getters.productionAssetTypes as Named[] | undefined)?.length
    ) {
      return store.getters.productionAssetTypes as Named[]
    }
    return (store.getters.assetTypes as Named[] | undefined) ?? []
  }

  const loadEpisodes = () =>
    store.dispatch('loadEpisodes').catch(() => undefined)

  const loadEntityCatalogs = async (
    projectId: string,
  ): Promise<HostEntityCatalogs> => {
    await ensureProduction(projectId)
    const episode = store.getters.currentEpisode as { id: string } | null
    const wasWide = Boolean(episode && ['all', 'main'].includes(episode.id))
    if (wasWide) {
      await store.dispatch('setCurrentEpisode', null)
    }

    let sequencesFromApi: HostSequence[] = []
    try {
      await store.dispatch('loadEpisodes').catch(() => undefined)
      // Capture loadSequences return value: loadShots → loadSequencesWithTasks
      // overwrites the store with with-tasks payloads that omit parent_id.
      const sequencesPromise = store
        .dispatch('loadSequences')
        .then((list: unknown) => (Array.isArray(list) ? list : []))
        .catch(() => [] as HostSequence[])
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
        await store.dispatch('setCurrentEpisode', episode!.id)
      }
    }

    const storeSequences =
      (store.getters.sequences as HostSequence[] | undefined) ?? []
    const sequences =
      sequencesFromApi.length > 0
        ? sequencesFromApi
        : storeSequences.map((s) => ({
            ...s,
            parent_id: sequenceEpisodeId(s),
          }))

    return {
      assetTypes: assetTypesFor(projectId),
      assets: (
        (store.getters.assets as Array<{
          id: string
          name: string
          entity_type_id?: string
          asset_type_id?: string
        }> | undefined) ?? []
      ).map((a) => ({
        id: a.id,
        name: a.name,
        entity_type_id: a.entity_type_id || a.asset_type_id,
      })),
      shots:
        (store.getters.shots as Array<{
          id: string
          name: string
          sequence_id?: string
          parent_id?: string
        }> | undefined) ?? [],
      sequences,
      episodes:
        (store.getters.episodes as Array<{
          id: string
          name: string
        }> | undefined) ?? [],
      edits:
        (store.getters.edits as Array<{
          id: string
          name: string
          episode_id?: string
          parent_id?: string
        }> | undefined) ?? [],
    }
  }

  const getCachedTask = (taskId: string): HostTask | undefined =>
    (store.getters.taskMap as Map<string, HostTask> | undefined)?.get?.(
      taskId,
    )

  const loadTask = (taskId: string) =>
    store.dispatch('loadTask', { taskId }) as Promise<HostTask>

  const loadTasksForEntity = (entityId: string) =>
    store.dispatch('loadTasks', { entity_id: entityId }) as Promise<
      Array<{
        id: string
        task_type_id?: string
        task_type_name?: string
        task_type?: { name: string }
        entity_id?: string
      }>
    >

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
