import React from "react";
import { Card, CardContent, Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const AuthReviewCard = () => {
  const profileImage = "path/to/profile-image.jpg";
  const name = "John Doe";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: "430px",
          fontFamily: "Poppins, sans-serif",
          background: "#9EADFF",
          padding: "1rem",
          alignSelf: "center",
          width: "100%",
          color: "#fff",
          borderRadius: "20px",
        }}
      >
        <CardContent
          sx={{
            color: "#rgb(33,3,102)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "0px !important",
          }}
        >
          <Typography variant="body1" sx={{
            backgroundColor: "#rgb(33,3,102)",
          }}>
            Collegecue is a one-stop solution to all your education related
            queries.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Avatar src={profileImage} alt={name} />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "600",
              }}
            >
              {name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AuthReviewCard;
