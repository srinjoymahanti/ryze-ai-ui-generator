import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { runPlanner } from "./agent/planner.js";
import { runGenerator } from "./agent/generator.js";
import { runExplainer } from "./agent/explainer.js";
import { validateComponents } from "./agent/validator.js";
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


app.post("/generate", async (req, res) => {

  try {

    console.log("Prompt:", req.body.prompt);

    const plan = await runPlanner(req.body.prompt);
    console.log("Plan:", plan);

    const code = await runGenerator(plan);
    console.log("Code:", code);

    validateComponents(code);

    const explanation =
      await runExplainer(plan);

    res.json({ plan, code, explanation });

  } catch (err) {

    console.error("ERROR:", err);

    res.status(400).json({
      error: err.message
    });
  }

});

// app.post("/generate", async (req, res) => {

//   res.json({
//     plan: {
//       layout: "centered card",
//       components: [
//         "Input(email)",
//         "Input(password)",
//         "Button(submit)"
//       ]
//     },

//     code: `
//       <Card title="Login">
//         <Input label="Email" />
//         <Input label="Password" />
//         <Button label="Submit" />
//       </Card>
//     `,

//     explanation:
//       "A card layout was used to group login inputs."
//   });

// });



app.listen(5000, () => {
  console.log(
    "Server running on http://localhost:5000"
  );
});

