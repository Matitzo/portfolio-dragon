import React from "react";
import NavbarButtonsContainer from "./NavbarButtonsContainer";
import NavbarHamburgerButton from "./NavbarHamburgerButton";
import {
  StyledNavbarContainer,
  StyledArrow,
  StyledNavbarWrapper,
} from "../styles/Navbar.styled";

function Navbar({ isModalVisible, setIsModalVisible }) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function handleNavbar() {
    windowWidth > "570" && setIsModalVisible(false);
    return windowWidth > "570" ? (
      <NavbarButtonsContainer />
    ) : (
      <NavbarHamburgerButton
        isModalVisible={isModalVisible}
        setIsModalVisible={(value) => setIsModalVisible(value)}
      />
    );
  }

  return (
    <StyledNavbarWrapper>
      <StyledArrow />
      <StyledNavbarContainer>{handleNavbar()}</StyledNavbarContainer>
    </StyledNavbarWrapper>
  );
}

export default Navbar;
