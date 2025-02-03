const FrameComponent5 = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        height: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "1rem",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "0.625rem",
        color: "#585f65",
        fontFamily: "Inter",
      }}
    >
      <header
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0rem 5rem",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "1.25rem",
          color: "#6913d8",
          fontFamily: "Inter",
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
              width: "20.563rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0.25rem 0rem 0rem",
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
                }}
              >
                <span>Deall</span>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25rem 0rem 0rem",
              }}
            >
              <div
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "relative",
                  backgroundColor: "#e9eaed",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25rem 0rem 0rem",
              }}
            >
              <div
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "relative",
                  backgroundColor: "#e9eaed",
                }}
              />
            </div>
            <div
              style={{
                height: "2rem",
                width: "2rem",
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "#e9eaed",
              }}
            />
          </div>
        </div>
      </header>
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
          backgroundColor: "#f8f9fa",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0.5rem 5rem",
          boxSizing: "border-box",
          gap: "0.25rem",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            height: "2rem",
            width: "90rem",
            position: "relative",
            backgroundColor: "#f8f9fa",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <img
          style={{
            height: "1rem",
            width: "1rem",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
            minHeight: "1rem",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/icon.svg"
        />
        <div
          style={{
            position: "relative",
            lineHeight: "1rem",
            fontWeight: "600",
            display: "inline-block",
            minWidth: "5.25rem",
            whiteSpace: "nowrap",
            zIndex: "1",
          }}
        >
          Explore company
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
