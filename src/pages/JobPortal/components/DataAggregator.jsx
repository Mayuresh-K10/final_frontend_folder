import React, { useMemo } from "react";
import blutik from "../Assets/bluetick.svg";
import bukmark from "../Assets/bookmark.svg";
import locate from "../Assets/locIcon.svg";
import work from "../Assets/suitIcon.svg";
import money from "../Assets/money.svg";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const DataAggregator = ({
  compensationBenefitConsul,
  easyApply,
  propBorderRadius,
  propWidth,
  propHeight,
  propMinWidth,
  propAlignSelf,
  propFlex,
  propAlignSelf1,
  propFlex1,
  propAlignSelf2,
  propMinWidth1,
  propHeight1,
  propFlex2,
  propWidth1,
  propAlignSelf3,
  propColor,
  propMinWidth2,
}) => {
  const dataAggregatorStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
    };
  }, [propBorderRadius]);

  const inputProcessorStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  const loopControllerStyle = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propMinWidth, propAlignSelf]);

  const functionCallerStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  const variableHolderStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf1),
      ...getStyleValue("flex", propFlex1),
    };
  }, [propAlignSelf1, propFlex1]);

  const comparisonOperatorStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf2),
    };
  }, [propAlignSelf2]);

  const compensationBenefitStyle = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth1),
    };
  }, [propMinWidth1]);

  const stringOperatorStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
      ...getStyleValue("flex", propFlex2),
    };
  }, [propHeight1, propFlex2]);

  const mapOperatorStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("alignSelf", propAlignSelf3),
    };
  }, [propWidth1, propAlignSelf3]);

  const easyApplyStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
      ...getStyleValue("minWidth", propMinWidth2),
    };
  }, [propColor, propMinWidth2]);

  return (
    <div
      style={{
        width: "65.063rem",
        borderRadius: "4px 4px 0px 0px",
        backgroundColor: "#fff",
        border: "1px solid #e9eaed",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "1.25rem 1rem",
        flexShrink: "0",
        textAlign: "left",
        fontSize: "0.506rem",
        color: "#fff",
        fontFamily: "Inter",
        ...dataAggregatorStyle,
      }}
    >
      <div
        style={{
          flex: "1",
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
            width: "23.938rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.25rem",
            maxWidth: "100%",
            ...inputProcessorStyle,
          }}
        >
          <div
            style={{
              borderRadius: "1.63px",
              backgroundColor: "#6913d8",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "1.069rem 0.563rem 1.056rem 0.625rem",
            }}
          >
            <div
              style={{
                height: "2.75rem",
                width: "2.75rem",
                position: "relative",
                borderRadius: "1.63px",
                backgroundColor: "#6913d8",
                display: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "1.563rem",
                zIndex: "1",
              }}
            >
              <span>Deall</span>
              <span style={{ color: "#fbeb99" }}>!</span>
            </div>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              minWidth: "12.938rem",
              fontSize: "0.875rem",
              color: "#2e343a",
              ...loopControllerStyle,
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.5rem",
                ...functionCallerStyle,
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.25rem",
                  ...variableHolderStyle,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.75rem",
                    ...comparisonOperatorStyle,
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      lineHeight: "1.25rem",
                      ...compensationBenefitStyle,
                    }}
                  >
                    {compensationBenefitConsul}
                  </b>
                  <div
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "rgba(13, 58, 124, 0.11)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      fontSize: "0.625rem",
                      color: "#1572b5",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0.125rem 0.75rem",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "1rem",
                          fontWeight: "600",
                          display: "inline-block",
                          minWidth: "2.375rem",
                        }}
                      >
                        Remote
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5rem",
                    fontSize: "0.75rem",
                    ...stringOperatorStyle,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      fontWeight: "500",
                      display: "inline-block",
                      minWidth: "3.75rem",
                    }}
                  >
                    Deall Jobs
                  </div>
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
                    src={blutik}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "13.438rem",
                  height: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.75rem",
                  fontSize: "0.625rem",
                  color: "#6f747a",
                  ...mapOperatorStyle,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
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
                    src={locate}
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      fontWeight: "500",
                      display: "inline-block",
                      minWidth: "1.938rem",
                    }}
                  >
                    Online
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
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
                    src={work}
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      fontWeight: "500",
                      display: "inline-block",
                      minWidth: "2.938rem",
                    }}
                  >
                    Freelance
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
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
                    src={money}
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      fontWeight: "500",
                      display: "inline-block",
                      minWidth: "3.313rem",
                    }}
                  >
                    Negotiable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "0.75rem",
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
            src={bukmark}
          />
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: "0",
              backgroundColor: "rgba(105, 19, 216, 0.06)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25rem 0.75rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#6913d8",
                  textAlign: "left",
                  display: "inline-block",
                  minWidth: "4.688rem",
                  ...easyApplyStyle,
                }}
              >
                {easyApply}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataAggregator;
