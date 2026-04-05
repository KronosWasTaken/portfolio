import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method, artist, album, user, track, limit, autocorrect } = req.query;
  const apiKey = process.env.VITE_LASTFM_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Last.fm API key not configured' });
  }

  // Construct query string with secure API key
  const params = new URLSearchParams({
    method: method as string,
    api_key: apiKey,
    format: 'json',
    ...(artist && { artist: artist as string }),
    ...(album && { album: album as string }),
    ...(user && { user: user as string }),
    ...(track && { track: track as string }),
    ...(limit && { limit: limit as string }),
    ...(autocorrect && { autocorrect: autocorrect as string }),
  });

  try {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${params.toString()}`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Last.fm proxy error:', error);
    return res.status(500).json({ error: 'Failed to fetch from Last.fm' });
  }
}
