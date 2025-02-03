import React from "react";
import TopPlacesInCanada from "../Cards/TopPlacesInCanadaCard";
import { Box, Typography, Stack, Button } from "@mui/material";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const TopPlaces = ({ TopPlacesData, country }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(6);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setItemsPerPage(1); // Show one card at a time on very small screens
      } else if (window.innerWidth < 600) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + itemsPerPage, TopPlacesData.length - itemsPerPage)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - itemsPerPage, 0));
  };

  const displayedItems = TopPlacesData.slice(activeStep, activeStep + itemsPerPage);

  return (
    <Box sx={{ paddingY: "3.5rem" }}>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "30px",
          color: "#210366",
          marginLeft: "1rem",
          textTransform: "capitalize",
          textAlign: { xs: "center", sm: "left" }, // Center text on mobile
        }}
      >
        Top places to study in {country}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
          width: "100%",
          marginTop: "20px",
          gap: { xs: "10px", sm: "0px" }, // Add spacing between buttons and content on mobile
        }}
      >
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            minWidth: "auto",
            padding: "0",
            display: "inline-flex", // Hide on mobile
            visibility: activeStep === 0 ? "hidden" : "visible", // Hide button when at the start
          }}
        >
          <AiFillLeftCircle size={32} />
        </Button>
        <Stack
          spacing={2}
          direction="row"
          flexWrap="nowrap"
          justifyContent="center"
          alignItems="center"
          sx={{
            maxWidth: { xs: "90%", sm: "100%" },
            overflowX: { xs: "auto", sm: "hidden" }, // Enable horizontal scroll on mobile
            paddingX: { xs: 2, sm: 0 },
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for a cleaner look
          }}
        >
          {displayedItems.map((item, id) => (
            <TopPlacesInCanada key={id} props={item} country={country} />
          ))}
        </Stack>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep + itemsPerPage >= TopPlacesData.length}
          sx={{
            minWidth: "auto",
            padding: "0",
            display:  "inline-flex" , // Hide on mobile
            visibility: activeStep + itemsPerPage >= TopPlacesData.length ? "hidden" : "visible", // Hide button at the end
          }}
        >
          <AiFillRightCircle size={32} />
        </Button>
      </Box>
    </Box>
  );
};

export default TopPlaces;
