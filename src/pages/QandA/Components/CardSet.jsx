import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const CardSet = ({
  heading,
  find,
  reviews,
  getbgColor,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box
      sx={{
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
        background: "#FFFFFF",

        borderRadius: "1rem",

        fontSize: "1rem",
        width: "100%",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          background: "#7B90FF",
          borderRadius: 15,
          border: "1px solid #7B90FF",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              width: "100%",
              color: "white",
              fontSize: 16,
              marginTop: 0.6,
              marginBottom: 0.6,
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
              wordWrap: "break-word",
              marginLeft: "1rem",
            }}
          >
            {heading}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          height: "auto",
          marginTop: "1rem",
          background: "white",
          borderBottom: "0.50px rgba(0, 0, 0, 0.20) solid",
          borderRadius: 15,
          border: "1px solid #7B90FF",
          marginBottom: "2rem",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#210366",
            fontSize: 15,
            fontFamily: "Roboto, sans-serif",
            fontWeight: "600",
            wordWrap: "break-word",
            marginLeft: "1rem",
          }}
        >
          {find}
        </Typography>
        <SearchIcon sx={{ alignItems: "center", marginRight: "1rem" }} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {reviews.map(({ Answer }, index) => {
          return (
            <Box
              sx={{
                alignContent: "flex-start",
                width: "100%",
                color: "#2F1370",
                fontSize: 14,
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
                wordWrap: "break-word",
                display: "flex",
                leadingTrim: "both",
                textEdge: "cap",
              }}
              key={index}
            >
              <List>
                <ListItem>
                  <ListItemButton sx={{ marginTop: -6 }}>
                    <Checkbox {...label} />
                    <ListItemText>{Answer}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CardSet;
