import React from "react";
export default function DiscordLogin({ onLogin }) {
  const handleLogin = () => {
    window.open("https://discord.com/oauth2/authorize?...YOUR_APP_ID...", "_blank");
    // Listen for redirect/callback in Electron main process.
    onLogin({ username: "YourDiscordUser", avatar: "..." });
  };
  return <button onClick={handleLogin}>Login with Discord</button>;
}