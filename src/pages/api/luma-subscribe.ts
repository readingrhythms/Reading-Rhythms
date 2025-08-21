// src/pages/api/luma-subscribe.ts
import type { APIRoute } from 'astro';
export const prerender = false;

type ChapterKey =
  | 'algiers' | 'astoria' | 'atlantic-city' | 'austin' | 'barcelona' | 'bushwick'
  | 'charleston' | 'chicago' | 'denver' | 'detroit' | 'florence' | 'greenpoint'
  | 'harlem' | 'jersey-city' | 'long-island' | 'long-island-city' | 'los-angeles'
  | 'lower-manhattan' | 'midtown' | 'milan' | 'morristown' | 'naples' | 'philadelphia'
  | 'princeton' | 'prospect-heights' | 'queens' | 'rome' | 'san-diego' | 'south-london'
  | 'toronto' | 'upper-east-side' | 'upper-west-side' | 'washington-dc' | 'washington-heights';

const CHAPTERS: Record<ChapterKey, { apiKeyEnv: string }> = {
  austin:            { apiKeyEnv: 'LUMA_API_KEY_GLOBAL' },
  chicago:           { apiKeyEnv: 'LUMA_API_KEY_CHICAGO' },
  'los-angeles':     { apiKeyEnv: 'LUMA_API_KEY_LA' },
  'upper-west-side': { apiKeyEnv: 'LUMA_API_KEY_UWS' },
  algiers:           { apiKeyEnv: 'LUMA_API_KEY_UWS' },
  astoria:           { apiKeyEnv: 'LUMA_API_KEY_UWS' },
  // ...add the rest...
} as any;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, chapter, name } = await request.json();

    if (!email || !chapter) {
      return new Response(JSON.stringify({ error: 'Missing email or chapter.' }), { status: 400 });
    }

    const cfg = CHAPTERS[chapter as ChapterKey];
    if (!cfg) {
      return new Response(JSON.stringify({ error: 'Unknown chapter.' }), { status: 400 });
    }

    const env = import.meta.env as Record<string, string | undefined>;
    const apiKey = env[cfg.apiKeyEnv];
    if (!apiKey) {
      return new Response(JSON.stringify({ error: `Server misconfig: ${cfg.apiKeyEnv} not set.` }), { status: 500 });
    }

    // Build Luma-compliant payload (no tags)
    const infos: Array<{ email: string; name?: string }> = [
      {
        email: String(email).trim().toLowerCase(),
      },
    ];

    const resp = await fetch('https://public-api.luma.com/v1/calendar/import-people', {
      method: 'POST',
      headers: {
        'x-luma-api-key': apiKey,
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ infos }),
    });

    const text = await resp.text();
    if (!resp.ok) {
      return new Response(
        JSON.stringify({ error: `Luma ${resp.status}`, details: text }),
        { status: 502, headers: { 'content-type': 'application/json' } }
      );
    }

    return new Response(text, { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: e?.message || 'Unexpected error' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }
};
