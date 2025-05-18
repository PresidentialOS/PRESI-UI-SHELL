import React from "react";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px) scale(0.97);}
  to   { opacity: 1; transform: translateY(0) scale(1);}
`;

const StoreWrap = styled.div`
  padding: 64px 80px;
  color: #222;
  background: linear-gradient(135deg, #fff 60%, #f3e3ea 100%);
  min-height: 650px;
`;

const Title = styled.h2`
  color: #b76e79;
  margin-bottom: 32px;
  font-size: 2.4rem;
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
`;

const AppCard = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 28px #836fff22;
  padding: 32px 24px;
  display: flex; flex-direction: column; align-items: center;
  gap: 18px;
  animation: ${fadeUp} .7s cubic-bezier(.5,1.8,.5,1.8);
  transition: box-shadow 0.18s, transform 0.18s;
  &:hover {
    box-shadow: 0 8px 36px #836fff50;
    transform: scale(1.04) rotate(-2deg);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
  }
`;

const AppIcon = styled.div`
  width: 72px; height: 72px;
  background: #836fff20;
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.6rem;
  transition: background 0.15s;
  ${AppCard}:hover & { background: #836fff35;}
`;

const InstallBtn = styled.button`
  background: linear-gradient(90deg, #836fff 0%, #b76e79 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 2px 12px #836fff30;
  transition: background 0.2s, transform 0.16s;
  &:hover { background: linear-gradient(90deg, #b76e79 0%, #836fff 100%); transform: scale(1.08);}
  &:active { transform: scale(0.97);}
`;

const APPS = [
  { name: "Netflix", desc: "Movies & TV Streaming", icon: "🎬" },
  { name: "Spotify", desc: "Music & Podcasts", icon: "🎵" },
  { name: "Steam", desc: "PC Gaming", icon: "🎮" },
  { name: "Discord", desc: "Chat & Communities", icon: "💬" },
  { name: "YouTube", desc: "Video Streaming", icon: "▶️" },
];

export default function AppStore() {
  return (
    <StoreWrap>
      <Title>Presidential Store</Title>
      <AppGrid>
        {APPS.map(app => (
          <AppCard key={app.name}>
            <AppIcon>{app.icon}</AppIcon>
            <div style={{fontWeight:700, fontSize:"1.2rem"}}>{app.name}</div>
            <div style={{opacity:0.7}}>{app.desc}</div>
            <InstallBtn>Install</InstallBtn>
          </AppCard>
        ))}
      </AppGrid>
    </StoreWrap>
  );
}