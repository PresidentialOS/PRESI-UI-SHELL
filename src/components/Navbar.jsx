import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import logo from "../../assets/logo.svg";
import navSound from "../../assets/nav.mp3";

const TABS = [
  { key: "movies", label: "Movies" },
  { key: "music", label: "Music" },
  { key: "gaming", label: "Gaming" },
  { key: "apps", label: "Apps" },
  { key: "store", label: "Store" },
  { key: "discord", label: "Discord" },
  { key: "settings", label: "Settings" },
];

const NavbarWrap = styled.nav`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #b76e79 0%, #836fff 100%);
  height: 80px;
  width: 100vw;
  box-shadow: 0px 4px 28px #836fff40;
  z-index: 1000;
  position: relative;
  overflow: visible;
`;

const Logo = styled.img`
  height: 54px;
  margin: 0 36px;
  user-select: none;
  pointer-events: none;
  filter: drop-shadow(0 2px 8px #836fff33);
  animation: popin 0.8s cubic-bezier(.49,1.89,.49,1.89);
  @keyframes popin {
    from { transform: scale(0.7) rotate(-13deg); opacity: 0; }
    to   { transform: scale(1) rotate(0); opacity: 1; }
  }
`;

const NavTabs = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
`;

const Tab = styled.li`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  padding: 0 32px;
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: center;
  opacity: 0.85;
  transition: background 0.18s, opacity 0.15s, color 0.15s, transform 0.13s;
  ${({ active }) =>
    active &&
    css`
      background: rgba(255, 255, 255, 0.12);
      color: #ffeaf5;
      opacity: 1;
      border-bottom: 4px solid #fff;
      transform: scale(1.08);
    `}
  &:hover {
    background: rgba(255,255,255,0.14);
    opacity: 1;
    transform: translateY(-2px) scale(1.04);
  }
  &:active {
    background: rgba(255,255,255,0.19);
    transform: scale(0.98);
  }
  position: relative;
  z-index: 2;
`;

const Indicator = styled.div`
  position: absolute;
  bottom: 0; left: 0;
  height: 4px;
  width: 100px;
  background: linear-gradient(90deg, #fff 10%, #ffeaf5 90%);
  border-radius: 2px;
  box-shadow: 0 2px 10px #836fff55;
  transition: left 0.25s cubic-bezier(.64,1.58,.64,1.58), width 0.25s cubic-bezier(.64,1.58,.64,1.58);
  z-index: 1;
`;

const Account = styled.div`
  margin: 0 36px;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.18s;
  &:hover { transform: scale(1.07) rotate(-1deg);}
`;

const Avatar = styled.div`
  background: linear-gradient(135deg, #836fff 0%, #b76e79 100%);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 2px 16px #836fff44;
`;

export default function Navbar({ tab, setTab, user, onAccountOpen }) {
  const [audio] = React.useState(() => new Audio(navSound));
  const tabRefs = useRef([]);

  function handleTabClick(key) {
    audio.currentTime = 0;
    audio.play();
    setTab(key);
  }

  // Animate indicator to selected tab
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0 });
  useEffect(() => {
    const idx = TABS.findIndex(t => t.key === tab);
    if (tabRefs.current[idx]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[idx];
      setIndicator({ left: offsetLeft, width: offsetWidth });
    }
  }, [tab]);

  return (
    <NavbarWrap>
      <Logo src={logo} alt="Presidential OS" />
      <NavTabs>
        {TABS.map(({ key, label }, idx) => (
          <Tab
            key={key}
            ref={el => tabRefs.current[idx] = el}
            active={tab === key}
            onClick={() => handleTabClick(key)}
            tabIndex={0}
          >
            {label}
          </Tab>
        ))}
        <Indicator
          style={{
            left: indicator.left,
            width: indicator.width || 100,
          }}
        />
      </NavTabs>
      <Account onClick={onAccountOpen}>
        <Avatar>{user.avatar || "U"}</Avatar>
        {user.name}
      </Account>
    </NavbarWrap>
  );
}