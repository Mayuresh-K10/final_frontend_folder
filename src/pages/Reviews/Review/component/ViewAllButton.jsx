import {
    Button,
  } from "@mui/material";
function ViewAllButton(){
    return(
        <Button
        sx={{
          fontFamily: "Poppins",
          fontSize: "0.875rem",
          fontWeight: "600",
          lineHeight: "2.25rem",
          color: "#7B90FF",
          letterSpacing: "0.7px",
        }}
      >
        View All
      </Button>
    );
}
export default ViewAllButton;