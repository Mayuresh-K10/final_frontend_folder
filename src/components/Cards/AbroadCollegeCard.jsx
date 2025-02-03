import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";

import OrangeButton from "../Buttons/OrangeButton";

import { Link } from "react-router-dom";
import { RegisterModal } from "../Modal/MultiModal";

const url = process.env.REACT_APP_BACKEND_SERVER_URL;

const AbroadCollegeCard = (props) => {
  // const [isHovered, setIsHovered] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log("Props Id:", props.id);
  
  const cleanText = (text) => {
    return text.replace(/�/g, "");
  };

  return (
    <Box
      sx={{
        border: "1px solid #553cdf",
        boxShadow: "0px 2px 40px rgba(123, 144, 255, 0.1)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "800px",
        height: "auto",
        "@media (max-width:850px)": {
          flexDirection: "column",
          paddingY: "0.5rem",
          height: "auto",
          width:'94%'
        },
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          "@media (max-width:800px)": {
            justifyContent: "center",
          },
        }}
      >
        <Avatar
          src={props.img}
          sx={{
            height: "100px",
            width: "100px",
            border: "0.1px solid #7B90FF",
            objectFit: "contain",
          }}
        />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "0.7rem",
          "@media (min-width:800px)": {
            width: "47%",
            marginLeft: "2vw",
          },
        }}
      >
        
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "#210366",
              whiteSpace: "wrap",
              textWrap:'wrap',
              "@media (max-width:800px)": {
                whiteSpace: "wrap",
                textAlign: "center",
              },
            }}
          >
            {props.name ? props.name : ""}
          </Typography>

          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "1rem",
              color: "#210366",
              whiteSpace: "nowrap",
              "@media (max-width:800px)": {
                whiteSpace: "wrap",
                textAlign: "center",
              },
            }}
          >
            {props.location ? props.location : ""}
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "1rem",
              color: "#210366",
              whiteSpace: "nowrap",
              textWrap:'wrap',
              "@media (max-width:800px)": {
                whiteSpace: "wrap",
                textAlign: "center",
              },
            }}
          >
            {props.courses ? cleanText(props.courses) : ""}
          </Typography>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.2rem",
            "@media (max-width:800px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.2rem",
              "@media (max-width:800px)": {
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                flexDirection: "row",
                width: "100%",
                paddingBottom: "1vh",
              },
            }}
          >
            <Link to={`/study-abroad/${props.location}/${props.id}/info`}>
              <OrangeButton text="View Details" />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "0.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "3rem",
          "@media (max-width:800px)": {
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "0rem",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            marginLeft: "0.3rem",
            paddingTop: "0.2rem",
          }}
        >
          {props.stars ? props.stars : ""}
        </Typography>
        <Rating
          name="read-only"
          value={props.stars}
          sx={{ color: "#7B90FF" }}
          precision={0.1}
          readOnly
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "0.5rem",
            paddingBottom: "4vh",
            "@media (max-width:800px)": {
              paddingTop: "2vh",
              margin: "0",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <OrangeButton text="Brochure" onClick={handleOpen} />
          <OrangeButton text="Enquire" onClick={handleOpen} />

          <RegisterModal
            open={open}
            showCollegeInfo={true}
            collegeImage={`${url}${props.img}`}
            collegeName={props.name}
            handleClose={handleClose}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AbroadCollegeCard;