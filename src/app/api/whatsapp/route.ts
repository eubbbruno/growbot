import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: NextRequest) {
  const { From, Body } = await req.json();

  // Configurações simuladas (substituir por backend depois)
  const config = {
    faqs: "Aceita Pix? Sim!\nTem delivery? Sim, R$ 5.",
    menu: "Feijoada - R$ 25\nMoqueca - R$ 30",
    tone: "Amigável",
  };

  const systemPrompt = `Você é o GrowBot, assistente de um restaurante brasileiro. Use tom ${config.tone}. Aqui estão as informações:
  FAQs: ${config.faqs}
  Menu: ${config.menu}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: Body },
      ],
    }),
  });
  const data = await response.json();
  const reply = data.choices[0].message.content;

  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: From,
    body: reply,
  });

  return NextResponse.json({ success: true });
}