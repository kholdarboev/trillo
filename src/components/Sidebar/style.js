import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Links = styled(NavLink)`
  text-decoration: none;
  margin: 0 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  :hover {
    color: #00fff5;
  }
`;
export const NavbarWrapper = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  height: 64px;
  max-width: 1440px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: white;
`;
