import { Box, Container, Typography } from "@mui/material";
import IIMBangaloreReviewData from "./IIMBangaloreReviewData";
import Review from "./Review";

function IIMBangaloreReviews() {
  return (
    <Box
      sx={{
        borderRadius: "28px",
        minHeight: "fit-content",
        width: "100%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        flexDirection: "column",
        margin: "1rem 0",
        paddingY: "1rem",
      }}
    >
      <Container>
        <Typography
          sx={{
            marginTop: "24.5px",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "36px",
            color: "#210366",
            letterSpacing: "0em",
            gap: "0.8rem",
          }}
        >
          74 Reviews Found??
        </Typography>
        <IIMBangaloreReviewData />
        <Review />
      </Container>
    </Box>
  );
}

export default IIMBangaloreReviews;
