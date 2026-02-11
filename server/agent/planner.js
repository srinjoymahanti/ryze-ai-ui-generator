import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});


export async function runPlanner(userPrompt) {

  const plannerPrompt = `
You are a UI planner.

Rules:
- Use only allowed components.
- Do not create new components.
- Return JSON only.

Available components:
Button, Card, Input, Table, Modal, Sidebar, Navbar, Chart

User request:
${userPrompt}
`;

  const response = await openai.chat.completions.create({
   model: "llama-3.1-8b-instant",
    messages: [
      { role: "user", content: plannerPrompt }
    ],
    temperature: 0
  });

  return response.choices[0].message.content;
}
