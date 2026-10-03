import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

function readDevVars(): Record<string, string> {
  const varsPath = path.resolve(__dirname, '.dev.vars');
  const env: Record<string, string> = {};
  if (fs.existsSync(varsPath)) {
    fs.readFileSync(varsPath, 'utf-8')
      .split('\n')
      .forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const idx = trimmed.indexOf('=');
        if (idx !== -1) {
          env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
        }
      });
  }
  return env;
}

function localApiPlugin(): Plugin {
  return {
    name: 'cloudflare-api-local-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const urlPath = req.url?.split('?')[0];
        if (urlPath !== '/api/submit') return next();

        try {
          const { onRequestPost, onRequestOptions } = await server.ssrLoadModule(
            './functions/api/submit.ts'
          );
          const devEnv = { ...process.env, ...readDevVars() };

          if (req.method === 'OPTIONS') {
            const webReq = new Request(`http://${req.headers.host}${req.url}`, {
              method: 'OPTIONS',
              headers: req.headers as HeadersInit,
            });
            const webRes: Response = await onRequestOptions({ request: webReq });
            res.statusCode = webRes.status;
            webRes.headers.forEach((val, key) => res.setHeader(key, val));
            return res.end();
          }

          if (req.method === 'POST') {
            let bodyStr = '';
            req.on('data', (chunk) => {
              bodyStr += chunk;
            });
            req.on('end', async () => {
              const webReq = new Request(`http://${req.headers.host}${req.url}`, {
                method: 'POST',
                headers: req.headers as HeadersInit,
                body: bodyStr,
              });
              const webRes: Response = await onRequestPost({ request: webReq, env: devEnv });
              res.statusCode = webRes.status;
              webRes.headers.forEach((val, key) => res.setHeader(key, val));
              const text = await webRes.text();
              res.end(text);
            });
            return;
          }

          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
        } catch (err: any) {
          console.error('Local API middleware error:', err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
        }
      });
    },
  };
}

function cloudflareSpaPlugin(): Plugin {
  return {
    name: 'cloudflare-spa-fallback',
    closeBundle() {
      // 1. Permanently remove dist/_redirects if restored by Cloudflare build cache
      const redirectsPath = path.resolve(__dirname, 'dist/_redirects');
      if (fs.existsSync(redirectsPath)) {
        try {
          fs.unlinkSync(redirectsPath);
        } catch (e) {
          console.warn('Could not delete dist/_redirects:', e);
        }
      }

      // 2. Generate 200.html as official Cloudflare SPA fallback
      const indexPath = path.resolve(__dirname, 'dist/index.html');
      const fallbackPath = path.resolve(__dirname, 'dist/200.html');
      if (fs.existsSync(indexPath)) {
        try {
          fs.copyFileSync(indexPath, fallbackPath);
        } catch (e) {
          console.warn('Could not create dist/200.html:', e);
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin(), cloudflareSpaPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
