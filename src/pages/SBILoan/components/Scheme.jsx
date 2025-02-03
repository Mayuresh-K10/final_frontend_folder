import React, { useState } from "react";
import { Box, Typography, Card, Button } from "@mui/material";

const Scheme = ({ schemes }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedSchemes = showAll ? schemes : schemes.slice(0, 2);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <Box sx={{ maxWidth: "100%", padding: "0 1rem" }}>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Typography
            sx={{
              color: "#210366",
              fontSize: 32,
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Interest{" "}
          </Typography>
          <Typography
            sx={{
              color: "#FF7900",
              fontSize: 32,
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: 2,
            }}
          >
            {" "}
            Subsidy Schemes{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 4,
            gap: "1rem",
          }}
        >
          {displayedSchemes.map((scheme, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", sm: "48%", md: "31%", lg: "31%" },
                background: "white",
                boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
                borderRadius: 4,
                textAlign: "center",
                padding: "10px",
                border: "2px solid black",
                height: "200px",
                // width: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#FF7900",
                  fontSize: 20,
                  fontWeight: "500",
                  wordWrap: "break-word",
                  textAlign: "center",
                }}
              >
                {scheme.title}
              </Typography>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontWeight: "500",
                  textAlign: "center",
                  wordWrap: "break-word",
                }}
              >
                {scheme.description}
              </Typography>
            </Card>
          ))}
        </Box>
        {!showAll && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            <Button
              onClick={handleShowMore}
              sx={{
                color: "#FF7900",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Show More
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Scheme;
