import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Stack,
} from "@mui/material";

const HostelFees = ({ Hostelfees, name }) => {
  const { description, tableData, linkText, linkDestination, image } =
    Hostelfees;

  return (
    <>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          color: "#210366",
          marginY: "1rem",
        }}
      >
        {name} Fee structure
      </Typography>
      <Typography
        sx={{
          fontWeight: "600",
          color: "#210366",
          fontSize: "12px",
          marginY: "1rem",
          "@media (max-width:800px)": {
            paddingTop: "2vh",
            paddingBottom: "2vh",
          },
        }}
      >
        {description}
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "1px solid grey",
        }}
      >
        <Table
          sx={{ minWidth: 650, width: "100%", marginX: "auto" }}
          aria-label="housing costs table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#7B90FF",
                  color: "#EEECFE",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Sample Costs for On-Campus Housing
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  backgroundColor: "#210366",
                  color: "#EEECFE",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Cost
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          marginLeft: "1rem",
          backgroundColor: "transparent",
          borderRadius: "28px",
          width: "100%",
          "@media (max-width:800px)": {
            width: "90%",
            marginLeft: "3.5vw",
          },
        }}
      >
        <Stack
          spacing={1}
          sx={{ padding: "10px", position: "relative", marginTop: "0.5rem" }}
        >
          <Stack direction="row" spacing={1}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "12px",
                color: "#FF7900",
              }}
            >
              {linkText}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "12px",
                color: "#210366",
              }}
            >
              {linkDestination}
            </Typography>
          </Stack>
          <img
            src={image}
            alt="hostel"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: "1rem auto",
              borderRadius: "16px",
            }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default HostelFees;
