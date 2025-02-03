import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
} from "@mui/icons-material";
import { RegisterModal } from "../../../../components/Modal/MultiModal";

export default function SimilarScholarships({
  heading,
  point1,
  point2,
  point3,
  point4,
  point5,
  ans1,
  ans2,
  ans3,
  ans4,
  ans5,
}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0px 0px 40px 0px #7B90FF26",
            borderRadius: "28px",
            marginLeft: "70px",
            "@media (max-width:600px)": {
              marginLeft: "0px",
            },
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "600",
                color: "#41355D",
                marginBottom: "1rem",
              }}
            >
              {heading}
            </Typography>
            <Divider />
            <List
              sx={{
                listStyleType: "disc",
                listStylePosition: "inside",
                color: "#41355D",
              }}
            >
              <ListItem sx={{ display: "list-item" }}>
                {point1}{" "}
                <Typography variant="p" fontWeight="700">
                  {" "}
                  {ans1}{" "}
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {point2}{" "}
                <Typography variant="p" fontWeight="700">
                  {" "}
                  {ans2}{" "}
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {point3}{" "}
                <Typography variant="p" fontWeight="700">
                  {" "}
                  {ans3}{" "}
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {point4}{" "}
                <Typography variant="p" fontWeight="700">
                  {" "}
                  {ans4}{" "}
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {point5}{" "}
                <Typography variant="p" fontWeight="700">
                  {" "}
                  {ans5}{" "}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              startIcon={<CheckCircleOutlineIcon />}
              sx={{
                color: "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0em",
                textTransform: "none",
                backgroundColor: "#FF7900",
                "&:hover": {
                  backgroundColor: "#FF9100",
                },
                borderRadius: "10px",
                width: "150px",
                marginRight: { xs: "0", sm: "10px" },
                marginBottom: { xs: "10px", sm: "0" },
                padding: "4px",
              }}
              onClick={handleOpen}
            >
              Apply now
            </Button>
            <RegisterModal
            open={open}
            showCollegeInfo={true}
            
            collegeName={heading}
            handleClose={handleClose} 
          />
            <Button
              size="small"
              startIcon={<NotificationsNoneOutlinedIcon />}
              sx={{
                color: "#FFFFFF",
                textTransform: "none",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0em",
                backgroundColor: "#7B90FF",
                "&:hover": {
                  backgroundColor: "#6B7AE8",
                },
                borderRadius: "10px",
                width: "150px",
                marginLeft: { xs: "0", sm: "10px" },
                marginBottom: { xs: "10px", sm: "0" },
                padding: "4px",
              }}
              
            >
              Get alert
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
