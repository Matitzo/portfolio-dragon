import React from "react";
import NavbarModal from "./NavbarModal";
import { RxHamburgerMenu } from "react-icons/rx";
import { StyledHamburgerContainer } from "../styles/Navbar.styled";

function NavbarHamburgerButton({ isModalVisible, setIsModalVisible }) {
  return (
    <StyledHamburgerContainer>
      <RxHamburgerMenu
        onClick={() => setIsModalVisible(true)}
        style={{
          color: "white",
          width: "25px",
          height: "25px",
          cursor: "pointer",
        }}
      />
    </StyledHamburgerContainer>
  );
}

export default NavbarHamburgerButton;
