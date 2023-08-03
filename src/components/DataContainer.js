import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import MyProjects from "./MyProjects";
import {
  StyledDataContainerDiv,
  StyledDataContainerWrapper,
} from "../styles/DataContainer.styled";

function DataContainer({
  setIsProjectModalVisible,
  setProjectId,
  SetActiveIndex,
  setIsVisible,
}) {
  return (
    <StyledDataContainerDiv>
      <StyledDataContainerWrapper>
        <Routes>
          <Route path="/portfolio-dragon/about" element={<About />}></Route>
          <Route
            path="/portfolio-dragon/experience"
            element={<Experience />}
          ></Route>
          <Route
            path="/portfolio-dragon/projects"
            element={
              <MyProjects
                setIsProjectModalVisible={setIsProjectModalVisible}
                setProjectId={setProjectId}
                SetActiveIndex={SetActiveIndex}
                setIsVisible={(value) => setIsVisible(value)}
              />
            }
          ></Route>
          <Route path="/portfolio-dragon" element={<Home />}></Route>
        </Routes>
      </StyledDataContainerWrapper>
    </StyledDataContainerDiv>
  );
}

export default DataContainer;
