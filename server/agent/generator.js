import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function runGenerator(plan) {

  const prompt = `
Convert this UI plan into React code.

Rules:
- Use only given components
- No inline styles

Plan:
${plan}
`;

  const res = await openai.chat.completions.create({
    model: "mixtral-8x7b-32768",
    messages: [
      { role: "user", content: prompt }
    ],
  });

  return res.choices[0].message.content;
}
