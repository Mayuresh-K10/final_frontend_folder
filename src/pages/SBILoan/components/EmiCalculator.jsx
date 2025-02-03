import React, { useState } from "react";
import { Typography, Box, OutlinedInput, InputAdornment, Slider } from "@mui/material";
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [pieChartData, setPieChartData] = useState([
    { name: 'Principal', value: 1, fill: '#FF5733' },
    { name: 'Total Interest', value: 1, fill: '#7f29cf' }
  ]);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTenure) * 12;

    if (p && r && n) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));

      const totalInterestValue = p * r * n; // Calculate total interest
      setTotalInterest(totalInterestValue.toFixed(2));

      const totalAmountValue = p + totalInterestValue; // Calculate total amount payable
      setTotalAmount(totalAmountValue.toFixed(2));

      const pieData = [
        { name: 'Principal', value: parseFloat(principal) || 0, fill: '#0088FE' },
        { name: 'Total Interest', value: totalInterestValue || 0, fill: '#00C49F' }
      ];
      setPieChartData(pieData);
    }
  };

  const handlePrincipalChange = (value) => {
    setPrincipal(value);
    calculateEMI();
  };

  const handleInterestRateChange = (value) => {
    setInterestRate(value);
    calculateEMI();
  };

  const handleLoanTenureChange = (value) => {
    setLoanTenure(value);
    calculateEMI();
  };

  return (
    <Box>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 25,
          fontWeight: "700",
          textAlign: "center",
          marginY: "1.5rem",
        }}
      >
        CALCULATE YOUR EDUCATION LOAN EMI
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "1rem", md: "2rem" },
          padding: "0 1rem",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography sx={{ color: "#210366", fontSize: 15, fontWeight: 500 }}>
            Fill the Loan Amount
          </Typography>
          <OutlinedInput
            value={principal}
            onChange={(e) => handlePrincipalChange(e.target.value)}
            endAdornment={<InputAdornment position="end">₹</InputAdornment>}
            fullWidth
          />
          <Slider
            value={principal}
            onChange={(e, value) => handlePrincipalChange(value)}
            min={0}
            max={100000}
            step={1000}
            sx={{color : "#ff7900" , marginY: "0.5rem"}}
          />
          <Typography sx={{ color: "#210366", fontSize: 15, fontWeight: 500, marginTop: "0.5rem" }}>
            Fill the Interest Rate (% per annum)
          </Typography>
          <OutlinedInput
            value={interestRate}
            onChange={(e) => handleInterestRateChange(e.target.value)}
            fullWidth
          />
          <Slider
            value={interestRate}
            onChange={(e, value) => handleInterestRateChange(value)}
            min={0}
            max={20}
            step={0.5}
            sx={{color : "#ff7900" , marginY: "0.5rem"}}
          />
          <Typography sx={{ color: "#210366", fontSize: 15, fontWeight: 500, marginTop: "0.5rem" }}>
            Fill the Loan Time Period (in years)
          </Typography>
          <OutlinedInput
            value={loanTenure}
            onChange={(e) => handleLoanTenureChange(e.target.value)}
            fullWidth
          />
          <Slider
            value={loanTenure}
            onChange={(e, value) => handleLoanTenureChange(value)}
            min={0}
            max={30}
            step={1}
            sx={{color : "#ff7900" , marginY: "0.5rem"}}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1rem",
            gap: "1rem",
          }}
        >

          <Typography sx={{ color: "#210366", fontSize: 20 }}>
            EMI Payable: {emi ? `₹${emi} per month` : "Please calculate"}
          </Typography>

          <Typography sx={{ color: "#210366", fontSize: 18 }}>
            Total Interest: {totalInterest ? `₹${totalInterest}` : "Please calculate"}
          </Typography>

          <Typography sx={{ color: "#210366", fontSize: 18 }}>
            Total Amount Payable: {totalAmount ? `₹${totalAmount}` : "Please calculate"}
          </Typography>
          <PieChart width={300} height={300}>
            <Pie dataKey="value" data={pieChartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {
                pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))
              }
            </Pie>
            <Tooltip />
          </PieChart>
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 25,
          fontWeight: "400",
          textAlign: "center",
          marginY: "1.5rem",
        }}
      >
        Not sure about interest and fees rates, use our advanced EMI Calculator
      </Typography>
    </Box>
  );
};

export default EmiCalculator;
