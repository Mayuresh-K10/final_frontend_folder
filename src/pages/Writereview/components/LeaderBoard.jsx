import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import data from "../data.js";

import FilledButton from "../../../components/Buttons/FilledButton.jsx";

const LeaderBoard = () => {
  

  // Usage example:
  const [filterData, setFilterData] = useState(data);

  const handleFilter = () => {
    const k = data.filter(({ date }) => {
      const reviwDate = date.split("-");
      const currdate = new Date();
      const month = currdate.getMonth();
      return month === parseInt(reviwDate[1]);
    });

    setFilterData(k);
  };

  // console.log(topRankers);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "2rem",
        width: "100%",
        padding: "2rem",
        "@media (max-width:600px)": {
          padding: "0px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          "@media (max-width:800px)": {
            paddingLeft: "2vw",
            paddingRight: "2vw",
            gap: "8vw",
          },
        }}
      >
        <FilledButton
          backgroundColor="white"
          textColor="#cc5500"
          textD="underline"
          handleclick={handleFilter}
        >
          This Month
        </FilledButton>
        <FilledButton
          backgroundColor="white"
          textColor="#cc5500"
          textD="underline"
        >
          This Week
        </FilledButton>
        <FilledButton
          backgroundColor="white"
          textColor="#cc5500"
          textD="underline"
        >
          This Quarter
        </FilledButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          //border: "1px solid lightgrey",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            bgcolor: "#efdecd",
            padding: "2rem",
            // marginBottom:"1rem",
            display: "flex",
            fontSize: "0.9rem",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid lightgrey",
            lineHeight: "1.3rem",
            fontWeight: "500",
            gap: "1rem",
            "@media (max-width:800px)": {
              paddingLeft: "2vw",
              paddingRight: "2vw",
            },
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              width: "10%",
              fontSize: "1.2rem",
              color: "#4C516D",
              paddingRight: "3rem",
              textAlign: "center",
              "@media (max-width:800px)": {
                fontSize: "1rem",
              },
            }}
          >
            Rank
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              width: "30%",
              fontSize: "1.2rem",
              color: "#4C516D",
              "@media (max-width:800px)": {
                fontSize: "1rem",
              },
            }}
          >
            Student Name & College Name
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              width: "30%",
              fontSize: "1.2rem",
              color: "#4C516D",
              "@media (max-width:800px)": {
                fontSize: "1rem",
              },
            }}
          >
            Course
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              width: "15%",
              color: "#4C516D",
              fontSize: "1.2rem",
              textAlign: "center",
              "@media (max-width:800px)": {
                fontSize: "1rem",
              },
            }}
          >
            Review Count
          </Typography>
        </Box>
        {filterData.map((item) => (
          <Box
            key={item.rank}
            sx={{
              width: "100%",
              padding: "2rem",
              border: "1px solid lightgrey",
              marginTop: "1.5rem",
              display: "flex",
              fontSize: "0.9rem",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: "1.3rem",
              fontWeight: "500",
              // bgcolor:"red",
              gap: "1rem",
              "@media (max-width:800px)": {
                paddingLeft: "2vw",
                paddingRight: "2vw",
              },
            }}
          >
            <Typography
              variant="p"
              sx={{
                width: "10%",
                color: "2F1370",
                textAlign: "center",
                marginRight: "3rem",
              }}
            >
              #{item.rank}
            </Typography>

            <Box
              sx={{ width: "30%", display: "flex", flexDirection: "column" }}
            >
              <Typography variant="p" color="#008080">
                {item.name}
              </Typography>
              <Typography variant="p" color="gray">
                {item.college}
              </Typography>
            </Box>
            <Box
              sx={{ width: "30%", display: "flex", flexDirection: "column" }}
            >
              <Typography variant="p" color="#2E2787">
                {item.stream}
              </Typography>

              <Typography variant="p" color="#8DA399">
                {item.courses.join(", ")}
              </Typography>
            </Box>

            <Typography
              variant="p"
              sx={{
                width: "15%",
                color: "#007791",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {item.reviewsCount}
            </Typography>
          </Box>
        ))}
      </Box>
      <FilledButton
        backgroundColor="white"
        textColor="#cc5500"
        textD="underline"
      >
        Check more Details
      </FilledButton>
    </Box>
  );
};

export default LeaderBoard;
