import React from "react";
import { Link } from "react-router-dom";
const FrameComponent = () => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        height: "4.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0rem 11.75rem 0.063rem",
        boxSizing: "border-box",
        position: "relative",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "0.875rem",
        color: "#2e343a",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "0",
          position: "absolute",
          right: "0rem",
          bottom: "2rem",
          left: "0rem",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0rem 1.25rem",
          boxSizing: "border-box",
          maxWidth: "100%",
          zIndex: "3",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            width: "90rem",
            position: "relative",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <div
          style={{
            width: "66.5rem",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.5rem 1.25rem",
            boxSizing: "border-box",
            gap: "1rem",
            maxWidth: "100%",
            zIndex: "4",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0.25rem 0.75rem 0rem 0rem",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "1.25rem",
                fontWeight: "500",
                display: "inline-block",
                minWidth: "2.563rem",
                whiteSpace: "nowrap",
              }}
            >
              <Link to="/job-portal/company">About</Link>
            </div>
          </div>
          <div
            style={{
              height: "0.125rem",
              width: "5.563rem",
              position: "relative",
              display: "none",
            }}
          />

          <div
            style={{
              height: "0.125rem",
              width: "5.563rem",
              position: "relative",
              display: "none",
            }}
          />
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: "0.25rem 0.75rem",
              backgroundColor: "#6913d8",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.25rem",
            }}
          >
            <div
              style={{
                position: "relative",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#fff",
                textAlign: "left",
                display: "inline-block",
                minWidth: "2.063rem",
                whiteSpace: "nowrap",
              }}
            >
              <Link to="/job-portal/company/jobs">Jobs</Link>
            </div>
            <div
              style={{
                height: "0.125rem",
                width: "1.813rem",
                position: "relative",
                backgroundColor: "#d9d9d9",
                display: "none",
              }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
