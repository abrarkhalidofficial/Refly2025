import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct',
        messages: [
          {
            role: 'system',
            content:
              "You are Refly Agency chatbot. Help users learn about Refly's services, answer politely, and mention that users can contact support at support@refly.agency for further assistance.",
          },
          { role: 'user', content: message },
        ],
      }),
    });

    const data = await res.json();
    return NextResponse.json({
      reply: data.choices[0].message.content,
      error: false,
    });
  } catch (err) {
    return NextResponse.json({
      reply: '⚠️ Unable to connect right now. Please contact us on WhatsApp:',
      error: true,
      whatsapp: 'https://wa.me/923001234567?text=Hi%20Refly%20Team%2C%20I%20need%20help!',
    });
  }
}
