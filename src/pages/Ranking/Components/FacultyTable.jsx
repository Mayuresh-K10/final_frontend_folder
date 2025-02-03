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
  createData("Faculty with doctorates (%)", "100"),
  createData("FT Research Rank", "94"),
];

const FacultyTable = () => {
  return (
    <Box
    sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        // boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
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
            height: 243,
            background: "white",
            // boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
            borderRadius: 28,
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                width: 893,
                height: 51,
                background: "#7B90FF",
                border: "0.50px #7B90FF solid",
              }}
            >
              <TableCell
                   colSpan={2}
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                      wordWrap: "break-word",
                }}
              >
                Faculty Expertise
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

export default FacultyTable;
