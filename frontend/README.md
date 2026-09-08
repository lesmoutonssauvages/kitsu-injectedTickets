# Injected Tickets plugin frontend

Vue 3 plugin built as a library with
[`kitsu-plugin-kit`](https://github.com/lesmoutonssauvages/kitsu-plugin-kit).
It runs inside the Kitsu host and borrows its Vue, router, store and i18n
instances. In development it has its **own Vite server**; the host loads the
entry over HTTP when `KITSU_PLUGIN_DEV_URLS` is set.

Zou marks the plugin as injected when `dist/plugin.js` exists (no
`injected` flag in `manifest.toml`). The stylesheet is inlined into that
bundle and served at `/api/plugins/injectedTickets/frontend/plugin.js`.

## Scripts

```bash
pnpm install                                              # from monorepo root
pnpm -F injected-tickets-plugin-frontend dev              # Vite on :5175 (HMR)
pnpm -F injected-tickets-plugin-frontend build            # → dist/plugin.js
pnpm -F injected-tickets-plugin-frontend watch            # rebuild on change
```

```bash
KITSU_PLUGIN_DEV_URLS='injectedTickets=http://127.0.0.1:5175/src/index.ts' \
  npm run dev   # in the Kitsu app
```

Keep a built (or stub) `dist/plugin.js` so the user context stays
`"injected": true` while using DEV_URLS.

## Vite

```ts
import { defineKitsuPluginConfig } from 'kitsu-plugin-kit/vite'
import { defineConfig } from 'vite'

export default defineConfig(
  defineKitsuPluginConfig({
    server: { port: 5175, hmr: { clientPort: 5175 }, watch: { usePolling: true } },
  }),
)
```

`pluginId` comes from `../manifest.toml`. `vue` / `vue-router` / `vuex` /
`vue-i18n` stay external and are read from `globalThis.__KITSU_SHARED__`.

## Layout

- `src/index.ts` — `definePlugin({ messages, routes })` with the same pages
  under `studio`, `production`, and `episode` (explicit; omit would fall back
  to copying `production`).
- `src/composables/useTicketsScope.ts` — `productionId` / `episodeId` from
  `usePluginContext()` and route params (`episode_id=all` is not a UUID filter).
- `src/composables/useHostCatalogs.ts` — productions, people, entities from
  host Vuex.
- `src/composables/useTicketsApi.ts` — Zou plugin REST endpoints.
- Navigation — short names `list` / `new` / `detail`; current short name on
  `route.meta.pluginPage`.

See the [kit README](https://github.com/lesmoutonssauvages/kitsu-plugin-kit)
for slots, providers, store modules, and host constraints.
