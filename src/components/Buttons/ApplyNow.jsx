import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { RegisterModal } from "../Modal/MultiModal";


const ApplyNowButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Button
      sx={{
        height: "auto",
        width: "fit-content",
        borderRadius: "12px",
        color: "#FFFFFF",
        textAlign: "center",
        backgroundColor: "#7B90FF",
        justifyContent: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontFamily: "Poppins",
        fontSize: "0.8rem",
        fontWeight: "500",
        textTransform: "none",
        paddingY:'0.5rem',
        "&:hover": {
          color: "#F6F6F6",
          backgroundColor: "#210366",
        },
      }}
      component={Link}
      to={props.link}
      style={{ textDecoration: "none" }}
      onClick={handleOpen}
    >
      Apply Now
    </Button>
    <RegisterModal
            open={open}
            showCollegeInfo={true}
            collegeImage={props.img}
            collegeName={props.name}
            handleClose={handleClose} 
          />
          </>
  );
};

export default ApplyNowButton;
