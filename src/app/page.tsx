"use client";

import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { themePresets } from "@crayonai/react-ui";
import "../styles/custom.css";

export default function Home() {
  return <C1Chat 
  apiUrl="/api/chat" 
  agentName="Promad"
  logoUrl="https://www.promad.ai/logo.png"
  theme={{...themePresets.neon, mode: "dark"}} />;
}