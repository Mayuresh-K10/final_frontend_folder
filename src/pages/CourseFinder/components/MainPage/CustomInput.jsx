import React, { useState } from "react";
import {
    TextField,
    Button,
    Stack,
    MenuItem,
    Select,
    FormControl,
    // InputLabel,
} from "@mui/material";

function CustomInput() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [college, setCollege] = useState("");
    const courses = [
        "MBA",
        "MCA",
        "B.TECH",
        "M.TECH",
        "M.A.",
        "B.Com"
    ];

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };

    const handleCollegeChange = (event) => {
        setCollege(event.target.value);
    };

    const handleButtonClick = () => {
        // Handle button click logic here
    };

    return (
            <Stack direction="row" justifyContent="center" p={'1rem 1rem 2rem'} backgroundColor={'#210366'} flexWrap={"wrap"}>
                <TextField
                    placeholder="ENTER YOUR NAME"
                    value={name}
                    onChange={handleNameChange}
                    InputProps={{
                        sx: {
                            m: 1,
                            width: "90%",
                            textAlign: "center",
                            textTransform: "uppercase",
                            backgroundColor: "#190054",
                            color: "#ffffff",
                            "&::placeholder": {
                                color: "#fff",
                                textAlign: "center",
                            },
                            "& .MuiInputBase-input": {
                                textAlign: "center",
                            },
                        },
                    }}
                />
                <TextField
                    placeholder="+91 ENTER YOUR MOBILE NUMBER"
                    value={mobile}
                    onChange={handleMobileChange}
                    InputProps={{
                        sx: {
                            m: 1,
                            width: "100%",
                            textAlign: "center",
                            textTransform: "uppercase",
                            backgroundColor: "#190054",
                            color: "#ffffff",
                            "&::placeholder": {
                                color: "#fff",
                                textAlign: "center",
                            },
                            "& .MuiInputBase-input": {
                                textAlign: "center",
                            },
                        },
                    }}
                />
                <FormControl sx={{ m: 1, marginLeft:"2rem" ,width: "30ch" }}>
                    <Select
                        id="college"
                        value={college}
                        onChange={handleCollegeChange}
                        displayEmpty
                        sx={{
                            backgroundColor: "#190054",
                            color: "#ffffff",
                            textTransform: "uppercase",
                            "& .MuiInputBase-input": {
                                textAlign: "center",
                            },
                            "& .MuiInputLabel-root": {
                                textAlign: "center",
                                color: "#fff",
                            },
                            "& .MuiSelect-icon": {
                                color: "#fff",
                            },
                        }}
                    >
                        <MenuItem value="">Select your course</MenuItem>
                        {courses.map((course) => (
                            <MenuItem key={course} value={course}>
                                {course}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        m: 1,
                        p:1,
                        // width: "10%",
                        borderRadius: "20px",
                        backgroundColor: "#7B90FF",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "1.3rem",
                    }}
                    onClick={handleButtonClick}
                >
                    Submit
                </Button>
            </Stack>
    );
}

export default CustomInput;