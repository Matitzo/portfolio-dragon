import React from "react";
import ExperienceCard from "./ExperienceCard";
import {
  StyledGlobalContainer,
  StyledGlobalHeader,
  StyledParagraph,
} from "../styles/GlobalStyling.styled";
import { SiJavascript } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";

function Experience() {
  return (
    <StyledGlobalContainer>
      <StyledGlobalHeader>Experience</StyledGlobalHeader>
      <ExperienceCard
        icon={
          <SiJavascript
            style={{
              color: "#cc51d6",
              fontSize: "2.5em",
              borderRadius: "6px",
            }}
          />
        }
        company={"University of Warmia and Mazury in Olsztyn"}
        jobPosition={"Frontend Developer"}
        date={"Jan'23 - Feb'23"}
        desc={[
          "I was responsible for creating a map component using the leaflet library and other related functionalities.",
        ]}
        technology={[
          "JavaScript",
          "Leaflet",
          "jQuery",
          "Django",
          "API",
          "GitLab",
        ]}
      />
      <StyledGlobalHeader>Education</StyledGlobalHeader>
      <ExperienceCard
        icon={
          <PiStudentBold
            style={{
              color: "#cc51d6",
              fontSize: "2.5em",
              borderRadius: "6px",
            }}
          />
        }
        company={"Master of science: Geodesy & Cartography"}
        jobPosition={"University of Warmia and Mazury in Olsztyn"}
        date={"Feb'22 - Jul'23"}
        desc={[
          "Specialty: Geodesy and Geoinformatics Technologies.",
          `Master's thesis: "Creation of web-based advertisement services using interactive map and GIS algorithms. Case study of Tutor platform".`,
        ]}
        technology={[
          "React",
          "Leaflet",
          "Python",
          "C#",
          ".NET",
          "GitLab",
          "MySQL",
          "GIS Software",
        ]}
      />
      <ExperienceCard
        icon={
          <PiStudentBold
            style={{
              color: "#cc51d6",
              fontSize: "2.5em",
              borderRadius: "6px",
            }}
          />
        }
        company={"Bachelor of science: Geodesy & Cartography"}
        jobPosition={"University of Warmia and Mazury in Olsztyn"}
        date={"Oct'18 - Feb'22"}
        desc={[
          "Specialty: Remote Measurement Systems.",
          `Engineering thesis: "The use of artificial intelligence algorithms for data processing in the GIS environment".`,
        ]}
        technology={[
          "Python",
          "Deep Learning",
          "Machine Learning",
          "MySQL",
          "GIS Software",
        ]}
      />
    </StyledGlobalContainer>
  );
}

export default Experience;
