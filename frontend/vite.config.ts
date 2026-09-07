import { defineKitsuPluginConfig } from 'kitsu-plugin-kit/vite'
import { defineConfig } from 'vite'

// pluginId comes from ../manifest.toml via defineKitsuPluginConfig.
export default defineConfig(
  defineKitsuPluginConfig({
    server: {
      port: 5175,
      hmr: { clientPort: 5175 },
      watch: { usePolling: true },
    },
  }),
)
