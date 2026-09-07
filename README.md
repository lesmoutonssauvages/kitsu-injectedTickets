# Injected Tickets — Zou example plugin (injected)

Reference Zou/Kitsu plugin: ticket management (issues on tasks) with models,
API, and an **injected** Vue frontend.

Repo: [lesmoutonssauvages/kitsu-injectedTickets](https://github.com/lesmoutonssauvages/kitsu-injectedTickets)

## Iframe vs this plugin

| | Official [kitsu-tickets](https://github.com/cgwire/kitsu-tickets) | [This package](https://github.com/lesmoutonssauvages/kitsu-injectedTickets) |
|--|------------------------------------------------------------------|--------------|
| UI | **Iframe** SPA (`frontend/dist/index.html`) | **Injected** (`frontend/dist/plugin.js`) |
| Manifest | iframe (default) | `injected = true` |
| Frontend kit | none — [plugin docs](https://dev.kitsu.cloud/kitsu-plugins/development) | [`kitsu-plugin-kit`](https://github.com/lesmoutonssauvages/kitsu-plugin-kit) |
| Vue | own app in the iframe | host Vue / router / i18n / vuex |
| Context | query params + hash router | host `useRoute().params` |

Backend layout matches the official plugin. Only frontend packaging and Kitsu
integration change for inject.

Copy this tree, rename `injectedTickets`, adapt models and resources.

## Installation

[Kitsu Plugin Installation](https://dev.kitsu.cloud/kitsu-plugins/installation.html)

```bash
zou install-plugin --path ./injectedTickets
# or: zou install-plugin --path https://github.com/lesmoutonssauvages/kitsu-injectedTickets.git
```

Restart Zou after install.

## Structure

```
injectedTickets/
  manifest.toml
  __init__.py
  models.py
  services.py
  resources.py
  migrations/
  frontend/
    src/
      index.ts              # definePlugin({ messages, routes })
      locales/              # en.ts / fr.ts
      views/
      components/
      composables/          # API, host Vuex catalogs, scope
    vite.config.ts
    dist/plugin.js          # served by Zou to Kitsu
  logo.png
```

## Manifest

```toml
id = "injectedTickets"
frontend_project_enabled = true
frontend_studio_enabled = true
icon = "ticket-check"
injected = true
```

Without `injected = true`, Kitsu expects `frontend/dist/index.html` (iframe).

## Tables

| Table | Description |
|-------|-------------|
| `plugin_injectedTickets_tickets` | title, text, status, task_id, project_id, episode_id, person_id, assignee_id |

## API

Prefix **`/api/plugins/injectedTickets`**. JWT required.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/tickets` | List |
| POST | `/tickets` | Create |
| GET | `/tickets/<ticket_id>` | Get |
| PUT | `/tickets/<ticket_id>` | Update |
| DELETE | `/tickets/<ticket_id>` | Delete |

## Backend notes

**Models** — `db.Model` + `BaseMixin` + `SerializerMixin`; tables prefixed
`plugin_<id>_` (`plugin_injectedTickets_tickets`). Helpers: `get`, `get_by`,
`get_all`, `create`, `update`, `delete`. Expose `present()` for API
serialization.

**Services / resources** — logic in `services.py`; `MethodView` + `ArgsMixin`,
`@jwt_required()`, `check_id_parameter`.

**Lifecycle / migrations** — `pre_install` / `post_install` / `pre_uninstall` /
`post_uninstall`. Migrations: `zou migrate-plugin --path .`.

## Frontend (injected)

Vue 3 + Vite library build via `kitsu-plugin-kit`. The plugin is TypeScript
and uses `definePlugin()` / `defineKitsuPluginConfig()`, same as the other
injected plugins in this monorepo.

| Piece | Role |
|-------|------|
| `src/index.ts` | `definePlugin({ messages, routes })` — id from `manifest.toml` via Vite |
| Context | `useTicketsScope()` (studio / production / episode) |
| Navigation | Vue Router `{ name: 'list' }` / `'new'` / `'detail'` |
| Catalogs | host Vuex via `useHostCatalogs()` |
| Served as | `/api/plugins/injectedTickets/frontend/plugin.js` |

```ts
export default definePlugin({
  messages: { en, fr },
  routes: { studio: pages, production: pages, episode: pages },
})
```

```bash
pnpm install                                              # from monorepo root
pnpm -F injected-tickets-plugin-frontend build            # dist/plugin.js
pnpm -F injected-tickets-plugin-frontend dev              # Vite on :5175
```

```bash
KITSU_PLUGIN_DEV_URLS='injectedTickets=http://127.0.0.1:5175/src/index.ts' \
  pnpm -F kitsu dev
```

Details: `frontend/README.md` and [kitsu-plugin-kit](https://github.com/lesmoutonssauvages/kitsu-plugin-kit).

## Testing

```bash
DB_DATABASE=zoudb-test python -m pytest tests/ -v
```
