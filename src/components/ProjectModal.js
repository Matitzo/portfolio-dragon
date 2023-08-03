import React from "react";
import ExitModalButton from "./ExitModalButton";
import Pagination from "./Pagination";
import {
  StyledProjectModalContainer,
  StyledProjectModalHeaderH2,
  StyledProjectModalItemsWrapper,
  StyledProjectModalDataWrapper,
} from "../styles/ProjectModal.styled";
import { projectsData } from "../data/projects";
import ProjectModalMainItem from "./ProjectModalMainItem";
import {
  StyledButtonSmall,
  StyledFlexButtonWrapper,
} from "../styles/GlobalStyling.styled";
import { StyledLink } from "../styles/Link.styled";
import ProjectModalItem from "./ProjectModalItem";

function ProjectModal({
  isProjectModalVisible,
  setIsProjectModalVisible,
  projectId,
  activeIndex,
  SetActiveIndex,
}) {
  const [fireAnimation, setFireAnimation] = React.useState(true);

  React.useEffect(() => {
    setFireAnimation(true);
  }, [projectId]);

  return (
    <StyledProjectModalContainer isVisible={isProjectModalVisible}>
      <StyledProjectModalDataWrapper
        fireAnimation={fireAnimation}
        onAnimationEnd={() => setFireAnimation(false)}
      >
        <ExitModalButton
          state={isProjectModalVisible}
          setState={(value) => setIsProjectModalVisible(value)}
          translate={"0"}
        />
        <StyledProjectModalHeaderH2>
          {projectsData[projectId].title}
        </StyledProjectModalHeaderH2>
        <StyledProjectModalItemsWrapper
          activeIndex={activeIndex}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          <ProjectModalMainItem projectId={projectId} />
          {projectsData[projectId].pages.map((page, index) => (
            <ProjectModalItem projectId={projectId} pageIndex={index} />
          ))}
        </StyledProjectModalItemsWrapper>
        <Pagination
          activeIndex={activeIndex}
          SetActiveIndex={SetActiveIndex}
          projectId={projectId}
        />
        <StyledFlexButtonWrapper>
          <StyledLink to={projectsData[projectId].pageLink} target="_blank">
            <StyledButtonSmall>Website</StyledButtonSmall>
          </StyledLink>
          {projectsData[projectId].gitHubLink && (
            <StyledLink to={projectsData[projectId].gitHubLink} target="_blank">
              <StyledButtonSmall>GitHub</StyledButtonSmall>
            </StyledLink>
          )}
        </StyledFlexButtonWrapper>
      </StyledProjectModalDataWrapper>
    </StyledProjectModalContainer>
  );
}

export default ProjectModal;
