//#region \0kitsu-shared:vue
var e = globalThis.__KITSU_SHARED__;
if (!e) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var t = e.modules.vue;
if (!t) throw Error("Kitsu plugin: the host does not share vue.");
t.default, t.BaseTransition, t.BaseTransitionPropsValidators, t.Comment, t.DeprecationTypes, t.EffectScope, t.ErrorCodes, t.ErrorTypeStrings;
var n = t.Fragment;
t.KeepAlive, t.ReactiveEffect, t.Static, t.Suspense, t.Teleport, t.Text, t.TrackOpTypes, t.Transition, t.TransitionGroup, t.TriggerOpTypes, t.VueElement, t.__esModule, t.assertNumber, t.callWithAsyncErrorHandling, t.callWithErrorHandling, t.camelize, t.capitalize, t.cloneVNode, t.compatUtils, t.compile;
var r = t.computed;
t.createApp;
var i = t.createBlock, a = t.createCommentVNode, o = t.createElementBlock, s = t.createElementVNode;
t.createHydrationRenderer, t.createPropsRestProxy, t.createRenderer, t.createSSRApp, t.createSlots, t.createStaticVNode;
var c = t.createTextVNode, l = t.createVNode;
t.customRef, t.defineAsyncComponent;
var u = t.defineComponent;
t.defineCustomElement, t.defineEmits, t.defineExpose, t.defineModel, t.defineOptions, t.defineProps, t.defineSSRCustomElement, t.defineSlots, t.devtools, t.effect, t.effectScope, t.getCurrentInstance, t.getCurrentScope, t.getCurrentWatcher, t.getTransitionRawChildren, t.guardReactiveProps;
var d = t.h;
t.handleError, t.hasInjectionContext, t.hydrate, t.hydrateOnIdle, t.hydrateOnInteraction, t.hydrateOnMediaQuery, t.hydrateOnVisible, t.initCustomFormatter, t.initDirectivesForSSR, t.inject, t.isMemoSame, t.isProxy, t.isReactive, t.isReadonly, t.isRef, t.isRuntimeOnly, t.isShallow, t.isVNode, t.markRaw, t.mergeDefaults, t.mergeModels, t.mergeProps, t.nextTick, t.nodeOps;
var f = t.normalizeClass;
t.normalizeProps, t.normalizeStyle, t.onActivated, t.onBeforeMount, t.onBeforeUnmount, t.onBeforeUpdate, t.onDeactivated, t.onErrorCaptured;
var p = t.onMounted;
t.onRenderTracked, t.onRenderTriggered, t.onScopeDispose, t.onServerPrefetch, t.onUnmounted, t.onUpdated, t.onWatcherCleanup;
var m = t.openBlock;
t.patchProp, t.popScopeId, t.provide, t.proxyRefs, t.pushScopeId, t.queuePostFlushCb, t.reactive, t.readonly;
var h = t.ref;
t.registerRuntimeCompiler, t.render;
var g = t.renderList;
t.renderSlot, t.resolveComponent, t.resolveDirective, t.resolveDynamicComponent, t.resolveFilter, t.resolveTransitionHooks, t.setBlockTracking, t.setDevtoolsHook, t.setTransitionHooks, t.shallowReactive, t.shallowReadonly, t.shallowRef, t.ssrContextKey, t.ssrUtils, t.stop;
var _ = t.toDisplayString;
t.toHandlerKey, t.toHandlers, t.toRaw, t.toRef, t.toRefs, t.toValue, t.transformVNodeArgs, t.triggerRef;
var v = t.unref;
t.useAttrs, t.useCssModule, t.useCssVars, t.useHost, t.useId, t.useModel, t.useSSRContext, t.useShadowRoot, t.useSlots, t.useTemplateRef, t.useTransitionState, t.vModelCheckbox, t.vModelDynamic, t.vModelRadio;
var y = t.vModelSelect, ee = t.vModelText;
t.vShow, t.version, t.warn;
var te = t.watch;
t.watchEffect, t.watchPostEffect, t.watchSyncEffect, t.withAsyncContext;
var ne = t.withCtx;
t.withDefaults;
var re = t.withDirectives;
t.withKeys, t.withMemo;
var ie = t.withModifiers;
t.withScopeId;
//#endregion
//#region \0kitsu-shared:vue-router
var ae = globalThis.__KITSU_SHARED__;
if (!ae) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var b = ae.modules["vue-router"];
if (!b) throw Error("Kitsu plugin: the host does not share vue-router.");
b.default, b.NavigationFailureType;
var oe = b.RouterLink;
b.RouterView, b.START_LOCATION, b.createMemoryHistory, b.createRouter, b.createRouterMatcher, b.createWebHashHistory, b.createWebHistory, b.isNavigationFailure, b.loadRouteLocation, b.matchedRouteKey, b.onBeforeRouteLeave, b.onBeforeRouteUpdate, b.parseQuery, b.routeLocationKey, b.routerKey, b.routerViewLocationKey, b.stringifyQuery, b.useLink;
var se = b.useRoute, ce = b.useRouter;
b.viewDepthKey;
var le = () => {
	let e = se();
	return r(() => e.meta.kitsuPlugin ?? null);
}, ue = globalThis.__KITSU_SHARED__;
if (!ue) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var x = ue.modules["vue-i18n"];
if (!x) throw Error("Kitsu plugin: the host does not share vue-i18n.");
x.default, x.DatetimeFormat, x.I18nD, x.I18nInjectionKey, x.I18nN, x.I18nT, x.NumberFormat, x.Translation, x.VERSION, x.createI18n;
var de = x.useI18n;
x.vTDirective;
//#endregion
//#region ../../../node_modules/.pnpm/lucide-vue-next@1.0.0_vue@3.5.41_typescript@6.0.3_/node_modules/lucide-vue-next/dist/esm/shared/src/utils/hasA11yProp.js
var fe = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, pe = (e) => e === "", me = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), he = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ge = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), _e = (e) => {
	let t = ge(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, ve = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ye = ({ name: e, iconNode: t, absoluteStrokeWidth: n, "absolute-stroke-width": r, strokeWidth: i, "stroke-width": a, size: o = ve.width, color: s = ve.stroke, ...c }, { slots: l }) => d("svg", {
	...ve,
	...c,
	width: o,
	height: o,
	stroke: s,
	"stroke-width": pe(n) || pe(r) || n === !0 || r === !0 ? Number(i || a || ve["stroke-width"]) * 24 / Number(o) : i || a || ve["stroke-width"],
	class: me("lucide", c.class, ...e ? [`lucide-${he(_e(e))}-icon`, `lucide-${he(e)}`] : ["lucide-icon"]),
	...!l.default && !fe(c) && { "aria-hidden": "true" }
}, [...t.map((e) => d(...e)), ...l.default ? [l.default()] : []]), be = (e, t) => (n, { slots: r, attrs: i }) => d(ye, {
	...i,
	...n,
	iconNode: t,
	name: e
}, r), xe = globalThis.__KITSU_SHARED__;
if (!xe) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var S = xe.modules.vuex;
if (!S) throw Error("Kitsu plugin: the host does not share vuex.");
S.default, S.Store, S.createLogger, S.createNamespacedHelpers, S.createStore, S.install, S.mapActions, S.mapGetters, S.mapMutations, S.mapState, S.storeKey;
var Se = S.useStore;
S.version;
//#endregion
//#region src/composables/useHostCatalogs.ts
var Ce = (e) => e?.parent_id || e?.episode_id || null, we = () => {
	let e = Se(), t = r(() => e.getters.openProductions ?? []), n = r(() => (e.getters.people ?? []).map((e) => ({
		id: e.id,
		full_name: e.full_name || e.name || e.id
	}))), i = r(() => {
		let t = {};
		e.getters.episodeMap?.forEach?.((e, n) => {
			e?.name && (t[n] = e.name);
		});
		for (let n of e.getters.episodes ?? []) n?.id && n?.name && (t[n.id] = n.name);
		let n = e.getters.currentEpisode;
		return n?.id && n?.name && !["all", "main"].includes(n.id) && (t[n.id] = n.name), t;
	}), a = async () => {
		let r = [];
		t.value.length || r.push(e.dispatch("loadOpenProductions").catch(() => void 0)), n.value.length || r.push(e.dispatch("loadPeople").catch(() => void 0)), e.getters.taskTypes?.length || r.push(e.dispatch("loadTaskTypes").catch(() => void 0)), await Promise.all(r);
	}, o = (n) => e.getters.productionMap?.get?.(n) ?? t.value.find((e) => e.id === n) ?? null, s = async (t) => (e.getters.productionMap?.get?.(t) || await e.dispatch("loadProduction", t).catch(() => void 0), e.getters.currentProduction?.id !== t && await e.dispatch("setProduction", t), o(t)), c = (t) => {
		if (t) {
			let n = e.getters.getProductionTaskTypes?.(t);
			if (n?.length) return n;
		}
		return e.getters.taskTypes ?? [];
	}, l = (t) => e.getters.currentProduction?.id === t && e.getters.productionAssetTypes?.length ? e.getters.productionAssetTypes : e.getters.assetTypes ?? [];
	return {
		openProductions: t,
		people: n,
		episodeNameById: i,
		ensureHostCatalogs: a,
		ensureProduction: s,
		taskTypesFor: c,
		loadEpisodes: () => e.dispatch("loadEpisodes").catch(() => void 0),
		loadEntityCatalogs: async (t) => {
			await s(t);
			let n = e.getters.currentEpisode, r = !!(n && ["all", "main"].includes(n.id));
			r && await e.dispatch("setCurrentEpisode", null);
			let i = [];
			try {
				await e.dispatch("loadEpisodes").catch(() => void 0);
				let t = e.dispatch("loadSequences").then((e) => Array.isArray(e) ? e : []).catch(() => []);
				await Promise.all([
					e.dispatch("loadAssets", {
						all: !0,
						withTasks: !1,
						withShared: !1
					}).catch(() => void 0),
					t,
					e.dispatch("loadShots").catch(() => void 0),
					e.dispatch("loadEdits").catch(() => void 0)
				]), i = await t;
			} finally {
				r && await e.dispatch("setCurrentEpisode", n.id);
			}
			let a = e.getters.sequences ?? [], o = i.length > 0 ? i : a.map((e) => ({
				...e,
				parent_id: Ce(e)
			}));
			return {
				assetTypes: l(t),
				assets: (e.getters.assets ?? []).map((e) => ({
					id: e.id,
					name: e.name,
					entity_type_id: e.entity_type_id || e.asset_type_id
				})),
				shots: e.getters.shots ?? [],
				sequences: o,
				episodes: e.getters.episodes ?? [],
				edits: e.getters.edits ?? []
			};
		},
		getCachedTask: (t) => e.getters.taskMap?.get?.(t),
		loadTask: (t) => e.dispatch("loadTask", { taskId: t }),
		loadTasksForEntity: (t) => e.dispatch("loadTasks", { entity_id: t })
	};
}, C = class extends Error {
	constructor(e, { status: t = null, path: n = "", method: r = "", body: i = "", retryAfter: a = null } = {}) {
		super(e), this.status = t, this.path = n, this.method = r, this.body = i, this.retryAfter = a;
	}
}, w = class extends C {}, T = class extends C {}, Te = class extends C {}, Ee = class extends C {}, De = class extends C {}, Oe = class extends C {}, ke = class extends C {}, Ae = class extends C {}, E = class extends C {}, je = class extends E {}, Me = class extends E {}, Ne = class extends E {}, Pe = class extends E {
	constructor(e, t = {}) {
		super(e, t);
		let n = t.body || {};
		this.preferredMethod = n.preferred_two_factor_authentication || null, this.enabledMethods = n.two_factor_authentication_enabled || [];
	}
};
Object.entries({
	KitsuError: C,
	ParameterError: w,
	NotAuthenticatedError: T,
	NotAllowedError: Te,
	NotFoundError: Ee,
	TooBigFileError: De,
	ServerError: Oe,
	NetworkError: ke,
	TimeoutError: Ae,
	AuthFailedError: E,
	WrongOtpError: je,
	TooManyLoginAttemptsError: Me,
	DefaultPasswordError: Ne,
	MissingOtpError: Pe
}).forEach(([e, t]) => Object.defineProperty(t.prototype, "name", {
	value: e,
	writable: !0,
	configurable: !0
}));
var Fe = {
	400: w,
	401: T,
	403: Te,
	404: Ee,
	413: De,
	422: T
}, Ie = (e, { path: t, method: n, body: r, retryAfter: i }) => new (Fe[e] || (e >= 500 ? Oe : C))(`${n} ${t} failed with status ${e}`, {
	status: e,
	path: t,
	method: n,
	body: r,
	retryAfter: i
}), Le = {
	missing_OTP: Pe,
	wrong_OTP: je,
	too_many_failed_login_attemps: Me,
	default_password: Ne
}, Re = (e) => {
	let t = e.body || {}, n = Object.keys(Le).find((e) => t[e]);
	return new (n ? Le[n] : E)("Login failed", {
		status: e.status,
		path: e.path,
		method: e.method,
		body: t
	});
}, ze = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/, Be = /^\d{4}-\d{2}-\d{2}$/, D = (e) => {
	let t = e && typeof e == "object" ? e.id : e;
	if (typeof t == "string" && ze.test(t)) return t.toLowerCase();
	throw new w("Wrong format: expected an id string or an entity object");
}, O = (e) => e == null ? null : D(e), k = (e = []) => {
	if (!Array.isArray(e)) throw new w("Wrong format: expected a list of ids or entities");
	return e.map(D);
}, A = (e, t) => {
	if (t != null && t !== "") return t;
	throw new w(`Missing parameter: ${e} is required`);
}, j = (e) => {
	if (e && typeof e == "object") return e;
	throw new w("Wrong format: expected the object to save");
}, M = (e) => Object.fromEntries(Object.entries(e).filter(([, e]) => e != null)), Ve = (e) => Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0)), N = (e) => {
	let t = Object.keys(e).filter((t) => e[t] !== void 0);
	if (t.length === 0) return;
	let n = t.some((e) => e === "filters" || e.includes("_")) ? ", the filters are named options in camelCase" : "";
	throw new w(`Wrong format: unknown option ${t.join(", ")}${n}`);
}, P = (e) => e == null ? e : j(e), F = (e, t = Ve) => {
	let n = t(e);
	if (Object.keys(n).length > 0) return n;
	throw new w(`Missing parameter: nothing to save, give one of ${Object.keys(e).join(", ")}`);
}, He = (e, t) => Object.entries(t).reduce((e, [t, n]) => e[t] === n ? {
	...e,
	[t]: null
} : e, e), I = (e) => e.catch((e) => {
	if (e instanceof Ee) return null;
	throw e;
}), Ue = (e) => (e.name || "").toLowerCase(), L = (e) => [...e].sort((e, t) => {
	let [n, r] = [Ue(e), Ue(t)];
	return n < r ? -1 : +(n > r);
}), R = (e) => String(A("name", e)).replace(/[\\%_]/g, "\\$&"), z = (e, t) => {
	let n = Array.isArray(e) ? e : [], r = String(t), i = r.toLowerCase();
	return n.find((e) => e.name === r) || n.find((e) => typeof e.name == "string" && e.name.toLowerCase() === i) || null;
}, We = (e) => String(e).padStart(2, "0"), B = (e) => {
	if (!(e instanceof Date)) return e;
	if (Number.isNaN(e.getTime())) throw new w("Wrong format: invalid Date");
	return [
		e.getFullYear(),
		We(e.getMonth() + 1),
		We(e.getDate())
	].join("-");
}, V = (e) => {
	if (!(e instanceof Date)) return e;
	if (Number.isNaN(e.getTime())) throw new w("Wrong format: invalid Date");
	return e.toISOString().slice(0, 19);
}, H = (e) => {
	let t = B(e);
	if (typeof t == "string" && Be.test(t)) return t;
	throw new w("Wrong format: expected a Date or a \"YYYY-MM-DD\" string");
}, U = (e) => e.replace(/\/+$/, "").replace(/\/api$/, ""), Ge = (e, t, n) => {
	let r = e && typeof e == "object" ? e[t] : null;
	if (typeof r == "string" && r !== "") return r;
	throw new w(`Missing parameter: ${n}.${t} is required`);
}, W = (e, t) => `${e.replace(/\/+$/, "")}/productions/${D(t)}`, G = (e, t, n) => W(e, Ge(t, "project_id", n)), Ke = (e) => Ge(e, "production_type", "project") === "tvshow", qe = (e, t, n = "assets") => {
	if (typeof n != "string" || n === "") throw new w("Wrong format: section must be a string");
	return `${W(e, t)}/${n}/`;
}, Je = (e, t, n) => {
	let r = G(e, t, "asset");
	return Ke(n) ? `${r}/episodes/${t.episode_id ? D(t.episode_id) : "main"}/assets/${D(t)}/` : `${r}/assets/${D(t)}/`;
}, Ye = (e, t) => Ke(t) ? `${W(e, t)}/episodes/main/assets/` : `${W(e, t)}/assets/`, Xe = (e, t, n) => {
	let r = Ge(n, "name", "assetType"), i = new URLSearchParams({ search: `type=[${r}]` });
	return `${Ye(e, t).replace(/\/$/, "")}?${i}`;
}, Ze = (e, t) => `${G(e, t, "episode")}/episodes/${D(t)}/shots`, Qe = (e, t) => {
	let n = G(e, t, "shot");
	return t.episode_id ? `${n}/episodes/${D(t.episode_id)}/shots/${D(t)}/` : `${n}/shots/${D(t)}/`;
}, $e = (e, t) => {
	let n = G(e, t, "edit");
	return t.episode_id ? `${n}/episodes/${D(t.episode_id)}/edits/${D(t)}/` : `${n}/edits/${D(t)}/`;
}, et = (e, t) => {
	let n = G(e, t, "sequence");
	return t.parent_id ? `${n}/episodes/${D(t.parent_id)}/sequences/${D(t)}/` : `${n}/sequences/${D(t)}/`;
}, tt = (e, t) => `${W(e, t)}/episodes/`, nt = (e, t) => `${W(e, t)}/sequences/`, rt = (e, t) => `${G(e, t, "task")}/shots/tasks/${D(t)}/`, it = (e, t) => `${e.replace(/\/+$/, "")}/people/${D(t)}/`, at = (e) => {
	let t = Ge(e, "extension", "previewFile");
	return `${t === "mp4" ? "movies" : "pictures"}/originals/preview-files/${D(e)}.${t}`;
}, ot = (e, { lowdef: t = !1 } = {}) => `movies/${t ? "low" : "originals"}/preview-files/${D(e)}.mp4`, st = (e) => `pictures/thumbnails/attachment-files/${D(e)}.png`, ct = {
	preview_file_id: "",
	ready_for: "None",
	source_id: ""
}, lt = [
	"name",
	"short_name",
	"description",
	"task_types",
	"archived"
], ut = (e) => {
	let t = typeof e == "object" && e ? lt.filter((t) => e[t] !== void 0) : [];
	if (t.length === 0) throw new w(`Missing parameter: assetType has no field to save (${lt.join(", ")})`);
	t.includes("name") && A("name", e.name);
	let n = e.task_types, r = Array.isArray(n);
	if (t.includes("task_types") && n !== null && !r) throw new w("Wrong format: task_types must be a list");
	return Object.fromEntries(t.map((t) => [t, t === "task_types" && r ? k(n) : e[t]]));
}, dt = (e) => async (t) => {
	if ((t.headers.get("Content-Type") || "").includes("csv")) return t.text();
	throw new C(`GET ${e} answered ${t.status} without CSV`, {
		status: t.status,
		path: e,
		method: "GET",
		body: await t.text()
	});
}, ft = (e) => {
	let t = async (t, n) => {
		let r = t === null ? null : D(t), i = r === null ? "assets/all" : `projects/${r}/assets`;
		return e.fetchAll(i, {}, { signal: n }).then(L);
	}, n = async (t, n, r, i) => z(await I(e.fetchAll("assets/all", {
		project_id: D(t),
		name: R(n),
		entity_type_id: O(r)
	}, { signal: i })), n), r = async (t, n) => e.fetchOne("asset-types", D(t), { signal: n }), i = async (t, n) => z(await I(e.fetchAll("asset-types", { name: R(t) }, { signal: n })), t);
	return {
		allAssetsForOpenProjects: async ({ signal: n } = {}) => e.fetchAll("projects/open", {}, { signal: n }).then((e) => Promise.all(e.map((e) => t(e, n)))).then((e) => L(e.flat())),
		allAssetsForProject: async (e, { signal: n } = {}) => t(e, n),
		allAssets: async ({ project: t, episode: n, isShared: r, signal: i } = {}) => e.fetchAll("assets", {
			project_id: O(t),
			episode_id: O(n),
			is_shared: r
		}, { signal: i }).then(L),
		allAssetsWithTasks: async (t, { episode: n, signal: r } = {}) => e.getNdjson("data/assets/with-tasks", {
			project_id: D(t),
			episode_id: O(n)
		}, { signal: r }),
		allSharedAssetsUsedInProject: async (t, { episode: n, signal: r } = {}) => {
			let i = O(n), a = i === null ? "" : `/episodes/${i}`;
			return e.fetchAll(`projects/${D(t)}${a}/assets/shared-used`, {}, { signal: r }).then(L);
		},
		shareAssets: async ({ assets: t, project: n, assetType: r, all: i = !1, isShared: a = !0, signal: o } = {}) => {
			let s = O(n), c = O(r), l = t != null;
			if (l && !Array.isArray(t)) throw new w("Wrong format: assets must be a list");
			let u = [
				l,
				c !== null,
				!!i
			];
			if (!u.includes(!0)) throw new w("Missing parameter: assets, assetType or all: true is required");
			if (u.filter(Boolean).length > 1) throw new w("Wrong format: assets, assetType and all: true exclude each other");
			if (s === null && !l) throw new w("Missing parameter: project is required with assetType or all");
			if (l && t.length === 0) {
				if (s === null) return [];
				throw new w("Missing parameter: assets is empty, all: true shares every asset of the project");
			}
			let d = c === null ? "" : `asset-types/${c}/`, f = s === null ? "" : `projects/${s}/${d}`;
			return e.post(`actions/${f}assets/share`, {
				...l ? { asset_ids: k(t) } : {},
				is_shared: a
			}, { signal: o });
		},
		allAssetsForEpisode: async (t, { signal: n } = {}) => e.fetchAll("assets", { source_id: D(t) }, { signal: n }).then(L),
		allAssetsForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${D(t)}/assets`, {}, { signal: n }).then(L),
		allAssetsForProjectAndType: async (t, n, { signal: r } = {}) => e.fetchAll(`projects/${D(t)}/asset-types/${D(n)}/assets`, {}, { signal: r }).then(L),
		getAssetByName: async (e, t, { assetType: r, signal: i } = {}) => n(e, t, r, i),
		getAsset: async (t, { signal: n } = {}) => e.fetchOne("assets", D(t), { signal: n }),
		newAsset: async (t, r, i, { description: a, extraData: o = {}, episode: s, isShared: c = !1, signal: l } = {}) => {
			let u = `data/projects/${D(t)}/asset-types/${D(r)}/assets/new`, d = {
				name: i,
				data: o,
				is_shared: c,
				...M({
					description: a,
					episode_id: O(s)
				})
			};
			return await n(t, i, r, l) || e.post(u, d, { signal: l });
		},
		updateAsset: async (t, { signal: n } = {}) => {
			let r = D(t);
			if (typeof t != "object") throw new w("Wrong format: updateAsset needs the asset object, an id has nothing to save");
			return e.update("entities", r, He("episode_id" in t ? {
				...t,
				source_id: t.episode_id
			} : t, ct), { signal: n });
		},
		updateAssetData: async (t, n = {}, { signal: r } = {}) => e.update("entities", D(t), { data: { ...P(n) } }, { signal: r }),
		removeAsset: async (t, { force: n = !1, signal: r } = {}) => e.remove("assets", D(t), { force: n ? !0 : null }, { signal: r }),
		allAssetTypes: async ({ signal: t } = {}) => e.fetchAll("asset-types", {}, { signal: t }).then(L),
		allAssetTypesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/asset-types`, {}, { signal: n }).then(L),
		allAssetTypesForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${D(t)}/asset-types`, {}, { signal: n }).then(L),
		getAssetType: async (e, { signal: t } = {}) => r(e, t),
		getAssetTypeByName: async (e, { signal: t } = {}) => i(e, t),
		newAssetType: async (t, { shortName: n, description: r, taskTypes: a, signal: o } = {}) => {
			let s = {
				name: t,
				...M({
					short_name: n,
					description: r,
					task_types: a == null ? null : k(a)
				})
			}, c = await i(t, o);
			return c === null ? e.create("entity-types", s, { signal: o }) : c;
		},
		updateAssetType: async (t, { signal: n } = {}) => e.update("entity-types", D(t), ut(t), { signal: n }),
		removeAssetType: async (t, { signal: n } = {}) => e.remove("entity-types", D(t), {}, { signal: n }),
		getAssetInstance: async (t, { signal: n } = {}) => e.fetchOne("asset-instances", D(t), { signal: n }),
		allShotAssetInstancesForAsset: async (t, { signal: n } = {}) => e.fetchAll(`assets/${D(t)}/shot-asset-instances`, {}, { signal: n }),
		enableAssetInstance: async (t, { signal: n } = {}) => e.update("asset-instances", D(t), { active: !0 }, { signal: n }),
		disableAssetInstance: async (t, { signal: n } = {}) => e.update("asset-instances", D(t), { active: !1 }, { signal: n }),
		allSceneAssetInstancesForAsset: async (t, { signal: n } = {}) => e.fetchAll(`assets/${D(t)}/scene-asset-instances`, {}, { signal: n }),
		allAssetInstancesForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${D(t)}/asset-instances`, {}, { signal: n }),
		allAssetInstancesForAsset: async (t, { signal: n } = {}) => e.fetchAll(`assets/${D(t)}/asset-asset-instances`, {}, { signal: n }),
		newAssetAssetInstance: async (t, n, { description: r, signal: i } = {}) => e.post(`data/assets/${D(t)}/asset-asset-instances`, {
			asset_to_instantiate_id: D(n),
			...M({ description: r })
		}, { signal: i }),
		importAssetsWithCsv: async (t, n, { update: r = !1, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`import/csv/projects/${D(t)}/assets`, {
			file: n,
			query: { update: r ? !0 : null },
			fileName: i,
			onProgress: a,
			signal: o
		}),
		exportAssetsWithCsv: async (t, { episode: n, assignedTo: r, signal: i } = {}) => {
			let a = `export/csv/projects/${D(t)}/assets.csv`;
			return e.request("GET", a, {
				query: {
					episode_id: O(n),
					assigned_to: O(r)
				},
				signal: i,
				read: dt(a)
			});
		},
		getEpisodeFromAsset: async (t, { signal: n } = {}) => {
			let r = typeof t == "object" && t && ("source_id" in t || "episode_id" in t) ? t : await e.fetchOne("assets", D(t), { signal: n });
			if (r === null) return null;
			let i = O(r.source_id || r.episode_id || null);
			return i === null ? Promise.resolve(null) : e.fetchOne("episodes", i, { signal: n });
		},
		getAssetTypeFromAsset: async (t, { signal: n } = {}) => {
			let i = (e) => e.entity_type_id || e.asset_type_id || null, a = typeof t == "object" && t && i(t) !== null ? t : await e.fetchOne("assets", D(t), { signal: n });
			return a === null ? null : r(i(a), n);
		},
		getAssetUrl: async (t, { signal: n } = {}) => {
			let r = await e.get(`data/assets/${D(t)}`, {}, { signal: n }), i = await e.get(`data/projects/${D(r.project_id)}`, {}, { signal: n });
			return Je(U(e.host), r, i);
		},
		getAllAssetsUrl: async (t, { signal: n } = {}) => Ye(U(e.host), await e.get(`data/projects/${D(t)}`, {}, { signal: n })),
		getAssetTypeUrl: async (t, n, { signal: r } = {}) => {
			let i = D(t), a = D(n), o = await e.get(`data/projects/${i}`, {}, { signal: r }), s = typeof n == "object" && "name" in n ? n : await e.get(`data/asset-types/${a}`, {}, { signal: r });
			return Xe(U(e.host), o, s);
		}
	};
}, pt = (e) => typeof e == "object" && !!e && typeof e.asset_id == "string" && Number.isInteger(e.nb_occurences) && e.nb_occurences >= 0, mt = (e) => {
	if (!Array.isArray(A("casting", e))) throw new w("Wrong format: casting must be a list of entries");
	return e.map((e) => {
		if (!pt(e)) throw new w("Wrong format: each casting entry needs an asset_id and nb_occurences, a whole number");
		return {
			...e,
			asset_id: D(e.asset_id)
		};
	});
}, ht = (e) => {
	let t = A("castings", e);
	if (typeof t != "object" || Array.isArray(t)) throw new w("Wrong format: castings must map entity ids to casting lists");
	return Object.fromEntries(Object.entries(t).map(([e, t]) => [D(e), mt(t)]));
}, gt = (e) => {
	let t = (t, n) => I(e.get(t, {}, { signal: n })), n = (e, t) => `data/projects/${D(e)}/entities/${D(t)}/casting`, r = async (t, n, r) => {
		let i = typeof n == "object" && n && n.project_id ? n : await e.fetchOne(t, D(n), { signal: r });
		return i === null ? null : D(i.project_id);
	}, i = async (e, i, a) => {
		let o = await r(e, i, a);
		return o === null ? null : t(n(o, i), a);
	}, a = (t, r, i, a) => e.put(n(t, r), mt(i), { signal: a }), o = (t, n, r, i, a) => e.put(`data/projects/${D(t)}/entities/casting/assets/${D(r)}`, {
		entity_ids: (Array.isArray(n) ? n : [n]).map(D),
		...M(i)
	}, { signal: a });
	return {
		updateShotCasting: async (e, t, n, { signal: r } = {}) => a(e, t, n, r),
		updateAssetCasting: async (e, t, n, { signal: r } = {}) => a(e, t, n, r),
		updateEpisodeCasting: async (e, t, n, { signal: r } = {}) => a(e, t, n, r),
		updateCastings: async (t, n, { signal: r } = {}) => e.put(`data/projects/${D(t)}/entities/casting`, ht(n), { signal: r }),
		importCastingWithCsv: async (t, n, { fileName: r, onProgress: i, signal: a } = {}) => e.upload(`import/csv/projects/${D(t)}/casting`, {
			file: A("csvFile", n),
			fileName: r,
			onProgress: i,
			signal: a
		}),
		castAsset: async (e, t, n, { nbOccurences: r, label: i, signal: a } = {}) => o(e, t, n, {
			nb_occurences: r,
			label: i
		}, a),
		uncastAsset: async (e, t, n, { signal: r } = {}) => o(e, t, n, { nb_occurences: 0 }, r),
		getAssetTypeCasting: async (e, n, { signal: r } = {}) => t(`data/projects/${D(e)}/asset-types/${D(n)}/casting`, r),
		getSequenceCasting: async (e, { signal: n } = {}) => {
			let i = await r("sequences", e, n);
			return i === null ? null : t(`data/projects/${i}/sequences/${D(e)}/casting`, n);
		},
		getShotCasting: async (e, { signal: t } = {}) => i("shots", e, t),
		getAssetCasting: async (e, { signal: t } = {}) => i("assets", e, t),
		getEpisodeCasting: async (e, { signal: t } = {}) => i("episodes", e, t),
		getAssetCastIn: async (e, { signal: n } = {}) => t(`data/assets/${D(e)}/cast-in`, n),
		allEntityLinksForProject: async (t, { page: n, limit: r, signal: i } = {}) => {
			let a = n != null;
			return e.fetchAll(`projects/${D(t)}/entity-links`, a ? {
				page: n,
				limit: r
			} : {}, { signal: i });
		},
		getEpisodesCasting: async (e, { signal: n } = {}) => t(`data/projects/${D(e)}/episodes/casting`, n),
		getSequenceShotsCasting: async (e, n, { signal: r } = {}) => t(`data/projects/${D(e)}/sequences/${D(n)}/casting`, r),
		getEpisodeShotsCasting: async (e, n, { signal: r } = {}) => t(`data/projects/${D(e)}/episodes/${D(n)}/sequences/all/casting`, r),
		getProjectShotsCasting: async (e, { signal: n } = {}) => t(`data/projects/${D(e)}/sequences/all/casting`, n),
		deleteEntityLink: async (t, { signal: n } = {}) => {
			let r = D(t);
			return await e.del(`data/entity-links/${r}`, void 0, { signal: n }), typeof t == "object" ? t : { id: r };
		}
	};
}, _t = (e) => {
	let t = async (t, n, r) => z(await I(e.fetchAll("concepts", {
		project_id: D(t),
		name: R(n)
	}, { signal: r })), n);
	return {
		allConcepts: async ({ signal: t } = {}) => e.fetchAll("concepts", {}, { signal: t }).then(L),
		allConceptsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/concepts`, {}, { signal: n }).then(L),
		allConceptsWithTasks: async (t, { signal: n } = {}) => e.get("data/concepts/with-tasks", { project_id: D(t) }, { signal: n }),
		allPreviewsForConcept: async (t, { signal: n } = {}) => e.fetchAll(`concepts/${D(t)}/preview-files`, {}, { signal: n }),
		removeConcept: async (t, { force: n = !1, signal: r } = {}) => e.remove("concepts", D(t), { force: n ? !0 : null }, { signal: r }),
		getConcept: async (t, { signal: n } = {}) => e.fetchOne("concepts", D(t), { signal: n }),
		getConceptByName: async (e, n, { signal: r } = {}) => t(e, n, r),
		newConcept: async (n, r, { description: i, data: a, entityConceptLinks: o, signal: s } = {}) => {
			let c = {
				name: r,
				data: { ...a },
				entity_concept_links: k(o || []).map((e) => ({ id: e })),
				...M({ description: i })
			}, l = `data/projects/${D(n)}/concepts`;
			return await t(n, r, s) || e.post(l, c, { signal: s });
		},
		updateConcept: async (t, { signal: n } = {}) => e.update("entities", D(t), t, { signal: n })
	};
}, vt = (e) => ({
	allCustomActions: async ({ signal: t } = {}) => e.fetchAll("custom-actions", {}, { signal: t }).then(L),
	newCustomAction: async (t, n, { entityType: r = "all", isAjax: i = !1, signal: a } = {}) => e.create("custom-actions", {
		name: A("name", t),
		url: A("url", n),
		entity_type: r,
		is_ajax: i
	}, { signal: a }),
	updateCustomAction: async (t, { signal: n } = {}) => {
		let r = D(t);
		if (typeof t != "object") throw new w("Wrong format: expected the custom action, not its id");
		let { name: i, url: a, entity_type: o, is_ajax: s } = t;
		return e.update("custom-actions", r, F({
			name: i,
			url: a,
			entity_type: o,
			is_ajax: s
		}, M), { signal: n });
	},
	removeCustomAction: async (t, { signal: n } = {}) => e.remove("custom-actions", D(t), {}, { signal: n })
}), yt = (e) => e ? String(e).toLowerCase() : null, bt = (e) => {
	let t = async (t, n, r, i) => {
		let a = O(r), o = await I(e.fetchAll("edits/all", {
			project_id: D(t),
			name: R(n)
		}, { signal: i }));
		return z(Array.isArray(o) ? o.filter((e) => yt(e.parent_id) === yt(a)) : [], n);
	}, n = (t, n) => e.get(`data/edits/${D(t)}`, {}, { signal: n }), r = (t, n) => e.update("entities", D(t), t, { signal: n }), i = (e) => {
		let t = e && typeof e == "object" ? e.id : e;
		return t === "main" ? t : t === "all" ? null : O(e);
	};
	return {
		getEdit: async (t, { signal: n } = {}) => e.fetchOne("edits", D(t), { signal: n }),
		getEditByName: async (e, n, { episode: r, signal: i } = {}) => t(e, n, r, i),
		getEditUrl: async (t, { signal: r } = {}) => $e(U(e.host), await n(t, r)),
		allEditsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/edits`, {}, { signal: n }).then(L),
		allEditsWithTasks: async (t, { episode: n, signal: r } = {}) => e.get("data/edits/with-tasks", {
			project_id: D(t),
			episode_id: i(n)
		}, { signal: r }),
		allVersionsForEdit: async (t, { signal: n } = {}) => e.get(`data/edits/${D(t)}/versions`, {}, { signal: n }),
		allPreviewsForEdit: async (t, { signal: n } = {}) => e.fetchAll(`edits/${D(t)}/preview-files`, {}, { signal: n }),
		newEdit: async (n, r, { description: i, data: a = {}, episode: o, signal: s } = {}) => {
			let c = {
				name: r,
				data: a,
				...M({
					episode_id: O(o),
					description: i
				})
			}, l = `data/projects/${D(n)}/edits`;
			return await t(n, r, o, s) || e.post(l, c, { signal: s });
		},
		importEditsWithCsv: async (t, n, { update: r = !1, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`import/csv/projects/${D(t)}/edits`, {
			file: A("csvFile", n),
			query: { update: r ? !0 : null },
			fileName: i,
			onProgress: a,
			signal: o
		}),
		removeEdit: async (t, { force: n = !1, signal: r } = {}) => e.remove("edits", D(t), { force: n ? !0 : null }, { signal: r }),
		updateEdit: async (e, { signal: t } = {}) => r(e, t),
		updateEditData: async (t, n = {}, { signal: r } = {}) => e.update("entities", D(t), { data: { ...P(n) } }, { signal: r })
	};
}, xt = (e) => ({
	allEntities: async ({ signal: t } = {}) => e.fetchAll("entities", {}, { signal: t }),
	allEntityTypes: async ({ signal: t } = {}) => e.fetchAll("entity-types", {}, { signal: t }).then(L),
	getEntity: async (t, { signal: n } = {}) => e.fetchOne("entities", D(t), { signal: n }),
	getEntityByName: async (t, { project: n, signal: r } = {}) => I(e.fetchAll("entities", {
		name: R(t),
		project_id: O(n)
	}, { signal: r })).then((e) => z(e, t)),
	getEntityType: async (t, { signal: n } = {}) => e.fetchOne("entity-types", D(t), { signal: n }),
	getEntityTypeByName: async (t, { signal: n } = {}) => I(e.fetchAll("entity-types", { name: R(t) }, { signal: n })).then((e) => z(e, t)),
	guessFromPath: async (t, n, { sep: r = "/", signal: i } = {}) => e.post("data/entities/guess_from_path", {
		project_id: D(t),
		file_path: n,
		sep: r
	}, { signal: i }),
	newEntityType: async (t, { signal: n } = {}) => e.create("entity-types", { name: A("name", t) }, { signal: n }),
	removeEntityType: async (t, { signal: n } = {}) => e.remove("entity-types", D(t), {}, { signal: n }),
	removeEntity: async (t, { signal: n } = {}) => e.remove("entities", D(t), {}, { signal: n }),
	removeEntities: async (t, n, { force: r = !1, signal: i } = {}) => e.request("POST", `actions/projects/${D(t)}/delete-entities`, {
		body: k(n),
		query: { force: r ? !0 : null },
		signal: i
	}),
	allEntitiesWithTasksLinkedToEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${D(t)}/entities-linked/with-tasks`, {}, { signal: n }),
	allNewsForEntity: async (t, { signal: n } = {}) => e.get(`data/entities/${D(t)}/news`, {}, { signal: n }),
	allPreviewFilesForEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${D(t)}/preview-files`, {}, { signal: n }),
	allTimeSpentsForEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${D(t)}/time-spents`, {}, { signal: n })
}), St = (e) => {
	if (e == null) return [];
	if (Array.isArray(e) && e.length > 0) return k(e);
	throw new w("Wrong format: persons must be a non-empty list of ids or entities");
}, Ct = (e, t) => {
	if (Array.isArray(t) && t.length === 0) throw new w(`Missing parameter: ${e} must be a non-empty list`);
	return t;
}, wt = (e) => ({
	allLastEvents: async ({ after: t, before: n, limit: r, lastEvent: i, project: a, onlyFiles: o, persons: s, name: c, namePrefixes: l, nameSuffixes: u, signal: d, ...f } = {}) => (N(f), e.get("data/events/last", {
		after: V(t),
		before: V(n),
		limit: r,
		cursor_event_id: O(i),
		project_id: O(a),
		only_files: o ? !0 : null,
		person_ids: St(s),
		name: c,
		name_prefixes: Ct("namePrefixes", l),
		name_suffixes: Ct("nameSuffixes", u)
	}, { signal: d })),
	allEventNames: async ({ signal: t } = {}) => e.get("data/events/names", {}, { signal: t }),
	allLastLoginLogs: async ({ after: t, before: n, limit: r, lastLoginLog: i, persons: a, signal: o, ...s } = {}) => (N(s), e.get("data/events/login-logs/last", {
		after: V(t),
		before: V(n),
		limit: r,
		cursor_login_log_id: O(i),
		person_ids: St(a)
	}, { signal: o }))
}), Tt = (e, t, n) => `${e.replace(/ /g, "_")}${n}${t.replace(/ /g, "_")}`, Et = (e, t) => Object.prototype.hasOwnProperty.call(e, t) ? e[t] : null, Dt = ({ outputType: e, taskType: t, name: n, representation: r, fileStatus: i }) => ({
	output_type_id: O(e),
	task_type_id: O(t),
	representation: r,
	name: n,
	file_status_id: O(i)
}), Ot = (e, t) => {
	if (Number.isInteger(t) && t >= 1) return t;
	throw new w(`Wrong format: ${e} must be an integer counted from 1`);
}, kt = (e, t) => `data/asset-instances/${D(e)}/entities/${D(t)}`, At = (e) => {
	let t = async (t, n, r) => I(e.fetchAll(t, { name: R(n) }, { signal: r })).then((e) => z(e, n)), n = async (t, n, r, { name: i = "main", mode: a = "output", representation: o = "", revision: s = 0, sep: c = "/", signal: l } = {}) => {
		let u = await e.post(t, {
			task_type_id: D(r),
			output_type_id: D(n),
			mode: a,
			name: i,
			representation: o,
			revision: s,
			separator: c
		}, { signal: l });
		return Tt(u.folder_path, u.file_name, c);
	}, r = (t, n, r, i, a, o = {}) => {
		if ("fileStatusId" in o) throw new w("Wrong format: fileStatusId is now fileStatus");
		let { workingFile: s, person: c, name: l = n, revision: u = 0, nbElements: d = 1, representation: f = "", sep: p = "/", fileStatus: m, signal: h } = o;
		return e.post(t, M({
			output_type_id: D(r),
			task_type_id: D(i),
			comment: a,
			revision: u,
			representation: f,
			name: l,
			nb_elements: d,
			sep: p,
			working_file_id: O(s),
			person_id: O(c),
			file_status_id: O(m)
		}), { signal: h });
	}, i = (t, n, r, i, a) => e.post(t, {
		name: i,
		output_type_id: D(n),
		task_type_id: D(r)
	}, { signal: a }).then((e) => e.next_revision), a = (e, t, n, { name: r = "main", signal: a } = {}) => i(`data/entities/${D(e)}/output-files/next-revision`, t, n, r, a), o = (e, t, n, r, { name: a = "master", signal: o } = {}) => i(`${kt(e, t)}/output-files/next-revision`, n, r, a, o), s = (t, n) => e.get(`data/tasks/${D(t)}/working-files/last-revisions`, {}, { signal: n }), c = (t, n, { fileName: r, onProgress: i, signal: a } = {}) => e.upload(t, {
		file: A("file", n),
		fileName: r,
		onProgress: i,
		signal: a
	}), l = (t, n, { signal: r } = {}) => e.download(`pictures/thumbnails/${t}/${D(n)}.png`, { signal: r }), u = (e, t, n, r) => c(`pictures/thumbnails/${e}/${D(t)}`, n, r), d = async (t, n) => {
		let { extension: r } = await e.get(`data/preview-files/${D(t)}`, {}, { signal: n });
		return encodeURIComponent(r);
	};
	return {
		allOutputTypes: async ({ signal: t } = {}) => e.fetchAll("output-types", {}, { signal: t }),
		allOutputTypesForEntity: async (t, { signal: n } = {}) => e.fetchAll(`entities/${D(t)}/output-types`, {}, { signal: n }),
		allOutputTypesForAssetInstance: async (t, n, { signal: r } = {}) => e.get(`${kt(t, n)}/output-types`, {}, { signal: r }),
		getOutputType: async (t, { signal: n } = {}) => e.fetchOne("output-types", D(t), { signal: n }),
		getOutputTypeByName: async (e, { signal: n } = {}) => t("output-types", e, n),
		newOutputType: async (n, r, { signal: i } = {}) => await t("output-types", n, i) || e.create("output-types", {
			name: n,
			short_name: r
		}, { signal: i }),
		getOutputFile: async (t, { signal: n } = {}) => e.fetchOne("output-files", D(t), { signal: n }),
		getOutputFileByPath: async (t, { signal: n } = {}) => e.fetchFirst("output-files", { path: A("path", t) }, { signal: n }),
		getAllWorkingFilesForEntity: async (t, { task: n, name: r, signal: i } = {}) => e.fetchAll(`entities/${D(t)}/working-files`, {
			task_id: O(n),
			name: r
		}, { signal: i }),
		getPreviewFile: async (t, { signal: n } = {}) => e.fetchOne("preview-files", D(t), { signal: n }),
		removePreviewFile: async (t, { force: n = !1, signal: r } = {}) => e.remove("preview-files", D(t), { force: n ? !0 : null }, { signal: r }),
		getAllPreviewFilesForTask: async (t, { signal: n } = {}) => e.fetchAll("preview-files", { task_id: D(t) }, { signal: n }),
		getAllAttachmentFilesForTask: async (t, { signal: n } = {}) => e.fetchAll(`tasks/${D(t)}/attachment-files`, {}, { signal: n }),
		getAllAttachmentFilesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/attachment-files`, {}, { signal: n }),
		allOutputFilesForEntity: async (t, { signal: n, ...r } = {}) => e.fetchAll(`entities/${D(t)}/output-files`, Dt(r), { signal: n }),
		allOutputFilesForAssetInstance: async (t, { temporalEntity: n, signal: r, ...i } = {}) => e.fetchAll(`asset-instances/${D(t)}/output-files`, {
			temporal_entity_id: O(n),
			...Dt(i)
		}, { signal: r }),
		allOutputFilesForProject: async (t, { signal: n, ...r } = {}) => e.fetchAll(`projects/${D(t)}/output-files`, Dt(r), { signal: n }),
		allSoftwares: async ({ signal: t } = {}) => e.fetchAll("softwares", {}, { signal: t }),
		getSoftware: async (t, { signal: n } = {}) => e.fetchOne("softwares", D(t), { signal: n }),
		getSoftwareByName: async (e, { signal: n } = {}) => t("softwares", e, n),
		newSoftware: async (n, r, i, { secondaryExtensions: a, version: o, monthlyCost: s, inventoryAmount: c, signal: l } = {}) => await t("softwares", n, l) || e.create("softwares", M({
			name: n,
			short_name: r,
			file_extension: i,
			secondary_extensions: a,
			version: o,
			monthly_cost: s,
			inventory_amount: c
		}), { signal: l }),
		updateSoftware: async (t, { signal: n } = {}) => e.update("softwares", D(t), t, { signal: n }),
		removeSoftware: async (t, { signal: n } = {}) => e.remove("softwares", D(t), {}, { signal: n }),
		allDepartmentSoftwares: async ({ signal: t } = {}) => e.get("data/departments/software-licenses", {}, { signal: t }),
		addSoftwareToDepartment: async (t, n, { signal: r } = {}) => e.post(`data/departments/${D(t)}/software-licenses`, { software_id: D(n) }, { signal: r }),
		removeSoftwareFromDepartment: async (t, n, { signal: r } = {}) => e.del(`data/departments/${D(t)}/software-licenses/${D(n)}`, void 0, { signal: r }),
		allTaskTypeSoftwares: async (t, { signal: n } = {}) => e.get(`data/projects/${D(t)}/task-type-softwares`, {}, { signal: n }),
		addSoftwareToTaskType: async (t, n, r, { signal: i } = {}) => e.post(`data/projects/${D(t)}/task-types/${D(n)}/softwares`, { software_id: D(r) }, { signal: i }),
		removeSoftwareFromTaskType: async (t, n, r, { signal: i } = {}) => e.del(`data/projects/${D(t)}/task-types/${D(n)}/softwares/${D(r)}`, void 0, { signal: i }),
		buildWorkingFilePath: async (t, { name: n = "main", mode: r = "working", software: i, revision: a = 1, sep: o = "/", signal: s } = {}) => {
			let c = await e.post(`data/tasks/${D(t)}/working-file-path`, M({
				mode: r,
				name: n,
				revision: a,
				sep: o,
				software_id: O(i)
			}), { signal: s });
			return Tt(c.path, c.name, o);
		},
		buildEntityOutputFilePath: async (e, t, r, i) => n(`data/entities/${D(e)}/output-file-path`, t, r, i),
		buildAssetInstanceOutputFilePath: async (e, t, r, i, a) => n(`${kt(e, t)}/output-file-path`, r, i, a),
		newWorkingFile: async (t, { name: n = "main", mode: r = "working", software: i, comment: a = "", person: o, revision: s = 0, signal: c } = {}) => e.post(`data/tasks/${D(t)}/working-files/new`, M({
			name: n,
			comment: a,
			task_id: D(t),
			revision: s,
			mode: r,
			person_id: O(o),
			software_id: O(i)
		}), { signal: c }),
		newEntityOutputFile: async (e, t, n, i, a) => r(`data/entities/${D(e)}/output-files/new`, "main", t, n, i, a),
		newAssetInstanceOutputFile: async (e, t, n, i, a, o) => r(`${kt(e, t)}/output-files/new`, "master", n, i, a, o),
		getNextEntityOutputRevision: async (e, t, n, r) => a(e, t, n, r),
		getNextAssetInstanceOutputRevision: async (e, t, n, r, i) => o(e, t, n, r, i),
		getLastEntityOutputRevision: async (e, t, n, r) => a(e, t, n, r).then((e) => e - 1),
		getLastAssetInstanceOutputRevision: async (e, t, n, r, i) => o(e, t, n, r, i).then((e) => e - 1),
		getLastOutputFilesForEntity: async (t, { signal: n, ...r } = {}) => e.fetchAll(`entities/${D(t)}/output-files/last-revisions`, Dt(r), { signal: n }),
		getLastOutputFilesForAssetInstance: async (t, n, { signal: r, ...i } = {}) => e.get(`${kt(t, n)}/output-files/last-revisions`, Dt(i), { signal: r }),
		getWorkingFilesForTask: async (t, { signal: n } = {}) => e.get(`data/tasks/${D(t)}/working-files`, {}, { signal: n }),
		getLastWorkingFiles: async (e, { signal: t } = {}) => s(e, t),
		getLastWorkingFileRevision: async (e, { name: t = "main", signal: n } = {}) => Et(await s(e, n), t),
		getWorkingFile: async (t, { signal: n } = {}) => e.fetchOne("working-files", D(t), { signal: n }),
		updateComment: async (t, n, { signal: r } = {}) => e.put(`actions/working-files/${D(t)}/comment`, { comment: n }, { signal: r }),
		updateModificationDate: async (t, { signal: n } = {}) => e.put(`actions/working-files/${D(t)}/modified`, {}, { signal: n }),
		updateOutputFile: async (t, n, { signal: r } = {}) => e.update("output-files", D(t), n, { signal: r }),
		updateProjectFileTree: async (t, n, { signal: r } = {}) => e.update("projects", D(t), F({ file_tree: n }), { signal: r }),
		uploadWorkingFile: async (e, t, n) => c(`data/working-files/${D(e)}/file`, t, n),
		downloadWorkingFile: async (t, { signal: n } = {}) => e.download(`data/working-files/${D(t)}/file`, { signal: n }),
		downloadPreviewFile: async (t, { signal: n } = {}) => {
			let r = await d(t, n), i = r === "mp4" ? "movies" : "pictures";
			return e.download(`${i}/originals/preview-files/${D(t)}.${r}`, { signal: n });
		},
		getAttachmentFile: async (t, { signal: n } = {}) => e.fetchOne("attachment-files", D(t), { signal: n }),
		downloadAttachmentFile: async (t, { signal: n } = {}) => {
			let r = D(t);
			return e.download(`data/attachment-files/${r}/file/${r}`, { signal: n });
		},
		downloadPreviewFileThumbnail: async (t, { signal: n } = {}) => e.download(`pictures/thumbnails/preview-files/${D(t)}.png`, { signal: n }),
		downloadPreviewFileCover: async (t, { signal: n } = {}) => e.download(`pictures/originals/preview-files/${D(t)}.png`, { signal: n }),
		downloadPersonAvatar: async (e, t) => l("persons", e, t),
		uploadPersonAvatar: async (e, t, n) => u("persons", e, t, n),
		downloadProjectAvatar: async (e, t) => l("projects", e, t),
		uploadProjectAvatar: async (e, t, n) => u("projects", e, t, n),
		downloadOrganisationAvatar: async (e, t) => l("organisations", e, t),
		uploadOrganisationAvatar: async (e, t, n) => u("organisations", e, t, n),
		updatePreview: async (t, n, { signal: r } = {}) => e.update("preview-files", D(t), n, { signal: r }),
		getRunningPreviewFiles: async ({ limit: t, lastPreviewFile: n, signal: r } = {}) => e.fetchAll("playlists/preview-files/running", {
			limit: t,
			cursor_preview_file_id: O(n)
		}, { signal: r }),
		downloadPreviewMovie: async (t, { signal: n } = {}) => {
			let r = await d(t, n);
			return e.download(`movies/originals/preview-files/${D(t)}.${r}`, { signal: n });
		},
		downloadPreviewLowdefMovie: async (t, { signal: n } = {}) => e.download(`movies/low/preview-files/${D(t)}.mp4`, { signal: n }),
		downloadAttachmentThumbnail: async (t, { signal: n } = {}) => e.download(`pictures/thumbnails/attachment-files/${D(t)}.png`, { signal: n }),
		extractFrameFromPreview: async (t, n, { signal: r } = {}) => e.request("GET", `actions/preview-files/${D(t)}/extract-frame`, {
			raw: !0,
			query: { frame_number: Ot("frameNumber", n) },
			signal: r
		}),
		updatePreviewPosition: async (t, n, { signal: r } = {}) => e.put(`actions/preview-files/${D(t)}/update-position`, { position: Ot("position", n) }, { signal: r }),
		updatePreviewAnnotations: async (t, { additions: n, updates: r, deletions: i, signal: a } = {}) => e.put(`actions/preview-files/${D(t)}/update-annotations`, M({
			additions: n,
			updates: r,
			deletions: i
		}), { signal: a }),
		extractTileFromPreview: async (t, { signal: n } = {}) => e.request("GET", `actions/preview-files/${D(t)}/extract-tile`, {
			raw: !0,
			signal: n
		}),
		allFileStatuses: async ({ signal: t } = {}) => e.fetchAll("file-status", {}, { signal: t }),
		newFileStatus: async (n, r, { signal: i } = {}) => await t("file-status", n, i) || e.create("file-status", {
			name: n,
			color: r
		}, { signal: i }),
		getFileStatus: async (t, { signal: n } = {}) => e.fetchOne("file-status", D(t), { signal: n }),
		getFileStatusByName: async (e, { signal: n } = {}) => t("file-status", e, n),
		getPreviewFileUrl: async (t, { signal: n } = {}) => at(await e.get(`data/preview-files/${D(t)}`, {}, { signal: n })),
		getPreviewMovieUrl: async (t, { lowdef: n = !1, signal: r } = {}) => ot(await e.get(`data/preview-files/${D(t)}`, {}, { signal: r }), { lowdef: n }),
		getPreviewLowdefMovieUrl: async (t, { signal: n } = {}) => ot(await e.get(`data/preview-files/${D(t)}`, {}, { signal: n }), { lowdef: !0 }),
		getAttachmentThumbnailUrl: async (e) => st(e)
	};
}, jt = (e) => ({
	allHardwareItems: async ({ signal: t } = {}) => e.fetchAll("hardware-items", {}, { signal: t }),
	getHardwareItem: async (t, { signal: n } = {}) => e.fetchOne("hardware-items", D(t), { signal: n }),
	newHardwareItem: async (t, { shortName: n, monthlyCost: r, inventoryAmount: i, signal: a } = {}) => e.create("hardware-items", M({
		name: A("name", t),
		short_name: n ?? "",
		monthly_cost: r,
		inventory_amount: i
	}), { signal: a }),
	updateHardwareItem: async (t, { signal: n } = {}) => {
		let r = D(t);
		if (typeof t != "object") throw new w("Wrong format: expected the hardware item, not its id");
		return e.update("hardware-items", r, F({
			name: t.name,
			short_name: t.short_name,
			monthly_cost: t.monthly_cost,
			inventory_amount: t.inventory_amount,
			archived: t.archived
		}, M), { signal: n });
	},
	removeHardwareItem: async (t, { signal: n } = {}) => e.remove("hardware-items", D(t), {}, { signal: n }),
	allDepartmentHardwareItems: async ({ signal: t } = {}) => e.get("data/departments/hardware-items", {}, { signal: t }),
	addHardwareItemToDepartment: async (t, n, { signal: r } = {}) => e.post(`data/departments/${D(t)}/hardware-items`, { hardware_item_id: D(n) }, { signal: r }),
	removeHardwareItemFromDepartment: async (t, n, { signal: r } = {}) => e.del(`data/departments/${D(t)}/hardware-items/${D(n)}`, void 0, { signal: r })
}), Mt = (e) => ({
	allNews: async ({ project: t, onlyPreview: n, taskType: r, taskStatus: i, person: a, episode: o, page: s, limit: c, after: l, before: u, signal: d } = {}) => {
		let f = O(t);
		return e.get(f ? `data/projects/${f}/news` : "data/projects/news", {
			only_preview: n ? !0 : null,
			task_type_id: O(r),
			task_status_id: O(i),
			person_id: O(a),
			episode_id: O(o),
			page: s,
			limit: c,
			after: V(l),
			before: V(u)
		}, { signal: d });
	},
	getNews: async (t, n, { signal: r } = {}) => I(e.get(`data/projects/${D(t)}/news/${D(n)}`, {}, { signal: r }))
}), K = (e) => {
	if (Number.isInteger(e)) return e;
	throw new w("Wrong format: expected an integer");
}, Nt = (e) => String(K(e)).padStart(2, "0"), Pt = (e, t) => t.reduce((e, t) => t in e ? {
	...e,
	[t]: B(e[t])
} : e, e), q = (e, t, { project: n, studio: r, signal: i } = {}) => e.get(t, {
	project_id: O(n),
	studio_id: O(r)
}, { signal: i }), Ft = (e, t, { project: n, signal: r } = {}) => I(q(e, t, {
	project: n,
	signal: r
})), It = (e, t, n, r, { countMode: i, signal: a } = {}) => I(e.get(t, {
	project_id: D(n),
	task_type_id: D(r),
	count_mode: i
}, { signal: a })), Lt = (e, t, { signal: n } = {}) => I(e.fetchAll("departments", { name: R(t) }, { signal: n })).then((e) => z(e, t)), Rt = (e, t, { isBot: n = !1, signal: r } = {}) => e.fetchFirst("persons", {
	email: A("email", t),
	is_bot: n
}, { signal: r }), zt = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => e !== "expiration_date")), Bt = (e, t, { signal: n } = {}) => {
	let r = D(t), i = j(t);
	if (Object.keys(i).filter((e) => e !== "id").join() === "expiration_date") throw new w("Wrong format: expiration_date is never saved, generateToken changes it");
	return e.update("persons", r, zt(Array.isArray(i.departments) ? {
		...i,
		departments: k(i.departments)
	} : i), { signal: n });
}, Vt = (e, t, { force: n = !1, signal: r } = {}) => e.remove("persons", D(t), { force: n ? !0 : null }, { signal: r }), Ht = (e) => (e.full_name || "").toLowerCase(), Ut = (e) => [...e].sort((e, t) => {
	let [n, r] = [Ht(e), Ht(t)];
	return n < r ? -1 : +(n > r);
}), Wt = (e) => ({
	allOrganisations: async ({ signal: t } = {}) => e.fetchAll("organisations", {}, { signal: t }).then(L),
	allDepartments: async ({ signal: t } = {}) => e.fetchAll("departments", {}, { signal: t }).then(L),
	allPersons: async ({ relations: t = !1, isGuest: n, signal: r } = {}) => e.fetchAll("persons", {
		relations: t ? !0 : null,
		is_guest: n
	}, { signal: r }).then(Ut),
	getDepartmentByName: async (t, n) => Lt(e, t, n),
	getDepartment: async (t, { signal: n } = {}) => e.fetchOne("departments", D(t), { signal: n }),
	getPerson: async (t, { relations: n = !1, signal: r } = {}) => e.fetchFirst("persons", {
		id: D(t),
		relations: n ? !0 : null
	}, { signal: r }),
	getPersonByDesktopLogin: async (t, { signal: n } = {}) => e.fetchFirst("persons", {
		desktop_login: A("desktopLogin", t),
		is_bot: !1
	}, { signal: n }),
	getPersonByEmail: async (t, n) => Rt(e, t, n),
	getPersonByFullName: async (t, { firstName: n, lastName: r, signal: i } = {}) => e.fetchFirst("persons", n != null && r != null ? {
		first_name: A("firstName", n),
		last_name: A("lastName", r),
		is_bot: !1
	} : {
		full_name: A("fullName", t),
		is_bot: !1
	}, { signal: i }),
	getOrganisation: async ({ signal: t } = {}) => e.get("auth/authenticated", {}, { signal: t }).then((e) => e.organisation),
	updateOrganisation: async (t, { signal: n } = {}) => e.update("organisations", D(t), t, { signal: n }),
	newDepartment: async (t, { color: n = "", archived: r = !1, signal: i } = {}) => await Lt(e, t, { signal: i }) || e.post("data/departments", {
		name: t,
		color: n,
		archived: r
	}, { signal: i }),
	updateDepartment: async (t, { signal: n } = {}) => e.update("departments", D(t), t, { signal: n }),
	removeDepartment: async (t, { signal: n } = {}) => e.remove("departments", D(t), {}, { signal: n }),
	newPerson: async (t, n, r, { phone: i = "", role: a = "user", desktopLogin: o = "", departments: s = [], password: c = null, active: l = !0, contractType: u = "open-ended", signal: d } = {}) => {
		let f = k(s);
		return await Rt(e, r, { signal: d }) || e.post("data/persons", {
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
	updatePerson: async (t, n) => Bt(e, t, n),
	removePerson: async (t, n) => Vt(e, t, n),
	newBot: async (t, n, { role: r = "user", departments: i = [], active: a = !0, expirationDate: o = null, signal: s } = {}) => e.post("data/persons", {
		first_name: A("name", t),
		last_name: "",
		email: A("email", n),
		role: r,
		departments: k(i),
		active: a,
		expiration_date: B(o),
		is_bot: !0
	}, { signal: s }),
	updateBot: async (t, n) => Bt(e, t, n),
	generateToken: async (t, n, { signal: r } = {}) => {
		let i = D(t);
		if (n === void 0) throw new w("Missing parameter: expirationDate is required, null for no expiry");
		let a = await e.update("persons", i, { expiration_date: n === null ? null : H(n) }, { signal: r });
		if (typeof a?.access_token != "string" || !a.access_token) throw new C("Zou issued no access token", {
			status: 200,
			path: `data/persons/${i}`,
			method: "PUT",
			body: a
		});
		return a;
	},
	removeBot: async (t, n) => Vt(e, t, n),
	getTimeSpentsRange: async (t, n, r, { signal: i } = {}) => I(e.get(`data/persons/${D(t)}/time-spents`, {
		start_date: H(n),
		end_date: H(r)
	}, { signal: i })),
	getAllMonthTimeSpents: async (t, n, { signal: r } = {}) => I(e.get(`data/persons/${D(t)}/time-spents/month/all/${H(n).slice(0, 7).replace("-", "/")}`, {}, { signal: r })),
	getPresenceLog: async (t, n, { signal: r } = {}) => {
		let i = `data/persons/presence-logs/${K(t)}-${Nt(n)}`;
		return e.get(i, {}, {
			signal: r,
			read: async (e) => {
				let t = await e.text();
				if ((e.headers.get("Content-Type") || "").includes("csv")) return t;
				throw new C(`GET ${i} answered ${e.status} without CSV`, {
					status: e.status,
					path: i,
					method: "GET",
					body: t
				});
			}
		});
	},
	getTimeSpentsByDate: async (t, n, { signal: r } = {}) => I(e.get(`data/persons/${D(t)}/time-spents/${H(n)}`, {}, { signal: r })),
	getWeekTimeSpents: async (t, n, r, i) => Ft(e, `data/persons/${D(t)}/time-spents/week/${K(n)}/${K(r)}`, i),
	getMonthTimeSpents: async (t, n, r, i) => Ft(e, `data/persons/${D(t)}/time-spents/month/${K(n)}/${K(r)}`, i),
	getDayTimeSpents: async (t, n, r, i, a) => Ft(e, `data/persons/${D(t)}/time-spents/day/${K(n)}/${K(r)}/${K(i)}`, a),
	getYearTimeSpents: async (t, n, r) => Ft(e, `data/persons/${D(t)}/time-spents/year/${K(n)}`, r),
	getTimeSpentsDayTable: async (t, n, r) => q(e, `data/persons/time-spents/day-table/${K(t)}/${K(n)}`, r),
	getTimeSpentsWeekTable: async (t, n) => q(e, `data/persons/time-spents/week-table/${K(t)}`, n),
	getTimeSpentsMonthTable: async (t, n) => q(e, `data/persons/time-spents/month-table/${K(t)}`, n),
	getTimeSpentsYearTable: async (t) => q(e, "data/persons/time-spents/year-table", t),
	getMonthQuotaShots: async (t, n, r, i, a, o) => It(e, `data/persons/${D(t)}/quota-shots/month/${K(i)}/${K(a)}`, n, r, o),
	getWeekQuotaShots: async (t, n, r, i, a, o) => It(e, `data/persons/${D(t)}/quota-shots/week/${K(i)}/${K(a)}`, n, r, o),
	getDayQuotaShots: async (t, n, r, i, a, o, s) => It(e, `data/persons/${D(t)}/quota-shots/day/${K(i)}/${K(a)}/${K(o)}`, n, r, s),
	allDayOffs: async ({ year: t, month: n, signal: r } = {}) => {
		if (t == null && n == null) return e.fetchAll("day-offs", {}, { signal: r });
		if (t == null) throw new w("Missing parameter: year is required with month");
		let i = n == null ? K(t) : `${K(t)}/${K(n)}`;
		return e.get(`data/persons/day-offs/${i}`, {}, { signal: r });
	},
	getDayOffByDate: async (t, n, { signal: r } = {}) => {
		let i = await I(e.get(`data/persons/${D(t)}/day-offs/${H(n)}`, {}, { signal: r }));
		return i && i.id ? i : null;
	},
	getDayOffs: async (t, { signal: n } = {}) => I(e.fetchAll(`persons/${D(t)}/day-offs`, {}, { signal: n })),
	getWeekDayOffs: async (t, n, r, { signal: i } = {}) => I(e.get(`data/persons/${D(t)}/day-offs/week/${K(n)}/${K(r)}`, {}, { signal: i })),
	getMonthDayOffs: async (t, n, r, { signal: i } = {}) => I(e.get(`data/persons/${D(t)}/day-offs/month/${K(n)}/${Nt(r)}`, {}, { signal: i })),
	getYearDayOffs: async (t, n, { signal: r } = {}) => I(e.get(`data/persons/${D(t)}/day-offs/year/${K(n)}`, {}, { signal: r })),
	getDayOff: async (t, { signal: n } = {}) => e.fetchOne("day-offs", D(t), { signal: n }),
	newDayOff: async (t, n, r, { description: i = null, signal: a } = {}) => e.create("day-offs", {
		person_id: D(t),
		date: B(n),
		end_date: B(r),
		...i === null ? {} : { description: i }
	}, { signal: a }),
	updateDayOff: async (t, { signal: n } = {}) => e.update("day-offs", D(t), Pt(j(t), ["date", "end_date"]), { signal: n }),
	removeDayOff: async (t, { signal: n } = {}) => e.remove("day-offs", D(t), {}, { signal: n }),
	changePasswordForPerson: async (t, n, { signal: r } = {}) => e.post(`actions/persons/${D(t)}/change-password`, {
		password: n,
		password_2: n
	}, { signal: r }),
	invitePerson: async (t, { signal: n } = {}) => e.get(`actions/persons/${D(t)}/invite`, {}, { signal: n }),
	generateResetPasswordLink: async (t, { signal: n } = {}) => e.post(`actions/persons/${D(t)}/reset-password-link`, null, { signal: n }),
	addPersonToDepartment: async (t, n, { signal: r } = {}) => e.post(`actions/persons/${D(t)}/departments/add`, { department_id: D(n) }, { signal: r }),
	removePersonFromDepartment: async (t, n, { signal: r } = {}) => e.del(`actions/persons/${D(t)}/departments/${D(n)}`, null, { signal: r }),
	disableTwoFactorAuthentication: async (t, { signal: n } = {}) => e.del(`actions/persons/${D(t)}/disable-two-factor-authentication`, null, { signal: n }),
	clearPersonAvatar: async (t, { signal: n } = {}) => e.del(`actions/persons/${D(t)}/clear-avatar`, null, { signal: n }),
	setAvatar: async (t, n, { fileName: r, onProgress: i, signal: a } = {}) => e.upload(`pictures/thumbnails/persons/${D(t)}`, {
		file: A("file", n),
		fileName: r,
		onProgress: i,
		signal: a
	}),
	importPersonsWithCsv: async (t, { update: n = !1, fileName: r, onProgress: i, signal: a } = {}) => e.upload("import/csv/persons", {
		file: A("file", t),
		query: { update: n ? !0 : null },
		fileName: r,
		onProgress: i,
		signal: a
	}),
	allSalaryScales: async ({ signal: t } = {}) => e.fetchAll("salary-scales", {}, { signal: t }),
	updateSalaryScale: async (t, { signal: n } = {}) => e.update("salary-scales", D(t), F({ salary: j(t).salary }), { signal: n }),
	getPersonUrl: async (t) => it(U(e.host), t)
}), Gt = /^[\w-]+$/, Kt = [
	"build_jobs",
	"type",
	"created_at",
	"updated_at",
	"first_preview_file_id"
], qt = (e) => {
	if (typeof e == "string" && Gt.test(e)) return e;
	throw new w("Wrong format: expected a share link token");
}, Jt = (e) => e.shots || [], Yt = (e) => typeof e == "object" && !!e && (e.shots === null || Array.isArray(e.shots)), Xt = (e) => typeof e == "string" ? e.toLowerCase() : e, Zt = (e) => ({
	entity_id: Xt(e.entity_id ?? e.id),
	preview_file_id: Xt(e.preview_file_id) ?? null
}), Qt = (e) => {
	if (!Yt(e)) return e;
	let { shots: t, ...n } = e;
	return t === null ? n : {
		...n,
		shots: t.map(Zt)
	};
}, $t = (e) => typeof e == "object" ? Qt(Object.fromEntries(Object.entries(e).filter(([e]) => !Kt.includes(e)))) : e, en = (e) => {
	let t = typeof e == "object" && !!e && "entity" in e;
	return M({
		entity_id: D(t ? e.entity : e),
		preview_file_id: t ? O(e.previewFile) : null
	});
}, J = (e, t = "") => `shared/playlists/${qt(e)}${t}`, tn = (e) => Object.values(e).filter((e) => e && e.length > 0).map((e) => e[0]).reduce((e, t) => e === null || e.created_at < t.created_at ? t : e, null), nn = (e) => {
	let t = async (t, n, { episode: r, isForAll: i, forEntity: a }, o) => {
		let s = O(r), c = await e.fetchAll("playlists", {
			project_id: D(t),
			name: R(n),
			episode_id: s
		}, { signal: o }), l = !!i;
		return z(c.filter((e) => s !== null || !e.episode_id && !!e.is_for_all === l && (!l || (e.for_entity || "shot") === a)), n);
	}, n = (t, n) => e.get(`data/playlists/entities/${D(t)}/preview-files`, {}, { signal: n }), r = (t, n) => e.update("playlists", D(t), $t(t), { signal: n }), i = async (t, n) => {
		if (Yt(t)) return t;
		let r = D(t), { shots: i } = await e.get(`data/playlists/${r}`, {}, { signal: n });
		return {
			...typeof t == "object" ? t : { id: r },
			shots: i
		};
	}, a = async (t, n, r, i) => (r && await e.update("playlists", D(t), { shots: n.map(Zt) }, { signal: i }), {
		...t,
		shots: n
	});
	return {
		allPlaylists: async ({ signal: t } = {}) => e.fetchAll("playlists", {}, { signal: t }).then(L),
		allShotsForPlaylist: async (t, { signal: n } = {}) => e.get(`data/playlists/${D(t)}`, {}, { signal: n }).then(Jt),
		allPlaylistsForProject: async (t, { page: n = 1, signal: r } = {}) => e.fetchAll(`projects/${D(t)}/playlists`, { page: n }, { signal: r }).then(L),
		allPlaylistsForEpisode: async (t, { page: n = 1, signal: r } = {}) => {
			let i = D(t), a = typeof t == "object" && "project_id" in t ? t : await e.get(`data/episodes/${i}`, {}, { signal: r });
			return e.fetchAll(`projects/${D(a.project_id)}/episodes/${i}/playlists`, { page: n }, { signal: r }).then(L);
		},
		getPlaylist: async (t, { signal: n } = {}) => e.fetchOne("playlists", D(t), { signal: n }),
		getPlaylistByName: async (e, n, { episode: r = null, isForAll: i = !1, forEntity: a = "shot", signal: o } = {}) => t(e, n, {
			episode: r,
			isForAll: i,
			forEntity: a
		}, o),
		newPlaylist: async (n, r, { episode: i = null, forEntity: a = "shot", forClient: o = !1, isForAll: s = !1, taskType: c = null, signal: l } = {}) => {
			let u = M({
				name: r,
				project_id: D(n),
				for_entity: a,
				for_client: o,
				is_for_all: s,
				episode_id: O(i),
				task_type_id: O(c)
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
			let c = D(r), l = D(t), u = M({
				entity_id: c,
				preview_file_id: O(a ?? tn(await n(c, s)))
			});
			if (o) return e.post(`actions/playlists/${l}/add-entity`, u, { signal: s });
			let d = await i(t, s);
			return {
				...d,
				shots: [...Jt(d), u]
			};
		},
		removeEntityFromPlaylist: async (e, t, { persist: n = !0, signal: r } = {}) => {
			let o = D(t), s = await i(e, r), c = Jt(s), l = c.filter((e) => Xt(e.entity_id) !== o);
			return l.length === c.length ? {
				...s,
				shots: l
			} : a(s, l, n, r);
		},
		updateEntityPreview: async (e, t, n, { previousPreviewFile: r, persist: o = !0, signal: s } = {}) => {
			let c = D(t), l = D(n), u = r === void 0 ? void 0 : O(r), d = await i(e, s), f = Jt(d), p = (e) => Xt(e.entity_id) === c, m = f.findIndex((e) => p(e) && (Xt(e.preview_file_id) || null) === u), h = (e, t) => u === void 0 ? p(e) : t === m;
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
		deletePlaylist: async (t, { signal: n } = {}) => e.del(`data/playlists/${D(t)}`, void 0, { signal: n }),
		getBuildJob: async (t, n, { signal: r } = {}) => I(e.get(`data/playlists/${D(t)}/jobs/${D(n)}`, {}, { signal: r })),
		removeBuildJob: async (t, n, { signal: r } = {}) => e.del(`data/playlists/${D(t)}/jobs/${D(n)}`, void 0, { signal: r }),
		allBuildJobsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/build-jobs`, {}, { signal: n }),
		buildPlaylistMovie: async (t, { full: n = !1, signal: r } = {}) => e.get(`data/playlists/${D(t)}/build/mp4`, { full: n ? !0 : null }, { signal: r }),
		downloadPlaylistBuild: async (t, n, { signal: r } = {}) => e.download(`data/playlists/${D(t)}/jobs/${D(n)}/build/mp4`, { signal: r }),
		downloadPlaylistZip: async (t, { signal: n } = {}) => e.download(`data/playlists/${D(t)}/download/zip`, { signal: n }),
		generateTempPlaylist: async (t, n, { sort: r = !1, signal: i } = {}) => e.request("POST", `data/projects/${D(t)}/playlists/temp`, {
			body: n,
			query: { sort: r ? !0 : null },
			signal: i
		}),
		notifyClientsPlaylistReady: async (t, { studio: n = null, department: r = null, signal: i } = {}) => e.post(`data/playlists/${D(t)}/notify-clients`, M({
			studio_id: O(n),
			department_id: O(r)
		}), { signal: i }),
		newShareLink: async (t, { expirationDate: n = null, canComment: r = !0, password: i = null, signal: a } = {}) => e.post(`data/playlists/${D(t)}/share`, M({
			can_comment: r,
			expiration_date: B(n) || null,
			password: i || null
		}), { signal: a }),
		allShareLinksForPlaylist: async (t, { signal: n } = {}) => e.fetchAll(`playlists/${D(t)}/share`, {}, { signal: n }),
		removeShareLink: async (t, n, { signal: r } = {}) => e.del(`data/playlists/${D(t)}/share/${qt(n)}`, void 0, { signal: r }),
		getPlaylistForProject: async (t, n, { signal: r } = {}) => I(e.get(`data/projects/${D(t)}/playlists/${D(n)}`, {}, { signal: r })),
		addEntitiesToPlaylist: async (t, n, { signal: r } = {}) => {
			if (!Array.isArray(n) || n.length === 0) throw new w("Missing parameter: entities");
			return e.post(`actions/playlists/${D(t)}/add-entities`, { entities: n.map(en) }, { signal: r });
		},
		sendShareLinkInvitations: async (t, n, { emails: r = [], persons: i = [], message: a = null, signal: o } = {}) => e.post(`data/playlists/${D(t)}/share/${qt(n)}/invite`, M({
			emails: r,
			person_ids: k(i),
			message: a
		}), { signal: o }),
		newSharedPlaylistGuest: async (t, { firstName: n = null, lastName: r = null, guest: i = null, signal: a } = {}) => e.post(J(t, "/guest"), M({
			first_name: n,
			last_name: r,
			guest_id: O(i)
		}), { signal: a }),
		getSharedPlaylist: async (t, { password: n = null, signal: r } = {}) => I(e.get(J(t), { password: n }, { signal: r })),
		getSharedPlaylistContext: async (t, { password: n = null, signal: r } = {}) => I(e.get(J(t, "/context"), { password: n }, { signal: r })),
		updateSharedPlaylistAnnotations: async (t, n, r, { additions: i = [], updates: a = [], deletions: o = [], signal: s } = {}) => e.put(J(t, "/annotations"), {
			guest_id: D(n),
			preview_file_id: D(r),
			additions: i,
			updates: a,
			deletions: o
		}, { signal: s }),
		allSharedPlaylistComments: async (t, { password: n = null, signal: r } = {}) => e.get(J(t, "/comments"), { password: n }, { signal: r }),
		newSharedPlaylistComment: async (t, n, r, i, { text: a = "", checklist: o = null, password: s = null, signal: c } = {}) => e.request("POST", J(t, "/comments"), {
			body: M({
				guest_id: D(n),
				task_id: D(r),
				task_status_id: D(i),
				text: a,
				checklist: o
			}),
			query: { password: s },
			signal: c
		}),
		updateSharedPlaylistComment: async (t, n, r, { text: i = null, checklist: a = null, taskStatus: o = null, signal: s } = {}) => e.put(J(t, `/comments/${D(n)}`), M({
			guest_id: D(r),
			text: i,
			checklist: a,
			task_status_id: O(o)
		}), { signal: s }),
		removeSharedPlaylistComment: async (t, n, r, { signal: i } = {}) => e.request("DELETE", J(t, `/comments/${D(n)}`), {
			query: { guest_id: D(r) },
			signal: i
		}),
		addSharedPlaylistCommentAttachments: async (t, n, r, i, { onProgress: a, signal: o } = {}) => e.upload(J(t, `/comments/${D(n)}/attachments`), {
			file: i,
			fields: { guest_id: D(r) },
			onProgress: a,
			signal: o
		}),
		removeSharedPlaylistCommentAttachment: async (t, n, r, i, { signal: a } = {}) => e.request("DELETE", J(t, `/comments/${D(n)}/attachments/${D(r)}`), {
			query: { guest_id: D(i) },
			signal: a
		})
	};
}, rn = [
	"team",
	"asset_types",
	"task_statuses",
	"task_types"
], an = ["status", "ready_for"], on = [
	"supervisor",
	"lead",
	"artist"
], sn = [
	"senior",
	"mid",
	"junior"
], cn = [
	"department_id",
	"months_duration",
	"daily_salary"
], ln = [
	"user",
	"admin",
	"supervisor",
	"manager",
	"client",
	"vendor"
], un = (e, t, n) => {
	if (n == null || t.includes(n)) return n;
	throw new w(`Wrong format: ${e} must be one of ${t.join(", ")}`);
}, dn = (e) => {
	if (Array.isArray(e) && e.every((e) => ln.includes(e))) return e;
	throw new w(`Wrong format: rolesForBoard must be a list of ${ln.join(", ")}`);
}, fn = (e) => {
	if (typeof e != "object" || !e) return;
	let t = (t) => e[t] !== void 0, { out_field_type: n, out_task_status_id: r } = e;
	if (t("out_field_type") && !an.includes(n)) throw new w(`Wrong format: out_field_type must be one of ${an.join(", ")}`);
	if ((n === "status" || !t("out_field_type") && t("out_task_status_id")) && r == null) throw new w("Missing parameter: out_task_status_id is required with status");
	if (n === "ready_for" && t("entity_type") && e.entity_type !== "asset") throw new w("Wrong format: ready_for only works on assets");
}, pn = (e) => rn.filter((t) => Array.isArray(e[t])).reduce((t, n) => ({
	...t,
	[n]: k(e[n])
}), e), mn = (e, t) => {
	if (e instanceof Blob && !/\.hdr$/i.test(t || e.name || "")) throw new w("Wrong format: the file name must end in .hdr (fileName names a bare Blob)");
}, Y = (e, t) => `projects/${D(e)}/settings/${t}`, X = (e) => `projects/${D(e)}/metadata-descriptors`, Z = (e) => `projects/${D(e)}/budgets`, hn = (e, t) => `${Z(e)}/${D(t)}/entries`, gn = (e) => encodeURIComponent(A("fieldName", e)), _n = (e, t, n) => e.update("projects", D(t), pn(t), n), vn = (e, t, n, r) => e.fetchAll(t, { name: R(n) }, { signal: r }).then((e) => z(e, n)), yn = (e) => ({
	allProjectStatus: async ({ signal: t } = {}) => e.fetchAll("project-status", {}, { signal: t }).then(L),
	getProjectStatusByName: async (t, { signal: n } = {}) => vn(e, "project-status", t, n),
	allProjects: async ({ signal: t } = {}) => e.fetchAll("projects", {}, { signal: t }).then(L),
	allOpenProjects: async ({ signal: t } = {}) => e.fetchAll("projects/open", {}, { signal: t }).then(L),
	getProject: async (t, { signal: n } = {}) => e.fetchOne("projects", D(t), { signal: n }),
	getProjectByName: async (t, { signal: n } = {}) => vn(e, "projects", t, n),
	newProject: async (t, { productionType: n, team: r = [], assetTypes: i = [], taskStatuses: a = [], taskTypes: o = [], productionStyle: s, projectTemplate: c, signal: l } = {}) => {
		let u = {
			team: k(r),
			asset_types: k(i),
			task_statuses: k(a),
			task_types: k(o)
		}, d = O(c);
		return await vn(e, "projects", t, l) || e.create("projects", {
			name: t,
			...u,
			...M({
				production_type: n,
				production_style: s,
				project_template_id: d
			})
		}, { signal: l });
	},
	removeProject: async (t, { force: n = !1, signal: r } = {}) => e.remove("projects", D(t), { force: n ? !0 : null }, { signal: r }),
	updateProject: async (t, { signal: n } = {}) => _n(e, t, { signal: n }),
	updateProjectData: async (t, n = {}, { signal: r } = {}) => {
		let i = Ve({ ...P(n) }), a = await e.get(`data/projects/${D(t)}`, {}, { signal: r });
		return e.update("projects", D(t), { data: {
			...a.data,
			...i
		} }, { signal: r });
	},
	closeProject: async (t, { signal: n } = {}) => {
		let r = D(t), i = (await e.fetchAll("project-status", {}, { signal: n })).find((e) => (e.name || "").toLowerCase() === "closed");
		if (!i) throw new C("No closed project status found");
		return e.update("projects", r, { project_status_id: i.id }, { signal: n });
	},
	addAssetType: async (t, n, { signal: r } = {}) => e.create(Y(t, "asset-types"), { asset_type_id: D(n) }, { signal: r }),
	addTaskType: async (t, n, r, { hdBitrateCompression: i, ldBitrateCompression: a, signal: o } = {}) => e.create(Y(t, "task-types"), {
		...M({
			task_type_id: D(n),
			priority: r
		}),
		hd_bitrate_compression: i,
		ld_bitrate_compression: a
	}, { signal: o }),
	addTaskStatus: async (t, n, { signal: r } = {}) => e.create(Y(t, "task-status"), { task_status_id: D(n) }, { signal: r }),
	removeTaskType: async (t, n, { signal: r } = {}) => e.remove(Y(t, "task-types"), D(n), {}, { signal: r }),
	removeTaskStatus: async (t, n, { signal: r } = {}) => e.remove(Y(t, "task-status"), D(n), {}, { signal: r }),
	addMetadataDescriptor: async (t, n, r, i = {}) => {
		if ("taskTypeId" in i) throw new w("Wrong format: taskTypeId is now taskType");
		let { dataType: a = "string", choices: o = [], forClient: s = !1, departments: c = [], taskType: l, signal: u } = i;
		return e.create(X(t), M({
			name: A("name", n),
			data_type: a,
			choices: o,
			for_client: s,
			entity_type: A("entityType", r),
			departments: k(c),
			task_type_id: O(l)
		}), { signal: u });
	},
	getMetadataDescriptor: async (t, n, { signal: r } = {}) => e.fetchOne(X(t), D(n), { signal: r }),
	getMetadataDescriptorByFieldName: async (t, n, { entityType: r, taskType: i, signal: a } = {}) => e.fetchFirst("metadata-descriptors", {
		project_id: D(t),
		field_name: A("fieldName", n),
		entity_type: r,
		task_type_id: O(i),
		relations: !0
	}, { signal: a }),
	allMetadataDescriptors: async (t, { entityType: n, signal: r } = {}) => e.fetchAll(X(t), {}, { signal: r }).then((e) => n == null ? e : e.filter((e) => e.entity_type === n)),
	updateMetadataDescriptor: async (t, n, { signal: r } = {}) => {
		let i = D(n), { name: a, data_type: o, choices: s, for_client: c, departments: l } = j(n), u = F({
			name: a,
			data_type: o,
			choices: s,
			for_client: c,
			departments: l
		});
		u.departments && k(u.departments);
		let d = {
			...await e.get(`data/${X(t)}/${i}`, {}, { signal: r }),
			...u
		};
		return e.update(X(t), i, M({
			name: u.name,
			data_type: d.data_type,
			choices: d.choices,
			for_client: d.for_client,
			departments: k(d.departments || [])
		}), { signal: r });
	},
	removeMetadataDescriptor: async (t, n, { signal: r } = {}) => e.remove(X(t), D(n), {}, { signal: r }),
	reorderMetadataDescriptors: async (t, n, r, { signal: i } = {}) => e.create(`${X(t)}/reorder`, {
		entity_type: n,
		descriptor_ids: k(r)
	}, { signal: i }),
	getTeam: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/team`, {}, { signal: n }),
	addPersonToTeam: async (t, n, { role: r, signal: i } = {}) => e.create(`projects/${D(t)}/team`, M({
		person_id: D(n),
		role: r
	}), { signal: i }),
	updateTeamMemberRole: async (t, n, r, { signal: i } = {}) => {
		if (r === void 0) throw new w("Missing parameter: role is required, null restores the global role");
		return e.update(`projects/${D(t)}/team`, D(n), { role: r }, { signal: i });
	},
	removePersonFromTeam: async (t, n, { signal: r } = {}) => e.remove(`projects/${D(t)}/team`, D(n), {}, { signal: r }),
	getProjectTaskTypes: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/task-types`, {}, { signal: n }),
	getProjectTaskStatuses: async (t, { signal: n } = {}) => e.fetchAll(Y(t, "task-status"), {}, { signal: n }),
	allStatusAutomations: async (t, { signal: n } = {}) => e.fetchAll(Y(t, "status-automations"), {}, { signal: n }),
	addStatusAutomation: async (t, n, { signal: r } = {}) => e.create(Y(t, "status-automations"), { status_automation_id: D(n) }, { signal: r }),
	removeStatusAutomation: async (t, n, { signal: r } = {}) => e.remove(Y(t, "status-automations"), D(n), {}, { signal: r }),
	getPreviewBackgroundFiles: async (t, { signal: n } = {}) => e.fetchAll(Y(t, "preview-background-files"), {}, { signal: n }),
	addPreviewBackgroundFile: async (t, n, { signal: r } = {}) => e.create(Y(t, "preview-background-files"), { preview_background_file_id: D(n) }, { signal: r }),
	removePreviewBackgroundFile: async (t, n, { signal: r } = {}) => e.remove(Y(t, "preview-background-files"), D(n), {}, { signal: r }),
	getMilestones: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/milestones`, {}, { signal: n }),
	getProjectQuotas: async (t, n, { countMode: r, studio: i, signal: a } = {}) => e.fetchAll(`projects/${D(t)}/quotas/${D(n)}`, {
		count_mode: r,
		studio_id: O(i)
	}, { signal: a }),
	getProjectPersonQuotas: async (t, n, { countMode: r, studio: i, signal: a } = {}) => e.fetchAll(`projects/${D(t)}/quotas/persons/${D(n)}`, {
		count_mode: r,
		studio_id: O(i)
	}, { signal: a }),
	getBudgets: async (t, { signal: n } = {}) => e.fetchAll(Z(t), {}, { signal: n }),
	createBudget: async (t, n, { currency: r, signal: i } = {}) => e.create(Z(t), M({
		name: n,
		currency: r
	}), { signal: i }),
	getBudget: async (t, n, { signal: r } = {}) => e.fetchOne(Z(t), D(n), { signal: r }),
	updateBudget: async (t, n, r, { signal: i } = {}) => e.update(Z(t), D(n), r, { signal: i }),
	removeBudget: async (t, n, { signal: r } = {}) => e.remove(Z(t), D(n), {}, { signal: r }),
	getBudgetEntries: async (t, n, { signal: r } = {}) => e.fetchAll(hn(t, n), {}, { signal: r }),
	createBudgetEntry: async (t, n, r, i, a, o, { person: s, position: c, seniority: l, signal: u } = {}) => e.create(hn(t, n), M({
		department_id: D(r),
		person_id: O(s),
		position: un("position", on, c),
		seniority: un("seniority", sn, l),
		start_date: H(A("startDate", i)),
		months_duration: A("monthsDuration", a),
		daily_salary: A("dailySalary", o)
	}), { signal: u }),
	getBudgetEntry: async (t, n, r, { signal: i } = {}) => e.fetchOne(hn(t, n), D(r), { signal: i }),
	updateBudgetEntry: async (t, n, r, i, { signal: a } = {}) => {
		let o = hn(t, n), s = D(r), { department_id: c, person_id: l, start_date: u, months_duration: d, daily_salary: f, position: p, seniority: m, exceptions: h } = j(i), g = F({
			department_id: c,
			person_id: l,
			start_date: u === void 0 ? void 0 : H(u),
			months_duration: d,
			daily_salary: f,
			position: un("position", on, p),
			seniority: un("seniority", sn, m),
			exceptions: h
		}), _ = cn.filter((e) => g[e] === null);
		if (_.length > 0) throw new w(`Missing parameter: ${_.join(", ")} cannot be cleared`);
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
	removeBudgetEntry: async (t, n, r, { signal: i } = {}) => e.remove(hn(t, n), D(r), {}, { signal: i }),
	allProjectsWithAccess: async ({ signal: t } = {}) => e.fetchAll("projects/all", {}, { signal: t }).then(L),
	removeAssetType: async (t, n, { signal: r } = {}) => e.remove(Y(t, "asset-types"), D(n), {}, { signal: r }),
	addSettings: async (t, { taskTypes: n = [], taskStatuses: r = [], assetTypes: i = [], replaceTaskTypes: a = !1, signal: o } = {}) => e.create(Y(t, "batch"), {
		task_types: n.map(({ taskType: e, priority: t = null }) => ({
			task_type_id: D(e),
			priority: t
		})),
		task_status_ids: k(r),
		asset_type_ids: k(i),
		replace_task_types: a
	}, { signal: o }),
	updateTaskStatusLink: async (t, n, r, i, { signal: a } = {}) => e.create("task-status-links", {
		project_id: D(t),
		task_status_id: D(n),
		priority: A("priority", r),
		roles_for_board: dn(A("rolesForBoard", i))
	}, { signal: a }),
	reorderTaskStatusLinks: async (t, n, { signal: r } = {}) => e.post(`actions/projects/${D(t)}/task-status-links/reorder`, { task_status_ids: k(n) }, { signal: r }),
	updateTaskTypeLink: async (t, n, r, { signal: i } = {}) => e.create("task-type-links", {
		project_id: D(t),
		task_type_id: D(n),
		priority: A("priority", r)
	}, { signal: i }),
	reorderTaskTypeLinks: async (t, n, { signal: r } = {}) => e.post(`actions/projects/${D(t)}/task-type-links/reorder`, { task_type_ids: k(n) }, { signal: r }),
	addMetadataDescriptorToAllProjects: async (t, n, { dataType: r = "string", choices: i = [], forClient: a = !1, departments: o = [], signal: s } = {}) => e.create("metadata-descriptors/all-projects", {
		name: A("name", t),
		data_type: r,
		choices: i,
		for_client: a,
		entity_type: A("entityType", n),
		departments: k(o)
	}, { signal: s }),
	updateMetadataDescriptorOnAllProjects: async (t, n, { signal: r } = {}) => {
		let i = { ...n };
		return e.update("metadata-descriptors/all-projects", gn(t), {
			...i,
			entity_type: A("entity_type", i.entity_type),
			...Array.isArray(i.departments) ? { departments: k(i.departments) } : {}
		}, { signal: r });
	},
	removeMetadataDescriptorOnAllProjects: async (t, n, { signal: r } = {}) => e.remove("metadata-descriptors/all-projects", gn(t), { entity_type: A("entityType", n) }, { signal: r }),
	reorderMetadataDescriptorsOnAllProjects: async (t, n, { signal: r } = {}) => e.post("actions/metadata-descriptors/all-projects/reorder", {
		entity_type: A("entityType", t),
		field_order: n
	}, { signal: r }),
	allGlobalStatusAutomations: async ({ signal: t } = {}) => e.fetchAll("status-automations", {}, { signal: t }),
	getStatusAutomation: async (t, { signal: n } = {}) => e.fetchOne("status-automations", D(t), { signal: n }),
	newStatusAutomation: async (t, n, r, i, { entityType: a = "asset", outTaskStatus: o, importLastRevision: s = !1, signal: c } = {}) => {
		if (typeof t == "object" && t && ("inTaskType" in t || "outFieldType" in t)) throw new w("Wrong format: inTaskType, inTaskStatus, outFieldType and outTaskType are positional arguments");
		if (!an.includes(r)) throw new w(`Wrong format: outFieldType must be one of ${an.join(", ")}`);
		if (r === "status" && o == null) throw new w("Missing parameter: outTaskStatus is required with status");
		if (r === "ready_for" && a !== "asset") throw new w("Wrong format: ready_for only works on assets");
		return e.create("status-automations", M({
			entity_type: a,
			in_task_type_id: D(t),
			in_task_status_id: D(n),
			out_field_type: r,
			out_task_type_id: D(i),
			out_task_status_id: O(o),
			import_last_revision: s
		}), { signal: c });
	},
	updateStatusAutomation: async (t, { signal: n } = {}) => {
		let r = D(t);
		return fn(t), e.update("status-automations", r, t, { signal: n });
	},
	deleteStatusAutomation: async (t, { signal: n } = {}) => e.remove("status-automations", D(t), {}, { signal: n }),
	allPreviewBackgroundFiles: async ({ signal: t } = {}) => e.fetchAll("preview-background-files", {}, { signal: t }),
	getPreviewBackgroundFile: async (t, { signal: n } = {}) => e.fetchOne("preview-background-files", D(t), { signal: n }),
	newPreviewBackgroundFile: async (t, { archived: n = !1, isDefault: r = !1, signal: i } = {}) => e.create("preview-background-files", {
		name: A("name", t),
		archived: n,
		is_default: r
	}, { signal: i }),
	updatePreviewBackgroundFile: async (t, { signal: n } = {}) => e.update("preview-background-files", D(t), t, { signal: n }),
	deletePreviewBackgroundFile: async (t, { signal: n } = {}) => e.remove("preview-background-files", D(t), {}, { signal: n }),
	uploadPreviewBackgroundFile: async (t, n, { fileName: r, onProgress: i, signal: a } = {}) => (mn(n, r), e.upload(`pictures/preview-background-files/${D(t)}`, {
		file: n,
		fileName: r,
		onProgress: i,
		signal: a
	})),
	getBudgetsTimeSpents: async (t, { signal: n } = {}) => e.get(`data/${Z(t)}/time-spents`, {}, { signal: n }),
	getTaskTypeTimeSpents: async (t, n, { startDate: r, endDate: i, signal: a } = {}) => e.get(`data/projects/${D(t)}/task-types/${D(n)}/time-spents`, {
		start_date: B(r),
		end_date: B(i)
	}, { signal: a }),
	allDayOffsForProject: async (t, { startDate: n, endDate: r, signal: i } = {}) => e.get(`data/projects/${D(t)}/day-offs`, {
		start_date: B(n),
		end_date: B(r)
	}, { signal: i }),
	getProjectUrl: async (t, { section: n = "assets" } = {}) => qe(U(e.host), t, n)
}), bn = [
	"task_types",
	"task_statuses",
	"asset_types",
	"status_automations",
	"preview_background_files"
], xn = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => !bn.includes(e))), Sn = [
	"user",
	"admin",
	"supervisor",
	"manager",
	"client",
	"vendor"
], Cn = (e) => {
	if (e == null || Array.isArray(e) && e.every((e) => Sn.includes(e))) return e;
	throw new w(`Wrong format: rolesForBoard must be a list of ${Sn.join(", ")}`);
}, wn = (e) => {
	let t = (e) => `data/project-templates/${D(e)}`, n = (n, r, i) => e.get(`${t(n)}/${r}`, {}, { signal: i }), r = (n, r, i, a) => e.post(`${t(n)}/${r}`, i, { signal: a }), i = (n, r, i, a) => e.del(`${t(n)}/${r}/${D(i)}`, void 0, { signal: a }), a = (t, n, r, i, a) => e.post(`actions/project-templates/${D(t)}/${n}/reorder`, { [r]: k(A(r, i)) }, { signal: a });
	return {
		allProjectTemplates: async ({ signal: t } = {}) => e.fetchAll("project-templates", {}, { signal: t }).then(L),
		getProjectTemplate: async (t, { signal: n } = {}) => e.fetchOne("project-templates", D(t), { signal: n }),
		getProjectTemplateByName: async (t, { signal: n } = {}) => e.fetchAll("project-templates", { name: R(t) }, { signal: n }).then((e) => z(e, t)),
		newProjectTemplate: async (t, { description: n = null, fps: r, ratio: i, resolution: a, productionType: o, productionStyle: s, signal: c } = {}) => e.post("data/project-templates", {
			name: A("name", t),
			description: n,
			...M({
				fps: r,
				ratio: i,
				resolution: a,
				production_type: o,
				production_style: s
			})
		}, { signal: c }),
		updateProjectTemplate: async (t, { signal: n } = {}) => e.update("project-templates", D(t), xn(j(t)), { signal: n }),
		removeProjectTemplate: async (n, { signal: r } = {}) => e.del(t(n), void 0, { signal: r }),
		newProjectTemplateFromProject: async (t, n, { description: r = null, signal: i } = {}) => e.post(`data/project-templates/from-project/${D(t)}`, {
			name: A("name", n),
			description: r
		}, { signal: i }),
		applyProjectTemplate: async (t, n, { signal: r } = {}) => e.post(`data/projects/${D(t)}/apply-template/${D(n)}`, {}, { signal: r }),
		allTaskTypesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "task-types", t),
		addTaskTypeToProjectTemplate: async (e, t, { priority: n, hdBitrateCompression: i, ldBitrateCompression: a, signal: o } = {}) => r(e, "task-types", {
			...M({
				task_type_id: D(t),
				priority: n
			}),
			hd_bitrate_compression: i,
			ld_bitrate_compression: a
		}, o),
		removeTaskTypeFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "task-types", t, n),
		allTaskStatusesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "task-statuses", t),
		addTaskStatusToProjectTemplate: async (e, t, { priority: n, rolesForBoard: i, signal: a } = {}) => r(e, "task-statuses", M({
			task_status_id: D(t),
			priority: n,
			roles_for_board: Cn(i)
		}), a),
		removeTaskStatusFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "task-statuses", t, n),
		allAssetTypesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "asset-types", t),
		addAssetTypeToProjectTemplate: async (e, t, { signal: n } = {}) => r(e, "asset-types", { asset_type_id: D(t) }, n),
		removeAssetTypeFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "asset-types", t, n),
		allStatusAutomationsForProjectTemplate: async (e, { signal: t } = {}) => n(e, "status-automations", t),
		addStatusAutomationToProjectTemplate: async (e, t, { signal: n } = {}) => r(e, "status-automations", { status_automation_id: D(t) }, n),
		removeStatusAutomationFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "status-automations", t, n),
		allPreviewBackgroundFilesForProjectTemplate: async (e, { signal: t } = {}) => n(e, "preview-background-files", t),
		addPreviewBackgroundFileToProjectTemplate: async (e, t, { signal: n } = {}) => r(e, "preview-background-files", { preview_background_file_id: D(t) }, n),
		removePreviewBackgroundFileFromProjectTemplate: async (e, t, { signal: n } = {}) => i(e, "preview-background-files", t, n),
		setProjectTemplateDefaultPreviewBackgroundFile: async (n, r, { signal: i } = {}) => {
			if (r === void 0) throw new w("Missing parameter: previewBackgroundFile is required, null clears the default");
			return e.put(`${t(n)}/default-preview-background-file`, { default_preview_background_file_id: O(r) }, { signal: i });
		},
		setProjectTemplateMetadataDescriptors: async (n, r, { signal: i } = {}) => {
			if (!Array.isArray(A("descriptors", r))) throw new w("Wrong format: descriptors must be a list");
			return e.put(`${t(n)}/metadata-descriptors`, { metadata_descriptors: r }, { signal: i });
		},
		reorderTaskTypesForProjectTemplate: async (e, t, { signal: n } = {}) => a(e, "task-types", "task_type_ids", t, n),
		reorderTaskStatusesForProjectTemplate: async (e, t, { signal: n } = {}) => a(e, "task-statuses", "task_status_ids", t, n)
	};
}, Tn = (e) => {
	let t = (t, n) => e.fetchOne("scenes", D(t), { signal: n }), n = (t, n) => e.fetchAll(t, {}, { signal: n }).then(L), r = (t, n, r) => e.put(`data/asset-instances/${D(t)}`, n, { signal: r });
	return {
		newScene: async (t, n, r, { signal: i } = {}) => e.post(`data/projects/${D(t)}/scenes`, {
			name: r,
			sequence_id: D(n)
		}, { signal: i }),
		allScenes: async ({ project: e, signal: t } = {}) => {
			let r = O(e);
			return n(r ? `projects/${r}/scenes` : "scenes/all", t);
		},
		allScenesForProject: async (e, { signal: t } = {}) => n(`projects/${D(e)}/scenes`, t),
		allScenesForSequence: async (e, { signal: t } = {}) => n(`sequences/${D(e)}/scenes`, t),
		getScene: async (e, { signal: n } = {}) => t(e, n),
		getSceneByName: async (t, n, { signal: r } = {}) => {
			let i = D(t);
			return A("sceneName", n), z(await I(e.fetchAll(`sequences/${i}/scenes`, {}, { signal: r })), n);
		},
		updateScene: async (t, { signal: n } = {}) => e.update("entities", D(t), t, { signal: n }),
		newSceneAssetInstance: async (t, n, { description: r, signal: i } = {}) => e.post(`data/scenes/${D(t)}/asset-instances`, M({
			asset_id: D(n),
			description: r
		}), { signal: i }),
		allAssetInstancesForScene: async (t, { signal: n } = {}) => e.get(`data/scenes/${D(t)}/asset-instances`, {}, { signal: n }),
		getAssetInstanceByName: async (t, n, { signal: r } = {}) => {
			let i = D(t);
			A("name", n);
			let a = await I(e.get(`data/scenes/${i}/asset-instances`, {}, { signal: r }));
			return z(Object.values(a || {}).flat(), n);
		},
		allCameraInstancesForScene: async (t, { signal: n } = {}) => e.get(`data/scenes/${D(t)}/camera-instances`, {}, { signal: n }),
		allShotsForScene: async (t, { signal: n } = {}) => e.get(`data/scenes/${D(t)}/shots`, {}, { signal: n }),
		addShotToScene: async (t, n, { signal: r } = {}) => e.post(`data/scenes/${D(t)}/shots`, { shot_id: D(n) }, { signal: r }),
		removeShotFromScene: async (t, n, { signal: r } = {}) => e.del(`data/scenes/${D(t)}/shots/${D(n)}`, void 0, { signal: r }),
		updateAssetInstanceName: async (e, t, { signal: n } = {}) => r(e, { name: t }, n),
		updateAssetInstanceData: async (e, t, { signal: n } = {}) => r(e, { data: P(t) }, n),
		getSequenceFromScene: async (n, { signal: r } = {}) => {
			let i = typeof n == "object" && n && "parent_id" in n ? n : await t(n, r);
			return i && i.parent_id ? e.fetchOne("sequences", D(i.parent_id), { signal: r }) : null;
		}
	};
}, En = [
	"asset-types",
	"sequences",
	"edits",
	"episodes"
], Dn = (e) => {
	if (En.includes(e)) return e;
	throw new w(`Wrong format: kind must be one of ${En.join(", ")}`);
}, On = (e) => e == null ? e : k(e), kn = (e, t, n) => {
	let r = e ?? {};
	if (t.some((e) => e in r)) throw new w(`Wrong format: the changes are fields of the ${n}, not options`);
	return r;
}, An = (e) => ({
	newMilestone: async (t, n, r, { taskType: i, signal: a } = {}) => e.create("milestones", M({
		date: B(A("date", r)),
		name: A("name", n),
		task_type_id: O(i),
		project_id: D(t)
	}), { signal: a }),
	updateMilestone: async (t, n) => {
		let { signal: r } = kn(n, [
			"date",
			"name",
			"taskType"
		], "milestone"), i = D(t), { date: a, name: o, task_type_id: s } = j(t);
		return e.update("milestones", i, F({
			date: B(a),
			name: o,
			task_type_id: s
		}), { signal: r });
	},
	removeMilestone: async (t, { signal: n } = {}) => e.remove("milestones", D(t), void 0, { signal: n }),
	allTaskTypeScheduleItems: async (t, { signal: n } = {}) => e.get(`data/projects/${D(t)}/schedule-items/task-types`, void 0, { signal: n }),
	allScheduleItems: async (t, { signal: n } = {}) => e.get(`data/projects/${D(t)}/schedule-items`, void 0, { signal: n }),
	allEntityScheduleItems: async (t, n, r, { episode: i, signal: a } = {}) => e.get(`data/projects/${D(t)}/schedule-items/${D(n)}/${Dn(r)}`, { episode_id: O(i) }, { signal: a }),
	newScheduleItem: async (t, n, r, i, { manDays: a, signal: o } = {}) => e.create("schedule-items", M({
		start_date: B(A("startDate", r)),
		end_date: B(A("endDate", i)),
		project_id: D(t),
		task_type_id: D(n),
		man_days: a
	}), { signal: o }),
	updateScheduleItem: async (t, n) => {
		let { signal: r } = kn(n, [
			"startDate",
			"endDate",
			"manDays"
		], "schedule item"), i = D(t), { start_date: a, end_date: o, man_days: s } = j(t);
		return e.update("schedule-items", i, F({
			start_date: B(a),
			end_date: B(o),
			man_days: s
		}), { signal: r });
	},
	removeScheduleItem: async (t, { signal: n } = {}) => e.remove("schedule-items", D(t), void 0, { signal: n }),
	allScheduleVersions: async (t, { signal: n } = {}) => e.fetchAll("production-schedule-versions", { project_id: D(t) }, { signal: n }),
	getScheduleVersion: async (t, { signal: n } = {}) => e.fetchOne("production-schedule-versions", D(t), { signal: n }),
	newScheduleVersion: async (t, n, { signal: r } = {}) => e.create("production-schedule-versions", {
		project_id: D(t),
		name: A("name", n)
	}, { signal: r }),
	updateScheduleVersion: async (t, n) => {
		let { signal: r } = kn(n, [
			"name",
			"canceled",
			"locked"
		], "version"), i = D(t), { name: a, canceled: o, locked: s } = j(t);
		return e.update("production-schedule-versions", i, F({
			name: a,
			canceled: o,
			locked: s
		}), { signal: r });
	},
	removeScheduleVersion: async (t, { signal: n } = {}) => e.remove("production-schedule-versions", D(t), void 0, { signal: n }),
	setTaskLinksFromProduction: async (t, { signal: n } = {}) => e.post(`actions/production-schedule-versions/${D(t)}/set-task-links-from-production`, void 0, { signal: n }),
	setTaskLinksFromScheduleVersion: async (t, n, { signal: r } = {}) => e.post(`actions/production-schedule-versions/${D(t)}/set-task-links-from-production-schedule-version`, { production_schedule_version_id: D(n) }, { signal: r }),
	applyScheduleVersionToProduction: async (t, { signal: n } = {}) => e.post(`actions/production-schedule-versions/${D(t)}/apply-to-production`, void 0, { signal: n }),
	allScheduleVersionTaskLinks: async (t, { taskType: n, signal: r } = {}) => e.get(`data/production-schedule-versions/${D(t)}/task-links`, {
		relations: !0,
		task_type_id: O(n)
	}, { signal: r }),
	getScheduleVersionTaskLink: async (t, { signal: n } = {}) => e.fetchOne("production-schedule-version-task-links", D(t), { signal: n }),
	newScheduleVersionTaskLink: async (t, n, { startDate: r, dueDate: i, estimation: a, assignees: o, signal: s } = {}) => e.create("production-schedule-version-task-links", M({
		task_id: D(n),
		production_schedule_version_id: D(t),
		start_date: B(r),
		due_date: B(i),
		estimation: a,
		assignees: On(o)
	}), { signal: s }),
	updateScheduleVersionTaskLink: async (t, n) => {
		let { signal: r } = kn(n, [
			"startDate",
			"dueDate",
			"estimation",
			"assignees"
		], "task link"), i = D(t), { start_date: a, due_date: o, estimation: s, assignees: c } = j(t);
		return e.update("production-schedule-version-task-links", i, F({
			start_date: B(a),
			due_date: B(o),
			estimation: s,
			assignees: On(c)
		}), { signal: r });
	},
	removeScheduleVersionTaskLink: async (t, { signal: n } = {}) => e.remove("production-schedule-version-task-links", D(t), void 0, { signal: n })
}), jn = (e) => {
	let t = A("query", e);
	if (typeof t == "string" && [...t].length >= 3) return t;
	throw new w("Wrong format: query must be a string of 3 characters or more");
}, Mn = (e) => ({ searchEntities: async (t, { project: n, indexNames: r, limit: i, offset: a, signal: o } = {}) => e.post("data/search", M({
	query: jn(t),
	project_id: O(n),
	index_names: r ? [...r] : null,
	limit: i,
	offset: a
}), { signal: o }) }), Nn = (e) => e ? "${project_name}_${episode_name}-${sequence_name}-${shot_name}" : "${project_name}_${sequence_name}-${shot_name}", Pn = (e) => async (t) => {
	if ((t.headers.get("Content-Type") || "").includes("csv")) return t.text();
	throw new C(`GET ${e} answered ${t.status} without CSV`, {
		status: t.status,
		path: e,
		method: "GET",
		body: await t.text()
	});
}, Fn = (e) => e ? String(e).toLowerCase() : null, In = (e) => (t) => Fn(t.parent_id) === Fn(e), Ln = (e) => {
	let t = (t, n, r) => e.fetchOne(t, D(n), { signal: r }), n = async (e, n, r) => {
		let i = typeof n == "object" && n && "parent_id" in n ? n : await t(e, n, r);
		return i ? i.parent_id : null;
	}, r = (t, n, r, i, a) => I(e.fetchAll(t, n, { signal: a })).then((e) => z(Array.isArray(e) ? e.filter(i) : [], r)), i = async (e, t, n, i) => {
		let a = D(e), o = O(n), s = { name: R(t) };
		return r("sequences", o === null ? {
			...s,
			project_id: a
		} : {
			...s,
			episode_id: o
		}, t, In(o), i);
	}, a = async (e, t, n) => r("episodes", {
		project_id: D(e),
		name: R(t)
	}, t, () => !0, n), o = async (e, t, n) => {
		let i = D(e);
		return r("shots/all", {
			sequence_id: i,
			name: R(t)
		}, t, In(i), n);
	}, s = (t, n) => e.update("entities", D(t), He(t, { preview_file_id: "" }), { signal: n }), c = (t, n, r) => e.update("entities", D(t), { data: { ...P(n) } }, { signal: r }), l = (t, n, r, i) => e.remove(t, D(n), { force: r ? !0 : null }, { signal: i }), u = (t, n) => e.get(`data/shots/${D(t)}/asset-instances`, {}, { signal: n });
	return {
		allPreviewsForShot: async (t, { signal: n } = {}) => e.fetchAll(`shots/${D(t)}/preview-files`, {}, { signal: n }),
		allShotsForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/shots`, {}, { signal: n }).then(L),
		allShotsForEpisode: async (t, { signal: n } = {}) => e.fetchAll(`episodes/${D(t)}/shots`, {}, { signal: n }).then(L),
		allShotsForSequence: async (t, { signal: n } = {}) => e.fetchAll(`sequences/${D(t)}/shots`, {}, { signal: n }).then(L),
		allSequencesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/sequences`, {}, { signal: n }).then(L),
		allSequencesForEpisode: async (t, { signal: n } = {}) => e.fetchAll(`episodes/${D(t)}/sequences`, {}, { signal: n }).then(L),
		allEpisodesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/episodes`, {}, { signal: n }).then(L),
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
		newSequence: async (t, n, { episode: r, description: a, data: o, signal: s } = {}) => await i(t, n, r, s) || e.post(`data/projects/${D(t)}/sequences`, {
			name: n,
			...M({
				episode_id: O(r),
				description: a,
				data: o
			})
		}, { signal: s }),
		newShot: async (t, n, r, { nbFrames: i, frameIn: a, frameOut: s, description: c, data: l, signal: u } = {}) => {
			let d = {
				name: r,
				data: {
					...l,
					...M({
						frame_in: a,
						frame_out: s
					})
				},
				sequence_id: D(n),
				...M({
					nb_frames: i,
					description: c
				})
			}, f = `data/projects/${D(t)}/shots`;
			return await o(n, r, u) || e.post(f, d, { signal: u });
		},
		updateShot: async (e, { signal: t } = {}) => s(e, t),
		updateSequence: async (e, { signal: t } = {}) => s(e, t),
		getAssetInstancesForShot: async (e, { signal: t } = {}) => u(e, t),
		allAssetInstancesForShot: async (e, { signal: t } = {}) => u(e, t),
		updateShotData: async (e, t = {}, { signal: n } = {}) => c(e, t, n),
		updateSequenceData: async (e, t = {}, { signal: n } = {}) => c(e, t, n),
		removeShot: async (e, { force: t = !1, signal: n } = {}) => l("shots", e, t, n),
		restoreShot: async (t, { signal: n } = {}) => e.put(`data/shots/${D(t)}`, { canceled: !1 }, { signal: n }),
		newEpisode: async (t, n, { description: r, status: i, data: o, signal: s } = {}) => await a(t, n, s) || e.post(`data/projects/${D(t)}/episodes`, {
			name: n,
			...M({
				description: r,
				status: i,
				data: o
			})
		}, { signal: s }),
		updateEpisode: async (e, { signal: t } = {}) => s(e, t),
		updateEpisodeData: async (e, t = {}, { signal: n } = {}) => c(e, t, n),
		removeEpisode: async (e, { force: t = !1, signal: n } = {}) => l("episodes", e, t, n),
		removeSequence: async (e, { force: t = !1, signal: n } = {}) => l("sequences", e, t, n),
		addAssetInstanceToShot: async (t, n, { signal: r } = {}) => e.post(`data/shots/${D(t)}/asset-instances`, { asset_instance_id: D(n) }, { signal: r }),
		removeAssetInstanceFromShot: async (t, n, { signal: r } = {}) => e.del(`data/shots/${D(t)}/asset-instances/${D(n)}`, void 0, { signal: r }),
		importShotsWithCsv: async (t, n, { update: r = !1, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`import/csv/projects/${D(t)}/shots`, {
			file: A("csvFile", n),
			query: { update: r ? !0 : null },
			fileName: i,
			onProgress: a,
			signal: o
		}),
		importOtio: async (t, n, { episode: r, namingConvention: i, matchCase: a = !0, fileName: o, onProgress: s, signal: c } = {}) => {
			let l = O(r), u = `import/otio/projects/${D(t)}`;
			return e.upload(l ? `${u}/episodes/${l}` : u, {
				file: A("otioFile", n),
				fields: {
					naming_convention: i || Nn(l),
					match_case: a
				},
				fileName: o,
				onProgress: s,
				signal: c
			});
		},
		exportShotsWithCsv: async (t, { episode: n, assignedTo: r, signal: i } = {}) => {
			let a = `export/csv/projects/${D(t)}/shots.csv`;
			return e.request("GET", a, {
				query: {
					episode_id: O(n),
					assigned_to: O(r)
				},
				signal: i,
				read: Pn(a)
			});
		},
		allShotsWithTasks: async (t, { episode: n, signal: r } = {}) => e.getNdjson("data/shots/with-tasks", {
			project_id: D(t),
			episode_id: O(n)
		}, { signal: r }),
		allSequencesWithTasks: async (t, { episode: n, signal: r } = {}) => e.get("data/sequences/with-tasks", {
			project_id: D(t),
			episode_id: O(n)
		}, { signal: r }),
		allEpisodesWithTasks: async (t, { signal: n } = {}) => e.get("data/episodes/with-tasks", { project_id: D(t) }, { signal: n }),
		getEpisodeStats: async (t, { signal: n } = {}) => e.get(`data/projects/${D(t)}/episodes/stats`, {}, { signal: n }),
		getEpisodeRetakeStats: async (t, { signal: n } = {}) => e.get(`data/projects/${D(t)}/episodes/retake-stats`, {}, { signal: n }),
		allVersionsForShot: async (t, { signal: n } = {}) => e.get(`data/shots/${D(t)}/versions`, {}, { signal: n }),
		setNbFramesFromTaskTypePreviews: async (t, n, { episode: r, signal: i } = {}) => e.request("POST", `actions/projects/${D(t)}/task-types/${D(n)}/set-shot-nb-frames`, {
			query: { episode_id: O(r) },
			signal: i
		}),
		getEpisodeUrl: async (t, { signal: n } = {}) => Ze(U(e.host), await e.get(`data/episodes/${D(t)}`, {}, { signal: n })),
		getShotUrl: async (t, { signal: n } = {}) => Qe(U(e.host), await e.get(`data/shots/${D(t)}`, {}, { signal: n })),
		getSequenceUrl: async (t, { signal: n } = {}) => et(U(e.host), await e.get(`data/sequences/${D(t)}`, {}, { signal: n })),
		getAllEpisodesUrl: async (t) => tt(U(e.host), t),
		getAllSequencesUrl: async (t) => nt(U(e.host), t)
	};
}, Rn = (e) => ({
	allStudios: async ({ signal: t } = {}) => e.fetchAll("studios", {}, { signal: t }).then(L),
	getStudio: async (t, { signal: n } = {}) => e.fetchOne("studios", D(t), { signal: n }),
	getStudioByName: async (t, { signal: n } = {}) => I(e.fetchAll("studios", { name: R(t) }, { signal: n })).then((e) => z(e, t)),
	newStudio: async (t, n, { archived: r = !1, signal: i } = {}) => e.create("studios", {
		name: A("name", t),
		color: A("color", n),
		archived: r
	}, { signal: i }),
	updateStudio: async (t, { signal: n } = {}) => {
		let r = D(t);
		if (typeof t != "object") throw new w("Wrong format: expected the studio, not its id");
		return e.update("studios", r, t, { signal: n });
	},
	removeStudio: async (t, { signal: n } = {}) => e.remove("studios", D(t), {}, { signal: n })
}), zn = /^#[0-9a-fA-F]*$/, Bn = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}$/, Vn = [
	"assets",
	"shots",
	"edits",
	"concepts"
], Hn = ["episodes", "sequences"], Un = (e) => {
	let t = V(e);
	if (t != null && t !== "") {
		if (Bn.test(t)) return t;
		throw new w("Wrong format: createdAt must be a Date or a \"YYYY-MM-DDTHH:MM:SS\" string in UTC");
	}
}, Wn = (e) => e && e.created_at !== void 0 ? {
	...e,
	created_at: Un(e.created_at)
} : e, Gn = (e, t) => {
	let n = A("file", e);
	if (!(n instanceof Blob)) throw new w("Wrong format: file must be a Blob or a File");
	if (t || n.name) return n;
	throw new w("Missing parameter: fileName is required when the file has no name");
}, Kn = (e, t) => {
	if (Array.isArray(t) && t.length > 0) return k(t);
	throw new w(`Missing parameter: ${e} must be a non-empty list`);
}, qn = (e) => {
	let { project: t, taskType: n, taskStatus: r, persons: i, department: a, studio: o, startDate: s, dueDate: c, priority: l, ...u } = e;
	N(u);
	let d = i == null || i === "unassigned" ? i : Kn("persons", i).join(",");
	return {
		project_id: O(t),
		task_type_id: O(n),
		task_status_id: O(r),
		person_id: d,
		department_id: O(a),
		studio_id: O(o),
		start_date: B(s),
		due_date: B(c),
		priority: l
	};
}, Jn = (e) => {
	let t = (t, n, r, { relations: i = !1, signal: a } = {}) => e.fetchAll(`${n}/${D(t)}/${r}`, { relations: i ? !0 : null }, { signal: a }).then(L), n = (t, n, { signal: r } = {}) => e.fetchAll(`${n}/${D(t)}/task-types`, {}, { signal: r }).then(L), r = (e, t, n) => `${e}/tasks/${D(t)}/comments/${D(n)}`, i = (t, n, { signal: r } = {}) => e.fetchAll(`projects/${D(t)}/${n}`, {}, { signal: r }), a = (e, t, n) => `actions/tasks/${D(e)}/time-spents/${H(n)}/persons/${D(t)}`, o = (e, t, n) => {
		let r = `actions/projects/${D(e)}/task-types/${D(t)}`;
		if (Hn.includes(n)) return `${r}/create-tasks/${n.slice(0, -1)}`;
		if (Vn.includes(n)) return `${r}/${n}/create-tasks`;
		throw new w(`Wrong format: type must be one of ${[...Vn, ...Hn].join(", ")}`);
	}, s = async (t, n, { name: r = "main", signal: i } = {}) => I(e.fetchAll("tasks", {
		name: R(r),
		task_type_id: D(n),
		entity_id: D(t)
	}, { signal: i })).then((e) => z(e, r)), c = async (t, { forEntity: n, department: r, signal: i } = {}) => I(e.fetchAll("task-types", {
		name: R(t),
		for_entity: n,
		department_id: O(r)
	}, { signal: i })).then((e) => z(e, t)), l = async ({ signal: t } = {}) => e.fetchFirst("task-status", {
		is_default: !0,
		for_concept: !1
	}, { signal: t }), u = async (t, { signal: n } = {}) => e.fetchFirst("task-status", { short_name: A("shortName", t) }, { signal: n }), d = async (t, { signal: n } = {}) => I(e.get(`data/tasks/${D(t)}/full`, {}, { signal: n })), f = async (t, { signal: n } = {}) => {
		if (!t || typeof t != "object") throw new w("Wrong format: updateTask needs the task object");
		return e.update("tasks", D(t), t.assignees === void 0 ? t : {
			...t,
			assignees: k(t.assignees || [])
		}, { signal: n });
	}, p = async (t, n, { signal: r } = {}) => e.post(`data/entities/${D(t)}/tasks`, { task_type_ids: Kn("taskTypes", n) }, { signal: r }), m = async (t, n, { comment: r = "", person: i, checklist: a = [], attachments: o, createdAt: s, links: c = [], forClient: l = !1, fileName: u, onProgress: d, signal: f } = {}) => {
		let p = `actions/tasks/${D(t)}/comment`, m = {
			task_status_id: D(n),
			comment: r,
			checklist: a,
			links: c,
			person_id: O(i),
			created_at: Un(s)
		};
		return !o || o.length === 0 ? e.post(p, M({
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
	}, h = async (t, n, { revision: i, signal: a } = {}) => e.post(`${r("actions", t, n)}/add-preview`, M({ revision: i }), { signal: a }), g = async (t, n, i, { signal: a } = {}) => e.post(`${r("actions", t, n)}/preview-files/${D(i)}`, {}, { signal: a }), _ = async (t, { frameNumber: n, signal: r } = {}) => e.put(`actions/preview-files/${D(t)}/set-main-preview`, M({ frame_number: n }), { signal: r }), v = async (t, n, { normalizeMovie: r = !0, fileName: i, onProgress: a, signal: o } = {}) => e.upload(`pictures/preview-files/${D(t)}`, {
		file: Gn(n, i),
		fileName: i,
		query: { normalize: r ? null : !1 },
		onProgress: a,
		signal: o
	}), y = async (e, t, n, { normalizeMovie: r, revision: i, fileName: a, onProgress: o, signal: s } = {}) => {
		Gn(n, a);
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
		allTaskStatuses: async ({ signal: t } = {}) => e.fetchAll("task-status", {}, { signal: t }).then(L),
		allTaskTypes: async ({ signal: t } = {}) => e.fetchAll("task-types", {}, { signal: t }).then(L),
		allTaskTypesForProject: async (e, t) => n(e, "projects", t),
		allTaskStatusesForProject: async (t, { signal: n } = {}) => e.fetchAll(`projects/${D(t)}/settings/task-status`, {}, { signal: n }).then(L),
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
			project_id: D(t),
			task_type_id: D(n),
			task_status_id: D(r)
		}, { signal: i }),
		allTasksForTaskType: async (t, n, { episode: r, signal: i } = {}) => e.fetchAll("tasks", {
			project_id: D(t),
			task_type_id: D(n),
			episode_id: O(r)
		}, { signal: i }),
		allTaskTypesForShot: async (e, t) => n(e, "shots", t),
		allTaskTypesForConcept: async (e, t) => n(e, "concepts", t),
		allTaskTypesForAsset: async (e, t) => n(e, "assets", t),
		allTaskTypesForScene: async (e, t) => n(e, "scenes", t),
		allTaskTypesForSequence: async (e, t) => n(e, "sequences", t),
		allTaskTypesForEpisode: async (e, t) => n(e, "episodes", t),
		allTasksForEntityAndTaskType: async (t, n, { signal: r } = {}) => e.fetchAll(`entities/${D(t)}/task-types/${D(n)}/tasks`, {}, { signal: r }),
		allTasksForPerson: async (t, { signal: n } = {}) => e.fetchAll(`persons/${D(t)}/tasks`, {}, { signal: n }),
		allDoneTasksForPerson: async (t, { signal: n } = {}) => e.fetchAll(`persons/${D(t)}/done-tasks`, {}, { signal: n }),
		allTasksForPersonAndType: async (t, n, { signal: r } = {}) => e.fetchAll(`persons/${D(t)}/related-tasks/${D(n)}`, {}, { signal: r }),
		allTasksForProject: async (t, { taskType: n, episode: r, signal: i } = {}) => e.fetchAll(`projects/${D(t)}/tasks`, {
			task_type_id: O(n),
			episode_id: O(r)
		}, { signal: i }),
		allOpenTasks: async ({ page: t, limit: n, signal: r, ...i } = {}) => e.get("data/tasks/open-tasks", {
			...qn(i),
			page: t,
			limit: n
		}, { signal: r }),
		getOpenTasksStats: async ({ signal: t } = {}) => e.get("data/tasks/open-tasks/stats", {}, { signal: t }),
		getPersonsTasksDates: async ({ signal: t } = {}) => e.get("data/persons/task-dates", {}, { signal: t }),
		getTaskByEntity: s,
		getTaskType: async (t, { signal: n } = {}) => e.fetchOne("task-types", D(t), { signal: n }),
		getTaskTypeByName: c,
		getTaskTypeByShortName: async (t, { forEntity: n, department: r, signal: i } = {}) => e.fetchFirst("task-types", {
			short_name: A("shortName", t),
			for_entity: n,
			department_id: O(r)
		}, { signal: i }),
		getDefaultTaskStatus: l,
		getTaskStatus: async (t, { signal: n } = {}) => e.fetchOne("task-status", D(t), { signal: n }),
		getTaskStatusByName: async (t, { signal: n } = {}) => I(e.fetchAll("task-status", { name: R(t) }, { signal: n })).then((e) => z(e, t)),
		getTaskStatusByShortName: u,
		removeTaskType: async (t, { force: n = !1, signal: r } = {}) => e.remove("task-types", D(t), { force: n ? !0 : null }, { signal: r }),
		removeTaskStatus: async (t, { signal: n } = {}) => e.remove("task-status", D(t), {}, { signal: n }),
		updateTaskType: async (t, { signal: n } = {}) => e.update("task-types", D(t), t, { signal: n }),
		updateTaskStatus: async (t, { signal: n } = {}) => e.update("task-status", D(t), t, { signal: n }),
		getTask: d,
		newTask: async (t, n, { name: r = "main", taskStatus: i, assigner: a, assignees: o, signal: c } = {}) => {
			let u = {
				entity_id: D(t),
				task_type_id: D(n),
				assignees: k(o ?? []),
				name: r,
				assigner_id: O(a)
			}, d = O(i), f = await s(t, n, {
				name: r,
				signal: c
			});
			if (f) return f;
			let { project_id: p } = typeof t == "object" && t.project_id ? t : await e.get(`data/entities/${u.entity_id}`, {}, { signal: c }), m = d === null ? await l({ signal: c }) : { id: d };
			if (!m) throw new Ee("No default task status: give one in the taskStatus option");
			return e.create("tasks", M({
				project_id: p,
				...u,
				task_status_id: D(m)
			}), { signal: c });
		},
		removeTask: async (t, { signal: n } = {}) => e.remove("tasks", D(t), { force: !0 }, { signal: n }),
		newTaskType: async (t, { color: n = "#000000", forEntity: r = "Asset", signal: i } = {}) => await c(t, {
			forEntity: r,
			signal: i
		}) || e.create("task-types", {
			name: t,
			color: n,
			for_entity: r
		}, { signal: i }),
		newTaskStatus: async (t, n, r, { signal: i } = {}) => {
			if (typeof r != "string" || !zn.test(r)) throw new w("Color must be a hexadecimal string starting with '#', e.g. '#00FF00'");
			return e.create("task-status", {
				name: t,
				short_name: n,
				color: r
			}, { signal: i });
		},
		updateTask: f,
		updateTaskData: async (t, n = {}, { signal: r } = {}) => e.update("tasks", D(t), Object.values({ ...P(n) }).some((e) => e !== void 0) ? { data: n } : {}, { signal: r }),
		assignTask: async (t, n, { signal: r } = {}) => e.put(`actions/persons/${D(n)}/assign`, { task_ids: [D(t)] }, { signal: r }),
		assignTasksToPerson: async (t, n, { signal: r } = {}) => e.put(`actions/persons/${D(n)}/assign`, { task_ids: k(t) }, { signal: r }),
		clearAssignations: async (t, { person: n, signal: r } = {}) => {
			let i = k(Array.isArray(t) ? t : [t]);
			return i.length === 0 ? [] : e.put("actions/tasks/clear-assignation", M({
				task_ids: i,
				person_id: O(n)
			}), { signal: r });
		},
		removeTasksForType: async (t, n, { signal: r } = {}) => e.del(`actions/projects/${D(t)}/task-types/${D(n)}/delete-tasks`, void 0, { signal: r }),
		removeTasksBatch: async (t, n, { signal: r } = {}) => e.post(`actions/projects/${D(t)}/delete-tasks`, k(n), { signal: r }),
		createShotTasks: async (e, t, n) => p(e, t, n),
		createAssetTasks: async (e, t, n) => p(e, t, n),
		createEditTasks: async (e, t, n) => p(e, t, n),
		createConceptTasks: async (e, t, n) => p(e, t, n),
		createEntityTasks: p,
		startTask: async (e, { startedTaskStatus: t, person: n, signal: r } = {}) => {
			D(e), O(n);
			let i = t || await u("wip", { signal: r });
			if (!i) throw new Ee("No 'wip' task status: give one in the startedTaskStatus option");
			return m(e, i, {
				person: n,
				signal: r
			});
		},
		addComment: m,
		addAttachmentFilesToComment: async (t, n, i, { fileName: a, onProgress: o, signal: s } = {}) => {
			let c = [].concat(i || []);
			if (c.length === 0) throw new w("The attachments list is empty");
			return e.upload(`${r("actions", t, n)}/add-attachment`, {
				file: c,
				fileName: a,
				onProgress: o,
				signal: s
			});
		},
		uploadPreviewFile: v,
		getTimeSpent: async (t, { date: n, signal: r } = {}) => {
			let i = `actions/tasks/${D(t)}/time-spents`;
			return I(e.get(n ? `${i}/${H(n)}` : i, {}, { signal: r }));
		},
		getTaskTimeSpentForDate: async (t, n, { signal: r } = {}) => I(e.get(`actions/tasks/${D(t)}/time-spents/${H(n)}`, {}, { signal: r })),
		setTimeSpent: async (t, n, r, i, { signal: o } = {}) => e.post(a(t, n, r), { duration: i }, { signal: o }),
		addTimeSpent: async (t, n, r, i, { signal: o } = {}) => e.post(`${a(t, n, r)}/add`, { duration: i }, { signal: o }),
		removeTimeSpent: async (t, { signal: n } = {}) => e.remove("time-spents", D(t), {}, { signal: n }),
		getComment: async (t, { signal: n } = {}) => e.fetchOne("comments", D(t), { signal: n }),
		removeComment: async (t, { signal: n } = {}) => e.remove("comments", D(t), {}, { signal: n }),
		updateComment: async (t, { signal: n } = {}) => e.update("comments", D(t), t, { signal: n }),
		allCommentsForTask: async (t, { signal: n } = {}) => e.fetchAll(`tasks/${D(t)}/comments`, {}, { signal: n }),
		getLastCommentForTask: async (t, { signal: n } = {}) => e.fetchFirst(`tasks/${D(t)}/comments`, {}, { signal: n }),
		allPreviewsForTask: async (t, { signal: n } = {}) => e.fetchAll(`tasks/${D(t)}/previews`, {}, { signal: n }),
		allCommentsForProject: async (e, t) => i(e, "comments", t),
		allNotificationsForProject: async (e, t) => i(e, "notifications", t),
		allPreviewFilesForProject: async (e, t) => i(e, "preview-files", t),
		allSubscriptionsForProject: async (e, t) => i(e, "subscriptions", t),
		createPreview: h,
		createExtraPreview: g,
		addPreview: y,
		addExtraPreview: async (e, t, n, r, { normalizeMovie: i, fileName: a, onProgress: o, signal: s } = {}) => {
			Gn(r, a);
			let c = await g(e, t, n, { signal: s });
			return v(c, r, {
				normalizeMovie: i,
				fileName: a,
				onProgress: o,
				signal: s
			});
		},
		publishPreview: async (e, t, n, { comment: r, person: i, checklist: a, attachments: o, createdAt: s, links: c, normalizeMovie: l, revision: u, setThumbnail: d = !1, fileName: f, onProgress: p, signal: h } = {}) => {
			Gn(n, f);
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
		removePreviewFromComment: async (t, n, i, { signal: a } = {}) => e.del(`${r("actions", t, n)}/preview-files/${D(i)}`, void 0, { signal: a }),
		setMainPreview: _,
		batchComments: async (t = [], { task: n, signal: r } = {}) => {
			let i = O(n);
			if (!Array.isArray(t) || !t.every((e) => typeof e == "object" && !!e && !!e.task_status_id && typeof e.text == "string" && (i !== null || !!e.task_id))) throw new w("Missing parameter: every comment needs task_status_id, text and, without the task option, task_id");
			return e.post(`actions/tasks/${i === null ? "" : `${i}/`}batch-comment`, { comments: t.map(Wn) }, { signal: r });
		},
		createMultipleComments: async (t, n = [], { signal: r } = {}) => e.post(`actions/projects/${D(t)}/tasks/comment-many`, n, { signal: r }),
		addTasksBatchComments: async (t, n, { signal: r } = {}) => {
			let i = Wn(n);
			return e.post("actions/tasks/batch-comment", { comments: k(t).map((e) => ({
				...i,
				task_id: e
			})) }, { signal: r });
		},
		moveCommentToTask: async (t, n, i, { signal: a } = {}) => e.post(`${r("actions", t, n)}/move`, { target_task_id: D(i) }, { signal: a }),
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
		deleteCommentAttachment: async (t, n, i, { signal: a } = {}) => e.del(`${r("data", t, n)}/attachments/${D(i)}`, void 0, { signal: a }),
		deleteCommentReply: async (t, n, i, { signal: a } = {}) => e.del(`${r("data", t, n)}/reply/${D(i)}`, void 0, { signal: a }),
		clearTimeSpent: async (t, n, r, { signal: i } = {}) => e.del(a(t, n, r), void 0, { signal: i }),
		allTasks: async ({ project: t, taskType: n, taskStatus: r, episode: i, relations: a = !1, signal: o, ...s } = {}) => (N(s), e.fetchAll("tasks", {
			project_id: O(t),
			task_type_id: O(n),
			task_status_id: O(r),
			episode_id: O(i),
			relations: a ? !0 : null
		}, { signal: o })),
		getOpenTasksBurndown: async ({ signal: t, ...n } = {}) => {
			let r = {
				...n,
				page: void 0,
				limit: void 0
			};
			return e.get("data/tasks/open-tasks/burndown", qn(r), { signal: t });
		},
		removeTaskComment: async (t, n, { signal: i } = {}) => e.del(r("data", t, n), void 0, { signal: i }),
		createTasks: async (t, n, r, { entities: i, entity: a, all: s = !1, signal: c } = {}) => {
			let l = o(t, n, r), u = (e) => e != null;
			if ([
				u(i),
				u(a),
				s === !0
			].filter(Boolean).length !== 1) throw new w("Missing parameter: exactly one of entities, entity or all: true is required");
			if (s === !0) return e.post(l, [], { signal: c });
			if (u(i)) return e.post(l, Kn("entities", i), { signal: c });
			let d = D(a);
			return Vn.includes(r) ? e.request("POST", l, {
				body: {},
				query: { id: d },
				signal: c
			}) : e.post(l, [d], { signal: c });
		},
		setTaskMainPreview: async (t, { signal: n } = {}) => e.put(`actions/tasks/${D(t)}/set-main-preview`, {}, { signal: n }),
		setTasksMainPreview: async (t, { signal: n } = {}) => e.put("actions/tasks/set-main-preview", { task_ids: k(t) }, { signal: n }),
		setTasksPriority: async (t, n, { signal: r } = {}) => e.put("actions/tasks/set-priority", {
			task_ids: k(t),
			priority: A("priority", n)
		}, { signal: r }),
		reorderTaskTypes: async (t, { signal: n } = {}) => e.post("actions/task-types/reorder", { task_type_ids: k(t) }, { signal: n }),
		importTaskTypeEstimationsWithCsv: async (t, n, r, { episode: i, fileName: a, onProgress: o, signal: s } = {}) => {
			let c = O(i), l = c === null ? "" : `episodes/${c}/`;
			return e.upload(`import/csv/projects/${D(t)}/${l}task-types/${D(n)}/estimations`, {
				file: r,
				fileName: a,
				onProgress: o,
				signal: s
			});
		},
		getTaskUrl: async (t, { signal: n } = {}) => rt(U(e.host), t && typeof t == "object" && t.project_id ? t : await e.get(`data/tasks/${D(t)}`, {}, { signal: n }))
	};
}, Q = (e, t, n) => e.fetchAll(t, {}, { signal: n }).then(L), Yn = (e) => {
	if (typeof A("listType", e) == "string") return e;
	throw new w("Wrong format: listType must be a string such as \"asset\" or \"todo\"");
}, Xn = (e) => ({
	allOpenProjects: async ({ signal: t } = {}) => Q(e, "user/projects/open", t),
	allAssetTypesForProject: async (t, { signal: n } = {}) => Q(e, `user/projects/${D(t)}/asset-types`, n),
	allAssetsForAssetTypeAndProject: async (t, n, { signal: r } = {}) => Q(e, `user/projects/${D(t)}/asset-types/${D(n)}/assets`, r),
	allTasksForAsset: async (t, { signal: n } = {}) => Q(e, `user/assets/${D(t)}/tasks`, n),
	allTasksForShot: async (t, { signal: n } = {}) => Q(e, `user/shots/${D(t)}/tasks`, n),
	allTasksForScene: async (t, { signal: n } = {}) => Q(e, `user/scenes/${D(t)}/tasks`, n),
	allTasksForSequence: async (t, { signal: n } = {}) => Q(e, `user/sequences/${D(t)}/tasks`, n),
	allTaskTypesForAsset: async (t, { signal: n } = {}) => Q(e, `user/assets/${D(t)}/task-types`, n),
	allTaskTypesForShot: async (t, { signal: n } = {}) => Q(e, `user/shots/${D(t)}/task-types`, n),
	allTaskTypesForScene: async (t, { signal: n } = {}) => Q(e, `user/scenes/${D(t)}/task-types`, n),
	allTaskTypesForSequence: async (t, { signal: n } = {}) => Q(e, `user/sequences/${D(t)}/task-types`, n),
	allSequencesForProject: async (t, { signal: n } = {}) => Q(e, `user/projects/${D(t)}/sequences`, n),
	allEpisodesForProject: async (t, { signal: n } = {}) => Q(e, `user/projects/${D(t)}/episodes`, n),
	allShotsForSequence: async (t, { signal: n } = {}) => Q(e, `user/sequences/${D(t)}/shots`, n),
	allScenesForSequence: async (t, { signal: n } = {}) => Q(e, `user/sequences/${D(t)}/scenes`, n),
	allTasksToDo: async ({ signal: t } = {}) => e.fetchAll("user/tasks", {}, { signal: t }),
	allDoneTasks: async ({ signal: t } = {}) => e.fetchAll("user/done-tasks", {}, { signal: t }),
	getTimespentsRange: async (t, n, { signal: r } = {}) => I(e.get("data/user/time-spents", {
		start_date: H(t),
		end_date: H(n)
	}, { signal: r })),
	logDesktopSessionLogIn: async ({ signal: t } = {}) => e.post("data/user/desktop-login-logs", { date: (/* @__PURE__ */ new Date()).toISOString().replace("Z", "") }, { signal: t }),
	allFilters: async ({ signal: t } = {}) => e.fetchAll("user/filters", {}, { signal: t }),
	newFilter: async (t, n, r, { project: i, entityType: a = null, signal: o } = {}) => e.post("data/user/filters", {
		name: A("name", t),
		query: A("query", n),
		list_type: Yn(r),
		project_id: O(i),
		entity_type: a
	}, { signal: o }),
	removeFilter: async (t, { signal: n } = {}) => e.remove("user/filters", D(t), {}, { signal: n }),
	updateFilter: async (t, { signal: n } = {}) => e.update("user/filters", D(t), t, { signal: n }),
	getContext: async ({ signal: t } = {}) => I(e.get("data/user/context", {}, { signal: t })),
	allTasksRequiringFeedback: async ({ signal: t } = {}) => e.fetchAll("user/tasks-to-check", {}, { signal: t }),
	allFilterGroups: async ({ signal: t } = {}) => e.fetchAll("user/filter-groups", {}, { signal: t }),
	newFilterGroup: async (t, n, { project: r, color: i = "", isShared: a = !1, department: o, entityType: s = null, signal: c } = {}) => e.post("data/user/filter-groups", {
		name: A("name", t),
		list_type: Yn(n),
		color: i,
		is_shared: a,
		project_id: O(r),
		department_id: O(o),
		entity_type: s
	}, { signal: c }),
	getFilterGroup: async (t, { signal: n } = {}) => e.fetchOne("user/filter-groups", D(t), { signal: n }),
	updateFilterGroup: async (t, { signal: n } = {}) => e.update("user/filter-groups", D(t), t, { signal: n }),
	removeFilterGroup: async (t, { signal: n } = {}) => e.remove("user/filter-groups", D(t), {}, { signal: n }),
	allDesktopLoginLogs: async ({ signal: t } = {}) => e.fetchAll("user/desktop-login-logs", {}, { signal: t }),
	getTimeSpentsByDate: async (t, { signal: n } = {}) => I(e.get(`data/user/time-spents/${H(t)}`, {}, { signal: n })),
	getTaskTimeSpent: async (t, n, { signal: r } = {}) => {
		let i = D(t);
		return (await e.get(`data/user/time-spents/${H(n)}`, {}, { signal: r })).find((e) => e.task_id === i) || null;
	},
	getDayOff: async (t, { signal: n } = {}) => {
		let r = await e.get(`data/user/day-offs/${H(t)}`, {}, { signal: n });
		return r && r.id ? r : null;
	},
	allNotifications: async ({ after: t, before: n, type: r, taskType: i, taskStatus: a, read: o, watching: s, signal: c, ...l } = {}) => (N(l), e.fetchAll("user/notifications", {
		after: V(t),
		before: V(n),
		type: r,
		task_type_id: O(i),
		task_status_id: O(a),
		read: o,
		watching: s
	}, { signal: c })),
	getNotification: async (t, { signal: n } = {}) => e.fetchOne("user/notifications", D(t), { signal: n }),
	updateNotification: async (t, { signal: n } = {}) => e.update("user/notifications", D(t), t, { signal: n }),
	checkTaskSubscription: async (t, { signal: n } = {}) => e.get(`data/user/tasks/${D(t)}/subscribed`, {}, { signal: n }),
	subscribeToTask: async (t, { signal: n } = {}) => e.post(`actions/user/tasks/${D(t)}/subscribe`, {}, { signal: n }),
	unsubscribeFromTask: async (t, { signal: n } = {}) => e.del(`actions/user/tasks/${D(t)}/unsubscribe`, void 0, { signal: n }),
	allChats: async ({ signal: t } = {}) => e.fetchAll("user/chats", {}, { signal: t }),
	joinChat: async (t, { signal: n } = {}) => e.post(`actions/user/chats/${D(t)}/join`, {}, { signal: n }),
	leaveChat: async (t, { signal: n } = {}) => e.del(`actions/user/chats/${D(t)}/join`, void 0, { signal: n }),
	getChat: async (t, { signal: n } = {}) => I(e.get(`data/entities/${D(t)}/chat`, {}, { signal: n })),
	allChatMessages: async (t, { signal: n } = {}) => e.get(`data/entities/${D(t)}/chat/messages`, {}, { signal: n }),
	getChatMessage: async (t, n, { signal: r } = {}) => I(e.get(`data/entities/${D(t)}/chat/messages/${D(n)}`, {}, { signal: r })),
	newChatMessage: async (t, n, { attachments: r, fileName: i, onProgress: a, signal: o } = {}) => {
		let s = `data/entities/${D(t)}/chat/messages`, c = [].concat(r || []), l = { message: c.length > 0 && n === "" ? "" : A("message", n) };
		return c.length ? e.upload(s, {
			file: c,
			fileName: i,
			fields: l,
			onProgress: a,
			signal: o
		}) : e.post(s, l, { signal: o });
	},
	removeChatMessage: async (t, n, { signal: r } = {}) => e.del(`data/entities/${D(t)}/chat/messages/${D(n)}`, void 0, { signal: r }),
	getTasksRequiringFeedbackFilterValues: async ({ signal: t } = {}) => I(e.get("data/user/tasks-to-check/filter-values", {}, { signal: t })),
	subscribeToTasks: async (t, { signal: n } = {}) => e.post("actions/user/tasks/subscribe", { task_ids: k(t) }, { signal: n }),
	unsubscribeFromTasks: async (t, { signal: n } = {}) => e.post("actions/user/tasks/unsubscribe", { task_ids: k(t) }, { signal: n }),
	clearAvatar: async ({ signal: t } = {}) => e.del("actions/user/clear-avatar", void 0, { signal: t }),
	markAllNotificationsAsRead: async ({ signal: t } = {}) => e.post("actions/user/notifications/mark-all-as-read", {}, { signal: t })
}), Zn = (e, t) => {
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
}, Qn = (e, t, n) => Object.fromEntries(t.map((t, r) => [t, t === "tasks" ? e[r].map((e) => $n(e, n)) : e[r]])), $n = (e, t) => {
	let n = Qn(e, t);
	return {
		...n,
		assignees: n.assignees || []
	};
}, er = async (e) => {
	let t = null, n = null, r = [], i = (e) => {
		if (!e) return;
		if (!t) {
			t = JSON.parse(e);
			let r = Object.keys(t).find((e) => e.endsWith("_fields") && e !== "task_fields");
			n = t[r];
			return;
		}
		let i = JSON.parse(e);
		r.push(t.compact ? Qn(i, n, t.task_fields) : i);
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
}, tr = (e = {}) => {
	let t = new URLSearchParams();
	return Object.entries(e).forEach(([e, n]) => {
		n != null && n !== "" && (Array.isArray(n) ? n.forEach((n) => t.append(e, n)) : t.append(e, n));
	}), t.toString();
}, nr = (e, t, n) => {
	let r = `${e.replace(/\/+$/, "")}/${t.replace(/^\/+/, "")}`, i = tr(n);
	return i ? `${r}?${i}` : r;
}, rr = ({ file: e, fields: t = {}, fileField: n = "file", fileName: r }) => {
	let i = new FormData();
	Object.entries(t).forEach(([e, t]) => {
		t != null && i.append(e, typeof t == "object" ? JSON.stringify(t) : t);
	});
	let a = Array.isArray(e) ? e : [e];
	if (!a.length || !a.every((e) => e instanceof Blob)) throw new w("Missing parameter: file must be a Blob or a File");
	return a.forEach((e, t) => {
		let a = t === 0 ? n : `${n}-${t}`;
		r && t === 0 ? i.append(a, e, r) : i.append(a, e);
	}), i;
}, ir = (e) => {
	try {
		return e ? JSON.parse(e) : null;
	} catch {
		return e;
	}
}, ar = (e, t) => {
	let { status: n, responseText: r } = e;
	if (n < 200 || n >= 300) throw Ie(n, {
		...t,
		body: ir(r) || ""
	});
	let { data: i, isJson: a } = Zn(r, e.getResponseHeader("Content-Type") || "");
	if (!a) throw new C(`${t.method} ${t.path} answered ${n} without JSON`, {
		...t,
		status: n,
		body: i
	});
	return i;
}, or = () => new DOMException("The operation was aborted", "AbortError"), sr = (e) => {
	let t = globalThis.location;
	return !!(t && t.origin) && new URL(e, t.href).origin === t.origin;
}, cr = ({ url: e, form: t, headers: n, onProgress: r, signal: i, withCredentials: a, info: o }) => new Promise((s, c) => {
	if (i.aborted) {
		c(or());
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
			d(s, ar(l, o));
		} catch (e) {
			d(c, e);
		}
	}, l.onerror = () => d(c, new ke(`POST ${o.path} failed`, o)), l.onabort = () => d(c, or()), i.addEventListener("abort", u), l.send(t);
}), lr = ({ host: e, request: t, withAuthReplay: n, track: r, withCredentials: i, xhrUploads: a }) => async (o, s) => {
	let c = rr(s), { query: l, onProgress: u, signal: d } = s, f = nr(e, o, l);
	return a !== "all" && (a !== "progress" || !u) || globalThis.XMLHttpRequest === void 0 || !i && sr(f) ? t("POST", o, {
		body: c,
		query: l,
		signal: d
	}) : n((e) => {
		let t = r(d);
		return cr({
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
}, ur = (e) => typeof FormData < "u" && e instanceof FormData, dr = (e) => e == null ? {} : ur(e) ? { body: e } : {
	body: JSON.stringify(e),
	headers: { "Content-Type": "application/json" }
}, fr = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e)) throw new w("Wrong format: expected an object of the fields to update");
	return "id" in e ? Object.fromEntries(Object.entries(e).filter(([e]) => e !== "id")) : e;
}, pr = async (e) => Zn(e.status === 204 ? "" : await e.text(), e.headers.get("Content-Type") || ""), mr = (e, t, n, r, i) => Object.assign(new C(`${e.method} ${e.path} answered ${t} ${n}`, {
	...e,
	status: t,
	body: r
}), i && { cause: i }), hr = (e) => {
	if (typeof e?.message != "string") return String(e);
	let t = e.cause?.message;
	return typeof t == "string" ? `${e.message}: ${t}` : e.message;
}, gr = (e) => {
	let t = (e.headers.get("Retry-After") || "").trim();
	if (/^\d+$/.test(t)) return Number(t);
	let n = Date.parse(t);
	return Number.isNaN(n) ? null : Math.max(0, Math.ceil((n - Date.now()) / 1e3));
}, _r = (e, t) => {
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
}, vr = () => new DOMException("The operation was aborted", "AbortError"), yr = (e, t) => t ? new Promise((n, r) => {
	let i = () => r(vr());
	t.aborted ? i() : t.addEventListener("abort", i, { once: !0 }), e.then(n, r).finally(() => t.removeEventListener("abort", i));
}) : e, br = Symbol("not streamed"), xr = (e) => e instanceof T || e instanceof C && e.status >= 400 && e.status < 500, Sr = (e, t) => {
	let { host: n, fetch: r, timeout: i, credentials: a, xhrUploads: o } = e, s = /* @__PURE__ */ new Set(), c = async (e, t, o = {}) => {
		let { query: c, body: l, headers: u = {}, signal: d, raw: f = !1, read: p } = o, m = nr(n, t, c), h = dr(l), g = {
			path: t,
			method: e
		}, _ = new AbortController(), v = () => _.abort(), y = !1, ee = () => {
			y = !0, _.abort();
		}, te = (e) => Number.isFinite(e) ? setTimeout(ee, e) : null, ne = () => {
			s.delete(_), d && d.removeEventListener("abort", v);
		};
		s.add(_), d && (d.aborted ? _.abort() : d.addEventListener("abort", v));
		let re = !f && !ur(l), ie = ur(l) ? null : te(i.response), ae = re ? te(i.deadline) : null, b = !1, oe = null;
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
			if (clearTimeout(ie), oe = n.status, !n.ok) {
				let { data: e } = await pr(n).catch(() => ({ data: "" }));
				throw Ie(n.status, {
					...g,
					body: e || "",
					retryAfter: gr(n)
				});
			}
			if (f && n.status === 202) {
				let { data: r } = await pr(n).catch(() => ({ data: "" }));
				throw new C(`${e} ${t} answered 202: the file is not ready yet`, {
					...g,
					status: 202,
					body: r || "",
					retryAfter: gr(n)
				});
			}
			if (f && n.body) return b = !0, _.signal.addEventListener("abort", ne, { once: !0 }), _r(n, ne);
			if (f) return n;
			if (p) {
				if ((n.headers.get("Content-Type") || "").includes("text/html")) {
					let e = await n.text();
					throw mr(g, n.status, "with an HTML page", e);
				}
				return await p(n);
			}
			let { data: i, isJson: o, error: s } = await pr(n);
			if (!o) {
				let e = s ? "with malformed JSON" : "without JSON";
				throw mr(g, n.status, e, i, s);
			}
			return i;
		} catch (n) {
			throw y ? new Ae(`${e} ${t} timed out`, g) : _.signal.aborted ? n?.name === "AbortError" ? n : vr() : n instanceof C ? n : n instanceof SyntaxError ? mr(g, oe, "with a malformed body", "", n) : Object.assign(new ke(`${e} ${t} failed: ${hr(n)}`, g), { cause: n });
		} finally {
			clearTimeout(ie), clearTimeout(ae), b || ne();
		}
	}, l = async (e, n) => {
		let r = t.generation(), i = t.headers(), a = () => t.generation() !== r;
		try {
			return await e(i);
		} catch (r) {
			if (!(r instanceof T) || a()) throw r;
			if (t.headers().Authorization === i.Authorization) {
				let e = t.canRefresh() ? await yr(t.refresh(c), n).then(() => null, (e) => e) : r;
				if (n?.aborted) throw vr();
				if (a()) throw r;
				if (e && !xr(e)) throw e;
				if (e) throw t.onUnauthorized(), r;
			}
			try {
				return await e(t.headers());
			} catch (e) {
				throw e instanceof T && !a() && t.onUnauthorized(), e;
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
	}), h = async (e) => (e.headers.get("Content-Type") || "").includes("ndjson") ? er(e) : (e.body && await e.body.cancel(), br);
	return {
		host: n,
		send: c,
		request: u,
		withAuthReplay: l,
		upload: lr({
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
				if (r !== br) return r;
			} catch (e) {
				if (!(e instanceof C && e.status && !(e instanceof T))) throw e;
			}
			return d(e, t, n);
		},
		post: f,
		put: p,
		del: m,
		fetchAll: (e, t, n) => d(`data/${e}`, t, n),
		fetchFirst: (e, t, n) => I(d(`data/${e}`, t, n)).then((e) => Array.isArray(e) && e.length > 0 ? e[0] : null),
		fetchOne: (e, t, n) => I(d(`data/${e}/${t}`, {}, n)),
		create: (e, t, n) => f(`data/${e}`, t, n),
		update: async (e, t, n, r) => p(`data/${e}/${t}`, fr(n), r),
		remove: (e, t, n, r) => u("DELETE", `data/${e}/${t}`, {
			...r,
			query: n
		}),
		abortAll: () => s.forEach((e) => e.abort())
	};
}, Cr = [
	400,
	401,
	409
], wr = ({ totp: e, emailOtp: t, recoveryCode: n, fidoAuthenticationResponse: r }) => M({
	totp: e,
	email_otp: t,
	recovery_code: n,
	fido_authentication_response: r
}), Tr = (e, t) => {
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
		return i = o.then(() => {}, () => {}), yr(o, n);
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
			if (!(t instanceof T) || !n) throw t;
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
				throw e instanceof C && Cr.includes(e.status) ? Re(e) : e;
			});
			if (t.mode === "bearer" && (typeof p?.access_token != "string" || !p.access_token)) throw new E("Login returned no access token", {
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
			if (e instanceof T) return !1;
			throw e;
		}),
		getConfig: async ({ signal: t } = {}) => e.get("config", {}, {
			skipAuth: !0,
			signal: t
		}),
		changePassword: async (t, n, r = {}) => {
			if (typeof r == "string") throw new w("changePassword: the third argument is the options, compare the confirmation before the call");
			let { signal: i } = r;
			return e.post("auth/change-password", {
				old_password: A("oldPassword", t),
				password: A("password", n),
				password_2: n
			}, { signal: i });
		},
		preEnableTotp: async ({ signal: t } = {}) => e.put("auth/totp", {}, { signal: t }),
		enableTotp: async (e, { signal: t } = {}) => s("auth/totp", { totp: A("totp", e) }, t),
		disableTotp: async ({ signal: t, ...n } = {}) => e.del("auth/totp", wr(n), { signal: t }),
		sendEmailOtp: async (t, { signal: n } = {}) => e.get("auth/email-otp", { email: A("email", t) }, {
			skipAuth: !0,
			signal: n
		}),
		preEnableEmailOtp: async ({ signal: t } = {}) => e.put("auth/email-otp", {}, { signal: t }),
		enableEmailOtp: async (e, { signal: t } = {}) => s("auth/email-otp", { email_otp: A("emailOtp", e) }, t),
		disableEmailOtp: async ({ signal: t, ...n } = {}) => e.del("auth/email-otp", wr(n), { signal: t }),
		preRegisterFido: async ({ signal: t } = {}) => e.put("auth/fido", {}, { signal: t }),
		registerFido: async (e, t, { signal: n } = {}) => s("auth/fido", {
			registration_response: A("registrationResponse", e),
			device_name: A("deviceName", t)
		}, n),
		getFidoChallenge: async (t, { signal: n } = {}) => e.get("auth/fido", { email: A("email", t) }, {
			skipAuth: !0,
			signal: n
		}),
		unregisterFido: async (t, { signal: n, ...r } = {}) => e.del("auth/fido", {
			device_name: A("deviceName", t),
			...wr(r)
		}, { signal: n }),
		newRecoveryCodes: async ({ signal: t, ...n } = {}) => e.put("auth/recovery-codes", wr(n), { signal: t }).then((e) => e.otp_recovery_codes)
	};
}, Er = "io server disconnect", Dr = async () => {
	let e = await import(
		/* webpackIgnore: true */
		/* @vite-ignore */
		"socket.io-client"
);
	return e.io || e.default;
}, Or = (e) => {
	setTimeout(() => {
		throw e;
	});
}, kr = (e, t) => {
	if (typeof t == "function") return t;
	throw new w(`${e}: the handler must be a function`);
}, Ar = (e) => e instanceof T || e instanceof C && e.status >= 400 && e.status < 500, jr = ({ eventHost: e, session: t, io: n, probe: r = async () => {}, loadIo: i = Dr }) => {
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
			Or(e);
		}
	}, g = (e, ...t) => [...e].forEach((e) => h(e, t)), _ = (e, n) => {
		let r = n.Authorization;
		e.io.on("reconnect_attempt", () => {
			let n = t.headers();
			e.io.opts.extraHeaders = n, r = n.Authorization;
		}), e.on("connect", () => {
			p = null, g(o.connect);
		}), e.on("disconnect", (n) => {
			l === e && n === Er && (l = null, t.headers().Authorization === r ? ee() : y()), g(o.disconnect, n);
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
			Or(e);
		}
	}, ee = () => {
		let e = t.generation();
		d && p !== e && t.canRefresh() && (p = e, r().catch((t) => {
			!Ar(t) && p === e && (p = null);
		}));
	}, te = () => {
		let e = l;
		l = null, e && e.disconnect();
	}, ne = async () => {
		d = !0, f = !1, await m(), d && !l && v();
	}, re = (e, t) => (e.add(t), () => {
		e.delete(t);
	});
	return {
		on: async (e, t) => {
			if (typeof e != "string" || !e) throw new w("events.on: the event name is required");
			let n = kr("events.on", t), r = {
				name: e,
				relay: (...e) => h(n, e)
			}, i = () => {
				a.delete(r) && l && l.off(e, r.relay);
			};
			a.add(r), l && l.on(e, r.relay);
			try {
				await ne();
			} catch (e) {
				throw i(), e;
			}
			return i;
		},
		onConnect: (e) => re(o.connect, kr("events.onConnect", e)),
		onDisconnect: (e) => re(o.disconnect, kr("events.onDisconnect", e)),
		onConnectError: (e) => re(o.connectError, kr("events.onConnectError", e)),
		disconnect: () => {
			d = !1, te();
		},
		syncSession: () => {
			l && u !== t.generation() && te(), l || y();
		}
	};
}, Mr = (e) => e ? { ...e } : null, Nr = ({ auth: e = "bearer", tokens: t = null, onChange: n = () => {}, onTokensChange: r = () => {}, onUnauthorized: i = () => {} } = {}) => {
	let a = Mr(t), o = null, s = 0, c = !1, l = (e) => {
		a = Mr(e);
		try {
			n();
		} finally {
			r(Mr(a));
		}
	}, u = () => {
		s += 1, o = null;
	};
	return {
		mode: e,
		getTokens: () => Mr(a),
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
					if (typeof i != "string" || !i) throw new T("Token refresh returned no access token", {
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
}, Pr = {
	response: 6e4,
	deadline: 3e5
}, Fr = 2147483647, Ir = (e, t) => {
	if (t == null) return Pr[e];
	if (typeof t != "number" || Number.isNaN(t) || t < 0) throw TypeError(`createClient: timeout.${e} must be a number of milliseconds`);
	return t === 0 || t > Fr ? Infinity : t;
}, Lr = ({ xhrUploads: e, fetch: t }) => e === !0 ? "all" : e === !1 || t ? "none" : "progress", Rr = (e = {}) => Object.freeze({
	response: Ir("response", e.response),
	deadline: Ir("deadline", e.deadline)
}), zr = (e) => e ? (...t) => {
	try {
		e(...t);
	} catch (e) {
		Or(e);
	}
} : void 0, Br = {
	fetch: "function",
	xhrUploads: "boolean",
	onTokensChange: "function",
	onUnauthorized: "function",
	eventHost: "string"
}, Vr = (e) => {
	if (typeof e.host != "string") throw TypeError("createClient: host must be a string");
	if (![
		"bearer",
		"cookie",
		void 0,
		null
	].includes(e.auth)) throw TypeError("createClient: auth must be \"bearer\" or \"cookie\"");
	let { timeout: t } = e;
	if (t != null && typeof t != "object") throw TypeError("createClient: timeout must be an object: { response, deadline }");
	Object.entries(Br).forEach(([t, n]) => {
		let r = e[t];
		if (r != null && typeof r !== n) throw TypeError(`createClient: ${t} must be a ${n}`);
	});
}, Hr = (e) => {
	if (!e || !e.host) throw TypeError("createClient: host is required");
	Vr(e);
	let t = e.auth || "bearer", n = Object.freeze({
		host: e.host,
		fetch: e.fetch || ((e, t) => globalThis.fetch(e, t)),
		xhrUploads: Lr(e),
		timeout: Rr(e.timeout || void 0),
		credentials: t === "cookie" ? "same-origin" : "omit"
	}), r = Nr({
		auth: t,
		tokens: e.tokens,
		onChange: () => a(),
		onTokensChange: zr(e.onTokensChange),
		onUnauthorized: zr(e.onUnauthorized)
	}), i = Sr(n, r), { syncSession: a, ...o } = jr({
		eventHost: (e.eventHost || n.host.replace(/\/+$/, "").replace(/\/api$/, "")).replace(/\/+$/, ""),
		session: r,
		io: e.io,
		probe: () => i.get("auth/authenticated")
	}), { abortTurns: s, ...c } = Tr(i, r);
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
}, Ur = (e) => {
	let t = Hr(e), { http: n } = t;
	return Object.freeze({
		...t,
		asset: ft(n),
		casting: gt(n),
		concept: _t(n),
		customAction: vt(n),
		edit: bt(n),
		entity: xt(n),
		event: wt(n),
		files: At(n),
		hardware: jt(n),
		news: Mt(n),
		person: Wt(n),
		playlist: nn(n),
		project: yn(n),
		projectTemplate: wn(n),
		scene: Tn(n),
		schedule: An(n),
		search: Mn(n),
		shot: Ln(n),
		studio: Rn(n),
		task: Jn(n),
		user: Xn(n)
	});
}, Wr = (e) => `/plugins/${e}/tickets`, $ = (e) => typeof e == "string" && e.length > 0 ? e : null, Gr = (e) => {
	let t = $(e);
	return t && t !== "all" ? t : null;
}, Kr = (e) => ({
	title: typeof e.title == "string" ? e.title : "",
	text: typeof e.text == "string" ? e.text : "",
	status: $(e.status) || "open",
	task_id: $(e.task_id),
	assignee_id: $(e.assignee_id),
	project_id: $(e.project_id),
	episode_id: Gr(e.episode_id)
}), qr = null, Jr = () => (qr || (qr = Ur({
	host: "/api",
	auth: "cookie"
})), qr), Yr = () => {
	let e = le(), { http: t } = Jr(), n = () => Wr(e.value?.pluginId ?? "");
	return {
		fetchTickets: (e, r) => {
			let i = {};
			e && (i.production_id = e);
			let a = Gr(r);
			return a && (i.episode_id = a), t.get(n(), i, {});
		},
		getTicket: (e) => t.get(`${n()}/${e}`, void 0, {}),
		createTicket: (e) => t.post(n(), Kr(e), {}),
		updateTicket: (e, r) => t.put(`${n()}/${e}`, Kr(r), {}),
		deleteTicket: (e) => t.del(`${n()}/${e}`, void 0, {})
	};
}, Xr = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Zr = (e) => typeof e == "string" && e.length > 0 ? e : null, Qr = () => {
	let e = se(), t = le(), n = r(() => Zr(e.params.production_id) ?? Zr(t.value?.productionId)), i = r(() => Zr(e.params.episode_id) ?? Zr(t.value?.episodeId));
	return {
		productionId: n,
		episodeId: r(() => Gr(i.value))
	};
};
//#endregion
export { te as A, m as C, v as D, _ as E, re as M, ie as N, y as O, p as S, g as T, s as _, Ce as a, u as b, de as c, ce as d, n as f, o as g, a as h, Yr as i, ne as j, ee as k, oe as l, i as m, Xr as n, we as o, r as p, Gr as r, be as s, Qr as t, se as u, c as v, h as w, f as x, l as y };

//# sourceMappingURL=useTicketsScope-n5nu5bJk.js.map