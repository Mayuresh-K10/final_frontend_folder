import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import HeadText from "../../../components/Headings/HeadText";
import { CollegeCompareCard, CollegeCompareCard2 } from "./CollegeCompareCard";
import VsCard from "./VsCard";
import { CompareModal } from "../../../components/Modal/MultiModal";

function CollegeCompare({ collegeInfo }) {
  const [openCompare, setOpenCompare] = useState(false);

  const handleOpenCompareModal = () => {
    setOpenCompare(true); // Set the selected row index
  };

  const handleCloseCompreModal = () => {
    setOpenCompare(false); // Reset the selected row index
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          background: "#FFFFFF",
          borderRadius: "2rem",
        }}
      >
        <HeadText headText={"College Compare"} />
        <Box
          display="flex"
          mx=""
          my="1rem"
          sx={{
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CollegeCompareCard collegeInfo={collegeInfo}  />
          <VsCard />
          <CollegeCompareCard2 />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF7900",
              color: "white",
              margin: "10px",
              "&:hover": {
                backgroundColor: "#FF6000", 
              },
            }}
            onClick={() => handleOpenCompareModal()}
          >
            Compare Now
          </Button>
          <CompareModal
            open={openCompare} 
            handleClose={handleCloseCompreModal}
          />
        </Box>
      </Container>
    </>
  );
}

export default CollegeCompare;
