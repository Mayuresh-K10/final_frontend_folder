import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";

const DataTable = () => {
  const [selectedBankIndices, setSelectedBankIndices] = useState([0, 1, 2]);
  const [bankDetails, setBankDetails] = useState([]);

  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getBankDetails = async () => {
    try {
      const response = await axios.get(
        `${url}/api/bank-loans?pagination[pageSize]=48`
      );
      const data = response.data;

      if (data && data.data) {
        setBankDetails(data.data);
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };

  useEffect(() => {
    getBankDetails();
  });

  const handleChange = (index, event) => {
    const updatedIndices = [...selectedBankIndices];
    updatedIndices[index] = event.target.value;
    setSelectedBankIndices(updatedIndices);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginY: "1.3rem",
        border: "2px solid lightgray",
        boxShadow: "none",
        borderRadius: "20px",
      }}
    >
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bank/Financer</TableCell>
            {selectedBankIndices.map((selectedIndex, index) => (
              <TableCell key={index} align="center">
                <Select
                  value={selectedIndex}
                  onChange={(event) => handleChange(index, event)}
                  sx={{ marginBottom: "0.5rem" }}
                >
                  {bankDetails.map((bank, i) => (
                    <MenuItem key={i} value={i}>
                      {bank.attributes.Bank_Name}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Applicable Rate of Interest</TableCell>
            {selectedBankIndices.map((selectedIndex) => (
              <TableCell key={selectedIndex}>
                {bankDetails[selectedIndex]?.attributes.Interest_Rate}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Loan Type</TableCell>
            {selectedBankIndices.map((selectedIndex) => (
              <TableCell key={selectedIndex}>
                {bankDetails[selectedIndex]?.attributes.Loan_Type}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Repayment Period</TableCell>
            {selectedBankIndices.map((selectedIndex) => (
              <TableCell key={selectedIndex}>
                {bankDetails[selectedIndex]?.attributes.Maximum_Time}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Scheme</TableCell>
            {selectedBankIndices.map((selectedIndex) => (
              <TableCell key={selectedIndex}>
                {bankDetails[selectedIndex]?.attributes.Scheme}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
