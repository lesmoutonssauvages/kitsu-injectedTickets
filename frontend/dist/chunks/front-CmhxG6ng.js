// \0kitsu-shared:vue
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
t.customRef, t.defineAsyncComponent, t.defineComponent, t.defineCustomElement, t.defineEmits, t.defineExpose, t.defineModel, t.defineOptions, t.defineProps, t.defineSSRCustomElement, t.defineSlots, t.devtools, t.effect, t.effectScope, t.getCurrentInstance, t.getCurrentScope, t.getCurrentWatcher, t.getTransitionRawChildren, t.guardReactiveProps;
var u = t.h;
t.handleError, t.hasInjectionContext, t.hydrate, t.hydrateOnIdle, t.hydrateOnInteraction, t.hydrateOnMediaQuery, t.hydrateOnVisible, t.initCustomFormatter, t.initDirectivesForSSR, t.inject, t.isMemoSame, t.isProxy, t.isReactive, t.isReadonly, t.isRef, t.isRuntimeOnly, t.isShallow, t.isVNode, t.markRaw, t.mergeDefaults, t.mergeModels, t.mergeProps, t.nextTick, t.nodeOps;
var d = t.normalizeClass;
t.normalizeProps, t.normalizeStyle, t.onActivated, t.onBeforeMount, t.onBeforeUnmount, t.onBeforeUpdate, t.onDeactivated, t.onErrorCaptured;
var f = t.onMounted;
t.onRenderTracked, t.onRenderTriggered, t.onScopeDispose, t.onServerPrefetch, t.onUnmounted, t.onUpdated, t.onWatcherCleanup;
var p = t.openBlock;
t.patchProp, t.popScopeId, t.provide, t.proxyRefs, t.pushScopeId, t.queuePostFlushCb, t.reactive, t.readonly;
var m = t.ref;
t.registerRuntimeCompiler, t.render;
var h = t.renderList;
t.renderSlot, t.resolveComponent, t.resolveDirective, t.resolveDynamicComponent, t.resolveFilter, t.resolveTransitionHooks, t.setBlockTracking, t.setDevtoolsHook, t.setTransitionHooks, t.shallowReactive, t.shallowReadonly, t.shallowRef, t.ssrContextKey, t.ssrUtils, t.stop;
var g = t.toDisplayString;
t.toHandlerKey, t.toHandlers, t.toRaw, t.toRef, t.toRefs, t.toValue, t.transformVNodeArgs, t.triggerRef;
var _ = t.unref;
t.useAttrs, t.useCssModule, t.useCssVars, t.useHost, t.useId, t.useModel, t.useSSRContext, t.useShadowRoot, t.useSlots, t.useTemplateRef, t.useTransitionState, t.vModelCheckbox, t.vModelDynamic, t.vModelRadio;
var v = t.vModelSelect, y = t.vModelText;
t.vShow, t.version, t.warn;
var b = t.watch;
t.watchEffect, t.watchPostEffect, t.watchSyncEffect, t.withAsyncContext;
var x = t.withCtx;
t.withDefaults;
var S = t.withDirectives;
t.withKeys, t.withMemo;
var C = t.withModifiers;
t.withScopeId;
// \0kitsu-shared:vue-router
var w = globalThis.__KITSU_SHARED__;
if (!w) throw Error("Kitsu plugin: host shared modules are missing (globalThis.__KITSU_SHARED__).");
var T = w.modules["vue-router"];
if (!T) throw Error("Kitsu plugin: the host does not share vue-router.");
T.default, T.NavigationFailureType;
var E = T.RouterLink;
T.RouterView, T.START_LOCATION, T.createMemoryHistory, T.createRouter, T.createRouterMatcher, T.createWebHashHistory, T.createWebHistory, T.isNavigationFailure, T.loadRouteLocation, T.matchedRouteKey, T.onBeforeRouteLeave, T.onBeforeRouteUpdate, T.parseQuery, T.routeLocationKey, T.routerKey, T.routerViewLocationKey, T.stringifyQuery, T.useLink;
var D = T.useRoute, O = T.useRouter;
T.viewDepthKey;
var k = () => {
	let e = D();
	return r(() => e.meta.kitsuPlugin ?? null);
};
export { b as C, C as E, y as S, S as T, m as _, n as a, _ as b, a as c, c as d, l as f, p as g, f as h, O as i, o as l, d as m, E as n, r as o, u as p, D as r, i as s, k as t, s as u, h as v, x as w, v as x, g as y };

//# sourceMappingURL=front-CmhxG6ng.js.map