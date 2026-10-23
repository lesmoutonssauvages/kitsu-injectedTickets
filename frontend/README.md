# Injected Tickets plugin frontend

Vue 3 injected plugin (plain JS) that runs inside the Kitsu host and borrows
its Vue, router, store and i18n via `globalThis.__KITSU_SHARED__`.

Host / Zou contracts (source of truth):

- [Kitsu `feat/plugins-injected`](https://github.com/lesmoutonssauvages/kitsu/tree/feat/plugins-injected) — `src/lib/plugins/*`
- [Zou `feature/plugin-injected`](https://github.com/lesmoutonssauvages/zou/tree/feature/plugin-injected) — `injected` when `dist/plugin.js` exists

## `src-plugin-kit/` (vendored, not an npm package)

Authoring helpers live in `src-plugin-kit/front/` and Vite helpers in
`src-plugin-kit/vite/`. They are **copied into this repo** on purpose so we
do **not** pull a shared npm kit (`@…/kitsu-plugin-kit`). That keeps Kitsu /
Zou PR recipes light for now: no private registry, no kit version to co-bump
with the host, and the contract stays next to the sample plugin.

**Longer term**, replace this folder with a dependency on a published kit
package once it exists upstream.

The default export of `src/plugin.js` is `{ activate, deactivate }`.

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

`KITSU_PLUGIN_DEV_URLS` (on the Kitsu app) accepts two shapes:

```bash
# 1) Port only → http://127.0.0.1:<port>/src/plugin.js
KITSU_PLUGIN_DEV_URLS='injectedTickets=5175' npm run dev

# 2) Full URL (keeps scheme/host/path; origin-only gets /src/plugin.js)
KITSU_PLUGIN_DEV_URLS='injectedTickets=http://127.0.0.1:5175/src/plugin.js' \
  npm run dev
```

Keep a built (or stub) `dist/plugin.js` so the user context stays
`"injected": true` while using DEV_URLS.

## Vite

```js
import { defineKitsuPluginConfig } from './src-plugin-kit/vite/index.js'
import { defineConfig } from 'vite'

export default defineConfig(
  defineKitsuPluginConfig({
    // entry defaults to src/plugin.js
    server: { port: 5175 },
  }),
)
```

`pluginId` comes from `../manifest.toml`. `vue` / `vue-router` / `vuex` /
`vue-i18n` stay external and are read from `globalThis.__KITSU_SHARED__`.

## Layout

- `src/plugin.js` — `definePlugin({ messages, routes })` with the same pages
  under `studio`, `production`, and `episode`
- `src-plugin-kit/front/` — `definePlugin`, `usePluginContext` (meta key `kitsuPlugin`)
- `src-plugin-kit/vite/` — `defineKitsuPluginConfig` and build helpers
- `src/composables/useTicketsScope.js` — production / episode from context + route
- `src/composables/useHostCatalogs.js` — host Vuex catalogs
- `src/composables/useTicketsApi.js` — Zou plugin REST endpoints
- Navigation — short names `list` / `new` / `detail`
