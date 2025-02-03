import React, { useState } from "react";
import logo from "../../../Assets/collegecue.png";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Modal, Box, Button, Typography } from "@mui/material";
import DeleteAcc from "../Candidate/deleteAcc";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import studentlink from "../Student/StudentMenuLink";
import { useDispatch, useSelector } from "react-redux";
import { newuserlogoutUser } from "../../../appStore/NewuserSlice";
import DeleteStudent from "./DeleteStudent";

const StudentSideMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (itemName) => {
        setActiveMenu(itemName);
    };

    const dispatch = useDispatch();

    const jobuser = useSelector((state) => state.newuser);
    const jobname = jobuser?.firstname || localStorage.getItem("newusername");
    const jobuserid = jobuser?.id || localStorage.getItem("newuseruserid");
    const profileImageUrl =
        jobuser?.attachments || localStorage.getItem("profileImg");

    // sidemenu dropdown

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

    //pop up on delete

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        dispatch(newuserlogoutUser());
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
                        <Box //className='user-data'
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                flexDirection: "column",
                            }}
                        >
                            <Box //className="user-avatar online position-relative rounded-circle"
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
                            <Box //className="user-name-data"
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
                                    // className="user-name dropdown-toggle"
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
                                        <Link to="/job-portal/dashboard/student-dashboard/myProfile">
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
                                        <Link to="/job-portal/dashboard/student-dashboard/accountSettings">
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
                                    {studentlink.map((item, index) => (
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
                                            justifyContent: "left",
                                            marginLeft: "15px",
                                            marginTop: "25px",
                                            alignItems: "center",
                                            gap: "1rem",
                                            color: "white",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <DeleteOutlinedIcon
                                            sx={{ color: "white" }}
                                        />
                                        <Link>
                                            <span>Delete Account</span>
                                        </Link>
                                    </li>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        // aria-labelledby="modal-modal-title"
                                        // aria-describedby="modal-modal-description"
                                    >
                                        <DeleteStudent onClose={handleClose} />
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

export default StudentSideMenu;
