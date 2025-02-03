import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import TrendingNews from "../../TrendingNews/TrendingNews";
import { useParams } from "react-router-dom";

function CollageInfoPage() {
  const { id } = useParams();
  const [collegeInfo, setCollegeInfo] = useState(null);

  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  useEffect(() => {
    const fetchCollegeInfo = async () => {
      try {
        const response = await fetch(
          `${url}/api/college-infos/${id}?populate=*`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch college information");
        }
        const data = await response.json();
        setCollegeInfo(data.data); 
      } catch (error) {
        console.error("Error fetching college information:", error);
      }
    };
    fetchCollegeInfo();
  }, [url, id]);

  if (!collegeInfo) {
    return <Typography>Loading...</Typography>;
  }

  const { College_Summary } = collegeInfo.attributes;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        {College_Summary ? (
          <Typography sx={{ marginTop: "10px", fontSize: "20px" }}>
            {College_Summary}
          </Typography>
        ) : (
          <Typography variant="body1" color="textSecondary">
            No College information available.
          </Typography>
        )}
      </Box>

      <TrendingNews />
    </Box>
  );
}

export default CollageInfoPage;
