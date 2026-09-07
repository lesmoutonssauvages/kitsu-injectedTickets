<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {
  CalendarClock,
  CalendarPlus,
  ClipboardList,
  Factory,
  Pencil,
  Ticket,
  Trash2,
  Tv,
  UserCheck,
  UserPlus,
} from 'lucide-vue-next'
import type { Person, Production, Ticket as TicketRecord } from '../composables/useTicketsApi'

const props = defineProps<{
  tickets: TicketRecord[]
  productions: Production[]
  people: Person[]
  deletingTicketId: string | null
}>()

const emit = defineEmits<{
  delete: [ticket: TicketRecord]
}>()

const { t } = useI18n()

const productionMap = computed(() => {
  const map: Record<string, string> = {}
  for (const p of props.productions) map[p.id] = p.name
  return map
})

const personMap = computed(() => {
  const map: Record<string, string> = {}
  for (const p of props.people) map[p.id] = p.full_name
  return map
})

const isDeleteOpen = ref(false)
const ticketToDelete = ref<TicketRecord | null>(null)

const confirmDelete = (ticket: TicketRecord) => {
  ticketToDelete.value = ticket
  isDeleteOpen.value = true
}

const cancelDelete = () => {
  isDeleteOpen.value = false
  ticketToDelete.value = null
}

const handleDelete = () => {
  const ticket = ticketToDelete.value
  isDeleteOpen.value = false
  ticketToDelete.value = null
  if (ticket) emit('delete', ticket)
}

const statusTagClass = (status?: string) => {
  if (!status) return ''
  const s = status.toLowerCase()
  if (s === 'open') return 'is-open'
  if (s === 'on hold') return 'is-on-hold'
  if (s === 'closed') return 'is-closed'
  return ''
}

const formatStatus = (status?: string) => {
  if (!status) return ''
  const map: Record<string, string> = {
    open: 'tickets.status.open',
    'on hold': 'tickets.status.on_hold',
    closed: 'tickets.status.closed',
  }
  const key = map[status.toLowerCase()]
  return key ? t(key) : status
}

const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return dateString
  }
}

const formatId = (id?: string | null) => (id ? `${id.substring(0, 8)}…` : '')

const productionName = (id?: string | null) =>
  (id && productionMap.value[id]) || formatId(id)
const personName = (id?: string | null) =>
  (id && personMap.value[id]) || formatId(id)
</script>

<template>
  <div v-if="tickets.length === 0" class="empty-state">
    <Ticket :size="48" class="empty-icon" />
    <p class="empty-text">{{ t('tickets.no_tickets') }}</p>
  </div>

  <div v-else class="tickets-list">
    <article
      v-for="ticket in tickets"
      :key="ticket.id"
      class="ticket-card"
    >
      <div class="ticket-content">
        <div class="ticket-header">
          <h3 class="ticket-title">
            {{ ticket.title || t('tickets.untitled') }}
          </h3>
          <div class="ticket-actions">
            <span
              class="tag ticket-status-tag"
              :class="statusTagClass(ticket.status)"
            >
              {{ formatStatus(ticket.status) }}
            </span>
            <RouterLink
              class="icon-button"
              :to="{ name: 'detail', params: { ticketId: ticket.id } }"
              :title="t('main.edit')"
            >
              <Pencil :size="16" />
            </RouterLink>
            <button
              type="button"
              class="icon-button is-danger"
              :class="{ 'is-loading': deletingTicketId === ticket.id }"
              :disabled="deletingTicketId === ticket.id"
              :title="t('main.delete')"
              @click="confirmDelete(ticket)"
            >
              <Trash2 :size="16" />
            </button>
          </div>
        </div>

        <p v-if="ticket.text" class="ticket-text">
          {{ ticket.text }}
        </p>

        <div class="ticket-footer">
          <div class="ticket-meta">
            <span v-if="ticket.task_id" class="meta-item">
              <ClipboardList :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.task') }}</span>
              <span class="meta-value">{{ formatId(ticket.task_id) }}</span>
            </span>
            <span v-if="ticket.person_id" class="meta-item">
              <UserPlus :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.created_by') }}</span>
              <span class="meta-value">{{ personName(ticket.person_id) }}</span>
            </span>
            <span v-if="ticket.assignee_id" class="meta-item">
              <UserCheck :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.assigned_to') }}</span>
              <span class="meta-value">{{ personName(ticket.assignee_id) }}</span>
            </span>
            <span v-if="ticket.project_id" class="meta-item">
              <Factory :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.production') }}</span>
              <span class="meta-value">{{ productionName(ticket.project_id) }}</span>
            </span>
            <span v-if="ticket.episode_name || ticket.episode_id" class="meta-item">
              <Tv :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.episode') }}</span>
              <span class="meta-value">
                {{ ticket.episode_name || formatId(ticket.episode_id) }}
              </span>
            </span>
            <span v-if="ticket.sequence_name" class="meta-item">
              <ClipboardList :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.sequence') }}</span>
              <span class="meta-value">{{ ticket.sequence_name }}</span>
            </span>
          </div>
          <div class="ticket-dates">
            <div v-if="ticket.created_at" class="ticket-date">
              <CalendarPlus :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.created') }}</span>
              <span>{{ formatDate(ticket.created_at) }}</span>
            </div>
            <div v-if="ticket.updated_at" class="ticket-date">
              <CalendarClock :size="16" class="meta-icon" />
              <span class="meta-label">{{ t('tickets.fields.updated') }}</span>
              <span>{{ formatDate(ticket.updated_at) }}</span>
            </div>
          </div>
        </div>
      </div>
    </article>

    <p class="tickets-count footer-count">
      {{ t('tickets.count', tickets.length) }}
    </p>
  </div>

  <div
    class="modal delete-modal"
    :class="{ 'is-active': isDeleteOpen }"
  >
    <div class="modal-background" @click="cancelDelete" />
    <div class="modal-content">
      <div class="box">
        <p class="text">
          {{ t('tickets.delete.confirm_message') }}
        </p>
        <p class="has-text-right">
          <button
            type="button"
            class="button is-danger"
            @click="handleDelete"
          >
            {{ t('tickets.delete.confirm') }}
          </button>
          <button
            type="button"
            class="button is-link"
            @click="cancelDelete"
          >
            {{ t('tickets.delete.cancel') }}
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--text-muted);
}

.empty-icon {
  margin-bottom: 1rem;
  color: var(--text-muted);
}

.empty-text {
  color: var(--text-secondary);
  margin: 0;
  font-size: 1rem;
}

.tickets-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ticket-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.ticket-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.ticket-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 640px) {
  .ticket-content {
    padding: 1.5rem;
  }
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.ticket-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-heading);
  margin: 0;
  flex: 1;
  min-width: 200px;
}

.ticket-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.ticket-status-tag {
  font-weight: 500;
  text-transform: capitalize;
}

.ticket-status-tag.is-open {
  background-color: #67be4b;
  color: #fff;
}

.ticket-status-tag.is-on-hold {
  background-color: #f2c94c;
  color: #363636;
}

.ticket-status-tag.is-closed {
  background-color: #999;
  color: #fff;
}

.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  text-decoration: none;
}

.icon-button:hover {
  background: var(--border-light);
  color: var(--text-heading);
}

.icon-button.is-danger:hover {
  background: rgba(255, 82, 82, 0.12);
  color: #ff5252;
}

.ticket-text {
  color: var(--text-primary);
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ticket-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-light);
}

.ticket-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.meta-item,
.ticket-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.meta-label {
  font-weight: 500;
  color: var(--text-muted);
}

.meta-value {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.8125rem;
  color: var(--text-primary);
}

.ticket-dates {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.meta-icon {
  flex-shrink: 0;
}

.tickets-count {
  color: var(--text-secondary);
  margin: 0;
  font-size: 1rem;
}

.footer-count {
  padding-top: 1rem;
  text-align: center;
  width: 100%;
}

@media (max-width: 640px) {
  .ticket-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .ticket-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .ticket-dates {
    align-items: flex-start;
    width: 100%;
  }

  .ticket-title {
    font-size: 1.125rem;
  }
}
</style>
