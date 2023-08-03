import React from "react";
import { projectsData } from "../data/projects";
import {
  StyledProjectModalImageImg,
  StyledProjectModalParagraph,
  StyledProjectModalItemWrapper,
} from "../styles/ProjectModal.styled";

function ProjectModalMainItem({ projectId }) {
  return (
    <StyledProjectModalItemWrapper>
      <StyledProjectModalImageImg src={projectsData[projectId].mainImg} />
      <StyledProjectModalParagraph>
        {projectsData[projectId].mainDesc}
      </StyledProjectModalParagraph>
    </StyledProjectModalItemWrapper>
  );
}

export default ProjectModalMainItem;
