import React from "react";
import { StyledLink } from "../styles/Link.styled";
import { StyledButtonsWrapper } from "../styles/Navbar.styled";

function NavbarButtonsContainer() {
  return (
    <StyledButtonsWrapper>
      <ul>
        <li>
          <StyledLink to={"/portfolio-dragon"}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to={"/portfolio-dragon/about"}>About</StyledLink>
        </li>
        <li>
          <StyledLink to={"/portfolio-dragon/experience"}>
            Experience
          </StyledLink>
        </li>
        <li>
          <StyledLink to={"/portfolio-dragon/projects"}>Projects</StyledLink>
        </li>
      </ul>
    </StyledButtonsWrapper>
  );
}

export default NavbarButtonsContainer;
