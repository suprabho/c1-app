"use client";

import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { themePresets } from "@crayonai/react-ui";
import "./globals.css";

export default function Home() {
  return <C1Chat 
  apiUrl="/api/chat" 
  agentName="Promad"
  logoUrl="./images/icons/android-chrome-512x512.png"
  theme={{...themePresets.neon, mode: "dark"}} />;
}