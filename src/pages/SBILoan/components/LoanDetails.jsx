import React from "react";
import { Box, Typography, useTheme, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LoanDetails = ({
  bankName,
  loanLimit,
  margin,
  processingFee,
  loanSecurity,
  loanRepayment,
}) => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", textAlign: "center", marginTop: "2rem" }}>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 32,
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            {bankName}{" "}
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
            Education Loan{" "}
          </Typography>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 32,
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: 1,
            }}
          >
            Details
          </Typography>
        </Box>
      </Box>
      {[
        { label: "Loan Limit", value: loanLimit },
        { label: "Margin", value: margin },
        { label: "Processing Fee", value: processingFee },
        { label: "Loan Security", value: loanSecurity },
        { label: "Loan Repayment", value: loanRepayment },
      ].map(({ label, value }, index) => (
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#210366", textAlign: "left" }}
            >
              {label} :{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={8} md={10}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.60)",
                wordWrap: "break-word",
                textAlign: "left",
              }}
            >
              {value}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default LoanDetails;
