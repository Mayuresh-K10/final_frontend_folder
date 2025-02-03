import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const EdulLoan = ({ title, subtitle, content }) => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: 30,
            fontWeight: "600",
            wordWrap: "break-word",
            display: "flex",
          }}
        >
          {title}
          <Typography
            sx={{
              color: "#FF7900",
              fontSize: 30,
              fontWeight: "600",
              wordWrap: "break-word",
              marginLeft: 0.8,
            }}
          >
            {subtitle}
          </Typography>
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        marginTop={{ xs: "1rem" }} // Adjust margin top for different screen sizes
      >
        <Grid item xs={12} md={6} gap={"20px"}>
          <Stack sx={{ textAlign: "start" }}>
            <Typography
              sx={{
                color: "#210366",
                fontSize: { xs: 16, md: 18 }, // Adjust font size for different screen sizes
                fontWeight: "600",
              }}
            >
              {content.left.title}
            </Typography>
            <br />
            <Typography
              sx={{
                color: "#210366",
                fontSize: { xs: 14, md: 15 }, // Adjust font size for different screen sizes
                marginBottom: 2,
                lineHeight: { xs: 1.5, md: 2 }, // Adjust line height for different screen sizes
              }}
            >
              {content.left.text}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} gap={"20px"}>
          <Stack sx={{ textAlign: "start" }}>
            <Typography
              sx={{
                color: "#210366",
                fontSize: { xs: 16, md: 18 }, // Adjust font size for different screen sizes
                fontWeight: "600",
              }}
            >
              {content.right.title}
            </Typography>
            <br />
            <Typography
              sx={{
                color: "#210366",
                fontSize: { xs: 14, md: 15 }, // Adjust font size for different screen sizes
                marginBottom: 2,
                lineHeight: { xs: 1.5, md: 2 }, // Adjust line height for different screen sizes
              }}
            >
              {content.right.text}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default EdulLoan;
