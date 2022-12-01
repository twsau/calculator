import create from "zustand";
import { CalculatorStore } from "./types";

const MAX_DIGITS = 8;

const operate = {
  "+": (a: number, b: number) => (a + b).toFixed(),
  "-": (a: number, b: number) => (a - b).toFixed(),
  "*": (a: number, b: number) => (a * b).toFixed(),
  "/": (a: number, b: number) => (a / b).toFixed(),
};

export const useCalculator = create<CalculatorStore>()((set, get) => ({
  display: "",
  miniDisplay: "",
  operator: null,
  addToDisplay: (num) => {
    if (`${get().display}${num}`.length > MAX_DIGITS) return;
    set(({ display }) => ({ display: display + num }));
  },
  clearLast: () => set(({ display }) => ({ display: display.slice(0, -1) })),
  clearAll: () => set({ display: "", miniDisplay: "", operator: undefined }),
  clearDisplay: () => set({ display: "" }),
  setOperator: (operator) => {
    if (get().display.length > 0) {
      const previousOperator = get().operator ?? null;
      set(({ display, miniDisplay }) => ({
        display: "",
        miniDisplay: previousOperator
          ? operate[previousOperator](
              parseInt(miniDisplay, 10),
              parseInt(display, 10)
            )
          : display,
      }));
    }

    set({ operator });
  },
  equals: () => {
    if (!get().operator) return;
    get().setOperator(null);
  },
}));
