import React, { useState } from "react";
import { Box, Button, FormControl, Select, MenuItem } from "@mui/material";
import Buttonfilledgreen from "./greenButton";
import searchIcn from "../Assets/searchoutlined.svg";
import closeIcn from "../Assets/close.svg";

const SearchJob = () => {
  const [selectedExp, setSelectedExp] = useState("Freelancer");
  const [selectExp] = useState([
    { value: 1, label: "Freelancer" },
    { value: 2, label: "Fresher" },
    { value: 3, label: "Contract" },
    { value: 4, label: "Mid-Senior" },
    { value: 5, label: "Associate" },
  ]);

  const handleExpChange = (event) => {
    setSelectedExp(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "66.25rem",
        margin: "0",
        position: "absolute",
        marginTop: "-50px",
        right: "14.55rem",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "2px 4px 32px rgba(1, 70, 177, 0.08)",
        overflow: "hidden",
        flexShrink: "0",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "1.563rem 1.5rem 1.625rem 2rem",
        boxSizing: "border-box",
        maxWidth: "100%",
        gap: "1.25rem",
        zIndex: "4",
        '@media (max-width:600px)':{
          width:'60%',
          maxWidth:'fit-content',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          marginRight:'-10rem',
          marginTop:"-6rem"
        }
      }}
    >
      <Box
        sx={{
          width: "41.938rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "5rem",
          maxWidth: "100%",
          '@media (max-width:600px)':{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-end',
            marginLeft:'-3rem'
          }
        }}
      >
        <div
          style={{
            height: "2.25rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "0rem 0rem 0.75rem",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <img
              style={{
                height: "1.5rem",
                width: "1.5rem",
                position: "relative",
                top: "2.425rem",
                overflow: "hidden",
                flexShrink: "0",
                minHeight: "1.5rem",
                marginLeft:'0.5rem'
              }}
              alt=""
              src={searchIcn}
            />
            <div
              style={{
                position: "relative",
                letterSpacing: "0.04em",
                lineHeight: "1.5rem",
                fontSize: "20px",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "10.188rem",
              }}
            >
              <FormControl
                fullWidth="5rem"
                sx={{ position: "relative", top: "1.25rem" }}
              >
                <Select
                  labelId="job-label"
                  id="job-select"
                  value={selectedExp}
                  onChange={handleExpChange}
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": {
                      border: 0,
                    },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  {selectExp.map((job) => (
                    <MenuItem
                      key={job.value}
                      value={job.value}
                      className="option"
                      sx={{
                        position: "relative",
                        letterSpacing: "0.04em",
                        lineHeight: "1.5rem",
                        fontSize: "20px",
                        fontWeight: "300",
                        minWidth: "5.188rem",
                      }}
                    >
                      {job.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "1.5rem",
            minWidth: "19rem",
            maxWidth: "100%",
            '@media (max-width:600px)':{
              display:'flex',
              flexDirection:'column',
              minWidth:'0rem',
              justifyContent:'center',
              alignItems:'center',
              marginTop:'-5rem',
              marginLeft:'-15rem'
            }
          }}
        >
          <div
            style={{
              height: "3.063rem",
              width: "7rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                height: "2.25rem",
                width: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "0rem 0rem 0.75rem",
                boxSizing: "border-box",
              }}
            ></div>
            <div
              style={{
                height: "3.125rem",
                width: "0.063rem",
                position: "relative",
                borderRight: "1px solid #d3d1d1",
                boxSizing: "border-box",
              }}
            />
            <div
              style={{
                height: "2.25rem",
                width: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "0rem 0rem 0.75rem",
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
                src={searchIcn}
              />
            </div>
          </div>
          <div
            style={{
              width: "10.25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "0rem 0rem 0.25rem",
              boxSizing: "border-box",
              minWidth: "10.5rem",
            }}
          >
            <Button
              style={{ alignSelf: "stretch", height: "2.5rem" }}
              endIcon={<img width="16px" height="16px" src={closeIcn} alt="close icon" />}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#0146b1",
                fontSize: "16",
                background: "#e4eefc",
                borderRadius: "60px",
                "&:hover": { background: "#e4eefc" },
                height: 40,
              }}
            >
              Web Design
            </Button>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "0rem 0rem 0.25rem",
              boxSizing: "border-box",
              minWidth: "10.5rem",
            }}
          >
            <Button
              style={{ alignSelf: "stretch", height: "2.5rem" }}
              endIcon={<img width="16px" height="16px" src={closeIcn} alt="close icon" />}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#0146b1",
                fontSize: "16",
                background: "#e4eefc",
                borderRadius: "60px",
                "&:hover": { background: "#e4eefc" },
                height: 40,
              }}
            >
              UI/UX Design
            </Button>
          </div>
        </Box>
      </Box>
      <Buttonfilledgreen />
    </Box>
  );
};

export default SearchJob;
