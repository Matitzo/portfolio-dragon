import React from "react";
import ProjectCard from "./ProjectCard";
import {
  StyledGlobalContainer,
  StyledGlobalHeader,
} from "../styles/GlobalStyling.styled";
import { projectsCardData } from "../data/projectsCard";

function MyProjects({
  setIsProjectModalVisible,
  setProjectId,
  SetActiveIndex,
  setIsVisible,
}) {
  return (
    <StyledGlobalContainer>
      <StyledGlobalHeader>Projects</StyledGlobalHeader>
      {projectsCardData.map((project) => (
        <ProjectCard
          id={project.id}
          setProjectId={setProjectId}
          SetActiveIndex={SetActiveIndex}
          setIsProjectModalVisible={(value) => setIsProjectModalVisible(value)}
          name={project.name}
          description={project.desc}
          bullets={project.bullets}
          technologies={project.technologies}
          setIsVisible={setIsVisible}
        />
      ))}
    </StyledGlobalContainer>
  );
}

export default MyProjects;
