import React from "react";
import Container from "@mui/material/Container";

import PopularCompare from "./PopularCompare";
import AllPracQues from "../../PracticeAnswer/Component/AllPracQues";

function Left() {
  return (
    <>
      <PopularCompare />
      <Container
        sx={{ background: "#FFFFFF", borderRadius: "2rem", marginTop: 2 }}
      >
        <AllPracQues />
      </Container>
    </>
  );
}

export default Left;
