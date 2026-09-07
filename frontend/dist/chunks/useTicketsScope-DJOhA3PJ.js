//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, i = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, a = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), o = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, s = (i, a, o, s) => {
	if (a && typeof a == "object" || typeof a == "function") for (var c = n(a), l = 0, u = c.length, d; l < u; l++) d = c[l], !r.call(i, d) && d !== o && e(i, d, {
		get: ((e) => a[e]).bind(null, d),
		enumerable: !(s = t(a, d)) || s.enumerable
	});
	return i;
}, c = (t) => r.call(t, "module.exports") ? t["module.exports"] : s(e({}, "__esModule", { value: !0 }), t), l = globalThis.__KITSU_SHARED__;
if (!l) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var u = l.modules.vue;
if (!u) throw Error("Kitsu plugin: the host does not share vue.");
u.default, u.BaseTransition, u.BaseTransitionPropsValidators, u.Comment, u.DeprecationTypes, u.EffectScope, u.ErrorCodes, u.ErrorTypeStrings;
var d = u.Fragment;
u.KeepAlive, u.ReactiveEffect, u.Static, u.Suspense, u.Teleport, u.Text, u.TrackOpTypes, u.Transition, u.TransitionGroup, u.TriggerOpTypes, u.VueElement, u.__esModule, u.assertNumber, u.callWithAsyncErrorHandling, u.callWithErrorHandling, u.camelize, u.capitalize, u.cloneVNode, u.compatUtils, u.compile;
var f = u.computed;
u.createApp;
var p = u.createBlock, m = u.createCommentVNode, h = u.createElementBlock, g = u.createElementVNode;
u.createHydrationRenderer, u.createPropsRestProxy, u.createRenderer, u.createSSRApp, u.createSlots, u.createStaticVNode;
var _ = u.createTextVNode, v = u.createVNode;
u.customRef, u.defineAsyncComponent;
var y = u.defineComponent;
u.defineCustomElement, u.defineEmits, u.defineExpose, u.defineModel, u.defineOptions, u.defineProps, u.defineSSRCustomElement, u.defineSlots, u.devtools, u.effect, u.effectScope, u.getCurrentInstance, u.getCurrentScope, u.getCurrentWatcher, u.getTransitionRawChildren, u.guardReactiveProps;
var b = u.h;
u.handleError, u.hasInjectionContext, u.hydrate, u.hydrateOnIdle, u.hydrateOnInteraction, u.hydrateOnMediaQuery, u.hydrateOnVisible, u.initCustomFormatter, u.initDirectivesForSSR, u.inject, u.isMemoSame, u.isProxy, u.isReactive, u.isReadonly, u.isRef, u.isRuntimeOnly, u.isShallow, u.isVNode, u.markRaw, u.mergeDefaults, u.mergeModels, u.mergeProps, u.nextTick, u.nodeOps;
var x = u.normalizeClass;
u.normalizeProps, u.normalizeStyle, u.onActivated, u.onBeforeMount, u.onBeforeUnmount, u.onBeforeUpdate, u.onDeactivated, u.onErrorCaptured;
var S = u.onMounted;
u.onRenderTracked, u.onRenderTriggered, u.onScopeDispose, u.onServerPrefetch, u.onUnmounted, u.onUpdated, u.onWatcherCleanup;
var C = u.openBlock;
u.patchProp, u.popScopeId, u.provide, u.proxyRefs, u.pushScopeId, u.queuePostFlushCb, u.reactive, u.readonly;
var w = u.ref;
u.registerRuntimeCompiler, u.render;
var T = u.renderList;
u.renderSlot, u.resolveComponent, u.resolveDirective, u.resolveDynamicComponent, u.resolveFilter, u.resolveTransitionHooks, u.setBlockTracking, u.setDevtoolsHook, u.setTransitionHooks, u.shallowReactive, u.shallowReadonly, u.shallowRef, u.ssrContextKey, u.ssrUtils, u.stop;
var E = u.toDisplayString;
u.toHandlerKey, u.toHandlers, u.toRaw, u.toRef, u.toRefs, u.toValue, u.transformVNodeArgs, u.triggerRef;
var D = u.unref;
u.useAttrs, u.useCssModule, u.useCssVars, u.useHost, u.useId, u.useModel, u.useSSRContext, u.useShadowRoot, u.useSlots, u.useTemplateRef, u.useTransitionState, u.vModelCheckbox, u.vModelDynamic, u.vModelRadio;
var O = u.vModelSelect, k = u.vModelText;
u.vShow, u.version, u.warn;
var ee = u.watch;
u.watchEffect, u.watchPostEffect, u.watchSyncEffect, u.withAsyncContext;
var te = u.withCtx;
u.withDefaults;
var ne = u.withDirectives;
u.withKeys, u.withMemo;
var re = u.withModifiers;
u.withScopeId;
//#endregion
//#region \0kitsu-shared:vue-router
var ie = globalThis.__KITSU_SHARED__;
if (!ie) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var A = ie.modules["vue-router"];
if (!A) throw Error("Kitsu plugin: the host does not share vue-router.");
A.default, A.NavigationFailureType;
var ae = A.RouterLink;
A.RouterView, A.START_LOCATION, A.createMemoryHistory, A.createRouter, A.createRouterMatcher, A.createWebHashHistory, A.createWebHistory, A.isNavigationFailure, A.loadRouteLocation, A.matchedRouteKey, A.onBeforeRouteLeave, A.onBeforeRouteUpdate, A.parseQuery, A.routeLocationKey, A.routerKey, A.routerViewLocationKey, A.stringifyQuery, A.useLink;
var oe = A.useRoute, se = A.useRouter;
A.viewDepthKey;
//#endregion
//#region ../../../packages/kitsu-plugin-kit/dist/context-BaodsMri.js
var ce = () => {
	let e = oe();
	return f(() => e.meta.kitsuPlugin ?? null);
}, le = globalThis.__KITSU_SHARED__;
if (!le) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var j = le.modules["vue-i18n"];
if (!j) throw Error("Kitsu plugin: the host does not share vue-i18n.");
j.default, j.DatetimeFormat, j.I18nD, j.I18nInjectionKey, j.I18nN, j.I18nT, j.NumberFormat, j.Translation, j.VERSION, j.castToVueI18n, j.createI18n;
var ue = j.useI18n;
j.vTDirective;
//#endregion
//#region ../../../node_modules/.pnpm/lucide-vue-next@0.525.0_vue@3.5.41_typescript@6.0.3_/node_modules/lucide-vue-next/dist/esm/shared/src/utils.js
var de = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fe = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), pe = (e) => {
	let t = fe(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, me = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), M = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, he = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: r, iconNode: i, name: a, class: o, ...s }, { slots: c }) => b("svg", {
	...M,
	width: e || M.width,
	height: e || M.height,
	stroke: r || M.stroke,
	"stroke-width": n ? Number(t) * 24 / Number(e) : t,
	class: me("lucide", ...a ? [`lucide-${de(pe(a))}-icon`, `lucide-${de(a)}`] : ["lucide-icon"]),
	...s
}, [...i.map((e) => b(...e)), ...c.default ? [c.default()] : []]), ge = (e, t) => (n, { slots: r }) => b(he, {
	...n,
	iconNode: t,
	name: e
}, r), _e = globalThis.__KITSU_SHARED__;
if (!_e) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var N = _e.modules.vuex;
if (!N) throw Error("Kitsu plugin: the host does not share vuex.");
N.default, N.Store, N.createLogger, N.createNamespacedHelpers, N.createStore, N.install, N.mapActions, N.mapGetters, N.mapMutations, N.mapState, N.storeKey;
var ve = N.useStore;
N.version;
//#endregion
//#region src/composables/useHostCatalogs.ts
var ye = (e) => e?.parent_id || e?.episode_id || null, be = () => {
	let e = ve(), t = f(() => e.getters.openProductions ?? []), n = f(() => (e.getters.people ?? []).map((e) => ({
		id: e.id,
		full_name: e.full_name || e.name || e.id
	}))), r = f(() => {
		let t = {};
		e.getters.episodeMap?.forEach?.((e, n) => {
			e?.name && (t[n] = e.name);
		});
		for (let n of e.getters.episodes ?? []) n?.id && n?.name && (t[n.id] = n.name);
		let n = e.getters.currentEpisode;
		return n?.id && n?.name && !["all", "main"].includes(n.id) && (t[n.id] = n.name), t;
	}), i = async () => {
		let r = [];
		t.value.length || r.push(e.dispatch("loadOpenProductions").catch(() => void 0)), n.value.length || r.push(e.dispatch("loadPeople").catch(() => void 0)), e.getters.taskTypes?.length || r.push(e.dispatch("loadTaskTypes").catch(() => void 0)), await Promise.all(r);
	}, a = (n) => e.getters.productionMap?.get?.(n) ?? t.value.find((e) => e.id === n) ?? null, o = async (t) => (e.getters.productionMap?.get?.(t) || await e.dispatch("loadProduction", t).catch(() => void 0), e.getters.currentProduction?.id !== t && await e.dispatch("setProduction", t), a(t)), s = (t) => {
		if (t) {
			let n = e.getters.getProductionTaskTypes?.(t);
			if (n?.length) return n;
		}
		return e.getters.taskTypes ?? [];
	}, c = (t) => e.getters.currentProduction?.id === t && e.getters.productionAssetTypes?.length ? e.getters.productionAssetTypes : e.getters.assetTypes ?? [];
	return {
		openProductions: t,
		people: n,
		episodeNameById: r,
		ensureHostCatalogs: i,
		ensureProduction: o,
		taskTypesFor: s,
		loadEpisodes: () => e.dispatch("loadEpisodes").catch(() => void 0),
		loadEntityCatalogs: async (t) => {
			await o(t);
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
			let a = e.getters.sequences ?? [], s = i.length > 0 ? i : a.map((e) => ({
				...e,
				parent_id: ye(e)
			}));
			return {
				assetTypes: c(t),
				assets: (e.getters.assets ?? []).map((e) => ({
					id: e.id,
					name: e.name,
					entity_type_id: e.entity_type_id || e.asset_type_id
				})),
				shots: e.getters.shots ?? [],
				sequences: s,
				episodes: e.getters.episodes ?? [],
				edits: e.getters.edits ?? []
			};
		},
		getCachedTask: (t) => e.getters.taskMap?.get?.(t),
		loadTask: (t) => e.dispatch("loadTask", { taskId: t }),
		loadTasksForEntity: (t) => e.dispatch("loadTasks", { entity_id: t })
	};
}, xe = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		return function() {
			for (var n = Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
			return e.apply(t, n);
		};
	};
})), P = /* @__PURE__ */ a(((e, t) => {
	var n = xe(), r = Object.prototype.toString;
	function i(e) {
		return r.call(e) === "[object Array]";
	}
	function a(e) {
		return e === void 0;
	}
	function o(e) {
		return e !== null && !a(e) && e.constructor !== null && !a(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
	}
	function s(e) {
		return r.call(e) === "[object ArrayBuffer]";
	}
	function c(e) {
		return typeof FormData < "u" && e instanceof FormData;
	}
	function l(e) {
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
	}
	function u(e) {
		return typeof e == "string";
	}
	function d(e) {
		return typeof e == "number";
	}
	function f(e) {
		return typeof e == "object" && !!e;
	}
	function p(e) {
		if (r.call(e) !== "[object Object]") return !1;
		var t = Object.getPrototypeOf(e);
		return t === null || t === Object.prototype;
	}
	function m(e) {
		return r.call(e) === "[object Date]";
	}
	function h(e) {
		return r.call(e) === "[object File]";
	}
	function g(e) {
		return r.call(e) === "[object Blob]";
	}
	function _(e) {
		return r.call(e) === "[object Function]";
	}
	function v(e) {
		return f(e) && _(e.pipe);
	}
	function y(e) {
		return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
	}
	function b(e) {
		return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
	}
	function x() {
		return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
	}
	function S(e, t) {
		if (e != null) {
			if (typeof e != "object" && (e = [e]), i(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
			else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e);
		}
	}
	function C() {
		var e = {};
		function t(t, n) {
			e[n] = p(e[n]) && p(t) ? C(e[n], t) : p(t) ? C({}, t) : i(t) ? t.slice() : t;
		}
		for (var n = 0, r = arguments.length; n < r; n++) S(arguments[n], t);
		return e;
	}
	function w(e, t, r) {
		return S(t, function(t, i) {
			e[i] = r && typeof t == "function" ? n(t, r) : t;
		}), e;
	}
	function T(e) {
		return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
	}
	t.exports = {
		isArray: i,
		isArrayBuffer: s,
		isBuffer: o,
		isFormData: c,
		isArrayBufferView: l,
		isString: u,
		isNumber: d,
		isObject: f,
		isPlainObject: p,
		isUndefined: a,
		isDate: m,
		isFile: h,
		isBlob: g,
		isFunction: _,
		isStream: v,
		isURLSearchParams: y,
		isStandardBrowserEnv: x,
		forEach: S,
		merge: C,
		extend: w,
		trim: b,
		stripBOM: T
	};
})), Se = /* @__PURE__ */ a(((e, t) => {
	var n = P();
	function r(e) {
		return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
	}
	t.exports = function(e, t, i) {
		if (!t) return e;
		var a;
		if (i) a = i(t);
		else if (n.isURLSearchParams(t)) a = t.toString();
		else {
			var o = [];
			n.forEach(t, function(e, t) {
				e != null && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function(e) {
					n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), o.push(r(t) + "=" + r(e));
				}));
			}), a = o.join("&");
		}
		if (a) {
			var s = e.indexOf("#");
			s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
		}
		return e;
	};
})), Ce = /* @__PURE__ */ a(((e, t) => {
	var n = P();
	function r() {
		this.handlers = [];
	}
	r.prototype.use = function(e, t, n) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}), this.handlers.length - 1;
	}, r.prototype.eject = function(e) {
		this.handlers[e] && (this.handlers[e] = null);
	}, r.prototype.forEach = function(e) {
		n.forEach(this.handlers, function(t) {
			t !== null && e(t);
		});
	}, t.exports = r;
})), we = /* @__PURE__ */ a(((e, t) => {
	var n = P();
	t.exports = function(e, t) {
		n.forEach(e, function(n, r) {
			r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
		});
	};
})), Te = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i) {
		return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: this.config,
				code: this.code
			};
		}, e;
	};
})), Ee = /* @__PURE__ */ a(((e, t) => {
	var n = Te();
	t.exports = function(e, t, r, i, a) {
		return n(Error(e), t, r, i, a);
	};
})), De = /* @__PURE__ */ a(((e, t) => {
	var n = Ee();
	t.exports = function(e, t, r) {
		var i = r.config.validateStatus;
		!r.status || !i || i(r.status) ? e(r) : t(n("Request failed with status code " + r.status, r.config, null, r.request, r));
	};
})), Oe = /* @__PURE__ */ a(((e, t) => {
	var n = P();
	t.exports = n.isStandardBrowserEnv() ? (function() {
		return {
			write: function(e, t, r, i, a, o) {
				var s = [];
				s.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(i) && s.push("path=" + i), n.isString(a) && s.push("domain=" + a), o === !0 && s.push("secure"), document.cookie = s.join("; ");
			},
			read: function(e) {
				var t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
				return t ? decodeURIComponent(t[3]) : null;
			},
			remove: function(e) {
				this.write(e, "", Date.now() - 864e5);
			}
		};
	})() : (function() {
		return {
			write: function() {},
			read: function() {
				return null;
			},
			remove: function() {}
		};
	})();
})), ke = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
	};
})), Ae = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
	};
})), je = /* @__PURE__ */ a(((e, t) => {
	var n = ke(), r = Ae();
	t.exports = function(e, t) {
		return e && !n(t) ? r(e, t) : t;
	};
})), Me = /* @__PURE__ */ a(((e, t) => {
	var n = P(), r = [
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent"
	];
	t.exports = function(e) {
		var t = {}, i, a, o;
		return e && n.forEach(e.split("\n"), function(e) {
			if (o = e.indexOf(":"), i = n.trim(e.substr(0, o)).toLowerCase(), a = n.trim(e.substr(o + 1)), i) {
				if (t[i] && r.indexOf(i) >= 0) return;
				i === "set-cookie" ? t[i] = (t[i] ? t[i] : []).concat([a]) : t[i] = t[i] ? t[i] + ", " + a : a;
			}
		}), t;
	};
})), Ne = /* @__PURE__ */ a(((e, t) => {
	var n = P();
	t.exports = n.isStandardBrowserEnv() ? (function() {
		var e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a"), r;
		function i(n) {
			var r = n;
			return e && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
				href: t.href,
				protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
				host: t.host,
				search: t.search ? t.search.replace(/^\?/, "") : "",
				hash: t.hash ? t.hash.replace(/^#/, "") : "",
				hostname: t.hostname,
				port: t.port,
				pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
			};
		}
		return r = i(window.location.href), function(e) {
			var t = n.isString(e) ? i(e) : e;
			return t.protocol === r.protocol && t.host === r.host;
		};
	})() : (function() {
		return function() {
			return !0;
		};
	})();
})), Pe = /* @__PURE__ */ a(((e, t) => {
	var n = P(), r = De(), i = Oe(), a = Se(), o = je(), s = Me(), c = Ne(), l = Ee();
	t.exports = function(e) {
		return new Promise(function(t, u) {
			var d = e.data, f = e.headers, p = e.responseType;
			n.isFormData(d) && delete f["Content-Type"];
			var m = new XMLHttpRequest();
			if (e.auth) {
				var h = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
				f.Authorization = "Basic " + btoa(h + ":" + g);
			}
			var _ = o(e.baseURL, e.url);
			m.open(e.method.toUpperCase(), a(_, e.params, e.paramsSerializer), !0), m.timeout = e.timeout;
			function v() {
				if (m) {
					var n = "getAllResponseHeaders" in m ? s(m.getAllResponseHeaders()) : null;
					r(t, u, {
						data: !p || p === "text" || p === "json" ? m.responseText : m.response,
						status: m.status,
						statusText: m.statusText,
						headers: n,
						config: e,
						request: m
					}), m = null;
				}
			}
			if ("onloadend" in m ? m.onloadend = v : m.onreadystatechange = function() {
				!m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(v);
			}, m.onabort = function() {
				m && (u(l("Request aborted", e, "ECONNABORTED", m)), m = null);
			}, m.onerror = function() {
				u(l("Network Error", e, null, m)), m = null;
			}, m.ontimeout = function() {
				var t = "timeout of " + e.timeout + "ms exceeded";
				e.timeoutErrorMessage && (t = e.timeoutErrorMessage), u(l(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", m)), m = null;
			}, n.isStandardBrowserEnv()) {
				var y = (e.withCredentials || c(_)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
				y && (f[e.xsrfHeaderName] = y);
			}
			"setRequestHeader" in m && n.forEach(f, function(e, t) {
				d === void 0 && t.toLowerCase() === "content-type" ? delete f[t] : m.setRequestHeader(t, e);
			}), n.isUndefined(e.withCredentials) || (m.withCredentials = !!e.withCredentials), p && p !== "json" && (m.responseType = e.responseType), typeof e.onDownloadProgress == "function" && m.addEventListener("progress", e.onDownloadProgress), typeof e.onUploadProgress == "function" && m.upload && m.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
				m && (m.abort(), u(e), m = null);
			}), d || (d = null), m.send(d);
		});
	};
})), F = /* @__PURE__ */ a(((e, t) => {
	var n = P(), r = we(), i = Te(), a = { "Content-Type": "application/x-www-form-urlencoded" };
	function o(e, t) {
		!n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
	}
	function s() {
		var e;
		return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Pe()), e;
	}
	function c(e, t, r) {
		if (n.isString(e)) try {
			return (t || JSON.parse)(e), n.trim(e);
		} catch (e) {
			if (e.name !== "SyntaxError") throw e;
		}
		return (r || JSON.stringify)(e);
	}
	var l = {
		transitional: {
			silentJSONParsing: !0,
			forcedJSONParsing: !0,
			clarifyTimeoutError: !1
		},
		adapter: s(),
		transformRequest: [function(e, t) {
			return r(t, "Accept"), r(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) || t && t["Content-Type"] === "application/json" ? (o(t, "application/json"), c(e)) : e;
		}],
		transformResponse: [function(e) {
			var t = this.transitional, r = t && t.silentJSONParsing, a = t && t.forcedJSONParsing, o = !r && this.responseType === "json";
			if (o || a && n.isString(e) && e.length) try {
				return JSON.parse(e);
			} catch (e) {
				if (o) throw e.name === "SyntaxError" ? i(e, this, "E_JSON_PARSE") : e;
			}
			return e;
		}],
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		maxBodyLength: -1,
		validateStatus: function(e) {
			return e >= 200 && e < 300;
		}
	};
	l.headers = { common: { Accept: "application/json, text/plain, */*" } }, n.forEach([
		"delete",
		"get",
		"head"
	], function(e) {
		l.headers[e] = {};
	}), n.forEach([
		"post",
		"put",
		"patch"
	], function(e) {
		l.headers[e] = n.merge(a);
	}), t.exports = l;
})), Fe = /* @__PURE__ */ a(((e, t) => {
	var n = P(), r = F();
	t.exports = function(e, t, i) {
		var a = this || r;
		return n.forEach(i, function(n) {
			e = n.call(a, e, t);
		}), e;
	};
})), Ie = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		return !!(e && e.__CANCEL__);
	};
})), Le = /* @__PURE__ */ a(((e, t) => {
	var n = P(), r = Fe(), i = Ie(), a = F();
	function o(e) {
		e.cancelToken && e.cancelToken.throwIfRequested();
	}
	t.exports = function(e) {
		return o(e), e.headers = e.headers || {}, e.data = r.call(e, e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch",
			"common"
		], function(t) {
			delete e.headers[t];
		}), (e.adapter || a.adapter)(e).then(function(t) {
			return o(e), t.data = r.call(e, t.data, t.headers, e.transformResponse), t;
		}, function(t) {
			return i(t) || (o(e), t && t.response && (t.response.data = r.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
		});
	};
})), Re = /* @__PURE__ */ a(((e, t) => {
	var n = P();
	t.exports = function(e, t) {
		t = t || {};
		var r = {}, i = [
			"url",
			"method",
			"data"
		], a = [
			"headers",
			"auth",
			"proxy",
			"params"
		], o = [
			"baseURL",
			"transformRequest",
			"transformResponse",
			"paramsSerializer",
			"timeout",
			"timeoutMessage",
			"withCredentials",
			"adapter",
			"responseType",
			"xsrfCookieName",
			"xsrfHeaderName",
			"onUploadProgress",
			"onDownloadProgress",
			"decompress",
			"maxContentLength",
			"maxBodyLength",
			"maxRedirects",
			"transport",
			"httpAgent",
			"httpsAgent",
			"cancelToken",
			"socketPath",
			"responseEncoding"
		], s = ["validateStatus"];
		function c(e, t) {
			return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t;
		}
		function l(i) {
			n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = c(void 0, e[i])) : r[i] = c(e[i], t[i]);
		}
		n.forEach(i, function(e) {
			n.isUndefined(t[e]) || (r[e] = c(void 0, t[e]));
		}), n.forEach(a, l), n.forEach(o, function(i) {
			n.isUndefined(t[i]) ? n.isUndefined(e[i]) || (r[i] = c(void 0, e[i])) : r[i] = c(void 0, t[i]);
		}), n.forEach(s, function(n) {
			n in t ? r[n] = c(e[n], t[n]) : n in e && (r[n] = c(void 0, e[n]));
		});
		var u = i.concat(a).concat(o).concat(s), d = Object.keys(e).concat(Object.keys(t)).filter(function(e) {
			return u.indexOf(e) === -1;
		});
		return n.forEach(d, l), r;
	};
})), ze = /* @__PURE__ */ o({
	author: () => U,
	browser: () => q,
	bugs: () => W,
	bundlesize: () => Ue,
	default: () => We,
	dependencies: () => He,
	description: () => R,
	devDependencies: () => K,
	homepage: () => G,
	jsdelivr: () => Be,
	keywords: () => H,
	license: () => "MIT",
	main: () => z,
	name: () => I,
	repository: () => V,
	scripts: () => B,
	typings: () => J,
	unpkg: () => Ve,
	version: () => L
}), I, L, R, z, B, V, H, U, W, G, K, q, Be, Ve, J, He, Ue, We, Ge = i((() => {
	I = "axios", L = "0.21.4", R = "Promise based HTTP client for the browser and node.js", z = "index.js", B = {
		test: "grunt test",
		start: "node ./sandbox/server.js",
		build: "NODE_ENV=production grunt build",
		preversion: "npm test",
		version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
		postversion: "git push && git push --tags",
		examples: "node ./examples/server.js",
		coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
		fix: "eslint --fix lib/**/*.js"
	}, V = {
		type: "git",
		url: "https://github.com/axios/axios.git"
	}, H = [
		"xhr",
		"http",
		"ajax",
		"promise",
		"node"
	], U = "Matt Zabriskie", W = { url: "https://github.com/axios/axios/issues" }, G = "https://axios-http.com", K = {
		coveralls: "^3.0.0",
		"es6-promise": "^4.2.4",
		grunt: "^1.3.0",
		"grunt-banner": "^0.6.0",
		"grunt-cli": "^1.2.0",
		"grunt-contrib-clean": "^1.1.0",
		"grunt-contrib-watch": "^1.0.0",
		"grunt-eslint": "^23.0.0",
		"grunt-karma": "^4.0.0",
		"grunt-mocha-test": "^0.13.3",
		"grunt-ts": "^6.0.0-beta.19",
		"grunt-webpack": "^4.0.2",
		"istanbul-instrumenter-loader": "^1.0.0",
		"jasmine-core": "^2.4.1",
		karma: "^6.3.2",
		"karma-chrome-launcher": "^3.1.0",
		"karma-firefox-launcher": "^2.1.0",
		"karma-jasmine": "^1.1.1",
		"karma-jasmine-ajax": "^0.1.13",
		"karma-safari-launcher": "^1.0.0",
		"karma-sauce-launcher": "^4.3.6",
		"karma-sinon": "^1.0.5",
		"karma-sourcemap-loader": "^0.3.8",
		"karma-webpack": "^4.0.2",
		"load-grunt-tasks": "^3.5.2",
		minimist: "^1.2.0",
		mocha: "^8.2.1",
		sinon: "^4.5.0",
		"terser-webpack-plugin": "^4.2.3",
		typescript: "^4.0.5",
		"url-search-params": "^0.10.0",
		webpack: "^4.44.2",
		"webpack-dev-server": "^3.11.0"
	}, q = { "./lib/adapters/http.js": "./lib/adapters/xhr.js" }, Be = "dist/axios.min.js", Ve = "dist/axios.min.js", J = "./index.d.ts", He = { "follow-redirects": "^1.14.0" }, Ue = [{
		path: "./dist/axios.min.js",
		threshold: "5kB"
	}], We = {
		name: I,
		version: L,
		description: R,
		main: z,
		scripts: B,
		repository: V,
		keywords: H,
		author: U,
		license: "MIT",
		bugs: W,
		homepage: G,
		devDependencies: K,
		browser: q,
		jsdelivr: Be,
		unpkg: Ve,
		typings: J,
		dependencies: He,
		bundlesize: Ue
	};
})), Ke = /* @__PURE__ */ a(((e, t) => {
	var n = (Ge(), c(ze).default), r = {};
	[
		"object",
		"boolean",
		"number",
		"function",
		"string",
		"symbol"
	].forEach(function(e, t) {
		r[e] = function(n) {
			return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
		};
	});
	var i = {}, a = n.version.split(".");
	function o(e, t) {
		for (var n = t ? t.split(".") : a, r = e.split("."), i = 0; i < 3; i++) if (n[i] > r[i]) return !0;
		else if (n[i] < r[i]) return !1;
		return !1;
	}
	r.transitional = function(e, t, r) {
		var a = t && o(t);
		function s(e, t) {
			return "[Axios v" + n.version + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "");
		}
		return function(n, r, o) {
			if (e === !1) throw Error(s(r, " has been removed in " + t));
			return a && !i[r] && (i[r] = !0, console.warn(s(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, o);
		};
	};
	function s(e, t, n) {
		if (typeof e != "object") throw TypeError("options must be an object");
		for (var r = Object.keys(e), i = r.length; i-- > 0;) {
			var a = r[i], o = t[a];
			if (o) {
				var s = e[a], c = s === void 0 || o(s, a, e);
				if (c !== !0) throw TypeError("option " + a + " must be " + c);
				continue;
			}
			if (n !== !0) throw Error("Unknown option " + a);
		}
	}
	t.exports = {
		isOlderVersion: o,
		assertOptions: s,
		validators: r
	};
})), qe = /* @__PURE__ */ a(((e, t) => {
	var n = P(), r = Se(), i = Ce(), a = Le(), o = Re(), s = Ke(), c = s.validators;
	function l(e) {
		this.defaults = e, this.interceptors = {
			request: new i(),
			response: new i()
		};
	}
	l.prototype.request = function(e) {
		typeof e == "string" ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = o(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
		var t = e.transitional;
		t !== void 0 && s.assertOptions(t, {
			silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
			forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
			clarifyTimeoutError: c.transitional(c.boolean, "1.0.0")
		}, !1);
		var n = [], r = !0;
		this.interceptors.request.forEach(function(t) {
			(typeof t.runWhen != "function" || t.runWhen(e) !== !1) && (r = r && t.synchronous, n.unshift(t.fulfilled, t.rejected));
		});
		var i = [];
		this.interceptors.response.forEach(function(e) {
			i.push(e.fulfilled, e.rejected);
		});
		var l;
		if (!r) {
			var u = [a, void 0];
			for (Array.prototype.unshift.apply(u, n), u = u.concat(i), l = Promise.resolve(e); u.length;) l = l.then(u.shift(), u.shift());
			return l;
		}
		for (var d = e; n.length;) {
			var f = n.shift(), p = n.shift();
			try {
				d = f(d);
			} catch (e) {
				p(e);
				break;
			}
		}
		try {
			l = a(d);
		} catch (e) {
			return Promise.reject(e);
		}
		for (; i.length;) l = l.then(i.shift(), i.shift());
		return l;
	}, l.prototype.getUri = function(e) {
		return e = o(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
	}, n.forEach([
		"delete",
		"get",
		"head",
		"options"
	], function(e) {
		l.prototype[e] = function(t, n) {
			return this.request(o(n || {}, {
				method: e,
				url: t,
				data: (n || {}).data
			}));
		};
	}), n.forEach([
		"post",
		"put",
		"patch"
	], function(e) {
		l.prototype[e] = function(t, n, r) {
			return this.request(o(r || {}, {
				method: e,
				url: t,
				data: n
			}));
		};
	}), t.exports = l;
})), Je = /* @__PURE__ */ a(((e, t) => {
	function n(e) {
		this.message = e;
	}
	n.prototype.toString = function() {
		return "Cancel" + (this.message ? ": " + this.message : "");
	}, n.prototype.__CANCEL__ = !0, t.exports = n;
})), Ye = /* @__PURE__ */ a(((e, t) => {
	var n = Je();
	function r(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		var t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		var r = this;
		e(function(e) {
			r.reason || (r.reason = new n(e), t(r.reason));
		});
	}
	r.prototype.throwIfRequested = function() {
		if (this.reason) throw this.reason;
	}, r.source = function() {
		var e;
		return {
			token: new r(function(t) {
				e = t;
			}),
			cancel: e
		};
	}, t.exports = r;
})), Xe = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		return function(t) {
			return e.apply(null, t);
		};
	};
})), Ze = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		return typeof e == "object" && e.isAxiosError === !0;
	};
})), Qe = /* @__PURE__ */ a(((e, t) => {
	var n = P(), r = xe(), i = qe(), a = Re(), o = F();
	function s(e) {
		var t = new i(e), a = r(i.prototype.request, t);
		return n.extend(a, i.prototype, t), n.extend(a, t), a;
	}
	var c = s(o);
	c.Axios = i, c.create = function(e) {
		return s(a(c.defaults, e));
	}, c.Cancel = Je(), c.CancelToken = Ye(), c.isCancel = Ie(), c.all = function(e) {
		return Promise.all(e);
	}, c.spread = Xe(), c.isAxiosError = Ze(), t.exports = c, t.exports.default = c;
})), $e = /* @__PURE__ */ a(((e, t) => {
	t.exports = Qe();
})), et = /* @__PURE__ */ a(((e) => {
	function t(e) {
		return e && typeof e == "object" && "default" in e ? e.default : e;
	}
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = t($e()), r = function() {
		return (r = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}).apply(this, arguments);
	}, i = function(e, t, n, r) {
		return new (n || (n = Promise))(function(i, a) {
			function o(e) {
				try {
					c(r.next(e));
				} catch (e) {
					a(e);
				}
			}
			function s(e) {
				try {
					c(r.throw(e));
				} catch (e) {
					a(e);
				}
			}
			function c(e) {
				e.done ? i(e.value) : new n(function(t) {
					t(e.value);
				}).then(o, s);
			}
			c((r = r.apply(e, t || [])).next());
		});
	}, a = function(e, t) {
		var n, r, i, a, o = {
			label: 0,
			sent: function() {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		};
		return a = {
			next: s(0),
			throw: s(1),
			return: s(2)
		}, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
			return this;
		}), a;
		function s(a) {
			return function(s) {
				return function(a) {
					if (n) throw TypeError("Generator is already executing.");
					for (; o;) try {
						if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
						switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
							case 0:
							case 1:
								i = a;
								break;
							case 4: return o.label++, {
								value: a[1],
								done: !1
							};
							case 5:
								o.label++, r = a[1], a = [0];
								continue;
							case 7:
								a = o.ops.pop(), o.trys.pop();
								continue;
							default:
								if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2)) {
									o = 0;
									continue;
								}
								if (a[0] === 3 && (!i || a[1] > i[0] && a[1] < i[3])) {
									o.label = a[1];
									break;
								}
								if (a[0] === 6 && o.label < i[1]) {
									o.label = i[1], i = a;
									break;
								}
								if (i && o.label < i[2]) {
									o.label = i[2], o.ops.push(a);
									break;
								}
								i[2] && o.ops.pop(), o.trys.pop();
								continue;
						}
						a = t.call(e, o);
					} catch (e) {
						a = [6, e], r = 0;
					} finally {
						n = i = 0;
					}
					if (5 & a[0]) throw a[1];
					return {
						value: a[0] ? a[1] : void 0,
						done: !0
					};
				}([a, s]);
			};
		}
	}, o = void 0, s = function(e) {
		return e instanceof Date ? e.getTime() : typeof e == "number" || e == null ? e : Number(e);
	}, c = function(e, t, n) {
		return n >= e && n <= t;
	}, l = function(e) {
		return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
	}, u = {
		Accept: "application/json",
		"Content-Type": "application/json"
	}, d = { timeout: 0 }, f = null, p = "CLIENT_ERROR", m = "SERVER_ERROR", h = "TIMEOUT_ERROR", g = "CONNECTION_ERROR", _ = "NETWORK_ERROR", v = "UNKNOWN_ERROR", y = "CANCEL_ERROR", b = ["ECONNABORTED"], x = [
		"ENOTFOUND",
		"ECONNREFUSED",
		"ECONNRESET"
	], S = function(e) {
		return c(200, 299, e);
	}, C = function(e) {
		return c(400, 499, e);
	}, w = function(e) {
		return c(500, 599, e);
	}, T = function(e) {
		return e.message === "Network Error" ? _ : n.isCancel(e) ? y : e.code ? b.includes(e.code) ? h : x.includes(e.code) ? g : v : E(e.response ? e.response.status : null);
	}, E = function(e) {
		return e ? S(e) ? f : C(e) ? p : w(e) ? m : v : v;
	}, D = function(e) {
		var t, c = r({}, u, e.headers || {});
		if (e.axiosInstance) t = e.axiosInstance;
		else {
			var f = r({}, e, { headers: void 0 }), p = r({}, d, f);
			t = n.create(p);
		}
		var m = [], h = [], g = [], _ = [], v = [], y = function(e, n) {
			return c[e] = n, t;
		}, b = function(e) {
			return function(t, n, i) {
				return n === void 0 && (n = {}), i === void 0 && (i = {}), C(r({}, i, {
					url: t,
					params: n,
					method: e
				}));
			};
		}, x = function(e) {
			return function(t, n, i) {
				return i === void 0 && (i = {}), C(r({}, i, {
					url: t,
					method: e,
					data: n
				}));
			};
		}, C = function(e) {
			return i(o, void 0, void 0, function() {
				var n, o, u, d, f = this;
				return a(this, function(p) {
					switch (p.label) {
						case 0:
							if (e.headers = r({}, c, e.headers), h.length > 0 && h.forEach(function(t) {
								return t(e);
							}), !(g.length > 0)) return [3, 6];
							n = 0, p.label = 1;
						case 1: return n < g.length ? (o = g[n](e), l(o) ? [4, o] : [3, 3]) : [3, 6];
						case 2: return p.sent(), [3, 5];
						case 3: return [4, o(e)];
						case 4: p.sent(), p.label = 5;
						case 5: return n++, [3, 1];
						case 6: return u = s(/* @__PURE__ */ new Date()), d = function(e) {
							return i(f, void 0, void 0, function() {
								var t;
								return a(this, function(n) {
									switch (n.label) {
										case 0: return [4, D(u, e)];
										case 1: return t = n.sent(), [2, w(t)];
									}
								});
							});
						}, [2, t.request(e).then(d).catch(d)];
					}
				});
			});
		}, w = function(e) {
			return m.forEach(function(t) {
				try {
					t(e);
				} catch {}
			}), e;
		}, D = function(e, t) {
			return i(o, void 0, void 0, function() {
				var r, i, o, c, u, d, f, p, m, h, g, y, b, x, C, w;
				return a(this, function(a) {
					switch (a.label) {
						case 0:
							if (r = s(/* @__PURE__ */ new Date()), i = r - e, o = t instanceof Error || n.isCancel(t), c = t, u = t, d = o ? u.response : c, f = d && d.status || null, p = o ? T(t) : E(f), m = o ? u : null, h = S(f), g = t.config || null, y = d && d.headers || null, b = d && d.data || null, x = {
								duration: i,
								problem: p,
								originalError: m,
								ok: h,
								status: f,
								headers: y,
								config: g,
								data: b
							}, _.length > 0 && _.forEach(function(e) {
								return e(x);
							}), !(v.length > 0)) return [3, 6];
							C = 0, a.label = 1;
						case 1: return C < v.length ? (w = v[C](x), l(w) ? [4, w] : [3, 3]) : [3, 6];
						case 2: return a.sent(), [3, 5];
						case 3: return [4, w(x)];
						case 4: a.sent(), a.label = 5;
						case 5: return C++, [3, 1];
						case 6: return [2, x];
					}
				});
			});
		};
		return {
			axiosInstance: t,
			monitors: m,
			addMonitor: function(e) {
				m.push(e);
			},
			requestTransforms: h,
			asyncRequestTransforms: g,
			responseTransforms: _,
			asyncResponseTransforms: v,
			addRequestTransform: function(e) {
				return h.push(e);
			},
			addAsyncRequestTransform: function(e) {
				return g.push(e);
			},
			addResponseTransform: function(e) {
				return _.push(e);
			},
			addAsyncResponseTransform: function(e) {
				return v.push(e);
			},
			setHeader: y,
			setHeaders: function(e) {
				return Object.keys(e).forEach(function(t) {
					return y(t, e[t]);
				}), t;
			},
			deleteHeader: function(e) {
				return delete c[e], t;
			},
			headers: c,
			setBaseURL: function(e) {
				return t.defaults.baseURL = e, t;
			},
			getBaseURL: function() {
				return t.defaults.baseURL;
			},
			any: C,
			get: b("get"),
			delete: b("delete"),
			head: b("head"),
			post: x("post"),
			put: x("put"),
			patch: x("patch"),
			link: b("link"),
			unlink: b("unlink")
		};
	}, O = n.isCancel, k = n.CancelToken, ee = {
		DEFAULT_HEADERS: u,
		NONE: f,
		CLIENT_ERROR: p,
		SERVER_ERROR: m,
		TIMEOUT_ERROR: h,
		CONNECTION_ERROR: g,
		NETWORK_ERROR: _,
		UNKNOWN_ERROR: v,
		create: D,
		isCancel: O,
		CancelToken: k
	};
	e.DEFAULT_HEADERS = u, e.NONE = f, e.CLIENT_ERROR = p, e.SERVER_ERROR = m, e.TIMEOUT_ERROR = h, e.CONNECTION_ERROR = g, e.NETWORK_ERROR = _, e.UNKNOWN_ERROR = v, e.CANCEL_ERROR = y, e.getProblemFromError = T, e.getProblemFromStatus = E, e.create = D, e.isCancel = O, e.CancelToken = k, e.default = ee;
})), tt = /* @__PURE__ */ a(((e, t) => {
	t.exports = typeof self == "object" ? self.FormData : window.FormData;
})), nt = /* @__PURE__ */ a(((e, t) => {
	t.exports = {};
})), rt = et(), it;
typeof window < "u" && (it = window.FormData);
var at, ot;
typeof window > "u" ? (ot = tt(), at = nt()) : ot = it;
var st = (e) => (0, rt.create)({
	baseURL: e,
	headers: {
		Accept: "application/json",
		"User-Agent": "JS Kitsu Client / 0.0.1"
	}
});
function Y(e) {
	this.api = st(e), this.host = e, this.setAuthToken = (e) => {
		this.api.setHeader("Authorization", `Bearer ${e}`);
	}, this.get = (e) => this.api.get(e).then((e) => Promise.resolve(e.data)), this.fetchFirst = (e) => this.api.get(e).then((e) => Promise.resolve(e.data && e.data.length > 0 ? e.data[0] : null)), this.post = (e, t) => this.api.post(e, t).then((e) => Promise.resolve(e.data)), this.postWithFiles = (e, t, n) => {
		let r = new ot();
		return Object.keys(t).forEach((e) => {
			let n = t[e];
			n = typeof n == "object" ? JSON.stringify(t[e]) : n, r.append(e, n);
		}), n.length === 1 ? r.append("file", at.createReadStream(n[0])) : n.forEach((e, t) => {
			r.append("file" + t, at.createReadStream(e));
		}), this.api.post(e, r, { headers: {
			...this.api.headers,
			...r.getHeaders()
		} });
	}, this.postWithForm = (e, t, n = {}) => (Object.keys(n).forEach((e) => {
		let r = n[e];
		r = typeof r == "object" ? JSON.stringify(n[e]) : r, t.append(e, r);
	}), this.api.post(e, t, { headers: {
		...this.api.headers,
		...t.getHeaders()
	} })), this.put = (e, t) => this.api.put(e, t).then((e) => Promise.resolve(e.data)), this.delete = (e) => this.api.delete(e).then((e) => Promise.resolve(e.data));
}
var ct = (e) => new Y(e);
Y.prototype.login = function(e, t, n = !0) {
	return this.post("auth/login", {
		email: e,
		password: t
	}).then((e) => e ? (n && this.setAuthToken(e.access_token), Promise.resolve(e)) : Promise.reject("The authentication failed."));
}, Y.prototype.logout = function() {
	return this.get("auth/logout");
}, Y.prototype.resetPassword = function(e) {
	return this.post("auth/reset-password", { email: e });
}, Y.prototype.isLoggedIn = function() {
	return this.api.get("auth/authenticated").then((e) => Promise.resolve({
		isLoggedIn: e.ok,
		data: e.data
	}));
}, Y.prototype.getAssetByName = function(e, t) {
	return this.fetchFirst(`data/assets/all?project_id=${e}&name=${t}`);
}, Y.prototype.getProductions = function() {
	return this.get("data/projects/all");
}, Y.prototype.getOpenProductions = function() {
	return this.get("data/projects/open");
}, Y.prototype.getProduction = function(e) {
	return this.fetchFirst("data/projects/{productionId}");
}, Y.prototype.getProductionByName = function(e) {
	return this.fetchFirst(`data/projects?name=${e}`);
}, Y.prototype.getTaskType = function(e) {
	return this.fetchFirst(`data/task-types?name=${e}`);
}, Y.prototype.getTaskStatus = function(e) {
	return this.fetchFirst(`data/task-status?short_name=${e}`);
}, Y.prototype.getTask = function(e, t) {
	return this.fetchFirst(`data/tasks?entity_id=${e}&task_type_id=${t}`);
}, Y.prototype.addComment = function(e, t, n = "", r = [], i = [], a, o) {
	let s = {
		task_status_id: t,
		comment: n,
		checklist: r
	};
	return a && (s.person_id = a), o && (s.created_at = o), i.length === 0 ? this.post(`actions/tasks/${e}/comment`, s) : this.postWithFiles(`actions/tasks/${e}/comment`, s, i);
}, Y.prototype.addPreview = function(e, t, n, r = !0) {
	let i = `actions/tasks/${e}/comments/${t}/add-preview`;
	return this.post(i, {}).then((e) => (i = `pictures/preview-files/${e.id}`, r || (i += "?normalize=false"), this.postWithFiles(i, {}, [n])));
}, Y.prototype.publish = function(e, t, n, r, i, a = !0) {
	return this.addComment(e, t, "", [], [], r, i).then((t) => this.addPreview(e, t.id, n, a));
};
//#endregion
//#region ../../../node_modules/.pnpm/kitsu-client-js@https+++codeload.github.com+cgwire+kitsu-client-js+tar.gz+7a0eb172fe22e_7c78310177f2b300823149eb47aeb959/node_modules/kitsu-client-js/src/index.js
var lt = { createClient: ct }, ut = (e) => `/plugins/${e}/tickets`, X = (e) => typeof e == "string" && e.length > 0 ? e : null, Z = (e) => {
	let t = X(e);
	return t && t !== "all" ? t : null;
}, dt = (e) => ({
	title: typeof e.title == "string" ? e.title : "",
	text: typeof e.text == "string" ? e.text : "",
	status: X(e.status) || "open",
	task_id: X(e.task_id),
	assignee_id: X(e.assignee_id),
	project_id: X(e.project_id),
	episode_id: Z(e.episode_id)
}), Q = null, ft = () => (Q || (Q = lt.createClient("/api"), Q.api.deleteHeader("User-Agent"), Q.api.axiosInstance.defaults.withCredentials = !0), Q), pt = () => {
	let e = ce(), t = ft(), n = () => ut(e.value?.pluginId ?? "");
	return {
		fetchTickets: (e, r) => {
			let i = new URLSearchParams();
			e && i.set("production_id", e);
			let a = Z(r);
			a && i.set("episode_id", a);
			let o = i.toString();
			return t.get(`${n()}${o ? `?${o}` : ""}`);
		},
		getTicket: (e) => t.get(`${n()}/${e}`),
		createTicket: (e) => t.post(n(), dt(e)),
		updateTicket: (e, r) => t.put(`${n()}/${e}`, dt(r)),
		deleteTicket: (e) => t.delete(`${n()}/${e}`)
	};
}, mt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, $ = (e) => typeof e == "string" && e.length > 0 ? e : null, ht = () => {
	let e = oe(), t = ce(), n = f(() => $(e.params.production_id) ?? $(t.value?.productionId)), r = f(() => $(e.params.episode_id) ?? $(t.value?.episodeId));
	return {
		productionId: n,
		episodeId: f(() => Z(r.value))
	};
};
//#endregion
export { ee as A, C, D, E, ne as M, re as N, O, S, T, g as _, ye as a, y as b, ue as c, se as d, d as f, h as g, m as h, pt as i, te as j, k, ae as l, p as m, mt as n, be as o, f as p, Z as r, ge as s, ht as t, oe as u, _ as v, w, x, v as y };

//# sourceMappingURL=useTicketsScope-DJOhA3PJ.js.map