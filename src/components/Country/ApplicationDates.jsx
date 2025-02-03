import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import HeadText from "../Headings/HeadText";

const ApplicationDates = ({ ApplicationDatesData }) => {
  return (
    <Box sx={{paddingY:"3.5rem"}}>
      <HeadText headText={`Application Dates`} style={{margin:5}}/>
      <TableContainer component={Paper} sx={{mt:"5"}}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow
              sx={{
                background: "linear-gradient(45deg, #f7edf8 30%, #fef1e8 90%)",
              }}
            >
              <TableCell align="center">University</TableCell>
              <TableCell align="center">Events</TableCell>
              <TableCell align="center">Application Start Date</TableCell>
              <TableCell align="center">Application End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ApplicationDatesData.map((value, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <Box sx={{ display: "flex", flexDirection: "row",alignItems:"center" }}>
                    <Box>
                      <img
                        src={value.img}
                        alt=""
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    {value.university}
                  </Box>
                </TableCell>
                <TableCell>{value.events}</TableCell>
                <TableCell>{value.start}</TableCell>
                <TableCell>{value.end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ApplicationDates;
