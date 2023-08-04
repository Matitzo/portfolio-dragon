import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
  width: 100%;
  backdrop-filter: blur(50px);
`;

export const StyledArrow = styled.div`
  height: 72px;
  width: 72px;
  position: absolute;
  top: 12.8px;
  left: -37px;
  transform: rotate(-135deg);
  z-index: 999;

  &::before {
    position: absolute;
    top: 0;
    left: -5%;
    content: "";
    height: 2px;
    width: 105%;
    background-image: linear-gradient(
      to right,
      #3d0043,
      #5e1265,
      #812789,
      #a63caf,
      #cc51d6
    );
    filter: blur(1px);
  }
  &::after {
    transform: rotate(-90deg) translateX(-50%) translateY(35px);

    position: absolute;
    top: 0;
    right: 0;
    content: "";
    height: 2px;
    width: 100%;
    background-color: #3d0043;
    filter: blur(1px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledNavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  height: 100px;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    height: 2px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #3d0043,
      #5e1265,
      #812789,
      #a63caf,
      #cc51d6
    );
    filter: blur(1px);
  }

  @media (max-width: 900px) {
    justify-content: end;
  }
`;

export const StyledButtonsWrapper = styled.div`
  color: white;
  width: 80%;
  min-width: 350px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      transition: 0.3s;

      &:hover {
        scale: 1.15;
      }
    }
  }

  @media (max-width: 900px) {
    align-items: start;
    width: 50%;
    min-width: 350px;
    padding-right: 2rem;

    ul {
      justify-content: space-between;
    }
  }

  @media (max-width: 550px) {
    align-items: start;
    width: 100%;
    min-width: 0;
    padding-left: 2rem;

    ul {
      justify-content: space-between;
      gap: 1em;
    }
  }
`;
