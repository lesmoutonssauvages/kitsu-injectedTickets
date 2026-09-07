<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ArrowLeft } from 'lucide-vue-next'
import TaskSelector from '../components/TaskSelector.vue'
import { useHostCatalogs } from '../composables/useHostCatalogs'
import {
  useTicketsApi,
  type TicketPayload,
  type TicketStatus,
} from '../composables/useTicketsApi'
import { useTicketsScope } from '../composables/useTicketsScope'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const api = useTicketsApi()
const { openProductions, people, ensureHostCatalogs } = useHostCatalogs()
const { productionId, episodeId } = useTicketsScope()

const isCreate = computed(() => Boolean(route.meta.isCreateTicket))
const ticketId = computed(() => {
  const id = route.params.ticketId
  return typeof id === 'string' ? id : Array.isArray(id) ? id[0] : ''
})

const isLoading = ref(false)
const isSaving = ref(false)
const errorMessage = ref<string | null>(null)

const form = ref({
  title: '',
  text: '',
  status: 'open' as TicketStatus,
  project_id: null as string | null,
  task_id: null as string | null,
  assignee_id: null as string | null,
})

const productionOptions = computed(() =>
  [...openProductions.value].sort((a, b) => a.name.localeCompare(b.name)),
)

const peopleOptions = computed(() =>
  [...people.value].sort((a, b) => a.full_name.localeCompare(b.full_name)),
)

const statusOptions = computed(() => [
  { label: t('tickets.status.open'), value: 'open' },
  { label: t('tickets.status.on_hold'), value: 'on hold' },
  { label: t('tickets.status.closed'), value: 'closed' },
])

const pageTitle = computed(() =>
  isCreate.value
    ? t('tickets.create.page_title')
    : t('tickets.create.edit_page_title'),
)

const resetForm = () => {
  form.value = {
    title: '',
    text: '',
    status: 'open',
    project_id: productionId.value,
    task_id: null,
    assignee_id: null,
  }
}

const loadTicket = async () => {
  if (isCreate.value || !ticketId.value) {
    resetForm()
    return
  }
  isLoading.value = true
  errorMessage.value = null
  try {
    const ticket = await api.getTicket(ticketId.value)
    form.value = {
      title: ticket.title || '',
      text: ticket.text || '',
      status: (ticket.status as TicketStatus) || 'open',
      project_id: ticket.project_id || null,
      task_id: ticket.task_id || null,
      assignee_id: ticket.assignee_id || null,
    }
  } catch (error) {
    console.error(error)
    errorMessage.value = t('main.loading_error')
  } finally {
    isLoading.value = false
  }
}

const save = async () => {
  isSaving.value = true
  errorMessage.value = null
  const payload: TicketPayload = {
    title: form.value.title,
    text: form.value.text,
    status: form.value.status,
    project_id: form.value.project_id,
    task_id: form.value.task_id,
    assignee_id: form.value.assignee_id,
    episode_id: episodeId.value,
  }
  try {
    if (isCreate.value) {
      await api.createTicket(payload)
    } else if (ticketId.value) {
      await api.updateTicket(ticketId.value, payload)
    } else {
      return
    }
    await router.push({ name: 'list' })
  } catch (error) {
    console.error(error)
    errorMessage.value = t('tickets.save_error')
  } finally {
    isSaving.value = false
  }
}

onMounted(async () => {
  await ensureHostCatalogs()
  await loadTicket()
})

watch(
  () => [route.name, ticketId.value],
  () => {
    void loadTicket()
  },
)
</script>

<template>
  <div class="tickets-plugin">
    <div class="flexrow page-header">
      <h1 class="title flexrow-item filler">
        {{ pageTitle }}
      </h1>
      <RouterLink class="button flexrow-item" :to="{ name: 'list' }">
        <span class="icon is-small">
          <ArrowLeft :size="16" />
        </span>
        <span>{{ t('tasks.back_to_list') }}</span>
      </RouterLink>
    </div>

    <p v-if="isLoading" class="has-text-centered mt2">
      {{ t('main.loading') }}
    </p>

    <form v-else class="ticket-form" @submit.prevent="save">
      <div class="field">
        <label class="label" for="ticket-title">
          {{ t('tickets.create.title') }}
        </label>
        <p class="control">
          <input
            id="ticket-title"
            v-model="form.title"
            class="input"
            required
            :placeholder="t('tickets.create.title_placeholder')"
            :disabled="isSaving"
          />
        </p>
      </div>

      <div class="field">
        <label class="label" for="ticket-text">
          {{ t('main.description') }}
        </label>
        <p class="control">
          <textarea
            id="ticket-text"
            v-model="form.text"
            class="textarea"
            rows="5"
            :placeholder="t('tickets.create.description_placeholder')"
            :disabled="isSaving"
          />
        </p>
      </div>

      <div class="field">
        <label class="label" for="ticket-status">
          {{ t('main.status') }}
        </label>
        <p class="control">
          <span class="select is-fullwidth">
            <select
              id="ticket-status"
              v-model="form.status"
              :disabled="isSaving"
            >
              <option
                v-for="opt in statusOptions"
                :key="opt.value"
                :value="opt.value"
              >
                {{ opt.label }}
              </option>
            </select>
          </span>
        </p>
      </div>

      <div class="field">
        <label class="label" for="ticket-project">
          {{ t('main.production') }}
        </label>
        <p class="control">
          <span class="select is-fullwidth">
            <select
              id="ticket-project"
              v-model="form.project_id"
              :disabled="isSaving || Boolean(productionId)"
            >
              <option :value="null">
                {{ t('library.select_production') }}
              </option>
              <option
                v-for="p in productionOptions"
                :key="p.id"
                :value="p.id"
              >
                {{ p.name }}
              </option>
            </select>
          </span>
        </p>
      </div>

      <div class="field">
        <label class="label">{{ t('tickets.create.task') }}</label>
        <TaskSelector
          :project-id="form.project_id"
          :task-id="form.task_id"
          :disabled="isSaving"
          @update:task-id="form.task_id = $event"
        />
      </div>

      <div class="field">
        <label class="label" for="ticket-assignee">
          {{ t('tasks.fields.assignees') }}
        </label>
        <p class="control">
          <span class="select is-fullwidth">
            <select
              id="ticket-assignee"
              v-model="form.assignee_id"
              :disabled="isSaving"
            >
              <option :value="null">
                {{ t('people.select_person') }}
              </option>
              <option
                v-for="p in peopleOptions"
                :key="p.id"
                :value="p.id"
              >
                {{ p.full_name }}
              </option>
            </select>
          </span>
        </p>
      </div>

      <p v-if="errorMessage" class="error mb1">{{ errorMessage }}</p>

      <p class="has-text-right">
        <button
          type="submit"
          class="button is-primary"
          :class="{ 'is-loading': isSaving }"
          :disabled="isSaving"
        >
          {{
            isCreate ? t('tickets.create.submit') : t('main.save')
          }}
        </button>
        <RouterLink class="button is-link" :to="{ name: 'list' }">
          {{ t('main.cancel') }}
        </RouterLink>
      </p>
    </form>
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

.select.is-fullwidth,
.select.is-fullwidth select {
  width: 100%;
}
</style>
