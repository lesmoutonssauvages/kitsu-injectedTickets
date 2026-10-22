/** Host publishes shared Vue stack here; plugin shims read it back. */
export const SHARED_GLOBAL = '__KITSU_SHARED__'

/** Packages borrowed from the host — never bundled into plugin.js. */
export const DEFAULT_SHARED_DEPS = ['vue', 'vue-router', 'vuex', 'vue-i18n']
