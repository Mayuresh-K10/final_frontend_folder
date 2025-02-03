import React from "react";
import { Box,  Typography } from "@mui/material";
import NotificationTable from "./NotificationTable";
const Notification = () => {
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
      <Box>
        <Typography
          style={{
            width: 330,
            height: 23,
            color: "#210366",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          IIM Bangalore Latest Notification
        </Typography>
      </Box>
      
      <Box sx={{ width: 924, height: 178 }}>
        <Typography
          sx={{
            color: "#210366",
            fontSize: 14,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          IIM Bangalore ranked 2nd according to the NIRF rankings 2022. IIM B
          has achieved 52nd position in FT Global MBA Ranking 2023 considering
          the one-year full-time Executive Post Graduate Programme in Management
          (EPGP).
          <br />
          IIM Bangalore has secured 1st rank to be known as the Best B-School in
          India and 31st position globally in FT Masters in Management (MiM)
          Global Rankings 2022. QS University Rankings by Subject 2022 has
          ranked IIM Bangalore as the best B-School in India and 63rd place
          globally, in Business & Management Studies.
          <br />
          Moreover, IIM Bangalore has secured second position in Outlook I CARE
          Ranking 2022 followed by IIM Ahmedabad. IIM Bangalore has been ranked
          43 in FT Executive Education Custom Ranking 2022.
        </Typography>
      
      </Box>
      <NotificationTable />
    </Box>
  );
};

export default Notification;
