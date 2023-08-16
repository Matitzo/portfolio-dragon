import styled from "styled-components";

export const StyledLogoImg = styled.img`
  position: absolute;
  top: 1em;
  left: 5em;
  width: 140px;
  z-index: 100;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    left: 2em;
  }
`;
