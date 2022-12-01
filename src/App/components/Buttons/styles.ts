import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

export const ButtonsContainer = styled.div`
  display: grid;
  gap: var(--size-3);

  grid-template-areas:
    "backspace divide multiply minus"
    "num7 num8 num9 add"
    "num4 num5 num6 add"
    "num1 num2 num3 equals"
    "num0 num0 . equals";
  place-content: center;
`;

const lightButtonStyles = css`
  background-color: var(--surface-1);
  color: var(--accent);
`;

const defaultButtonStyles = css`
  background-color: var(--surface-1);
`;

export const Button = styled.button<ButtonProps>`
  grid-area: ${({ area }) => area};
  padding: 0;
  min-height: var(--size-10);
  min-width: var(--size-10);

  ${({ light }) => (light ? lightButtonStyles : defaultButtonStyles)}
`;
