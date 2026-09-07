# Injected Tickets plugin frontend

Vue 3 plugin built as a library with `kitsu-plugin-kit`. It runs inside the
Kitsu host and borrows its Vue, router, store and i18n instances. In
development it has its **own Vite server**; the host loads the entry over HTTP.

```bash
pnpm install                                              # from monorepo root
pnpm -F injected-tickets-plugin-frontend dev              # Vite on :5175 (HMR)
pnpm -F injected-tickets-plugin-frontend build            # dist/plugin.js
pnpm -F injected-tickets-plugin-frontend watch            # rebuild on change
```

```bash
KITSU_PLUGIN_DEV_URLS='injectedTickets=http://127.0.0.1:5175/src/index.ts' \
  pnpm -F kitsu dev
```

Zou serves the production build at `/api/plugins/injectedTickets/frontend/plugin.js`
when `injected = true`. The stylesheet is inlined into `plugin.js`.

Docker Compose wires `KITSU_PLUGIN_DEV_URLS` on the `kitsu` service; run the
plugin Vite on the host (`pnpm -F injected-tickets-plugin-frontend dev`).

## Layout

- `src/index.ts` — `definePlugin()` call: messages and routes.
- `src/composables/useTicketsScope.ts` — current production / episode for API
  filters. Links use Vue Router (`{ name: 'list' }`, `{ name: 'new' }`, …).
- `src/composables/useHostCatalogs.ts` — reads productions, people, entities
  from the host Vuex store rather than refetching them.
- `src/composables/useTicketsApi.ts` — the plugin's own Zou endpoints.
