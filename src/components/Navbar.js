import React from "react";
import { StyledLink } from "../styles/Link.styled";
import {
  StyledNavbarContainer,
  StyledButtonsWrapper,
  StyledArrow,
  StyledNavbarWrapper,
} from "../styles/Navbar.styled";

function Navbar() {
  return (
    <StyledNavbarWrapper>
      <StyledArrow />
      <StyledNavbarContainer>
        <StyledButtonsWrapper>
          <ul>
            <li>
              <StyledLink to={"/"}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={"/about"}>About</StyledLink>
            </li>
            <li>
              <StyledLink to={"/experience"}>Experience</StyledLink>
            </li>
            <li>
              <StyledLink to={"/projects"}>Projects</StyledLink>
            </li>
          </ul>
        </StyledButtonsWrapper>
      </StyledNavbarContainer>
    </StyledNavbarWrapper>
  );
}

export default Navbar;
