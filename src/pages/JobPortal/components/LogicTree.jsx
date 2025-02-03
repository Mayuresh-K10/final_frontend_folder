import { TextField } from "@mui/material";
import leftarrow from "../Assets/lessthenIcon.svg";
import bell from "../Assets/notifiIcon.svg";
import profile from "../Assets/profilemen.png";
import { Link } from "react-router-dom";

const LogicTree = () => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "1rem 5rem",
        boxSizing: "border-box",
        top: "0",
        zIndex: "99",
        position: "sticky",
        maxWidth: "100%",
        gap: "1.25rem",
        textAlign: "left",
        fontSize: "1.25rem",
        color: "#6913d8",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          width: "52.75rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0.125rem 0rem 0rem",
          boxSizing: "border-box",
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
          }}
        >
          <div
            style={{
              width: "20.563rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0.125rem 0rem 0rem",
              boxSizing: "border-box",
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
                gap: "1.25rem",
              }}
            >
              <h2
                style={{
                  margin: "0",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  display: "inline-block",
                  minWidth: "3.75rem",
                  whiteSpace: "nowrap",
                  zIndex: "1",
                }}
              >
                <Link to="/job-portal/company"><span style={{color:"#7f29cf"}} >Deall</span></Link>
                <span style={{ color: "#f9e05b" }}>!</span>
              </h2>
              <nav
                style={{
                  margin: "0",
                  width: "13rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0.25rem 0rem 0rem",
                  boxSizing: "border-box",
                }}
              >
                <nav
                  style={{
                    margin: "0",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1.25rem",
                    textAlign: "left",
                    fontSize: "0.75rem",
                    color: "#585f65",
                    fontFamily: "Inter",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "1.813rem",
                    }}
                  >
                    Jobs
                  </div>
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      fontWeight: "600",
                      color: "#6913d8",
                      display: "inline-block",
                      minWidth: "4.125rem",
                    }}
                  >
                    Companies
                  </div>
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "4.063rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Career Fair
                  </div>
                </nav>
              </nav>
            </div>
          </div>
          <TextField
            style={{
              border: "none",
              backgroundColor: "transparent",
              height: "1.75rem",
              width: "25.438rem",
              fontFamily: "Inter",
              fontSize: "0.75rem",
              color: "#6f747a",
              maxWidth: "100%",
            }}
            placeholder="Search job or company here..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="20px" height="20px" src={leftarrow} />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#e9eaed" },
              "& .MuiInputBase-root": {
                height: "28px",
                backgroundColor: "#f8f9fa",
                paddingLeft: "8px",
                borderRadius: "12px",
                fontSize: "12px",
              },
              "& .MuiInputBase-input": { paddingLeft: "4px", color: "#6f747a" },
              width: "407px",
            }}
          />
          
        </div>
      </div>
      <div
        style={{
          height: "2rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            height: "1.75rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.25rem 0rem 0rem",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "relative",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={bell}
          />
        </div>
        <img
          style={{
            height: "2rem",
            width: "2rem",
            position: "relative",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          loading="lazy"
          alt=""
          src={profile}
        />
      </div>
    </header>
  );
};

export default LogicTree;
