import styled from "styled-components";

export const StyledDataContainerDiv = styled.div`
  width: 100%;
  backdrop-filter: blur(100px);
  height: 100%;
  max-height: calc(150vh - 100px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    max-height: none;
  }
`;

export const StyledDataContainerWrapper = styled.div`
  //border-left: 2px solid #cc51d6;
  min-height: calc(150vh - 101.6px);
  height: fit-content;
  max-height: 150vh;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 2px;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      #3d0043,
      #5e1265,
      #812789,
      #a63caf,
      #cc51d6
    );
    filter: blur(1px);
  }

  @media (max-width: 900px) {
    width: 100%;
    //min-height: 0;
    height: fit-content;
    max-height: 100px;

    &::before {
      width: 0;
    }
  }
`;