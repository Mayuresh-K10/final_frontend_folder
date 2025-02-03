import React, { useState } from "react";
import { MenuItem, Menu, Box } from "@mui/material";
import Buttonfilledgreen from "./greenButton";

import dropdownIcn from "../Images/dropdown.svg";

import "./searchJob.css";

const SearchJob = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    setDropdownOpen(!dropdownOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropdownOpen(false);
  };

  const handleMenuItemClick = (value) => {
    setSelectedOption(value);
    handleClose();
  };

  const handleRemoveOption = () => {
    setSelectedOption(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleIconClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
    setDropdownOpen2(!dropdownOpen2);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
    setDropdownOpen2(false);
  };

  const handleMenuItemClick2 = (value) => {
    setSelectedOption2(value);
    handleClose2();
  };

  const handleRemoveOption2 = () => {
    setSelectedOption2(null);
  };

  return (
    <Box
      sx={{
        marginRight: "-40px",
        width: "66.25rem",
        margin: "0",
        position: "absolute",
        marginTop: "16rem",
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
          display:"none"
        }
      }}
    >
      <div
        style={{
          width: "41.938rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "5rem",
          maxWidth: "100%",
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
              "@media (max-width:500px)": {
                flexDirection: "coloumn",
                alignItems: "center",
              },
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
            >
            </div>
            <div
              style={{
                position: "relative",
                letterSpacing: "0.04em",
                lineHeight: "1.5rem",
                fontSize: "20px",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "5.188rem",
                cursor: "pointer",
              }}
              onClick={handleIconClick}
            >
              {selectedOption ? selectedOption : "Colleges"}
            </div>
            <img
              style={{
                height: "1.5rem",
                width: "1.5rem",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                marginLeft: "0.5rem",
                transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                cursor: "pointer",
              }}
              alt=""
              src={dropdownIcn}
              onClick={handleIconClick}
            />
            <Menu
              id="colleges-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleMenuItemClick("College1")}>
                College 1
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("College2")}>
                College 2
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("College3")}>
                College 3
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "1.5rem",
            minWidth: "19rem",
            maxWidth: "100%",
          }}
        >
        </div>
      </div>
      <div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "1rem",
            minWidth: "19rem",
            maxWidth: "100%",
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
                
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.04em",
                  lineHeight: "1.5rem",
                  fontSize: "20px",
                  fontWeight: "300",
                  display: "inline-block",
                  minWidth: "5.188rem",
                  cursor: "pointer",
                }}
                onClick={handleIconClick2}
              >
                {selectedOption2 ? selectedOption2 : "Degree"}
              </div>
              <img
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  marginLeft: "0.5rem",
                  transform: dropdownOpen2 ? "rotate(180deg)" : "rotate(0deg)",
                  cursor: "pointer",
                }}
                alt=""
                src={dropdownIcn}
                onClick={handleIconClick2}
              />
              <Menu
                id="options-menu"
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem onClick={() => handleMenuItemClick2("MCA")}>
                  MCA
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick2("BCA")}>
                  BCA
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick2("MBA")}>
                  MBA
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <Buttonfilledgreen />
    </Box>
  );
};

export default SearchJob;
