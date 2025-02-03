import React, { useState, useEffect } from "react";
import logo from "../../../Assets/collegecue.png";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Modal, Box, Button, Typography } from "@mui/material";
import DeleteAcc from "./deleteAcc";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import candidatelink from "./CandidateLink";
import { useDispatch, useSelector } from "react-redux";
import { jobseekerlogoutUser } from "../../../appStore/JobseekerSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteCandidate from "./DeleteCandidate";

const SideMenu = ({ isjobseeker }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Track screen width
    const dispatch = useDispatch();

    const jobuser = useSelector((state) => state.jobseeker);
    const jobname =
        jobuser?.first_name || localStorage.getItem("jobseekername");
    const jobuserid =
        jobuser?.userid || localStorage.getItem("jobseekeruserid");

    const profileImageUrl =
        jobuser?.attachments || localStorage.getItem("profileImg");

    const handleMenuClick = (itemName) => {
        setActiveMenu(itemName);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [drop, setDrop] = useState(false);

    const handleDropClick = (e) => {
        setAnchorEl(e.currentTarget);
        setDrop(true);
    };
    const handleDropClose = () => {
        setAnchorEl(null);
        setDrop(false);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Log out function with console log for debugging
    const handleLogout = () => {
        dispatch(jobseekerlogoutUser());
    };

    // Update screen width on resize for responsive debugging
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                        // Remove transform styles for larger screens
                        transition: "all 0.3s ease",
                        transform: "translateX(0)",
                        opacity: 1,
                        visibility: "visible",
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
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "75px",
                                        height: "75px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#f0f0f0",
                                    }}
                                >
                                    <Typography variant="h6">
                                        {/* {jobname.slice(0, 1)} */}
                                        {profileImageUrl ? (
                                            <img src={profileImageUrl} alt="" />
                                        ) : (
                                            jobname.slice(0, 1)
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
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
                                    {jobname}
                                </Button>

                                <Menu
                                    anchorEl={anchorEl}
                                    open={drop}
                                    onClose={handleDropClose}
                                >
                                    <MenuItem
                                        sx={{ gap: "15px" }}
                                        onClick={() =>
                                            handleMenuClick("profile")
                                        }
                                    >
                                        <PersonOutlineOutlinedIcon
                                            sx={{ color: "black" }}
                                        />
                                        <Link to="/job-portal/dashboard/candidate-dashboard/myProfile">
                                            <span> Profile</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem
                                        sx={{ gap: "15px" }}
                                        onClick={() =>
                                            handleMenuClick("settings")
                                        }
                                    >
                                        <SettingsRoundedIcon
                                            sx={{ color: "black" }}
                                        />
                                        <Link to="/job-portal/dashboard/candidate-dashboard/accountSettings">
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
                                        flexDirection: "column",
                                        gap: "2rem",
                                    }}
                                >
                                    {candidatelink.map((item, index) => (
                                        <li
                                            key={index}
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
                                        <DeleteCandidate
                                            onClose={handleClose}
                                        />
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

export default SideMenu;
