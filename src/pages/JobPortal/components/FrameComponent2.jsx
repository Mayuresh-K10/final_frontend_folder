import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent2 = ({ propBorderRadius }) => {
  const frameDivStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
    };
  }, [propBorderRadius]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        borderRadius: "4px 4px 0px 0px",
        backgroundColor: "#fff",
        border: "1px solid #e9eaed",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "1rem 0.688rem 1rem 1.25rem",
        maxWidth: "100%",
        flexShrink: "0",
        textAlign: "left",
        fontSize: "0.875rem",
        color: "#2e343a",
        fontFamily: "Inter",
        ...frameDivStyle,
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
            height: "5.75rem",
            width: "19.313rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              height: "2.75rem",
              width: "2.75rem",
              position: "relative",
              borderRadius: "4px",
              backgroundColor: "#e9eaed",
            }}
          />
          <div
            style={{
              alignSelf: "stretch",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.25rem",
              }}
            >
              <b
                style={{ position: "relative", lineHeight: "1.25rem" }}
              >{`Compensation & Benefit Consultant`}</b>
              <div
                style={{
                  width: "15rem",
                  position: "relative",
                  fontSize: "0.75rem",
                  lineHeight: "1rem",
                  display: "inline-block",
                }}
              >
                Deall Jobs
              </div>
              <div
                style={{
                  width: "13.313rem",
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.75rem",
                  fontSize: "0.625rem",
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
                    loading="lazy"
                    alt=""
                    src="/icon-website-14.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      display: "inline-block",
                      minWidth: "1.875rem",
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
                    loading="lazy"
                    alt=""
                    src="/icon-website-14.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
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
                    loading="lazy"
                    alt=""
                    src="/icon-website-14.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "1rem",
                      display: "inline-block",
                      minWidth: "3.25rem",
                    }}
                  >
                    Negotiable
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "12px",
                backgroundColor: "#e9eaed",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                fontSize: "0.625rem",
                color: "#6f747a",
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "2.75rem",
            color: "#6f747a",
          }}
        >
          <div
            style={{
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "19px",
              border: "1px solid #e9eaed",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0.25rem 0.188rem",
            }}
          >
            <img
              style={{
                height: "1rem",
                width: "1rem",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              loading="lazy"
              alt=""
              src="/icon-website-14.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "12px",
              backgroundColor: "#e9eaed",
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
                padding: "0.125rem 0.75rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "1.25rem",
                  fontWeight: "500",
                  display: "inline-block",
                  minWidth: "4.688rem",
                }}
              >
                Easy Apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
