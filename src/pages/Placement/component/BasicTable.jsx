import {
  Box,
  
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import img1 from "./img1.svg";

const BasicTable = ({ placementsData }) => {
  return (
    <>
      <Box>
        {placementsData.map((batch, index) => (
          <Box key={index}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Placement Information Till {batch.batchName}
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#FFBB80" }}>
                    <TableCell>Category</TableCell>
                    {batch.placementStatistics.map((stats, statsIndex) => (
                      <TableCell key={statsIndex}>{stats.year}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {batch.placementStatistics[0].statistics.map(
                    (stat, statIndex) => (
                      <TableRow
                        key={statIndex}
                        sx={{
                          backgroundColor:
                            statIndex % 2 === 0 ? "#f0f0f0" : "white",
                        }}
                      >
                        <TableCell>{stat.category}</TableCell>
                        {batch.placementStatistics.map((stats, statsIndex) => (
                          <TableCell key={statsIndex}>
                            {stats.statistics[statIndex].value}
                          </TableCell>
                        ))}
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1015px",
          height: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "26px",
          marginTop: "40px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "26px",
            letterSpacing: "0em",
          }}
        >
          <span style={{ color: "#FF7900" }}>Check</span>{" "}
          <span style={{ color: "#210366" }}>University Placements</span>
        </Typography>
        <Box
          sx={{
            marginTop: "5px",
          }}
        >
          <img
            src={img1}
            alt=""
            style={{
              width: "100%",
              maxWidth: "70%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BasicTable;
