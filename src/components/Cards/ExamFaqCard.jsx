import { Divider, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ExamFaq = (props) => {
  return (
    <>
      

      <Box
        sx={{
          marginLeft: "22px",
          marginTop: "25px",
          width: "523px",
          height: "0px",
        }}
      >
        <Typography
          sx={{
            width: "58px",
            height: "0px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "0px",
            color: "#210366",
          }}
        >
          Ques.
        </Typography>

        <Typography
          sx={{
            marginLeft: "60px",
            width: "790px",
            height: "0px",
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "0px",
            color: "#210366",
          }}
        >
          {props.ques}
        </Typography>
      </Box>

      <AddIcon
        sx={{
          color: "#210366",
          // position: "absolute",
          marginLeft: "61rem",
        }}
      />

      <Typography
        sx={{
          // position: "absolute",
          marginLeft: "22px",
          marginTop: "0.5rem",
          width: "440px",
          height: "0px",
          fontStyle: "normal",
          fontSize: "20px",
          lineHeight: "0px",
          // display: "flex",
          // alignItems: "center",
          color: "#210366",
        }}
      >
        {props.ans}
      </Typography>

      <Divider
        sx={{
          marginTop: "20px",
          border: "2px solid rgba(123, 144, 255, 0.15)",
        }}
      ></Divider>
    </>
  );
};

export default ExamFaq;