import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {Image} from "../../utils/Image";

const SuggestionCards = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "300px",
          height: "430px",
          borderRadius: "24px",
          backgroundColor: "white",
          margin: "auto",
          overflow: "hidden",
          transition: "All 0.5s",
          "&:hover": {
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.30);",
          },
          paddingX: "0.3rem",
          paddingY: "0.2rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "280px",
            height: "180px",
            borderRadius: "16px",
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginX: "2rem",
            }}
          >
            <Image
              src={props.img_logo}
              style={{
                width: "130px",
                height: "60px",
                objectFit: "cover",
                transform: "scale(1.08)",
              }}
              alt="@BHarat"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  textAlign: "left",
                  fontWeight: "500",
                  marginX: "1rem",
                  marginTop: "0.5rem",
                  color: "white",
                }}
              >
                {props.img_title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "11px",
                  fontWeight: "700",
                  marginTop: "0.5rem",
                  color: "white",
                }}
              >
                {props.img_body}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginX: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "700",
                // marginX: "1rem",
                marginTop: "0.5rem",
                color: "#210366",
              }}
            >
              {props.card_title}
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.6rem",
                fontWeight: "600",
                color: "#210366",
              }}
            >
              {props.title_text}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={props.review_icon}
              alt="@@@"
              style={{ width: "20px", height: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginX: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "0.6rem",
                  fontWeight: "600",
                  marginTop: "0.5rem",
                  color: "#210366",
                }}
              >
                {props.review_rate}
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "0.6rem",
                  fontWeight: "600",
                  color: "#210366",
                }}
              >
                {props.review_cnt}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            marginX: "1rem",
            flexDirection: "column",
          }}
        >
          <Button
            href={`/college-info/${props.id}/info`}
            variant="text"
            sx={{
              width: "95%",
              marginY: "0.5rem",
              backgroundColor: "rgba(123, 142, 255, 0.3)",
              color: "#210366",
              fontSize: "0.6rem",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              textAlign: "left",
              paddingY: "0.5rem",
            }}
          >
            {props.btn_contents}
          </Button>
          <Button
            href={`/college-info/${props.id}/course-fee`}
            variant="text"
            sx={{
              width: "95%",
              marginY: "0.2rem",
              backgroundColor: "rgba(123, 142, 255, 0.3)",
              color: "#210366",
              fontSize: "0.6rem",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
            }}
          >
            {props.btn2}
          </Button>
          <Button
            href={`/college-info/${props.id}/info`}
            variant="text"
            sx={{
              width: "95%",
              marginY: "0.3rem",
              backgroundColor: "rgba(123, 142, 255, 0.3)",
              color: "#210366",
              fontSize: "0.6rem",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              textAlign: "left",
            }}
          >
            {props.btn3}
          </Button>
          <Button
            href={`/college-info/${props.id}/collage-compare`}
            variant="outlined"
            sx={{
              width: "95%",
              marginY: "0.5rem",
              color: "#210366",
              fontSize: "0.6rem",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              textAlign: "left",
              borderColor: "#160048",
            }}
          >
            {props.btn4}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SuggestionCards;
