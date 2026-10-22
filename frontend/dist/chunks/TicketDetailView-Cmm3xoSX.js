import { C as e, E as t, S as n, T as r, _ as i, a, b as o, c as s, d as c, f as l, g as u, h as d, i as f, l as p, m, n as h, o as g, r as ee, u as _, v, w as y, x as b, y as x } from "./front-CmhxG6ng.js";
import { a as te, c as ne, i as S, n as C, o as re, r as w, s as T, t as E } from "./useTicketsScope-DsHHTSV5.js";
// node_modules/lucide-vue-next/dist/esm/icons/arrow-left.js
var D = T("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), O = { class: "task-selector" }, ie = {
	key: 0,
	class: "page-subtitle"
}, ae = { class: "field" }, oe = { class: "label" }, k = { class: "control" }, se = { class: "select is-fullwidth" }, A = ["disabled"], j = { value: "" }, M = ["value"], N = { class: "field" }, P = { class: "label" }, F = { class: "control" }, ce = { class: "select is-fullwidth" }, le = ["disabled"], ue = { value: "" }, de = ["value"], fe = {
	key: 0,
	class: "field"
}, pe = { class: "label" }, me = { class: "control" }, he = { class: "select is-fullwidth" }, ge = ["disabled"], _e = { value: "" }, ve = ["value"], ye = {
	key: 0,
	class: "field"
}, be = { class: "label" }, xe = { class: "control" }, Se = { class: "select is-fullwidth" }, Ce = ["disabled"], we = { value: "" }, Te = ["value"], Ee = {
	key: 1,
	class: "field"
}, De = { class: "label" }, Oe = { class: "control" }, ke = { class: "select is-fullwidth" }, Ae = ["disabled"], je = { value: "" }, Me = ["value"], Ne = {
	key: 2,
	class: "field"
}, Pe = { class: "label" }, Fe = { class: "control" }, Ie = { class: "select is-fullwidth" }, Le = ["disabled"], Re = { value: "" }, ze = ["value"], Be = {
	key: 0,
	class: "field"
}, Ve = { class: "label" }, He = { class: "control" }, Ue = { class: "select is-fullwidth" }, We = ["disabled"], Ge = { value: "" }, Ke = ["value"], qe = {
	key: 1,
	class: "field"
}, Je = { class: "label" }, Ye = { class: "control" }, Xe = { class: "select is-fullwidth" }, Ze = ["disabled"], Qe = { value: "" }, $e = ["value"], et = {
	key: 3,
	class: "field"
}, tt = { class: "label" }, nt = { class: "control" }, rt = { class: "select is-fullwidth" }, it = ["disabled"], at = { value: "" }, ot = ["value"], st = {
	key: 0,
	class: "field"
}, ct = { class: "label" }, lt = { class: "control" }, ut = { class: "select is-fullwidth" }, dt = ["disabled"], ft = { value: "" }, pt = ["value"], mt = {
	key: 1,
	class: "field"
}, ht = { class: "label" }, gt = { class: "control" }, _t = { class: "select is-fullwidth" }, vt = ["disabled"], yt = { value: "" }, bt = ["value"], xt = {
	key: 5,
	class: "field"
}, St = { class: "label" }, Ct = { class: "control" }, wt = { class: "select is-fullwidth" }, Tt = ["disabled"], Et = { value: "" }, Dt = ["value"], I = /*#__PURE__*/ C({
	__name: "TaskSelector",
	props: {
		projectId: {
			type: String,
			default: null
		},
		taskId: {
			type: String,
			default: null
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:taskId"],
	setup(t, { emit: n }) {
		let c = t, l = n, { t: d } = ne(), f = ee(), m = re(), h = (e, t) => {
			t?.id && (e.value.some((e) => e.id === t.id) || (e.value = [...e.value, t]));
		}, y = (e) => {
			let t = e.entity, n = e.entity_type?.name || e.entity_type_name || "";
			e.episode && h(L, {
				id: e.episode.id,
				name: e.episode.name
			}), e.sequence && h(I, {
				...e.sequence,
				parent_id: e.sequence.parent_id || e.episode?.id || e.episode_id || null,
				episode_id: e.episode?.id || e.sequence.episode_id || null
			}), t?.id && (n === "Asset" ? (h(E, {
				id: t.id,
				name: t.name,
				entity_type_id: t.entity_type_id || e.entity_type?.id
			}), e.entity_type?.id && h(T, {
				id: e.entity_type.id,
				name: e.entity_type.name || "Asset"
			})) : n === "Shot" ? h(D, {
				...t,
				sequence_id: e.sequence?.id || t.parent_id,
				parent_id: t.parent_id || e.sequence?.id
			}) : n === "Sequence" ? h(I, {
				...t,
				parent_id: t.parent_id || e.episode?.id || null,
				episode_id: e.episode?.id || t.parent_id || null
			}) : n === "Episode" ? h(L, {
				id: t.id,
				name: t.name
			}) : n === "Edit" && h(R, {
				...t,
				episode_id: e.episode?.id || t.parent_id,
				parent_id: t.parent_id || e.episode?.id
			}));
		}, S = i(null), C = i({}), T = i([]), E = i([]), D = i([]), I = i([]), L = i([]), R = i([]), z = i([]), B = i(""), V = i(""), H = i(""), U = i(""), W = i(""), G = i(""), K = i(!1), q = i(!1), J = i(!1), Y = i(!1), X = g(() => S.value?.production_type === "tvshow"), Ot = g(() => {
			let e = [
				{
					label: d("custom_actions.entity_types.asset"),
					value: "Asset"
				},
				{
					label: d("custom_actions.entity_types.shot"),
					value: "Shot"
				},
				{
					label: d("custom_actions.entity_types.sequence"),
					value: "Sequence"
				},
				{
					label: d("custom_actions.entity_types.edit"),
					value: "Edit"
				}
			];
			return X.value && e.splice(3, 0, {
				label: d("custom_actions.entity_types.episode"),
				value: "Episode"
			}), e;
		}), Z = (e) => [...e].sort((e, t) => e.label.localeCompare(t.label)), kt = g(() => Z(T.value.map((e) => ({
			label: e.name,
			value: e.id
		})))), Q = g(() => Z(L.value.map((e) => ({
			label: e.name,
			value: e.id
		})))), At = g(() => {
			let e = I.value;
			return X.value && H.value && (e = e.filter((e) => te(e) === H.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), jt = g(() => {
			let e = E.value;
			return V.value && (e = e.filter((e) => e.entity_type_id === V.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), Mt = g(() => {
			let e = D.value;
			return U.value && (e = e.filter((e) => e.sequence_id === U.value || e.parent_id === U.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), Nt = g(() => {
			let e = R.value;
			return X.value && H.value && (e = e.filter((e) => e.episode_id === H.value || e.parent_id === H.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), Pt = g(() => z.value.map((e) => ({
			label: e.task_type_name || e.task_type?.name || (e.task_type_id ? C.value[e.task_type_id] : null) || e.id.slice(0, 8),
			value: e.id
		}))), Ft = (e) => {
			T.value = e.assetTypes, E.value = e.assets, D.value = e.shots, I.value = e.sequences, L.value = e.episodes, R.value = e.edits;
		}, It = () => {
			B.value = "", V.value = "", H.value = "", U.value = "", W.value = "", G.value = "", T.value = [], E.value = [], D.value = [], I.value = [], L.value = [], R.value = [], z.value = [];
		}, $ = (e) => {
			e <= 1 && (V.value = "", H.value = ""), e <= 2 && (U.value = ""), e <= 3 && (W.value = ""), e <= 4 && (G.value = "", z.value = []);
		}, Lt = async () => {
			if (c.projectId) {
				q.value = !0;
				try {
					Ft(await m.loadEntityCatalogs(c.projectId));
				} catch (e) {
					console.error("Error fetching entity data:", e);
				} finally {
					q.value = !1;
				}
			}
		}, Rt = async (e) => {
			if (e && c.projectId) try {
				let t = await m.loadTask(e), n = t.entity_id || t.entity?.id;
				if (!n) return;
				let r = t.entity_type?.name || t.entity_type_name || "", i = await m.loadEntityCatalogs(c.projectId);
				if (Ft(i), y(t), r === "Asset") B.value = "Asset", V.value = t.entity?.entity_type_id || t.entity_type?.id || "", W.value = n;
				else if (r === "Shot") B.value = "Shot", X.value && (H.value = t.episode?.id || w(t.episode_id) || w(f.params.episode_id) || ""), U.value = t.sequence?.id || t.entity?.parent_id || "", W.value = n;
				else if (r === "Sequence") B.value = "Sequence", X.value && (H.value = t.entity?.parent_id || t.episode?.id || w(t.episode_id) || w(f.params.episode_id) || ""), W.value = n;
				else if (r === "Episode") B.value = "Episode", W.value = n;
				else if (r === "Edit") B.value = "Edit", X.value && (H.value = t.episode?.id || t.entity?.parent_id || w(t.episode_id) || w(f.params.episode_id) || ""), W.value = n;
				else {
					let e = i.assets.find((e) => e.id === n), t = i.shots.find((e) => e.id === n), r = I.value.find((e) => e.id === n), a = L.value.find((e) => e.id === n), o = R.value.find((e) => e.id === n);
					if (e) B.value = "Asset", V.value = e.entity_type_id || "", W.value = e.id;
					else if (t) {
						B.value = "Shot";
						let e = I.value.find((e) => e.id === (t.sequence_id || t.parent_id));
						X.value && (H.value = te(e) || w(f.params.episode_id) || ""), U.value = t.sequence_id || t.parent_id || "", W.value = t.id;
					} else r ? (B.value = "Sequence", X.value && (H.value = te(r) || w(f.params.episode_id) || ""), W.value = r.id) : a ? (B.value = "Episode", W.value = a.id) : o && (B.value = "Edit", X.value && (H.value = o.episode_id || o.parent_id || ""), W.value = o.id);
				}
				let a = [];
				try {
					a = await m.loadTasksForEntity(n);
				} catch (e) {
					console.error("Error loading tasks for entity:", e);
				}
				Array.isArray(a) || (a = []), a.some((t) => t.id === e) || (a = [...a, {
					id: e,
					task_type_id: t.task_type_id,
					task_type_name: t.task_type?.name || t.task_type_name,
					task_type: t.task_type
				}]), z.value = a, G.value = e;
			} catch (e) {
				console.error("Error initializing from task:", e);
			}
		};
		return e(() => c.projectId, async (e) => {
			if (Y.value = !0, It(), S.value = null, C.value = {}, !e) Y.value = !1, l("update:taskId", null);
			else {
				K.value = !0;
				try {
					S.value = await m.ensureProduction(e);
					let t = {};
					for (let n of m.taskTypesFor(e)) t[n.id] = n.name;
					C.value = t, c.taskId && S.value && await Rt(c.taskId);
				} catch (e) {
					console.error("Error loading project catalogs:", e);
				}
				Y.value = !1, K.value = !1, l("update:taskId", G.value || null);
			}
		}, { immediate: !0 }), e(() => c.taskId, async (e, t) => {
			if (c.projectId && S.value && !K.value && e !== t && e !== G.value && e) {
				Y.value = !0;
				try {
					await Rt(e);
				} finally {
					Y.value = !1, l("update:taskId", G.value || null);
				}
			}
		}), e(B, async (e) => {
			if (Y.value || ($(1), !e)) return;
			await Lt();
			let t = w(f.params.episode_id);
			X.value && t && [
				"Shot",
				"Sequence",
				"Edit"
			].includes(e) && !H.value && (H.value = t);
		}), e(V, () => {
			Y.value || $(3);
		}), e(H, () => {
			Y.value || $(2);
		}), e(U, () => {
			Y.value || $(3);
		}), e(W, async (e) => {
			if (!Y.value && (G.value = "", z.value = [], e)) {
				J.value = !0;
				try {
					z.value = await m.loadTasksForEntity(e);
				} catch (e) {
					console.error("Error fetching tasks:", e);
				} finally {
					J.value = !1;
				}
			}
		}), e(G, (e) => {
			Y.value || l("update:taskId", e || null);
		}), (e, n) => (u(), p("div", O, [t.projectId ? S.value || K.value ? (u(), p(a, { key: 1 }, [
			_("div", ae, [_("label", oe, x(o(d)("custom_actions.fields.entity_type")), 1), _("p", k, [_("span", se, [r(_("select", {
				"onUpdate:modelValue": n[0] || (n[0] = (e) => B.value = e),
				disabled: t.disabled || K.value
			}, [_("option", j, x(o(d)("tickets.create.entity_type_placeholder")), 1), (u(!0), p(a, null, v(Ot.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, M))), 128))], 8, A), [[b, B.value]])])])]),
			B.value === "Asset" ? (u(), p(a, { key: 0 }, [_("div", N, [_("label", P, x(o(d)("entities.build_filter.asset_type")), 1), _("p", F, [_("span", ce, [r(_("select", {
				"onUpdate:modelValue": n[1] || (n[1] = (e) => V.value = e),
				disabled: t.disabled || q.value
			}, [_("option", ue, x(o(d)("library.select_asset_type")), 1), (u(!0), p(a, null, v(kt.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, de))), 128))], 8, le), [[b, V.value]])])])]), V.value ? (u(), p("div", fe, [_("label", pe, x(o(d)("custom_actions.entity_types.asset")), 1), _("p", me, [_("span", he, [r(_("select", {
				"onUpdate:modelValue": n[2] || (n[2] = (e) => W.value = e),
				disabled: t.disabled
			}, [_("option", _e, x(o(d)("tickets.create.entity_placeholder")), 1), (u(!0), p(a, null, v(jt.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, ve))), 128))], 8, ge), [[b, W.value]])])])])) : s("", !0)], 64)) : s("", !0),
			B.value === "Shot" ? (u(), p(a, { key: 1 }, [
				X.value ? (u(), p("div", ye, [_("label", be, x(o(d)("custom_actions.entity_types.episode")), 1), _("p", xe, [_("span", Se, [r(_("select", {
					"onUpdate:modelValue": n[3] || (n[3] = (e) => H.value = e),
					disabled: t.disabled || q.value
				}, [_("option", we, x(o(d)("tickets.create.episode_placeholder")), 1), (u(!0), p(a, null, v(Q.value, (e) => (u(), p("option", {
					key: e.value,
					value: e.value
				}, x(e.label), 9, Te))), 128))], 8, Ce), [[b, H.value]])])])])) : s("", !0),
				!X.value || H.value ? (u(), p("div", Ee, [_("label", De, x(o(d)("custom_actions.entity_types.sequence")), 1), _("p", Oe, [_("span", ke, [r(_("select", {
					"onUpdate:modelValue": n[4] || (n[4] = (e) => U.value = e),
					disabled: t.disabled
				}, [_("option", je, x(o(d)("tickets.create.sequence_placeholder")), 1), (u(!0), p(a, null, v(At.value, (e) => (u(), p("option", {
					key: e.value,
					value: e.value
				}, x(e.label), 9, Me))), 128))], 8, Ae), [[b, U.value]])])])])) : s("", !0),
				U.value ? (u(), p("div", Ne, [_("label", Pe, x(o(d)("custom_actions.entity_types.shot")), 1), _("p", Fe, [_("span", Ie, [r(_("select", {
					"onUpdate:modelValue": n[5] || (n[5] = (e) => W.value = e),
					disabled: t.disabled
				}, [_("option", Re, x(o(d)("tickets.create.entity_placeholder")), 1), (u(!0), p(a, null, v(Mt.value, (e) => (u(), p("option", {
					key: e.value,
					value: e.value
				}, x(e.label), 9, ze))), 128))], 8, Le), [[b, W.value]])])])])) : s("", !0)
			], 64)) : s("", !0),
			B.value === "Sequence" ? (u(), p(a, { key: 2 }, [X.value ? (u(), p("div", Be, [_("label", Ve, x(o(d)("custom_actions.entity_types.episode")), 1), _("p", He, [_("span", Ue, [r(_("select", {
				"onUpdate:modelValue": n[6] || (n[6] = (e) => H.value = e),
				disabled: t.disabled || q.value
			}, [_("option", Ge, x(o(d)("tickets.create.episode_placeholder")), 1), (u(!0), p(a, null, v(Q.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, Ke))), 128))], 8, We), [[b, H.value]])])])])) : s("", !0), !X.value || H.value ? (u(), p("div", qe, [_("label", Je, x(o(d)("custom_actions.entity_types.sequence")), 1), _("p", Ye, [_("span", Xe, [r(_("select", {
				"onUpdate:modelValue": n[7] || (n[7] = (e) => W.value = e),
				disabled: t.disabled
			}, [_("option", Qe, x(o(d)("tickets.create.entity_placeholder")), 1), (u(!0), p(a, null, v(At.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, $e))), 128))], 8, Ze), [[b, W.value]])])])])) : s("", !0)], 64)) : s("", !0),
			B.value === "Episode" ? (u(), p("div", et, [_("label", tt, x(o(d)("custom_actions.entity_types.episode")), 1), _("p", nt, [_("span", rt, [r(_("select", {
				"onUpdate:modelValue": n[8] || (n[8] = (e) => W.value = e),
				disabled: t.disabled || q.value
			}, [_("option", at, x(o(d)("tickets.create.episode_placeholder")), 1), (u(!0), p(a, null, v(Q.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, ot))), 128))], 8, it), [[b, W.value]])])])])) : s("", !0),
			B.value === "Edit" ? (u(), p(a, { key: 4 }, [X.value ? (u(), p("div", st, [_("label", ct, x(o(d)("custom_actions.entity_types.episode")), 1), _("p", lt, [_("span", ut, [r(_("select", {
				"onUpdate:modelValue": n[9] || (n[9] = (e) => H.value = e),
				disabled: t.disabled || q.value
			}, [_("option", ft, x(o(d)("tickets.create.episode_placeholder")), 1), (u(!0), p(a, null, v(Q.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, pt))), 128))], 8, dt), [[b, H.value]])])])])) : s("", !0), !X.value || H.value ? (u(), p("div", mt, [_("label", ht, x(o(d)("custom_actions.entity_types.edit")), 1), _("p", gt, [_("span", _t, [r(_("select", {
				"onUpdate:modelValue": n[10] || (n[10] = (e) => W.value = e),
				disabled: t.disabled
			}, [_("option", yt, x(o(d)("tickets.create.entity_placeholder")), 1), (u(!0), p(a, null, v(Nt.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, bt))), 128))], 8, vt), [[b, W.value]])])])])) : s("", !0)], 64)) : s("", !0),
			W.value ? (u(), p("div", xt, [_("label", St, x(o(d)("tickets.create.task")), 1), _("p", Ct, [_("span", wt, [r(_("select", {
				"onUpdate:modelValue": n[11] || (n[11] = (e) => G.value = e),
				disabled: t.disabled || J.value
			}, [_("option", Et, x(o(d)("tickets.create.task_placeholder")), 1), (u(!0), p(a, null, v(Pt.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, Dt))), 128))], 8, Tt), [[b, G.value]])])])])) : s("", !0)
		], 64)) : s("", !0) : (u(), p("p", ie, x(o(d)("tickets.create.select_project_first")), 1))]));
	}
}, [["__scopeId", "data-v-ea2427b6"]]), L = { class: "tickets-plugin" }, R = { class: "flexrow page-header" }, z = { class: "title flexrow-item filler" }, B = { class: "icon is-small" }, V = {
	key: 0,
	class: "has-text-centered mt2"
}, H = { class: "field" }, U = {
	class: "label",
	for: "ticket-title"
}, W = { class: "control" }, G = ["placeholder", "disabled"], K = { class: "field" }, q = {
	class: "label",
	for: "ticket-text"
}, J = { class: "control" }, Y = ["placeholder", "disabled"], X = { class: "field" }, Ot = {
	class: "label",
	for: "ticket-status"
}, Z = { class: "control" }, kt = { class: "select is-fullwidth" }, Q = ["disabled"], At = ["value"], jt = { class: "field" }, Mt = {
	class: "label",
	for: "ticket-project"
}, Nt = { class: "control" }, Pt = { class: "select is-fullwidth" }, Ft = ["disabled"], It = { value: null }, $ = ["value"], Lt = { class: "field" }, Rt = { class: "label" }, zt = { class: "field" }, Bt = {
	class: "label",
	for: "ticket-assignee"
}, Vt = { class: "control" }, Ht = { class: "select is-fullwidth" }, Ut = ["disabled"], Wt = { value: null }, Gt = ["value"], Kt = {
	key: 0,
	class: "error mb1"
}, qt = { class: "has-text-right" }, Jt = ["disabled"], Yt = /*#__PURE__*/ C({
	__name: "TicketDetailView",
	setup(te) {
		let { t: C } = ne(), w = ee(), T = f(), O = S(), { openProductions: ie, people: ae, ensureHostCatalogs: oe } = re(), { productionId: k, episodeId: se } = E(), A = g(() => !!w.meta.isCreateTicket), j = g(() => {
			let e = w.params.ticketId;
			return typeof e == "string" ? e : Array.isArray(e) ? e[0] : "";
		}), M = i(!1), N = i(!1), P = i(null), F = i({
			title: "",
			text: "",
			status: "open",
			project_id: null,
			task_id: null,
			assignee_id: null
		}), ce = g(() => [...ie.value].sort((e, t) => e.name.localeCompare(t.name))), le = g(() => [...ae.value].sort((e, t) => e.full_name.localeCompare(t.full_name))), ue = g(() => [
			{
				label: C("tickets.status.open"),
				value: "open"
			},
			{
				label: C("tickets.status.on_hold"),
				value: "on hold"
			},
			{
				label: C("tickets.status.closed"),
				value: "closed"
			}
		]), de = g(() => A.value ? C("tickets.create.page_title") : C("tickets.create.edit_page_title")), fe = () => {
			F.value = {
				title: "",
				text: "",
				status: "open",
				project_id: k.value,
				task_id: null,
				assignee_id: null
			};
		}, pe = async () => {
			if (A.value || !j.value) fe();
			else {
				M.value = !0, P.value = null;
				try {
					let e = await O.getTicket(j.value);
					F.value = {
						title: e.title || "",
						text: e.text || "",
						status: e.status || "open",
						project_id: e.project_id || null,
						task_id: e.task_id || null,
						assignee_id: e.assignee_id || null
					};
				} catch (e) {
					console.error(e), P.value = C("main.loading_error");
				} finally {
					M.value = !1;
				}
			}
		}, me = async () => {
			N.value = !0, P.value = null;
			let e = {
				title: F.value.title,
				text: F.value.text,
				status: F.value.status,
				project_id: F.value.project_id,
				task_id: F.value.task_id,
				assignee_id: F.value.assignee_id,
				episode_id: se.value
			};
			try {
				if (A.value) await O.createTicket(e);
				else if (j.value) await O.updateTicket(j.value, e);
				else return;
				await T.push({ name: "list" });
			} catch (e) {
				console.error(e), P.value = C("tickets.save_error");
			} finally {
				N.value = !1;
			}
		};
		return d(async () => {
			await oe(), await pe();
		}), e(() => [w.name, j.value], () => {
			pe();
		}), (e, i) => (u(), p("div", L, [_("div", R, [_("h1", z, x(de.value), 1), l(o(h), {
			class: "button flexrow-item",
			to: { name: "list" }
		}, {
			default: y(() => [_("span", B, [l(o(D), { size: 16 })]), _("span", null, x(o(C)("tasks.back_to_list")), 1)]),
			_: 1
		})]), M.value ? (u(), p("p", V, x(o(C)("main.loading")), 1)) : (u(), p("form", {
			key: 1,
			class: "ticket-form",
			onSubmit: t(me, ["prevent"])
		}, [
			_("div", H, [_("label", U, x(o(C)("tickets.create.title")), 1), _("p", W, [r(_("input", {
				id: "ticket-title",
				"onUpdate:modelValue": i[0] || (i[0] = (e) => F.value.title = e),
				class: "input",
				required: "",
				placeholder: o(C)("tickets.create.title_placeholder"),
				disabled: N.value
			}, null, 8, G), [[n, F.value.title]])])]),
			_("div", K, [_("label", q, x(o(C)("main.description")), 1), _("p", J, [r(_("textarea", {
				id: "ticket-text",
				"onUpdate:modelValue": i[1] || (i[1] = (e) => F.value.text = e),
				class: "textarea",
				rows: "5",
				placeholder: o(C)("tickets.create.description_placeholder"),
				disabled: N.value
			}, null, 8, Y), [[n, F.value.text]])])]),
			_("div", X, [_("label", Ot, x(o(C)("main.status")), 1), _("p", Z, [_("span", kt, [r(_("select", {
				id: "ticket-status",
				"onUpdate:modelValue": i[2] || (i[2] = (e) => F.value.status = e),
				disabled: N.value
			}, [(u(!0), p(a, null, v(ue.value, (e) => (u(), p("option", {
				key: e.value,
				value: e.value
			}, x(e.label), 9, At))), 128))], 8, Q), [[b, F.value.status]])])])]),
			_("div", jt, [_("label", Mt, x(o(C)("main.production")), 1), _("p", Nt, [_("span", Pt, [r(_("select", {
				id: "ticket-project",
				"onUpdate:modelValue": i[3] || (i[3] = (e) => F.value.project_id = e),
				disabled: N.value || !!o(k)
			}, [_("option", It, x(o(C)("library.select_production")), 1), (u(!0), p(a, null, v(ce.value, (e) => (u(), p("option", {
				key: e.id,
				value: e.id
			}, x(e.name), 9, $))), 128))], 8, Ft), [[b, F.value.project_id]])])])]),
			_("div", Lt, [_("label", Rt, x(o(C)("tickets.create.task")), 1), l(I, {
				"project-id": F.value.project_id,
				"task-id": F.value.task_id,
				disabled: N.value,
				"onUpdate:taskId": i[4] || (i[4] = (e) => F.value.task_id = e)
			}, null, 8, [
				"project-id",
				"task-id",
				"disabled"
			])]),
			_("div", zt, [_("label", Bt, x(o(C)("tasks.fields.assignees")), 1), _("p", Vt, [_("span", Ht, [r(_("select", {
				id: "ticket-assignee",
				"onUpdate:modelValue": i[5] || (i[5] = (e) => F.value.assignee_id = e),
				disabled: N.value
			}, [_("option", Wt, x(o(C)("people.select_person")), 1), (u(!0), p(a, null, v(le.value, (e) => (u(), p("option", {
				key: e.id,
				value: e.id
			}, x(e.full_name), 9, Gt))), 128))], 8, Ut), [[b, F.value.assignee_id]])])])]),
			P.value ? (u(), p("p", Kt, x(P.value), 1)) : s("", !0),
			_("p", qt, [_("button", {
				type: "submit",
				class: m(["button is-primary", { "is-loading": N.value }]),
				disabled: N.value
			}, x(A.value ? o(C)("tickets.create.submit") : o(C)("main.save")), 11, Jt), l(o(h), {
				class: "button is-link",
				to: { name: "list" }
			}, {
				default: y(() => [c(x(o(C)("main.cancel")), 1)]),
				_: 1
			})])
		], 32))]));
	}
}, [["__scopeId", "data-v-9870a55c"]]);
export { Yt as default };

//# sourceMappingURL=TicketDetailView-Cmm3xoSX.js.map