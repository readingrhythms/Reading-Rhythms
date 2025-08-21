import type { APIRoute } from 'astro';

type ChapterKey =
  | 'algiers' | 'astoria' | 'atlantic-city' | 'austin' | 'barcelona' | 'bushwick'
  | 'charleston' | 'chicago' | 'denver' | 'detroit' | 'florence' | 'greenpoint'
  | 'harlem' | 'jersey-city' | 'long-island' | 'long-island-city' | 'los-angeles'
  | 'lower-manhattan' | 'midtown' | 'milan' | 'morristown' | 'naples' | 'philadelphia'
  | 'princeton' | 'prospect-heights' | 'queens' | 'rome' | 'san-diego' | 'south-london'
  | 'toronto' | 'upper-east-side' | 'upper-west-side' | 'washington-dc' | 'washington-heights';

const CHAPTERS: Record<ChapterKey, { calendarId: string; apiKeyEnv: string }> = {
  austin:            { calendarId: 'cal-CDoX2WaI5IHD5xs', apiKeyEnv: 'LUMA_API_KEY_GLOBAL' },
  chicago:           { calendarId: 'cal_XXXXXXXX', apiKeyEnv: 'LUMA_API_KEY_CHICAGO' },
  'los-angeles':     { calendarId: 'cal_XXXXXXXX', apiKeyEnv: 'LUMA_API_KEY_LA' },
  'upper-west-side': { calendarId: 'cal_XXXXXXXX', apiKeyEnv: 'LUMA_API_KEY_UWS' },
  'algiers': { calendarId: 'cal_XXXXXXXX', apiKeyEnv: 'LUMA_API_KEY_UWS' },
  'astoria': { calendarId: 'cal_XXXXXXXX', apiKeyEnv: 'LUMA_API_KEY_UWS' }
  // ...add the rest...
} as any;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, chapter } = await request.json();
    if (!email || !chapter) {
      return new Response(JSON.stringify({ error: 'Missing email or chapter.' }), { status: 400 });
    }

    const cfg = CHAPTERS[chapter as ChapterKey];
    if (!cfg) return new Response(JSON.stringify({ error: 'Unknown chapter.' }), { status: 400 });

    const env = import.meta.env as Record<string, string | undefined>;
    const apiKey = import.meta.env[cfg.apiKeyEnv];
    if (!apiKey) {
      return new Response(JSON.stringify({ error: `Server misconfig: ${cfg.apiKeyEnv} not set.` }), { status: 500 });
    }

    const resp = await fetch('https://public-api.luma.com/v1/calendar/import-people', {
      method: 'POST',
      headers: {
        'x-luma-api-key': apiKey,              // ✅ correct header
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        "infos": [
            {
              "email": [{ email }]
            }
          ]                  // minimal payload
      }),
    });

    const text = await resp.text();            // capture raw body for easier debugging
    if (!resp.ok) {
      return new Response(JSON.stringify({ error: `Luma ${resp.status}`, details: text }), { status: 502 });
    }
    return new Response(text, { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e: any) {
    // This is where you'd see "TypeError: fetch failed" if the network dies *before* hitting Luma
    return new Response(JSON.stringify({ error: e?.message || 'Unexpected error' }), { status: 500 });
  }
};
