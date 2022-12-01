export interface CalculatorStore {
  display: string;
  miniDisplay: string;
  operator: Operator | null;
  addToDisplay: (num: number) => void;
  clearDisplay: () => void;
  clearAll: () => void;
  clearLast: () => void;
  setOperator: (operator: Operator | null) => void;
  equals: () => void;
}

export type Operator = "+" | "-" | "*" | "/";
