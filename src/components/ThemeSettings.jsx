import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
const themes = {
  roseGold: { primary: "#b76e79", accent: "#836fff", bg: "#fff6f6" },
  cyber: { primary: "#0ff", accent: "#f0f", bg: "#111" },
};
export default function ThemeSettings({ setTheme }) {
  return (
    <div>
      {Object.keys(themes).map(key => (
        <button key={key} onClick={() => setTheme(themes[key])}>{key}</button>
      ))}
    </div>
  );
}