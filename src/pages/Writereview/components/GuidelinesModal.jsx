import React, {useState, useEffect} from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  backgroundColor: "white",
  borderRadius: "0.75rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3rem",
  maxHeight: "80vh",
  overflowY: "auto",
  boxShadow: 24,
  "@media (max-width: 768px)": {
    width: '100vw',
  }
};

const GuidelinesModal = (props) => {
  const [guidelines, setGuidelines] = useState([]);

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getGuidelinesData = async () => {
    try {
      const response = await axios.get(
        `${url}/api/rules`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setGuidelines(data.data)
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching Guidelines:", error);
    }
  };

  useEffect(() => {
    getGuidelinesData();
  });

  return (
    <Modal
      open={props.open}
      onClose={props.handleGuideClose}
      aria-labelledby="modal-guidelines"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2"
        style={{
          fontWeight: "bold",
        }}
        >
          Review Guidelines
        </Typography>
        <Box sx={{ mt: 2 }}>
          {guidelines.map((rule) => (
            <List sx={{ listStyleType: "square" }}>
              <ListItem sx={{ display: "list-item" }}>
                <Typography key={rule.id} id={rule.id} sx={{
                 fontWeight: "450",
                }}>
                  {rule.attributes.Rules}
                </Typography>
              </ListItem>
            </List>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default GuidelinesModal;