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
  createData("FRS", "100"),
  createData("Research", "91.05"),
  createData("Employbility", "100"),
  createData("Faculty Quality", "100"),
  createData("Inclusiveness and Diversity", "87.6"),
  createData("Overall", "96.97"),
];

const OutlookIimTable = () => {
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
      {" "}
      <TableContainer component={Paper}>
        <Table
          sx={{
            width: 995,
            height: 445,
            background: "white",
            borderRadius: 28,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: 563,
                  height: 51,
                  background: "#7B90FF",
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Ranking Parameter
              </TableCell>
              <TableCell
                sx={{
                  width: 330,
                  height: 51,
                  background: "#210366",
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Outlook I-Care Score&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    textAlign: "center",
                    color: "#210366",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  {row.rank}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    color: "#210366",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    wordWrap: "break-word",
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

export default OutlookIimTable;
