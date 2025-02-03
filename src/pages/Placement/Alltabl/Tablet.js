import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

function createData(calories, fat, abc) {
  return { calories, fat, abc };
}

const rows = [
  createData("Number of Companies Participated", 164, "137+"),
  createData("Students Opted Out", "-", 12),
  createData("Number of Offers", 606, 662),
  createData("Number of PPOs Offered", 291, 273),
  // Add more rows as needed
];

export default function Tablet() {
  return (
    <Box
      sx={{
        marginTop: "20px",
        borderRadius: "2px",
        background: "#EEECFE",
      }}
    >
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  background: "#7B90FF",
                  height: "48px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#EEECFE",
                  }}
                >
                  Batch
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  background: "#210366",
                  height: "48px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#EEECFE",
                  }}
                >
                  Placement Statistics (2021-23)
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  background: "#210366",
                  height: "48px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#EEECFE",
                  }}
                >
                  Placement Statistics (2021-22)
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#210366",
                  }}
                >
                  {row.calories}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#210366",
                  }}
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#210366",
                  }}
                >
                  {row.abc}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
