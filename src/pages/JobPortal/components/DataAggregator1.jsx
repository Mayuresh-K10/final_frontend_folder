import {
  Button,
  
} from "@mui/material";
import React from "react";
import salary from "../Assets/icons8-money-bag-96salary.svg";
import food from "../Assets/icons8-hamburger-96 1food.svg";
import exposure from "../Assets/icons8-globe-96intexp.svg";
import sick from "../Assets/icons8-hospital-insurance-96sick.svg";
import dress from "../Assets/icons8-clothes-96dress.svg";
import thr from "../Assets/icons8-gift-96 1binus.svg";
import lunch from "../Assets/icons8-rice-bowl-96 1lunch.svg";
import seeAll from "../Assets/Iconall.svg";

const DataAggregator1 = () => {
  const benefits = [
    { image: salary, benefit: "Competitive Salary" },
    { image: food, benefit: "Free Food and Snack" },
    { image: exposure, benefit: "International Exposure" },
    { image: sick, benefit: "Paid Sick Days" },
    { image: thr, benefit: "THR / Binus System" },
    { image: dress, benefit: "Casual Dress Code" },
    { image: lunch, benefit: "Free Lunch" },
    { image: seeAll, benefit: "See All" },
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
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "0.875rem",
        color: "#2e343a",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          borderRadius: "8px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "1rem 0.75rem",
          gap: "1.5rem",
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
          }}
        >
          <b style={{ position: "relative", lineHeight: "1.25rem" }}>
            Get To Know Deall Jobs:
          </b>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "1.25rem",
            }}
          >
            <p
              style={{ margin: "0" }}
            >{`Deall Jobs is Indonesia's largest job portal & mentoring platform. We help people easily find jobs to top Indonesian companies for internship and full-time roles.`}</p>
            <p style={{ marginTop: "10px" }}>
              <span>{`As you might have already heard about us, we are revolutionizing how Indonesian engage with employers. Many Indonesian students are talented, ambitious, but never found a better opportunity for themselves. Our team is driven by the vision to democratize information and knowledge, thus opportunities. We think what we build will allow Indonesian students to have a chance to self develop and have a better future... `}</span>
              <b style={{ fontFamily: "Inter", color: "#6913d8" }}>See More</b>
            </p>
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
          }}
        >
          <b
            style={{
              position: "relative",
              lineHeight: "1.25rem",
              display: "inline-block",
              minWidth: "3.875rem",
            }}
          >
            Benefits:
          </b>
          <form
            style={{
              margin: "0",
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1rem 0.919rem",
              minHeight: "6.5rem",
            }}
          >
            {benefits.map((beni, index) => (
              <Button
                key={index}
                style={{
                  height: "2.75rem",
                  width: "15.5rem",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid #e9eaed",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0.75rem 1rem",
                }}
                startIcon={<img width="20px" height="20px" src={beni.image} alt="" />}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#2e343a",
                  fontSize: "14",
                  background: "#fff",
                  borderRadius: "4px",
                  "&:hover": { background: "#fff" },
                  width: 248,
                  height: 44,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    fontWeight: "500",
                    fontFamily: "Inter",
                    color: "#2e343a",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "6.125rem",
                  }}
                >
                  {beni.benefit}
                </div>
              </Button>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataAggregator1;
