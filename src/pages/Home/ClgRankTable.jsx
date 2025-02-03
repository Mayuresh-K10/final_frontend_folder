import React from "react";
import { Box, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import img1 from "../../Assets/agency1.webp";
import img2 from "../../Assets/agency2.webp";
import img3 from "../../Assets/agency3.webp";
import img4 from "../../Assets/agency4.webp";
import img5 from "../../Assets/agency5.webp";
import img6 from "../../Assets/agency6.webp";
import { Image } from "../../utils/Image";
function Category(college, ranking, stream, image) {
  return { college, ranking, stream, image };
}
const Categoryrows = [
  Category(
    "IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee",
    "1 out of 200",
    "overall",
    img1
  ),
  Category(
    "School of Planning and Architecture - [SPA], New Delhi",
    "1 out of 200",
    "overall",
    img2
  ),
  Category(
    "School of Planning and Architecture - [SPAV], Vijayawada",
    "1 out of 200",
    "overall",
    img3
  ),
  Category(
    "Sir JJ College of Architecture - [SJJCA], Mumbai",
    "1 out of 200",
    "overall",
    img4
  ),
  Category(
    "Jamia Millia Islamia University-[JMI], New Delhi",
    "1 out of 200",
    "overall",
    img5
  ),
  Category(
    "School of Planning and Architecture - [SPA], Bhopal",
    "1 out of 200",
    "overall",
    img6
  ),
];

export const ClgRankTable = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TableContainer
          sx={{
            borderRadius: "10px",
            border: "1px solid #ccc",
            boxShadow: "none",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#7B90FF",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1rem",
                    borderRight: "1px solid white",
                  }}
                >
                  College
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1rem",
                    backgroundColor: "#210366",
                    borderRight: "1px solid white",
                  }}
                >
                  Ranking
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1rem",
                    backgroundColor: "#210366",
                  }}
                >
                  Stream
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Categoryrows.map((Categoryrow, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#EEECFE" : "#FFFFFF",
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      color: "#000080",
                      fontWeight: 700,
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "2rem",
                    }}
                  >
                    <Image
                      src={Categoryrow.image}
                      alt="college"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    {Categoryrow.college}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#000080", fontWeight: 700, fontSize: "1rem" }}
                  >
                    {Categoryrow.ranking}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "#000080", fontWeight: 700, fontSize: "1rem" }}
                  >
                    {Categoryrow.stream}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
