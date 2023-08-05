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
  background: rgb(15, 61, 111);
  background: linear-gradient(
    315deg,
    rgba(15, 61, 111, 1) 1%,
    rgba(87, 2, 93, 1) 71%
  );
  padding: 2em;
  width: calc(100% - 4em);
  height: 100vh;
  color: white;
`;

export const StyledNavbarModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1em 0;
  width: 100%;
`;

export const StyledNavbarModalHeader = styled.h2`
  font-size: 2rem;

  @media (max-height: 480px) {
    font-size: 1.4rem;
  }
`;

export const StyledNavbarModalUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 2em 0;

  li {
    font-size: 1.5rem;
    margin: 1.8em 0;
    display: flex;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      margin-left: 0.5em;
    }

    @media (max-height: 480px) {
      font-size: 1rem;
    }
  }
`;
