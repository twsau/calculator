import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  inset: 0;
  place-items: center;
  position: fixed;
`;

export const Calculator = styled.div`
  background-color: var(--surface-3);
  border: 3px solid var(--surface-2);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  padding: var(--size-4);

  @media (max-width: 50ch) {
    height: 100%;
    width: 100%;
  }
`;
