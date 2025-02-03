import { Box, Container } from "@mui/material";
import img4 from "./img4.svg";

const Highest = () => {
  return (
    <>
      <Container>
        <img
          src={img4}
          alt="img4.svg"
          style={{ width: "80%",
           height:"78%", 
           alignItems: "center" }}
        />
      </Container>
    </>
  );
};

export default Highest;
