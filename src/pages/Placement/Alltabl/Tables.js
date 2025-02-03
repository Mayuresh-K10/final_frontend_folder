import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Stack, Typography } from "@mui/material";

function createData(calories, fat, abc, def, ghi) {
  return { calories, fat, abc, def, ghi };
}

const rows = [
  createData(
    "IIM Ahmedabad",
    "INR 1.14 CPA",
    "INR 32.79 LPA",
    "INR 36.2 LPA",
    172
  ),
  createData(
    "IIM Ahmedabad",
    "INR 1.14 CPA",
    "INR 32.79 LPA",
    "INR 36.2 LPA",
    172
  ),
  createData(
    "IIM Ahmedabad",
    "INR 1.14 CPA",
    "INR 32.79 LPA",
    "INR 36.2 LPA",
    172
  ),
  createData(
    "IIM Ahmedabad",
    "INR 1.14 CPA",
    "INR 32.79 LPA",
    "INR 36.2 LPA",
    172
  ),
  createData(
    "IIM Ahmedabad",
    "INR 1.14 CPA",
    "INR 32.79 LPA",
    "INR 36.2 LPA",
    172
  ),
  createData(
    "IIM Ahmedabad",
    "INR 1.14 CPA",
    "INR 32.79 LPA",
    "INR 36.2 LPA",
    172
  ),
  createData(
    "IIM Ahmedabad",
    "INR 1.14 CPA",
    "INR 32.79 LPA",
    "INR 36.2 LPA",
    172
  ),
];

export default function Tables() {
  return (
    <Container>
      <Box
        sx={{
          width: "70%",
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
          IIM Bangalore Placements 2023
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            width: "70%",
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
                    width: " 139px",
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
                    IIMs
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 191px",
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
                    Highest Package
                  </Typography>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 196px",
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
                    Average Package
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 196px",
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
                    Median Package
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 312px",
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
                    Number of Placement Offers
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
                    {row.ghi}
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
