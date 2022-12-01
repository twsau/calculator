import { Branding } from "./components/Branding";
import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";
import { Calculator, Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <Calculator>
        {/* <Branding /> */}
        <Display />
        <Buttons />
      </Calculator>
    </Wrapper>
  );
};
