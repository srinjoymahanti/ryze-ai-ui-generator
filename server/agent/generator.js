import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function runGenerator(plan) {

  const prompt = `
Convert this UI plan into React JSX.

STRICT RULES:
- Use ONLY these components:
  Card, Input, Button
- DO NOT create new components
- DO NOT create App or LoginForm
- DO NOT add imports
- Return ONLY JSX
- No explanations
- No CSS

Plan:
${plan}
`;

  const res = await openai.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "user", content: prompt }
    ],
  });

  return res.choices[0].message.content;
}
