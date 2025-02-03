import React from "react";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Search() {
    const [question, setQuestion] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        bgcolor: "background.paper",
        border: "2px solid #000",
        top: "50%",
        left: "50%",
        p: 2,
        px: 4,
        pb: 3,
    };

    return (
        <Grid container component="form" onSubmit={handleSubmit} spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    type="text"
                    placeholder="Search Questions"
                    onChange={handleChange}
                    sx={{ height: "2.5rem", width: "100%" }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#FF7900",
                        color: "#FFFFFF",
                        height: "2.5rem",
                        width: "100%",
                    }}
                    onClick={handleOpen}
                >
                    Add Question
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h6" component="h2">
                            Write a question
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                "& > :not(style)": { m: 1, width: "25ch" },
                                justifyContent: "space-between",
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <input
                                id="outlined-basic"
                                placeholder="Write here"
                                variant="outlined"
                                style={{
                                    border: "1px solid #7B90FF",
                                    width: "100%",
                                    borderRadius: "8px",
                                    padding: "10px 15px",
                                    paddingLeft: "5px",
                                    fontSize: "1rem",
                                    color: "#210366",
                                }}
                            />
                            <Button variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </Grid>
        </Grid>
    );
}

export default Search;
