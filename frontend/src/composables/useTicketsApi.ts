import { usePluginContext } from '@lesmoutonssauvages/kitsu-plugin-kit'
import { createClient, type KitsuClient } from '@cgwire/kitsu-client'

const ticketsApiPath = (pluginId: string): string =>
  `/plugins/${pluginId}/tickets`

export type TicketStatus = 'open' | 'on hold' | 'closed'

export type Ticket = {
  id: string
  title: string
  text: string
  status: TicketStatus | string
  task_id?: string | null
  assignee_id?: string | null
  project_id?: string | null
  episode_id?: string | null
  person_id?: string | null
  created_at?: string
  updated_at?: string
  episode_name?: string | null
  sequence_name?: string | null
}

export type TicketPayload = {
  title: string
  text: string
  status: TicketStatus
  task_id: string | null
  assignee_id: string | null
  project_id: string | null
  episode_id: string | null
}

export type Person = {
  id: string
  full_name: string
}

export type Production = {
  id: string
  name: string
  production_type?: string
}

const asId = (v: unknown): string | null =>
  typeof v === 'string' && v.length > 0 ? v : null

/** Kitsu uses episode_id=all on the all-episodes plugin URL — not a UUID. */
export const asEpisodeId = (v: unknown): string | null => {
  const id = asId(v)
  return id && id !== 'all' ? id : null
}

const sanitizeTicketPayload = (
  data: Partial<TicketPayload>,
): TicketPayload => ({
  title: typeof data.title === 'string' ? data.title : '',
  text: typeof data.text === 'string' ? data.text : '',
  status: (asId(data.status) as TicketStatus) || 'open',
  task_id: asId(data.task_id),
  assignee_id: asId(data.assignee_id),
  project_id: asId(data.project_id),
  episode_id: asEpisodeId(data.episode_id),
})

let clientInstance: KitsuClient | null = null

const getClient = (): KitsuClient => {
  if (!clientInstance) {
    // Cookie auth: plugin runs inside Kitsu, reuse the browser session.
    clientInstance = createClient({ host: '/api', auth: 'cookie' })
  }
  return clientInstance
}

/** Plugin-owned tickets API via @cgwire/kitsu-client — host catalogs come from Vuex. */
export const useTicketsApi = () => {
  const context = usePluginContext()
  const { http } = getClient()
  const apiBase = () => ticketsApiPath(context.value?.pluginId ?? '')

  const fetchTickets = (
    productionId?: string | null,
    episodeId?: string | null,
  ) => {
    const query: Record<string, string> = {}
    if (productionId) query.production_id = productionId
    const ep = asEpisodeId(episodeId)
    if (ep) query.episode_id = ep
    return http.get(apiBase(), query, {}) as Promise<Ticket[]>
  }

  const getTicket = (ticketId: string) =>
    http.get(`${apiBase()}/${ticketId}`, undefined, {}) as Promise<Ticket>

  const createTicket = (ticketData: Partial<TicketPayload>) =>
    http.post(
      apiBase(),
      sanitizeTicketPayload(ticketData),
      {},
    ) as Promise<Ticket>

  const updateTicket = (
    ticketId: string,
    ticketData: Partial<TicketPayload>,
  ) =>
    http.put(
      `${apiBase()}/${ticketId}`,
      sanitizeTicketPayload(ticketData),
      {},
    ) as Promise<Ticket>

  const deleteTicket = (ticketId: string) =>
    http.del(`${apiBase()}/${ticketId}`, undefined, {}) as Promise<void>

  return {
    fetchTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket,
  }
}
