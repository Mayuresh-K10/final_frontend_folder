import {
    Button,
  } from "@mui/material";
  import React from "react";
function OrangeButton({buttonName,onClick}){
    return(
        <Button
        sx={{
            borderRadius: "10px",
            color: "#FFFFFF",
            backgroundColor: "#FF7900",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            minWidth:"11.1875rem",
            fontWeight: "500",
            textTransform: "none",
            "&:hover": {
                color: "#F6F6F6",
                backgroundColor: "#210366",
              },
          }}
          onClick={onClick}
          >
        {buttonName}
      </Button>
    );
}

export default OrangeButton;