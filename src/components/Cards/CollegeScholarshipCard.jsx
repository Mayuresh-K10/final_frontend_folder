import React from "react";
import { Box, Button, Typography, Stack, Divider } from "@mui/material";
import { RegisterModal } from "../Modal/MultiModal";

const CollegeScholarshipCard = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          width: "350px",
          margin: "1rem 0rem 2rem 1rem",
          boxShadow: "0px 4px 40px 0px #7B90FF1A",
          borderRadius: "28px",
          padding: "10px",
        }}
      >
        <Stack
          spacing={1}
          sx={{
            fontFamily: "Poppins",
            fontStyle: "bold",
            color: "#210366",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "30px",
              color: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              backgroundColor: "#7B90FF",
              borderRadius: "4px",
            }}
          >
            <Typography variant="inherit">{props.heading}</Typography>
          </Box>
          <Typography
            variant="inherit"
            sx={{
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            {props.title}
          </Typography>
          <Divider sx={{ border: "1px solid #7B90FF33" }} />
          <Stack direction="row">
            <Stack>
              <Typography variant="inherit">
                International Student Eligible
              </Typography>
              <Typography variant="inherit">Amount</Typography>
              <Typography variant="inherit">Level of Study</Typography>
              <Typography variant="inherit">Number of Scholarships</Typography>
            </Stack>
            <Stack paddingLeft="50px">
              <Typography variant="inherit" sx={{ fontWeight: "700" }}>
                {props.content1}
              </Typography>
              <Typography variant="inherit" sx={{ fontWeight: "700" }}>
                {props.content2}
              </Typography>
              <Typography variant="inherit" sx={{ fontWeight: "700" }}>
                {props.content3}
              </Typography>
              <Typography variant="inherit" sx={{ fontWeight: "700" }}>
                {props.content4}
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ border: "1px solid #7B90FF33" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: "12px",
                color: "#FFFFFF",
                backgroundColor: "#7B90FF",
                width: "100px",
                height: "30px",
              }}
              onClick={handleOpen}
            >
              {props.button}
            </Button>
            <RegisterModal
            open={open}
            showCollegeInfo={true}
            
            collegeName={props.title}
            handleClose={handleClose} 
          />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CollegeScholarshipCard;
