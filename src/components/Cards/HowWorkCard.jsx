import { Box, Button } from "@mui/material";
import React from "react";
import { RegisterModal } from "../Modal/MultiModal";

const HowWorkCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        width: "300px",
        height: "auto",
        marginY: "1.5rem",
        marginX: "1rem",
        gap: "1rem",
        "&:hover": {
          transition: "background 0.3s ease",
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "200px",
          borderRadius: "1rem 2rem 1rem ",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s ease",
          border: "5px solid lightGray",
        }}
      >
        <img
          width="180px"
          style={{ objectFit: "cover" }}
          src={props.img}
          alt=""
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: "0.6rem",
          backgroundColor: "#7B90FF",
          color: "white",
          paddingY: "0.7rem",
          textTransform: "capitalize",
          textAlign: "center",
          width: "100%",
          marginX: "auto",

          "&:hover": {
            background: "linear-gradient(to right, #FFA07A, #FF6347)",
            transform: "scaleY(1.01) ",
          },
        }}
        onClick={handleOpen}
      >
        {props.name}
      </Button>
      <RegisterModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default HowWorkCard;
