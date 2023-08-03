import styled from "styled-components";
import polygonImg from "../images/polygon.png";

export const StyledModalContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: 1em;
  width: 350px;
  height: 250px;
  z-index: 10;
  border-radius: 0px 20px 0px 0px;
  background: var(
    --bottomleftmenu-notification,
    linear-gradient(
      180deg,
      rgba(49, 58, 91, 0.1) 0%,
      rgba(49, 58, 91, 0.5) 65.46%,
      rgba(49, 58, 91, 0) 100%
    )
  );
  backdrop-filter: blur(20px);
  -webkit-box-shadow: 0px -4px 3px #cc51d6;
  -moz-box-shadow: 0px -4px 3px #cc51d6;
  box-shadow: 4px -4px 3px #cc51d6;
  translate: ${({ isVisible }) => !isVisible && "-340px 0px"};
  transition: 1s;
`;

export const StyledUl = styled.ul`
  color: white;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 10px 10px 0px 0px;

  li {
    display: flex;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
    background-blend-mode: overlay;
    border-bottom: 1px solid #602ea6;
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.1);

    i {
      position: relative;
      left: -53px;
      top: 2px;
    }

    span {
      margin-left: -16px;
    }
  }
`;

export const StyledPolygonImg = styled.img`
  width: 90px;
  height: 90px;
  fill: radial-gradient(
    137.13% 253.39% at 76.68% 66.67%,
    #602ea6 0%,
    #c977d6 100%
  );
  filter: drop-shadow(0px 0px 30px #763db0);
  object-fit: fill;
`;
