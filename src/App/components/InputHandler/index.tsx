import React, { useEffect, useRef } from "react";
import type { InputHandlerProps } from "./types";
import { useCalculator } from "../../store";

export const InputHandler = ({ children }: InputHandlerProps) => {
  const { addToDisplay, clearLast, equals, setOperator } = useCalculator();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const handleInput = (event: React.KeyboardEvent) => {
    switch (event.code) {
      case "Digit1":
        addToDisplay(1);
        break;
      case "Digit2":
        addToDisplay(2);
        break;
      case "Digit3":
        addToDisplay(3);
        break;
      case "Digit4":
        addToDisplay(4);
        break;
      case "Digit5":
        addToDisplay(5);
        break;
      case "Digit6":
        addToDisplay(6);
        break;
      case "Digit7":
        addToDisplay(7);
        break;
      case "Digit8":
        event.key === "*" ? setOperator("*") : addToDisplay(8);
        break;
      case "Digit9":
        addToDisplay(9);
        break;
      case "Digit0":
        addToDisplay(0);
        break;
      case "Backspace":
        clearLast();
        break;
      case "Equal":
      case "Enter":
        event.key === "+" ? setOperator("+") : equals();
        break;
      case "Minus":
        setOperator("-");
        break;
      case "Slash":
        setOperator("/");
        break;
      default:
        // console.log(event.code);
    }
  };

  return (
    <div ref={ref} onKeyDown={handleInput} tabIndex={0}>
      {children}
    </div>
  );
};
