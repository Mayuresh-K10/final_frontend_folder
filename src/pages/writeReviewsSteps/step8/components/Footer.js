import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function MainHeading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "2rem",
        marginTop: "0.5rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon sx={{ color: "#FFA500" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ color: "#210366", fontSize: "15px", fontWeight: "400" }}>
              Eligibility of the Course
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon sx={{ color: "#FFA500" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ color: "#210366", fontSize: "15px", fontWeight: "400" }}>
              Where to find the application form
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon sx={{ color: "#FFA500" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ color: "#210366", fontSize: "15px", fontWeight: "400" }}>
              Details of reservation benefits(if any)
            </Typography>
          </ListItemText>
        </ListItem>
      
      </List>
    </Box>
  );
}
