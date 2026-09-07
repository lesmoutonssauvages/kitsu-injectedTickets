<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Plus } from 'lucide-vue-next'
import TicketList from '../components/TicketList.vue'
import { useHostCatalogs, type HostTask } from '../composables/useHostCatalogs'
import { useTicketsApi, type Ticket } from '../composables/useTicketsApi'
import { useTicketsScope } from '../composables/useTicketsScope'

const { t } = useI18n()
const api = useTicketsApi()
const {
  openProductions,
  people,
  episodeNameById,
  ensureHostCatalogs,
  loadEpisodes,
  getCachedTask,
  loadTask,
} = useHostCatalogs()
const { productionId, episodeId } = useTicketsScope()

const tickets = ref<Ticket[]>([])
const isLoading = ref(true)
const loadError = ref(false)
const deletingTicketId = ref<string | null>(null)
/** task_id → { episode_name, sequence_name } from host loadTask. */
const taskContextById = ref<
  Record<string, { episode_name: string | null; sequence_name: string | null }>
>({})

const isStudioPage = computed(() => !productionId.value)

const filteredTickets = computed(() =>
  tickets.value
    .filter((ticket) => {
      if (productionId.value && ticket.project_id !== productionId.value) {
        return false
      }
      if (episodeId.value && ticket.episode_id !== episodeId.value) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      const ta = a.created_at ? Date.parse(a.created_at) : 0
      const tb = b.created_at ? Date.parse(b.created_at) : 0
      return tb - ta
    }),
)

const displayTickets = computed(() =>
  filteredTickets.value.map((ticket) => {
    const ctx = ticket.task_id ? taskContextById.value[ticket.task_id] : null
    return {
      ...ticket,
      episode_name:
        (ticket.episode_id && episodeNameById.value[ticket.episode_id]) ||
        ctx?.episode_name ||
        null,
      sequence_name: ctx?.sequence_name || null,
    }
  }),
)

const contextFromTask = (task: HostTask | undefined) => {
  if (!task) return { episode_name: null, sequence_name: null }
  const sequence_name =
    task.sequence?.name ||
    (task.entity_type?.name === 'Sequence' ? task.entity?.name : null) ||
    task.sequence_name ||
    null
  const episode_name = task.episode?.name || task.episode_name || null
  return { episode_name, sequence_name }
}

const resolveTaskContexts = async (list: Ticket[]) => {
  if (!Array.isArray(list) || list.length === 0) {
    taskContextById.value = {}
    return
  }
  await loadEpisodes()
  const next = { ...taskContextById.value }
  const taskIds = [
    ...new Set(list.map((ticket) => ticket.task_id).filter(Boolean)),
  ] as string[]
  await Promise.all(
    taskIds.map(async (taskId) => {
      if (next[taskId]) return
      try {
        const cached = getCachedTask(taskId)
        const task =
          cached?.sequence || cached?.episode || cached?.sequence_name
            ? cached
            : await loadTask(taskId)
        next[taskId] = contextFromTask(task)
      } catch (error) {
        console.error('Error resolving task context:', taskId, error)
        next[taskId] = { episode_name: null, sequence_name: null }
      }
    }),
  )
  taskContextById.value = next
}

const fetchData = async () => {
  isLoading.value = true
  loadError.value = false
  try {
    await ensureHostCatalogs()
    const result = await api.fetchTickets(productionId.value, episodeId.value)
    if (!Array.isArray(result)) {
      throw new Error(
        (result as { message?: string } | null)?.message ||
          'Unexpected tickets response',
      )
    }
    tickets.value = result
    await resolveTaskContexts(tickets.value)
  } catch (error) {
    console.error('Error fetching tickets:', error)
    loadError.value = true
    tickets.value = []
    taskContextById.value = {}
  } finally {
    isLoading.value = false
  }
}

const handleDelete = async (ticket: Ticket) => {
  deletingTicketId.value = ticket.id
  try {
    await api.deleteTicket(ticket.id)
    tickets.value = tickets.value.filter((item) => item.id !== ticket.id)
  } catch (error) {
    console.error('Error deleting ticket:', error)
  } finally {
    deletingTicketId.value = null
  }
}

watch([productionId, episodeId], () => {
  void fetchData()
}, { immediate: true })
</script>

<template>
  <div class="tickets-plugin">
    <div class="tickets-header">
      <div class="header-content">
        <div>
          <h1 class="tickets-title">{{ t('tickets.title') }}</h1>
          <p v-if="!isLoading && !loadError" class="tickets-count">
            {{ t('tickets.count', filteredTickets.length) }}
            <span v-if="isStudioPage">
              {{ t('tickets.all_productions') }}
            </span>
          </p>
        </div>
        <RouterLink class="button" :to="{ name: 'new' }">
          <span class="icon is-small">
            <Plus :size="16" />
          </span>
          <span>{{ t('tickets.create.submit') }}</span>
        </RouterLink>
      </div>
    </div>

    <p v-if="isLoading" class="has-text-centered mt2">
      {{ t('main.loading') }}
    </p>
    <p v-else-if="loadError" class="has-text-centered mt2">
      <span class="tag is-danger">{{ t('main.loading_error') }}</span>
    </p>
    <TicketList
      v-else
      :tickets="displayTickets"
      :productions="openProductions"
      :people="people"
      :deleting-ticket-id="deletingTicketId"
      @delete="handleDelete"
    />
  </div>
</template>

<style scoped>
.tickets-plugin {
  --bg-page: var(--background, #f9f9f9);
  --bg-card: var(--background-alt, #ffffff);
  --text-heading: var(--text-strong, #222);
  --text-primary: var(--text, #333);
  --text-secondary: var(--text-alt, #888);
  --text-muted: var(--text-alt, #555);
  --border-light: var(--border, #eee);
  --border-primary: var(--border, #e5e5e5);
  --accent-green: #00aa3c;

  max-width: 768px;
  margin: 0 auto;
}

.tickets-header {
  margin-bottom: 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.tickets-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--text-heading);
}

.tickets-count {
  color: var(--text-secondary);
  margin: 0;
  font-size: 1rem;
}

@media (max-width: 640px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
