import { usePluginContext } from '../../src-plugin-kit/front'
import { createClient } from '@cgwire/kitsu-client'

const ticketsApiPath = pluginId => `/plugins/${pluginId}/tickets`

const asId = v => (typeof v === 'string' && v.length > 0 ? v : null)

/** Kitsu uses episode_id=all on the all-episodes plugin URL — not a UUID. */
export const asEpisodeId = v => {
  const id = asId(v)
  return id && id !== 'all' ? id : null
}

const sanitizeTicketPayload = data => ({
  title: typeof data.title === 'string' ? data.title : '',
  text: typeof data.text === 'string' ? data.text : '',
  status: asId(data.status) || 'open',
  task_id: asId(data.task_id),
  assignee_id: asId(data.assignee_id),
  project_id: asId(data.project_id),
  episode_id: asEpisodeId(data.episode_id),
})

let clientInstance = null

const getClient = () => {
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

  const fetchTickets = (productionId, episodeId) => {
    const query = {}
    if (productionId) query.production_id = productionId
    const ep = asEpisodeId(episodeId)
    if (ep) query.episode_id = ep
    return http.get(apiBase(), query, {})
  }

  const getTicket = ticketId =>
    http.get(`${apiBase()}/${ticketId}`, undefined, {})

  const createTicket = ticketData =>
    http.post(apiBase(), sanitizeTicketPayload(ticketData), {})

  const updateTicket = (ticketId, ticketData) =>
    http.put(
      `${apiBase()}/${ticketId}`,
      sanitizeTicketPayload(ticketData),
      {},
    )

  const deleteTicket = ticketId =>
    http.del(`${apiBase()}/${ticketId}`, undefined, {})

  return {
    fetchTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket,
  }
}
