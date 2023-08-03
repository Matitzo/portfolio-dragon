import React from "react";
import { StyledImgContainer, StyledImg } from "../styles/ImgContainer.styled";
import dragonImg from "../images/dragon.jpg";

function ImgContainer() {
  return (
    <StyledImgContainer>
      <StyledImg src={dragonImg} />
    </StyledImgContainer>
  );
}

export default ImgContainer;
