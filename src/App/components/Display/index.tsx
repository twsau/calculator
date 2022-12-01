import { DisplayContainer, MainDisplay, MiniDisplay, Operator } from "./styles";
import { useCalculator } from "../../store";

export const Display = () => {
  const { display, miniDisplay, operator } = useCalculator();
  return (
    <DisplayContainer>
      <MiniDisplay>{miniDisplay}</MiniDisplay>
      <Operator>{operator ?? ""}</Operator>
      <MainDisplay>{display}</MainDisplay>
    </DisplayContainer>
  );
};
