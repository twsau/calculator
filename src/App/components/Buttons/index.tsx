import { useCalculator } from "../../store";
import { Button, ButtonsContainer } from "./styles";

import {
  RiDeleteBack2Fill,
  RiDeleteBin2Fill,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
  RiNumber0,
} from "react-icons/ri";
import { Operator } from "../../types";

export const Buttons = () => {
  const {
    addToDisplay,
    clearAll,
    clearDisplay,
    clearLast,
    equals,
    setOperator,
  } = useCalculator();
  const onValuePress = (value: number) => addToDisplay(value);
  const onOperatorPress = (operator: Operator) => setOperator(operator);
  return (
    <ButtonsContainer>
      {/* <Button>%</Button> */}
      <Button area="num7" light onClick={() => onValuePress(7)}>
        <RiNumber7 />
      </Button>
      <Button area="num8" light onClick={() => onValuePress(8)}>
        <RiNumber8 />
      </Button>
      <Button area="num9" light onClick={() => onValuePress(9)}>
        <RiNumber9 />
      </Button>
      <Button
        area="divide"
        className="info"
        onClick={() => onOperatorPress("/")}
      >
        ÷
      </Button>
      {/* <Button>&#x207a;&#x2044;&#x208b;</Button> */}
      <Button area="num4" light onClick={() => onValuePress(4)}>
        <RiNumber4 />
      </Button>
      <Button area="num5" light onClick={() => onValuePress(5)}>
        <RiNumber5 />
      </Button>
      <Button area="num6" light onClick={() => onValuePress(6)}>
        <RiNumber6 />
      </Button>
      <Button
        area="multiply"
        className="info"
        onClick={() => onOperatorPress("*")}
      >
        ×
      </Button>
      <Button area="backspace" onClick={clearLast}>
        <RiDeleteBack2Fill />
      </Button>
      <Button area="num1" light onClick={() => onValuePress(1)}>
        <RiNumber1 />
      </Button>
      <Button area="num2" light onClick={() => onValuePress(2)}>
        <RiNumber2 />
      </Button>
      <Button area="num3" light onClick={() => onValuePress(3)}>
        <RiNumber3 />
      </Button>
      <Button
        area="minus"
        className="info"
        onClick={() => onOperatorPress("-")}
      >
        −
      </Button>
      {/* <Button className="error" onClick={clearAll}>
        <RiDeleteBin2Fill />
      </Button> */}
      <Button area="num0" light onClick={() => onValuePress(0)}>
        <RiNumber0 />
      </Button>
      <Button area=".">.</Button>
      <Button area="equals" className="success" onClick={equals}>
        =
      </Button>
      <Button area="add" className="info" onClick={() => onOperatorPress("+")}>
        +
      </Button>
    </ButtonsContainer>
  );
};
