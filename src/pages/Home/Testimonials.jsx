import React, { useMemo } from "react";
import { Box, Container, Rating, Typography } from "@mui/material";

import Circle from "../../Assets/shapes/circle.svg";
import CircleBlue from "../../Assets/shapes/circle-blue.svg";
import Quot from "../../Assets/quot.webp";
import testimonialGirl from "../../Assets/ReviewGirl.svg";
import testimonialCard from "../../Assets/ReviewPosters.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = React.memo(() => {
    const testimonials = useMemo(
        () => [
            {
                name: "Bhavya Trivedi",
                program: "Parul University",
                batch: "Student",
                testimonial:
                    "CollegeCue is a magical tool that guides students through college selection, providing personalized guidance and information. The team is like fairy godmothers, working tirelessly to make the process a magical journey, making the college selection process a breeze.",
                rating: 5,
            },
            {
                name: "Shivani",
                program: "PPN PG COLLEGE",
                batch: "Student",
                testimonial:
                    "CollegeCue is a renowned college-selection portal that offers personalized guidance and information to help students find their dream colleges. Their team, like fairy godmothers, work tirelessly to make the college selection process a magical journey, highly recommended for anyone seeking the perfect fit.",
                rating: 3,
            },
            {
                name: "Vikash Verma",
                program: "Amity University, Noida",
                batch: "Student",
                testimonial:
                    "CollegeCue is a top-notch college selection portal that offers personalized guidance and information to help students find their ideal collegiate match. Their dedicated team ensures a magical journey, making them highly recommended for those seeking the perfect educational fit.",
                rating: 4,
            },
            {
                name: "Vaishnavi shukla",
                program: "Sharda University",
                batch: "Student",
                testimonial:
                    "CollegeCue is a personal college matchmaker that helps students find the right fit for their unique self, providing a personalized college experience that feels like it was made just for them.",
                rating: 5,
            },
            {
                name: "Pankhuri Verma",
                program:
                    "Manav Rachna International Institute of Research and Studies",
                batch: "Student",
                testimonial:
                    "CollegeCue is a leading institution dedicated to helping students achieve their dreams and providing top-notch support, offering a tailor-made college experience that fosters creativity and possibilities.",
                rating: 4,
            },
            {
                name: "Sakshi Tiwari",
                program: "Galgotias University",
                batch: "2025",
                testimonial:
                    "CollegeCue offers personalized college search guidance, ensuring students find the perfect fit for their academic and personal goals, using their expertise and insight.",
                rating: 4,
            },
            {
                name: "Amrit Yadav",
                program: "Jaypee Institute of Information Technology",
                batch: "Student",
                testimonial:
                    "CollegeCue is a revolutionary college search guide, offering personalized guidance tailored to each student's unique academic and personal aspirations. Their dedicated team provides invaluable tools to navigate the overwhelming college application process, ensuring students reach their full potential.",
                rating: 5,
            },
            {
                name: "Prasiddhi Singh Chandel",
                program: "Subharti University",
                batch: "Student",
                testimonial:
                    "CollegeCue is a unique platform that provides personalized guidance to students, helping them achieve their academic and personal goals. It simplifies the college application process, empowering students to make informed decisions and reach their full potential. CollegeCue is dedicated to setting a new standard for college guidance, helping students find their perfect fit.",
                rating: 5,
            },
        ],
        []
    );

    return (
        <Container maxWidth="xl" sx={{ marginY: "5rem" }}>
            <Box
                sx={{
                    width: "fit-content",
                    marginY: "1rem",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontWeight: 500,
                        lineHeight: "3rem",
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#210366",
                        display: "inline",
                    }}
                >
                    Testimonials
                </Typography>
                <Box
                    sx={{
                        borderTop: "6px solid #7B90FF",
                        borderRadius: "10px",
                        display: "flex",
                        width: "100%",
                    }}
                />
            </Box>
            <Box
                sx={{
                    paddingY: "1rem",
                    width: "100%",
                    height: "500px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    zIndex: "2",
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "fit-content",
                        marginLeft: "12rem",
                        marginRight: "auto",
                        "@media(max-width :770px)": {
                            display: "none",
                            marginLeft: "0rem",
                            marginRight: "0rem",
                        },
                    }}
                >
                    <img
                        src={testimonialCard}
                        alt="@BharatTech"
                        style={{
                            width: "120vw",
                            height: "auto",
                        }}
                    />
                </Box>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    width: "300px",
                                    marginX: "auto",
                                    marginBottom: "0.5rem",
                                    bgcolor: "white",
                                    "@media (max-width : 770px)": {
                                        width: "auto",
                                        padding: "20px",
                                    },
                                }}
                            >
                                {/* <Rating name="read-only" value={testimonial.rating} readOnly /> */}
                                <p
                                    style={{
                                        fontStyle: "italic",
                                        fontWeight: 300,
                                        textAlign: "justify",
                                    }}
                                >
                                    {testimonial.testimonial}
                                </p>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Box>
                                        <Typography sx={{ fontWeight: 400 }}>
                                            <span
                                                style={{
                                                    fontWeight: 700,
                                                    marginLeft: "5px",
                                                }}
                                            >
                                                {testimonial.batch}
                                            </span>
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <Typography
                                                sx={{ fontWeight: "500" }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                sx={{ fontWeight: "400" }}
                                            >
                                                {testimonial.program}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <img
                                        src={Quot}
                                        alt="quot"
                                        width={20}
                                        style={{
                                            marginLeft: "5px",
                                            objectFit: "contain",
                                            width: "5vw",
                                            height: "auto",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Box
                    sx={{
                        width: "fit-content",
                        marginLeft: "auto",
                        marginRight: "12rem",
                        "@media(max-width :770px)": {
                            display: "none",
                            marginLeft: "0rem",
                            marginRight: "0rem",
                        },
                    }}
                >
                    <img
                        src={testimonialGirl}
                        loading="lazy"
                        alt="@BharatTech"
                        style={{
                            width: "120vw",
                            height: "auto",
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        "@media (max-width : 770px)": {
                            display: "none",
                        },
                    }}
                >
                    <img
                        src={Circle}
                        loading="lazy"
                        alt="shape"
                        height={300}
                        style={{
                            position: "absolute",
                            top: "-40%",
                            left: "-15%",
                            zIndex: "-1",
                        }}
                    />
                    <img
                        loading="lazy"
                        src={CircleBlue}
                        alt="shape"
                        height={300}
                        style={{
                            position: "absolute",
                            bottom: "-40%",
                            right: "-15%",
                            zIndex: "-1",
                            color: "blue",
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
});

export default Testimonials;
