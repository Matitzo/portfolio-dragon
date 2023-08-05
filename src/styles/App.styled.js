import styled from "styled-components";

export const StyledWrapperAbsolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;

  @media (min-width: 1700px) {
    width: 30%;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: calc(200vh - 100px);
  }
`;
