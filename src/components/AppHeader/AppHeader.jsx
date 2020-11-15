import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./AppHeader.styles";
function AppHeader() {
  const result = useSelector((state) => state.calculator);
  return (
    <header>
      <Wrapper>
        alga
        <span>
          <h3>Shopping </h3>
        </span>
        <span>{result}</span>
      </Wrapper>
    </header>
  );
}

export default AppHeader;
