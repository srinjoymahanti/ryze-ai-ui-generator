import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

// ✅ Create Groq client
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function runExplainer(plan) {

  const prompt = `
Explain this UI layout in simple terms.

Plan:
${plan}
`;

  const res = await openai.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "user", content: prompt }
    ],
  });

  return res.choices[0].message.content;
}
