import React from "react";
import { IconContext } from "react-icons";
import {
  StyledGlobalContainer,
  StyledHomeHeader,
  StyledParagraph,
  StyledButton,
  StyledGlobalUl,
  StyledGlobalLi,
  StyledGlobalHeaderH4,
} from "../styles/GlobalStyling.styled";
import { StyledLink } from "../styles/Link.styled";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiLeaflet,
  SiExpress,
  SiPython,
  SiGitlab,
  SiBattledotnet,
  SiCsharp,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

function Home() {
  return (
    <IconContext.Provider
      value={{
        size: "1.3rem",
      }}
    >
      <StyledGlobalContainer>
        <StyledHomeHeader>
          Hi, my name is <span>Mateusz</span>.<br></br> I'm a fronted developer.
        </StyledHomeHeader>
        <StyledParagraph>
          I specialize in front-end development using <span>React.js</span>,
          creating good looking and responsive user interfaces.
        </StyledParagraph>
        <StyledGlobalHeaderH4>Skills:</StyledGlobalHeaderH4>
        <StyledGlobalUl>
          <StyledGlobalLi>
            <div>
              <SiJavascript />
            </div>
            <span>JavaScript</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiReact />
            </div>
            <span>React</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiTypescript />
            </div>
            <span>TypeScript</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <FaNodeJs />
            </div>
            <span>NodeJS</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiExpress />
            </div>
            <span>Express</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiLeaflet />
            </div>
            <span>Leaflet</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiPython />
            </div>
            <span>Python</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <GrMysql />
            <span>MySQL</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiCsharp />
            </div>
            <span>C#</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiBattledotnet />
            </div>
            <span>.NET</span>
          </StyledGlobalLi>
          <StyledGlobalLi>
            <div>
              <SiGitlab />
            </div>
            <span>GitLab</span>
          </StyledGlobalLi>
        </StyledGlobalUl>
        <StyledLink
          to={"/about"}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <StyledButton>About me</StyledButton>
        </StyledLink>
      </StyledGlobalContainer>
    </IconContext.Provider>
  );
}

export default Home;
