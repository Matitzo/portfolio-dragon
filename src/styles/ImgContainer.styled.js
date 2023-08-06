import styled from "styled-components";
import imgDragon from "../images/dragon.jpg";

export const StyledImgContainer = styled.div`
  height: 150vh;
  width: 81%;
  // background-image: url(${imgDragon});
  // background-size: contain;
  // background-repeat: no-repeat;

  @media (max-width: 900px) {
    width: 100%;
    height: 100vh;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
