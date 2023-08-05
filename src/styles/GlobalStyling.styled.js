import styled from "styled-components";

export const StyledGlobalContainer = styled.div`
  color: white;
  padding: 2em;
  animation: showSlowly 1s ease forwards;

  @keyframes showSlowly {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const StyledGlobalHeader = styled.h1`
  margin: 0;

  span {
    color: #cc51d6;
  }

  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }

  @media (max-width: 550px) {
    font-size: 1.6rem;
  }
`;

export const StyledHomeHeader = styled(StyledGlobalHeader)`
  font-size: 2.5rem;
  margin-top: 2em;

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

export const StyledGlobalHeaderH2 = styled.h2`
  font-size: 2rem;
  margin-top: 1em;

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

export const StyledParagraph = styled.p`
  color: white;
  font-size: 1.1rem;

  span {
    color: #cc51d6;
    font-weight: bold;
  }

  @media (max-width: 550px) {
    font-size: 0.9rem;
  }
`;

export const StyledParagraphHome = styled(StyledParagraph)`
  font-size: 1.2rem;
`;

export const StyledButton = styled.div`
  width: fit-content;
  display: flex;
  height: 38px;
  width: 100px;
  padding: 8px 26px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(
      180deg,
      rgba(254, 200, 241, 0.9) 0%,
      rgba(237, 146, 215, 0) 40.39%
    );
    radial-gradient(
      96.63% 140.33% at 76.68% 66.67%,
      rgba(96, 46, 166, 0) 0%,
      rgba(201, 119, 214, 0.5) 100%
    );
  background-blend-mode: overlay, normal;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1),
    0px 0px 5px 0px #cc51d6 inset, 0px -1px 8px 0px #cc51d6 inset;

    transition:  .3s;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

export const StyledFlexButtonWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0.5em;
  width: fit-content;
  flex-wrap: wrap;
`;

export const StyledButtonSmall = styled(StyledButton)`
  height: 100%;
  width: fit-content;
  padding: 6px 20px;
`;

export const StyledGlobalUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1em 1em;
`;

export const StyledGlobalLi = styled.li`
  font-size: 1.2rem;
  margin: 0.8em 0;
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-left: 0.5em;
  }

  @media (max-width: 550px) {
    font-size: 0.9rem;
  }
`;

export const StyledButtonWithUnderline = styled.div`
  color: white;
`;
