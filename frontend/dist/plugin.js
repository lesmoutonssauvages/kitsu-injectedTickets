;(() => {
  if (typeof document === 'undefined') return
  const id = "injectedTickets"
  if (document.querySelector('style[data-kitsu-plugin="' + id + '"]')) return
  const style = document.createElement('style')
  style.setAttribute('data-kitsu-plugin', id)
  style.textContent = ".empty-state[data-v-f76b2650]{text-align:center;color:var(--text-muted);flex-direction:column;justify-content:center;align-items:center;padding:4rem 2rem;display:flex}.empty-icon[data-v-f76b2650]{color:var(--text-muted);margin-bottom:1rem}.empty-text[data-v-f76b2650]{color:var(--text-secondary);margin:0;font-size:1rem}.tickets-list[data-v-f76b2650]{flex-direction:column;gap:1rem;display:flex}.ticket-card[data-v-f76b2650]{background:var(--bg-card);border:1px solid var(--border-light);border-radius:8px;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.ticket-card[data-v-f76b2650]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #0000001a}.ticket-content[data-v-f76b2650]{flex-direction:column;gap:1rem;padding:1rem;display:flex}@media (min-width:640px){.ticket-content[data-v-f76b2650]{padding:1.5rem}}.ticket-header[data-v-f76b2650]{flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:1rem;display:flex}.ticket-title[data-v-f76b2650]{color:var(--text-heading);flex:1;min-width:200px;margin:0;font-size:1.25rem;font-weight:600}.ticket-actions[data-v-f76b2650]{flex-shrink:0;align-items:center;gap:.5rem;display:flex}.ticket-status-tag[data-v-f76b2650]{text-transform:capitalize;font-weight:500}.ticket-status-tag.is-open[data-v-f76b2650]{color:#fff;background-color:#67be4b}.ticket-status-tag.is-on-hold[data-v-f76b2650]{color:#363636;background-color:#f2c94c}.ticket-status-tag.is-closed[data-v-f76b2650]{color:#fff;background-color:#999}.icon-button[data-v-f76b2650]{width:2rem;height:2rem;color:var(--text-secondary);cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}.icon-button[data-v-f76b2650]:hover{background:var(--border-light);color:var(--text-heading)}.icon-button.is-danger[data-v-f76b2650]:hover{color:#ff5252;background:#ff52521f}.ticket-text[data-v-f76b2650]{color:var(--text-primary);-webkit-line-clamp:3;-webkit-box-orient:vertical;margin:0;line-height:1.6;display:-webkit-box;overflow:hidden}.ticket-footer[data-v-f76b2650]{border-top:1px solid var(--border-light);flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;padding-top:.75rem;display:flex}.ticket-meta[data-v-f76b2650]{flex-wrap:wrap;gap:1.5rem;display:flex}.meta-item[data-v-f76b2650],.ticket-date[data-v-f76b2650]{color:var(--text-secondary);align-items:center;gap:.5rem;font-size:.875rem;display:flex}.meta-label[data-v-f76b2650]{color:var(--text-muted);font-weight:500}.meta-value[data-v-f76b2650]{color:var(--text-primary);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:.8125rem}.ticket-dates[data-v-f76b2650]{flex-direction:column;align-items:flex-end;gap:.5rem;display:flex}.meta-icon[data-v-f76b2650]{flex-shrink:0}.tickets-count[data-v-f76b2650]{color:var(--text-secondary);margin:0;font-size:1rem}.footer-count[data-v-f76b2650]{text-align:center;width:100%;padding-top:1rem}@media (max-width:640px){.ticket-header[data-v-f76b2650],.ticket-footer[data-v-f76b2650]{flex-direction:column;align-items:flex-start}.ticket-dates[data-v-f76b2650]{align-items:flex-start;width:100%}.ticket-title[data-v-f76b2650]{font-size:1.125rem}}.tickets-plugin[data-v-e1fb2cdb]{--bg-page:var(--background,#f9f9f9);--bg-card:var(--background-alt,#fff);--text-heading:var(--text-strong,#222);--text-primary:var(--text,#333);--text-secondary:var(--text-alt,#888);--text-muted:var(--text-alt,#555);--border-light:var(--border,#eee);--border-primary:var(--border,#e5e5e5);--accent-green:#00aa3c;max-width:768px;margin:0 auto}.tickets-header[data-v-e1fb2cdb]{margin-bottom:2rem}.header-content[data-v-e1fb2cdb]{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;display:flex}.tickets-title[data-v-e1fb2cdb]{color:var(--text-heading);margin:0 0 .5rem;font-size:1.875rem;font-weight:700}.tickets-count[data-v-e1fb2cdb]{color:var(--text-secondary);margin:0;font-size:1rem}@media (max-width:640px){.header-content[data-v-e1fb2cdb]{flex-direction:column;align-items:stretch}}.task-selector[data-v-e8b7ecbb]{flex-direction:column;gap:0;display:flex}.select.is-fullwidth[data-v-e8b7ecbb],.select.is-fullwidth select[data-v-e8b7ecbb]{width:100%}.tickets-plugin[data-v-586b1306]{--bg-page:var(--background,#f9f9f9);--bg-card:var(--background-alt,#fff);--text-heading:var(--text-strong,#222);--text-primary:var(--text,#333);--text-secondary:var(--text-alt,#888);--text-muted:var(--text-alt,#555);--border-light:var(--border,#eee);--border-primary:var(--border,#e5e5e5);--accent-green:#00aa3c;max-width:768px;margin:0 auto}.select.is-fullwidth[data-v-586b1306],.select.is-fullwidth select[data-v-586b1306]{width:100%}\n/*$vite$:1*/"
  document.head.append(style)
})();
//#region ../../../packages/kitsu-plugin-kit/dist/index.js
var e = (e) => e || "injectedTickets", t = (t) => {
	let { messages: n, store: r, routes: i, setup: a, teardown: o } = t, s = e(t.id);
	return {
		id: s,
		async activate(e) {
			if (!s) throw Error("definePlugin: missing plugin id. Use defineKitsuPluginConfig() (reads ../manifest.toml) or pass id explicitly.");
			if (s !== e.pluginId) throw Error(`plugin id mismatch: the bundle declares "${s}" but the host loaded it as "${e.pluginId}"`);
			n && e.addMessages(n), r && e.registerStoreModule(`kitsu-plugin-${e.pluginId}`, r), i && e.addRoutes(i), await a?.(e);
		},
		async deactivate(e) {
			await o?.(e);
		}
	};
}, n = { tickets: {
	title: "Tickets",
	no_tickets: "No tickets found",
	untitled: "Untitled Ticket",
	all_productions: "across all productions",
	count: "0 tickets | 1 ticket | {n} tickets",
	create_cta: "New ticket",
	save_error: "Could not save ticket",
	status: {
		open: "Open",
		on_hold: "On Hold",
		closed: "Closed"
	},
	fields: {
		task: "Task:",
		created_by: "Created by:",
		assigned_to: "Assigned to:",
		production: "Production:",
		episode: "Episode:",
		sequence: "Sequence:",
		created: "Created:",
		updated: "Updated:"
	},
	delete: {
		confirm_title: "Delete Ticket",
		confirm_message: "Are you sure you want to delete this ticket? This action cannot be undone.",
		confirm: "Delete",
		cancel: "Cancel"
	},
	create: {
		page_title: "Create New Ticket",
		edit_page_title: "Edit Ticket",
		submit: "Create Ticket",
		title: "Title",
		title_placeholder: "Enter ticket title",
		description_placeholder: "Enter ticket description",
		status_placeholder: "Select status",
		task: "Task",
		select_project_first: "Select a production first",
		entity_type_placeholder: "Select entity type",
		entity_placeholder: "Select entity",
		episode_placeholder: "Select episode",
		sequence_placeholder: "Select sequence",
		task_placeholder: "Select task"
	}
} }, r = { tickets: {
	title: "Tickets",
	no_tickets: "Aucun ticket trouvé",
	untitled: "Ticket sans titre",
	all_productions: "toutes productions confondues",
	count: "0 tickets | 1 ticket | {n} tickets",
	create_cta: "Nouveau ticket",
	save_error: "Impossible d’enregistrer le ticket",
	status: {
		open: "Ouvert",
		on_hold: "En attente",
		closed: "Fermé"
	},
	fields: {
		task: "Tâche\xA0:",
		created_by: "Créé par\xA0:",
		assigned_to: "Assigné à\xA0:",
		production: "Production\xA0:",
		episode: "Épisode\xA0:",
		sequence: "Séquence\xA0:",
		created: "Créé le\xA0:",
		updated: "Mis à jour le\xA0:"
	},
	delete: {
		confirm_title: "Supprimer le ticket",
		confirm_message: "Êtes-vous sûr de vouloir supprimer ce ticket\xA0? Cette action est irréversible.",
		confirm: "Supprimer",
		cancel: "Annuler"
	},
	create: {
		page_title: "Créer un nouveau ticket",
		edit_page_title: "Modifier le ticket",
		submit: "Créer le ticket",
		title: "Titre",
		title_placeholder: "Saisir le titre du ticket",
		description_placeholder: "Saisir la description du ticket",
		status_placeholder: "Sélectionner un statut",
		task: "Tâche",
		select_project_first: "Sélectionner d’abord une production",
		entity_type_placeholder: "Sélectionner le type d’entité",
		entity_placeholder: "Sélectionner l’entité",
		episode_placeholder: "Sélectionner l’épisode",
		sequence_placeholder: "Sélectionner la séquence",
		task_placeholder: "Sélectionner la tâche"
	}
} }, i = () => import("./chunks/TicketListView-BL1AUYdA.js"), a = () => import("./chunks/TicketDetailView-CgkxioxZ.js"), o = [
	{
		path: "",
		name: "list",
		component: i
	},
	{
		path: "new",
		name: "new",
		component: a,
		meta: { isCreateTicket: !0 }
	},
	{
		path: ":ticketId",
		name: "detail",
		component: a
	}
], s = t({
	messages: {
		en: n,
		fr: r
	},
	routes: {
		studio: o,
		production: o,
		episode: o
	}
});
//#endregion
export { s as default };

//# sourceMappingURL=plugin.js.map