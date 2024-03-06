import { useState, useMemo } from "react";
import styled from "styled-components";

import Counter from "./Counter";
import TrafficLight from "./TrafficLight";

const App = () => {
  const [totalClicks, setTotalClicks] = useState(0);
  const [trafficStatus, setTrafficStatus] = useState(0);

  const memoizedState = useMemo(() => ({ label: 'Traffic Status', value: trafficStatus }), [trafficStatus]);

  const handleClick = (): void => {
    setTotalClicks(totalClicks + 1);
  }

  const handleChange = (newStatus: number): void => {
    handleClick();
    setTrafficStatus(newStatus);
  }

  return <AppContainer>
    <TrafficLight state={memoizedState} />
    <CountersContainer>
      <CounterLabelGroup>
        <Counter onChange={handleChange} />
        <CounterLabel>CONTROL</CounterLabel>
      </CounterLabelGroup>
      <CounterLabelGroup>
        <Counter onChange={handleClick} />
        <CounterLabel>PASSIVE</CounterLabel>
      </CounterLabelGroup>
    </CountersContainer>
    <TotalClicksContainer>
      <span>{`Total clicks: ${totalClicks}`}</span>
    </TotalClicksContainer>
  </AppContainer>
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountersContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const CounterLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CounterLabel = styled.span`
  margin-top: 2px;
`;

const TotalClicksContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export default App;
