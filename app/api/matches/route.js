export async function GET() {
  const url = 'https://www.openligadb.de/api/getmatchdata/bl1';

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Status ${res.status}`);

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch matches' }), { status: 500 });
  }
}
