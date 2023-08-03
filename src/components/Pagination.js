import React from "react";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { StyledProjectModalPaginationDiv } from "../styles/ProjectModal.styled";
import { projectsData } from "../data/projects";

function Pagination({ activeIndex, SetActiveIndex, projectId }) {
  const iconSize = {
    width: "20px",
    height: "20px",
    color: "white",
    cursor: "pointer",
  };
  const iconSizeBig = {
    width: "25px",
    height: "25px",
    color: "white",
    cursor: "pointer",
  };

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= projectsData[projectId].pages.length + 1) {
      newIndex = projectsData[projectId].pages.length;
    }

    SetActiveIndex(newIndex);
  }

  return (
    <StyledProjectModalPaginationDiv>
      <AiOutlineLeft
        onClick={() => updateIndex(activeIndex - 1)}
        style={iconSizeBig}
      />
      <div>
        {activeIndex == 0 ? (
          <IoMdRadioButtonOn
            onClick={() => SetActiveIndex(0)}
            style={iconSize}
          />
        ) : (
          <IoMdRadioButtonOff
            onClick={() => SetActiveIndex(0)}
            style={iconSize}
          />
        )}
        {projectsData[projectId].pages.map((page, index) =>
          index + 1 === activeIndex ? (
            <IoMdRadioButtonOn
              onClick={() => SetActiveIndex(index + 1)}
              style={iconSize}
            />
          ) : (
            <IoMdRadioButtonOff
              onClick={() => SetActiveIndex(index + 1)}
              style={iconSize}
            />
          )
        )}
      </div>
      <AiOutlineRight
        onClick={() => updateIndex(activeIndex + 1)}
        style={iconSizeBig}
      />
    </StyledProjectModalPaginationDiv>
  );
}

export default Pagination;
