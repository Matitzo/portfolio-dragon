import styled from "styled-components";

export const StyledProjectModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 5em;
  z-index: 999;
  padding: 0.5rem;
  color: white;
  width: calc(60% - 11rem);
  height: fit-content;
  border-radius: 10px;
  background: var(
    --bottomleftmenu-notification,
    linear-gradient(
      180deg,
      rgba(49, 58, 91, 0.1) 0%,
      rgba(49, 58, 91, 0.5) 65.46%,
      rgba(49, 58, 91, 0) 100%
    )
  );
  box-shadow: 0 2px 3px 0 #cc51d6, 0 0px 2px 0 #cc51d6;
  backdrop-filter: blur(20px);
  translate: ${({ isVisible }) =>
    !isVisible ? "0px calc(-200%)" : "0px calc(-50%)"};
  transition: 0.6s;
  overflow: hidden;

  @media (min-width: 2000px) {
    translate: ${({ isVisible }) =>
      !isVisible ? "0px calc(-300%)" : "0px calc(-50%)"};
  }

  @media (max-width: 900px) {
    width: calc(100% - 15rem);
    left: 7em;
    translate: ${({ isVisible }) =>
      !isVisible ? "0px calc(-200%)" : "0px calc(-50%)"};
  }

  @media (max-width: 650px) {
    width: calc(100% - 5rem);
    left: 2em;
  }

  @media (max-width: 450px) {
    width: calc(100% - 3rem);
    left: 1em;
  }

  @media (min-height: 1000px) {
    translate: ${({ isVisible }) =>
      !isVisible ? "0px calc(-300%)" : "0px calc(-50%)"};
  }

  @media (max-height: 610px) {
    position: absolute;
    top: 70%;
  }

  @media (max-height: 500px) {
    top: 20em;
    translate: ${({ isVisible }) => !isVisible && "0px calc(-200%)"};
  }
`;

export const StyledProjectModalDataWrapper = styled.div`
  ${({ fireAnimation }) =>
    fireAnimation ? "animation: showSlowly 1s ease forwards;" : ""}

  @keyframes showSlowly {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const StyledProjectModalHeaderH2 = styled.h2`
  margin: 0 0.5rem 0.5rem 0.5rem;

  @media (max-width: 1100px) {
    font-size: 1.3rem;
  }
`;

export const StyledProjectModalParagraph = styled.p`
  margin: 0.5rem;
  line-height: 1.5;

  @media (max-width: 1100px) {
    font-size: 0.9rem;
  }
`;

export const StyledProjectModalImageImg = styled.img`
  width: calc(100% - 1rem);
  margin: 0.5rem;
  border-radius: 8px;
`;

export const StyledProjectModalItemWrapper = styled.div`
  transition: transform 0.3s;
  min-width: 100%;
`;

export const StyledProjectModalItemsWrapper = styled.div`
  display: flex;
  transition: transform 0.3s;
`;

export const StyledProjectModalPaginationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5em;
  margin: 0.5em;

  div {
    display: flex;
    gap: 0.5em;
  }

  @media (max-width: 900px) {
    gap: 2em;
  }
`;

export const StyledProjectModalUl = styled.ul`
  margin: 0 0 1.2em 0;
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

  @media (max-width: 1100px) {
    font-size: 0.9rem;
  }
`;
