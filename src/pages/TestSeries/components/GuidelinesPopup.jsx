import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

const GuidelinesPopup = ({ open, onClose, onAccept }) => {
  const [quizGuidelines, setQuizGuidelines] = useState([]);

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getquizGuidelinesData = async () => {
    try {
      const response = await axios.get(
        `${url}/api/instructions-and-navigations`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setQuizGuidelines(data.data);
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching Quiz Guidelines:", error);
    }
  };

  useEffect(() => {
    getquizGuidelinesData();
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Quiz Guidelines</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please read the guidelines before starting the quiz.
          <List>
            {quizGuidelines.map((item) => (
              <ListItem key={item.id}>
                <ListItemText>
                <Typography variant="subtitle2">{item.attributes.Instructions}</Typography>
                  <Typography variant="subtitle2">{item.attributes.Navigation_And_Answering}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onAccept} color="primary" autoFocus>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GuidelinesPopup;
