import { defineKitsuPluginConfig } from './src-plugin-kit/vite/index.js'
import { defineConfig } from 'vite'

const plugin = defineKitsuPluginConfig({
  // Default
  // entry: 'src/plugin.js',
  server: {
    port: 5175,
    // For Docker Desktop
    // watch: { usePolling: true },
  },
})

export default defineConfig({
  ...plugin,
  optimizeDeps: {
    ...plugin.optimizeDeps,
    exclude: [
      ...(plugin.optimizeDeps?.exclude ?? []),
      // lucide-vue-next depends on Vue: Vite prebundle could resolve a different
      // copy than the host (__KITSU_SHARED__), breaking icons in dev.
      'lucide-vue-next',
      '@cgwire/kitsu-client',
    ],
  },
})
