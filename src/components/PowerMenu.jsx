import React from "react";
export default function PowerMenu({ open, onShutdown }) {
  if (!open) return null;
  return (
    <div className="power-menu">
      <button onClick={onShutdown}>Shut Down</button>
      <button>Restart</button>
      <button>Sleep</button>
    </div>
  );
}