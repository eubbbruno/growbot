import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY; // Adicione sua chave no .env.local
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // ou "gpt-4" se seu plano suportar
      messages: [
        { role: "system", content: "Você é um assistente de atendimento para PMEs." },
        { role: "user", content: message },
      ],
    }),
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  return NextResponse.json({ reply });
}