import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
function createData(
  rank, score
) {
  return { rank, score };
}

const rows = [
  createData('PP', '138.85'),
  createData('TLRP', '136.56'),
  createData('Research(RS)', '118.85'),
  createData('Industry Income and Intergration(III)', '132.75'),
  createData('Placement Strategies and Support(PSS)', '133.28'),
  createData('Future Orientation', '134.54'),
  createData('External Perception and International Outlook', '136.85'),
  createData('Overall Index Score (out of 1000)', '927.85'),
];

const IirfTable = () => {
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
      <div> <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{
                width: 575,
                height: 20,
                background: "#7B90FF",
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}>Ranking Parameter</TableCell>
              <TableCell sx={{
                width: 316,
                height: 20,
                background: "#210366",
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}>NIRF Score&nbsp;(Out of 100)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}>
                  {row.rank}
                </TableCell>
                <TableCell sx={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }} >{row.score}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></div>
    </Box>
  )
}

export default IirfTable