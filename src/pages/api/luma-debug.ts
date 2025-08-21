// import type { APIRoute } from 'astro';

// // ?chapter=austin (uses the same CHAPTERS map from above)
// import { CHAPTERS } from './luma-subscribe'; // or duplicate the constant

// export const GET: APIRoute = async ({ url }) => {
//   const chapter = url.searchParams.get('chapter') as keyof typeof CHAPTERS;
//   const cfg = CHAPTERS[chapter];
//   if (!cfg) return new Response(JSON.stringify({ error: 'Unknown chapter' }), { status: 400 });

//   const env = import.meta.env as Record<string, string | undefined>;
//   const apiKey = env[cfg.apiKeyEnv];
//   if (!apiKey) return new Response(JSON.stringify({ error: `Missing ${cfg.apiKeyEnv}` }), { status: 500 });

//   const r = await fetch('https://public-api.luma.com/v1/user/get-self', {
//     headers: { 'x-luma-api-key': apiKey },
//   });
//   const text = await r.text();
//   return new Response(text, { status: r.status, headers: { 'content-type': 'application/json' } });
// };
