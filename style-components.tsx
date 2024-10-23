import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3490dc;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2779bd;
  }
`;

export default function App() {
  return <Button>Click me</Button>;
}
