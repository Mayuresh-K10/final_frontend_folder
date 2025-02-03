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
  createData("Paytm", 9),
  createData("Cogoport", 8),
  createData("Jio Platform", 7),
  createData("Lodha Group", 5),
  createData("American Express", 5),
  createData("Brillio", 4),
  createData("Zomato", 4),
  createData("Accenture", 4),
];

export default function Abcd() {
  return (
    <Container>
      <Box
        sx={{
          width: "1056px",
          gap: "22px",
          marginTop: "40px",
        }}
      >
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
          The following table represents the company wise Pre-placement offers
          for the batch 2023 at IIM Bangalore:
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            width: "1056.000244140625px",
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
                    Number of Offers
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
