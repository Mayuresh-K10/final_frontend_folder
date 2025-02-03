import React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Typography, Box, Container, TableContainer } from "@mui/material";
import FilterButton from "./FilterButton";
import Faq from "./Faq";
import {
  Categoryrows,
  Info,
  CATCutoffs,
  Round,
  Categoryy,
  Type,
  Programs,
  Exam,
  rankingrows,
  Information,
  FInalCutoffrows,
  Processrows,
} from "../Data";
function SimpleTable() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0px ",
        paddingTop: "2rem !important",
        Width: "800px",
      }}
    >
      <Box
        sx={{
          fontStyle: "normal",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#000080",
            fontWeight: "bold",
            fontSize: "1.2rem",
            paddingTop: "1rem",
          }}
        >
          Popular colleges compared with IIM Bangalore
        </Typography>

        <TableContainer>
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              margin: "1rem 1rem 1rem 1rem",
              padding: "1rem 1rem 1rem 1rem",
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
                    }}
                  >
                    Category
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
                    Overall
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
                    VARC
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
                    DILR
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
                    QA
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Categoryrows.map((Categoryrow) => (
                  <TableRow
                    key={Categoryrow.category}
                    sx={{ backgroundColor: "#EEECFE" }}
                  >
                    <TableCell
                      align="center"
                      sx={{ color: "#000080", fontWeight: 700 }}
                    >
                      {Categoryrow.category}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#000080",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      {Categoryrow.overall}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#000080",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      {Categoryrow.varc}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#000080",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      {Categoryrow.dilr}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#000080",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      {Categoryrow.qa}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>
      </Box>
      <Container>
        <Box
          sx={{
            overflow: "hidden",
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              IIM Bangalore Cutoff 2023: How to check CAT 2022 scores?
            </Typography>
            <Box sx={{ display: "flex", gap: 6 }}>
              {Information.map((Informations, index) => {
                return (
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontSize: "0.875rem",
                      fontWeight: 400,
                    }}
                    key={index}
                  >
                    {Informations}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            fontStyle: "normal",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "0.9rem",

            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TableContainer>
            <Box
              sx={{
                display: "flex",
                overflow: "hidden",
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
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Steps
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "#210366",
                        color: "white",
                        fontWeight: 800,
                      }}
                    >
                      Process
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Processrows.map((Processrow) => (
                    <TableRow
                      key={Processrow.category}
                      sx={{
                        backgroundColor: "#EEECFE",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <TableCell
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {Processrow.steps}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {Processrow.process}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 600,
              }}
            >
              IIM Bangalore Cutoff 2023: How to check CAT 2022 scores?
            </Typography>
            <Box sx={{ display: "flex", gap: 6 }}>
              {Information.map((Informations, index) => {
                return (
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      fontStyle: "normal",
                      fontSize: "0.875rem",
                      fontWeight: 400,
                    }}
                    key={index}
                  >
                    {Informations}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontStyle: "normal",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "0.9rem",

            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TableContainer>
            <Box
              sx={{
                display: "flex",
                overflow: "hidden",
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
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      IIMs
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "#210366",
                        color: "white",
                        fontWeight: 800,
                      }}
                    >
                      CAT Cutoffs 2022 Percentile
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {FInalCutoffrows.map((FInalCutoffrow) => (
                    <TableRow
                      key={FInalCutoffrow.category}
                      sx={{
                        backgroundColor: "#EEECFE",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <TableCell
                        align="center"
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {FInalCutoffrow.IIMs}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {FInalCutoffrow.Cutoffs}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            fontStyle: "normal",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "0.9rem",

            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TableContainer>
            <Box
              sx={{
                display: "flex",
                overflow: "hidden",
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
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      IIM Bangalore Placements
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#7B90FF",
                        color: "white",
                        fontWeight: 800,
                      }}
                    >
                      IIM Bangalore Ranking
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rankingrows.map((rankingrow) => (
                    <TableRow
                      key={rankingrow.category}
                      sx={{
                        backgroundColor: "#EEECFE",
                      }}
                    >
                      <TableCell
                        align="center"
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {rankingrow.placement}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {rankingrow.ranking}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
        </Box>
      </Container>
      <Faq />
      <Container>
        <Box
          sx={{
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 600,
              }}
            >
              IIM Bangalore Cutoff 2022
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Exam:
            </Typography>
            {Exam.map((exm, index) => {
              return <FilterButton key={index}>{exm}</FilterButton>;
            })}
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 600,
                paddingTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Programs:
            </Typography>
            {Programs.map((Program, index) => {
              return <FilterButton key={index}>{Program}</FilterButton>;
            })}
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 600,
                paddingTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Type:
            </Typography>
            {Type.map((Types, index) => {
              return <FilterButton key={index}>{Types}</FilterButton>;
            })}
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 600,
                paddingTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Category:
            </Typography>
            {Categoryy.map((Category, index) => {
              return <FilterButton key={index}>{Category}</FilterButton>;
            })}
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 600,
                paddingTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Round:
            </Typography>
            {Round.map((Rounds, index) => {
              return <FilterButton key={index}>{Rounds}</FilterButton>;
            })}
          </Box>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 600,
              }}
            >
              IIM Bangalore, CAT Cutoff 2022
            </Typography>
            <Box sx={{ display: "flex", gap: 6 }}>
              {Info.map((Information, index) => {
                return (
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      fontStyle: "normal",
                      fontSize: "0.875rem",
                      fontWeight: 400,
                    }}
                    key={index}
                  >
                    {Information}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontStyle: "normal",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "0.9rem",

            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TableContainer>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                overflow: "hidden",
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
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Courses
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "#7B90FF",
                        color: "white",
                        fontWeight: 800,
                      }}
                    >
                      2022 Cutoff By Percentile
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#7B90FF",
                        color: "white",
                        fontWeight: 800,
                      }}
                    >
                      2021 Cutoff By Percentile
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {CATCutoffs.map((cutoff) => (
                    <TableRow
                      key={cutoff.category}
                      sx={{ backgroundColor: "#EEECFE" }}
                    >
                      <TableCell
                        align="center"
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {cutoff.Courses}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {cutoff.cutoff2022}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: "#000080",
                          fontWeight: 700,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {cutoff.cutoff2021}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
        </Box>
      </Container>
    </Container>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTable;
