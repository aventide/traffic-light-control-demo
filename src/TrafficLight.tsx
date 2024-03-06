import { memo } from 'react';
import styled from 'styled-components';

// this could be imported from a themes definition
const THEME: Record<string, string> = {
  RED: '#FF0000',
  YELLOW: '#FFFF00',
  GREEN: '#00FF00'
};

// util to get color from status number
const getStatusColor = (statusValue: number): string => {
  const statusVariant = statusValue % 3;
  switch(statusVariant){
    case 0: return THEME.RED;
    case 1: return THEME.YELLOW;
    case 2: return THEME.GREEN;
    default: return THEME.RED;
  }
}

interface TrafficLightProps {
  state: {
    label: string,
    value: number
  }
};

const TrafficLight = ({ state }: TrafficLightProps) => {  
  return <Container>
    <IndicatorDot status={getStatusColor(state.value)} />
    <Label>{state.label}</Label>
  </Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  border: 1px solid gray;
  padding: 10px;
`;

const Label = styled.span`
  font-size: 24px;
`;

interface IndicatorDotProps {
  status: string;
}

const IndicatorDot = styled.span<IndicatorDotProps>`
  height: 32px;
  width: 32px;
  background-color: ${props => props.status};
  border-radius: 50%;
  border: 1px solid gray;
  display: inline-block;
  margin-right: 10px;
`;

export default memo(TrafficLight);
