import React, { useState, useEffect } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import TrendingNews from "../../TrendingNews/TrendingNews";
import { useParams } from "react-router-dom";

function InfoPage() {
  const { id } = useParams();
  const [collegeInfo, setCollegeInfo] = useState(null);
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  useEffect(() => {
    const fetchCollegeInfo = async () => {
      try {
        const response = await fetch(`${url}/api/institute-infos/${id}?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch college information");
        }
        const data = await response.json();
        setCollegeInfo(data.data); // Assuming response structure is { data: { ... } }
      } catch (error) {
        console.error("Error fetching college information:", error);
      }
    };
    fetchCollegeInfo();
  }, [url, id]);

  if (!collegeInfo || !collegeInfo.attributes) {
    return <Typography>Loading...</Typography>;
  }

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
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
        <Box sx={{display:'flex',alignItems:'center', justifyItems:'flex-start',gap:'2rem'}}>
          <Avatar src={`${url}${collegeInfo.attributes?.Institute_Logo?.data?.attributes?.url}`} sx={{width:'100px',height:'100px', objectFit:'cover'}}>
          </Avatar>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>
              {collegeInfo.attributes?.Institute_Name}
            </Typography>
            {collegeInfo.attributes?.Institute_Centres?.map((centre, index) => (
              <Typography key={index}>
                {centre}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", '@media(max-width:770px)': { flexDirection: 'column', paddingLeft: '20px' } }}>
          <Typography sx={{ marginTop: "28px", marginLeft: "10px", marginRight: '20px', '@media(max-width:770px)': { marginLeft: '0' } }}>
            Courses:
          </Typography>
          <Stack direction="row"
            alignItems="center"
            sx={{
              gap: "10px",
              width: "100%",
              height: "auto",
              overflowY: "scroll",
              bgcolor: "white",
              marginY: "1rem"
            }}>
            {collegeInfo.attributes?.Institute_Courses?.map((course, index) => (
              <Typography
                key={index}
                role="button"
                title={course["Course Name"]}
                sx={{ border: "1px solid black", borderRadius: "5px", padding: "8px" }}
              >
                {course["Course Name"]}
              </Typography>
            ))}
          </Stack>
        </Box>
        <Box sx={{ display: "flex", '@media(max-width:770px)': { flexDirection: 'column', paddingLeft: '20px' } }}>
          <Typography sx={{ marginTop: "28px", marginLeft: "10px", marginRight: '20px', '@media(max-width:770px)': { marginLeft: '0' } }}>
           Program Type:
          </Typography>
          <Stack direction="row"
            alignItems="center"
            sx={{
              gap: "10px",
              width: "100%",
              height: "auto",
              overflowY: "scroll",
              bgcolor: "white",
              marginY: "1rem"
            }}>
            {collegeInfo.attributes?.Institute_Courses?.map((course, index) => (
              <Typography
                key={index}
                role="button"
                title={course["Program Type"]}
                sx={{ border: "1px solid black", borderRadius: "5px", padding: "8px" }}
              >
                {course["Program Type"]}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>
      <TrendingNews />
    </Box>
  );
}

export default InfoPage;
