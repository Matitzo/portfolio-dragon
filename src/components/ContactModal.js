import React from "react";
import ExitModalButton from "./ExitModalButton";
import {
  StyledModalContainer,
  StyledUl,
  StyledPolygonImg,
} from "../styles/ContactModal.styled";
import { StyledLink } from "../styles/Link.styled";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";
import polygon from "../images/polygon.png";

function ContactModal({ isVisible, setIsVisible }) {
  return (
    <StyledModalContainer isVisible={isVisible}>
      <ExitModalButton
        state={isVisible}
        setState={(value) => setIsVisible(value)}
        translate={"-15px"}
      />
      <StyledUl>
        <li>
          <StyledPolygonImg src={polygon} />
          <i>
            <Envelope />
          </i>
          <span>m.czyrzniak@gmail.com</span>
        </li>
        <li>
          <StyledPolygonImg src={polygon} />
          <StyledLink
            to={"https://www.linkedin.com/in/mateusz-czyrzniak-6b81ab231/"}
            target="_blank"
          >
            <div style={{ display: "flex" }}>
              <i>
                <Linkedin />
              </i>
              <span>LinkedIn</span>
            </div>
          </StyledLink>
        </li>
        <li>
          <StyledPolygonImg src={polygon} />
          <StyledLink to={"https://github.com/Matitzo"} target="_blank">
            <div style={{ display: "flex" }}>
              <i>
                <Github />{" "}
              </i>
              <span>GitHub</span>
            </div>
          </StyledLink>
        </li>
      </StyledUl>
    </StyledModalContainer>
  );
}

export default ContactModal;
