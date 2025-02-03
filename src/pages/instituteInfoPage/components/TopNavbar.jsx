import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideUnderline = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 50px;
  background-color: white;
  margin: 1rem 0;
`;

const NavLink = styled(Link)`
  position: relative;
  color: black;
  text-decoration: none;

  &.active {
    font-weight: bold;

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: blue;
      transform-origin: bottom left;
      transform: scaleX(0);
      animation: ${slideUnderline} 0.3s forwards;
    }
  }
`;

const TopNavbar = () => {
  const { id } = useParams();

  const [activeLink, setActiveLink] = useState("/college-info/");

  const location = useLocation();

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <TopBar>
      <NavLink
        to={`/institute-info/${id}/info`}
        className={activeLink === `/institute-info/${id}/info` ? "active" : ""}
      >
        Info
      </NavLink>
      <NavLink
        to={`/institute-info/${id}/course-fee`}
        className={
          activeLink === `/institute-info/${id}/course-fee` ? "active" : ""
        }
      >
        Courses & Fees
      </NavLink>
    </TopBar>
  );
};

export default TopNavbar;
