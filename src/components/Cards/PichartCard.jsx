import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

function PichartCard({ country, field, img }) {
  const colors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#c7c7c7",
    "#dbdb8d",
    "#9edae5",
  ];

  const pieChartData = Object.entries(field).map(
    ([field, percentage], index) => ({
      name: field,
      value: percentage,
      fill: colors[index % colors.length],
    })
  );

  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: "auto",
          margin: "1rem",
          justifyItems: "flex-start",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          padding: "15px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1.3rem",
          }}
        >
          <Avatar
            src={img}
            sx={{
              height: "3rem",
              width: "3rem",
              backgroundColor: "white",
              margin: "0rem",
              padding: "0rem",
            }}
          />
          <Box
            sx={{
              backgroundColor: "rgba(123, 144, 255, 0.2);",
              width: "100%",
              borderRadius: "0 10px 10px 0",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "700",
                lineHeight: "1.2rem",
                letterSpacing: "0.03rem",
                whiteSpace: "nowrap",
                textAlign: "left",
                padding: "0.5rem",
              }}
            >
              {country}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <PieChart width={200} height={200}>
              <Pie
                dataKey="value"
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <Tooltip />
            </PieChart>
          </Box>

          <Box sx={{ flex: 1 }}>
            <ul>
              {pieChartData.map(({ name, value, fill }, index) => (
                <li
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: fill,
                      marginRight: "5px",
                    }}
                  ></span>
                  <strong
                    style={{ textTransform: "capitalize", marginRight: "5px" }}
                  >
                    {name}:
                  </strong>
                  {value}%
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PichartCard;
