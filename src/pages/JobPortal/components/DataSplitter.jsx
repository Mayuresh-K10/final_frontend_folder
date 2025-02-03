import React from "react";
import teamP1 from "../Assets/team1.png";
import teamP2 from "../Assets/team2.png";
import teamP3 from "../Assets/team3.png";
import innovat from "../Assets/innovtive.png";
import nurture from "../Assets/nurturing.png";
import energy from "../Assets/energetic.png";
import divid from "../Assets/divider.svg";

const DataSplitter = () => {
  const teamPs = [
    {
      image: teamP1,
      name: "Andhika Sudarman",
      post: "Chief Executive Officer",
    },
    {
      image: teamP2,
      name: "Eleanor Pena",
      post: "Marketing Coordinator",
    },
    { image: teamP3, name: "Jacob Jones", post: "Web Designer" },
  ];

  const culture = [
    {
      image: innovat,
      name: "INNOVATIVE",
      post: "We strive to constantly pursue innovation of our products and services",
    },
    {
      image: nurture,
      name: "NURTURING",
      post: "Our working environment prioritizes encouragement for employee's growth and development",
    },
    {
      image: energy,
      name: "ENERGETIC",
      post: "Here, we work together to make the dream work",
    },
  ];

  return (
    <div
      style={{
        alignSelf: "stretch",
        borderRadius: "8px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0.75rem",
        boxSizing: "border-box",
        gap: "1.5rem",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "0.875rem",
        color: "#2e343a",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.75rem",
          maxWidth: "100%",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "1.25rem",
            display: "inline-block",
            minWidth: "2.625rem",
          }}
        >
          Team:
        </b>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1.75rem",
              maxWidth: "100%",
            }}
          >
            {teamPs.map((member, index) => (
              <div
                key={index}
                style={{
                  flex: "1",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid #e9eaed",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "1rem",
                  gap: "0.75rem",
                  minWidth: "15.375rem",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    height: "2.5rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    style={{
                      height: "2.5rem",
                      width: "2.5rem",
                      position: "relative",
                      borderRadius: "50%",
                      objectFit: "cover",
                      minHeight: "2.5rem",
                    }}
                    loading="lazy"
                    alt=""
                    src={member.image}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <b style={{ position: "relative", lineHeight: "1.25rem" }}>
                      {member.name}
                    </b>
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "1.25rem",
                        fontWeight: "500",
                        color: "#6f747a",
                      }}
                    >
                      {member.post}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.75rem",
          maxWidth: "100%",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "1.25rem",
            display: "inline-block",
            minWidth: "3.5rem",
          }}
        >
          Culture:
        </b>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.25rem",
            maxWidth: "100%",
          }}
        >
          <img
            style={{
              alignSelf: "stretch",
              height: "0rem",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src={divid}
          />
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.75rem",
              maxWidth: "100%",
            }}
          >
            {culture.map((cult, index) => (
              <div
                key={index}
                style={{
                  flex: "1",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "1rem 0.75rem 2rem 1.25rem",
                  boxSizing: "border-box",
                  gap: "1.25rem",
                  minWidth: "13.313rem",
                  maxWidth: "100%",
                }}
              >
                <img
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    position: "relative",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                  alt=""
                  src={cult.image}
                />
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.25rem",
                    minWidth: "9.563rem",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      lineHeight: "1.25rem",
                      textTransform: "uppercase",
                      display: "inline-block",
                      minWidth: "5.375rem",
                    }}
                  >
                    {cult.name}
                  </b>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      fontSize: "0.75rem",
                      lineHeight: "1rem",
                    }}
                  >
                    {cult.post}
                  </div>
                </div>
                <div
                  style={{
                    height: "5.5rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0.5rem 0rem 0rem 0rem",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    style={{
                      height: "5rem",
                      width: "0.063rem",
                      position: "relative",
                    }}
                    alt=""
                    src={divid}
                  />
                </div>
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSplitter;
