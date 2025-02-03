import React from "react";
import { Container, FilledInput } from "@mui/material";
import OrangeButton from "../component/OrangeButton";

function CommentsSection() {
  return (
    <>
      <Container>
        <FilledInput
          disableUnderline
          fullWidth
          multiline
          minRows={5}
          sx={{
            borderRadius: "1.3rem",
            textTransform: "none",
            borderColor: "#7B90FF",
            borderWidth: "0.2rem",
            borderStyle: "solid",
            justifyContent: "center",
            height: "146px",
            fontSize: "1.125rem",
            fontWeight: "500",
            lineHeight: "1.375rem",

            marginBottom: "1.5rem",
            letterSpacing: "0rem",
            color: "#210366",
            backgroundColor: "rgba(123, 144, 255, 0.1)",
            padding: "1rem",
            "&:focus": {
              backgroundColor: "rgba(123, 144, 255, 0.15)",
              borderColor: "#7B90FF",
            },
          }}
          placeholder="Write Your Comments"
          id="Comments"
        />
      </Container>
      <Container
        sx={{
          textAlign: "end",
          marginBottom: "1rem",
        }}
      >
        <OrangeButton buttonName={"Login To Add Comments"} />
      </Container>
    </>
  );
}

export default CommentsSection;
