import styled from "styled-components";

export const StyledNavbarModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9998;
`;

export const StyledNavbarModalWrapper = styled.div`
  background-color: white;
  padding: 2em;
  width: calc(100% - 4em);
  height: 100vh;
`;

export const StyledNavbarModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1em 0;
  width: 100%;
`;

export const StyledNavbarModalHeader = styled.h2``;

export const StyledNavbarModalUl = styled.ul`
  color: black;
  list-style-type: none;
  padding: 0;
  margin: 2em 0;

  li {
    font-size: 1.2rem;
    margin: 1.2em 0;
    display: flex;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      margin-left: 0.5em;
    }
  }
`;
