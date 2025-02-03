import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Stack, Typography } from "@mui/material";

function createData(calories, fat) {
  return { calories, fat };
}

const rows = [
  createData("Amazon", 584),
  createData("Bain & Company", 22),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
  createData("Accenture", "INR 32-33 LPA"),
];

export default function Graph() {
  return (
    <Container>
      <Box
        sx={{
          width: "1056px",
          height: "813.5px",
          gap: "22px",
          marginTop: "40px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "26px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
          }}
        >
          IIM Bangalore Alumni Network
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            width: "1056.000244140625px",
            height: "765.5px",
            marginTop: "22px",
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
                    width: " 477.807373046875px",
                    height: "51px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      color: "#EEECFE",
                    }}
                  >
                    Name of the Company
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    background: "#210366",
                    width: " 577.807373046875px",
                    height: "51px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      color: "#EEECFE",
                    }}
                  >
                    Number of Employees
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
