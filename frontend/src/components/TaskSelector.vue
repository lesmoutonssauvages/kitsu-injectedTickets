<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {
  sequenceEpisodeId,
  useHostCatalogs,
  type HostEntityCatalogs,
  type HostSequence,
  type HostTask,
} from '../composables/useHostCatalogs'
import { asEpisodeId } from '../composables/useTicketsApi'
import type { Production } from '../composables/useTicketsApi'

const props = defineProps<{
  projectId: string | null
  taskId: string | null
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:taskId': [value: string | null]
}>()

const { t } = useI18n()
const route = useRoute()
const host = useHostCatalogs()

type Named = { id: string; name: string }
type Asset = { id: string; name: string; entity_type_id?: string }
type Shot = {
  id: string
  name: string
  sequence_id?: string
  parent_id?: string
}
type Edit = {
  id: string
  name: string
  episode_id?: string
  parent_id?: string
}
type EntityTask = {
  id: string
  task_type_id?: string
  task_type_name?: string
  task_type?: { name: string }
  entity_id?: string
}

const upsertById = <T extends { id: string }>(listRef: Ref<T[]>, item: T) => {
  if (!item?.id) return
  if (listRef.value.some((entry) => entry.id === item.id)) return
  listRef.value = [...listRef.value, item]
}

const mergeTaskEntitiesIntoCatalog = (task: HostTask) => {
  const entity = task.entity
  const entityTypeName = task.entity_type?.name || task.entity_type_name || ''

  if (task.episode) {
    upsertById(episodes, {
      id: task.episode.id,
      name: task.episode.name,
    })
  }

  if (task.sequence) {
    upsertById(sequences, {
      ...task.sequence,
      parent_id:
        task.sequence.parent_id || task.episode?.id || task.episode_id || null,
      episode_id: task.episode?.id || task.sequence.episode_id || null,
    })
  }

  if (!entity?.id) return

  if (entityTypeName === 'Asset') {
    upsertById(assets, {
      id: entity.id,
      name: entity.name,
      entity_type_id: entity.entity_type_id || task.entity_type?.id,
    })
    if (task.entity_type?.id) {
      upsertById(assetTypes, {
        id: task.entity_type.id,
        name: task.entity_type.name || 'Asset',
      })
    }
  } else if (entityTypeName === 'Shot') {
    upsertById(shots, {
      ...entity,
      sequence_id: task.sequence?.id || entity.parent_id,
      parent_id: entity.parent_id || task.sequence?.id,
    })
  } else if (entityTypeName === 'Sequence') {
    upsertById(sequences, {
      ...entity,
      parent_id: entity.parent_id || task.episode?.id || null,
      episode_id: task.episode?.id || entity.parent_id || null,
    })
  } else if (entityTypeName === 'Episode') {
    upsertById(episodes, { id: entity.id, name: entity.name })
  } else if (entityTypeName === 'Edit') {
    upsertById(edits, {
      ...entity,
      episode_id: task.episode?.id || entity.parent_id,
      parent_id: entity.parent_id || task.episode?.id,
    })
  }
}

const project = ref<Production | null>(null)
const taskTypeMap = ref<Record<string, string>>({})
const assetTypes = ref<Named[]>([])
const assets = ref<Asset[]>([])
const shots = ref<Shot[]>([])
const sequences = ref<HostSequence[]>([])
const episodes = ref<Named[]>([])
const edits = ref<Edit[]>([])
const tasks = ref<EntityTask[]>([])

const selectedEntityType = ref('')
const selectedAssetTypeId = ref('')
const selectedEpisodeId = ref('')
const selectedSequenceId = ref('')
const selectedEntityId = ref('')
const selectedTaskId = ref('')

const isLoadingProject = ref(false)
const isLoadingOptions = ref(false)
const isLoadingTasks = ref(false)
const isInitializing = ref(false)

const isTvShow = computed(() => project.value?.production_type === 'tvshow')

const entityTypeOptions = computed(() => {
  const options = [
    { label: t('custom_actions.entity_types.asset'), value: 'Asset' },
    { label: t('custom_actions.entity_types.shot'), value: 'Shot' },
    { label: t('custom_actions.entity_types.sequence'), value: 'Sequence' },
    { label: t('custom_actions.entity_types.edit'), value: 'Edit' },
  ]
  if (isTvShow.value) {
    options.splice(3, 0, {
      label: t('custom_actions.entity_types.episode'),
      value: 'Episode',
    })
  }
  return options
})

const sortedOptions = <T extends { label: string; value: string }>(
  items: T[],
) => [...items].sort((a, b) => a.label.localeCompare(b.label))

const assetTypeOptions = computed(() =>
  sortedOptions(
    assetTypes.value.map((at) => ({ label: at.name, value: at.id })),
  ),
)

const episodeOptions = computed(() =>
  sortedOptions(episodes.value.map((e) => ({ label: e.name, value: e.id }))),
)

const filteredSequenceOptions = computed(() => {
  let list = sequences.value
  if (isTvShow.value && selectedEpisodeId.value) {
    list = list.filter(
      (s) => sequenceEpisodeId(s) === selectedEpisodeId.value,
    )
  }
  return sortedOptions(list.map((s) => ({ label: s.name, value: s.id })))
})

const filteredAssetOptions = computed(() => {
  let list = assets.value
  if (selectedAssetTypeId.value) {
    list = list.filter((a) => a.entity_type_id === selectedAssetTypeId.value)
  }
  return sortedOptions(list.map((a) => ({ label: a.name, value: a.id })))
})

const filteredShotOptions = computed(() => {
  let list = shots.value
  if (selectedSequenceId.value) {
    list = list.filter(
      (s) =>
        s.sequence_id === selectedSequenceId.value ||
        s.parent_id === selectedSequenceId.value,
    )
  }
  return sortedOptions(list.map((s) => ({ label: s.name, value: s.id })))
})

const filteredEditOptions = computed(() => {
  let list = edits.value
  if (isTvShow.value && selectedEpisodeId.value) {
    list = list.filter(
      (e) =>
        e.episode_id === selectedEpisodeId.value ||
        e.parent_id === selectedEpisodeId.value,
    )
  }
  return sortedOptions(list.map((e) => ({ label: e.name, value: e.id })))
})

const taskOptions = computed(() =>
  tasks.value.map((task) => ({
    label:
      task.task_type_name ||
      task.task_type?.name ||
      (task.task_type_id ? taskTypeMap.value[task.task_type_id] : null) ||
      task.id.slice(0, 8),
    value: task.id,
  })),
)

const applyCatalog = (catalog: HostEntityCatalogs) => {
  assetTypes.value = catalog.assetTypes
  assets.value = catalog.assets
  shots.value = catalog.shots
  sequences.value = catalog.sequences
  episodes.value = catalog.episodes
  edits.value = catalog.edits
}

const resetAll = () => {
  selectedEntityType.value = ''
  selectedAssetTypeId.value = ''
  selectedEpisodeId.value = ''
  selectedSequenceId.value = ''
  selectedEntityId.value = ''
  selectedTaskId.value = ''
  assetTypes.value = []
  assets.value = []
  shots.value = []
  sequences.value = []
  episodes.value = []
  edits.value = []
  tasks.value = []
}

const resetBelow = (level: number) => {
  if (level <= 1) {
    selectedAssetTypeId.value = ''
    selectedEpisodeId.value = ''
  }
  if (level <= 2) selectedSequenceId.value = ''
  if (level <= 3) selectedEntityId.value = ''
  if (level <= 4) {
    selectedTaskId.value = ''
    tasks.value = []
  }
}

const fetchEntityData = async () => {
  if (!props.projectId) return
  isLoadingOptions.value = true
  try {
    applyCatalog(await host.loadEntityCatalogs(props.projectId))
  } catch (error) {
    console.error('Error fetching entity data:', error)
  } finally {
    isLoadingOptions.value = false
  }
}

const initializeFromTaskId = async (taskId: string) => {
  if (!taskId || !props.projectId) return
  try {
    const task = await host.loadTask(taskId)
    const entityId = task.entity_id || task.entity?.id
    if (!entityId) return

    const entityTypeName = task.entity_type?.name || task.entity_type_name || ''
    const catalog = await host.loadEntityCatalogs(props.projectId)
    applyCatalog(catalog)
    mergeTaskEntitiesIntoCatalog(task)

    if (entityTypeName === 'Asset') {
      selectedEntityType.value = 'Asset'
      selectedAssetTypeId.value =
        task.entity?.entity_type_id || task.entity_type?.id || ''
      selectedEntityId.value = entityId
    } else if (entityTypeName === 'Shot') {
      selectedEntityType.value = 'Shot'
      if (isTvShow.value) {
        selectedEpisodeId.value =
          task.episode?.id ||
          asEpisodeId(task.episode_id) ||
          asEpisodeId(route.params.episode_id) ||
          ''
      }
      selectedSequenceId.value =
        task.sequence?.id || task.entity?.parent_id || ''
      selectedEntityId.value = entityId
    } else if (entityTypeName === 'Sequence') {
      selectedEntityType.value = 'Sequence'
      if (isTvShow.value) {
        selectedEpisodeId.value =
          task.entity?.parent_id ||
          task.episode?.id ||
          asEpisodeId(task.episode_id) ||
          asEpisodeId(route.params.episode_id) ||
          ''
      }
      selectedEntityId.value = entityId
    } else if (entityTypeName === 'Episode') {
      selectedEntityType.value = 'Episode'
      selectedEntityId.value = entityId
    } else if (entityTypeName === 'Edit') {
      selectedEntityType.value = 'Edit'
      if (isTvShow.value) {
        selectedEpisodeId.value =
          task.episode?.id ||
          task.entity?.parent_id ||
          asEpisodeId(task.episode_id) ||
          asEpisodeId(route.params.episode_id) ||
          ''
      }
      selectedEntityId.value = entityId
    } else {
      const asset = catalog.assets.find((a) => a.id === entityId)
      const shot = catalog.shots.find((s) => s.id === entityId)
      const sequence = sequences.value.find((s) => s.id === entityId)
      const episode = episodes.value.find((e) => e.id === entityId)
      const edit = edits.value.find((e) => e.id === entityId)
      if (asset) {
        selectedEntityType.value = 'Asset'
        selectedAssetTypeId.value = asset.entity_type_id || ''
        selectedEntityId.value = asset.id
      } else if (shot) {
        selectedEntityType.value = 'Shot'
        const parentSequence = sequences.value.find(
          (s) => s.id === (shot.sequence_id || shot.parent_id),
        )
        if (isTvShow.value) {
          selectedEpisodeId.value =
            sequenceEpisodeId(parentSequence) ||
            asEpisodeId(route.params.episode_id) ||
            ''
        }
        selectedSequenceId.value = shot.sequence_id || shot.parent_id || ''
        selectedEntityId.value = shot.id
      } else if (sequence) {
        selectedEntityType.value = 'Sequence'
        if (isTvShow.value) {
          selectedEpisodeId.value =
            sequenceEpisodeId(sequence) ||
            asEpisodeId(route.params.episode_id) ||
            ''
        }
        selectedEntityId.value = sequence.id
      } else if (episode) {
        selectedEntityType.value = 'Episode'
        selectedEntityId.value = episode.id
      } else if (edit) {
        selectedEntityType.value = 'Edit'
        if (isTvShow.value) {
          selectedEpisodeId.value = edit.episode_id || edit.parent_id || ''
        }
        selectedEntityId.value = edit.id
      }
    }

    let entityTasks: EntityTask[] = []
    try {
      entityTasks = await host.loadTasksForEntity(entityId)
    } catch (error) {
      console.error('Error loading tasks for entity:', error)
    }
    if (!Array.isArray(entityTasks)) entityTasks = []
    if (!entityTasks.some((item) => item.id === taskId)) {
      entityTasks = [
        ...entityTasks,
        {
          id: taskId,
          task_type_id: task.task_type_id,
          task_type_name: task.task_type?.name || task.task_type_name,
          task_type: task.task_type,
        },
      ]
    }
    tasks.value = entityTasks
    selectedTaskId.value = taskId
  } catch (error) {
    console.error('Error initializing from task:', error)
  }
}

watch(
  () => props.projectId,
  async (newId) => {
    isInitializing.value = true
    resetAll()
    project.value = null
    taskTypeMap.value = {}
    if (!newId) {
      isInitializing.value = false
      emit('update:taskId', null)
      return
    }
    isLoadingProject.value = true
    try {
      project.value = await host.ensureProduction(newId)
      const map: Record<string, string> = {}
      for (const tt of host.taskTypesFor(newId)) map[tt.id] = tt.name
      taskTypeMap.value = map
      if (props.taskId && project.value) {
        await initializeFromTaskId(props.taskId)
      }
    } catch (error) {
      console.error('Error loading project catalogs:', error)
    }
    isInitializing.value = false
    isLoadingProject.value = false
    emit('update:taskId', selectedTaskId.value || null)
  },
  { immediate: true },
)

watch(
  () => props.taskId,
  async (newTaskId, oldTaskId) => {
    if (!props.projectId || !project.value || isLoadingProject.value) return
    if (newTaskId === oldTaskId) return
    if (newTaskId === selectedTaskId.value) return
    if (!newTaskId) return
    isInitializing.value = true
    try {
      await initializeFromTaskId(newTaskId)
    } finally {
      isInitializing.value = false
      emit('update:taskId', selectedTaskId.value || null)
    }
  },
)

watch(selectedEntityType, async (newType) => {
  if (isInitializing.value) return
  resetBelow(1)
  if (!newType) return
  await fetchEntityData()
  const routeEpisodeId = asEpisodeId(route.params.episode_id)
  if (
    isTvShow.value &&
    routeEpisodeId &&
    ['Shot', 'Sequence', 'Edit'].includes(newType) &&
    !selectedEpisodeId.value
  ) {
    selectedEpisodeId.value = routeEpisodeId
  }
})

watch(selectedAssetTypeId, () => {
  if (isInitializing.value) return
  resetBelow(3)
})

watch(selectedEpisodeId, () => {
  if (isInitializing.value) return
  resetBelow(2)
})

watch(selectedSequenceId, () => {
  if (isInitializing.value) return
  resetBelow(3)
})

watch(selectedEntityId, async (newId) => {
  if (isInitializing.value) return
  selectedTaskId.value = ''
  tasks.value = []
  if (!newId) return
  isLoadingTasks.value = true
  try {
    tasks.value = await host.loadTasksForEntity(newId)
  } catch (error) {
    console.error('Error fetching tasks:', error)
  } finally {
    isLoadingTasks.value = false
  }
})

watch(selectedTaskId, (newId) => {
  if (isInitializing.value) return
  emit('update:taskId', newId || null)
})
</script>

<template>
  <div class="task-selector">
    <p v-if="!projectId" class="page-subtitle">
      {{ t('tickets.create.select_project_first') }}
    </p>

    <template v-else-if="project || isLoadingProject">
      <div class="field">
        <label class="label">{{ t('custom_actions.fields.entity_type') }}</label>
        <p class="control">
          <span class="select is-fullwidth">
            <select
              v-model="selectedEntityType"
              :disabled="disabled || isLoadingProject"
            >
              <option value="">
                {{ t('tickets.create.entity_type_placeholder') }}
              </option>
              <option
                v-for="opt in entityTypeOptions"
                :key="opt.value"
                :value="opt.value"
              >
                {{ opt.label }}
              </option>
            </select>
          </span>
        </p>
      </div>

      <template v-if="selectedEntityType === 'Asset'">
        <div class="field">
          <label class="label">{{ t('entities.build_filter.asset_type') }}</label>
          <p class="control">
            <span class="select is-fullwidth">
              <select
                v-model="selectedAssetTypeId"
                :disabled="disabled || isLoadingOptions"
              >
                <option value="">
                  {{ t('library.select_asset_type') }}
                </option>
                <option
                  v-for="opt in assetTypeOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div v-if="selectedAssetTypeId" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.asset') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select v-model="selectedEntityId" :disabled="disabled">
                <option value="">
                  {{ t('tickets.create.entity_placeholder') }}
                </option>
                <option
                  v-for="opt in filteredAssetOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
      </template>

      <template v-if="selectedEntityType === 'Shot'">
        <div v-if="isTvShow" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.episode') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select
                v-model="selectedEpisodeId"
                :disabled="disabled || isLoadingOptions"
              >
                <option value="">
                  {{ t('tickets.create.episode_placeholder') }}
                </option>
                <option
                  v-for="opt in episodeOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div v-if="!isTvShow || selectedEpisodeId" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.sequence') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select v-model="selectedSequenceId" :disabled="disabled">
                <option value="">
                  {{ t('tickets.create.sequence_placeholder') }}
                </option>
                <option
                  v-for="opt in filteredSequenceOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div v-if="selectedSequenceId" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.shot') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select v-model="selectedEntityId" :disabled="disabled">
                <option value="">
                  {{ t('tickets.create.entity_placeholder') }}
                </option>
                <option
                  v-for="opt in filteredShotOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
      </template>

      <template v-if="selectedEntityType === 'Sequence'">
        <div v-if="isTvShow" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.episode') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select
                v-model="selectedEpisodeId"
                :disabled="disabled || isLoadingOptions"
              >
                <option value="">
                  {{ t('tickets.create.episode_placeholder') }}
                </option>
                <option
                  v-for="opt in episodeOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div v-if="!isTvShow || selectedEpisodeId" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.sequence') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select v-model="selectedEntityId" :disabled="disabled">
                <option value="">
                  {{ t('tickets.create.entity_placeholder') }}
                </option>
                <option
                  v-for="opt in filteredSequenceOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
      </template>

      <template v-if="selectedEntityType === 'Episode'">
        <div class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.episode') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select
                v-model="selectedEntityId"
                :disabled="disabled || isLoadingOptions"
              >
                <option value="">
                  {{ t('tickets.create.episode_placeholder') }}
                </option>
                <option
                  v-for="opt in episodeOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
      </template>

      <template v-if="selectedEntityType === 'Edit'">
        <div v-if="isTvShow" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.episode') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select
                v-model="selectedEpisodeId"
                :disabled="disabled || isLoadingOptions"
              >
                <option value="">
                  {{ t('tickets.create.episode_placeholder') }}
                </option>
                <option
                  v-for="opt in episodeOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div v-if="!isTvShow || selectedEpisodeId" class="field">
          <label class="label">
            {{ t('custom_actions.entity_types.edit') }}
          </label>
          <p class="control">
            <span class="select is-fullwidth">
              <select v-model="selectedEntityId" :disabled="disabled">
                <option value="">
                  {{ t('tickets.create.entity_placeholder') }}
                </option>
                <option
                  v-for="opt in filteredEditOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </span>
          </p>
        </div>
      </template>

      <div v-if="selectedEntityId" class="field">
        <label class="label">{{ t('tickets.create.task') }}</label>
        <p class="control">
          <span class="select is-fullwidth">
            <select
              v-model="selectedTaskId"
              :disabled="disabled || isLoadingTasks"
            >
              <option value="">
                {{ t('tickets.create.task_placeholder') }}
              </option>
              <option
                v-for="opt in taskOptions"
                :key="opt.value"
                :value="opt.value"
              >
                {{ opt.label }}
              </option>
            </select>
          </span>
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.task-selector {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.select.is-fullwidth,
.select.is-fullwidth select {
  width: 100%;
}
</style>
