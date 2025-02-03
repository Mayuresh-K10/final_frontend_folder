import React from "react";
import ChooseCourseByInterest from "./ChooseCourseByInterest";
import ChooseCourseByLevel from "./ChooseCourseByLevel";
import { Box, Divider } from "@mui/material";
import TopSearch from "./TopSearch";

import { Helmet } from "react-helmet";

const ChooseCourses = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Discover top courses in various fields such as engineering, medicine, business, arts, and sciences offered by renowned universities." />
        <meta name="google-adsense-account" content="ca-pub-3919517798801147"></meta>
      </Helmet>
      <Box >
        <TopSearch />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          
          }}
        >
          <ChooseCourseByInterest />
          <Divider variant="horizontal" sx={{
            width: "100%",
          }} />
          <ChooseCourseByLevel />
        </Box>
      </Box>
    </>
  );
};

export {ChooseCourses};
