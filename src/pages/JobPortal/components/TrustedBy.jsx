import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import profile1 from "../Assets/profile1.png";
import profile2 from "../Assets/profile2.png";
import profile3 from "../Assets/profile3.png";

const TrustedBy = () => {
    const clients = [
        {
            image: profile1,

            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Allison",
            post: "Founder & CEO",
        },

        {
            image: profile2,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Adam",
            post: "Head of Design",
        },

        {
            image: profile3,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Ross",
            post: "Sr. Developer",
        },

        {
            image: profile1,

            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Jean",
            post: "CTO",
        },

        {
            image: profile2,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Sam",
            post: "UI/UX Designer",
        },

        {
            image: profile3,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Ron",
            post: "Jr. Developer",
        },
    ];

    return (
        <section
            style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "0rem 1.25rem 9rem",
                boxSizing: "border-box",
                maxWidth: "100%",
                textAlign: "left",
                fontSize: "2.25rem",
                color: "#131517",
            }}
        >
            <div
                style={{
                    width: "70rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4rem",
                    maxWidth: "100%",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        maxWidth: "100%",
                        gap: "1.25rem",
                        marginTop: "8.5rem",
                    }}
                >
                    <div
                        style={{
                            width: "34.5rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "1rem",
                            maxWidth: "100%",
                        }}
                    >
                        <h3
                            style={{
                                margin: "0",
                                width: "27.813rem",
                                position: "relative",

                                letterSpacing: "0.04em",
                                fontSize: "45px",
                                fontWeight: "300",
                                fontFamily: "inherit",
                                display: "flex",
                                alignItems: "center",
                                maxWidth: "100%",
                            }}
                        >
                            Client’s comments
                        </h3>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "1.875rem 0rem 0rem",
                        }}
                    ></div>
                </div>

                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "1rem",
                        maxWidth: "100%",
                        textAlign: "center",
                        fontSize: "1rem",
                        color: "#24282d",
                    }}
                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {clients.map((client, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        style={{
                                            flex: "1",
                                            borderRadius: "12px",
                                            backgroundColor: "#fff",
                                            border: "1px solid #d6dae0",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "2.5rem 2.813rem",
                                            gap: "1.5rem",
                                            minWidth: "16.938rem",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                justifyContent: "flex-start",
                                                gap: "1rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    height: "5rem",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "flex-start",
                                                    justifyContent: "center",
                                                    padding: "0rem 1.25rem",
                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        alignSelf: "stretch",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "flex-start",
                                                        position: "relative",
                                                        gap: "1.111rem",
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            height: "5rem",
                                                            width: "5rem",
                                                            position:
                                                                "relative",
                                                            borderRadius: "50%",
                                                            objectFit: "cover",
                                                        }}
                                                        alt=""
                                                        src={client.image}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    position: "relative",
                                                    letterSpacing: "0.01em",
                                                    lineHeight: "1.5rem",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                {client.content}
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "flex-start",
                                                justifyContent: "flex-start",
                                                padding: "0rem 4.875rem",
                                                fontSize: "1.125rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    justifyContent:
                                                        "flex-start",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        alignSelf: "stretch",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems:
                                                            "flex-start",
                                                        justifyContent:
                                                            "flex-start",
                                                        padding:
                                                            "0rem 3.188rem",
                                                    }}
                                                ></div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems:
                                                            "flex-start",
                                                        justifyContent:
                                                            "flex-start",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position:
                                                                "relative",
                                                            letterSpacing:
                                                                "0.04em",
                                                            lineHeight:
                                                                "1.5rem",
                                                            fontWeight: "600",
                                                            display:
                                                                "inline-block",
                                                            minWidth:
                                                                "7.125rem",
                                                            whiteSpace:
                                                                "nowrap",
                                                        }}
                                                    >
                                                        {client.Name}
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "row",
                                                            alignItems:
                                                                "flex-start",
                                                            justifyContent:
                                                                "flex-start",
                                                            padding:
                                                                "0rem 0.75rem 0rem 0.781rem",
                                                            fontSize: "0.75rem",
                                                            color: "#6e7175",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: "5.563rem",
                                                                position:
                                                                    "relative",
                                                                letterSpacing:
                                                                    "0.04em",
                                                                lineHeight:
                                                                    "1.5rem",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                minWidth:
                                                                    "5.563rem",
                                                            }}
                                                        >
                                                            {client.post}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginRight: "2rem",
                                marginTop: "50px",
                            }}
                        ></Box>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
