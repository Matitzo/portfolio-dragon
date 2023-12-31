import "./App.css";
import React from "react";
import ImgContainer from "./components/ImgContainer";
import Navbar from "./components/Navbar";
import NavbarModal from "./components/NavbarModal";
import DataContainer from "./components/DataContainer";
import ContactData from "./components/ContactData";
import ProjectModal from "./components/ProjectModal";
import Logo from "./components/Logo";
import { StyledWrapperAbsolute } from "./styles/App.styled";
import ContactModal from "./components/ContactModal";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isProjectModalVisible, setIsProjectModalVisible] =
    React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [activeIndex, SetActiveIndex] = React.useState(0);
  const [projectId, setProjectId] = React.useState(0);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <div className="app">
      <Router>
        <Logo />
        <NavbarModal
          isModalVisible={isModalVisible}
          setIsModalVisible={(value) => setIsModalVisible(false)}
        />
        <ImgContainer />
        <ProjectModal
          isProjectModalVisible={isProjectModalVisible}
          setIsProjectModalVisible={(value) => setIsProjectModalVisible(value)}
          projectId={projectId}
          activeIndex={activeIndex}
          SetActiveIndex={(value) => SetActiveIndex(value)}
        />
        <ContactModal
          isVisible={isVisible}
          setIsVisible={(value) => setIsVisible(value)}
        />
        <StyledWrapperAbsolute>
          <Navbar
            isModalVisible={isModalVisible}
            setIsModalVisible={(value) => setIsModalVisible(value)}
          />
          <DataContainer
            setIsProjectModalVisible={(value) =>
              setIsProjectModalVisible(value)
            }
            setProjectId={(value) => setProjectId(value)}
            SetActiveIndex={(value) => SetActiveIndex(value)}
            setIsVisible={(value) => setIsVisible(value)}
          />
        </StyledWrapperAbsolute>
        <ContactData />
      </Router>
    </div>
  );
}

export default App;
