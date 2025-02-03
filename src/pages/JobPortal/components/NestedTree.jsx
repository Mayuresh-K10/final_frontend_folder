import React from "react";
import bgImage from "../Assets/conditional-split@2x.png";
import leftarrow from "../Assets/lessthenIcon.svg";
import tech from "../Assets/builIcon.svg";
import locat from "../Assets/locIcon.svg";
import site from "../Assets/suitIcon.svg";
import empl from "../Assets/empIcon.svg";
import web from "../Assets/webIcon.svg";
import fb from "../Assets/FBicon.svg";
import insta from "../Assets/instaIcon.svg";

const NestedTree = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        maxWidth: "100%",
        textAlign: "right",
        fontSize: "2.5rem",
        color: "#fff",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          position: "relative",
          maxWidth: "100%",
        }}
      >
        <img
          style={{
            height: "100%",
            width: "66.375rem",
            position: "absolute",
            margin: "0",
            top: "0rem",
            bottom: "0rem",
            left: "calc(50% - 531px)",
            borderRadius: "8px",
            maxHeight: "100%",
            objectFit: "cover",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src={bgImage}
        />
        <div
          style={{
            flex: "1",
            borderRadius: "8px 8px 0px 0px",
            background:
              "linear-gradient(99.51deg, rgba(105, 19, 216, 0.55), #6913d8)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "2.875rem 3.75rem 3.063rem",
            boxSizing: "border-box",
            maxWidth: "100%",
            zIndex: "2",
          }}
        >
          <div
            style={{
              height: "11.938rem",
              width: "66.5rem",
              position: "relative",
              borderRadius: "8px 8px 0px 0px",
              background:
                "linear-gradient(99.51deg, rgba(105, 19, 216, 0.55), #6913d8)",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <h1
            style={{
              margin: "0",
              height: "8.5rem",
              width: "30.063rem",
              position: "relative",
              fontSize: "inherit",
              display: "inline-block",
              textShadow: "0px 7px 15px rgba(49, 15, 93, 0.35)",
              zIndex: "3",
              fontFamily: "inherit",
              color:"white"
            }}
          >
            <p style={{ margin: "0" }}>
              <span style={{ fontWeight: "300", fontFamily: "Inter" }}>
                We Connect
              </span>
              <span style={{ fontWeight: "600", fontFamily: "Inter" }}> T</span>
              <b>{`op Talents `}</b>
            </p>
            <p style={{ margin: "0" }}>
              <span style={{ fontWeight: "300", fontFamily: "Inter" }}>
                With
              </span>
              <span style={{ fontWeight: "600", fontFamily: "Inter" }}> T</span>
              <b>op Companies</b>
            </p>
          </h1>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          position: "relative",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "1.25rem",
        }}
      >
        <div
          style={{
            width: "7rem",
            margin: "0",
            position: "absolute",
            top: "-2rem",
            left: "0.625rem",
            borderRadius: "4px",
            backgroundColor: "#6913d8",
            border: "2px solid #fff",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "2.625rem 1.313rem 2.625rem 1.438rem",
            zIndex: "3",
          }}
        >
          <div
            style={{
              height: "7rem",
              width: "7rem",
              position: "relative",
              borderRadius: "4px",
              backgroundColor: "#6913d8",
              border: "2px solid #fff",
              boxSizing: "border-box",
              display: "none",
            }}
          />
          <h3
            style={{
              margin: "0",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "600",
              fontFamily: "inherit",
              display: "inline-block",
              minWidth: "3.75rem",
              zIndex: "4",
            }}
          >
            <span style={{color:"white"}}>Deall</span>
            <span style={{ color: "#fbeb99" }}>!</span>
          </h3>
        </div>
        <div
          style={{
            flex: "1",
            borderRadius: "0px 0px 8px 8px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "0.5rem 1.313rem 1.5rem 8.125rem",
            boxSizing: "border-box",
            maxWidth: "100%",
            gap: "1.25rem",
            fontSize: "1rem",
            color: "#2e343a",
          }}
        >
          <div
            style={{
              height: "6.25rem",
              width: "66.5rem",
              position: "relative",
              borderRadius: "0px 0px 8px 8px",
              backgroundColor: "#fff",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              width: "24.188rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.5rem",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <div
              style={{
                height: "2.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.25rem",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <b
                  style={{
                    position: "relative",
                    lineHeight: "1.5rem",
                    display: "inline-block",
                    minWidth: "4.563rem",
                  }}
                >
                  Deall Job
                </b>
                <img
                  style={{
                    height: "1.25rem",
                    width: "1.25rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src={leftarrow}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  fontSize: "0.75rem",
                  lineHeight: "1rem",
                  fontWeight: "500",
                }}
              >
                We connect top talents with top companies
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.75rem",
                fontSize: "0.625rem",
                color: "#6f747a",
              }}
            >
              <div
                style={{
                  height: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.25rem",
                }}
              >
                <img
                  style={{
                    height: "1rem",
                    width: "1rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "1rem",
                  }}
                  alt=""
                  src={tech}
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "1rem",
                    fontWeight: "500",
                    display: "inline-block",
                    minWidth: "1.5rem",
                  }}
                >
                  Tech
                </div>
              </div>
              <div
                style={{
                  height: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.25rem",
                }}
              >
                <img
                  style={{
                    height: "1rem",
                    width: "1rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "1rem",
                  }}
                  alt=""
                  src={locat}
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "1rem",
                    fontWeight: "500",
                    display: "inline-block",
                    minWidth: "7.938rem",
                  }}
                >
                  Jakarta Selatan, Indonesia
                </div>
              </div>
              <div
                style={{
                  height: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.25rem",
                }}
              >
                <img
                  style={{
                    height: "1rem",
                    width: "1rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "1rem",
                  }}
                  alt=""
                  src={site}
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "1rem",
                    fontWeight: "500",
                    display: "inline-block",
                    minWidth: "2.313rem",
                  }}
                >
                  On-Site
                </div>
              </div>
              <div
                style={{
                  height: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.25rem",
                }}
              >
                <img
                  style={{
                    height: "1rem",
                    width: "1rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "1rem",
                  }}
                  alt=""
                  src={empl}
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "1rem",
                    fontWeight: "500",
                    display: "inline-block",
                    minWidth: "5.188rem",
                  }}
                >
                  1 – 50 employees
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "1.125rem 0rem 0rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid #dfe2e6",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.25rem",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "1.25rem",
                    width: "1.25rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  loading="lazy"
                  alt=""
                  src={web}
                />
              </div>
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid #dfe2e6",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.25rem",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "1.25rem",
                    width: "1.25rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src={fb}
                />
              </div>
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid #dfe2e6",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.25rem",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "1.25rem",
                    width: "1.25rem",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src={insta}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedTree;
