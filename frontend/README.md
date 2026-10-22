# Injected Tickets plugin frontend

Vue 3 injected plugin (plain JS) that runs inside the Kitsu host and borrows
its Vue, router, store and i18n via `globalThis.__KITSU_SHARED__`.

Host / Zou contracts (source of truth):

- [Kitsu `feat/flagged-inject-plugin`](https://github.com/lesmoutonssauvages/kitsu/tree/feat/flagged-inject-plugin) — `src/lib/plugins/*`
- [Zou `feature/plugin-integration-flag`](https://github.com/lesmoutonssauvages/zou/tree/feature/plugin-integration-flag) — `injected` when `dist/plugin.js` exists

Authoring helpers live in `src-plugin-kit/front/` and Vite helpers in
`src-plugin-kit/vite/` (no `kitsu-plugin-kit` dependency). The default export
is `{ activate, deactivate }`.

In development the plugin has its **own Vite server**; the host loads the
entry over HTTP when `KITSU_PLUGIN_DEV_URLS` is set.

## Scripts

```bash
cd frontend
npm install
npm run dev      # Vite on :5175 (HMR)
npm run build    # → dist/plugin.js
npm run watch    # rebuild on change
```

```bash
KITSU_PLUGIN_DEV_URLS='injectedTickets=http://127.0.0.1:5175/src/index.js' \
  npm run dev   # in the Kitsu app
```

Keep a built (or stub) `dist/plugin.js` so the user context stays
`"injected": true` while using DEV_URLS. Pass the full `/src/index.js` path
(the host origin-only default is still `/src/index.ts`).

## Vite

```js
import { defineKitsuPluginConfig } from './src-plugin-kit/vite/index.js'
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

- `src/index.js` — `definePlugin({ messages, routes })` with the same pages
  under `studio`, `production`, and `episode`
- `src-plugin-kit/front/` — `definePlugin`, `usePluginContext` (meta key `kitsuPlugin`)
- `src-plugin-kit/vite/` — `defineKitsuPluginConfig` and build helpers
- `src/composables/useTicketsScope.js` — production / episode from context + route
- `src/composables/useHostCatalogs.js` — host Vuex catalogs
- `src/composables/useTicketsApi.js` — Zou plugin REST endpoints
- Navigation — short names `list` / `new` / `detail`
