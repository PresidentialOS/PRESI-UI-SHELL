import React from "react";
import AppStore from "./AppStore";
import DiscordSection from "./DiscordSection";
import VoiceAssistant from "./VoiceAssistant";

const PanelStyles = {
  padding: "64px 80px",
  minHeight: "600px"
};

export default function ContentPanels({ tab }) {
  switch (tab) {
    case "movies":
      return <div style={PanelStyles}><h2>Movies</h2><p>All your favorite movies and shows here!</p></div>;
    case "music":
      return <div style={PanelStyles}><h2>Music</h2><p>Stream and manage your music library.</p></div>;
    case "gaming":
      return <div style={PanelStyles}><h2>Gaming</h2><p>Launch games and manage game library.</p></div>;
    case "apps":
      return <div style={PanelStyles}><h2>Apps</h2><p>Manage installed apps, add more in the Store tab.</p></div>;
    case "store":
      return <AppStore />;
    case "discord":
      return <DiscordSection />;
    case "settings":
      return <VoiceAssistant />; // for demo, settings are in overlay
    default:
      return <div style={PanelStyles}><h2>Welcome!</h2></div>;
  }
}