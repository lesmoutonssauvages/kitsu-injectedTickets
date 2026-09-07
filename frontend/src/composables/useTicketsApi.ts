import { usePluginContext } from 'kitsu-plugin-kit'
import kitsuClient from 'kitsu-client-js'

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

type KitsuJsClient = {
  get: (path: string) => Promise<unknown>
  post: (path: string, payload: unknown) => Promise<unknown>
  put: (path: string, payload: unknown) => Promise<unknown>
  delete: (path: string) => Promise<unknown>
  api: {
    deleteHeader: (header: string) => void
    axiosInstance: { defaults: { withCredentials: boolean } }
  }
}

let clientInstance: KitsuJsClient | null = null

const getClient = (): KitsuJsClient => {
  if (!clientInstance) {
    clientInstance = kitsuClient.createClient('/api') as KitsuJsClient
    // Browsers forbid setting User-Agent on XHR; kitsu-client-js sets it for Node.
    clientInstance.api.deleteHeader('User-Agent')
    clientInstance.api.axiosInstance.defaults.withCredentials = true
  }
  return clientInstance
}

/** Plugin-owned tickets API via kitsu-client-js — host catalogs come from Vuex. */
export const useTicketsApi = () => {
  const context = usePluginContext()
  const client = getClient()
  const apiBase = () => ticketsApiPath(context.value?.pluginId ?? '')

  const fetchTickets = (
    productionId?: string | null,
    episodeId?: string | null,
  ) => {
    const params = new URLSearchParams()
    if (productionId) params.set('production_id', productionId)
    const ep = asEpisodeId(episodeId)
    if (ep) params.set('episode_id', ep)
    const q = params.toString()
    return client.get(`${apiBase()}${q ? `?${q}` : ''}`) as Promise<Ticket[]>
  }

  const getTicket = (ticketId: string) =>
    client.get(`${apiBase()}/${ticketId}`) as Promise<Ticket>

  const createTicket = (ticketData: Partial<TicketPayload>) =>
    client.post(apiBase(), sanitizeTicketPayload(ticketData)) as Promise<Ticket>

  const updateTicket = (
    ticketId: string,
    ticketData: Partial<TicketPayload>,
  ) =>
    client.put(
      `${apiBase()}/${ticketId}`,
      sanitizeTicketPayload(ticketData),
    ) as Promise<Ticket>

  const deleteTicket = (ticketId: string) =>
    client.delete(`${apiBase()}/${ticketId}`) as Promise<void>

  return {
    fetchTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket,
  }
}
