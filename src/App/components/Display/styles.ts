import styled from "styled-components";

export const DisplayContainer = styled.div`
  align-items: flex-end;
  background-color: var(--primary-1);
  border: var(--size-2) solid var(--surface-1);
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-weight: 900;
  height: var(--size-12);
  letter-spacing: var(--size-3);
  margin-block: var(--size-2);
  padding: var(--size-3);
  text-transform: uppercase;
`;

export const MainDisplay = styled.div`
  display: flex;
  font-size: var(--size-8);
  height: 50%;
`;

export const MiniDisplay = styled.div`
  height: 25%;
`;

export const Operator = styled.div`
  height: 25%;
`;
