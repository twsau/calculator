import { Branding } from "./components/Branding";
import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";
import { InputHandler } from "./components/InputHandler";
import { Calculator, Wrapper } from "./styles";

export const App = () => {
  return (
    <InputHandler>
      <Wrapper>
        <Calculator>
          {/* <Branding /> */}
          <Display />
          <Buttons />
        </Calculator>
      </Wrapper>
    </InputHandler>
  );
};
