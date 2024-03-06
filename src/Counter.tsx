import { useState } from 'react';
import styled from 'styled-components';

interface CounterProps {
  onChange?: (newValue: number) => void
};

const Counter = ({ onChange }: CounterProps) => {
  const [count, setCount] = useState(0);

  function handleChange(newValue: number) {
    setCount(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }

  return <Container>
    <Button onClick={() => handleChange(count - 1)}>-</Button>
    <Value>{count}</Value>
    <Button onClick={() => handleChange(count + 1)}>+</Button>
  </Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100px;
  border: 1px solid gray;
  padding: 5px;
  margin-inline: 5px;
`;

const Button = styled.button`
  padding: 5px;
  cursor: pointer;
`;

const Value = styled.span`
  font-size: 24px;
`;

export default Counter;
