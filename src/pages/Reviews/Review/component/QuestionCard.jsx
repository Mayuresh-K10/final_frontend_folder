import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";

export default function QuestionCard({ ques, ans, ansby }) {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        marginBottom: "2rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        "@media (max-width:600px)": {
          //  maxWidth: "65%",
          alignItems: "center",
          justifyItems: "center",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width:600px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifycontent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#FF7900",
              //marginRight: "1rem",
              textAlign: "center",
            }}
          >
            IIM Bangalore: 224 Answered Questions
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontSize: "0.875rem",
              fontWeight: "500",
              textTransform: "none",
              color: "#FF7900",
            }}
          >
            VIEW ALL
          </Button>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#210366",
          marginTop: "1rem",
          width: "100%",
        }}
      >
        {ques}
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#757575",
          marginTop: "0.5rem",
        }}
      >
        Answered by {ansby}
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#333",
          marginTop: "1rem",
        }}
      >
        {ans}
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#FF7900",
          marginTop: "1rem",
          cursor: "pointer",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#FFA500",
          },
        }}
      >
        Read more
      </Typography>

      <Box display="flex" alignItems="center" marginTop="1rem" color="#757575">
        <ThumbUpAltIcon
          sx={{
            fontSize: "1rem",
            marginRight: "0.5rem",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#4CAF50",
            },
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#757575",
            marginRight: "1rem",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#4CAF50",
            },
          }}
        >
          0
        </Typography>
        <ThumbDownAltIcon
          sx={{
            fontSize: "1rem",
            marginRight: "0.5rem",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#FF6347",
            },
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#757575",
            marginRight: "1rem",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#FF6347",
            },
          }}
        >
          0
        </Typography>
        <ShareIcon
          sx={{
            fontSize: "1rem",
            marginRight: "0.5rem",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#007bff",
            },
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#757575",
            marginRight: "1rem",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#007bff",
            },
          }}
        >
          2 Answers
        </Typography>
      </Box>

      <Divider
        sx={{
          marginTop: "1rem",
        }}
      />
    </Box>
  );
}
