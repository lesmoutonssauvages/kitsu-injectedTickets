import { o as e, p as t, r as n, t as r } from "./front-CmhxG6ng.js";
// \0kitsu-shared:vue-i18n
var i = globalThis.__KITSU_SHARED__;
if (!i) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var a = i.modules["vue-i18n"];
if (!a) throw Error("Kitsu plugin: the host does not share vue-i18n.");
a.default, a.DatetimeFormat, a.I18nD, a.I18nInjectionKey, a.I18nN, a.I18nT, a.NumberFormat, a.Translation, a.VERSION, a.createI18n;
var o = a.useI18n;
a.vTDirective;
// node_modules/lucide-vue-next/dist/esm/shared/src/utils/hasA11yProp.js
var s = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, c = (e) => e === "", l = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), u = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), d = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), f = (e) => {
	let t = d(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, p = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, m = ({ name: e, iconNode: n, absoluteStrokeWidth: r, "absolute-stroke-width": i, strokeWidth: a, "stroke-width": o, size: d = p.width, color: m = p.stroke, ...h }, { slots: g }) => t("svg", {
	...p,
	...h,
	width: d,
	height: d,
	stroke: m,
	"stroke-width": c(r) || c(i) || r === !0 || i === !0 ? Number(a || o || p["stroke-width"]) * 24 / Number(d) : a || o || p["stroke-width"],
	class: l("lucide", h.class, ...e ? [`lucide-${u(f(e))}-icon`, `lucide-${u(e)}`] : ["lucide-icon"]),
	...!g.default && !s(h) && { "aria-hidden": "true" }
}, [...n.map((e) => t(...e)), ...g.default ? [g.default()] : []]), h = (e, n) => (r, { slots: i, attrs: a }) => t(m, {
	...a,
	...r,
	iconNode: n,
	name: e
}, i), g = globalThis.__KITSU_SHARED__;
if (!g) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var _ = g.modules.vuex;
if (!_) throw Error("Kitsu plugin: the host does not share vuex.");
_.default, _.Store, _.createLogger, _.createNamespacedHelpers, _.createStore, _.install, _.mapActions, _.mapGetters, _.mapMutations, _.mapState, _.storeKey;
var v = _.useStore;
_.version;
// src/composables/useHostCatalogs.js
var y = (e) => e?.parent_id || e?.episode_id || null, ee = () => {
	let t = v(), n = e(() => t.getters.openProductions ?? []), r = e(() => (t.getters.people ?? []).map((e) => ({
		id: e.id,
		full_name: e.full_name || e.name || e.id
	}))), i = e(() => {
		let e = {};
		t.getters.episodeMap?.forEach?.((t, n) => {
			t?.name && (e[n] = t.name);
		});
		for (let n of t.getters.episodes ?? []) n?.id && n?.name && (e[n.id] = n.name);
		let n = t.getters.currentEpisode;
		return n?.id && n?.name && !["all", "main"].includes(n.id) && (e[n.id] = n.name), e;
	}), a = async () => {
		let e = [];
		n.value.length || e.push(t.dispatch("loadOpenProductions").catch(() => void 0)), r.value.length || e.push(t.dispatch("loadPeople").catch(() => void 0)), t.getters.taskTypes?.length || e.push(t.dispatch("loadTaskTypes").catch(() => void 0)), await Promise.all(e);
	}, o = (e) => t.getters.productionMap?.get?.(e) ?? n.value.find((t) => t.id === e) ?? null, s = async (e) => (t.getters.productionMap?.get?.(e) || await t.dispatch("loadProduction", e).catch(() => void 0), t.getters.currentProduction?.id !== e && await t.dispatch("setProduction", e), o(e)), c = (e) => {
		if (e) {
			let n = t.getters.getProductionTaskTypes?.(e);
			if (n?.length) return n;
		}
		return t.getters.taskTypes ?? [];
	}, l = (e) => t.getters.currentProduction?.id === e && t.getters.productionAssetTypes?.length ? t.getters.productionAssetTypes : t.getters.assetTypes ?? [];
	return {
		openProductions: n,
		people: r,
		episodeNameById: i,
		ensureHostCatalogs: a,
		ensureProduction: s,
		taskTypesFor: c,
		loadEpisodes: () => t.dispatch("loadEpisodes").catch(() => void 0),
		loadEntityCatalogs: async (e) => {
			await s(e);
			let n = t.getters.currentEpisode, r = !!(n && ["all", "main"].includes(n.id));
			r && await t.dispatch("setCurrentEpisode", null);
			let i = [];
			try {
				await t.dispatch("loadEpisodes").catch(() => void 0);
				let e = t.dispatch("loadSequences").then((e) => Array.isArray(e) ? e : []).catch(() => []);
				await Promise.all([
					t.dispatch("loadAssets", {
						all: !0,
						withTasks: !1,
						withShared: !1
					}).catch(() => void 0),
					e,
					t.dispatch("loadShots").catch(() => void 0),
					t.dispatch("loadEdits").catch(() => void 0)
				]), i = await e;
			} finally {
				r && await t.dispatch("setCurrentEpisode", n.id);
			}
			let a = t.getters.sequences ?? [], o = i.length > 0 ? i : a.map((e) => ({
				...e,
				parent_id: y(e)
			}));
			return {
				assetTypes: l(e),
				assets: (t.getters.assets ?? []).map((e) => ({
					id: e.id,
					name: e.name,
					entity_type_id: e.entity_type_id || e.asset_type_id
				})),
				shots: t.getters.shots ?? [],
				sequences: o,
				episodes: t.getters.episodes ?? [],
				edits: t.getters.edits ?? []
			};
		},
		getCachedTask: (e) => t.getters.taskMap?.get?.(e),
		loadTask: (e) => t.dispatch("loadTask", { taskId: e }),
		loadTasksForEntity: (e) => t.dispatch("loadTasks", { entity_id: e })
	};
}, b = class extends Error {
	constructor(e, { status: t = null, path: n = "", method: r = "", body: i = "", retryAfter: a = null } = {}) {
		super(e), this.status = t, this.path = n, this.method = r, this.body = i, this.retryAfter = a;
	}
}, x = class extends b {}, S = class extends b {}, C = class extends b {}, w = class extends b {}, te = class extends b {}, ne = class extends b {}, re = class extends b {}, ie = class extends b {}, T = class extends b {}, ae = class extends T {}, oe = class extends T {}, se = class extends T {}, ce = class extends T {
	constructor(e, t = {}) {
		super(e, t);
		let n = t.body || {};
		this.preferredMethod = n.preferred_two_factor_authentication || null, this.enabledMethods = n.two_factor_authentication_enabled || [];
	}
};
Object.entries({
	KitsuError: b,
	ParameterError: x,
	NotAuthenticatedError: S,
	NotAllowedError: C,
	NotFoundError: w,
	TooBigFileError: te,
	ServerError: ne,
	NetworkError: re,
	TimeoutError: ie,
	AuthFailedError: T,
	WrongOtpError: ae,
	TooManyLoginAttemptsError: oe,
	DefaultPasswordError: se,
	MissingOtpError: ce
}).forEach(([e, t]) => Object.defineProperty(t.prototype, "name", {
	value: e,
	writable: !0,
	configurable: !0
}));
var le = {
	400: x,
	401: S,
	403: C,
	404: w,
	413: te,
	422: S
}, ue = (e, { path: t, method: n, body: r, retryAfter: i }) => new (le[e] || (e >= 500 ? ne : b))(`${n} ${t} failed with status ${e}`, {
	status: e,
	path: t,
	method: n,
	body: r,
	retryAfter: i
}), de = {
	missing_OTP: ce,
	wrong_OTP: ae,
	too_many_failed_login_attemps: oe,
	default_password: se
}, fe = (e) => {
	let t = e.body || {}, n = Object.keys(de).find((e) => t[e]);
	return new (n ? de[n] : T)("Login failed", {
		status: e.status,
		path: e.path,
		method: e.method,
		body: t
	});
}, pe = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/, me = /^\d{4}-\d{2}-\d{2}$/, E = (e) => {
	let t = e && typeof e == "object" ? e.id : e;
	if (typeof t == "string" && pe.test(t)) return t.toLowerCase();
	throw new x("Wrong format: expected an id string or an entity object");
}, D = (e) => e == null ? null : E(e), O = (e = []) => {
	if (!Array.isArray(e)) throw new x("Wrong format: expected a list of ids or entities");
	return e.map(E);
}, k = (e, t) => {
	if (t != null && t !== "") return t;
	throw new x(`Missing parameter: ${e} is required`);
}, A = (e) => {
	if (e && typeof e == "object") return e;
	throw new x("Wrong format: expected the object to save");
}, j = (e) => Object.fromEntries(Object.entries(e).filter(([, e]) => e != null)), he = (e) => Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0)), M = (e) => {
	let t = Object.keys(e).filter((t) => e[t] !== void 0);
	if (t.length === 0) return;
	let n = t.some((e) => e === "filters" || e.includes("_")) ? ", the filters are named options in camelCase" : "";
	throw new x(`Wrong format: unknown option ${t.join(", ")}${n}`);
}, N = (e) => e == null ? e : A(e), P = (e, t = he) => {
	let n = t(e);
	if (Object.keys(n).length > 0) return n;
	throw new x(`Missing parameter: nothing to save, give one of ${Object.keys(e).join(", ")}`);
}, ge = (e, t) => Object.entries(t).reduce((e, [t, n]) => e[t] === n ? {
	...e,
	[t]: null
} : e, e), F = (e) => e.catch((e) => {
	if (e instanceof w) return null;
	throw e;
}), _e = (e) => (e.name || "").toLowerCase(), I = (e) => [...e].sort((e, t) => {
	let [n, r] = [_e(e), _e(t)];
	return n < r ? -1 : +(n > r);
}), L = (e) => String(k("name", e)).replace(/[\\%_]/g, "\\$&"), R = (e, t) => {
	let n = Array.isArray(e) ? e : [], r = String(t), i = r.toLowerCase();
	return n.find((e) => e.name === r) || n.find((e) => typeof e.name == "string" && e.name.toLowerCase() === i) || null;
}, ve = (e) => String(e).padStart(2, "0"), z = (e) => {
	if (!(e instanceof Date)) return e;
	if (Number.isNaN(e.getTime())) throw new x("Wrong format: invalid Date");
	return [
		e.getFullYear(),
		ve(e.getMonth() + 1),
		ve(e.getDate())
	].join("-");
}, B = (e) => {
	if (!(e instanceof Date)) return e;
	if (Number.isNaN(e.getTime())) throw new x("Wrong format: invalid Date");
	return e.toISOString().slice(0, 19);
}, V = (e) => {
	let t = z(e);
	if (typeof t == "string" && me.test(t)) return t;
	throw new x("Wrong format: expected a Date or a \"YYYY-MM-DD\" string");
}, H = (e) => e.replace(/\/+$/, "").replace(/\/api$/, ""), ye = (e, t, n) => {
	let r = e && typeof e == "object" ? e[t] : null;
	if (typeof r == "string" && r !== "") return r;
	throw new x(`Missing parameter: ${n}.${t} is required`);
}, U = (e, t) => `${e.replace(/\/+$/, "")}/productions/${E(t)}`, W = (e, t, n) => U(e, ye(t, "project_id", n)), be = (e) => ye(e, "production_type", "project") === "tvshow", xe = (e, t, n = "assets") => {
	if (typeof n != "string" || n === "") throw new x("Wrong format: section must be a string");
	return `${U(e, t)}/${n}/`;
}, Se = (e, t, n) => {
	let r = W(e, t, "asset");
	return be(n) ? `${r}/episodes/${t.episode_id ? E(t.episode_id) : "main"}/assets/${E(t)}/` : `${r}/assets/${E(t)}/`;
}, Ce = (e, t) => be(t) ? `${U(e, t)}/episodes/main/assets/` : `${U(e, t)}/assets/`, we = (e, t, n) => {
	let r = ye(n, "name", "assetType"), i = new URLSearchParams({ search: `type=[${r}]` });
	return `${Ce(e, t).replace(/\/$/, "")}?${i}`;
}, Te = (e, t) => `${W(e, t, "episode")}/episodes/${E(t)}/shots`, Ee = (e, t) => {
	let n = W(e, t, "shot");
	return t.episode_id ? `${n}/episodes/${E(t.episode_id)}/shots/${E(t)}/` : `${n}/shots/${E(t)}/`;
}, De = (e, t) => {
	let n = W(e, t, "edit");
	return t.episode_id ? `${n}/episodes/${E(t.episode_id)}/edits/${E(t)}/` : `${n}/edits/${E(t)}/`;
}, Oe = (e, t) => {
	let n = W(e, t, "sequence");
	return t.parent_id ? `${n}/episodes/${E(t.parent_id)}/sequences/${E(t)}/` : `${n}/sequences/${E(t)}/`;
}, ke = (e, t) => `${U(e, t)}/episodes/`, Ae = (e, t) => `${U(e, t)}/sequences/`, je = (e, t) => `${W(e, t, "task")}/shots/tasks/${E(t)}/`, Me = (e, t) => `${e.replace(/\/+$/, "")}/people/${E(t)}/`, Ne = (e) => {
	let t = ye(e, "extension", "previewFile");
	return `${t === "mp4" ? "movies" : "pictures"}/originals/preview-files/${E(e)}.${t}`;
}, Pe = (e, { lowdef: t = !1 } = {}) => `movies/${t ? "low" : "originals"}/preview-files/${E(e)}.mp4`, Fe = (e) => `pictures/thumbnails/attachment-files/${E(e)}.png`, Ie = {
	preview_file_id: "",
	ready_for: "None",
	source_id: ""
}, Le = [
	"name",
	"short_name",
	"description",
	"task_types",
	"archived"
], Re = (e) => {
	let t = typeof e == "object" && e ? Le.filter((t) => e[t] !== void 0) : [];
	if (t.length === 0) throw new x(`Missing parameter: assetType has no field to save (${Le.join(", ")})`);
	t.includes("name") && k("name", e.name);
	let n = e.task_types, r = Array.isArray(n);
	if (t.includes("task_types") && n !== null && !r) throw new x("Wrong format: task_types must be a list");
	return Object.fromEntries(t.map((t) => [t, t === "task_types" && r ? O(n) : e[t]]));
}, ze = (e) => async (t) => {
	if ((t.headers.get("Content-Type") || "").includes("csv")) return t.text();
	throw new b(`GET ${e} answered ${t.status} without CSV`, {
		status: t.status,
		path: e,
		method: "GET",
		body: await t.text()
	});
}, Be = (e) => {
	let t = async (t, n) => {
		let r = t === null ? null : E(t), i = r === null ? "assets/all" : `projects/${r}/assets`;
		return e.fetchAll(i, {}, { signal: n }).then(I);
	}, n = async (t, n, r, i) => R(await F(e.fetchAll("assets/all", {
		project_id: E(t),
		name: L(n),
		entity_type_id: D(r)
	}, { signal: i })), n), r = async (t, n) => e.fetchOne("asset-types", E(t), { signal: n }), i = async (t, n) => R(await F(e.fetchAll("asset-types", { name: L(t) }, { signal: n })), t);
	return {
		allAssetsForOpenProjects: async ({ signal: n } = {}) => e.fetchAll("projects/open", {}, { signal: n }).then((e) => Promise.all(e.map((e) => t(e, n)))).then((e) => I(e.flat())),
		allAssetsForProject: async (e, { signal: n } = {}) => t(e, n),
		allAssets: async ({ project: t, episode: n, isShared: r, signal: i } = {}) => e.fetchAll("assets", {
			project_id: D(t),
			episode_id: D(n),
			is_shared: r
		}, { signal: i }).then(I),
		allAssetsWithTasks: async (t, { episode: n, signal: r } = {}) => e.getNdjson("data/assets/with-tasks", {
			project_id: E(t),
			episode_id: D(n)
		}, { signal: r }),
		allSharedAssetsUsedInProject: async (t, { episode: n, signal: r } = {}) => {
			let i = D(n), a = i === null ? "" : `/episodes/${i}`;
			return e.fetchAll(`projects/${E(t)}${a}/assets/shared-used`, {}, { signal: r }).then(I);
		},
		shareAssets: async ({ assets: t, project: n, assetType: r, all: i = !1, isShared: a = !0, signal: o } = {}) => {
			let s = D(n), c = D(r), l = t != null;
			if (l && !Array.isArray(t)) throw new x("Wrong format: assets must be a list");
			let u = [
				l,
				c !== null,
				!!i
			];
			if (!u.includes(!0)) throw new x("Missing parameter: assets, assetType or all: true is required");
			if (u.filter(Boolean).length > 1) throw new x("Wrong format: assets, assetType and all: true exclude each other");
			if (s === null && !l) throw new x("Missing parameter: project is required with assetType or all");
			if (l && t.length === 0) {
				if (s === null) return [];
				throw new x("Missing parameter: assets is empty, all: true shares every asset of the project");
			}
			let d = c === null ? "" : `asset-types/${c}/`, f = s === null ? "" : `projects/${s}/${d}`;
			return e.post(`actions/${f}assets/share`, {
				...l ? { asset_ids: O(t) } : {},
				is_shared: a
			}, { signal: o });
		},
		allAssetsForEpisode: async (t, { signal: n } = {}) => e.fetchAll("assets", { source_id: E(t) }, { signal: n }).then(I),
		allAssetsForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${E(t)}/assets`, {}, { signal: n }).then(I),
		allAssetsForProjectAndType: async (t, n, { signal: r } = {}) => e.fetchAll(`projects/${E(t)}/asset-types/${E(n)}/assets`, {}, { signal: r }).then(I),
		getAssetByName: async (e, t, { assetType: r, signal: i } = {}) => n(e, t, r, i),
		getAsset: async (t, { signal: n } = {}) => e.fetchOne("assets", E(t), { signal: n }),
		newAsset: async (t, r, i, { description: a, extraData: o = {}, episode: s, isShared: c = !1, signal: l } = {}) => {
			let u = `data/projects/${E(t)}/asset-types/${E(r)}/assets/new`, d = {
				name: i,
				data: o,
				is_shared: c,
				...j({
					description: a,
					episode_id: D(s)
				})
			};
			return await n(t, i, r, l) || e.post(u, d, { signal: l });
		},
		updateAsset: async (t, { signal: n } = {}) => {
			let r = E(t);
			if (typeof t != "object") throw new x("Wrong format: updateAsset needs the asset object, an id has nothing to save");
			return e.update("entities", r, ge("episode_id" in t ? {
				...t,
				source_id: t.episode_id
			} : t, Ie), { signal: n });
		},
		updateAssetData: async (t, n = {}, { signal: r } = {}) => e.update("entities", E(t), { data: { ...N(n) } }, { signal: r }),
		removeAsset: async (t, { force: n = !1, signal: r } = {}) => e.remove("assets", E(t), { force: n ? !0 : null }, { signal: r }),
		allAssetTypes: async ({ signal: t } = {}) => e.fetchAll("asset-types", {}, { signal: t }).then(I),
		allAssetTypesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/asset-types`, {}, { signal: n }).then(I),
		allAssetTypesForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${E(t)}/asset-types`, {}, { signal: n }).then(I),
		getAssetType: async (e, { signal: t } = {}) => r(e, t),
		getAssetTypeByName: async (e, { signal: t } = {}) => i(e, t),
		newAssetType: async (t, { shortName: n, description: r, taskTypes: a, signal: o } = {}) => {
			let s = {
				name: t,
				...j({
					short_name: n,
					description: r,
					task_types: a == null ? null : O(a)
				})
			}, c = await i(t, o);
			return c === null ? e.create("entity-types", s, { signal: o }) : c;
		},
		updateAssetType: async (t, { signal: n } = {}) => e.update("entity-types", E(t), Re(t), { signal: n }),
		removeAssetType: async (t, { signal: n } = {}) => e.remove("entity-types", E(t), {}, { signal: n }),
		getAssetInstance: async (t, { signal: n } = {}) => e.fetchOne("asset-instances", E(t), { signal: n }),
		allShotAssetInstancesForAsset: async (t, { signal: n } = {}) => e.fetchAll(`assets/${E(t)}/shot-asset-instances`, {}, { signal: n }),
		enableAssetInstance: async (t, { signal: n } = {}) => e.update("asset-instances", E(t), { active: !0 }, { signal: n }),
		disableAssetInstance: async (t, { signal: n } = {}) => e.update("asset-instances", E(t), { active: !1 }, { signal: n }),
		allSceneAssetInstancesForAsset: async (t, { signal: n } = {}) => e.fetchAll(`assets/${E(t)}/scene-asset-instances`, {}, { signal: n }),
		allAssetInstancesForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${E(t)}/asset-instances`, {}, { signal: n }),
		allAssetInstancesForAsset: async (t, { signal: n } = {}) => e.fetchAll(`assets/${E(t)}/asset-asset-instances`, {}, { signal: n }),
		newAssetAssetInstance: async (t, n, { description: r, signal: i } = {}) => e.post(`data/assets/${E(t)}/asset-asset-instances`, {
			asset_to_instantiate_id: E(n),
			...j({ description: r })
		}, { signal: i }),
		importAssetsWithCsv: async (t, n, { update: r = !1, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`import/csv/projects/${E(t)}/assets`, {
			file: n,
			query: { update: r ? !0 : null },
			fileName: i,
			onProgress: a,
			signal: o
		}),
		exportAssetsWithCsv: async (t, { episode: n, assignedTo: r, signal: i } = {}) => {
			let a = `export/csv/projects/${E(t)}/assets.csv`;
			return e.request("GET", a, {
				query: {
					episode_id: D(n),
					assigned_to: D(r)
				},
				signal: i,
				read: ze(a)
			});
		},
		getEpisodeFromAsset: async (t, { signal: n } = {}) => {
			let r = typeof t == "object" && t && ("source_id" in t || "episode_id" in t) ? t : await e.fetchOne("assets", E(t), { signal: n });
			if (r === null) return null;
			let i = D(r.source_id || r.episode_id || null);
			return i === null ? Promise.resolve(null) : e.fetchOne("episodes", i, { signal: n });
		},
		getAssetTypeFromAsset: async (t, { signal: n } = {}) => {
			let i = (e) => e.entity_type_id || e.asset_type_id || null, a = typeof t == "object" && t && i(t) !== null ? t : await e.fetchOne("assets", E(t), { signal: n });
			return a === null ? null : r(i(a), n);
		},
		getAssetUrl: async (t, { signal: n } = {}) => {
			let r = await e.get(`data/assets/${E(t)}`, {}, { signal: n }), i = await e.get(`data/projects/${E(r.project_id)}`, {}, { signal: n });
			return Se(H(e.host), r, i);
		},
		getAllAssetsUrl: async (t, { signal: n } = {}) => Ce(H(e.host), await e.get(`data/projects/${E(t)}`, {}, { signal: n })),
		getAssetTypeUrl: async (t, n, { signal: r } = {}) => {
			let i = E(t), a = E(n), o = await e.get(`data/projects/${i}`, {}, { signal: r }), s = typeof n == "object" && "name" in n ? n : await e.get(`data/asset-types/${a}`, {}, { signal: r });
			return we(H(e.host), o, s);
		}
	};
}, Ve = (e) => typeof e == "object" && !!e && typeof e.asset_id == "string" && Number.isInteger(e.nb_occurences) && e.nb_occurences >= 0, He = (e) => {
	if (!Array.isArray(k("casting", e))) throw new x("Wrong format: casting must be a list of entries");
	return e.map((e) => {
		if (!Ve(e)) throw new x("Wrong format: each casting entry needs an asset_id and nb_occurences, a whole number");
		return {
			...e,
			asset_id: E(e.asset_id)
		};
	});
}, Ue = (e) => {
	let t = k("castings", e);
	if (typeof t != "object" || Array.isArray(t)) throw new x("Wrong format: castings must map entity ids to casting lists");
	return Object.fromEntries(Object.entries(t).map(([e, t]) => [E(e), He(t)]));
}, We = (e) => {
	let t = (t, n) => F(e.get(t, {}, { signal: n })), n = (e, t) => `data/projects/${E(e)}/entities/${E(t)}/casting`, r = async (t, n, r) => {
		let i = typeof n == "object" && n && n.project_id ? n : await e.fetchOne(t, E(n), { signal: r });
		return i === null ? null : E(i.project_id);
	}, i = async (e, i, a) => {
		let o = await r(e, i, a);
		return o === null ? null : t(n(o, i), a);
	}, a = (t, r, i, a) => e.put(n(t, r), He(i), { signal: a }), o = (t, n, r, i, a) => e.put(`data/projects/${E(t)}/entities/casting/assets/${E(r)}`, {
		entity_ids: (Array.isArray(n) ? n : [n]).map(E),
		...j(i)
	}, { signal: a });
	return {
		updateShotCasting: async (e, t, n, { signal: r } = {}) => a(e, t, n, r),
		updateAssetCasting: async (e, t, n, { signal: r } = {}) => a(e, t, n, r),
		updateEpisodeCasting: async (e, t, n, { signal: r } = {}) => a(e, t, n, r),
		updateCastings: async (t, n, { signal: r } = {}) => e.put(`data/projects/${E(t)}/entities/casting`, Ue(n), { signal: r }),
		importCastingWithCsv: async (t, n, { fileName: r, onProgress: i, signal: a } = {}) => e.upload(`import/csv/projects/${E(t)}/casting`, {
			file: k("csvFile", n),
			fileName: r,
			onProgress: i,
			signal: a
		}),
		castAsset: async (e, t, n, { nbOccurences: r, label: i, signal: a } = {}) => o(e, t, n, {
			nb_occurences: r,
			label: i
		}, a),
		uncastAsset: async (e, t, n, { signal: r } = {}) => o(e, t, n, { nb_occurences: 0 }, r),
		getAssetTypeCasting: async (e, n, { signal: r } = {}) => t(`data/projects/${E(e)}/asset-types/${E(n)}/casting`, r),
		getSequenceCasting: async (e, { signal: n } = {}) => {
			let i = await r("sequences", e, n);
			return i === null ? null : t(`data/projects/${i}/sequences/${E(e)}/casting`, n);
		},
		getShotCasting: async (e, { signal: t } = {}) => i("shots", e, t),
		getAssetCasting: async (e, { signal: t } = {}) => i("assets", e, t),
		getEpisodeCasting: async (e, { signal: t } = {}) => i("episodes", e, t),
		getAssetCastIn: async (e, { signal: n } = {}) => t(`data/assets/${E(e)}/cast-in`, n),
		allEntityLinksForProject: async (t, { page: n, limit: r, signal: i } = {}) => {
			let a = n != null;
			return e.fetchAll(`projects/${E(t)}/entity-links`, a ? {
				page: n,
				limit: r
			} : {}, { signal: i });
		},
		getEpisodesCasting: async (e, { signal: n } = {}) => t(`data/projects/${E(e)}/episodes/casting`, n),
		getSequenceShotsCasting: async (e, n, { signal: r } = {}) => t(`data/projects/${E(e)}/sequences/${E(n)}/casting`, r),
		getEpisodeShotsCasting: async (e, n, { signal: r } = {}) => t(`data/projects/${E(e)}/episodes/${E(n)}/sequences/all/casting`, r),
		getProjectShotsCasting: async (e, { signal: n } = {}) => t(`data/projects/${E(e)}/sequences/all/casting`, n),
		deleteEntityLink: async (t, { signal: n } = {}) => {
			let r = E(t);
			return await e.del(`data/entity-links/${r}`, void 0, { signal: n }), typeof t == "object" ? t : { id: r };
		}
	};
}, Ge = (e) => {
	let t = async (t, n, r) => R(await F(e.fetchAll("concepts", {
		project_id: E(t),
		name: L(n)
	}, { signal: r })), n);
	return {
		allConcepts: async ({ signal: t } = {}) => e.fetchAll("concepts", {}, { signal: t }).then(I),
		allConceptsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/concepts`, {}, { signal: n }).then(I),
		allConceptsWithTasks: async (t, { signal: n } = {}) => e.get("data/concepts/with-tasks", { project_id: E(t) }, { signal: n }),
		allPreviewsForConcept: async (t, { signal: n } = {}) => e.fetchAll(`concepts/${E(t)}/preview-files`, {}, { signal: n }),
		removeConcept: async (t, { force: n = !1, signal: r } = {}) => e.remove("concepts", E(t), { force: n ? !0 : null }, { signal: r }),
		getConcept: async (t, { signal: n } = {}) => e.fetchOne("concepts", E(t), { signal: n }),
		getConceptByName: async (e, n, { signal: r } = {}) => t(e, n, r),
		newConcept: async (n, r, { description: i, data: a, entityConceptLinks: o, signal: s } = {}) => {
			let c = {
				name: r,
				data: { ...a },
				entity_concept_links: O(o || []).map((e) => ({ id: e })),
				...j({ description: i })
			}, l = `data/projects/${E(n)}/concepts`;
			return await t(n, r, s) || e.post(l, c, { signal: s });
		},
		updateConcept: async (t, { signal: n } = {}) => e.update("entities", E(t), t, { signal: n })
	};
}, Ke = (e) => ({
	allCustomActions: async ({ signal: t } = {}) => e.fetchAll("custom-actions", {}, { signal: t }).then(I),
	newCustomAction: async (t, n, { entityType: r = "all", isAjax: i = !1, signal: a } = {}) => e.create("custom-actions", {
		name: k("name", t),
		url: k("url", n),
		entity_type: r,
		is_ajax: i
	}, { signal: a }),
	updateCustomAction: async (t, { signal: n } = {}) => {
		let r = E(t);
		if (typeof t != "object") throw new x("Wrong format: expected the custom action, not its id");
		let { name: i, url: a, entity_type: o, is_ajax: s } = t;
		return e.update("custom-actions", r, P({
			name: i,
			url: a,
			entity_type: o,
			is_ajax: s
		}, j), { signal: n });
	},
	removeCustomAction: async (t, { signal: n } = {}) => e.remove("custom-actions", E(t), {}, { signal: n })
}), qe = (e) => e ? String(e).toLowerCase() : null, Je = (e) => {
	let t = async (t, n, r, i) => {
		let a = D(r), o = await F(e.fetchAll("edits/all", {
			project_id: E(t),
			name: L(n)
		}, { signal: i }));
		return R(Array.isArray(o) ? o.filter((e) => qe(e.parent_id) === qe(a)) : [], n);
	}, n = (t, n) => e.get(`data/edits/${E(t)}`, {}, { signal: n }), r = (t, n) => e.update("entities", E(t), t, { signal: n }), i = (e) => {
		let t = e && typeof e == "object" ? e.id : e;
		return t === "main" ? t : t === "all" ? null : D(e);
	};
	return {
		getEdit: async (t, { signal: n } = {}) => e.fetchOne("edits", E(t), { signal: n }),
		getEditByName: async (e, n, { episode: r, signal: i } = {}) => t(e, n, r, i),
		getEditUrl: async (t, { signal: r } = {}) => De(H(e.host), await n(t, r)),
		allEditsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/edits`, {}, { signal: n }).then(I),
		allEditsWithTasks: async (t, { episode: n, signal: r } = {}) => e.get("data/edits/with-tasks", {
			project_id: E(t),
			episode_id: i(n)
		}, { signal: r }),
		allVersionsForEdit: async (t, { signal: n } = {}) => e.get(`data/edits/${E(t)}/versions`, {}, { signal: n }),
		allPreviewsForEdit: async (t, { signal: n } = {}) => e.fetchAll(`edits/${E(t)}/preview-files`, {}, { signal: n }),
		newEdit: async (n, r, { description: i, data: a = {}, episode: o, signal: s } = {}) => {
			let c = {
				name: r,
				data: a,
				...j({
					episode_id: D(o),
					description: i
				})
			}, l = `data/projects/${E(n)}/edits`;
			return await t(n, r, o, s) || e.post(l, c, { signal: s });
		},
		importEditsWithCsv: async (t, n, { update: r = !1, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`import/csv/projects/${E(t)}/edits`, {
			file: k("csvFile", n),
			query: { update: r ? !0 : null },
			fileName: i,
			onProgress: a,
			signal: o
		}),
		removeEdit: async (t, { force: n = !1, signal: r } = {}) => e.remove("edits", E(t), { force: n ? !0 : null }, { signal: r }),
		updateEdit: async (e, { signal: t } = {}) => r(e, t),
		updateEditData: async (t, n = {}, { signal: r } = {}) => e.update("entities", E(t), { data: { ...N(n) } }, { signal: r })
	};
}, Ye = (e) => ({
	allEntities: async ({ signal: t } = {}) => e.fetchAll("entities", {}, { signal: t }),
	allEntityTypes: async ({ signal: t } = {}) => e.fetchAll("entity-types", {}, { signal: t }).then(I),
	getEntity: async (t, { signal: n } = {}) => e.fetchOne("entities", E(t), { signal: n }),
	getEntityByName: async (t, { project: n, signal: r } = {}) => F(e.fetchAll("entities", {
		name: L(t),
		project_id: D(n)
	}, { signal: r })).then((e) => R(e, t)),
	getEntityType: async (t, { signal: n } = {}) => e.fetchOne("entity-types", E(t), { signal: n }),
	getEntityTypeByName: async (t, { signal: n } = {}) => F(e.fetchAll("entity-types", { name: L(t) }, { signal: n })).then((e) => R(e, t)),
	guessFromPath: async (t, n, { sep: r = "/", signal: i } = {}) => e.post("data/entities/guess_from_path", {
		project_id: E(t),
		file_path: n,
		sep: r
	}, { signal: i }),
	newEntityType: async (t, { signal: n } = {}) => e.create("entity-types", { name: k("name", t) }, { signal: n }),
	removeEntityType: async (t, { signal: n } = {}) => e.remove("entity-types", E(t), {}, { signal: n }),
	removeEntity: async (t, { signal: n } = {}) => e.remove("entities", E(t), {}, { signal: n }),
	removeEntities: async (t, n, { force: r = !1, signal: i } = {}) => e.request("POST", `actions/projects/${E(t)}/delete-entities`, {
		body: O(n),
		query: { force: r ? !0 : null },
		signal: i
	}),
	allEntitiesWithTasksLinkedToEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${E(t)}/entities-linked/with-tasks`, {}, { signal: n }),
	allNewsForEntity: async (t, { signal: n } = {}) => e.get(`data/entities/${E(t)}/news`, {}, { signal: n }),
	allPreviewFilesForEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${E(t)}/preview-files`, {}, { signal: n }),
	allTimeSpentsForEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${E(t)}/time-spents`, {}, { signal: n })
}), Xe = (e) => {
	if (e == null) return [];
	if (Array.isArray(e) && e.length > 0) return O(e);
	throw new x("Wrong format: persons must be a non-empty list of ids or entities");
}, Ze = (e, t) => {
	if (Array.isArray(t) && t.length === 0) throw new x(`Missing parameter: ${e} must be a non-empty list`);
	return t;
}, Qe = (e) => ({
	allLastEvents: async ({ after: t, before: n, limit: r, lastEvent: i, project: a, onlyFiles: o, persons: s, name: c, namePrefixes: l, nameSuffixes: u, signal: d, ...f } = {}) => (M(f), e.get("data/events/last", {
		after: B(t),
		before: B(n),
		limit: r,
		cursor_event_id: D(i),
		project_id: D(a),
		only_files: o ? !0 : null,
		person_ids: Xe(s),
		name: c,
		name_prefixes: Ze("namePrefixes", l),
		name_suffixes: Ze("nameSuffixes", u)
	}, { signal: d })),
	allEventNames: async ({ signal: t } = {}) => e.get("data/events/names", {}, { signal: t }),
	allLastLoginLogs: async ({ after: t, before: n, limit: r, lastLoginLog: i, persons: a, signal: o, ...s } = {}) => (M(s), e.get("data/events/login-logs/last", {
		after: B(t),
		before: B(n),
		limit: r,
		cursor_login_log_id: D(i),
		person_ids: Xe(a)
	}, { signal: o }))
}), $e = (e, t, n) => `${e.replace(/ /g, "_")}${n}${t.replace(/ /g, "_")}`, et = (e, t) => Object.prototype.hasOwnProperty.call(e, t) ? e[t] : null, G = ({ outputType: e, taskType: t, name: n, representation: r, fileStatus: i }) => ({
	output_type_id: D(e),
	task_type_id: D(t),
	representation: r,
	name: n,
	file_status_id: D(i)
}), tt = (e, t) => {
	if (Number.isInteger(t) && t >= 1) return t;
	throw new x(`Wrong format: ${e} must be an integer counted from 1`);
}, K = (e, t) => `data/asset-instances/${E(e)}/entities/${E(t)}`, nt = (e) => {
	let t = async (t, n, r) => F(e.fetchAll(t, { name: L(n) }, { signal: r })).then((e) => R(e, n)), n = async (t, n, r, { name: i = "main", mode: a = "output", representation: o = "", revision: s = 0, sep: c = "/", signal: l } = {}) => {
		let u = await e.post(t, {
			task_type_id: E(r),
			output_type_id: E(n),
			mode: a,
			name: i,
			representation: o,
			revision: s,
			separator: c
		}, { signal: l });
		return $e(u.folder_path, u.file_name, c);
	}, r = (t, n, r, i, a, o = {}) => {
		if ("fileStatusId" in o) throw new x("Wrong format: fileStatusId is now fileStatus");
		let { workingFile: s, person: c, name: l = n, revision: u = 0, nbElements: d = 1, representation: f = "", sep: p = "/", fileStatus: m, signal: h } = o;
		return e.post(t, j({
			output_type_id: E(r),
			task_type_id: E(i),
			comment: a,
			revision: u,
			representation: f,
			name: l,
			nb_elements: d,
			sep: p,
			working_file_id: D(s),
			person_id: D(c),
			file_status_id: D(m)
		}), { signal: h });
	}, i = (t, n, r, i, a) => e.post(t, {
		name: i,
		output_type_id: E(n),
		task_type_id: E(r)
	}, { signal: a }).then((e) => e.next_revision), a = (e, t, n, { name: r = "main", signal: a } = {}) => i(`data/entities/${E(e)}/output-files/next-revision`, t, n, r, a), o = (e, t, n, r, { name: a = "master", signal: o } = {}) => i(`${K(e, t)}/output-files/next-revision`, n, r, a, o), s = (t, n) => e.get(`data/tasks/${E(t)}/working-files/last-revisions`, {}, { signal: n }), c = (t, n, { fileName: r, onProgress: i, signal: a } = {}) => e.upload(t, {
		file: k("file", n),
		fileName: r,
		onProgress: i,
		signal: a
	}), l = (t, n, { signal: r } = {}) => e.download(`pictures/thumbnails/${t}/${E(n)}.png`, { signal: r }), u = (e, t, n, r) => c(`pictures/thumbnails/${e}/${E(t)}`, n, r), d = async (t, n) => {
		let { extension: r } = await e.get(`data/preview-files/${E(t)}`, {}, { signal: n });
		return encodeURIComponent(r);
	};
	return {
		allOutputTypes: async ({ signal: t } = {}) => e.fetchAll("output-types", {}, { signal: t }),
		allOutputTypesForEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${E(t)}/output-types`, {}, { signal: n }),
		allOutputTypesForAssetInstance: async (t, n, { signal: r } = {}) => e.get(`${K(t, n)}/output-types`, {}, { signal: r }),
		getOutputType: async (t, { signal: n } = {}) => e.fetchOne("output-types", E(t), { signal: n }),
		getOutputTypeByName: async (e, { signal: n } = {}) => t("output-types", e, n),
		newOutputType: async (n, r, { signal: i } = {}) => await t("output-types", n, i) || e.create("output-types", {
			name: n,
			short_name: r
		}, { signal: i }),
		getOutputFile: async (t, { signal: n } = {}) => e.fetchOne("output-files", E(t), { signal: n }),
		getOutputFileByPath: async (t, { signal: n } = {}) => e.fetchFirst("output-files", { path: k("path", t) }, { signal: n }),
		getAllWorkingFilesForEntity: async (t, { task: n, name: r, signal: i } = {}) => e.fetchAll(`entities/${E(t)}/working-files`, {
			task_id: D(n),
			name: r
		}, { signal: i }),
		getPreviewFile: async (t, { signal: n } = {}) => e.fetchOne("preview-files", E(t), { signal: n }),
		removePreviewFile: async (t, { force: n = !1, signal: r } = {}) => e.remove("preview-files", E(t), { force: n ? !0 : null }, { signal: r }),
		getAllPreviewFilesForTask: async (t, { signal: n } = {}) => e.fetchAll("preview-files", { task_id: E(t) }, { signal: n }),
		getAllAttachmentFilesForTask: async (t, { signal: n } = {}) => e.fetchAll(`tasks/${E(t)}/attachment-files`, {}, { signal: n }),
		getAllAttachmentFilesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/attachment-files`, {}, { signal: n }),
		allOutputFilesForEntity: async (t, { signal: n, ...r } = {}) => e.fetchAll(`entities/${E(t)}/output-files`, G(r), { signal: n }),
		allOutputFilesForAssetInstance: async (t, { temporalEntity: n, signal: r, ...i } = {}) => e.fetchAll(`asset-instances/${E(t)}/output-files`, {
			temporal_entity_id: D(n),
			...G(i)
		}, { signal: r }),
		allOutputFilesForProject: async (t, { signal: n, ...r } = {}) => e.fetchAll(`projects/${E(t)}/output-files`, G(r), { signal: n }),
		allSoftwares: async ({ signal: t } = {}) => e.fetchAll("softwares", {}, { signal: t }),
		getSoftware: async (t, { signal: n } = {}) => e.fetchOne("softwares", E(t), { signal: n }),
		getSoftwareByName: async (e, { signal: n } = {}) => t("softwares", e, n),
		newSoftware: async (n, r, i, { secondaryExtensions: a, version: o, monthlyCost: s, inventoryAmount: c, signal: l } = {}) => await t("softwares", n, l) || e.create("softwares", j({
			name: n,
			short_name: r,
			file_extension: i,
			secondary_extensions: a,
			version: o,
			monthly_cost: s,
			inventory_amount: c
		}), { signal: l }),
		updateSoftware: async (t, { signal: n } = {}) => e.update("softwares", E(t), t, { signal: n }),
		removeSoftware: async (t, { signal: n } = {}) => e.remove("softwares", E(t), {}, { signal: n }),
		allDepartmentSoftwares: async ({ signal: t } = {}) => e.get("data/departments/software-licenses", {}, { signal: t }),
		addSoftwareToDepartment: async (t, n, { signal: r } = {}) => e.post(`data/departments/${E(t)}/software-licenses`, { software_id: E(n) }, { signal: r }),
		removeSoftwareFromDepartment: async (t, n, { signal: r } = {}) => e.del(`data/departments/${E(t)}/software-licenses/${E(n)}`, void 0, { signal: r }),
		allTaskTypeSoftwares: async (t, { signal: n } = {}) => e.get(`data/projects/${E(t)}/task-type-softwares`, {}, { signal: n }),
		addSoftwareToTaskType: async (t, n, r, { signal: i } = {}) => e.post(`data/projects/${E(t)}/task-types/${E(n)}/softwares`, { software_id: E(r) }, { signal: i }),
		removeSoftwareFromTaskType: async (t, n, r, { signal: i } = {}) => e.del(`data/projects/${E(t)}/task-types/${E(n)}/softwares/${E(r)}`, void 0, { signal: i }),
		buildWorkingFilePath: async (t, { name: n = "main", mode: r = "working", software: i, revision: a = 1, sep: o = "/", signal: s } = {}) => {
			let c = await e.post(`data/tasks/${E(t)}/working-file-path`, j({
				mode: r,
				name: n,
				revision: a,
				sep: o,
				software_id: D(i)
			}), { signal: s });
			return $e(c.path, c.name, o);
		},
		buildEntityOutputFilePath: async (e, t, r, i) => n(`data/entities/${E(e)}/output-file-path`, t, r, i),
		buildAssetInstanceOutputFilePath: async (e, t, r, i, a) => n(`${K(e, t)}/output-file-path`, r, i, a),
		newWorkingFile: async (t, { name: n = "main", mode: r = "working", software: i, comment: a = "", person: o, revision: s = 0, signal: c } = {}) => e.post(`data/tasks/${E(t)}/working-files/new`, j({
			name: n,
			comment: a,
			task_id: E(t),
			revision: s,
			mode: r,
			person_id: D(o),
			software_id: D(i)
		}), { signal: c }),
		newEntityOutputFile: async (e, t, n, i, a) => r(`data/entities/${E(e)}/output-files/new`, "main", t, n, i, a),
		newAssetInstanceOutputFile: async (e, t, n, i, a, o) => r(`${K(e, t)}/output-files/new`, "master", n, i, a, o),
		getNextEntityOutputRevision: async (e, t, n, r) => a(e, t, n, r),
		getNextAssetInstanceOutputRevision: async (e, t, n, r, i) => o(e, t, n, r, i),
		getLastEntityOutputRevision: async (e, t, n, r) => a(e, t, n, r).then((e) => e - 1),
		getLastAssetInstanceOutputRevision: async (e, t, n, r, i) => o(e, t, n, r, i).then((e) => e - 1),
		getLastOutputFilesForEntity: async (t, { signal: n, ...r } = {}) => e.fetchAll(`entities/${E(t)}/output-files/last-revisions`, G(r), { signal: n }),
		getLastOutputFilesForAssetInstance: async (t, n, { signal: r, ...i } = {}) => e.get(`${K(t, n)}/output-files/last-revisions`, G(i), { signal: r }),
		getWorkingFilesForTask: async (t, { signal: n } = {}) => e.get(`data/tasks/${E(t)}/working-files`, {}, { signal: n }),
		getLastWorkingFiles: async (e, { signal: t } = {}) => s(e, t),
		getLastWorkingFileRevision: async (e, { name: t = "main", signal: n } = {}) => et(await s(e, n), t),
		getWorkingFile: async (t, { signal: n } = {}) => e.fetchOne("working-files", E(t), { signal: n }),
		updateComment: async (t, n, { signal: r } = {}) => e.put(`actions/working-files/${E(t)}/comment`, { comment: n }, { signal: r }),
		updateModificationDate: async (t, { signal: n } = {}) => e.put(`actions/working-files/${E(t)}/modified`, {}, { signal: n }),
		updateOutputFile: async (t, n, { signal: r } = {}) => e.update("output-files", E(t), n, { signal: r }),
		updateProjectFileTree: async (t, n, { signal: r } = {}) => e.update("projects", E(t), P({ file_tree: n }), { signal: r }),
		uploadWorkingFile: async (e, t, n) => c(`data/working-files/${E(e)}/file`, t, n),
		downloadWorkingFile: async (t, { signal: n } = {}) => e.download(`data/working-files/${E(t)}/file`, { signal: n }),
		downloadPreviewFile: async (t, { signal: n } = {}) => {
			let r = await d(t, n), i = r === "mp4" ? "movies" : "pictures";
			return e.download(`${i}/originals/preview-files/${E(t)}.${r}`, { signal: n });
		},
		getAttachmentFile: async (t, { signal: n } = {}) => e.fetchOne("attachment-files", E(t), { signal: n }),
		downloadAttachmentFile: async (t, { signal: n } = {}) => {
			let r = E(t);
			return e.download(`data/attachment-files/${r}/file/${r}`, { signal: n });
		},
		downloadPreviewFileThumbnail: async (t, { signal: n } = {}) => e.download(`pictures/thumbnails/preview-files/${E(t)}.png`, { signal: n }),
		downloadPreviewFileCover: async (t, { signal: n } = {}) => e.download(`pictures/originals/preview-files/${E(t)}.png`, { signal: n }),
		downloadPersonAvatar: async (e, t) => l("persons", e, t),
		uploadPersonAvatar: async (e, t, n) => u("persons", e, t, n),
		downloadProjectAvatar: async (e, t) => l("projects", e, t),
		uploadProjectAvatar: async (e, t, n) => u("projects", e, t, n),
		downloadOrganisationAvatar: async (e, t) => l("organisations", e, t),
		uploadOrganisationAvatar: async (e, t, n) => u("organisations", e, t, n),
		updatePreview: async (t, n, { signal: r } = {}) => e.update("preview-files", E(t), n, { signal: r }),
		getRunningPreviewFiles: async ({ limit: t, lastPreviewFile: n, signal: r } = {}) => e.fetchAll("playlists/preview-files/running", {
			limit: t,
			cursor_preview_file_id: D(n)
		}, { signal: r }),
		downloadPreviewMovie: async (t, { signal: n } = {}) => {
			let r = await d(t, n);
			return e.download(`movies/originals/preview-files/${E(t)}.${r}`, { signal: n });
		},
		downloadPreviewLowdefMovie: async (t, { signal: n } = {}) => e.download(`movies/low/preview-files/${E(t)}.mp4`, { signal: n }),
		downloadAttachmentThumbnail: async (t, { signal: n } = {}) => e.download(`pictures/thumbnails/attachment-files/${E(t)}.png`, { signal: n }),
		extractFrameFromPreview: async (t, n, { signal: r } = {}) => e.request("GET", `actions/preview-files/${E(t)}/extract-frame`, {
			raw: !0,
			query: { frame_number: tt("frameNumber", n) },
			signal: r
		}),
		updatePreviewPosition: async (t, n, { signal: r } = {}) => e.put(`actions/preview-files/${E(t)}/update-position`, { position: tt("position", n) }, { signal: r }),
		updatePreviewAnnotations: async (t, { additions: n, updates: r, deletions: i, signal: a } = {}) => e.put(`actions/preview-files/${E(t)}/update-annotations`, j({
			additions: n,
			updates: r,
			deletions: i
		}), { signal: a }),
		extractTileFromPreview: async (t, { signal: n } = {}) => e.request("GET", `actions/preview-files/${E(t)}/extract-tile`, {
			raw: !0,
			signal: n
		}),
		allFileStatuses: async ({ signal: t } = {}) => e.fetchAll("file-status", {}, { signal: t }),
		newFileStatus: async (n, r, { signal: i } = {}) => await t("file-status", n, i) || e.create("file-status", {
			name: n,
			color: r
		}, { signal: i }),
		getFileStatus: async (t, { signal: n } = {}) => e.fetchOne("file-status", E(t), { signal: n }),
		getFileStatusByName: async (e, { signal: n } = {}) => t("file-status", e, n),
		getPreviewFileUrl: async (t, { signal: n } = {}) => Ne(await e.get(`data/preview-files/${E(t)}`, {}, { signal: n })),
		getPreviewMovieUrl: async (t, { lowdef: n = !1, signal: r } = {}) => Pe(await e.get(`data/preview-files/${E(t)}`, {}, { signal: r }), { lowdef: n }),
		getPreviewLowdefMovieUrl: async (t, { signal: n } = {}) => Pe(await e.get(`data/preview-files/${E(t)}`, {}, { signal: n }), { lowdef: !0 }),
		getAttachmentThumbnailUrl: async (e) => Fe(e)
	};
}, rt = (e) => ({
	allHardwareItems: async ({ signal: t } = {}) => e.fetchAll("hardware-items", {}, { signal: t }),
	getHardwareItem: async (t, { signal: n } = {}) => e.fetchOne("hardware-items", E(t), { signal: n }),
	newHardwareItem: async (t, { shortName: n, monthlyCost: r, inventoryAmount: i, signal: a } = {}) => e.create("hardware-items", j({
		name: k("name", t),
		short_name: n ?? "",
		monthly_cost: r,
		inventory_amount: i
	}), { signal: a }),
	updateHardwareItem: async (t, { signal: n } = {}) => {
		let r = E(t);
		if (typeof t != "object") throw new x("Wrong format: expected the hardware item, not its id");
		return e.update("hardware-items", r, P({
			name: t.name,
			short_name: t.short_name,
			monthly_cost: t.monthly_cost,
			inventory_amount: t.inventory_amount,
			archived: t.archived
		}, j), { signal: n });
	},
	removeHardwareItem: async (t, { signal: n } = {}) => e.remove("hardware-items", E(t), {}, { signal: n }),
	allDepartmentHardwareItems: async ({ signal: t } = {}) => e.get("data/departments/hardware-items", {}, { signal: t }),
	addHardwareItemToDepartment: async (t, n, { signal: r } = {}) => e.post(`data/departments/${E(t)}/hardware-items`, { hardware_item_id: E(n) }, { signal: r }),
	removeHardwareItemFromDepartment: async (t, n, { signal: r } = {}) => e.del(`data/departments/${E(t)}/hardware-items/${E(n)}`, void 0, { signal: r })
}), it = (e) => ({
	allNews: async ({ project: t, onlyPreview: n, taskType: r, taskStatus: i, person: a, episode: o, page: s, limit: c, after: l, before: u, signal: d } = {}) => {
		let f = D(t);
		return e.get(f ? `data/projects/${f}/news` : "data/projects/news", {
			only_preview: n ? !0 : null,
			task_type_id: D(r),
			task_status_id: D(i),
			person_id: D(a),
			episode_id: D(o),
			page: s,
			limit: c,
			after: B(l),
			before: B(u)
		}, { signal: d });
	},
	getNews: async (t, n, { signal: r } = {}) => F(e.get(`data/projects/${E(t)}/news/${E(n)}`, {}, { signal: r }))
}), q = (e) => {
	if (Number.isInteger(e)) return e;
	throw new x("Wrong format: expected an integer");
}, at = (e) => String(q(e)).padStart(2, "0"), ot = (e, t) => t.reduce((e, t) => t in e ? {
	...e,
	[t]: z(e[t])
} : e, e), J = (e, t, { project: n, studio: r, signal: i } = {}) => e.get(t, {
	project_id: D(n),
	studio_id: D(r)
}, { signal: i }), st = (e, t, { project: n, signal: r } = {}) => F(J(e, t, {
	project: n,
	signal: r
})), ct = (e, t, n, r, { countMode: i, signal: a } = {}) => F(e.get(t, {
	project_id: E(n),
	task_type_id: E(r),
	count_mode: i
}, { signal: a })), lt = (e, t, { signal: n } = {}) => F(e.fetchAll("departments", { name: L(t) }, { signal: n })).then((e) => R(e, t)), ut = (e, t, { isBot: n = !1, signal: r } = {}) => e.fetchFirst("persons", {
	email: k("email", t),
	is_bot: n
}, { signal: r }), dt = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => e !== "expiration_date")), ft = (e, t, { signal: n } = {}) => {
	let r = E(t), i = A(t);
	if (Object.keys(i).filter((e) => e !== "id").join() === "expiration_date") throw new x("Wrong format: expiration_date is never saved, generateToken changes it");
	return e.update("persons", r, dt(Array.isArray(i.departments) ? {
		...i,
		departments: O(i.departments)
	} : i), { signal: n });
}, pt = (e, t, { force: n = !1, signal: r } = {}) => e.remove("persons", E(t), { force: n ? !0 : null }, { signal: r }), mt = (e) => (e.full_name || "").toLowerCase(), ht = (e) => [...e].sort((e, t) => {
	let [n, r] = [mt(e), mt(t)];
	return n < r ? -1 : +(n > r);
}), gt = (e) => ({
	allOrganisations: async ({ signal: t } = {}) => e.fetchAll("organisations", {}, { signal: t }).then(I),
	allDepartments: async ({ signal: t } = {}) => e.fetchAll("departments", {}, { signal: t }).then(I),
	allPersons: async ({ relations: t = !1, isGuest: n, signal: r } = {}) => e.fetchAll("persons", {
		relations: t ? !0 : null,
		is_guest: n
	}, { signal: r }).then(ht),
	getDepartmentByName: async (t, n) => lt(e, t, n),
	getDepartment: async (t, { signal: n } = {}) => e.fetchOne("departments", E(t), { signal: n }),
	getPerson: async (t, { relations: n = !1, signal: r } = {}) => e.fetchFirst("persons", {
		id: E(t),
		relations: n ? !0 : null
	}, { signal: r }),
	getPersonByDesktopLogin: async (t, { signal: n } = {}) => e.fetchFirst("persons", {
		desktop_login: k("desktopLogin", t),
		is_bot: !1
	}, { signal: n }),
	getPersonByEmail: async (t, n) => ut(e, t, n),
	getPersonByFullName: async (t, { firstName: n, lastName: r, signal: i } = {}) => e.fetchFirst("persons", n != null && r != null ? {
		first_name: k("firstName", n),
		last_name: k("lastName", r),
		is_bot: !1
	} : {
		full_name: k("fullName", t),
		is_bot: !1
	}, { signal: i }),
	getOrganisation: async ({ signal: t } = {}) => e.get("auth/authenticated", {}, { signal: t }).then((e) => e.organisation),
	updateOrganisation: async (t, { signal: n } = {}) => e.update("organisations", E(t), t, { signal: n }),
	newDepartment: async (t, { color: n = "", archived: r = !1, signal: i } = {}) => await lt(e, t, { signal: i }) || e.post("data/departments", {
		name: t,
		color: n,
		archived: r
	}, { signal: i }),
	updateDepartment: async (t, { signal: n } = {}) => e.update("departments", E(t), t, { signal: n }),
	removeDepartment: async (t, { signal: n } = {}) => e.remove("departments", E(t), {}, { signal: n }),
	newPerson: async (t, n, r, { phone: i = "", role: a = "user", desktopLogin: o = "", departments: s = [], password: c = null, active: l = !0, contractType: u = "open-ended", signal: d } = {}) => {
		let f = O(s);
		return await ut(e, r, { signal: d }) || e.post("data/persons", {
			first_name: t,
			last_name: n,
			email: r,
			phone: i,
			role: a,
			desktop_login: o,
			departments: f,
			password: c,
			active: l,
			contract_type: u
		}, { signal: d });
	},
	updatePerson: async (t, n) => ft(e, t, n),
	removePerson: async (t, n) => pt(e, t, n),
	newBot: async (t, n, { role: r = "user", departments: i = [], active: a = !0, expirationDate: o = null, signal: s } = {}) => e.post("data/persons", {
		first_name: k("name", t),
		last_name: "",
		email: k("email", n),
		role: r,
		departments: O(i),
		active: a,
		expiration_date: z(o),
		is_bot: !0
	}, { signal: s }),
	updateBot: async (t, n) => ft(e, t, n),
	generateToken: async (t, n, { signal: r } = {}) => {
		let i = E(t);
		if (n === void 0) throw new x("Missing parameter: expirationDate is required, null for no expiry");
		let a = await e.update("persons", i, { expiration_date: n === null ? null : V(n) }, { signal: r });
		if (typeof a?.access_token != "string" || !a.access_token) throw new b("Zou issued no access token", {
			status: 200,
			path: `data/persons/${i}`,
			method: "PUT",
			body: a
		});
		return a;
	},
	removeBot: async (t, n) => pt(e, t, n),
	getTimeSpentsRange: async (t, n, r, { signal: i } = {}) => F(e.get(`data/persons/${E(t)}/time-spents`, {
		start_date: V(n),
		end_date: V(r)
	}, { signal: i })),
	getAllMonthTimeSpents: async (t, n, { signal: r } = {}) => F(e.get(`data/persons/${E(t)}/time-spents/month/all/${V(n).slice(0, 7).replace("-", "/")}`, {}, { signal: r })),
	getPresenceLog: async (t, n, { signal: r } = {}) => {
		let i = `data/persons/presence-logs/${q(t)}-${at(n)}`;
		return e.get(i, {}, {
			signal: r,
			read: async (e) => {
				let t = await e.text();
				if ((e.headers.get("Content-Type") || "").includes("csv")) return t;
				throw new b(`GET ${i} answered ${e.status} without CSV`, {
					status: e.status,
					path: i,
					method: "GET",
					body: t
				});
			}
		});
	},
	getTimeSpentsByDate: async (t, n, { signal: r } = {}) => F(e.get(`data/persons/${E(t)}/time-spents/${V(n)}`, {}, { signal: r })),
	getWeekTimeSpents: async (t, n, r, i) => st(e, `data/persons/${E(t)}/time-spents/week/${q(n)}/${q(r)}`, i),
	getMonthTimeSpents: async (t, n, r, i) => st(e, `data/persons/${E(t)}/time-spents/month/${q(n)}/${q(r)}`, i),
	getDayTimeSpents: async (t, n, r, i, a) => st(e, `data/persons/${E(t)}/time-spents/day/${q(n)}/${q(r)}/${q(i)}`, a),
	getYearTimeSpents: async (t, n, r) => st(e, `data/persons/${E(t)}/time-spents/year/${q(n)}`, r),
	getTimeSpentsDayTable: async (t, n, r) => J(e, `data/persons/time-spents/day-table/${q(t)}/${q(n)}`, r),
	getTimeSpentsWeekTable: async (t, n) => J(e, `data/persons/time-spents/week-table/${q(t)}`, n),
	getTimeSpentsMonthTable: async (t, n) => J(e, `data/persons/time-spents/month-table/${q(t)}`, n),
	getTimeSpentsYearTable: async (t) => J(e, "data/persons/time-spents/year-table", t),
	getMonthQuotaShots: async (t, n, r, i, a, o) => ct(e, `data/persons/${E(t)}/quota-shots/month/${q(i)}/${q(a)}`, n, r, o),
	getWeekQuotaShots: async (t, n, r, i, a, o) => ct(e, `data/persons/${E(t)}/quota-shots/week/${q(i)}/${q(a)}`, n, r, o),
	getDayQuotaShots: async (t, n, r, i, a, o, s) => ct(e, `data/persons/${E(t)}/quota-shots/day/${q(i)}/${q(a)}/${q(o)}`, n, r, s),
	allDayOffs: async ({ year: t, month: n, signal: r } = {}) => {
		if (t == null && n == null) return e.fetchAll("day-offs", {}, { signal: r });
		if (t == null) throw new x("Missing parameter: year is required with month");
		let i = n == null ? q(t) : `${q(t)}/${q(n)}`;
		return e.get(`data/persons/day-offs/${i}`, {}, { signal: r });
	},
	getDayOffByDate: async (t, n, { signal: r } = {}) => {
		let i = await F(e.get(`data/persons/${E(t)}/day-offs/${V(n)}`, {}, { signal: r }));
		return i && i.id ? i : null;
	},
	getDayOffs: async (t, { signal: n } = {}) => F(e.fetchAll(`persons/${E(t)}/day-offs`, {}, { signal: n })),
	getWeekDayOffs: async (t, n, r, { signal: i } = {}) => F(e.get(`data/persons/${E(t)}/day-offs/week/${q(n)}/${q(r)}`, {}, { signal: i })),
	getMonthDayOffs: async (t, n, r, { signal: i } = {}) => F(e.get(`data/persons/${E(t)}/day-offs/month/${q(n)}/${at(r)}`, {}, { signal: i })),
	getYearDayOffs: async (t, n, { signal: r } = {}) => F(e.get(`data/persons/${E(t)}/day-offs/year/${q(n)}`, {}, { signal: r })),
	getDayOff: async (t, { signal: n } = {}) => e.fetchOne("day-offs", E(t), { signal: n }),
	newDayOff: async (t, n, r, { description: i = null, signal: a } = {}) => e.create("day-offs", {
		person_id: E(t),
		date: z(n),
		end_date: z(r),
		...i === null ? {} : { description: i }
	}, { signal: a }),
	updateDayOff: async (t, { signal: n } = {}) => e.update("day-offs", E(t), ot(A(t), ["date", "end_date"]), { signal: n }),
	removeDayOff: async (t, { signal: n } = {}) => e.remove("day-offs", E(t), {}, { signal: n }),
	changePasswordForPerson: async (t, n, { signal: r } = {}) => e.post(`actions/persons/${E(t)}/change-password`, {
		password: n,
		password_2: n
	}, { signal: r }),
	invitePerson: async (t, { signal: n } = {}) => e.get(`actions/persons/${E(t)}/invite`, {}, { signal: n }),
	generateResetPasswordLink: async (t, { signal: n } = {}) => e.post(`actions/persons/${E(t)}/reset-password-link`, null, { signal: n }),
	addPersonToDepartment: async (t, n, { signal: r } = {}) => e.post(`actions/persons/${E(t)}/departments/add`, { department_id: E(n) }, { signal: r }),
	removePersonFromDepartment: async (t, n, { signal: r } = {}) => e.del(`actions/persons/${E(t)}/departments/${E(n)}`, null, { signal: r }),
	disableTwoFactorAuthentication: async (t, { signal: n } = {}) => e.del(`actions/persons/${E(t)}/disable-two-factor-authentication`, null, { signal: n }),
	clearPersonAvatar: async (t, { signal: n } = {}) => e.del(`actions/persons/${E(t)}/clear-avatar`, null, { signal: n }),
	setAvatar: async (t, n, { fileName: r, onProgress: i, signal: a } = {}) => e.upload(`pictures/thumbnails/persons/${E(t)}`, {
		file: k("file", n),
		fileName: r,
		onProgress: i,
		signal: a
	}),
	importPersonsWithCsv: async (t, { update: n = !1, fileName: r, onProgress: i, signal: a } = {}) => e.upload("import/csv/persons", {
		file: k("file", t),
		query: { update: n ? !0 : null },
		fileName: r,
		onProgress: i,
		signal: a
	}),
	allSalaryScales: async ({ signal: t } = {}) => e.fetchAll("salary-scales", {}, { signal: t }),
	updateSalaryScale: async (t, { signal: n } = {}) => e.update("salary-scales", E(t), P({ salary: A(t).salary }), { signal: n }),
	getPersonUrl: async (t) => Me(H(e.host), t)
}), _t = /^[\w-]+$/, vt = [
	"build_jobs",
	"type",
	"created_at",
	"updated_at",
	"first_preview_file_id"
], yt = (e) => {
	if (typeof e == "string" && _t.test(e)) return e;
	throw new x("Wrong format: expected a share link token");
}, bt = (e) => e.shots || [], xt = (e) => typeof e == "object" && !!e && (e.shots === null || Array.isArray(e.shots)), St = (e) => typeof e == "string" ? e.toLowerCase() : e, Ct = (e) => ({
	entity_id: St(e.entity_id ?? e.id),
	preview_file_id: St(e.preview_file_id) ?? null
}), wt = (e) => {
	if (!xt(e)) return e;
	let { shots: t, ...n } = e;
	return t === null ? n : {
		...n,
		shots: t.map(Ct)
	};
}, Tt = (e) => typeof e == "object" ? wt(Object.fromEntries(Object.entries(e).filter(([e]) => !vt.includes(e)))) : e, Et = (e) => {
	let t = typeof e == "object" && !!e && "entity" in e;
	return j({
		entity_id: E(t ? e.entity : e),
		preview_file_id: t ? D(e.previewFile) : null
	});
}, Y = (e, t = "") => `shared/playlists/${yt(e)}${t}`, Dt = (e) => Object.values(e).filter((e) => e && e.length > 0).map((e) => e[0]).reduce((e, t) => e === null || e.created_at < t.created_at ? t : e, null), Ot = (e) => {
	let t = async (t, n, { episode: r, isForAll: i, forEntity: a }, o) => {
		let s = D(r), c = await e.fetchAll("playlists", {
			project_id: E(t),
			name: L(n),
			episode_id: s
		}, { signal: o }), l = !!i;
		return R(c.filter((e) => s !== null || !e.episode_id && !!e.is_for_all === l && (!l || (e.for_entity || "shot") === a)), n);
	}, n = (t, n) => e.get(`data/playlists/entities/${E(t)}/preview-files`, {}, { signal: n }), r = (t, n) => e.update("playlists", E(t), Tt(t), { signal: n }), i = async (t, n) => {
		if (xt(t)) return t;
		let r = E(t), { shots: i } = await e.get(`data/playlists/${r}`, {}, { signal: n });
		return {
			...typeof t == "object" ? t : { id: r },
			shots: i
		};
	}, a = async (t, n, r, i) => (r && await e.update("playlists", E(t), { shots: n.map(Ct) }, { signal: i }), {
		...t,
		shots: n
	});
	return {
		allPlaylists: async ({ signal: t } = {}) => e.fetchAll("playlists", {}, { signal: t }).then(I),
		allShotsForPlaylist: async (t, { signal: n } = {}) => e.get(`data/playlists/${E(t)}`, {}, { signal: n }).then(bt),
		allPlaylistsForProject: async (t, { page: n = 1, signal: r } = {}) => e.fetchAll(`projects/${E(t)}/playlists`, { page: n }, { signal: r }).then(I),
		allPlaylistsForEpisode: async (t, { page: n = 1, signal: r } = {}) => {
			let i = E(t), a = typeof t == "object" && "project_id" in t ? t : await e.get(`data/episodes/${i}`, {}, { signal: r });
			return e.fetchAll(`projects/${E(a.project_id)}/episodes/${i}/playlists`, { page: n }, { signal: r }).then(I);
		},
		getPlaylist: async (t, { signal: n } = {}) => e.fetchOne("playlists", E(t), { signal: n }),
		getPlaylistByName: async (e, n, { episode: r = null, isForAll: i = !1, forEntity: a = "shot", signal: o } = {}) => t(e, n, {
			episode: r,
			isForAll: i,
			forEntity: a
		}, o),
		newPlaylist: async (n, r, { episode: i = null, forEntity: a = "shot", forClient: o = !1, isForAll: s = !1, taskType: c = null, signal: l } = {}) => {
			let u = j({
				name: r,
				project_id: E(n),
				for_entity: a,
				for_client: o,
				is_for_all: s,
				episode_id: D(i),
				task_type_id: D(c)
			});
			return await t(n, r, {
				episode: i,
				isForAll: s,
				forEntity: a
			}, l) || e.create("playlists", u, { signal: l });
		},
		updatePlaylist: async (e, { signal: t } = {}) => r(e, t),
		getEntityPreviewFiles: async (e, { signal: t } = {}) => n(e, t),
		addEntityToPlaylist: async (t, r, { previewFile: a = null, persist: o = !0, signal: s } = {}) => {
			let c = E(r), l = E(t), u = j({
				entity_id: c,
				preview_file_id: D(a ?? Dt(await n(c, s)))
			});
			if (o) return e.post(`actions/playlists/${l}/add-entity`, u, { signal: s });
			let d = await i(t, s);
			return {
				...d,
				shots: [...bt(d), u]
			};
		},
		removeEntityFromPlaylist: async (e, t, { persist: n = !0, signal: r } = {}) => {
			let o = E(t), s = await i(e, r), c = bt(s), l = c.filter((e) => St(e.entity_id) !== o);
			return l.length === c.length ? {
				...s,
				shots: l
			} : a(s, l, n, r);
		},
		updateEntityPreview: async (e, t, n, { previousPreviewFile: r, persist: o = !0, signal: s } = {}) => {
			let c = E(t), l = E(n), u = r === void 0 ? void 0 : D(r), d = await i(e, s), f = bt(d), p = (e) => St(e.entity_id) === c, m = f.findIndex((e) => p(e) && (St(e.preview_file_id) || null) === u), h = (e, t) => u === void 0 ? p(e) : t === m;
			if (!f.some(h)) return {
				...d,
				shots: f
			};
			let g = f.map((e, t) => h(e, t) ? {
				...e,
				preview_file_id: l
			} : e);
			return a(d, g, o, s);
		},
		deletePlaylist: async (t, { signal: n } = {}) => e.del(`data/playlists/${E(t)}`, void 0, { signal: n }),
		getBuildJob: async (t, n, { signal: r } = {}) => F(e.get(`data/playlists/${E(t)}/jobs/${E(n)}`, {}, { signal: r })),
		removeBuildJob: async (t, n, { signal: r } = {}) => e.del(`data/playlists/${E(t)}/jobs/${E(n)}`, void 0, { signal: r }),
		allBuildJobsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/build-jobs`, {}, { signal: n }),
		buildPlaylistMovie: async (t, { full: n = !1, signal: r } = {}) => e.get(`data/playlists/${E(t)}/build/mp4`, { full: n ? !0 : null }, { signal: r }),
		downloadPlaylistBuild: async (t, n, { signal: r } = {}) => e.download(`data/playlists/${E(t)}/jobs/${E(n)}/build/mp4`, { signal: r }),
		downloadPlaylistZip: async (t, { signal: n } = {}) => e.download(`data/playlists/${E(t)}/download/zip`, { signal: n }),
		generateTempPlaylist: async (t, n, { sort: r = !1, signal: i } = {}) => e.request("POST", `data/projects/${E(t)}/playlists/temp`, {
			body: n,
			query: { sort: r ? !0 : null },
			signal: i
		}),
		notifyClientsPlaylistReady: async (t, { studio: n = null, department: r = null, signal: i } = {}) => e.post(`data/playlists/${E(t)}/notify-clients`, j({
			studio_id: D(n),
			department_id: D(r)
		}), { signal: i }),
		newShareLink: async (t, { expirationDate: n = null, canComment: r = !0, password: i = null, signal: a } = {}) => e.post(`data/playlists/${E(t)}/share`, j({
			can_comment: r,
			expiration_date: z(n) || null,
			password: i || null
		}), { signal: a }),
		allShareLinksForPlaylist: async (t, { signal: n } = {}) => e.fetchAll(`playlists/${E(t)}/share`, {}, { signal: n }),
		removeShareLink: async (t, n, { signal: r } = {}) => e.del(`data/playlists/${E(t)}/share/${yt(n)}`, void 0, { signal: r }),
		getPlaylistForProject: async (t, n, { signal: r } = {}) => F(e.get(`data/projects/${E(t)}/playlists/${E(n)}`, {}, { signal: r })),
		addEntitiesToPlaylist: async (t, n, { signal: r } = {}) => {
			if (!Array.isArray(n) || n.length === 0) throw new x("Missing parameter: entities");
			return e.post(`actions/playlists/${E(t)}/add-entities`, { entities: n.map(Et) }, { signal: r });
		},
		sendShareLinkInvitations: async (t, n, { emails: r = [], persons: i = [], message: a = null, signal: o } = {}) => e.post(`data/playlists/${E(t)}/share/${yt(n)}/invite`, j({
			emails: r,
			person_ids: O(i),
			message: a
		}), { signal: o }),
		newSharedPlaylistGuest: async (t, { firstName: n = null, lastName: r = null, guest: i = null, signal: a } = {}) => e.post(Y(t, "/guest"), j({
			first_name: n,
			last_name: r,
			guest_id: D(i)
		}), { signal: a }),
		getSharedPlaylist: async (t, { password: n = null, signal: r } = {}) => F(e.get(Y(t), { password: n }, { signal: r })),
		getSharedPlaylistContext: async (t, { password: n = null, signal: r } = {}) => F(e.get(Y(t, "/context"), { password: n }, { signal: r })),
		updateSharedPlaylistAnnotations: async (t, n, r, { additions: i = [], updates: a = [], deletions: o = [], signal: s } = {}) => e.put(Y(t, "/annotations"), {
			guest_id: E(n),
			preview_file_id: E(r),
			additions: i,
			updates: a,
			deletions: o
		}, { signal: s }),
		allSharedPlaylistComments: async (t, { password: n = null, signal: r } = {}) => e.get(Y(t, "/comments"), { password: n }, { signal: r }),
		newSharedPlaylistComment: async (t, n, r, i, { text: a = "", checklist: o = null, password: s = null, signal: c } = {}) => e.request("POST", Y(t, "/comments"), {
			body: j({
				guest_id: E(n),
				task_id: E(r),
				task_status_id: E(i),
				text: a,
				checklist: o
			}),
			query: { password: s },
			signal: c
		}),
		updateSharedPlaylistComment: async (t, n, r, { text: i = null, checklist: a = null, taskStatus: o = null, signal: s } = {}) => e.put(Y(t, `/comments/${E(n)}`), j({
			guest_id: E(r),
			text: i,
			checklist: a,
			task_status_id: D(o)
		}), { signal: s }),
		removeSharedPlaylistComment: async (t, n, r, { signal: i } = {}) => e.request("DELETE", Y(t, `/comments/${E(n)}`), {
			query: { guest_id: E(r) },
			signal: i
		}),
		addSharedPlaylistCommentAttachments: async (t, n, r, i, { onProgress: a, signal: o } = {}) => e.upload(Y(t, `/comments/${E(n)}/attachments`), {
			file: i,
			fields: { guest_id: E(r) },
			onProgress: a,
			signal: o
		}),
		removeSharedPlaylistCommentAttachment: async (t, n, r, i, { signal: a } = {}) => e.request("DELETE", Y(t, `/comments/${E(n)}/attachments/${E(r)}`), {
			query: { guest_id: E(i) },
			signal: a
		})
	};
}, kt = [
	"team",
	"asset_types",
	"task_statuses",
	"task_types"
], At = ["status", "ready_for"], jt = [
	"supervisor",
	"lead",
	"artist"
], Mt = [
	"senior",
	"mid",
	"junior"
], Nt = [
	"department_id",
	"months_duration",
	"daily_salary"
], Pt = [
	"user",
	"admin",
	"supervisor",
	"manager",
	"client",
	"vendor"
], Ft = (e, t, n) => {
	if (n == null || t.includes(n)) return n;
	throw new x(`Wrong format: ${e} must be one of ${t.join(", ")}`);
}, It = (e) => {
	if (Array.isArray(e) && e.every((e) => Pt.includes(e))) return e;
	throw new x(`Wrong format: rolesForBoard must be a list of ${Pt.join(", ")}`);
}, Lt = (e) => {
	if (typeof e != "object" || !e) return;
	let t = (t) => e[t] !== void 0, { out_field_type: n, out_task_status_id: r } = e;
	if (t("out_field_type") && !At.includes(n)) throw new x(`Wrong format: out_field_type must be one of ${At.join(", ")}`);
	if ((n === "status" || !t("out_field_type") && t("out_task_status_id")) && r == null) throw new x("Missing parameter: out_task_status_id is required with status");
	if (n === "ready_for" && t("entity_type") && e.entity_type !== "asset") throw new x("Wrong format: ready_for only works on assets");
}, Rt = (e) => kt.filter((t) => Array.isArray(e[t])).reduce((t, n) => ({
	...t,
	[n]: O(e[n])
}), e), zt = (e, t) => {
	if (e instanceof Blob && !/\.hdr$/i.test(t || e.name || "")) throw new x("Wrong format: the file name must end in .hdr (fileName names a bare Blob)");
}, X = (e, t) => `projects/${E(e)}/settings/${t}`, Z = (e) => `projects/${E(e)}/metadata-descriptors`, Q = (e) => `projects/${E(e)}/budgets`, Bt = (e, t) => `${Q(e)}/${E(t)}/entries`, Vt = (e) => encodeURIComponent(k("fieldName", e)), Ht = (e, t, n) => e.update("projects", E(t), Rt(t), n), Ut = (e, t, n, r) => e.fetchAll(t, { name: L(n) }, { signal: r }).then((e) => R(e, n)), Wt = (e) => ({
	allProjectStatus: async ({ signal: t } = {}) => e.fetchAll("project-status", {}, { signal: t }).then(I),
	getProjectStatusByName: async (t, { signal: n } = {}) => Ut(e, "project-status", t, n),
	allProjects: async ({ signal: t } = {}) => e.fetchAll("projects", {}, { signal: t }).then(I),
	allOpenProjects: async ({ signal: t } = {}) => e.fetchAll("projects/open", {}, { signal: t }).then(I),
	getProject: async (t, { signal: n } = {}) => e.fetchOne("projects", E(t), { signal: n }),
	getProjectByName: async (t, { signal: n } = {}) => Ut(e, "projects", t, n),
	newProject: async (t, { productionType: n, team: r = [], assetTypes: i = [], taskStatuses: a = [], taskTypes: o = [], productionStyle: s, projectTemplate: c, signal: l } = {}) => {
		let u = {
			team: O(r),
			asset_types: O(i),
			task_statuses: O(a),
			task_types: O(o)
		}, d = D(c);
		return await Ut(e, "projects", t, l) || e.create("projects", {
			name: t,
			...u,
			...j({
				production_type: n,
				production_style: s,
				project_template_id: d
			})
		}, { signal: l });
	},
	removeProject: async (t, { force: n = !1, signal: r } = {}) => e.remove("projects", E(t), { force: n ? !0 : null }, { signal: r }),
	updateProject: async (t, { signal: n } = {}) => Ht(e, t, { signal: n }),
	updateProjectData: async (t, n = {}, { signal: r } = {}) => {
		let i = he({ ...N(n) }), a = await e.get(`data/projects/${E(t)}`, {}, { signal: r });
		return e.update("projects", E(t), { data: {
			...a.data,
			...i
		} }, { signal: r });
	},
	closeProject: async (t, { signal: n } = {}) => {
		let r = E(t), i = (await e.fetchAll("project-status", {}, { signal: n })).find((e) => (e.name || "").toLowerCase() === "closed");
		if (!i) throw new b("No closed project status found");
		return e.update("projects", r, { project_status_id: i.id }, { signal: n });
	},
	addAssetType: async (t, n, { signal: r } = {}) => e.create(X(t, "asset-types"), { asset_type_id: E(n) }, { signal: r }),
	addTaskType: async (t, n, r, { hdBitrateCompression: i, ldBitrateCompression: a, signal: o } = {}) => e.create(X(t, "task-types"), {
		...j({
			task_type_id: E(n),
			priority: r
		}),
		hd_bitrate_compression: i,
		ld_bitrate_compression: a
	}, { signal: o }),
	addTaskStatus: async (t, n, { signal: r } = {}) => e.create(X(t, "task-status"), { task_status_id: E(n) }, { signal: r }),
	removeTaskType: async (t, n, { signal: r } = {}) => e.remove(X(t, "task-types"), E(n), {}, { signal: r }),
	removeTaskStatus: async (t, n, { signal: r } = {}) => e.remove(X(t, "task-status"), E(n), {}, { signal: r }),
	addMetadataDescriptor: async (t, n, r, i = {}) => {
		if ("taskTypeId" in i) throw new x("Wrong format: taskTypeId is now taskType");
		let { dataType: a = "string", choices: o = [], forClient: s = !1, departments: c = [], taskType: l, signal: u } = i;
		return e.create(Z(t), j({
			name: k("name", n),
			data_type: a,
			choices: o,
			for_client: s,
			entity_type: k("entityType", r),
			departments: O(c),
			task_type_id: D(l)
		}), { signal: u });
	},
	getMetadataDescriptor: async (t, n, { signal: r } = {}) => e.fetchOne(Z(t), E(n), { signal: r }),
	getMetadataDescriptorByFieldName: async (t, n, { entityType: r, taskType: i, signal: a } = {}) => e.fetchFirst("metadata-descriptors", {
		project_id: E(t),
		field_name: k("fieldName", n),
		entity_type: r,
		task_type_id: D(i),
		relations: !0
	}, { signal: a }),
	allMetadataDescriptors: async (t, { entityType: n, signal: r } = {}) => e.fetchAll(Z(t), {}, { signal: r }).then((e) => n == null ? e : e.filter((e) => e.entity_type === n)),
	updateMetadataDescriptor: async (t, n, { signal: r } = {}) => {
		let i = E(n), { name: a, data_type: o, choices: s, for_client: c, departments: l } = A(n), u = P({
			name: a,
			data_type: o,
			choices: s,
			for_client: c,
			departments: l
		});
		u.departments && O(u.departments);
		let d = {
			...await e.get(`data/${Z(t)}/${i}`, {}, { signal: r }),
			...u
		};
		return e.update(Z(t), i, j({
			name: u.name,
			data_type: d.data_type,
			choices: d.choices,
			for_client: d.for_client,
			departments: O(d.departments || [])
		}), { signal: r });
	},
	removeMetadataDescriptor: async (t, n, { signal: r } = {}) => e.remove(Z(t), E(n), {}, { signal: r }),
	reorderMetadataDescriptors: async (t, n, r, { signal: i } = {}) => e.create(`${Z(t)}/reorder`, {
		entity_type: n,
		descriptor_ids: O(r)
	}, { signal: i }),
	getTeam: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/team`, {}, { signal: n }),
	addPersonToTeam: async (t, n, { role: r, signal: i } = {}) => e.create(`projects/${E(t)}/team`, j({
		person_id: E(n),
		role: r
	}), { signal: i }),
	updateTeamMemberRole: async (t, n, r, { signal: i } = {}) => {
		if (r === void 0) throw new x("Missing parameter: role is required, null restores the global role");
		return e.update(`projects/${E(t)}/team`, E(n), { role: r }, { signal: i });
	},
	removePersonFromTeam: async (t, n, { signal: r } = {}) => e.remove(`projects/${E(t)}/team`, E(n), {}, { signal: r }),
	getProjectTaskTypes: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/task-types`, {}, { signal: n }),
	getProjectTaskStatuses: async (t, { signal: n } = {}) => e.fetchAll(X(t, "task-status"), {}, { signal: n }),
	allStatusAutomations: async (t, { signal: n } = {}) => e.fetchAll(X(t, "status-automations"), {}, { signal: n }),
	addStatusAutomation: async (t, n, { signal: r } = {}) => e.create(X(t, "status-automations"), { status_automation_id: E(n) }, { signal: r }),
	removeStatusAutomation: async (t, n, { signal: r } = {}) => e.remove(X(t, "status-automations"), E(n), {}, { signal: r }),
	getPreviewBackgroundFiles: async (t, { signal: n } = {}) => e.fetchAll(X(t, "preview-background-files"), {}, { signal: n }),
	addPreviewBackgroundFile: async (t, n, { signal: r } = {}) => e.create(X(t, "preview-background-files"), { preview_background_file_id: E(n) }, { signal: r }),
	removePreviewBackgroundFile: async (t, n, { signal: r } = {}) => e.remove(X(t, "preview-background-files"), E(n), {}, { signal: r }),
	getMilestones: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/milestones`, {}, { signal: n }),
	getProjectQuotas: async (t, n, { countMode: r, studio: i, signal: a } = {}) => e.fetchAll(`projects/${E(t)}/quotas/${E(n)}`, {
		count_mode: r,
		studio_id: D(i)
	}, { signal: a }),
	getProjectPersonQuotas: async (t, n, { countMode: r, studio: i, signal: a } = {}) => e.fetchAll(`projects/${E(t)}/quotas/persons/${E(n)}`, {
		count_mode: r,
		studio_id: D(i)
	}, { signal: a }),
	getBudgets: async (t, { signal: n } = {}) => e.fetchAll(Q(t), {}, { signal: n }),
	createBudget: async (t, n, { currency: r, signal: i } = {}) => e.create(Q(t), j({
		name: n,
		currency: r
	}), { signal: i }),
	getBudget: async (t, n, { signal: r } = {}) => e.fetchOne(Q(t), E(n), { signal: r }),
	updateBudget: async (t, n, r, { signal: i } = {}) => e.update(Q(t), E(n), r, { signal: i }),
	removeBudget: async (t, n, { signal: r } = {}) => e.remove(Q(t), E(n), {}, { signal: r }),
	getBudgetEntries: async (t, n, { signal: r } = {}) => e.fetchAll(Bt(t, n), {}, { signal: r }),
	createBudgetEntry: async (t, n, r, i, a, o, { person: s, position: c, seniority: l, signal: u } = {}) => e.create(Bt(t, n), j({
		department_id: E(r),
		person_id: D(s),
		position: Ft("position", jt, c),
		seniority: Ft("seniority", Mt, l),
		start_date: V(k("startDate", i)),
		months_duration: k("monthsDuration", a),
		daily_salary: k("dailySalary", o)
	}), { signal: u }),
	getBudgetEntry: async (t, n, r, { signal: i } = {}) => e.fetchOne(Bt(t, n), E(r), { signal: i }),
	updateBudgetEntry: async (t, n, r, i, { signal: a } = {}) => {
		let o = Bt(t, n), s = E(r), { department_id: c, person_id: l, start_date: u, months_duration: d, daily_salary: f, position: p, seniority: m, exceptions: h } = A(i), g = P({
			department_id: c,
			person_id: l,
			start_date: u === void 0 ? void 0 : V(u),
			months_duration: d,
			daily_salary: f,
			position: Ft("position", jt, p),
			seniority: Ft("seniority", Mt, m),
			exceptions: h
		}), _ = Nt.filter((e) => g[e] === null);
		if (_.length > 0) throw new x(`Missing parameter: ${_.join(", ")} cannot be cleared`);
		let v = {
			...await e.get(`data/${o}/${s}`, {}, { signal: a }),
			...g
		};
		return e.update(o, s, {
			department_id: v.department_id,
			person_id: v.person_id,
			start_date: v.start_date,
			months_duration: v.months_duration,
			daily_salary: v.daily_salary,
			position: v.position,
			seniority: v.seniority,
			exceptions: v.exceptions
		}, { signal: a });
	},
	removeBudgetEntry: async (t, n, r, { signal: i } = {}) => e.remove(Bt(t, n), E(r), {}, { signal: i }),
	allProjectsWithAccess: async ({ signal: t } = {}) => e.fetchAll("projects/all", {}, { signal: t }).then(I),
	removeAssetType: async (t, n, { signal: r } = {}) => e.remove(X(t, "asset-types"), E(n), {}, { signal: r }),
	addSettings: async (t, { taskTypes: n = [], taskStatuses: r = [], assetTypes: i = [], replaceTaskTypes: a = !1, signal: o } = {}) => e.create(X(t, "batch"), {
		task_types: n.map(({ taskType: e, priority: t = null }) => ({
			task_type_id: E(e),
			priority: t
		})),
		task_status_ids: O(r),
		asset_type_ids: O(i),
		replace_task_types: a
	}, { signal: o }),
	updateTaskStatusLink: async (t, n, r, i, { signal: a } = {}) => e.create("task-status-links", {
		project_id: E(t),
		task_status_id: E(n),
		priority: k("priority", r),
		roles_for_board: It(k("rolesForBoard", i))
	}, { signal: a }),
	reorderTaskStatusLinks: async (t, n, { signal: r } = {}) => e.post(`actions/projects/${E(t)}/task-status-links/reorder`, { task_status_ids: O(n) }, { signal: r }),
	updateTaskTypeLink: async (t, n, r, { signal: i } = {}) => e.create("task-type-links", {
		project_id: E(t),
		task_type_id: E(n),
		priority: k("priority", r)
	}, { signal: i }),
	reorderTaskTypeLinks: async (t, n, { signal: r } = {}) => e.post(`actions/projects/${E(t)}/task-type-links/reorder`, { task_type_ids: O(n) }, { signal: r }),
	addMetadataDescriptorToAllProjects: async (t, n, { dataType: r = "string", choices: i = [], forClient: a = !1, departments: o = [], signal: s } = {}) => e.create("metadata-descriptors/all-projects", {
		name: k("name", t),
		data_type: r,
		choices: i,
		for_client: a,
		entity_type: k("entityType", n),
		departments: O(o)
	}, { signal: s }),
	updateMetadataDescriptorOnAllProjects: async (t, n, { signal: r } = {}) => {
		let i = { ...n };
		return e.update("metadata-descriptors/all-projects", Vt(t), {
			...i,
			entity_type: k("entity_type", i.entity_type),
			...Array.isArray(i.departments) ? { departments: O(i.departments) } : {}
		}, { signal: r });
	},
	removeMetadataDescriptorOnAllProjects: async (t, n, { signal: r } = {}) => e.remove("metadata-descriptors/all-projects", Vt(t), { entity_type: k("entityType", n) }, { signal: r }),
	reorderMetadataDescriptorsOnAllProjects: async (t, n, { signal: r } = {}) => e.post("actions/metadata-descriptors/all-projects/reorder", {
		entity_type: k("entityType", t),
		field_order: n
	}, { signal: r }),
	allGlobalStatusAutomations: async ({ signal: t } = {}) => e.fetchAll("status-automations", {}, { signal: t }),
	getStatusAutomation: async (t, { signal: n } = {}) => e.fetchOne("status-automations", E(t), { signal: n }),
	newStatusAutomation: async (t, n, r, i, { entityType: a = "asset", outTaskStatus: o, importLastRevision: s = !1, signal: c } = {}) => {
		if (typeof t == "object" && t && ("inTaskType" in t || "outFieldType" in t)) throw new x("Wrong format: inTaskType, inTaskStatus, outFieldType and outTaskType are positional arguments");
		if (!At.includes(r)) throw new x(`Wrong format: outFieldType must be one of ${At.join(", ")}`);
		if (r === "status" && o == null) throw new x("Missing parameter: outTaskStatus is required with status");
		if (r === "ready_for" && a !== "asset") throw new x("Wrong format: ready_for only works on assets");
		return e.create("status-automations", j({
			entity_type: a,
			in_task_type_id: E(t),
			in_task_status_id: E(n),
			out_field_type: r,
			out_task_type_id: E(i),
			out_task_status_id: D(o),
			import_last_revision: s
		}), { signal: c });
	},
	updateStatusAutomation: async (t, { signal: n } = {}) => {
		let r = E(t);
		return Lt(t), e.update("status-automations", r, t, { signal: n });
	},
	deleteStatusAutomation: async (t, { signal: n } = {}) => e.remove("status-automations", E(t), {}, { signal: n }),
	allPreviewBackgroundFiles: async ({ signal: t } = {}) => e.fetchAll("preview-background-files", {}, { signal: t }),
	getPreviewBackgroundFile: async (t, { signal: n } = {}) => e.fetchOne("preview-background-files", E(t), { signal: n }),
	newPreviewBackgroundFile: async (t, { archived: n = !1, isDefault: r = !1, signal: i } = {}) => e.create("preview-background-files", {
		name: k("name", t),
		archived: n,
		is_default: r
	}, { signal: i }),
	updatePreviewBackgroundFile: async (t, { signal: n } = {}) => e.update("preview-background-files", E(t), t, { signal: n }),
	deletePreviewBackgroundFile: async (t, { signal: n } = {}) => e.remove("preview-background-files", E(t), {}, { signal: n }),
	uploadPreviewBackgroundFile: async (t, n, { fileName: r, onProgress: i, signal: a } = {}) => (zt(n, r), e.upload(`pictures/preview-background-files/${E(t)}`, {
		file: n,
		fileName: r,
		onProgress: i,
		signal: a
	})),
	getBudgetsTimeSpents: async (t, { signal: n } = {}) => e.get(`data/${Q(t)}/time-spents`, {}, { signal: n }),
	getTaskTypeTimeSpents: async (t, n, { startDate: r, endDate: i, signal: a } = {}) => e.get(`data/projects/${E(t)}/task-types/${E(n)}/time-spents`, {
		start_date: z(r),
		end_date: z(i)
	}, { signal: a }),
	allDayOffsForProject: async (t, { startDate: n, endDate: r, signal: i } = {}) => e.get(`data/projects/${E(t)}/day-offs`, {
		start_date: z(n),
		end_date: z(r)
	}, { signal: i }),
	getProjectUrl: async (t, { section: n = "assets" } = {}) => xe(H(e.host), t, n)
}), Gt = [
	"task_types",
	"task_statuses",
	"asset_types",
	"status_automations",
	"preview_background_files"
], Kt = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => !Gt.includes(e))), qt = [
	"user",
	"admin",
	"supervisor",
	"manager",
	"client",
	"vendor"
], Jt = (e) => {
	if (e == null || Array.isArray(e) && e.every((e) => qt.includes(e))) return e;
	throw new x(`Wrong format: rolesForBoard must be a list of ${qt.join(", ")}`);
}, Yt = (e) => {
	let t = (e) => `data/project-templates/${E(e)}`, n = (n, r, i) => e.get(`${t(n)}/${r}`, {}, { signal: i }), r = (n, r, i, a) => e.post(`${t(n)}/${r}`, i, { signal: a }), i = (n, r, i, a) => e.del(`${t(n)}/${r}/${E(i)}`, void 0, { signal: a }), a = (t, n, r, i, a) => e.post(`actions/project-templates/${E(t)}/${n}/reorder`, { [r]: O(k(r, i)) }, { signal: a });
	return {
		allProjectTemplates: async ({ signal: t } = {}) => e.fetchAll("project-templates", {}, { signal: t }).then(I),
		getProjectTemplate: async (t, { signal: n } = {}) => e.fetchOne("project-templates", E(t), { signal: n }),
		getProjectTemplateByName: async (t, { signal: n } = {}) => e.fetchAll("project-templates", { name: L(t) }, { signal: n }).then((e) => R(e, t)),
		newProjectTemplate: async (t, { description: n = null, fps: r, ratio: i, resolution: a, productionType: o, productionStyle: s, signal: c } = {}) => e.post("data/project-templates", {
			name: k("name", t),
			description: n,
			...j({
				fps: r,
				ratio: i,
				resolution: a,
				production_type: o,
				production_style: s
			})
		}, { signal: c }),
		updateProjectTemplate: async (t, { signal: n } = {}) => e.update("project-templates", E(t), Kt(A(t)), { signal: n }),
		removeProjectTemplate: async (n, { signal: r } = {}) => e.del(t(n), void 0, { signal: r }),
		newProjectTemplateFromProject: async (t, n, { description: r = null, signal: i } = {}) => e.post(`data/project-templates/from-project/${E(t)}`, {
			name: k("name", n),
			description: r
		}, { signal: i }),
		applyProjectTemplate: async (t, n, { signal: r } = {}) => e.post(`data/projects/${E(t)}/apply-template/${E(n)}`, {}, { signal: r }),
		allTaskTypesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "task-types", t),
		addTaskTypeToProjectTemplate: async (e, t, { priority: n, hdBitrateCompression: i, ldBitrateCompression: a, signal: o } = {}) => r(e, "task-types", {
			...j({
				task_type_id: E(t),
				priority: n
			}),
			hd_bitrate_compression: i,
			ld_bitrate_compression: a
		}, o),
		removeTaskTypeFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "task-types", t, n),
		allTaskStatusesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "task-statuses", t),
		addTaskStatusToProjectTemplate: async (e, t, { priority: n, rolesForBoard: i, signal: a } = {}) => r(e, "task-statuses", j({
			task_status_id: E(t),
			priority: n,
			roles_for_board: Jt(i)
		}), a),
		removeTaskStatusFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "task-statuses", t, n),
		allAssetTypesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "asset-types", t),
		addAssetTypeToProjectTemplate: async (e, t, { signal: n } = {}) => r(e, "asset-types", { asset_type_id: E(t) }, n),
		removeAssetTypeFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "asset-types", t, n),
		allStatusAutomationsForProjectTemplate: async (e, { signal: t } = {}) => n(e, "status-automations", t),
		addStatusAutomationToProjectTemplate: async (e, t, { signal: n } = {}) => r(e, "status-automations", { status_automation_id: E(t) }, n),
		removeStatusAutomationFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "status-automations", t, n),
		allPreviewBackgroundFilesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "preview-background-files", t),
		addPreviewBackgroundFileToProjectTemplate: async (e, t, { signal: n } = {}) => r(e, "preview-background-files", { preview_background_file_id: E(t) }, n),
		removePreviewBackgroundFileFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "preview-background-files", t, n),
		setProjectTemplateDefaultPreviewBackgroundFile: async (n, r, { signal: i } = {}) => {
			if (r === void 0) throw new x("Missing parameter: previewBackgroundFile is required, null clears the default");
			return e.put(`${t(n)}/default-preview-background-file`, { default_preview_background_file_id: D(r) }, { signal: i });
		},
		setProjectTemplateMetadataDescriptors: async (n, r, { signal: i } = {}) => {
			if (!Array.isArray(k("descriptors", r))) throw new x("Wrong format: descriptors must be a list");
			return e.put(`${t(n)}/metadata-descriptors`, { metadata_descriptors: r }, { signal: i });
		},
		reorderTaskTypesForProjectTemplate: async (e, t, { signal: n } = {}) => a(e, "task-types", "task_type_ids", t, n),
		reorderTaskStatusesForProjectTemplate: async (e, t, { signal: n } = {}) => a(e, "task-statuses", "task_status_ids", t, n)
	};
}, Xt = (e) => {
	let t = (t, n) => e.fetchOne("scenes", E(t), { signal: n }), n = (t, n) => e.fetchAll(t, {}, { signal: n }).then(I), r = (t, n, r) => e.put(`data/asset-instances/${E(t)}`, n, { signal: r });
	return {
		newScene: async (t, n, r, { signal: i } = {}) => e.post(`data/projects/${E(t)}/scenes`, {
			name: r,
			sequence_id: E(n)
		}, { signal: i }),
		allScenes: async ({ project: e, signal: t } = {}) => {
			let r = D(e);
			return n(r ? `projects/${r}/scenes` : "scenes/all", t);
		},
		allScenesForProject: async (e, { signal: t } = {}) => n(`projects/${E(e)}/scenes`, t),
		allScenesForSequence: async (e, { signal: t } = {}) => n(`sequences/${E(e)}/scenes`, t),
		getScene: async (e, { signal: n } = {}) => t(e, n),
		getSceneByName: async (t, n, { signal: r } = {}) => {
			let i = E(t);
			return k("sceneName", n), R(await F(e.fetchAll(`sequences/${i}/scenes`, {}, { signal: r })), n);
		},
		updateScene: async (t, { signal: n } = {}) => e.update("entities", E(t), t, { signal: n }),
		newSceneAssetInstance: async (t, n, { description: r, signal: i } = {}) => e.post(`data/scenes/${E(t)}/asset-instances`, j({
			asset_id: E(n),
			description: r
		}), { signal: i }),
		allAssetInstancesForScene: async (t, { signal: n } = {}) => e.get(`data/scenes/${E(t)}/asset-instances`, {}, { signal: n }),
		getAssetInstanceByName: async (t, n, { signal: r } = {}) => {
			let i = E(t);
			k("name", n);
			let a = await F(e.get(`data/scenes/${i}/asset-instances`, {}, { signal: r }));
			return R(Object.values(a || {}).flat(), n);
		},
		allCameraInstancesForScene: async (t, { signal: n } = {}) => e.get(`data/scenes/${E(t)}/camera-instances`, {}, { signal: n }),
		allShotsForScene: async (t, { signal: n } = {}) => e.get(`data/scenes/${E(t)}/shots`, {}, { signal: n }),
		addShotToScene: async (t, n, { signal: r } = {}) => e.post(`data/scenes/${E(t)}/shots`, { shot_id: E(n) }, { signal: r }),
		removeShotFromScene: async (t, n, { signal: r } = {}) => e.del(`data/scenes/${E(t)}/shots/${E(n)}`, void 0, { signal: r }),
		updateAssetInstanceName: async (e, t, { signal: n } = {}) => r(e, { name: t }, n),
		updateAssetInstanceData: async (e, t, { signal: n } = {}) => r(e, { data: N(t) }, n),
		getSequenceFromScene: async (n, { signal: r } = {}) => {
			let i = typeof n == "object" && n && "parent_id" in n ? n : await t(n, r);
			return i && i.parent_id ? e.fetchOne("sequences", E(i.parent_id), { signal: r }) : null;
		}
	};
}, Zt = [
	"asset-types",
	"sequences",
	"edits",
	"episodes"
], Qt = (e) => {
	if (Zt.includes(e)) return e;
	throw new x(`Wrong format: kind must be one of ${Zt.join(", ")}`);
}, $t = (e) => e == null ? e : O(e), en = (e, t, n) => {
	let r = e ?? {};
	if (t.some((e) => e in r)) throw new x(`Wrong format: the changes are fields of the ${n}, not options`);
	return r;
}, tn = (e) => ({
	newMilestone: async (t, n, r, { taskType: i, signal: a } = {}) => e.create("milestones", j({
		date: z(k("date", r)),
		name: k("name", n),
		task_type_id: D(i),
		project_id: E(t)
	}), { signal: a }),
	updateMilestone: async (t, n) => {
		let { signal: r } = en(n, [
			"date",
			"name",
			"taskType"
		], "milestone"), i = E(t), { date: a, name: o, task_type_id: s } = A(t);
		return e.update("milestones", i, P({
			date: z(a),
			name: o,
			task_type_id: s
		}), { signal: r });
	},
	removeMilestone: async (t, { signal: n } = {}) => e.remove("milestones", E(t), void 0, { signal: n }),
	allTaskTypeScheduleItems: async (t, { signal: n } = {}) => e.get(`data/projects/${E(t)}/schedule-items/task-types`, void 0, { signal: n }),
	allScheduleItems: async (t, { signal: n } = {}) => e.get(`data/projects/${E(t)}/schedule-items`, void 0, { signal: n }),
	allEntityScheduleItems: async (t, n, r, { episode: i, signal: a } = {}) => e.get(`data/projects/${E(t)}/schedule-items/${E(n)}/${Qt(r)}`, { episode_id: D(i) }, { signal: a }),
	newScheduleItem: async (t, n, r, i, { manDays: a, signal: o } = {}) => e.create("schedule-items", j({
		start_date: z(k("startDate", r)),
		end_date: z(k("endDate", i)),
		project_id: E(t),
		task_type_id: E(n),
		man_days: a
	}), { signal: o }),
	updateScheduleItem: async (t, n) => {
		let { signal: r } = en(n, [
			"startDate",
			"endDate",
			"manDays"
		], "schedule item"), i = E(t), { start_date: a, end_date: o, man_days: s } = A(t);
		return e.update("schedule-items", i, P({
			start_date: z(a),
			end_date: z(o),
			man_days: s
		}), { signal: r });
	},
	removeScheduleItem: async (t, { signal: n } = {}) => e.remove("schedule-items", E(t), void 0, { signal: n }),
	allScheduleVersions: async (t, { signal: n } = {}) => e.fetchAll("production-schedule-versions", { project_id: E(t) }, { signal: n }),
	getScheduleVersion: async (t, { signal: n } = {}) => e.fetchOne("production-schedule-versions", E(t), { signal: n }),
	newScheduleVersion: async (t, n, { signal: r } = {}) => e.create("production-schedule-versions", {
		project_id: E(t),
		name: k("name", n)
	}, { signal: r }),
	updateScheduleVersion: async (t, n) => {
		let { signal: r } = en(n, [
			"name",
			"canceled",
			"locked"
		], "version"), i = E(t), { name: a, canceled: o, locked: s } = A(t);
		return e.update("production-schedule-versions", i, P({
			name: a,
			canceled: o,
			locked: s
		}), { signal: r });
	},
	removeScheduleVersion: async (t, { signal: n } = {}) => e.remove("production-schedule-versions", E(t), void 0, { signal: n }),
	setTaskLinksFromProduction: async (t, { signal: n } = {}) => e.post(`actions/production-schedule-versions/${E(t)}/set-task-links-from-production`, void 0, { signal: n }),
	setTaskLinksFromScheduleVersion: async (t, n, { signal: r } = {}) => e.post(`actions/production-schedule-versions/${E(t)}/set-task-links-from-production-schedule-version`, { production_schedule_version_id: E(n) }, { signal: r }),
	applyScheduleVersionToProduction: async (t, { signal: n } = {}) => e.post(`actions/production-schedule-versions/${E(t)}/apply-to-production`, void 0, { signal: n }),
	allScheduleVersionTaskLinks: async (t, { taskType: n, signal: r } = {}) => e.get(`data/production-schedule-versions/${E(t)}/task-links`, {
		relations: !0,
		task_type_id: D(n)
	}, { signal: r }),
	getScheduleVersionTaskLink: async (t, { signal: n } = {}) => e.fetchOne("production-schedule-version-task-links", E(t), { signal: n }),
	newScheduleVersionTaskLink: async (t, n, { startDate: r, dueDate: i, estimation: a, assignees: o, signal: s } = {}) => e.create("production-schedule-version-task-links", j({
		task_id: E(n),
		production_schedule_version_id: E(t),
		start_date: z(r),
		due_date: z(i),
		estimation: a,
		assignees: $t(o)
	}), { signal: s }),
	updateScheduleVersionTaskLink: async (t, n) => {
		let { signal: r } = en(n, [
			"startDate",
			"dueDate",
			"estimation",
			"assignees"
		], "task link"), i = E(t), { start_date: a, due_date: o, estimation: s, assignees: c } = A(t);
		return e.update("production-schedule-version-task-links", i, P({
			start_date: z(a),
			due_date: z(o),
			estimation: s,
			assignees: $t(c)
		}), { signal: r });
	},
	removeScheduleVersionTaskLink: async (t, { signal: n } = {}) => e.remove("production-schedule-version-task-links", E(t), void 0, { signal: n })
}), nn = (e) => {
	let t = k("query", e);
	if (typeof t == "string" && [...t].length >= 3) return t;
	throw new x("Wrong format: query must be a string of 3 characters or more");
}, rn = (e) => ({ searchEntities: async (t, { project: n, indexNames: r, limit: i, offset: a, signal: o } = {}) => e.post("data/search", j({
	query: nn(t),
	project_id: D(n),
	index_names: r ? [...r] : null,
	limit: i,
	offset: a
}), { signal: o }) }), an = (e) => e ? "${project_name}_${episode_name}-${sequence_name}-${shot_name}" : "${project_name}_${sequence_name}-${shot_name}", on = (e) => async (t) => {
	if ((t.headers.get("Content-Type") || "").includes("csv")) return t.text();
	throw new b(`GET ${e} answered ${t.status} without CSV`, {
		status: t.status,
		path: e,
		method: "GET",
		body: await t.text()
	});
}, sn = (e) => e ? String(e).toLowerCase() : null, cn = (e) => (t) => sn(t.parent_id) === sn(e), ln = (e) => {
	let t = (t, n, r) => e.fetchOne(t, E(n), { signal: r }), n = async (e, n, r) => {
		let i = typeof n == "object" && n && "parent_id" in n ? n : await t(e, n, r);
		return i ? i.parent_id : null;
	}, r = (t, n, r, i, a) => F(e.fetchAll(t, n, { signal: a })).then((e) => R(Array.isArray(e) ? e.filter(i) : [], r)), i = async (e, t, n, i) => {
		let a = E(e), o = D(n), s = { name: L(t) };
		return r("sequences", o === null ? {
			...s,
			project_id: a
		} : {
			...s,
			episode_id: o
		}, t, cn(o), i);
	}, a = async (e, t, n) => r("episodes", {
		project_id: E(e),
		name: L(t)
	}, t, () => !0, n), o = async (e, t, n) => {
		let i = E(e);
		return r("shots/all", {
			sequence_id: i,
			name: L(t)
		}, t, cn(i), n);
	}, s = (t, n) => e.update("entities", E(t), ge(t, { preview_file_id: "" }), { signal: n }), c = (t, n, r) => e.update("entities", E(t), { data: { ...N(n) } }, { signal: r }), l = (t, n, r, i) => e.remove(t, E(n), { force: r ? !0 : null }, { signal: i }), u = (t, n) => e.get(`data/shots/${E(t)}/asset-instances`, {}, { signal: n });
	return {
		allPreviewsForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${E(t)}/preview-files`, {}, { signal: n }),
		allShotsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/shots`, {}, { signal: n }).then(I),
		allShotsForEpisode: async (t, { signal: n } = {}) => e.fetchAll(`episodes/${E(t)}/shots`, {}, { signal: n }).then(I),
		allShotsForSequence: async (t, { signal: n } = {}) => e.fetchAll(`sequences/${E(t)}/shots`, {}, { signal: n }).then(I),
		allSequencesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/sequences`, {}, { signal: n }).then(I),
		allSequencesForEpisode: async (t, { signal: n } = {}) => e.fetchAll(`episodes/${E(t)}/sequences`, {}, { signal: n }).then(I),
		allEpisodesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/episodes`, {}, { signal: n }).then(I),
		getEpisode: async (e, { signal: n } = {}) => t("episodes", e, n),
		getEpisodeByName: async (e, t, { signal: n } = {}) => a(e, t, n),
		getEpisodeFromSequence: async (e, { signal: r } = {}) => {
			let i = await n("sequences", e, r);
			return i ? t("episodes", i, r) : null;
		},
		getSequence: async (e, { signal: n } = {}) => t("sequences", e, n),
		getSequenceByName: async (e, t, { episode: n, signal: r } = {}) => i(e, t, n, r),
		getSequenceFromShot: async (e, { signal: r } = {}) => {
			let i = await n("shots", e, r);
			return i ? t("sequences", i, r) : null;
		},
		getShot: async (e, { signal: n } = {}) => t("shots", e, n),
		getShotByName: async (e, t, { signal: n } = {}) => o(e, t, n),
		newSequence: async (t, n, { episode: r, description: a, data: o, signal: s } = {}) => await i(t, n, r, s) || e.post(`data/projects/${E(t)}/sequences`, {
			name: n,
			...j({
				episode_id: D(r),
				description: a,
				data: o
			})
		}, { signal: s }),
		newShot: async (t, n, r, { nbFrames: i, frameIn: a, frameOut: s, description: c, data: l, signal: u } = {}) => {
			let d = {
				name: r,
				data: {
					...l,
					...j({
						frame_in: a,
						frame_out: s
					})
				},
				sequence_id: E(n),
				...j({
					nb_frames: i,
					description: c
				})
			}, f = `data/projects/${E(t)}/shots`;
			return await o(n, r, u) || e.post(f, d, { signal: u });
		},
		updateShot: async (e, { signal: t } = {}) => s(e, t),
		updateSequence: async (e, { signal: t } = {}) => s(e, t),
		getAssetInstancesForShot: async (e, { signal: t } = {}) => u(e, t),
		allAssetInstancesForShot: async (e, { signal: t } = {}) => u(e, t),
		updateShotData: async (e, t = {}, { signal: n } = {}) => c(e, t, n),
		updateSequenceData: async (e, t = {}, { signal: n } = {}) => c(e, t, n),
		removeShot: async (e, { force: t = !1, signal: n } = {}) => l("shots", e, t, n),
		restoreShot: async (t, { signal: n } = {}) => e.put(`data/shots/${E(t)}`, { canceled: !1 }, { signal: n }),
		newEpisode: async (t, n, { description: r, status: i, data: o, signal: s } = {}) => await a(t, n, s) || e.post(`data/projects/${E(t)}/episodes`, {
			name: n,
			...j({
				description: r,
				status: i,
				data: o
			})
		}, { signal: s }),
		updateEpisode: async (e, { signal: t } = {}) => s(e, t),
		updateEpisodeData: async (e, t = {}, { signal: n } = {}) => c(e, t, n),
		removeEpisode: async (e, { force: t = !1, signal: n } = {}) => l("episodes", e, t, n),
		removeSequence: async (e, { force: t = !1, signal: n } = {}) => l("sequences", e, t, n),
		addAssetInstanceToShot: async (t, n, { signal: r } = {}) => e.post(`data/shots/${E(t)}/asset-instances`, { asset_instance_id: E(n) }, { signal: r }),
		removeAssetInstanceFromShot: async (t, n, { signal: r } = {}) => e.del(`data/shots/${E(t)}/asset-instances/${E(n)}`, void 0, { signal: r }),
		importShotsWithCsv: async (t, n, { update: r = !1, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`import/csv/projects/${E(t)}/shots`, {
			file: k("csvFile", n),
			query: { update: r ? !0 : null },
			fileName: i,
			onProgress: a,
			signal: o
		}),
		importOtio: async (t, n, { episode: r, namingConvention: i, matchCase: a = !0, fileName: o, onProgress: s, signal: c } = {}) => {
			let l = D(r), u = `import/otio/projects/${E(t)}`;
			return e.upload(l ? `${u}/episodes/${l}` : u, {
				file: k("otioFile", n),
				fields: {
					naming_convention: i || an(l),
					match_case: a
				},
				fileName: o,
				onProgress: s,
				signal: c
			});
		},
		exportShotsWithCsv: async (t, { episode: n, assignedTo: r, signal: i } = {}) => {
			let a = `export/csv/projects/${E(t)}/shots.csv`;
			return e.request("GET", a, {
				query: {
					episode_id: D(n),
					assigned_to: D(r)
				},
				signal: i,
				read: on(a)
			});
		},
		allShotsWithTasks: async (t, { episode: n, signal: r } = {}) => e.getNdjson("data/shots/with-tasks", {
			project_id: E(t),
			episode_id: D(n)
		}, { signal: r }),
		allSequencesWithTasks: async (t, { episode: n, signal: r } = {}) => e.get("data/sequences/with-tasks", {
			project_id: E(t),
			episode_id: D(n)
		}, { signal: r }),
		allEpisodesWithTasks: async (t, { signal: n } = {}) => e.get("data/episodes/with-tasks", { project_id: E(t) }, { signal: n }),
		getEpisodeStats: async (t, { signal: n } = {}) => e.get(`data/projects/${E(t)}/episodes/stats`, {}, { signal: n }),
		getEpisodeRetakeStats: async (t, { signal: n } = {}) => e.get(`data/projects/${E(t)}/episodes/retake-stats`, {}, { signal: n }),
		allVersionsForShot: async (t, { signal: n } = {}) => e.get(`data/shots/${E(t)}/versions`, {}, { signal: n }),
		setNbFramesFromTaskTypePreviews: async (t, n, { episode: r, signal: i } = {}) => e.request("POST", `actions/projects/${E(t)}/task-types/${E(n)}/set-shot-nb-frames`, {
			query: { episode_id: D(r) },
			signal: i
		}),
		getEpisodeUrl: async (t, { signal: n } = {}) => Te(H(e.host), await e.get(`data/episodes/${E(t)}`, {}, { signal: n })),
		getShotUrl: async (t, { signal: n } = {}) => Ee(H(e.host), await e.get(`data/shots/${E(t)}`, {}, { signal: n })),
		getSequenceUrl: async (t, { signal: n } = {}) => Oe(H(e.host), await e.get(`data/sequences/${E(t)}`, {}, { signal: n })),
		getAllEpisodesUrl: async (t) => ke(H(e.host), t),
		getAllSequencesUrl: async (t) => Ae(H(e.host), t)
	};
}, un = (e) => ({
	allStudios: async ({ signal: t } = {}) => e.fetchAll("studios", {}, { signal: t }).then(I),
	getStudio: async (t, { signal: n } = {}) => e.fetchOne("studios", E(t), { signal: n }),
	getStudioByName: async (t, { signal: n } = {}) => F(e.fetchAll("studios", { name: L(t) }, { signal: n })).then((e) => R(e, t)),
	newStudio: async (t, n, { archived: r = !1, signal: i } = {}) => e.create("studios", {
		name: k("name", t),
		color: k("color", n),
		archived: r
	}, { signal: i }),
	updateStudio: async (t, { signal: n } = {}) => {
		let r = E(t);
		if (typeof t != "object") throw new x("Wrong format: expected the studio, not its id");
		return e.update("studios", r, t, { signal: n });
	},
	removeStudio: async (t, { signal: n } = {}) => e.remove("studios", E(t), {}, { signal: n })
}), dn = /^#[0-9a-fA-F]*$/, fn = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}$/, pn = [
	"assets",
	"shots",
	"edits",
	"concepts"
], mn = ["episodes", "sequences"], hn = (e) => {
	let t = B(e);
	if (t != null && t !== "") {
		if (fn.test(t)) return t;
		throw new x("Wrong format: createdAt must be a Date or a \"YYYY-MM-DDTHH:MM:SS\" string in UTC");
	}
}, gn = (e) => e && e.created_at !== void 0 ? {
	...e,
	created_at: hn(e.created_at)
} : e, _n = (e, t) => {
	let n = k("file", e);
	if (!(n instanceof Blob)) throw new x("Wrong format: file must be a Blob or a File");
	if (t || n.name) return n;
	throw new x("Missing parameter: fileName is required when the file has no name");
}, vn = (e, t) => {
	if (Array.isArray(t) && t.length > 0) return O(t);
	throw new x(`Missing parameter: ${e} must be a non-empty list`);
}, yn = (e) => {
	let { project: t, taskType: n, taskStatus: r, persons: i, department: a, studio: o, startDate: s, dueDate: c, priority: l, ...u } = e;
	M(u);
	let d = i == null || i === "unassigned" ? i : vn("persons", i).join(",");
	return {
		project_id: D(t),
		task_type_id: D(n),
		task_status_id: D(r),
		person_id: d,
		department_id: D(a),
		studio_id: D(o),
		start_date: z(s),
		due_date: z(c),
		priority: l
	};
}, bn = (e) => {
	let t = (t, n, r, { relations: i = !1, signal: a } = {}) => e.fetchAll(`${n}/${E(t)}/${r}`, { relations: i ? !0 : null }, { signal: a }).then(I), n = (t, n, { signal: r } = {}) => e.fetchAll(`${n}/${E(t)}/task-types`, {}, { signal: r }).then(I), r = (e, t, n) => `${e}/tasks/${E(t)}/comments/${E(n)}`, i = (t, n, { signal: r } = {}) => e.fetchAll(`projects/${E(t)}/${n}`, {}, { signal: r }), a = (e, t, n) => `actions/tasks/${E(e)}/time-spents/${V(n)}/persons/${E(t)}`, o = (e, t, n) => {
		let r = `actions/projects/${E(e)}/task-types/${E(t)}`;
		if (mn.includes(n)) return `${r}/create-tasks/${n.slice(0, -1)}`;
		if (pn.includes(n)) return `${r}/${n}/create-tasks`;
		throw new x(`Wrong format: type must be one of ${[...pn, ...mn].join(", ")}`);
	}, s = async (t, n, { name: r = "main", signal: i } = {}) => F(e.fetchAll("tasks", {
		name: L(r),
		task_type_id: E(n),
		entity_id: E(t)
	}, { signal: i })).then((e) => R(e, r)), c = async (t, { forEntity: n, department: r, signal: i } = {}) => F(e.fetchAll("task-types", {
		name: L(t),
		for_entity: n,
		department_id: D(r)
	}, { signal: i })).then((e) => R(e, t)), l = async ({ signal: t } = {}) => e.fetchFirst("task-status", {
		is_default: !0,
		for_concept: !1
	}, { signal: t }), u = async (t, { signal: n } = {}) => e.fetchFirst("task-status", { short_name: k("shortName", t) }, { signal: n }), d = async (t, { signal: n } = {}) => F(e.get(`data/tasks/${E(t)}/full`, {}, { signal: n })), f = async (t, { signal: n } = {}) => {
		if (!t || typeof t != "object") throw new x("Wrong format: updateTask needs the task object");
		return e.update("tasks", E(t), t.assignees === void 0 ? t : {
			...t,
			assignees: O(t.assignees || [])
		}, { signal: n });
	}, p = async (t, n, { signal: r } = {}) => e.post(`data/entities/${E(t)}/tasks`, { task_type_ids: vn("taskTypes", n) }, { signal: r }), m = async (t, n, { comment: r = "", person: i, checklist: a = [], attachments: o, createdAt: s, links: c = [], forClient: l = !1, fileName: u, onProgress: d, signal: f } = {}) => {
		let p = `actions/tasks/${E(t)}/comment`, m = {
			task_status_id: E(n),
			comment: r,
			checklist: a,
			links: c,
			person_id: D(i),
			created_at: hn(s)
		};
		return !o || o.length === 0 ? e.post(p, j({
			...m,
			for_client: l
		}), { signal: f }) : e.upload(p, {
			file: o,
			fields: {
				...m,
				for_client: l ? !0 : null
			},
			fileName: u,
			onProgress: d,
			signal: f
		});
	}, h = async (t, n, { revision: i, signal: a } = {}) => e.post(`${r("actions", t, n)}/add-preview`, j({ revision: i }), { signal: a }), g = async (t, n, i, { signal: a } = {}) => e.post(`${r("actions", t, n)}/preview-files/${E(i)}`, {}, { signal: a }), _ = async (t, { frameNumber: n, signal: r } = {}) => e.put(`actions/preview-files/${E(t)}/set-main-preview`, j({ frame_number: n }), { signal: r }), v = async (t, n, { normalizeMovie: r = !0, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`pictures/preview-files/${E(t)}`, {
		file: _n(n, i),
		fileName: i,
		query: { normalize: r ? null : !1 },
		onProgress: a,
		signal: o
	}), y = async (e, t, n, { normalizeMovie: r, revision: i, fileName: a, onProgress: o, signal: s } = {}) => {
		_n(n, a);
		let c = await h(e, t, {
			revision: i,
			signal: s
		});
		return v(c, n, {
			normalizeMovie: r,
			fileName: a,
			onProgress: o,
			signal: s
		});
	};
	return {
		allTaskStatuses: async ({ signal: t } = {}) => e.fetchAll("task-status", {}, { signal: t }).then(I),
		allTaskTypes: async ({ signal: t } = {}) => e.fetchAll("task-types", {}, { signal: t }).then(I),
		allTaskTypesForProject: async (e, t) => n(e, "projects", t),
		allTaskStatusesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${E(t)}/settings/task-status`, {}, { signal: n }).then(I),
		allTasksForShot: async (e, n) => t(e, "shots", "tasks", n),
		allTasksForConcept: async (e, n) => t(e, "concepts", "tasks", n),
		allTasksForEdit: async (e, n) => t(e, "edits", "tasks", n),
		allTasksForSequence: async (e, n) => t(e, "sequences", "tasks", n),
		allTasksForScene: async (e, { signal: n } = {}) => t(e, "scenes", "tasks", { signal: n }),
		allTasksForAsset: async (e, n) => t(e, "assets", "tasks", n),
		allTasksForEpisode: async (e, { signal: n } = {}) => t(e, "episodes", "tasks", { signal: n }),
		allShotTasksForSequence: async (e, n) => t(e, "sequences", "shot-tasks", n),
		allShotTasksForEpisode: async (e, n) => t(e, "episodes", "shot-tasks", n),
		allAssetsTasksForEpisode: async (e, n) => t(e, "episodes", "asset-tasks", n),
		allTasksForTaskStatus: async (t, n, r, { signal: i } = {}) => e.fetchAll("tasks", {
			project_id: E(t),
			task_type_id: E(n),
			task_status_id: E(r)
		}, { signal: i }),
		allTasksForTaskType: async (t, n, { episode: r, signal: i } = {}) => e.fetchAll("tasks", {
			project_id: E(t),
			task_type_id: E(n),
			episode_id: D(r)
		}, { signal: i }),
		allTaskTypesForShot: async (e, t) => n(e, "shots", t),
		allTaskTypesForConcept: async (e, t) => n(e, "concepts", t),
		allTaskTypesForAsset: async (e, t) => n(e, "assets", t),
		allTaskTypesForScene: async (e, t) => n(e, "scenes", t),
		allTaskTypesForSequence: async (e, t) => n(e, "sequences", t),
		allTaskTypesForEpisode: async (e, t) => n(e, "episodes", t),
		allTasksForEntityAndTaskType: async (t, n, { signal: r } = {}) => e.fetchAll(`entities/${E(t)}/task-types/${E(n)}/tasks`, {}, { signal: r }),
		allTasksForPerson: async (t, { signal: n } = {}) => e.fetchAll(`persons/${E(t)}/tasks`, {}, { signal: n }),
		allDoneTasksForPerson: async (t, { signal: n } = {}) => e.fetchAll(`persons/${E(t)}/done-tasks`, {}, { signal: n }),
		allTasksForPersonAndType: async (t, n, { signal: r } = {}) => e.fetchAll(`persons/${E(t)}/related-tasks/${E(n)}`, {}, { signal: r }),
		allTasksForProject: async (t, { taskType: n, episode: r, signal: i } = {}) => e.fetchAll(`projects/${E(t)}/tasks`, {
			task_type_id: D(n),
			episode_id: D(r)
		}, { signal: i }),
		allOpenTasks: async ({ page: t, limit: n, signal: r, ...i } = {}) => e.get("data/tasks/open-tasks", {
			...yn(i),
			page: t,
			limit: n
		}, { signal: r }),
		getOpenTasksStats: async ({ signal: t } = {}) => e.get("data/tasks/open-tasks/stats", {}, { signal: t }),
		getPersonsTasksDates: async ({ signal: t } = {}) => e.get("data/persons/task-dates", {}, { signal: t }),
		getTaskByEntity: s,
		getTaskType: async (t, { signal: n } = {}) => e.fetchOne("task-types", E(t), { signal: n }),
		getTaskTypeByName: c,
		getTaskTypeByShortName: async (t, { forEntity: n, department: r, signal: i } = {}) => e.fetchFirst("task-types", {
			short_name: k("shortName", t),
			for_entity: n,
			department_id: D(r)
		}, { signal: i }),
		getDefaultTaskStatus: l,
		getTaskStatus: async (t, { signal: n } = {}) => e.fetchOne("task-status", E(t), { signal: n }),
		getTaskStatusByName: async (t, { signal: n } = {}) => F(e.fetchAll("task-status", { name: L(t) }, { signal: n })).then((e) => R(e, t)),
		getTaskStatusByShortName: u,
		removeTaskType: async (t, { force: n = !1, signal: r } = {}) => e.remove("task-types", E(t), { force: n ? !0 : null }, { signal: r }),
		removeTaskStatus: async (t, { signal: n } = {}) => e.remove("task-status", E(t), {}, { signal: n }),
		updateTaskType: async (t, { signal: n } = {}) => e.update("task-types", E(t), t, { signal: n }),
		updateTaskStatus: async (t, { signal: n } = {}) => e.update("task-status", E(t), t, { signal: n }),
		getTask: d,
		newTask: async (t, n, { name: r = "main", taskStatus: i, assigner: a, assignees: o, signal: c } = {}) => {
			let u = {
				entity_id: E(t),
				task_type_id: E(n),
				assignees: O(o ?? []),
				name: r,
				assigner_id: D(a)
			}, d = D(i), f = await s(t, n, {
				name: r,
				signal: c
			});
			if (f) return f;
			let { project_id: p } = typeof t == "object" && t.project_id ? t : await e.get(`data/entities/${u.entity_id}`, {}, { signal: c }), m = d === null ? await l({ signal: c }) : { id: d };
			if (!m) throw new w("No default task status: give one in the taskStatus option");
			return e.create("tasks", j({
				project_id: p,
				...u,
				task_status_id: E(m)
			}), { signal: c });
		},
		removeTask: async (t, { signal: n } = {}) => e.remove("tasks", E(t), { force: !0 }, { signal: n }),
		newTaskType: async (t, { color: n = "#000000", forEntity: r = "Asset", signal: i } = {}) => await c(t, {
			forEntity: r,
			signal: i
		}) || e.create("task-types", {
			name: t,
			color: n,
			for_entity: r
		}, { signal: i }),
		newTaskStatus: async (t, n, r, { signal: i } = {}) => {
			if (typeof r != "string" || !dn.test(r)) throw new x("Color must be a hexadecimal string starting with '#', e.g. '#00FF00'");
			return e.create("task-status", {
				name: t,
				short_name: n,
				color: r
			}, { signal: i });
		},
		updateTask: f,
		updateTaskData: async (t, n = {}, { signal: r } = {}) => e.update("tasks", E(t), Object.values({ ...N(n) }).some((e) => e !== void 0) ? { data: n } : {}, { signal: r }),
		assignTask: async (t, n, { signal: r } = {}) => e.put(`actions/persons/${E(n)}/assign`, { task_ids: [E(t)] }, { signal: r }),
		assignTasksToPerson: async (t, n, { signal: r } = {}) => e.put(`actions/persons/${E(n)}/assign`, { task_ids: O(t) }, { signal: r }),
		clearAssignations: async (t, { person: n, signal: r } = {}) => {
			let i = O(Array.isArray(t) ? t : [t]);
			return i.length === 0 ? [] : e.put("actions/tasks/clear-assignation", j({
				task_ids: i,
				person_id: D(n)
			}), { signal: r });
		},
		removeTasksForType: async (t, n, { signal: r } = {}) => e.del(`actions/projects/${E(t)}/task-types/${E(n)}/delete-tasks`, void 0, { signal: r }),
		removeTasksBatch: async (t, n, { signal: r } = {}) => e.post(`actions/projects/${E(t)}/delete-tasks`, O(n), { signal: r }),
		createShotTasks: async (e, t, n) => p(e, t, n),
		createAssetTasks: async (e, t, n) => p(e, t, n),
		createEditTasks: async (e, t, n) => p(e, t, n),
		createConceptTasks: async (e, t, n) => p(e, t, n),
		createEntityTasks: p,
		startTask: async (e, { startedTaskStatus: t, person: n, signal: r } = {}) => {
			E(e), D(n);
			let i = t || await u("wip", { signal: r });
			if (!i) throw new w("No 'wip' task status: give one in the startedTaskStatus option");
			return m(e, i, {
				person: n,
				signal: r
			});
		},
		addComment: m,
		addAttachmentFilesToComment: async (t, n, i, { fileName: a, onProgress: o, signal: s } = {}) => {
			let c = [].concat(i || []);
			if (c.length === 0) throw new x("The attachments list is empty");
			return e.upload(`${r("actions", t, n)}/add-attachment`, {
				file: c,
				fileName: a,
				onProgress: o,
				signal: s
			});
		},
		uploadPreviewFile: v,
		getTimeSpent: async (t, { date: n, signal: r } = {}) => {
			let i = `actions/tasks/${E(t)}/time-spents`;
			return F(e.get(n ? `${i}/${V(n)}` : i, {}, { signal: r }));
		},
		getTaskTimeSpentForDate: async (t, n, { signal: r } = {}) => F(e.get(`actions/tasks/${E(t)}/time-spents/${V(n)}`, {}, { signal: r })),
		setTimeSpent: async (t, n, r, i, { signal: o } = {}) => e.post(a(t, n, r), { duration: i }, { signal: o }),
		addTimeSpent: async (t, n, r, i, { signal: o } = {}) => e.post(`${a(t, n, r)}/add`, { duration: i }, { signal: o }),
		removeTimeSpent: async (t, { signal: n } = {}) => e.remove("time-spents", E(t), {}, { signal: n }),
		getComment: async (t, { signal: n } = {}) => e.fetchOne("comments", E(t), { signal: n }),
		removeComment: async (t, { signal: n } = {}) => e.remove("comments", E(t), {}, { signal: n }),
		updateComment: async (t, { signal: n } = {}) => e.update("comments", E(t), t, { signal: n }),
		allCommentsForTask: async (t, { signal: n } = {}) => e.fetchAll(`tasks/${E(t)}/comments`, {}, { signal: n }),
		getLastCommentForTask: async (t, { signal: n } = {}) => e.fetchFirst(`tasks/${E(t)}/comments`, {}, { signal: n }),
		allPreviewsForTask: async (t, { signal: n } = {}) => e.fetchAll(`tasks/${E(t)}/previews`, {}, { signal: n }),
		allCommentsForProject: async (e, t) => i(e, "comments", t),
		allNotificationsForProject: async (e, t) => i(e, "notifications", t),
		allPreviewFilesForProject: async (e, t) => i(e, "preview-files", t),
		allSubscriptionsForProject: async (e, t) => i(e, "subscriptions", t),
		createPreview: h,
		createExtraPreview: g,
		addPreview: y,
		addExtraPreview: async (e, t, n, r, { normalizeMovie: i, fileName: a, onProgress: o, signal: s } = {}) => {
			_n(r, a);
			let c = await g(e, t, n, { signal: s });
			return v(c, r, {
				normalizeMovie: i,
				fileName: a,
				onProgress: o,
				signal: s
			});
		},
		publishPreview: async (e, t, n, { comment: r, person: i, checklist: a, attachments: o, createdAt: s, links: c, normalizeMovie: l, revision: u, setThumbnail: d = !1, fileName: f, onProgress: p, signal: h } = {}) => {
			_n(n, f);
			let g = await m(e, t, {
				comment: r,
				person: i,
				checklist: a,
				attachments: o,
				createdAt: s,
				links: c,
				signal: h
			}), v = await y(e, g, n, {
				normalizeMovie: l,
				revision: u,
				fileName: f,
				onProgress: p,
				signal: h
			});
			return d && await _(v, { signal: h }), {
				comment: g,
				preview_file: v
			};
		},
		removePreviewFromComment: async (t, n, i, { signal: a } = {}) => e.del(`${r("actions", t, n)}/preview-files/${E(i)}`, void 0, { signal: a }),
		setMainPreview: _,
		batchComments: async (t = [], { task: n, signal: r } = {}) => {
			let i = D(n);
			if (!Array.isArray(t) || !t.every((e) => typeof e == "object" && !!e && !!e.task_status_id && typeof e.text == "string" && (i !== null || !!e.task_id))) throw new x("Missing parameter: every comment needs task_status_id, text and, without the task option, task_id");
			return e.post(`actions/tasks/${i === null ? "" : `${i}/`}batch-comment`, { comments: t.map(gn) }, { signal: r });
		},
		createMultipleComments: async (t, n = [], { signal: r } = {}) => e.post(`actions/projects/${E(t)}/tasks/comment-many`, n, { signal: r }),
		addTasksBatchComments: async (t, n, { signal: r } = {}) => {
			let i = gn(n);
			return e.post("actions/tasks/batch-comment", { comments: O(t).map((e) => ({
				...i,
				task_id: e
			})) }, { signal: r });
		},
		moveCommentToTask: async (t, n, i, { signal: a } = {}) => e.post(`${r("actions", t, n)}/move`, { target_task_id: E(i) }, { signal: a }),
		acknowledgeComment: async (t, n, { signal: i } = {}) => e.post(`${r("data", t, n)}/ack`, {}, { signal: i }),
		replyToComment: async (t, n, i, { attachments: a, fileName: o, onProgress: s, signal: c } = {}) => {
			let l = `${r("data", t, n)}/reply`;
			return !a || a.length === 0 ? e.post(l, { text: i }, { signal: c }) : e.upload(l, {
				file: a,
				fields: { text: i },
				fileName: o,
				onProgress: s,
				signal: c
			});
		},
		deleteCommentAttachment: async (t, n, i, { signal: a } = {}) => e.del(`${r("data", t, n)}/attachments/${E(i)}`, void 0, { signal: a }),
		deleteCommentReply: async (t, n, i, { signal: a } = {}) => e.del(`${r("data", t, n)}/reply/${E(i)}`, void 0, { signal: a }),
		clearTimeSpent: async (t, n, r, { signal: i } = {}) => e.del(a(t, n, r), void 0, { signal: i }),
		allTasks: async ({ project: t, taskType: n, taskStatus: r, episode: i, relations: a = !1, signal: o, ...s } = {}) => (M(s), e.fetchAll("tasks", {
			project_id: D(t),
			task_type_id: D(n),
			task_status_id: D(r),
			episode_id: D(i),
			relations: a ? !0 : null
		}, { signal: o })),
		getOpenTasksBurndown: async ({ signal: t, ...n } = {}) => {
			let r = {
				...n,
				page: void 0,
				limit: void 0
			};
			return e.get("data/tasks/open-tasks/burndown", yn(r), { signal: t });
		},
		removeTaskComment: async (t, n, { signal: i } = {}) => e.del(r("data", t, n), void 0, { signal: i }),
		createTasks: async (t, n, r, { entities: i, entity: a, all: s = !1, signal: c } = {}) => {
			let l = o(t, n, r), u = (e) => e != null;
			if ([
				u(i),
				u(a),
				s === !0
			].filter(Boolean).length !== 1) throw new x("Missing parameter: exactly one of entities, entity or all: true is required");
			if (s === !0) return e.post(l, [], { signal: c });
			if (u(i)) return e.post(l, vn("entities", i), { signal: c });
			let d = E(a);
			return pn.includes(r) ? e.request("POST", l, {
				body: {},
				query: { id: d },
				signal: c
			}) : e.post(l, [d], { signal: c });
		},
		setTaskMainPreview: async (t, { signal: n } = {}) => e.put(`actions/tasks/${E(t)}/set-main-preview`, {}, { signal: n }),
		setTasksMainPreview: async (t, { signal: n } = {}) => e.put("actions/tasks/set-main-preview", { task_ids: O(t) }, { signal: n }),
		setTasksPriority: async (t, n, { signal: r } = {}) => e.put("actions/tasks/set-priority", {
			task_ids: O(t),
			priority: k("priority", n)
		}, { signal: r }),
		reorderTaskTypes: async (t, { signal: n } = {}) => e.post("actions/task-types/reorder", { task_type_ids: O(t) }, { signal: n }),
		importTaskTypeEstimationsWithCsv: async (t, n, r, { episode: i, fileName: a, onProgress: o, signal: s } = {}) => {
			let c = D(i), l = c === null ? "" : `episodes/${c}/`;
			return e.upload(`import/csv/projects/${E(t)}/${l}task-types/${E(n)}/estimations`, {
				file: r,
				fileName: a,
				onProgress: o,
				signal: s
			});
		},
		getTaskUrl: async (t, { signal: n } = {}) => je(H(e.host), t && typeof t == "object" && t.project_id ? t : await e.get(`data/tasks/${E(t)}`, {}, { signal: n }))
	};
}, $ = (e, t, n) => e.fetchAll(t, {}, { signal: n }).then(I), xn = (e) => {
	if (typeof k("listType", e) == "string") return e;
	throw new x("Wrong format: listType must be a string such as \"asset\" or \"todo\"");
}, Sn = (e) => ({
	allOpenProjects: async ({ signal: t } = {}) => $(e, "user/projects/open", t),
	allAssetTypesForProject: async (t, { signal: n } = {}) => $(e, `user/projects/${E(t)}/asset-types`, n),
	allAssetsForAssetTypeAndProject: async (t, n, { signal: r } = {}) => $(e, `user/projects/${E(t)}/asset-types/${E(n)}/assets`, r),
	allTasksForAsset: async (t, { signal: n } = {}) => $(e, `user/assets/${E(t)}/tasks`, n),
	allTasksForShot: async (t, { signal: n } = {}) => $(e, `user/shots/${E(t)}/tasks`, n),
	allTasksForScene: async (t, { signal: n } = {}) => $(e, `user/scenes/${E(t)}/tasks`, n),
	allTasksForSequence: async (t, { signal: n } = {}) => $(e, `user/sequences/${E(t)}/tasks`, n),
	allTaskTypesForAsset: async (t, { signal: n } = {}) => $(e, `user/assets/${E(t)}/task-types`, n),
	allTaskTypesForShot: async (t, { signal: n } = {}) => $(e, `user/shots/${E(t)}/task-types`, n),
	allTaskTypesForScene: async (t, { signal: n } = {}) => $(e, `user/scenes/${E(t)}/task-types`, n),
	allTaskTypesForSequence: async (t, { signal: n } = {}) => $(e, `user/sequences/${E(t)}/task-types`, n),
	allSequencesForProject: async (t, { signal: n } = {}) => $(e, `user/projects/${E(t)}/sequences`, n),
	allEpisodesForProject: async (t, { signal: n } = {}) => $(e, `user/projects/${E(t)}/episodes`, n),
	allShotsForSequence: async (t, { signal: n } = {}) => $(e, `user/sequences/${E(t)}/shots`, n),
	allScenesForSequence: async (t, { signal: n } = {}) => $(e, `user/sequences/${E(t)}/scenes`, n),
	allTasksToDo: async ({ signal: t } = {}) => e.fetchAll("user/tasks", {}, { signal: t }),
	allDoneTasks: async ({ signal: t } = {}) => e.fetchAll("user/done-tasks", {}, { signal: t }),
	getTimespentsRange: async (t, n, { signal: r } = {}) => F(e.get("data/user/time-spents", {
		start_date: V(t),
		end_date: V(n)
	}, { signal: r })),
	logDesktopSessionLogIn: async ({ signal: t } = {}) => e.post("data/user/desktop-login-logs", { date: (/* @__PURE__ */ new Date()).toISOString().replace("Z", "") }, { signal: t }),
	allFilters: async ({ signal: t } = {}) => e.fetchAll("user/filters", {}, { signal: t }),
	newFilter: async (t, n, r, { project: i, entityType: a = null, signal: o } = {}) => e.post("data/user/filters", {
		name: k("name", t),
		query: k("query", n),
		list_type: xn(r),
		project_id: D(i),
		entity_type: a
	}, { signal: o }),
	removeFilter: async (t, { signal: n } = {}) => e.remove("user/filters", E(t), {}, { signal: n }),
	updateFilter: async (t, { signal: n } = {}) => e.update("user/filters", E(t), t, { signal: n }),
	getContext: async ({ signal: t } = {}) => F(e.get("data/user/context", {}, { signal: t })),
	allTasksRequiringFeedback: async ({ signal: t } = {}) => e.fetchAll("user/tasks-to-check", {}, { signal: t }),
	allFilterGroups: async ({ signal: t } = {}) => e.fetchAll("user/filter-groups", {}, { signal: t }),
	newFilterGroup: async (t, n, { project: r, color: i = "", isShared: a = !1, department: o, entityType: s = null, signal: c } = {}) => e.post("data/user/filter-groups", {
		name: k("name", t),
		list_type: xn(n),
		color: i,
		is_shared: a,
		project_id: D(r),
		department_id: D(o),
		entity_type: s
	}, { signal: c }),
	getFilterGroup: async (t, { signal: n } = {}) => e.fetchOne("user/filter-groups", E(t), { signal: n }),
	updateFilterGroup: async (t, { signal: n } = {}) => e.update("user/filter-groups", E(t), t, { signal: n }),
	removeFilterGroup: async (t, { signal: n } = {}) => e.remove("user/filter-groups", E(t), {}, { signal: n }),
	allDesktopLoginLogs: async ({ signal: t } = {}) => e.fetchAll("user/desktop-login-logs", {}, { signal: t }),
	getTimeSpentsByDate: async (t, { signal: n } = {}) => F(e.get(`data/user/time-spents/${V(t)}`, {}, { signal: n })),
	getTaskTimeSpent: async (t, n, { signal: r } = {}) => {
		let i = E(t);
		return (await e.get(`data/user/time-spents/${V(n)}`, {}, { signal: r })).find((e) => e.task_id === i) || null;
	},
	getDayOff: async (t, { signal: n } = {}) => {
		let r = await e.get(`data/user/day-offs/${V(t)}`, {}, { signal: n });
		return r && r.id ? r : null;
	},
	allNotifications: async ({ after: t, before: n, type: r, taskType: i, taskStatus: a, read: o, watching: s, signal: c, ...l } = {}) => (M(l), e.fetchAll("user/notifications", {
		after: B(t),
		before: B(n),
		type: r,
		task_type_id: D(i),
		task_status_id: D(a),
		read: o,
		watching: s
	}, { signal: c })),
	getNotification: async (t, { signal: n } = {}) => e.fetchOne("user/notifications", E(t), { signal: n }),
	updateNotification: async (t, { signal: n } = {}) => e.update("user/notifications", E(t), t, { signal: n }),
	checkTaskSubscription: async (t, { signal: n } = {}) => e.get(`data/user/tasks/${E(t)}/subscribed`, {}, { signal: n }),
	subscribeToTask: async (t, { signal: n } = {}) => e.post(`actions/user/tasks/${E(t)}/subscribe`, {}, { signal: n }),
	unsubscribeFromTask: async (t, { signal: n } = {}) => e.del(`actions/user/tasks/${E(t)}/unsubscribe`, void 0, { signal: n }),
	allChats: async ({ signal: t } = {}) => e.fetchAll("user/chats", {}, { signal: t }),
	joinChat: async (t, { signal: n } = {}) => e.post(`actions/user/chats/${E(t)}/join`, {}, { signal: n }),
	leaveChat: async (t, { signal: n } = {}) => e.del(`actions/user/chats/${E(t)}/join`, void 0, { signal: n }),
	getChat: async (t, { signal: n } = {}) => F(e.get(`data/entities/${E(t)}/chat`, {}, { signal: n })),
	allChatMessages: async (t, { signal: n } = {}) => e.get(`data/entities/${E(t)}/chat/messages`, {}, { signal: n }),
	getChatMessage: async (t, n, { signal: r } = {}) => F(e.get(`data/entities/${E(t)}/chat/messages/${E(n)}`, {}, { signal: r })),
	newChatMessage: async (t, n, { attachments: r, fileName: i, onProgress: a, signal: o } = {}) => {
		let s = `data/entities/${E(t)}/chat/messages`, c = [].concat(r || []), l = { message: c.length > 0 && n === "" ? "" : k("message", n) };
		return c.length ? e.upload(s, {
			file: c,
			fileName: i,
			fields: l,
			onProgress: a,
			signal: o
		}) : e.post(s, l, { signal: o });
	},
	removeChatMessage: async (t, n, { signal: r } = {}) => e.del(`data/entities/${E(t)}/chat/messages/${E(n)}`, void 0, { signal: r }),
	getTasksRequiringFeedbackFilterValues: async ({ signal: t } = {}) => F(e.get("data/user/tasks-to-check/filter-values", {}, { signal: t })),
	subscribeToTasks: async (t, { signal: n } = {}) => e.post("actions/user/tasks/subscribe", { task_ids: O(t) }, { signal: n }),
	unsubscribeFromTasks: async (t, { signal: n } = {}) => e.post("actions/user/tasks/unsubscribe", { task_ids: O(t) }, { signal: n }),
	clearAvatar: async ({ signal: t } = {}) => e.del("actions/user/clear-avatar", void 0, { signal: t }),
	markAllNotificationsAsRead: async ({ signal: t } = {}) => e.post("actions/user/notifications/mark-all-as-read", {}, { signal: t })
}), Cn = (e, t) => {
	if (!e) return {
		data: null,
		isJson: !0
	};
	if (!t.includes("json")) return {
		data: e,
		isJson: !1
	};
	try {
		return {
			data: JSON.parse(e),
			isJson: !0
		};
	} catch (t) {
		return {
			data: e,
			isJson: !1,
			error: t
		};
	}
}, wn = (e, t, n) => Object.fromEntries(t.map((t, r) => [t, t === "tasks" ? e[r].map((e) => Tn(e, n)) : e[r]])), Tn = (e, t) => {
	let n = wn(e, t);
	return {
		...n,
		assignees: n.assignees || []
	};
}, En = async (e) => {
	let t = null, n = null, r = [], i = (e) => {
		if (!e) return;
		if (!t) {
			t = JSON.parse(e);
			let r = Object.keys(t).find((e) => e.endsWith("_fields") && e !== "task_fields");
			n = t[r];
			return;
		}
		let i = JSON.parse(e);
		r.push(t.compact ? wn(i, n, t.task_fields) : i);
	}, a = (e) => {
		try {
			i(e);
		} catch (e) {
			throw Object.assign(/* @__PURE__ */ SyntaxError(`Malformed NDJSON line: ${e.message}`), { cause: e });
		}
	}, o = e.body.getReader(), s = new TextDecoder(), c = "";
	try {
		for (;;) {
			let { done: e, value: t } = await o.read();
			if (e) break;
			c += s.decode(t, { stream: !0 });
			let n = c.split("\n");
			c = n.pop(), n.forEach(a);
		}
		a((c + s.decode()).trim());
	} catch (e) {
		throw await o.cancel().catch(() => {}), e;
	}
	return r;
}, Dn = (e = {}) => {
	let t = new URLSearchParams();
	return Object.entries(e).forEach(([e, n]) => {
		n != null && n !== "" && (Array.isArray(n) ? n.forEach((n) => t.append(e, n)) : t.append(e, n));
	}), t.toString();
}, On = (e, t, n) => {
	let r = `${e.replace(/\/+$/, "")}/${t.replace(/^\/+/, "")}`, i = Dn(n);
	return i ? `${r}?${i}` : r;
}, kn = ({ file: e, fields: t = {}, fileField: n = "file", fileName: r }) => {
	let i = new FormData();
	Object.entries(t).forEach(([e, t]) => {
		t != null && i.append(e, typeof t == "object" ? JSON.stringify(t) : t);
	});
	let a = Array.isArray(e) ? e : [e];
	if (!a.length || !a.every((e) => e instanceof Blob)) throw new x("Missing parameter: file must be a Blob or a File");
	return a.forEach((e, t) => {
		let a = t === 0 ? n : `${n}-${t}`;
		r && t === 0 ? i.append(a, e, r) : i.append(a, e);
	}), i;
}, An = (e) => {
	try {
		return e ? JSON.parse(e) : null;
	} catch {
		return e;
	}
}, jn = (e, t) => {
	let { status: n, responseText: r } = e;
	if (n < 200 || n >= 300) throw ue(n, {
		...t,
		body: An(r) || ""
	});
	let { data: i, isJson: a } = Cn(r, e.getResponseHeader("Content-Type") || "");
	if (!a) throw new b(`${t.method} ${t.path} answered ${n} without JSON`, {
		...t,
		status: n,
		body: i
	});
	return i;
}, Mn = () => new DOMException("The operation was aborted", "AbortError"), Nn = (e) => {
	let t = globalThis.location;
	return !!(t && t.origin) && new URL(e, t.href).origin === t.origin;
}, Pn = ({ url: e, form: t, headers: n, onProgress: r, signal: i, withCredentials: a, info: o }) => new Promise((s, c) => {
	if (i.aborted) {
		c(Mn());
		return;
	}
	let l = new globalThis.XMLHttpRequest(), u = () => l.abort(), d = (e, t) => {
		i.removeEventListener("abort", u), e(t);
	};
	l.open("POST", e), a && (l.withCredentials = !0), Object.entries({
		Accept: "application/json",
		...n
	}).forEach(([e, t]) => l.setRequestHeader(e, t)), r && (l.upload.onprogress = ({ loaded: e, total: t }) => r({
		loaded: e,
		total: t
	})), l.onload = () => {
		try {
			d(s, jn(l, o));
		} catch (e) {
			d(c, e);
		}
	}, l.onerror = () => d(c, new re(`POST ${o.path} failed`, o)), l.onabort = () => d(c, Mn()), i.addEventListener("abort", u), l.send(t);
}), Fn = ({ host: e, request: t, withAuthReplay: n, track: r, withCredentials: i, xhrUploads: a }) => async (o, s) => {
	let c = kn(s), { query: l, onProgress: u, signal: d } = s, f = On(e, o, l);
	return a !== "all" && (a !== "progress" || !u) || globalThis.XMLHttpRequest === void 0 || !i && Nn(f) ? t("POST", o, {
		body: c,
		query: l,
		signal: d
	}) : n((e) => {
		let t = r(d);
		return Pn({
			url: f,
			form: c,
			headers: e,
			onProgress: u,
			signal: t.signal,
			withCredentials: i,
			info: {
				path: o,
				method: "POST"
			}
		}).finally(t.release);
	}, d);
}, In = (e) => typeof FormData < "u" && e instanceof FormData, Ln = (e) => e == null ? {} : In(e) ? { body: e } : {
	body: JSON.stringify(e),
	headers: { "Content-Type": "application/json" }
}, Rn = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) throw new x("Wrong format: expected an object of the fields to update");
	return "id" in e ? Object.fromEntries(Object.entries(e).filter(([e]) => e !== "id")) : e;
}, zn = async (e) => Cn(e.status === 204 ? "" : await e.text(), e.headers.get("Content-Type") || ""), Bn = (e, t, n, r, i) => Object.assign(new b(`${e.method} ${e.path} answered ${t} ${n}`, {
	...e,
	status: t,
	body: r
}), i && { cause: i }), Vn = (e) => {
	if (typeof e?.message != "string") return String(e);
	let t = e.cause?.message;
	return typeof t == "string" ? `${e.message}: ${t}` : e.message;
}, Hn = (e) => {
	let t = (e.headers.get("Retry-After") || "").trim();
	if (/^\d+$/.test(t)) return Number(t);
	let n = Date.parse(t);
	return Number.isNaN(n) ? null : Math.max(0, Math.ceil((n - Date.now()) / 1e3));
}, Un = (e, t) => {
	let n = null, r = new ReadableStream({
		pull: (r) => (n = n || e.body.getReader(), n.read().then(({ done: e, value: n }) => e ? (t(), r.close()) : r.enqueue(n), (e) => {
			throw t(), e;
		})),
		cancel: (r) => (t(), (n || e.body).cancel(r))
	}, { highWaterMark: 0 });
	return Object.defineProperties(new Response(r, e), {
		url: { value: e.url },
		redirected: { value: e.redirected },
		type: { value: e.type }
	});
}, Wn = () => new DOMException("The operation was aborted", "AbortError"), Gn = (e, t) => t ? new Promise((n, r) => {
	let i = () => r(Wn());
	t.aborted ? i() : t.addEventListener("abort", i, { once: !0 }), e.then(n, r).finally(() => t.removeEventListener("abort", i));
}) : e, Kn = Symbol("not streamed"), qn = (e) => e instanceof S || e instanceof b && e.status >= 400 && e.status < 500, Jn = (e, t) => {
	let { host: n, fetch: r, timeout: i, credentials: a, xhrUploads: o } = e, s = /* @__PURE__ */ new Set(), c = async (e, t, o = {}) => {
		let { query: c, body: l, headers: u = {}, signal: d, raw: f = !1, read: p } = o, m = On(n, t, c), h = Ln(l), g = {
			path: t,
			method: e
		}, _ = new AbortController(), v = () => _.abort(), y = !1, ee = () => {
			y = !0, _.abort();
		}, x = (e) => Number.isFinite(e) ? setTimeout(ee, e) : null, S = () => {
			s.delete(_), d && d.removeEventListener("abort", v);
		};
		s.add(_), d && (d.aborted ? _.abort() : d.addEventListener("abort", v));
		let C = !f && !In(l), w = In(l) ? null : x(i.response), te = C ? x(i.deadline) : null, ne = !1, T = null;
		try {
			let n = await r(m, {
				method: e,
				body: h.body,
				headers: {
					Accept: "application/json",
					...h.headers,
					...u
				},
				signal: _.signal,
				credentials: a
			});
			if (clearTimeout(w), T = n.status, !n.ok) {
				let { data: e } = await zn(n).catch(() => ({ data: "" }));
				throw ue(n.status, {
					...g,
					body: e || "",
					retryAfter: Hn(n)
				});
			}
			if (f && n.status === 202) {
				let { data: r } = await zn(n).catch(() => ({ data: "" }));
				throw new b(`${e} ${t} answered 202: the file is not ready yet`, {
					...g,
					status: 202,
					body: r || "",
					retryAfter: Hn(n)
				});
			}
			if (f && n.body) return ne = !0, _.signal.addEventListener("abort", S, { once: !0 }), Un(n, S);
			if (f) return n;
			if (p) {
				if ((n.headers.get("Content-Type") || "").includes("text/html")) {
					let e = await n.text();
					throw Bn(g, n.status, "with an HTML page", e);
				}
				return await p(n);
			}
			let { data: i, isJson: o, error: s } = await zn(n);
			if (!o) {
				let e = s ? "with malformed JSON" : "without JSON";
				throw Bn(g, n.status, e, i, s);
			}
			return i;
		} catch (n) {
			throw y ? new ie(`${e} ${t} timed out`, g) : _.signal.aborted ? n?.name === "AbortError" ? n : Wn() : n instanceof b ? n : n instanceof SyntaxError ? Bn(g, T, "with a malformed body", "", n) : Object.assign(new re(`${e} ${t} failed: ${Vn(n)}`, g), { cause: n });
		} finally {
			clearTimeout(w), clearTimeout(te), ne || S();
		}
	}, l = async (e, n) => {
		let r = t.generation(), i = t.headers(), a = () => t.generation() !== r;
		try {
			return await e(i);
		} catch (r) {
			if (!(r instanceof S) || a()) throw r;
			if (t.headers().Authorization === i.Authorization) {
				let e = t.canRefresh() ? await Gn(t.refresh(c), n).then(() => null, (e) => e) : r;
				if (n?.aborted) throw Wn();
				if (a()) throw r;
				if (e && !qn(e)) throw e;
				if (e) throw t.onUnauthorized(), r;
			}
			try {
				return await e(t.headers());
			} catch (e) {
				throw e instanceof S && !a() && t.onUnauthorized(), e;
			}
		}
	}, u = (e, t, n = {}) => n.skipAuth ? c(e, t, n) : l((r) => c(e, t, {
		...n,
		headers: {
			...r,
			...n.headers
		}
	}), n.signal), d = (e, t, n) => u("GET", e, {
		...n,
		query: t
	}), f = (e, t, n) => u("POST", e, {
		...n,
		body: t
	}), p = (e, t, n) => u("PUT", e, {
		...n,
		body: t
	}), m = (e, t, n) => u("DELETE", e, {
		...n,
		body: t
	}), h = async (e) => (e.headers.get("Content-Type") || "").includes("ndjson") ? En(e) : (e.body && await e.body.cancel(), Kn);
	return {
		host: n,
		send: c,
		request: u,
		withAuthReplay: l,
		upload: Fn({
			host: n,
			request: u,
			withAuthReplay: l,
			track: (e) => {
				let t = new AbortController(), n = () => t.abort();
				return s.add(t), e && (e.aborted ? t.abort() : e.addEventListener("abort", n)), {
					signal: t.signal,
					release: () => {
						s.delete(t), e && e.removeEventListener("abort", n);
					}
				};
			},
			withCredentials: a === "same-origin",
			xhrUploads: o
		}),
		download: (e, { query: t, signal: n } = {}) => u("GET", e, {
			query: t,
			signal: n,
			raw: !0
		}),
		get: d,
		getNdjson: async (e, t = {}, n = {}) => {
			try {
				let r = await u("GET", e, {
					...n,
					read: h,
					query: {
						...t,
						stream: !0,
						compact: !0
					},
					headers: { Accept: "application/x-ndjson" }
				});
				if (r !== Kn) return r;
			} catch (e) {
				if (!(e instanceof b && e.status && !(e instanceof S))) throw e;
			}
			return d(e, t, n);
		},
		post: f,
		put: p,
		del: m,
		fetchAll: (e, t, n) => d(`data/${e}`, t, n),
		fetchFirst: (e, t, n) => F(d(`data/${e}`, t, n)).then((e) => Array.isArray(e) && e.length > 0 ? e[0] : null),
		fetchOne: (e, t, n) => F(d(`data/${e}/${t}`, {}, n)),
		create: (e, t, n) => f(`data/${e}`, t, n),
		update: async (e, t, n, r) => p(`data/${e}/${t}`, Rn(n), r),
		remove: (e, t, n, r) => u("DELETE", `data/${e}/${t}`, {
			...r,
			query: n
		}),
		abortAll: () => s.forEach((e) => e.abort())
	};
}, Yn = [
	400,
	401,
	409
], Xn = ({ totp: e, emailOtp: t, recoveryCode: n, fidoAuthenticationResponse: r }) => j({
	totp: e,
	email_otp: t,
	recovery_code: n,
	fido_authentication_response: r
}), Zn = (e, t) => {
	let n = 0, r = () => {
		n += 1;
		let e = n;
		return () => e === n;
	}, i = Promise.resolve(), a = 0, o = (e, n) => {
		if (t.mode !== "cookie") return e();
		let r = a, o = i.then(() => {
			if (a !== r || n && n.aborted) throw new DOMException("The operation was aborted", "AbortError");
			return e();
		});
		return i = o.then(() => {}, () => {}), Gn(o, n);
	}, s = (n, i, a) => {
		let s = r();
		return o(() => e.post(n, i, { signal: a }), a).then((e) => (e.access_token && s() && (t.mode === "bearer" ? t.setTokens({
			access_token: e.access_token,
			refresh_token: e.refresh_token
		}) : t.startCookieSession()), e.otp_recovery_codes ?? null));
	}, c = async (t, n, r) => {
		let i = (t) => e.get("auth/logout", {}, {
			skipAuth: !0,
			headers: t,
			signal: r
		});
		try {
			return await i(t);
		} catch (t) {
			if (!(t instanceof S) || !n) throw t;
			let a = await e.get("auth/refresh-token", {}, {
				skipAuth: !0,
				headers: { Authorization: `Bearer ${n}` },
				signal: r
			}), o = a && a.access_token;
			if (typeof o != "string" || !o) throw t;
			return i({ Authorization: `Bearer ${o}` });
		}
	};
	return {
		abortTurns: () => {
			a += 1;
		},
		logIn: async (n, i, { totp: a, emailOtp: s, recoveryCode: c, fidoAuthenticationResponse: l, signal: u } = {}) => {
			let d = {
				email: n,
				password: i,
				totp: a,
				email_otp: s,
				recovery_code: c,
				fido_authentication_response: l
			}, f = r(), p = await o(() => e.post("auth/login", d, {
				skipAuth: !0,
				signal: u
			}), u).catch((e) => {
				throw e instanceof b && Yn.includes(e.status) ? fe(e) : e;
			});
			if (t.mode === "bearer" && (typeof p?.access_token != "string" || !p.access_token)) throw new T("Login returned no access token", {
				status: 200,
				path: "auth/login",
				method: "POST",
				body: p
			});
			if (!f()) throw new DOMException("The login was superseded by a later session change", "AbortError");
			return t.mode === "bearer" ? t.setTokens({
				access_token: p.access_token,
				refresh_token: p.refresh_token
			}) : t.startCookieSession(), p;
		},
		logOut: async (e) => {
			r();
			let n = t.getTokens(), i = t.headers(), { signal: a } = e ?? {}, s = o(() => c(i, n && n.refresh_token, a), a);
			return t.setTokens(null), s;
		},
		setToken: (e) => {
			r(), t.setTokens({ access_token: e });
		},
		getTokens: () => t.getTokens(),
		getCurrentUser: async ({ signal: t } = {}) => e.get("auth/authenticated", {}, { signal: t }).then((e) => e.user),
		isAuthenticated: async ({ signal: n } = {}) => e.get("auth/authenticated", {}, {
			skipAuth: !0,
			headers: t.headers(),
			signal: n
		}).then(() => !0, (e) => {
			if (e instanceof S) return !1;
			throw e;
		}),
		getConfig: async ({ signal: t } = {}) => e.get("config", {}, {
			skipAuth: !0,
			signal: t
		}),
		changePassword: async (t, n, r = {}) => {
			if (typeof r == "string") throw new x("changePassword: the third argument is the options, compare the confirmation before the call");
			let { signal: i } = r;
			return e.post("auth/change-password", {
				old_password: k("oldPassword", t),
				password: k("password", n),
				password_2: n
			}, { signal: i });
		},
		preEnableTotp: async ({ signal: t } = {}) => e.put("auth/totp", {}, { signal: t }),
		enableTotp: async (e, { signal: t } = {}) => s("auth/totp", { totp: k("totp", e) }, t),
		disableTotp: async ({ signal: t, ...n } = {}) => e.del("auth/totp", Xn(n), { signal: t }),
		sendEmailOtp: async (t, { signal: n } = {}) => e.get("auth/email-otp", { email: k("email", t) }, {
			skipAuth: !0,
			signal: n
		}),
		preEnableEmailOtp: async ({ signal: t } = {}) => e.put("auth/email-otp", {}, { signal: t }),
		enableEmailOtp: async (e, { signal: t } = {}) => s("auth/email-otp", { email_otp: k("emailOtp", e) }, t),
		disableEmailOtp: async ({ signal: t, ...n } = {}) => e.del("auth/email-otp", Xn(n), { signal: t }),
		preRegisterFido: async ({ signal: t } = {}) => e.put("auth/fido", {}, { signal: t }),
		registerFido: async (e, t, { signal: n } = {}) => s("auth/fido", {
			registration_response: k("registrationResponse", e),
			device_name: k("deviceName", t)
		}, n),
		getFidoChallenge: async (t, { signal: n } = {}) => e.get("auth/fido", { email: k("email", t) }, {
			skipAuth: !0,
			signal: n
		}),
		unregisterFido: async (t, { signal: n, ...r } = {}) => e.del("auth/fido", {
			device_name: k("deviceName", t),
			...Xn(r)
		}, { signal: n }),
		newRecoveryCodes: async ({ signal: t, ...n } = {}) => e.put("auth/recovery-codes", Xn(n), { signal: t }).then((e) => e.otp_recovery_codes)
	};
}, Qn = "io server disconnect", $n = async () => {
	let e = await import(
		/* webpackIgnore: true */
		/* @vite-ignore */
		"socket.io-client"
);
	return e.io || e.default;
}, er = (e) => {
	setTimeout(() => {
		throw e;
	});
}, tr = (e, t) => {
	if (typeof t == "function") return t;
	throw new x(`${e}: the handler must be a function`);
}, nr = (e) => e instanceof S || e instanceof b && e.status >= 400 && e.status < 500, rr = ({ eventHost: e, session: t, io: n, probe: r = async () => {}, loadIo: i = $n }) => {
	if (n != null && typeof n != "function") throw TypeError("createClient: io must be the \"io\" function of socket.io-client");
	let a = /* @__PURE__ */ new Set(), o = {
		connect: /* @__PURE__ */ new Set(),
		disconnect: /* @__PURE__ */ new Set(),
		connectError: /* @__PURE__ */ new Set()
	}, s = null, c = null, l = null, u = null, d = !1, f = !1, p = null, m = () => (c || (c = Promise.resolve().then(() => n || i()).then((e) => {
		if (typeof e != "function") throw Error("the module exports no io function");
		return s = e, e;
	}).catch((e) => {
		throw c = null, Error(`Kitsu events need socket.io-client: pass its io function to createClient({ io }), as a bundled app must, or in Node run "npm i socket.io-client" (${e.message})`);
	})), c), h = (e, t) => {
		try {
			e(...t);
		} catch (e) {
			er(e);
		}
	}, g = (e, ...t) => [...e].forEach((e) => h(e, t)), _ = (e, n) => {
		let r = n.Authorization;
		e.io.on("reconnect_attempt", () => {
			let n = t.headers();
			e.io.opts.extraHeaders = n, r = n.Authorization;
		}), e.on("connect", () => {
			p = null, g(o.connect);
		}), e.on("disconnect", (n) => {
			l === e && n === Qn && (l = null, t.headers().Authorization === r ? ee() : y()), g(o.disconnect, n);
		}), e.on("connect_error", (t) => {
			l === e && e.active === !1 && (l = null), g(o.connectError, t);
		}), a.forEach(({ name: t, relay: n }) => e.on(t, n));
	}, v = () => {
		let n = null;
		try {
			let r = t.headers();
			n = s(`${e}/events`, {
				forceNew: !0,
				extraHeaders: r
			}), _(n, r);
		} catch (e) {
			f = !0;
			try {
				n && typeof n.disconnect == "function" && n.disconnect();
			} catch {}
			throw e;
		}
		l = n, u = t.generation();
	}, y = () => {
		if (d && !f && s && t.canAuthenticate()) try {
			v();
		} catch (e) {
			er(e);
		}
	}, ee = () => {
		let e = t.generation();
		d && p !== e && t.canRefresh() && (p = e, r().catch((t) => {
			!nr(t) && p === e && (p = null);
		}));
	}, b = () => {
		let e = l;
		l = null, e && e.disconnect();
	}, S = async () => {
		d = !0, f = !1, await m(), d && !l && v();
	}, C = (e, t) => (e.add(t), () => {
		e.delete(t);
	});
	return {
		on: async (e, t) => {
			if (typeof e != "string" || !e) throw new x("events.on: the event name is required");
			let n = tr("events.on", t), r = {
				name: e,
				relay: (...e) => h(n, e)
			}, i = () => {
				a.delete(r) && l && l.off(e, r.relay);
			};
			a.add(r), l && l.on(e, r.relay);
			try {
				await S();
			} catch (e) {
				throw i(), e;
			}
			return i;
		},
		onConnect: (e) => C(o.connect, tr("events.onConnect", e)),
		onDisconnect: (e) => C(o.disconnect, tr("events.onDisconnect", e)),
		onConnectError: (e) => C(o.connectError, tr("events.onConnectError", e)),
		disconnect: () => {
			d = !1, b();
		},
		syncSession: () => {
			l && u !== t.generation() && b(), l || y();
		}
	};
}, ir = (e) => e ? { ...e } : null, ar = ({ auth: e = "bearer", tokens: t = null, onChange: n = () => {}, onTokensChange: r = () => {}, onUnauthorized: i = () => {} } = {}) => {
	let a = ir(t), o = null, s = 0, c = !1, l = (e) => {
		a = ir(e);
		try {
			n();
		} finally {
			r(ir(a));
		}
	}, u = () => {
		s += 1, o = null;
	};
	return {
		mode: e,
		getTokens: () => ir(a),
		setTokens: (e) => {
			u(), c = !1, l(e);
		},
		startCookieSession: () => {
			u(), c = !0, n();
		},
		generation: () => s,
		onUnauthorized: i,
		headers: () => e === "bearer" && a && a.access_token ? { Authorization: `Bearer ${a.access_token}` } : {},
		canAuthenticate: () => e === "bearer" ? !!(a && a.access_token) : c,
		canRefresh: () => e === "bearer" && !!(a && a.refresh_token),
		refresh: (e) => {
			if (!o) {
				let t = s, n = a, r = "auth/refresh-token", i = e("GET", r, { headers: { Authorization: `Bearer ${n.refresh_token}` } }).then((e) => {
					if (s !== t) return;
					let i = e && e.access_token;
					if (typeof i != "string" || !i) throw new S("Token refresh returned no access token", {
						path: r,
						method: "GET",
						body: e
					});
					l({
						...n,
						access_token: i,
						refresh_token: e.refresh_token || n.refresh_token
					});
				}).finally(() => {
					o === i && (o = null);
				});
				o = i;
			}
			return o;
		}
	};
}, or = {
	response: 6e4,
	deadline: 3e5
}, sr = 2147483647, cr = (e, t) => {
	if (t == null) return or[e];
	if (typeof t != "number" || Number.isNaN(t) || t < 0) throw TypeError(`createClient: timeout.${e} must be a number of milliseconds`);
	return t === 0 || t > sr ? Infinity : t;
}, lr = ({ xhrUploads: e, fetch: t }) => e === !0 ? "all" : e === !1 || t ? "none" : "progress", ur = (e = {}) => Object.freeze({
	response: cr("response", e.response),
	deadline: cr("deadline", e.deadline)
}), dr = (e) => e ? (...t) => {
	try {
		e(...t);
	} catch (e) {
		er(e);
	}
} : void 0, fr = {
	fetch: "function",
	xhrUploads: "boolean",
	onTokensChange: "function",
	onUnauthorized: "function",
	eventHost: "string"
}, pr = (e) => {
	if (typeof e.host != "string") throw TypeError("createClient: host must be a string");
	if (![
		"bearer",
		"cookie",
		void 0,
		null
	].includes(e.auth)) throw TypeError("createClient: auth must be \"bearer\" or \"cookie\"");
	let { timeout: t } = e;
	if (t != null && typeof t != "object") throw TypeError("createClient: timeout must be an object: { response, deadline }");
	Object.entries(fr).forEach(([t, n]) => {
		let r = e[t];
		if (r != null && typeof r !== n) throw TypeError(`createClient: ${t} must be a ${n}`);
	});
}, mr = (e) => {
	if (!e || !e.host) throw TypeError("createClient: host is required");
	pr(e);
	let t = e.auth || "bearer", n = Object.freeze({
		host: e.host,
		fetch: e.fetch || ((e, t) => globalThis.fetch(e, t)),
		xhrUploads: lr(e),
		timeout: ur(e.timeout || void 0),
		credentials: t === "cookie" ? "same-origin" : "omit"
	}), r = ar({
		auth: t,
		tokens: e.tokens,
		onChange: () => a(),
		onTokensChange: dr(e.onTokensChange),
		onUnauthorized: dr(e.onUnauthorized)
	}), i = Jn(n, r), { syncSession: a, ...o } = rr({
		eventHost: (e.eventHost || n.host.replace(/\/+$/, "").replace(/\/api$/, "")).replace(/\/+$/, ""),
		session: r,
		io: e.io,
		probe: () => i.get("auth/authenticated")
	}), { abortTurns: s, ...c } = Zn(i, r);
	return {
		host: n.host,
		http: i,
		events: o,
		close: () => {
			try {
				o.disconnect();
			} finally {
				s(), i.abortAll();
			}
		},
		...c
	};
}, hr = (e) => {
	let t = mr(e), { http: n } = t;
	return Object.freeze({
		...t,
		asset: Be(n),
		casting: We(n),
		concept: Ge(n),
		customAction: Ke(n),
		edit: Je(n),
		entity: Ye(n),
		event: Qe(n),
		files: nt(n),
		hardware: rt(n),
		news: it(n),
		person: gt(n),
		playlist: Ot(n),
		project: Wt(n),
		projectTemplate: Yt(n),
		scene: Xt(n),
		schedule: tn(n),
		search: rn(n),
		shot: ln(n),
		studio: un(n),
		task: bn(n),
		user: Sn(n)
	});
}, gr = (e) => `/plugins/${e}/tickets`, _r = (e) => typeof e == "string" && e.length > 0 ? e : null, vr = (e) => {
	let t = _r(e);
	return t && t !== "all" ? t : null;
}, yr = (e) => ({
	title: typeof e.title == "string" ? e.title : "",
	text: typeof e.text == "string" ? e.text : "",
	status: _r(e.status) || "open",
	task_id: _r(e.task_id),
	assignee_id: _r(e.assignee_id),
	project_id: _r(e.project_id),
	episode_id: vr(e.episode_id)
}), br = null, xr = () => (br || (br = hr({
	host: "/api",
	auth: "cookie"
})), br), Sr = () => {
	let e = r(), { http: t } = xr(), n = () => gr(e.value?.pluginId ?? "");
	return {
		fetchTickets: (e, r) => {
			let i = {};
			e && (i.production_id = e);
			let a = vr(r);
			return a && (i.episode_id = a), t.get(n(), i, {});
		},
		getTicket: (e) => t.get(`${n()}/${e}`, void 0, {}),
		createTicket: (e) => t.post(n(), yr(e), {}),
		updateTicket: (e, r) => t.put(`${n()}/${e}`, yr(r), {}),
		deleteTicket: (e) => t.del(`${n()}/${e}`, void 0, {})
	};
}, Cr = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, wr = (e) => typeof e == "string" && e.length > 0 ? e : null, Tr = () => {
	let t = n(), i = r(), a = e(() => wr(t.params.production_id) ?? wr(i.value?.productionId)), o = e(() => wr(t.params.episode_id) ?? wr(i.value?.episodeId));
	return {
		productionId: a,
		episodeId: e(() => vr(o.value))
	};
};
export { y as a, o as c, Sr as i, Cr as n, ee as o, vr as r, h as s, Tr as t };

//# sourceMappingURL=useTicketsScope-DsHHTSV5.js.map