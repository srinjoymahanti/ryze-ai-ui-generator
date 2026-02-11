"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {

  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");

  const generateUI = async () => {

    const res = await axios.post(
      "http://localhost:5000/generate",
      { prompt }
    );

    setCode(res.data.code);
    setExplanation(res.data.explanation);
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "#0f172a",
      color: "white"
    }}>

      {/* LEFT — CHAT PANEL */}
      <div style={{
        width: "30%",
        padding: "20px",
        borderRight: "2px solid #1f2937",
        background: "#111827"
      }}>
        <h2 style={{ color: "#60a5fa" }}>
          🤖 AI Chat
        </h2>

        <textarea
          placeholder="Describe your UI..."
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          style={{
            width: "100%",
            height: "120px",
            marginTop: "10px",
            padding: "10px",
            background: "#1f2937",
            color: "white",
            border: "1px solid #374151",
            borderRadius: "6px"
          }}
        />

        <button
          onClick={generateUI}
          style={{
            marginTop: "15px",
            padding: "10px 16px",
            background: "#3b82f6",
            border: "none",
            borderRadius: "6px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          🚀 Generate UI
        </button>
      </div>

      {/* MIDDLE — CODE PANEL */}
      <div style={{
        width: "35%",
        padding: "20px",
        borderRight: "2px solid #1f2937",
        background: "#020617"
      }}>
        <h2 style={{ color: "#34d399" }}>
          💻 Generated Code
        </h2>

        <pre style={{
          marginTop: "10px",
          padding: "15px",
          background: "#111827",
          borderRadius: "6px",
          overflow: "auto",
          height: "80%",
          color: "#e5e7eb"
        }}>
          {code}
        </pre>
      </div>

      {/* RIGHT — EXPLANATION PANEL */}
      <div style={{
        width: "35%",
        padding: "20px",
        background: "#020617"
      }}>
        <h2 style={{ color: "#fbbf24" }}>
          🧠 Explanation
        </h2>

        <div style={{
          marginTop: "10px",
          padding: "15px",
          background: "#111827",
          borderRadius: "6px",
          lineHeight: "1.6"
        }}>
          {explanation || "AI explanation will appear here..."}
        </div>
      </div>

    </div>
  );
}
