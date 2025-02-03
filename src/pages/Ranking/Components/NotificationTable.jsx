import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
function createData(rank, year, ranked) {
  return { rank, year, ranked };
}

const rows = [
  createData("NIRF", "2022", "2 out of 100"),
  createData("IIRF", "2023", "2"),
  createData("QS Masters in Management(MiM)", "2023", "37"),
  createData("FT Global MBA(EPGP)", "2023", "52"),
  createData("FT Executive Education Custom Ranking", "2022", "43"),
  createData("FT Executive Education,Open Category", "2023", "60"),
  createData("FT Ranking Executive Education", "2023", "45"),
  createData("FT EMBA Ranking", "2023", "86"),
  createData("Q S World Top University Ranking", "2022", "50"),
  createData(" ", "2022", "2"),
  createData("Outlook I CARE", " ", " "),
  createData("", "2021", "2 out of 100"),
  createData("Eduniversal Ranking(Central Asia)", "2022", "1"),
  createData("Bloomberg Best B-Schools India Rankings", "", ""),
  createData("", "2022", "1"),
  createData("Business Today Best B-Schools", "2021", "2"),
  createData("", "2022", "46"),
  createData("QS Global EMBA Ranking", "", ""),
  createData("", "2021", "36 out of 100"),
  createData("QS Global MBA Ranking", "2021", "35 out of 150"),
  createData("Financial Times Global MBA Ranking", "2021", "35 out of 150"),
  createData("Economic Times B-School Ranking", "2021", "3 out of 50"),
  createData("Business Today", "2021", "3"),
];

const NotificationTable = () => {
  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    width: 431,
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
                  Ranking Agency
                </TableCell>
                <TableCell
                  sx={{
                    width: 188,
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
                  Year
                </TableCell>
                <TableCell
                  sx={{
                    width: 274.5,
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
                  Ranked At
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
                    {row.year}
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
                    {row.ranked}
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

export default NotificationTable;
