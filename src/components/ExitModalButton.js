import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { StyledXButton } from "../styles/ExitModalButton.styled";

function ExitModalButton({ state, setState, translate }) {
  return (
    <StyledXButton
      onClick={() => setState((prevData) => !prevData)}
      translate={translate}
    >
      <div>{state ? <AiOutlineClose /> : <RiContactsFill />}</div>
    </StyledXButton>
  );
}

export default ExitModalButton;
