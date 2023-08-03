import styled from "styled-components";

export const StyledWrapperAbsolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;

  @media (max-width: 800px) {
    width: 100%;
    height: fit-content;
  }
`;
