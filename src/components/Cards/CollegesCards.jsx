import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Image } from "../../utils/Image";
import { Link } from "react-router-dom";

const CollegesCards = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "300px",
          height: "400px",
          marginX: "auto",
          marginBottom: "1rem",
          borderRadius: "1rem",
          backgroundColor: "white",
          border: "1px solid lightgray",
          paddingX: "0.5rem",
          paddingY: "0.8rem",
          transition: "All 0.3s",
          "&:hover": {
            boxShadow:
              "2px 4px 8px 4px rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "180px",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={props.img}
            alt=""
            width="200px"
            height="160px"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginX: "2rem",
          }}
        >
          <Link
            to={`/study-abroad/degree/${props.countryName}/${props.degreeName}`} // Route with countryName and degreeType
            style={{ textDecoration: "none" }}
          >
            <Button
              //href={`/top-universities/`}
              variant="text"
              sx={{
                color: "white",
                backgroundColor: "#7B90FF",
                border: 1,
                borderColor: "transparent",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  border: 1,
                  borderColor: "grey.500",
                },

                fontSize: "0.5rem",
                fontWeight: "700",
                marginY: "0.5rem",
                borderRadius: "0.8rem",
                textTransform: "capitalize",
                paddingX: "1rem",
                transition:
                  "background-color 0.3s, color 0.3s, border-color 0.3s",
              }}
            >
              {props.titles}
            </Button>
          </Link>
          <Button>
            <Image src={props.icon} alt="icon" />
          </Button>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              marginTop: "0.5rem",
              color: "#210366",
            }}
          >
            {props.contents}
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "0.8rem",
              fontFamily: "Poppins",
              fontWeight: "500",
              marginY: "0.5rem",
              color: "#3858FC",
              height: "70px",
            }}
          >
            {props.contents_body}
          </Typography>
          <Button
            variant="text"
            href={`/top-universities`}
            sx={{
              position: "absolute",
              bottom: 3,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "transparent",
              width: "200px",
              textTransform: "capitalize",
              marginY: "0.5rem",
              transition: "border-color 0.3s",
            }}
          >
            {props.content_link}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export { CollegesCards };
