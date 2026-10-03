import { onRequestPost, onRequestOptions } from './functions/api/submit.ts';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route API requests directly to handler
    if (url.pathname === '/api/submit') {
      if (request.method === 'OPTIONS') {
        return onRequestOptions({ request, env });
      }
      if (request.method === 'POST') {
        return onRequestPost({ request, env });
      }
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Pass everything else to static asset cache
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not found', { status: 404 });
  },
};
