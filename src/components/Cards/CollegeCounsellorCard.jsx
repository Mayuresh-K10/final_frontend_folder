import React  from "react";
import { Box, Stack, Button } from "@mui/material";
import { RegisterModal } from "../../components/Modal/MultiModal";

export default function CollegeCounsellor(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          justifyContent: "flex-start",
          "@media (max-width: 770px)": {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Button
        onClick={handleOpen}
          variant="contained"
          sx={{
            borderRadius: "0.6rem",
            backgroundColor: "#7B90FF",
            color: "white",
            paddingY: "0.7rem",
            textTransform: "capitalize",
            width: "230px",
            marginLeft: "1rem",
            fontSize: "13px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
         
        >
          <img
            src={props.img}
            alt="@Bharat_Tech"
            width="30px"
            height="30px"
            style={{ marginRight: "1rem" }}
          />
          {props.content}
        </Button>
        <RegisterModal
        open={open}
        handleClose={handleClose}
      />
      </Stack>
    
    </Box>
  );
}
