# Injected Tickets — Zou example plugin (injected)

Reference Zou/Kitsu plugin: ticket management (issues on tasks) with models,
API, and an **injected** Vue frontend built with
[`kitsu-plugin-kit`](https://github.com/lesmoutonssauvages/kitsu-plugin-kit).

Repo: [lesmoutonssauvages/kitsu-injectedTickets](https://github.com/lesmoutonssauvages/kitsu-injectedTickets)

## Iframe vs this plugin

| | Official [kitsu-tickets](https://github.com/cgwire/kitsu-tickets) | [This package](https://github.com/lesmoutonssauvages/kitsu-injectedTickets) |
|--|------------------------------------------------------------------|--------------|
| UI | **Iframe** SPA (`frontend/dist/index.html`) | **Injected** (`frontend/dist/plugin.js`) |
| How Zou detects mode | No `plugin.js` → iframe | `frontend/dist/plugin.js` present → `injected: true` in user context |
| Manifest | `frontend_*_enabled` only | Same — **no** `injected` flag in `manifest.toml` |
| Frontend kit | none — [plugin docs](https://dev.kitsu.cloud/kitsu-plugins/development) | [`kitsu-plugin-kit`](https://github.com/lesmoutonssauvages/kitsu-plugin-kit) |
| Vue | own app in the iframe | host Vue / router / i18n / vuex |
| Context | query params + hash router | `usePluginContext()` + `useRoute().params` |

There is **no** `injected = true` in `manifest.toml`. Zou derives injection from
the presence of `PLUGIN_FOLDER/<id>/frontend/dist/plugin.js`. Without that file,
Kitsu keeps the iframe integration.

Backend layout matches the official plugin. Only frontend packaging and Kitsu
integration change for inject.

Copy this tree, rename `injectedTickets`, adapt models and resources.

## Installation

[Kitsu Plugin Installation](https://dev.kitsu.cloud/kitsu-plugins/installation.html)

```bash
# Clone or copy outside Zou's plugins install directory, then:
zou install-plugin --path ./injectedTickets
# or: zou install-plugin --path https://github.com/lesmoutonssauvages/kitsu-injectedTickets.git
```

Restart Zou after install.

Do **not** run `install-plugin` from a path that is already bind-mounted (or
identical) to `site-packages/zou/plugins/<id>`: `shutil.copytree` then fails
with “are the same file”. Install from a distinct source directory, or rely on
the volume mount and only run migrations / restart.

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
    vite.config.ts          # defineKitsuPluginConfig()
    dist/plugin.js          # served by Zou to Kitsu
  logo.png
```

## Manifest

```toml
id = "injectedTickets"
name = "Injected Tickets"
frontend_project_enabled = true   # production topbar section
frontend_studio_enabled = true    # studio sidebar
icon = "ticket-check"
```

Navigation chrome still comes from these flags. Injection mode does not.

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

Vue 3 + Vite library build via `kitsu-plugin-kit`. Entry uses `definePlugin()`;
Vite uses `defineKitsuPluginConfig()` (plugin id from `../manifest.toml`).

| Piece | Role |
|-------|------|
| `src/index.ts` | `definePlugin({ messages, routes })` |
| Scope | `useTicketsScope()` → `usePluginContext()` + route params |
| Navigation | short names `list` / `new` / `detail` (host namespaces them) |
| Current page | `route.meta.pluginPage` |
| Catalogs | host Vuex via `useHostCatalogs()` |
| Served as | `/api/plugins/injectedTickets/frontend/plugin.js` |

### Routes (scopes)

| Scope | Kitsu parent | URL |
|-------|--------------|-----|
| `studio` | `plugin` | `/plugins/injectedTickets/...` |
| `production` | `production-plugin` | `/productions/:production_id/plugins/injectedTickets/...` |
| `episode` | `episode-production-plugin` | `/productions/:production_id/episodes/:episode_id/plugins/injectedTickets/...` |

If `episode` is **omitted**, the kit copies `production` routes
(`episode ??= production`). This plugin declares all three scopes on purpose
(same pages; tickets filter by episode when on an episode URL).

```ts
export default definePlugin({
  messages: { en, fr },
  routes: { studio: pages, production: pages, episode: pages },
})
```

To disable episode-scoped pages for another plugin, pass `episode: []`
(empty array — omitting is not enough).

### Build / dev

```bash
pnpm install                                              # from monorepo root
pnpm -F injected-tickets-plugin-frontend build            # dist/plugin.js
pnpm -F injected-tickets-plugin-frontend dev              # Vite on :5175
```

Point Kitsu at the Vite entry (host must support `KITSU_PLUGIN_DEV_URLS`):

```bash
KITSU_PLUGIN_DEV_URLS='injectedTickets=http://127.0.0.1:5175/src/index.ts' \
  npm run dev   # in the Kitsu app
```

HMR still needs a `frontend/dist/plugin.js` on disk (built file or stub) so Zou
returns `"injected": true`. Dev URLs only replace *what* is loaded.

Details: [`frontend/README.md`](frontend/README.md) and
[kitsu-plugin-kit](https://github.com/lesmoutonssauvages/kitsu-plugin-kit).

## Testing

```bash
DB_DATABASE=zoudb-test python -m pytest tests/ -v
```
