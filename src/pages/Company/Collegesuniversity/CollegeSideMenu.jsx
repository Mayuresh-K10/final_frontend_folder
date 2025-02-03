import React, { useState, useEffect } from "react";
import logo from "../../../Assets/collegecue.png";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Modal, Box, Button, Typography } from "@mui/material";
import DeleteAcc from "../../Candidate/Candidate/deleteAcc";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import CollegeLink from "../Collegesuniversity/CollegeLink";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { collegeLogoutUser } from "../../../appStore/CollegeSlice"; // Import your logout action
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import blankprofile from "../../../Assets/blankprofile.png";

import DeleteCollege from "./DeleteCollege";

const CollegeSideMenu = ({ isCompany }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [drop, setDrop] = useState(false);
    const [open, setOpen] = useState(false);
    const [photo, setPhoto] = useState("");

    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;
    const collegeuser = useSelector((state) => state.college);

    const collegeid =
        collegeuser?.collegeid || localStorage.getItem("collegeid");
    const collegetoken =
        collegeuser?.token || localStorage.getItem("collegeAccessToken");
    const collegen =
        collegeuser?.university_name || localStorage.getItem("collegename");

    const [collegename, setCollegename] = useState(collegen || "");

    useEffect(() => {
        const fetchCollege = async () => {
            if (!collegeid) return;
            try {
                const response = await axios.get(
                    `${url}/colleges/${collegeid}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${collegetoken}`,
                        },
                    }
                );

                //console.log("API Response:", response.data); // Log the response to confirm structure

                const collegeData = response.data?.colleges?.[0]; // Directly access the first element in the colleges array

                // Check if the data structure is as expected
                if (response.data.status === "success" && collegeData) {
                    setCollegename(collegeData.college_name || "");
                    if (collegeData.attachment_url) {
                        setPhoto(collegeData.attachment_url);
                    }
                } else {
                    console.error("Data format unexpected:", response.data);
                }
            } catch (error) {
                console.error(
                    "Error fetching college data:",
                    error.response || error.message
                );
            }
        };

        fetchCollege();
    }, [collegeid, collegetoken]);

    const dispatch = useDispatch(); // Use dispatch for Redux actions

    const handleMenuClick = (itemName) => {
        setActiveMenu(itemName);
    };

    const handleDropClick = (e) => {
        setAnchorEl(e.currentTarget);
        setDrop(true);
    };

    const handleDropClose = () => {
        setAnchorEl(null);
        setDrop(false);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        dispatch(collegeLogoutUser()); // Dispatch the logout action
    };

    return (
        <>
            <Box sx={{ background: "#313893" }}>
                <Box
                    sx={{
                        position: "fixed",
                        zIndex: 1000,
                        left: 0,
                        top: 0,
                        bottom: 0,
                        minHeight: "100vh",
                        overflowY: "auto",
                        padding: "30px 20px",
                        background: "#313893",
                        scrollbarWidth: "none",
                        "@media(max-width:768px)": {
                            transform: "translateX(-100%)",
                            opacity: 0,
                            visibility: "hidden",
                            transition: "all 0.3s ease",
                        },
                    }}
                >
                    <Box sx={{ position: "relative !important" }}>
                        <Box
                            sx={{
                                display: "flex !important",
                                alignItems: "center",
                                justifyContent: "space-between",
                                "@media (max-width:768px)": {
                                    display: "block !important",
                                    textAlign: "center !important",
                                },
                            }}
                        >
                            <Link to="/">
                                <img
                                    alt="logo"
                                    fetchPriority="high"
                                    decoding="async"
                                    dataNimg="1"
                                    style={{ color: "transparent" }}
                                    src={logo}
                                />
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                flexDirection: "column",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "75px",
                                    height: "75px",
                                    margin: "40px auto 0",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#f0f0f0",
                                }}
                            >
                                <Typography variant="h6">
                                    {collegen.slice(0, 1)}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    border: "none",
                                    borderRadius: "16px",
                                    padding: "12px 0",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Button
                                    sx={{
                                        fontSize: "18px",
                                        color: "white",
                                        fontWeight: "500",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        textWrap: "wrap",
                                        width: "200px",
                                    }}
                                    type="button"
                                    id="profile-dropdown"
                                    aria-controls={
                                        drop ? "basic-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={drop ? "true" : undefined}
                                    onClick={handleDropClick}
                                >
                                    {collegename}
                                </Button>

                                <Menu
                                    anchorEl={anchorEl}
                                    open={drop}
                                    onClose={handleDropClose}
                                >
                                    <MenuItem
                                        sx={{ gap: "15px" }}
                                        className={
                                            activeMenu === "profile"
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            handleMenuClick("profile")
                                        }
                                    >
                                        <PersonOutlineOutlinedIcon
                                            sx={{ color: "black" }}
                                        />
                                        <Link to="/job-portal/dashboard/college-dashboard/collegeProfile">
                                            <span> Profile</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem
                                        sx={{ gap: "15px" }}
                                        className={
                                            activeMenu === "settings"
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            handleMenuClick("settings")
                                        }
                                    >
                                        <SettingsRoundedIcon
                                            sx={{ color: "black" }}
                                        />
                                        <Link to="/job-portal/dashboard/college-dashboard/accountSettings">
                                            <span>Account Settings</span>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <ul
                                    style={{
                                        display: "flex",
                                        alignContent: "flex-start",
                                        justifyContent: "flex-start",
                                        flexDirection: "column",
                                        gap: "2rem",
                                    }}
                                >
                                    {CollegeLink.map((item, index) => (
                                        <li
                                            key={index}
                                            className={
                                                activeMenu === `${item.active}`
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                handleMenuClick(
                                                    `${item.activemenu}`
                                                )
                                            }
                                            style={{
                                                display: "flex",
                                                justifyContent: "left",
                                                marginLeft: "15px",
                                                marginTop: "25px",
                                                alignItems: "center",
                                                gap: "1rem",
                                                color: "white",
                                                fontSize: "16px",
                                            }}
                                        >
                                            {item.icon}
                                            <Link to={item.link}>
                                                <span>{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    <li
                                        onClick={handleOpen}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "1rem",
                                            color: "white",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            marginTop: "2rem",
                                        }}
                                    >
                                        <DeleteOutlinedIcon
                                            sx={{ color: "white" }}
                                        />
                                        <Link>
                                            <span>Delete Account</span>
                                        </Link>
                                    </li>
                                    <Modal open={open} onClose={handleClose}>
                                        <DeleteCollege onClose={handleClose} />
                                    </Modal>
                                </ul>
                            </Box>
                            <Link
                                to="/"
                                onClick={handleLogout} // Add onClick to logout
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: "50px",
                                    gap: "1rem",
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    marginTop: "2rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                <LogoutIcon sx={{ color: "white" }} />
                                <span>Logout</span>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CollegeSideMenu;
