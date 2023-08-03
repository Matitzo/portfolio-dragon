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
      <StyledProjectModalImageImg
        src={projectsData[projectId].mainImg}
        alt="Image of main site of this project."
        loading="lazy"
      />
      <StyledProjectModalParagraph>
        {projectsData[projectId].mainDesc}
      </StyledProjectModalParagraph>
    </StyledProjectModalItemWrapper>
  );
}

export default ProjectModalMainItem;
