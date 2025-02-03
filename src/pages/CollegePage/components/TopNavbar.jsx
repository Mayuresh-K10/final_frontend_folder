import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Pagination, Autoplay } from "swiper/modules";
import "./TopNavbar.css";

import "swiper/css/pagination";

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

  @media (max-width: 600px) {
    display: none; // Hide the top bar on screens with width <= 600px
  }
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

const SwiperWrapper = styled.div`
  @media (min-width: 601px) {
    display: none;
  }
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100%;
  margin-left: 10px;
`;

const TopNavbar = () => {
  const { id } = useParams();

  const [activeLink, setActiveLink] = useState(`/college-info/${id}/`);

  const location = useLocation();

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <TopBar>
        <NavLink
          to={`/college-info/${id}/info`}
          className={activeLink === `/college-info/${id}/info` ? "active" : ""}
        >
          Info
        </NavLink>
        <NavLink
          to={`/college-info/${id}/course-fee`}
          className={
            activeLink === `/college-info/${id}/course-fee` ? "active" : ""
          }
        >
          Courses & Fees
        </NavLink>
        <NavLink
          to={`/college-info/${id}/gallery`}
          className={
            activeLink === `/college-info/${id}/gallery` ? "active" : ""
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to={`/college-info/${id}/faculty`}
          className={
            activeLink === `/college-info/${id}/faculty` ? "active" : ""
          }
        >
          Faculty
        </NavLink>
        <NavLink
          to={`/college-info/${id}/hostel`}
          className={
            activeLink === `/college-info/${id}/hostel` ? "active" : ""
          }
        >
          Hostel
        </NavLink>
        <NavLink
          to={`/college-info/${id}/placement`}
          className={
            activeLink === `/college-info/${id}/placement` ? "active" : ""
          }
        >
          Placement
        </NavLink>
        <NavLink
          to={`/college-info/${id}/review`}
          className={
            activeLink === `/college-info/${id}/review` ? "active" : ""
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to={`/college-info/${id}/collage-compare`}
          className={
            activeLink === `/college-info/${id}/collage-compare` ? "active" : ""
          }
        >
          College Compare
        </NavLink>
      </TopBar>

      <SwiperWrapper>
        <Swiper
          className="Swiper"
          spaceBetween={2}
          slidesPerView={3}
          allowTouchMove={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/info`}
              className={
                activeLink === `/college-info/${id}/info` ? "active" : ""
              }
            >
              Info
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/course-fee`}
              className={
                activeLink === `/college-info/${id}/course-fee` ? "active" : ""
              }
            >
              Courses & Fees
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/gallery`}
              className={
                activeLink === `/college-info/${id}/gallery` ? "active" : ""
              }
            >
              Gallery
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/faculty`}
              className={
                activeLink === `/college-info/${id}/faculty` ? "active" : ""
              }
            >
              Faculty
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/hostel`}
              className={
                activeLink === `/college-info/${id}/hostel` ? "active" : ""
              }
            >
              Hostel
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/placement`}
              className={
                activeLink === `/college-info/${id}/placement` ? "active" : ""
              }
            >
              Placement
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/review`}
              className={
                activeLink === `/college-info/${id}/review` ? "active" : ""
              }
            >
              Reviews
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={`/college-info/${id}/collage-compare`}
              className={
                activeLink === `/college-info/${id}/collage-compare`
                  ? "active"
                  : ""
              }
            >
              College Compare
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </>
  );
};

export default TopNavbar;
