const FrameComponent4 = () => {
  return (
    <div
      style={{
        flex: "1",
        borderRadius: "4px",
        backgroundColor: "#fff",
        border: "1px solid #e9eaed",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "1rem 0.438rem 1rem 0.938rem",
        gap: "0.719rem",
        minWidth: "17.625rem",
        textAlign: "left",
        fontSize: "0.875rem",
        color: "#2e343a",
        fontFamily: "Inter",
      }}
    >
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
            height: "2.5rem",
            width: "2.5rem",
            position: "relative",
            borderRadius: "50%",
            backgroundColor: "#d9d9d9",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <b style={{ position: "relative", lineHeight: "1.25rem" }}>
            Andhika Sudarman
          </b>
          <div
            style={{
              position: "relative",
              lineHeight: "1.25rem",
              fontWeight: "500",
            }}
          >
            Chief Executive Officer
          </div>
        </div>
      </div>
      <img
        style={{ width: "16.938rem", height: "0.063rem", position: "relative" }}
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
      <div
        style={{
          alignSelf: "stretch",
          position: "relative",
          lineHeight: "1.25rem",
          fontWeight: "500",
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
    </div>
  );
};

export default FrameComponent4;
