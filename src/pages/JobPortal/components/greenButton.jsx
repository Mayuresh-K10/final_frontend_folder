import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Buttonfilledgreen = () => {
  return (
    <Button
      style={{ height: "3rem", width: "8.75rem" }}
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "18",
        background: "#7f29cf",
        borderRadius: "8px",
        "&:hover": { background: "#fba862" },
        width: 140,
        height: 48,
      }}
    >
      <Link to="/job-portal/job">Search</Link>
    </Button>
  );
};

export default Buttonfilledgreen;
