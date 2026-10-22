import { defineKitsuPluginConfig } from '@lesmoutonssauvages/kitsu-plugin-kit/vite'
import { defineConfig } from 'vite'
const plugin = defineKitsuPluginConfig({
  server: {
    port: 5175,
    hmr: { clientPort: 5175 },
    watch: { usePolling: true },
  },
})
export default defineConfig({
  ...plugin,
  optimizeDeps: {
    ...plugin.optimizeDeps,
    exclude: [
      ...(plugin.optimizeDeps?.exclude ?? []),
      // lucide-vue-next dépend de Vue : le prébundle Vite pourrait résoudre
      // une autre copie que celle du host (__KITSU_SHARED__), et casser les icônes en dev.
      'lucide-vue-next',
    ],
  },
})