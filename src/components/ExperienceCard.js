import React from "react";
import TechnologyContainer from "./TechnologyContainer";
import {
  StyledCardContainer,
  StyledUpperDiv,
  StyledUpperDivData,
  StyledLowerDiv,
  StyledLowerDivTechnologiesContainer,
  StyledCardParagraphNoMargin,
} from "../styles/Card.styled";

function ExperienceCard({
  icon,
  company,
  jobPosition,
  date,
  desc,
  technology,
}) {
  return (
    <StyledCardContainer>
      <StyledUpperDiv>
        {icon}
        <StyledUpperDivData>
          <StyledCardParagraphNoMargin style={{ fontWeight: "bold" }}>
            {company}
          </StyledCardParagraphNoMargin>
          <StyledCardParagraphNoMargin>
            {jobPosition}
          </StyledCardParagraphNoMargin>
        </StyledUpperDivData>
        <StyledCardParagraphNoMargin>{date}</StyledCardParagraphNoMargin>
      </StyledUpperDiv>
      <StyledLowerDiv>
        <ul>
          {desc.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
        <StyledLowerDivTechnologiesContainer>
          {technology.map((tech) => (
            <TechnologyContainer tech={tech} />
          ))}
        </StyledLowerDivTechnologiesContainer>
      </StyledLowerDiv>
    </StyledCardContainer>
  );
}

export default ExperienceCard;
