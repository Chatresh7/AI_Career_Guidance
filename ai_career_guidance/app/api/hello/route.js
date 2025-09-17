// ai_career_guidance/app/api/hello/route.js

// Handles GET requests to /api/hello
export async function GET() {
  // Return a simple JSON response
  return new Response(
    JSON.stringify({ message: 'Hello from AI Career Guidance API!' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

// (Optional) Handles POST requests to /api/hello
export async function POST(req) {
  // Read the incoming JSON body
  const body = await req.json();

  // Echo it back as a placeholder
  return new Response(
    JSON.stringify({
      message: 'You sent:',
      body,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
