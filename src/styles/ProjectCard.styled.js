import styled from "styled-components";

export const StyledProjectCardContainer = styled.div`
  color: white;
  border-radius: 5px;
  padding: 1em;
  margin: 1.5em 0;
  box-shadow: 0 2px 3px 0 #cc51d6, 0 0px 2px 0 #cc51d6;
  background: var(
    --bottomleftmenu-notification,
    linear-gradient(
      180deg,
      rgba(49, 58, 91, 0.1) 0%,
      rgba(49, 58, 91, 0.5) 65.46%,
      rgba(49, 58, 91, 0) 100%
    )
  );

  p {
    margin: 0;
  }
`;

export const StyledLowerDiv = styled.div`
  width: 100%;

  ul {
    margin: 0 0 1.2em 0;
    padding: 0 0 0 1em;
    list-style-type: none;

    li::before {
      content: "";
      border-color: transparent #cc51d6;
      border-style: solid;
      border-radius: 2px;
      border-width: 0.5em 0 0.5em 0.5em;
      display: block;
      height: 0;
      width: 0;
      left: -1em;
      top: 1.2em;
      position: relative;
    }
  }
`;
