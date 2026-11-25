import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const audioMimePlugin = {
    name: 'audio-mime-types',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url?.includes('/audio/')) {
          if (req.url.includes('.m4a')) {
            res.setHeader('Content-Type', 'audio/mp4');
          } else if (req.url.includes('.aac')) {
            res.setHeader('Content-Type', 'audio/aac');
          }
        }
        next();
      });
    },
  };

  const plugins = [react(), tailwindcss(), audioMimePlugin];
  try {
    // @ts-ignore
    const m = await import('./.vite-source-tags.js');
    plugins.push(m.sourceTags());
  } catch {}

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_']);
  const processEnvDefines: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value);
  }

  return {
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
  };
})
