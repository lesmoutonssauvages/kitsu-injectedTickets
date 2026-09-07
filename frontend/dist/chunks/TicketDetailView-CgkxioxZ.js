import { A as e, C as t, D as n, E as r, M as i, N as a, O as o, S as s, T as c, _ as l, a as u, b as d, c as ee, d as f, f as p, g as m, h, i as g, j as _, k as v, l as y, n as b, o as te, p as x, r as S, s as C, t as w, u as ne, v as T, w as E, x as D, y as O } from "./useTicketsScope-DJOhA3PJ.js";
//#region ../../../node_modules/.pnpm/lucide-vue-next@0.525.0_vue@3.5.41_typescript@6.0.3_/node_modules/lucide-vue-next/dist/esm/icons/arrow-left.js
var k = C("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), re = { class: "task-selector" }, ie = {
	key: 0,
	class: "page-subtitle"
}, ae = { class: "field" }, A = { class: "label" }, oe = { class: "control" }, j = { class: "select is-fullwidth" }, M = ["disabled"], N = { value: "" }, P = ["value"], F = { class: "field" }, I = { class: "label" }, se = { class: "control" }, ce = { class: "select is-fullwidth" }, le = ["disabled"], ue = { value: "" }, de = ["value"], fe = {
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
}, St = { class: "label" }, Ct = { class: "control" }, wt = { class: "select is-fullwidth" }, Tt = ["disabled"], Et = { value: "" }, Dt = ["value"], L = /*#__PURE__*/ b(/* @__PURE__ */ d({
	__name: "TaskSelector",
	props: {
		projectId: {},
		taskId: {},
		disabled: { type: Boolean }
	},
	emits: ["update:taskId"],
	setup(a, { emit: s }) {
		let d = a, f = s, { t: g } = ee(), _ = ne(), v = te(), y = (e, t) => {
			t?.id && (e.value.some((e) => e.id === t.id) || (e.value = [...e.value, t]));
		}, b = (e) => {
			let t = e.entity, n = e.entity_type?.name || e.entity_type_name || "";
			e.episode && y(L, {
				id: e.episode.id,
				name: e.episode.name
			}), e.sequence && y(k, {
				...e.sequence,
				parent_id: e.sequence.parent_id || e.episode?.id || e.episode_id || null,
				episode_id: e.episode?.id || e.sequence.episode_id || null
			}), t?.id && (n === "Asset" ? (y(D, {
				id: t.id,
				name: t.name,
				entity_type_id: t.entity_type_id || e.entity_type?.id
			}), e.entity_type?.id && y(T, {
				id: e.entity_type.id,
				name: e.entity_type.name || "Asset"
			})) : n === "Shot" ? y(O, {
				...t,
				sequence_id: e.sequence?.id || t.parent_id,
				parent_id: t.parent_id || e.sequence?.id
			}) : n === "Sequence" ? y(k, {
				...t,
				parent_id: t.parent_id || e.episode?.id || null,
				episode_id: e.episode?.id || t.parent_id || null
			}) : n === "Episode" ? y(L, {
				id: t.id,
				name: t.name
			}) : n === "Edit" && y(R, {
				...t,
				episode_id: e.episode?.id || t.parent_id,
				parent_id: t.parent_id || e.episode?.id
			}));
		}, C = E(null), w = E({}), T = E([]), D = E([]), O = E([]), k = E([]), L = E([]), R = E([]), z = E([]), B = E(""), V = E(""), H = E(""), U = E(""), W = E(""), G = E(""), K = E(!1), q = E(!1), J = E(!1), Y = E(!1), X = x(() => C.value?.production_type === "tvshow"), Ot = x(() => {
			let e = [
				{
					label: g("custom_actions.entity_types.asset"),
					value: "Asset"
				},
				{
					label: g("custom_actions.entity_types.shot"),
					value: "Shot"
				},
				{
					label: g("custom_actions.entity_types.sequence"),
					value: "Sequence"
				},
				{
					label: g("custom_actions.entity_types.edit"),
					value: "Edit"
				}
			];
			return X.value && e.splice(3, 0, {
				label: g("custom_actions.entity_types.episode"),
				value: "Episode"
			}), e;
		}), Z = (e) => [...e].sort((e, t) => e.label.localeCompare(t.label)), kt = x(() => Z(T.value.map((e) => ({
			label: e.name,
			value: e.id
		})))), Q = x(() => Z(L.value.map((e) => ({
			label: e.name,
			value: e.id
		})))), At = x(() => {
			let e = k.value;
			return X.value && H.value && (e = e.filter((e) => u(e) === H.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), jt = x(() => {
			let e = D.value;
			return V.value && (e = e.filter((e) => e.entity_type_id === V.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), Mt = x(() => {
			let e = O.value;
			return U.value && (e = e.filter((e) => e.sequence_id === U.value || e.parent_id === U.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), Nt = x(() => {
			let e = R.value;
			return X.value && H.value && (e = e.filter((e) => e.episode_id === H.value || e.parent_id === H.value)), Z(e.map((e) => ({
				label: e.name,
				value: e.id
			})));
		}), Pt = x(() => z.value.map((e) => ({
			label: e.task_type_name || e.task_type?.name || (e.task_type_id ? w.value[e.task_type_id] : null) || e.id.slice(0, 8),
			value: e.id
		}))), Ft = (e) => {
			T.value = e.assetTypes, D.value = e.assets, O.value = e.shots, k.value = e.sequences, L.value = e.episodes, R.value = e.edits;
		}, It = () => {
			B.value = "", V.value = "", H.value = "", U.value = "", W.value = "", G.value = "", T.value = [], D.value = [], O.value = [], k.value = [], L.value = [], R.value = [], z.value = [];
		}, $ = (e) => {
			e <= 1 && (V.value = "", H.value = ""), e <= 2 && (U.value = ""), e <= 3 && (W.value = ""), e <= 4 && (G.value = "", z.value = []);
		}, Lt = async () => {
			if (d.projectId) {
				q.value = !0;
				try {
					Ft(await v.loadEntityCatalogs(d.projectId));
				} catch (e) {
					console.error("Error fetching entity data:", e);
				} finally {
					q.value = !1;
				}
			}
		}, Rt = async (e) => {
			if (!(!e || !d.projectId)) try {
				let t = await v.loadTask(e), n = t.entity_id || t.entity?.id;
				if (!n) return;
				let r = t.entity_type?.name || t.entity_type_name || "", i = await v.loadEntityCatalogs(d.projectId);
				if (Ft(i), b(t), r === "Asset") B.value = "Asset", V.value = t.entity?.entity_type_id || t.entity_type?.id || "", W.value = n;
				else if (r === "Shot") B.value = "Shot", X.value && (H.value = t.episode?.id || S(t.episode_id) || S(_.params.episode_id) || ""), U.value = t.sequence?.id || t.entity?.parent_id || "", W.value = n;
				else if (r === "Sequence") B.value = "Sequence", X.value && (H.value = t.entity?.parent_id || t.episode?.id || S(t.episode_id) || S(_.params.episode_id) || ""), W.value = n;
				else if (r === "Episode") B.value = "Episode", W.value = n;
				else if (r === "Edit") B.value = "Edit", X.value && (H.value = t.episode?.id || t.entity?.parent_id || S(t.episode_id) || S(_.params.episode_id) || ""), W.value = n;
				else {
					let e = i.assets.find((e) => e.id === n), t = i.shots.find((e) => e.id === n), r = k.value.find((e) => e.id === n), a = L.value.find((e) => e.id === n), o = R.value.find((e) => e.id === n);
					if (e) B.value = "Asset", V.value = e.entity_type_id || "", W.value = e.id;
					else if (t) {
						B.value = "Shot";
						let e = k.value.find((e) => e.id === (t.sequence_id || t.parent_id));
						X.value && (H.value = u(e) || S(_.params.episode_id) || ""), U.value = t.sequence_id || t.parent_id || "", W.value = t.id;
					} else r ? (B.value = "Sequence", X.value && (H.value = u(r) || S(_.params.episode_id) || ""), W.value = r.id) : a ? (B.value = "Episode", W.value = a.id) : o && (B.value = "Edit", X.value && (H.value = o.episode_id || o.parent_id || ""), W.value = o.id);
				}
				let a = [];
				try {
					a = await v.loadTasksForEntity(n);
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
		return e(() => d.projectId, async (e) => {
			if (Y.value = !0, It(), C.value = null, w.value = {}, !e) {
				Y.value = !1, f("update:taskId", null);
				return;
			}
			K.value = !0;
			try {
				C.value = await v.ensureProduction(e);
				let t = {};
				for (let n of v.taskTypesFor(e)) t[n.id] = n.name;
				w.value = t, d.taskId && C.value && await Rt(d.taskId);
			} catch (e) {
				console.error("Error loading project catalogs:", e);
			}
			Y.value = !1, K.value = !1, f("update:taskId", G.value || null);
		}, { immediate: !0 }), e(() => d.taskId, async (e, t) => {
			if (!(!d.projectId || !C.value || K.value) && e !== t && e !== G.value && e) {
				Y.value = !0;
				try {
					await Rt(e);
				} finally {
					Y.value = !1, f("update:taskId", G.value || null);
				}
			}
		}), e(B, async (e) => {
			if (Y.value || ($(1), !e)) return;
			await Lt();
			let t = S(_.params.episode_id);
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
					z.value = await v.loadTasksForEntity(e);
				} catch (e) {
					console.error("Error fetching tasks:", e);
				} finally {
					J.value = !1;
				}
			}
		}), e(G, (e) => {
			Y.value || f("update:taskId", e || null);
		}), (e, s) => (t(), m("div", re, [a.projectId ? C.value || K.value ? (t(), m(p, { key: 1 }, [
			l("div", ae, [l("label", A, r(n(g)("custom_actions.fields.entity_type")), 1), l("p", oe, [l("span", j, [i(l("select", {
				"onUpdate:modelValue": s[0] || (s[0] = (e) => B.value = e),
				disabled: a.disabled || K.value
			}, [l("option", N, r(n(g)("tickets.create.entity_type_placeholder")), 1), (t(!0), m(p, null, c(Ot.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, P))), 128))], 8, M), [[o, B.value]])])])]),
			B.value === "Asset" ? (t(), m(p, { key: 0 }, [l("div", F, [l("label", I, r(n(g)("entities.build_filter.asset_type")), 1), l("p", se, [l("span", ce, [i(l("select", {
				"onUpdate:modelValue": s[1] || (s[1] = (e) => V.value = e),
				disabled: a.disabled || q.value
			}, [l("option", ue, r(n(g)("library.select_asset_type")), 1), (t(!0), m(p, null, c(kt.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, de))), 128))], 8, le), [[o, V.value]])])])]), V.value ? (t(), m("div", fe, [l("label", pe, r(n(g)("custom_actions.entity_types.asset")), 1), l("p", me, [l("span", he, [i(l("select", {
				"onUpdate:modelValue": s[2] || (s[2] = (e) => W.value = e),
				disabled: a.disabled
			}, [l("option", _e, r(n(g)("tickets.create.entity_placeholder")), 1), (t(!0), m(p, null, c(jt.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, ve))), 128))], 8, ge), [[o, W.value]])])])])) : h("", !0)], 64)) : h("", !0),
			B.value === "Shot" ? (t(), m(p, { key: 1 }, [
				X.value ? (t(), m("div", ye, [l("label", be, r(n(g)("custom_actions.entity_types.episode")), 1), l("p", xe, [l("span", Se, [i(l("select", {
					"onUpdate:modelValue": s[3] || (s[3] = (e) => H.value = e),
					disabled: a.disabled || q.value
				}, [l("option", we, r(n(g)("tickets.create.episode_placeholder")), 1), (t(!0), m(p, null, c(Q.value, (e) => (t(), m("option", {
					key: e.value,
					value: e.value
				}, r(e.label), 9, Te))), 128))], 8, Ce), [[o, H.value]])])])])) : h("", !0),
				!X.value || H.value ? (t(), m("div", Ee, [l("label", De, r(n(g)("custom_actions.entity_types.sequence")), 1), l("p", Oe, [l("span", ke, [i(l("select", {
					"onUpdate:modelValue": s[4] || (s[4] = (e) => U.value = e),
					disabled: a.disabled
				}, [l("option", je, r(n(g)("tickets.create.sequence_placeholder")), 1), (t(!0), m(p, null, c(At.value, (e) => (t(), m("option", {
					key: e.value,
					value: e.value
				}, r(e.label), 9, Me))), 128))], 8, Ae), [[o, U.value]])])])])) : h("", !0),
				U.value ? (t(), m("div", Ne, [l("label", Pe, r(n(g)("custom_actions.entity_types.shot")), 1), l("p", Fe, [l("span", Ie, [i(l("select", {
					"onUpdate:modelValue": s[5] || (s[5] = (e) => W.value = e),
					disabled: a.disabled
				}, [l("option", Re, r(n(g)("tickets.create.entity_placeholder")), 1), (t(!0), m(p, null, c(Mt.value, (e) => (t(), m("option", {
					key: e.value,
					value: e.value
				}, r(e.label), 9, ze))), 128))], 8, Le), [[o, W.value]])])])])) : h("", !0)
			], 64)) : h("", !0),
			B.value === "Sequence" ? (t(), m(p, { key: 2 }, [X.value ? (t(), m("div", Be, [l("label", Ve, r(n(g)("custom_actions.entity_types.episode")), 1), l("p", He, [l("span", Ue, [i(l("select", {
				"onUpdate:modelValue": s[6] || (s[6] = (e) => H.value = e),
				disabled: a.disabled || q.value
			}, [l("option", Ge, r(n(g)("tickets.create.episode_placeholder")), 1), (t(!0), m(p, null, c(Q.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, Ke))), 128))], 8, We), [[o, H.value]])])])])) : h("", !0), !X.value || H.value ? (t(), m("div", qe, [l("label", Je, r(n(g)("custom_actions.entity_types.sequence")), 1), l("p", Ye, [l("span", Xe, [i(l("select", {
				"onUpdate:modelValue": s[7] || (s[7] = (e) => W.value = e),
				disabled: a.disabled
			}, [l("option", Qe, r(n(g)("tickets.create.entity_placeholder")), 1), (t(!0), m(p, null, c(At.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, $e))), 128))], 8, Ze), [[o, W.value]])])])])) : h("", !0)], 64)) : h("", !0),
			B.value === "Episode" ? (t(), m("div", et, [l("label", tt, r(n(g)("custom_actions.entity_types.episode")), 1), l("p", nt, [l("span", rt, [i(l("select", {
				"onUpdate:modelValue": s[8] || (s[8] = (e) => W.value = e),
				disabled: a.disabled || q.value
			}, [l("option", at, r(n(g)("tickets.create.episode_placeholder")), 1), (t(!0), m(p, null, c(Q.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, ot))), 128))], 8, it), [[o, W.value]])])])])) : h("", !0),
			B.value === "Edit" ? (t(), m(p, { key: 4 }, [X.value ? (t(), m("div", st, [l("label", ct, r(n(g)("custom_actions.entity_types.episode")), 1), l("p", lt, [l("span", ut, [i(l("select", {
				"onUpdate:modelValue": s[9] || (s[9] = (e) => H.value = e),
				disabled: a.disabled || q.value
			}, [l("option", ft, r(n(g)("tickets.create.episode_placeholder")), 1), (t(!0), m(p, null, c(Q.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, pt))), 128))], 8, dt), [[o, H.value]])])])])) : h("", !0), !X.value || H.value ? (t(), m("div", mt, [l("label", ht, r(n(g)("custom_actions.entity_types.edit")), 1), l("p", gt, [l("span", _t, [i(l("select", {
				"onUpdate:modelValue": s[10] || (s[10] = (e) => W.value = e),
				disabled: a.disabled
			}, [l("option", yt, r(n(g)("tickets.create.entity_placeholder")), 1), (t(!0), m(p, null, c(Nt.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, bt))), 128))], 8, vt), [[o, W.value]])])])])) : h("", !0)], 64)) : h("", !0),
			W.value ? (t(), m("div", xt, [l("label", St, r(n(g)("tickets.create.task")), 1), l("p", Ct, [l("span", wt, [i(l("select", {
				"onUpdate:modelValue": s[11] || (s[11] = (e) => G.value = e),
				disabled: a.disabled || J.value
			}, [l("option", Et, r(n(g)("tickets.create.task_placeholder")), 1), (t(!0), m(p, null, c(Pt.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, Dt))), 128))], 8, Tt), [[o, G.value]])])])])) : h("", !0)
		], 64)) : h("", !0) : (t(), m("p", ie, r(n(g)("tickets.create.select_project_first")), 1))]));
	}
}), [["__scopeId", "data-v-e8b7ecbb"]]), R = { class: "tickets-plugin" }, z = { class: "flexrow page-header" }, B = { class: "title flexrow-item filler" }, V = { class: "icon is-small" }, H = {
	key: 0,
	class: "has-text-centered mt2"
}, U = { class: "field" }, W = {
	class: "label",
	for: "ticket-title"
}, G = { class: "control" }, K = ["placeholder", "disabled"], q = { class: "field" }, J = {
	class: "label",
	for: "ticket-text"
}, Y = { class: "control" }, X = ["placeholder", "disabled"], Ot = { class: "field" }, Z = {
	class: "label",
	for: "ticket-status"
}, kt = { class: "control" }, Q = { class: "select is-fullwidth" }, At = ["disabled"], jt = ["value"], Mt = { class: "field" }, Nt = {
	class: "label",
	for: "ticket-project"
}, Pt = { class: "control" }, Ft = { class: "select is-fullwidth" }, It = ["disabled"], $ = { value: null }, Lt = ["value"], Rt = { class: "field" }, zt = { class: "label" }, Bt = { class: "field" }, Vt = {
	class: "label",
	for: "ticket-assignee"
}, Ht = { class: "control" }, Ut = { class: "select is-fullwidth" }, Wt = ["disabled"], Gt = { value: null }, Kt = ["value"], qt = {
	key: 0,
	class: "error mb1"
}, Jt = { class: "has-text-right" }, Yt = ["disabled"], Xt = /*#__PURE__*/ b(/* @__PURE__ */ d({
	__name: "TicketDetailView",
	setup(u) {
		let { t: d } = ee(), b = ne(), S = f(), C = g(), { openProductions: re, people: ie, ensureHostCatalogs: ae } = te(), { productionId: A, episodeId: oe } = w(), j = x(() => !!b.meta.isCreateTicket), M = x(() => {
			let e = b.params.ticketId;
			return typeof e == "string" ? e : Array.isArray(e) ? e[0] : "";
		}), N = E(!1), P = E(!1), F = E(null), I = E({
			title: "",
			text: "",
			status: "open",
			project_id: null,
			task_id: null,
			assignee_id: null
		}), se = x(() => [...re.value].sort((e, t) => e.name.localeCompare(t.name))), ce = x(() => [...ie.value].sort((e, t) => e.full_name.localeCompare(t.full_name))), le = x(() => [
			{
				label: d("tickets.status.open"),
				value: "open"
			},
			{
				label: d("tickets.status.on_hold"),
				value: "on hold"
			},
			{
				label: d("tickets.status.closed"),
				value: "closed"
			}
		]), ue = x(() => j.value ? d("tickets.create.page_title") : d("tickets.create.edit_page_title")), de = () => {
			I.value = {
				title: "",
				text: "",
				status: "open",
				project_id: A.value,
				task_id: null,
				assignee_id: null
			};
		}, fe = async () => {
			if (j.value || !M.value) {
				de();
				return;
			}
			N.value = !0, F.value = null;
			try {
				let e = await C.getTicket(M.value);
				I.value = {
					title: e.title || "",
					text: e.text || "",
					status: e.status || "open",
					project_id: e.project_id || null,
					task_id: e.task_id || null,
					assignee_id: e.assignee_id || null
				};
			} catch (e) {
				console.error(e), F.value = d("main.loading_error");
			} finally {
				N.value = !1;
			}
		}, pe = async () => {
			P.value = !0, F.value = null;
			let e = {
				title: I.value.title,
				text: I.value.text,
				status: I.value.status,
				project_id: I.value.project_id,
				task_id: I.value.task_id,
				assignee_id: I.value.assignee_id,
				episode_id: oe.value
			};
			try {
				if (j.value) await C.createTicket(e);
				else if (M.value) await C.updateTicket(M.value, e);
				else return;
				await S.push({ name: "list" });
			} catch (e) {
				console.error(e), F.value = d("tickets.save_error");
			} finally {
				P.value = !1;
			}
		};
		return s(async () => {
			await ae(), await fe();
		}), e(() => [b.name, M.value], () => {
			fe();
		}), (e, s) => (t(), m("div", R, [l("div", z, [l("h1", B, r(ue.value), 1), O(n(y), {
			class: "button flexrow-item",
			to: { name: "list" }
		}, {
			default: _(() => [l("span", V, [O(n(k), { size: 16 })]), l("span", null, r(n(d)("tasks.back_to_list")), 1)]),
			_: 1
		})]), N.value ? (t(), m("p", H, r(n(d)("main.loading")), 1)) : (t(), m("form", {
			key: 1,
			class: "ticket-form",
			onSubmit: a(pe, ["prevent"])
		}, [
			l("div", U, [l("label", W, r(n(d)("tickets.create.title")), 1), l("p", G, [i(l("input", {
				id: "ticket-title",
				"onUpdate:modelValue": s[0] || (s[0] = (e) => I.value.title = e),
				class: "input",
				required: "",
				placeholder: n(d)("tickets.create.title_placeholder"),
				disabled: P.value
			}, null, 8, K), [[v, I.value.title]])])]),
			l("div", q, [l("label", J, r(n(d)("main.description")), 1), l("p", Y, [i(l("textarea", {
				id: "ticket-text",
				"onUpdate:modelValue": s[1] || (s[1] = (e) => I.value.text = e),
				class: "textarea",
				rows: "5",
				placeholder: n(d)("tickets.create.description_placeholder"),
				disabled: P.value
			}, null, 8, X), [[v, I.value.text]])])]),
			l("div", Ot, [l("label", Z, r(n(d)("main.status")), 1), l("p", kt, [l("span", Q, [i(l("select", {
				id: "ticket-status",
				"onUpdate:modelValue": s[2] || (s[2] = (e) => I.value.status = e),
				disabled: P.value
			}, [(t(!0), m(p, null, c(le.value, (e) => (t(), m("option", {
				key: e.value,
				value: e.value
			}, r(e.label), 9, jt))), 128))], 8, At), [[o, I.value.status]])])])]),
			l("div", Mt, [l("label", Nt, r(n(d)("main.production")), 1), l("p", Pt, [l("span", Ft, [i(l("select", {
				id: "ticket-project",
				"onUpdate:modelValue": s[3] || (s[3] = (e) => I.value.project_id = e),
				disabled: P.value || !!n(A)
			}, [l("option", $, r(n(d)("library.select_production")), 1), (t(!0), m(p, null, c(se.value, (e) => (t(), m("option", {
				key: e.id,
				value: e.id
			}, r(e.name), 9, Lt))), 128))], 8, It), [[o, I.value.project_id]])])])]),
			l("div", Rt, [l("label", zt, r(n(d)("tickets.create.task")), 1), O(L, {
				"project-id": I.value.project_id,
				"task-id": I.value.task_id,
				disabled: P.value,
				"onUpdate:taskId": s[4] || (s[4] = (e) => I.value.task_id = e)
			}, null, 8, [
				"project-id",
				"task-id",
				"disabled"
			])]),
			l("div", Bt, [l("label", Vt, r(n(d)("tasks.fields.assignees")), 1), l("p", Ht, [l("span", Ut, [i(l("select", {
				id: "ticket-assignee",
				"onUpdate:modelValue": s[5] || (s[5] = (e) => I.value.assignee_id = e),
				disabled: P.value
			}, [l("option", Gt, r(n(d)("people.select_person")), 1), (t(!0), m(p, null, c(ce.value, (e) => (t(), m("option", {
				key: e.id,
				value: e.id
			}, r(e.full_name), 9, Kt))), 128))], 8, Wt), [[o, I.value.assignee_id]])])])]),
			F.value ? (t(), m("p", qt, r(F.value), 1)) : h("", !0),
			l("p", Jt, [l("button", {
				type: "submit",
				class: D(["button is-primary", { "is-loading": P.value }]),
				disabled: P.value
			}, r(j.value ? n(d)("tickets.create.submit") : n(d)("main.save")), 11, Yt), O(n(y), {
				class: "button is-link",
				to: { name: "list" }
			}, {
				default: _(() => [T(r(n(d)("main.cancel")), 1)]),
				_: 1
			})])
		], 32))]));
	}
}), [["__scopeId", "data-v-586b1306"]]);
//#endregion
export { Xt as default };

//# sourceMappingURL=TicketDetailView-CgkxioxZ.js.map