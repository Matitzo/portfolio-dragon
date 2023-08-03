import styled from "styled-components";

export const StyledDataContainerDiv = styled.div`
  width: 100%;
  backdrop-filter: blur(100px);
  height: 100%;
`;

export const StyledDataContainerWrapper = styled.div`
  //border-left: 2px solid #cc51d6;
  min-height: calc(150vh - 101.6px);

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

  @media (max-width: 800px) {
    div {
      border-left: 0;
      min-height: calc(100vh - 101.6px);
      height: fit-content;
    }
  }
`;
