import React from "react";
import { projectsData } from "../data/projects";
import {
  StyledProjectModalImageImg,
  StyledProjectModalParagraph,
  StyledProjectModalItemWrapper,
  StyledProjectModalUl,
} from "../styles/ProjectModal.styled";

function ProjectModalItem({ projectId, pageIndex }) {
  return (
    <StyledProjectModalItemWrapper>
      <StyledProjectModalImageImg
        src={projectsData[projectId].pages[pageIndex].img}
        alt="Image of another route."
        loading="lazy"
      />
      <StyledProjectModalUl>
        {projectsData[projectId].pages[pageIndex].descList.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </StyledProjectModalUl>
    </StyledProjectModalItemWrapper>
  );
}

export default ProjectModalItem;
