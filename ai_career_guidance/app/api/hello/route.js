export async function GET() {
  return new Response(
    JSON.stringify({ status: 'ok', now: new Date().toISOString() }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}
