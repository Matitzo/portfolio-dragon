import React from "react";
import logoImg from "../images/logo.png";
import { StyledLogoImg } from "../styles/Logo.styled";
import { StyledLink } from "../styles/Link.styled";

function Logo() {
  return (
    <StyledLink to={"/portfolio-dragon"}>
      <StyledLogoImg src={logoImg} />
    </StyledLink>
  );
}

export default Logo;
