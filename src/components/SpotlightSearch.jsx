import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px);}
  to   { opacity: 1; transform: translateY(0);}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(10,10,20,0.72);
  z-index: 4000;
  display: flex; align-items: flex-start;
  justify-content: center;
  padding-top: 12vh;
  animation: ${fadeIn} 0.3s;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 22px;
  min-width: 450px;
  box-shadow: 0 8px 36px #836fff33;
  padding: 32px 32px 24px 32px;
  display: flex; flex-direction: column; gap: 14px;
`;

const SearchBar = styled.input`
  font-size: 1.35rem;
  padding: 16px 20px;
  border-radius: 14px;
  border: 2px solid #836fff44;
  background: #f8f4fa;
  outline: none;
  margin-bottom: 7px;
  &:focus { border-color: #b76e79; }
`;

const ResultItem = styled.div`
  font-size: 1.1rem;
  color: #836fff;
  padding: 7px 0;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.16s;
  &:hover { background: #b76e7922;}
`;

const MOCK_RESULTS = [
  { title: "Netflix", info: "App" },
  { title: "Steam", info: "App" },
  { title: "Gaming", info: "Tab" },
  { title: "Bluetooth", info: "Settings" },
];

export default function SpotlightSearch({ open, onClose }) {
  const [query, setQuery] = useState("");
  const results = query
    ? MOCK_RESULTS.filter(r =>
        r.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <Box onClick={e => e.stopPropagation()}>
        <SearchBar
          autoFocus
          placeholder="Type to search apps, tabs, settings..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {results.map((r, idx) => (
          <ResultItem key={idx}>{r.title} <span style={{fontSize:12,opacity:.6}}>({r.info})</span></ResultItem>
        ))}
        {!results.length && !!query && (
          <div style={{color:"#aaa",fontSize:13}}>No results for "{query}"</div>
        )}
      </Box>
    </Overlay>
  );
}