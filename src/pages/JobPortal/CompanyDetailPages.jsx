import React from "react";

import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";

import searchIcn from "./Assets/Iconsearch.svg";
import dropdwn from "./Assets/droparrow.svg";
import switchIcn from "./Assets/switchicon.svg";

import NestedTree from "../JobPortal/components/NestedTree";
import DataAggregator1 from "../JobPortal/components/DataAggregator1";
import DataSplitter from "../JobPortal/components/DataSplitter";
import DataAggregator from "../JobPortal/components/DataAggregator";
import { Link } from "react-router-dom";

const CompanyDetailPages = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0rem 0rem 1.875rem",
        boxSizing: "border-box",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "0.625rem",
        color: "#585f65",
        fontFamily: "Inter",
      }}
    >
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2.5rem 1.25rem",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <section
          style={{
            width: "66.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.25rem",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "0.875rem",
            color: "#2e343a",
            fontFamily: "Inter",
          }}
        >
          <NestedTree />
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "4px",
              backgroundColor: "#fff",
              overflowX: "auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0.5rem",
              gap: "1rem",
            }}
          >
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
                  minWidth: "2.563rem",
                }}
              >
                <Link to="/job-portal/company">About</Link>
              </div>
              <div
                style={{
                  height: "0.125rem",
                  width: "2.25rem",
                  position: "relative",
                  backgroundColor: "#390d72",
                  display: "none",
                }}
              />
            </button>

            <div
              style={{
                height: "0.125rem",
                width: "5.563rem",
                position: "relative",
                flexShrink: "0",
                display: "none",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25rem 0rem 0rem",
              }}
            >
              <button
                style={{
                  position: "relative",
                  lineHeight: "1.25rem",
                  fontWeight: "500",
                  display: "inline-block",
                  minWidth: "2.063rem",
                }}
              >
                <Link to="/job-portal/company/jobs">Jobs</Link>
              </button>
            </div>
            <div
              style={{
                height: "0.125rem",
                width: "1.813rem",
                position: "relative",
                backgroundColor: "#d9d9d9",
                flexShrink: "0",
                display: "none",
              }}
            />
          </div>
          <DataAggregator1 />
          <DataSplitter />
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "1px solid #e9eaed",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0rem 0rem 1rem",
              gap: "0.75rem",
              maxWidth: "100%",
              color: "#fff",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "4px 4px 0px 0px",
                backgroundColor: "#8734f1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "1.25rem 0.75rem",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  maxWidth: "100%",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "34.75rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "1rem",
                    maxWidth: "100%",
                  }}
                >
                  <b style={{ position: "relative", lineHeight: "1.25rem" }}>
                    Active Job Opening
                  </b>
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "0.5rem",
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        height: "1.75rem",
                        flex: "1",

                        fontSize: "0.75rem",
                        color: "#6f747a",
                        minWidth: "16.563rem",
                        maxWidth: "100%",
                      }}
                      placeholder="Search job title here..."
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <img
                            width="20px"
                            alt=""
                            height="20px"
                            src={searchIcn}
                          />
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
                        "& .MuiInputBase-input": {
                          paddingLeft: "4px",
                          color: "#6f747a",

                          borderColor: "transparent",
                        },
                      }}
                    />
                    <FormControl
                      style={{
                        height: "1.75rem",
                        width: "8.813rem",
                        fontFamily: "Inter",
                        fontSize: "0.75rem",
                        color: "#585f65",
                      }}
                      variant="standard"
                      sx={{
                        borderColor: "#e9eaed",
                        borderStyle: "SOLID",
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "12px",
                        width: "25.359712230215827%",
                        height: "28px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "28px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "28px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "28px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "28px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#585f65",
                          fontSize: 12,
                          fontWeight: "Regular",
                          fontFamily: "Inter",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "12px",
                        },
                      }}
                    >
                      <InputLabel color="secondary" />
                      <Select
                        color="secondary"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="16px"
                            height="20px"
                            src={dropdwn}
                            alt=""
                            style={{ marginRight: "12px" }}
                          />
                        )}
                      >
                        <MenuItem>Role Category</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                </div>
                <div
                  style={{
                    height: "2rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0rem 0.75rem 0rem 0rem",
                    boxSizing: "border-box",
                    gap: "0.5rem",
                    fontSize: "0.75rem",
                  }}
                >
                  <img
                    style={{
                      height: "2rem",
                      width: "2rem",
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: "0",
                    }}
                    loading="lazy"
                    alt=""
                    src={switchIcn}
                  />
                  <div style={{ position: "relative", lineHeight: "1rem" }}>
                    See matching jobs Only
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0rem 0.75rem",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  flex: "1",
                  overflowX: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  maxWidth: "100%",
                }}
              >
                <DataAggregator
                  compensationBenefitConsul={`Compensation & Benefit Consultant`}
                  easyApply="Easy Apply"
                />
                <DataAggregator
                  compensationBenefitConsul="Nursing Assistant"
                  easyApply="Easy Apply"
                  propBorderRadius="unset"
                  propWidth="17.438rem"
                  propHeight="4rem"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propAlignSelf1="unset"
                  propFlex1="1"
                  propAlignSelf2="unset"
                  propMinWidth1="7.688rem"
                  propHeight1="unset"
                  propFlex2="1"
                  propWidth1="unset"
                  propAlignSelf3="stretch"
                  propColor="#6913d8"
                  propMinWidth2="4.688rem"
                />
                <DataAggregator
                  compensationBenefitConsul="Marketing Coordinator"
                  easyApply="Easy Apply"
                  propBorderRadius="unset"
                  propWidth="18.375rem"
                  propHeight="4rem"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propAlignSelf1="stretch"
                  propFlex1="1"
                  propAlignSelf2="stretch"
                  propMinWidth1="unset"
                  propHeight1="unset"
                  propFlex2="1"
                  propWidth1="13.438rem"
                  propAlignSelf3="unset"
                  propColor="#6913d8"
                  propMinWidth2="4.688rem"
                />
                <DataAggregator
                  compensationBenefitConsul="Web Designer"
                  easyApply="Applied"
                  propBorderRadius="unset"
                  propWidth="17.438rem"
                  propHeight="4rem"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propAlignSelf1="unset"
                  propFlex1="1"
                  propAlignSelf2="unset"
                  propMinWidth1="6.063rem"
                  propHeight1="unset"
                  propFlex2="1"
                  propWidth1="unset"
                  propAlignSelf3="stretch"
                  propColor="rgba(105, 19, 216, 0.35)"
                  propMinWidth2="3.25rem"
                />
                <DataAggregator
                  compensationBenefitConsul="Medical Assistant"
                  easyApply="Easy Apply"
                  propBorderRadius="0px 0px 4px 4px"
                  propWidth="17.438rem"
                  propHeight="4rem"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propAlignSelf1="unset"
                  propFlex1="1"
                  propAlignSelf2="unset"
                  propMinWidth1="7.688rem"
                  propHeight1="unset"
                  propFlex2="1"
                  propWidth1="unset"
                  propAlignSelf3="stretch"
                  propColor="#6913d8"
                  propMinWidth2="4.688rem"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompanyDetailPages;
