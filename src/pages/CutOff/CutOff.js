import React from "react";
import Notification from "./Component/Notifications";
import Category from "./Component/Category";
import { Container } from "@mui/material";
function CutOff() {
  return (
    <Container maxWidth="lg">
      <Notification />
      <Category />
    </Container>
  );
}

export default CutOff;
