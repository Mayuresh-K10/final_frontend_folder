import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';

function createData(rank, score) {
  return { rank, score };
}

const rows = [
  createData("Aims achieved(%)", "87"),
  createData("Career progress rank", "7"),
  createData("Career service rank", "59"),
  createData("Employed at three months(%)", "100"),
  createData("Salary percentage increase", "165"),
  createData("Salary today(US$)**", "157514"),
  createData("Weighted Salary (US$)", "157514"),
];

const CareerTable = () => {
  return (
    <Box
    sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        marginTop: 2,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    }}
>
    <div>
      <TableContainer
        component={Paper}
        sx={{ p: 0, width: "100%", margin: "0 auto" }}
      >
        <Table
          sx={{
            width: 995,
            height: 492,
            background: "white",
            borderRadius: 28,
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                height: "50px",
                backgroundColor: "#7B90FF",
                color: "#FFF",
                textAlign: "center",
              }}
            >
              <TableCell
                align="center"
                colSpan={2}
                sx={{
                  border: "1px solid #ddd",
                  width: "100%",
                  fontFamily: "Poppins",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}
              >
                Career Progression
              </TableCell>
            </TableRow>

           
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  sx={{
                    border: "1px solid #ddd",
                    width: 51,
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  {row.rank}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    border: "1px solid #ddd",
                    width: 51,
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  {row.score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </Box>
  );
};

export default CareerTable;
