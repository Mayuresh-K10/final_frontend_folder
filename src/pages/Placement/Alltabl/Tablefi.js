import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Stack, Typography } from "@mui/material";

function createData(calories, fat, abc, def) {
  return { calories, fat, abc, def };
}

const rows = [
  createData(
    "Microsoft",
    "INR 35-40 LPA",
    "Management Consulting/ Consulting Analyst",
    12
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
  createData(
    "Accenture",
    "INR 32-33 LPA",
    "Management Consulting/ Consulting Analyst",
    41
  ),
];

export default function Tablefi() {
  return (
    <Container>
      <Box
        sx={{
          width: "1011px",
          height: "581px",
          gap: "22px",
          marginTop: "40px",
          borderRadius: "28px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
          }}
        >
          IIM Bangalore Consulting Sector Placements
        </Typography>
        <Typography
          sx={{
            fontFamily: "popins",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            marginTop: "10px",
          }}
        >
          The following table represents the consulting sector placements for
          the batch 2021 at IIM Bangalore:
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            width: "1024px",
            marginTop: "20px",
            background: "#EEECFE",
          }}
        >
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="right"
                  sx={{
                    background: "#7B90FF",
                    width: " 225px",
                    height: "51px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      color: "#EEECFE",
                    }}
                  >
                    Company
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 272px",
                    height: "51px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      color: "#EEECFE",
                    }}
                  >
                    CTC Range
                  </Typography>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 272px",
                    height: "51px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      color: "#EEECFE",
                    }}
                  >
                    Profile Offered
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 251px",
                    height: "51px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      color: "#EEECFE",
                    }}
                  >
                    No. of Offers
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    gap: "20px",
                  }}
                >
                  <TableCell
                    align="right"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "22px",
                      letterSpacing: "0em",
                      color: "#210366",
                    }}
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "22px",
                      letterSpacing: "0em",
                      color: "#210366",
                    }}
                  >
                    {row.fat}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "22px",
                      letterSpacing: "0em",
                      color: "#210366",
                    }}
                  >
                    {row.abc}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "22px",
                      letterSpacing: "0em",
                      color: "#210366",
                    }}
                  >
                    {row.def}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
