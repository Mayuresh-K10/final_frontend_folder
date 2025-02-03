import { Box, Container, Typography, Divider } from "@mui/material";
import ViewAllButton from "../Button/ViewAllButton";
import TagsIconButton from "../Button/TagsIconButton";
import TwoIconButton from "../Button/TwoIconButton";
import TagsButton from "../Button/TagsButton";
import { useState } from "react";

function IIMBangaloreGalleryReview() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "1rem 0",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "36px",
              color: "#210366",
              margin: "0.8rem",
              letterSpacing: "0 em",
            }}
          >
            IIM Bangalore Gallery Reviews
          </Typography>
          <ViewAllButton />
        </Container>
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: "0.1rem",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "700",
                lineHeight: "2.75rem",
                color: "#210366",
                marginLeft: "1rem",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Filter By
            </Typography>
            <TagsIconButton buttonName={"Stream"} onclick={handleClick} />
            <TagsIconButton buttonName={"Course Tag"} onclick={handleClick} />
            <TagsIconButton buttonName={"Course"} onclick={handleClick} />
            <TagsIconButton buttonName={"Batch"} onclick={handleClick} />
            <TwoIconButton buttonName={"SORT BY :  "} onclick={handleClick} />
          </Box>
          <Divider />
        </Container>
      </Box>
      <Box
        sx={{
          marginLeft: "1.5rem",
          display: "flex",
          gap: "1rem",
          marginTop: "20px",
          height: `${show ? "0rem" : "fit-content"}`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <TagsButton title={"Management"} num={74} />
      </Box>
    </>
  );
}

export default IIMBangaloreGalleryReview;
