import React from "react";
import {
  StyledGlobalContainer,
  StyledGlobalHeader,
  StyledParagraph,
  StyledButton,
} from "../styles/GlobalStyling.styled";
import { StyledLink } from "../styles/Link.styled";

function About() {
  return (
    <StyledGlobalContainer>
      <StyledGlobalHeader>About</StyledGlobalHeader>
      <StyledParagraph>
        Hello and welcome to my portfolio! My name is <span>Mateusz</span> and I
        am a self-taught frontend developer specializing in <span>ReactJS</span>
        . My journey in programming started during my studies in geodesy, where
        I encountered programming for the first time and learned{" "}
        <span>Python</span> and <span>MySQL</span>. From that moment on, I knew
        that programming was my true passion.
      </StyledParagraph>
      <StyledParagraph>
        I have dedicated countless hours to mastering ReactJS and I am always
        eager to expand my skillset by learning new technologies and techniques.
        I take great pride in creating user-friendly and good looking web
        applications that provide seamless user experiences. My goal is to bring
        ideas to life and to help businesses and individuals achieve their
        online objectives.
      </StyledParagraph>
      <StyledParagraph>
        Aside from programming, I have a strong interest in science, gaming,
        technology, and fitness. I enjoy staying up-to-date with the latest
        developments in the tech industry, playing video games, and hitting the
        gym to stay active and healthy. When I have some free time I also like
        to read books.
      </StyledParagraph>
      <StyledParagraph>
        Thank you for taking the time to visit my portfolio. Please feel free to
        explore my projects and get in <span>touch</span> if you have any
        questions or if you would like to collaborate on a project.
      </StyledParagraph>
      <StyledLink
        to={"/portfolio-dragon/projects"}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <StyledButton>My projects</StyledButton>
      </StyledLink>
    </StyledGlobalContainer>
  );
}

export default About;
