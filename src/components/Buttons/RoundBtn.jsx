import React from "react";
import { Box, Typography } from "@mui/material";
import { RegisterModal } from "../Modal/MultiModal";

const RoundBtn = ({ image, name }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "1rem",
        padding: "0.5rem",
        transition: "transform 0.2s, border-color 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          borderColor: "#7B90FF",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 120,
          height: 120,
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleOpen}
      >
        <img
          src={image}
          alt={name}
          style={{
            objectFit: "cover",
            width: "50%",
            height: "50%",
          }}
        />
      </Box>
      <RegisterModal open={open} handleClose={handleClose} />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "20px",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#210366",
          marginTop: "0.5rem",
          maxWidth: 120,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default RoundBtn;
