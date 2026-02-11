# 🤖 AI UI Generator

An AI‑powered UI generation system that converts natural language prompts into structured UI layouts, React component code, and live previews.

This project demonstrates how LLMs can be integrated into a full‑stack application to automate frontend design workflows.

---

# 🚀 Features

* 🧠 Prompt → UI Plan generation
* 🏗️ Plan → React code generation
* 👀 Live UI preview renderer
* 🧩 Component registry mapping system
* 🔌 Pluggable LLM provider support (OpenAI / Groq / others)
* 🛡️ Component validation layer
* 📦 Modular agent architecture

---

# 🏛️ System Architecture

```
User Prompt
     ↓
Planner Agent → JSON UI Plan
     ↓
Generator Agent → JSX Code
     ↓
Validator Agent → Component Safety
     ↓
Registry Mapping
     ↓
Preview Renderer → Live UI
```

---

# 📂 Project Structure

```
ryze-ai-ui-generator/

├── client/                 # Next.js Frontend
│   ├── app/
│   ├── components/         # UI Components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Modal.jsx
│   │   ├── Table.jsx
│   │   ├── Chart.jsx
│   │   ├── Preview.jsx
│   │   └── registry.jsx
│   └── styles/
│
├── server/                 # Express Backend
│   ├── agent/
│   │   ├── planner.js
│   │   ├── generator.js
│   │   ├── explainer.js
│   │   └── validator.js
│   ├── index.js
│   └── .env
│
└── README.md
```

---

# 🧠 Agent Responsibilities

## 1️⃣ Planner Agent

Converts prompt → structured UI JSON.

Example:

```json
{
  "components": [
    {
      "type": "Card",
      "children": [
        { "type": "Input", "label": "Email" },
        { "type": "Input", "label": "Password" },
        { "type": "Button", "label": "Login" }
      ]
    }
  ]
}
```

---

## 2️⃣ Generator Agent

Converts UI plan → React JSX.

Example output:

```jsx
<Card>
  <Input label="Email" />
  <Input label="Password" type="password" />
  <Button label="Login" />
</Card>
```

---

## 3️⃣ Validator Agent

Ensures:

* Only allowed components are used
* No unsafe JSX
* Registry compatibility

---

## 4️⃣ Explainer Agent

Generates human‑readable explanation of UI.

Used for:

* Learning
* Documentation
* Accessibility

---

# 🧩 Component System

Reusable React components power rendering.

| Component | Purpose          |
| --------- | ---------------- |
| Button    | Actions / Submit |
| Card      | Layout container |
| Input     | Form fields      |
| Navbar    | Top navigation   |
| Sidebar   | Side navigation  |
| Modal     | Popups           |
| Table     | Data display     |
| Chart     | Visual analytics |
| Preview   | JSX renderer     |
| Registry  | Component mapper |

---

# 🔗 Registry Mapping

Maps AI output → real components.

```jsx
import Button from "./Button";
import Card from "./Card";

export const registry = {
  Button,
  Card,
};
```

Without this layer, dynamic rendering is impossible.

---

# 👀 Preview Rendering

`Preview.jsx` dynamically renders generated JSX.

Flow:

```
Generated Code → Parsed → Registry → React Render
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repo

```bash
git clone https://github.com/yourusername/ai-ui-generator.git
cd ai-ui-generator
```

---

## 2️⃣ Install Dependencies

### Client

```bash
cd client
npm install
```

### Server

```bash
cd server
npm install
```

---

## 3️⃣ Environment Variables

Create `.env` in `/server`:

```env
OPENAI_API_KEY=your_key_here
# or
GROQ_API_KEY=your_key_here
```

---

## 4️⃣ Run Locally

### Start Server

```bash
cd server
npm run dev
```

### Start Client

```bash
cd client
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🧪 Example Prompts

Try prompts like:

* "Create a login form"
* "Build a signup page"
* "Dashboard with sidebar and charts"
* "Pricing cards UI"
* "Contact form with validation"

---

# 🔌 Supported LLM Providers

You can plug:

* OpenAI
* Groq
* Together AI
* Ollama (local)
* Any OpenAI‑compatible API

Just change the base URL + model.

---

# 🛠️ Tech Stack

**Frontend**

* Next.js
* React
* Tailwind / CSS

**Backend**

* Node.js
* Express

**AI Layer**

* OpenAI SDK
* Groq SDK

---

# 🧱 Key Design Concepts

* Agentic workflow
* Structured UI planning
* Component registry mapping
* Dynamic JSX rendering
* AI‑assisted frontend generation

---

# 🚧 Current Limitations

* Limited component library
* No drag‑drop editing
* No state management generation
* Styling rules basic

---

# 🔮 Future Improvements

* Figma → Code import
* Tailwind auto‑styling
* Theme generator
* Animation support
* Full page routing generation

---


# 📜 License

MIT License — Free to use and modify.

---

# 🙌 Acknowledgements

* OpenAI
* Groq
* Next.js
* React community

---

# ⭐ Showcase Value

This project demonstrates:

* AI + Full‑stack integration
* Agent pipelines
* Dynamic component rendering
* Prompt‑to‑code workflows

Perfect for portfolios, research, and hackathons.

---

**Built with ❤️ to automate UI development.**
