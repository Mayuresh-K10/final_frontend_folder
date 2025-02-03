import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import { Box, Button } from "@mui/material";
import { RegisterModal } from "../../../../components/Modal/MultiModal";

export default function AllScholarshipCard() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  let data = [
    {
      heading: "SEE SCHOLARSHIPS BY TYPE",
      heading1: "MERIT-BASED SCHOLARSHIP",
      heading2: "COLLEGE-SPECIFIC SCHOLARSHIP",
      heading3: "TUITION-FEE-WAIVER SCHOLARSHIP",
      heading4: "NEED-BASED SCHOLARSHIP",
      heading5: "AWARDS SCHOLARSHIP",
    },
    {
      heading: "COUNTRY WISE SCHOLARSHIPS",
      heading1: "Scholarships in UK",
      heading2: "Scholarships in CANADA",
      heading3: "Scholarships in AUSTRALIA",
      heading4: "Scholarships in USA",
      heading5: "Scholarships in NETHERLANDS",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
      {data.map(
        (
          { heading, heading1, heading2, heading3, heading4, heading5 },
          index
        ) => (
          <ScholarshipCard
            heading={heading}
            heading1={heading1}
            heading2={heading2}
            heading3={heading3}
            heading4={heading4}
            heading5={heading5}
            key={index}
            sx={{
              marginBottom: "1rem",
            }}
          />
        )
      )}
      <Button
        variant="contained"
        sx={{
          height: "50px",
          borderRadius: "25px",
          backgroundColor: "#1976D2",
          textTransform: "uppercase",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "rgb(22,0,72)",
          },
          "@media (max-width:600px)": {
            marginLeft: "-12rem",
          },
        }}
        onClick={handleOpen}
      >
        Apply Now
      </Button>
      <RegisterModal open={open} handleClose={handleClose} />
    </Box>
  );
}
