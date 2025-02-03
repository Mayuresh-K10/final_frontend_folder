import React, { useCallback, useEffect, useState, useRef } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import Card from "./Card";
import axios from "axios";

const AllReviewCards = ({ selectedFilters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [course, setCourse] = useState([]);
  const [totalCourse, setTotalCourse] = useState(1);
  const [allCourseData, setAllCourseData] = useState([]);
  const [filteredDataEmpty, setFilteredDataEmpty] = useState(false);
  const cardsPerPage = 10;
  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;
  const containerRef = useRef(null);

  const cleanText = (text) => {
    return text ? text.replace(/�/g, "") : ""; // Return an empty string if text is null or undefined
  };

  const fetchAllCourseData = useCallback(async () => {
    try {
      let page = 1;
      let totalPages = 1;
      let allData = [];
      while (page <= totalPages) {
        const response = await axios.get(`${url}/api/course-finders`, {
          params: {
            "pagination[page]": page,
            "pagination[pageSize]": 100,
            "populate[Entrance_Exam][populate]*":
              "exam_details.Exam_category.Exam_category",
            "populate[Course_Name]": "*",
          },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = response.data;
        // console.log("couse",data)
        if (data && data.data) {
          allData = [...allData, ...data.data];
          totalPages = data.meta.pagination.pageCount;
        } else {
          console.error("Unexpected response format:", data);
          break;
        }

        page += 1;
      }

      setAllCourseData(allData);
      setTotalCourse(allData.length);
    } catch (error) {
      console.error("Error fetching Course Data:", error);
    }
  }, [authToken, url]);

  useEffect(() => {
    fetchAllCourseData();
  }, [fetchAllCourseData]);

  const filterData = useCallback(() => {
    let filteredData = allCourseData;

    for (const key in selectedFilters) {
      if (selectedFilters[key] && selectedFilters[key].length > 0) {
        filteredData = filteredData.filter((item) => {
          const attributes = item.attributes || {};
          const entranceExam = attributes.Entrance_Exam?.data?.attributes || {};
          const examDetails =
            entranceExam.exam_details?.data?.[0]?.attributes || {};
          const examCategory =
            examDetails.Exam_category?.data?.attributes?.Exam_category;
          const courseDuration = attributes.Course_Duration || "";
          const programtype = attributes.Program_Type || "";
          const courselevel = attributes.Course_Level || ";";

          switch (key) {
            case "Course Level":
              return selectedFilters[key].includes(courselevel);
            case "Program Type":
              return selectedFilters[key].includes(programtype);
            case "Exam category":
              if (examCategory) {
                return selectedFilters[key].includes(examCategory);
              }
              return false;
            case "Course Duration":
              return selectedFilters[key].includes(courseDuration);
            default:
              return true;
          }
        });
      }
    }

    setCourse(
      filteredData.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
      )
    );
    setTotalCourse(filteredData.length);
    setFilteredDataEmpty(filteredData.length === 0);
  }, [allCourseData, selectedFilters, currentPage, cardsPerPage]);

  useEffect(() => {
    filterData();
  }, [filterData, selectedFilters]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage, selectedFilters]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        gap: "1.3rem",
        marginY: "2rem",
      }}
      ref={containerRef}
    >
      {filteredDataEmpty ? (
        <Typography variant="h6" align="center">
          No courses found matching the selected filters.
        </Typography>
      ) : (
        course.map((item, index) => {
          const attributes = item.attributes || {};
          const entranceExam = attributes.Entrance_Exam?.data?.attributes || {};
          const examDetails =
            entranceExam.exam_details?.data[0]?.attributes || {};
          const examCategory =
            examDetails.Exam_category?.data?.attributes?.Exam_category || "";
          const courseName = attributes.Course_Name?.data?.attributes || {};

          return (
            <React.Fragment key={index}>
              <Card
                id={item.id}
                courseDuration={attributes.Course_Duration}
                courseType={attributes.Course_Type}
                courseLevel={attributes.Course_Level}
                programType={attributes.Program_Type}
                courseEligibility={attributes.Course_Eligibility}
                courseDetail={cleanText(attributes.Course_Detail ?? "")}
                popularJobRoles={attributes.Popular_Job_Roles}
                entranceExamName={entranceExam.Exam_Name}
                entranceExamFullForm={examDetails.full_form}
                entranceExamMode={examDetails.Mode_of_exam}
                entranceExamDetailText={examDetails.detail_text}
                examCategory={examCategory}
                courseName={courseName.Course_Name}
              />

              {(index + 1) % 5 === 0 && index + 1 !== course.length && (
                <Box
                  sx={{
                    textAlign: "center",
                    height: "70px",
                    marginY: "10px",
                  }}
                >
                </Box>
              )}
            </React.Fragment>
          );
        })
      )}

      <Pagination
        count={Math.ceil(totalCourse / cardsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", margin: "4rem" }}
      />
    </Box>
  );
};

export default AllReviewCards;
