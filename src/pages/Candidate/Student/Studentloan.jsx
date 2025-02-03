import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card, Typography, TextField,
} from "@mui/material";

import { RegisterModal, BackModal } from "../../../components/Modal/MultiModal";

const Studentloan = () => {

  const [bankDetails, setBankDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const banksPerPage = 10;
  const modalRef = useRef(null);
  const tableContainerRef = useRef(null); // Create a ref for the table container
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getBankDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/api/bank-loans`, {
        params: {
          "pagination[page]": currentPage,
          "pagination[pageSize]": banksPerPage,
          populate: "*",
        },
      });
      const data = response.data;
      if (data) {
        setBankDetails(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  }, [currentPage, url]);

  useEffect(() => {
    getBankDetails();
  }, [getBankDetails]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleOpenDetailsModal = () => {
    setOpenDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  const handleOpenApplyModal = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
  };

  const handleCloseApplyModal = () => {
    setSelectedRowIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseApplyModal();
        handleCloseDetailsModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);


  return (
    <Box sx={{
        width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
        '@media(max-width:1300px)': { borderTopLeftRadius: '0px' }
      }}>
        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
          '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
        }}>
          <Box
            sx={{
              borderRadius: '50px', backgroundColor: '#313893', width: '100%', height: 'auto'
            }}>
            <Card
              sx={{
                borderRadius: '50px', backgroundColor: 'white', padding: '20px',
              }}>
              <h4 style={{ color: '#313893' }}>Loan for Students</h4>
              <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "10px",
          border: "1px solid #ccc",
          boxShadow: "none",
        }}
        ref={tableContainerRef} // Attach the ref to the table container
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "transparent" }}>
              <TableCell
                sx={{
                  width: "20%",
                  textAlign: "center",
                  borderRight: "1px solid #ccc",
                }}
              >
                Bank Name
              </TableCell>
              <TableCell
                sx={{
                  width: "20%",
                  textAlign: "center",
                  borderRight: "1px solid #ccc",
                }}
              >
                Interest Rate
              </TableCell>
              <TableCell
                sx={{
                  width: "15%",
                  textAlign: "center",
                  borderRight: "1px solid #ccc",
                }}
              >
                Max Time
              </TableCell>
              <TableCell
                sx={{
                  width: "15%",
                  textAlign: "center",
                  borderRight: "1px solid #ccc",
                }}
              >
                Loan Type
              </TableCell>
              <TableCell
                sx={{
                  width: "15%",
                  textAlign: "center",
                  borderRight: "1px solid #ccc",
                }}
              >
                Scheme
              </TableCell>
              <TableCell
                sx={{
                  width: "15%",
                  textAlign: "center",
                  borderRight: "1px solid #ccc",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bankDetails.map((bankData, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "transparent",
                }}
              >
                <TableCell
                  sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}
                >
                  {bankData.attributes.Bank_logo && (
                    <img
                      src={`${url}${bankData.attributes.Bank_logo.data.attributes.url}`}
                      alt={bankData.attributes.Bank_Name}
                      style={{
                        width: "auto",
                        height: "50px",
                        objectFit: "contain",
                        margin: "auto",
                      }}
                    />
                  )}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}
                >
                  {bankData.attributes.Interest_Rate &&
                    bankData.attributes.Interest_Rate.replace(/%/g, "%\n")}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}
                >
                  {bankData.attributes.Maximum_Time}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}
                >
                  {bankData.attributes.Loan_Type}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}
                >
                  {bankData.attributes.Scheme}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      gap: "0.5rem",
                    }}
                  >
                    <Button
                      href={``}
                      variant="contained"
                      sx={{
                        width: 145,
                        height: 35,
                        background: "#FF7900",
                        borderRadius: 10,
                      }}
                      onClick={handleOpenDetailsModal}
                    >
                      Details
                    </Button>
                    <BackModal
                      open={openDetailsModal}
                      handleClose={handleCloseDetailsModal}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        width: 145,
                        height: 35,
                        background: "#FF7900",
                        borderRadius: 10,
                      }}
                      onClick={() => handleOpenApplyModal(index)}
                    >
                      Apply Now
                    </Button>
                    {selectedRowIndex === index && (
                      <RegisterModal
                        open={selectedRowIndex !== null}
                        showCollegeInfo={true}
                        collegeImage={`${url}${bankData.attributes.Bank_logo.data.attributes.url}`}
                        collegeName={bankData.attributes.Bank_Name}
                        handleClose={handleCloseApplyModal}
                      />
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ alignSelf: "center", marginTop: "1rem" }}
      />
    </>

            </Card>
          </Box>
        </Box>
      </Box>
  )
}

export default Studentloan