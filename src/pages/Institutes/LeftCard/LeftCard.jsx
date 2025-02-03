import React from "react";
import { Card } from "@mui/material";
import { Typography, CardContent } from "@mui/material";
const LeftCard = () => {
  return (
    <Card
      display="flex"
      flexDirection="row"
      gap="50px"
      sx={{ minWidth: 275, height: 1000 }}
    >
      <CardContent>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "Poppins",
            fontSize: "25px",
            fontWeight: "1000",
            lineHeight: "21px",
            textAlign: "left",
            color: "#210366",
          }}
        >
          Found 6715 Institue
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LeftCard;
