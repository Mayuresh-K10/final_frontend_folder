import { Box, Container, Typography } from "@mui/material";
import RatingBox from "./RatingBox";
function Rating() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "195px",
        top: "4542px",
        left: "222px",
        borderRadius: "28px",
        boxShadow: "0px 4px 40px 0px #7B90FF1A",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "90px",
          letterSpacing: "0em",
          color: "#210366",
          textAlign: "center",
        }}
      >
        How likely are you to recommend Collegecue.com to a friend or a
        colleague?
      </Typography>

      <Container>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            marginBottom: "",
            "@media (max-width:600px)": {
              flexDirection: "column",
            },
          }}
        >
          <RatingBox>1</RatingBox>
          <RatingBox>2</RatingBox>
          <RatingBox>3</RatingBox>
          <RatingBox>4</RatingBox>
          <RatingBox>5</RatingBox>
          <RatingBox>6</RatingBox>
          <RatingBox>7</RatingBox>
          <RatingBox>8</RatingBox>
          <RatingBox>9</RatingBox>
          <RatingBox>10</RatingBox>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "14pxa",
            fontWeight: "500",
            lineHeight: "17px",
            letterSpacing: " 0em",
            textAlign: "center",
          }}
        >
          Not so likely
        </Typography>
        <Typography
          sx={{
            fontSize: "14pxa",
            fontWeight: "500",
            lineHeight: "17px",
            letterSpacing: " 0em",
            textAlign: "center",
          }}
        >
          Highly likely
        </Typography>
      </Box>
    </Box>
  );
}

export default Rating;
