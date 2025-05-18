import React from "react";
import styled from "styled-components";

const DiscordWrap = styled.div`
  padding: 64px 80px;
  color: #222;
  min-height: 650px;
  background: linear-gradient(135deg, #836fff 0%, #b76e79 100%);
  border-radius: 0 0 40px 40px;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 32px;
  font-size: 2.4rem;
`;

const MessageList = styled.ul`
  background: #fff8;
  border-radius: 20px;
  padding: 32px 24px;
  max-width: 600px;
  margin: 0;
  min-height: 240px;
`;

const Message = styled.li`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 16px;
  list-style: none;
`;

const MOCK_MESSAGES = [
  { user: "PresiBot", text: "Welcome to the Presidential Discord!" },
  { user: "You", text: "Hey! Excited to try this OS." },
  { user: "Mod", text: "If you need help, ping us 👋" },
];

export default function DiscordSection() {
  return (
    <DiscordWrap>
      <Title>Discord Community</Title>
      <MessageList>
        {MOCK_MESSAGES.map((msg, i) => (
          <Message key={i}>
            <strong>{msg.user}:</strong> {msg.text}
          </Message>
        ))}
      </MessageList>
    </DiscordWrap>
  );
}