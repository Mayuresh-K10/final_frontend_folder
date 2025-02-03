import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const Expenses = ({ expenses, courses }) => {
  return (
    <Box sx={{ marginY: "1rem" }}>
      <Stack
        sx={{
          color: "#FF7900",
          fontSize: 30,
          fontWeight: "500",
          wordWrap: "break-word",
          marginY: 3,
        }}
      >
        Expenses covered under {expenses.bankName} Student Loan Scheme
      </Stack>

      <Stack
        spacing={2}
        sx={{
          display: "flex",
        }}
        direction={{ xs: "column", sm: "row" }}
      >
        <Stack
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: 3,
            display: "flex",
            color: "black",
            fontSize: 18,
            fontWeight: "500",
            lineHeight: 2,
            wordWrap: "break-word",
            // display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {expenses.expenses.map((item, index) => (
            <Typography variant="inherit" key={index}>
               {'\u25CF'} {item}
            </Typography>
          ))}
        </Stack>
        <Card
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: 3,
            background: "#E8E8E8",
            borderRadius: 4,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "rgba(21.57, 0, 72.46, 0.60)",
              fontSize: 28,
              fontWeight: "500",
              textWrap: "wrap",
            }}
          >
            Courses Covered Under {expenses.bankName} Student Loan Scheme <br />
            In India
          </Typography>
          <Stack
            sx={{
              color: "black",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 1.3,
              wordWrap: "break-word",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
            }}
          >
            {courses.map((course, index) => (
              <Typography variant="inherit" key={index}>
                {course}
              </Typography>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
};

export default Expenses;
