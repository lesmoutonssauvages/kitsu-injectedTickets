import { definePlugin } from '../src-plugin-kit/front'

import en from './locales/en'
import fr from './locales/fr'

const listView = () => import('./views/TicketListView.vue')
const detailView = () => import('./views/TicketDetailView.vue')

// Same pages in the three scopes; the host namespaces the names internally.
const pages = [
  { path: '', name: 'list', component: listView },
  {
    path: 'new',
    name: 'new',
    component: detailView,
    meta: { isCreateTicket: true },
  },
  { path: ':ticketId', name: 'detail', component: detailView },
]

export default definePlugin({
  messages: { en, fr },
  routes: {
    studio: pages,
    production: pages,
    episode: pages,
  },
})
