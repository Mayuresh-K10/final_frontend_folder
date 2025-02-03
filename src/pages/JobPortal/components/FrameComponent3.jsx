const FrameComponent3 = () => {
  return (
    <div
      style={{
        flex: "1",
        borderRadius: "4px",
        backgroundColor: "#fff",
        border: "1px solid #e9eaed",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 0.688rem 1rem 1.188rem",
        gap: "1.25rem",
        minWidth: "15.563rem",
        maxWidth: "100%",
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
          padding: "1.25rem 0rem",
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
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.625rem",
          minWidth: "9.75rem",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "1.25rem",
            textTransform: "uppercase",
            display: "inline-block",
            minWidth: "5.375rem",
          }}
        >
          Innovative
        </b>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "1.25rem",
            fontWeight: "500",
          }}
        >
          We strive to constantly pursue innovation of our products and services
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
