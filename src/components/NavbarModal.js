import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconContext } from "react-icons";
import {
  StyledNavbarModalContainer,
  StyledNavbarModalUl,
  StyledNavbarModalHeader,
  StyledNavbarModalHeaderWrapper,
  StyledNavbarModalWrapper,
} from "../styles/NavbarModal.styled";
import { AiOutlineHome, AiOutlineCloseCircle } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import { BsPersonWorkspace, BsFillPersonFill } from "react-icons/bs";
import { StyledLink } from "../styles/Link.styled";

function NavbarModal({ isModalVisible, setIsModalVisible }) {
  return (
    <AnimatePresence>
      {isModalVisible && (
        <StyledNavbarModalContainer>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0, transition: { duration: 0.3 } }}
            exit={{ x: 1000, transition: { delay: 0.3, duration: 0.3 } }}
          >
            <StyledNavbarModalWrapper>
              <StyledNavbarModalHeaderWrapper>
                <StyledNavbarModalHeader>MENU</StyledNavbarModalHeader>
                <AiOutlineCloseCircle
                  onClick={() => setIsModalVisible(false)}
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                />
              </StyledNavbarModalHeaderWrapper>
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                }}
              >
                <StyledNavbarModalUl>
                  <li>
                    <StyledLink
                      to={"/portfolio-dragon"}
                      onClick={() => setIsModalVisible(false)}
                    >
                      <div>
                        <AiOutlineHome />
                      </div>
                      <span>Home</span>
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to={"/portfolio-dragon/about"}
                      onClick={() => setIsModalVisible(false)}
                    >
                      <div>
                        <BsFillPersonFill />
                      </div>
                      <span>About</span>
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to={"/portfolio-dragon/experience"}
                      onClick={() => setIsModalVisible(false)}
                    >
                      <div>
                        <BsPersonWorkspace />
                      </div>
                      <span>Experience</span>
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to={"/portfolio-dragon/projects"}
                      onClick={() => setIsModalVisible(false)}
                    >
                      <div>
                        <MdWebAsset />
                      </div>
                      <span>Projects</span>
                    </StyledLink>
                  </li>
                </StyledNavbarModalUl>
              </IconContext.Provider>
            </StyledNavbarModalWrapper>
          </motion.div>
        </StyledNavbarModalContainer>
      )}
    </AnimatePresence>
  );
}

export default NavbarModal;
