import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import { setupGamepadNavigation } from "./gamepad";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// Uncomment to enable gamepad navigation
// setupGamepadNavigation(...);