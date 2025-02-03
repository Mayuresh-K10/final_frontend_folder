import React from "react";
import HeadText from "../../components/Headings/HeadText";
import AllRoundeBtn from "./AllRoundeBtn";
import { Container } from "@mui/material";
import AllBlogCard from "./AllBlogCard";

const BlogSection = () => {
  return (
    <>
      <Container sx={{ paddingY: "3.5rem" }}>
        <HeadText headText="Blog Section" />
        <AllRoundeBtn />

        <AllBlogCard />
      </Container>
    </>
  );
};

export default BlogSection;
