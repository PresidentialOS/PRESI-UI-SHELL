import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../assets/logo.svg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const BootScreenWrapper = styled.div`
  background: linear-gradient(135deg, #b76e79 0%, #836fff 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.8s;
`;

const LogoImg = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 50px;
  filter: drop-shadow(0 0 30px #b76e7970);
  user-select: none;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  letter-spacing: 0.2em;
  font-weight: 700;
  text-shadow: 0 4px 16px #836fff90;
`;

const Subtext = styled.p`
  color: #fff;
  opacity: 0.85;
  margin-top: 15px;
  font-size: 1.2rem;
`;

export default function BootScreen({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      if (onDone) onDone();
    }, 2200);
    return () => clearTimeout(timeout);
  }, [onDone]);

  if (!show) return null;

  return (
    <BootScreenWrapper>
      <LogoImg src={logo} alt="Presidential OS Logo" />
      <Title>Presidential OS</Title>
      <Subtext>Welcome to a new era of streaming & gaming</Subtext>
    </BootScreenWrapper>
  );
}