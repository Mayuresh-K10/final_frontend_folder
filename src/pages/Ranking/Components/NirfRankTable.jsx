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
 rank,name,score
)  
{
    return { rank,name,score };
  }
  
  const rows = [
    createData('1','IIM Ahmedabad','83.35'),
    createData('2','IIM Bangalore','82.62'),
    createData('3','IIM Calcutta','78.64'),
    createData('4','IIT Delhi','75.10'),
    createData('5','IIM Kozhikode','74.74'),
    createData('6','IIM Lucknow','74.55'),
    createData('7','IIM Indore','70.66'),
    createData('8','XLRI Jamshedpur','69.67'),
    createData('9','NITIE Mumbai','68.84'),
    createData('10','IIT Madras','66.60'),
  ];

const NirfRankTable = () => {
  return (
    <Box
    sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        marginTop:2,
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
                  }}>Rank</TableCell> 
                  <TableCell sx={{
                    width: 326,
                    height: 51,
                    background: "#210366",
                    textAlign: "center",
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}>Institute Name</TableCell>          
          <TableCell sx={{
                    width: 330,
                    height: 51,
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
                    }} >{row.name}</TableCell>
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

export default NirfRankTable