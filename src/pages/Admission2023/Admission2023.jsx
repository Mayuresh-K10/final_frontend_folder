import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Grid, Pagination, Box } from "@mui/material";
import Card from "./Card";
import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection";
import RadioGroup from "../../components/RadioGroupRating";
import backgroundphoto from "./Images/home18-bg2.jpg";
import axios from "axios";

const Admission2023 = React.memo(() => {
  console.log("admission 2023");

  const [admissionData, setAdmissionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 16;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const containerRef = useRef(null);

  const getAdmissionData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${url}/api/admissions?pagination[page]=${currentPage}&pagination[pageSize]=${cardsPerPage}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;
      // console.log("admission",data)
      if (data) {
        setAdmissionData(data.data);
        setTotalPages(data.meta.pagination.pageCount);
        if (containerRef.current) {
          containerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error fetching Predictor Cards Data:", error);
    }
  }, [authToken, url, currentPage]);

  useEffect(() => {
    getAdmissionData();
  }, [getAdmissionData]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Learn about admission processes, requirements, deadlines, and tips for applying to universities and colleges."
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-3919517798801147"
        ></meta>
      </Helmet>
      <HeroSection />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: "2rem",
            alignItems: "center",
            marginY: "5rem",
            paddingTop: "1rem",
            paddingBottom: "2rem",
            backgroundImage: `url(${backgroundphoto})`,
            paddingX: "1rem",
          }}
        >
          {admissionData.map((val, index) => (
            <Grid key={index}>
              <Card
                id={val.id}
                imag={`${url}${val.attributes.image.data[0].attributes.formats.thumbnail.url}`}
                course={val.attributes.courses.replace(", , |,", ", ")}
                datee={val.attributes.date}
                data={val.attributes.college_name.replace(" 2023", " 2024")}
                name={
                  val.attributes.college_name
                    .replace(" 2023", " 2024")
                    .split(" 2024" || ":")[0]
                }
              />
            </Grid>
          ))}
        </Box>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        />
        <RadioGroup />
      </Container>
    </>
  );
});

export { Admission2023 };
