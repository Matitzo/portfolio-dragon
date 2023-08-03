import React from "react";
import TechnologyContainer from "./TechnologyContainer";
import SmartEdukacjaImg from "../images/smart-edukacja.png";
import {
  StyledCardContainer,
  StyledUpperDiv,
  StyledUpperDivData,
  StyledLowerDiv,
  StyledLowerDivTechnologiesContainer,
  StyledImgContainer,
  StyledCardParagraphWithMargin,
  StyledHeaderFlexWrapper,
} from "../styles/Card.styled";
import { StyledButtonSmall } from "../styles/GlobalStyling.styled";

function ProjectCard({
  id,
  setProjectId,
  SetActiveIndex,
  setIsProjectModalVisible,
  name,
  description,
  bullets,
  technologies,
  setIsVisible,
}) {
  function handleClick() {
    setProjectId(id);
    SetActiveIndex(0);
    setIsProjectModalVisible(true);
    setIsVisible(false);
  }

  return (
    <StyledCardContainer>
      <StyledHeaderFlexWrapper>
        <h2>{name}</h2>
        <StyledButtonSmall onClick={() => handleClick()}>
          More
        </StyledButtonSmall>
      </StyledHeaderFlexWrapper>
      <StyledLowerDiv>
        <StyledCardParagraphWithMargin>
          {description}
        </StyledCardParagraphWithMargin>
        <ul>
          {bullets.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
        <StyledLowerDivTechnologiesContainer>
          {technologies.map((tech) => (
            <TechnologyContainer tech={tech} />
          ))}
        </StyledLowerDivTechnologiesContainer>
      </StyledLowerDiv>
    </StyledCardContainer>
  );
}

export default ProjectCard;
