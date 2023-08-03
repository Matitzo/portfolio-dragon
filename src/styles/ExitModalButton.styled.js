import styled from "styled-components";

export const StyledXButton = styled.div`
  position: relative;
  width: 100%;
  height: 0;

  div {
    position: absolute;
    right: ${({ translate }) => translate};
    top: ${({ translate }) => translate};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1),
      0px 0px 5px 0px #cc51d6 inset, 0px -1px 8px 0px #cc51d6 inset;
    color: white;
  }

  &:hover {
    cursor: pointer;
  }
`;
