import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"; // Profile Icon
import {
    Drawer,
    Menu,
    MenuItem,
    Typography,
    Box,
    IconButton,
    Modal,
    Avatar,
} from "@mui/material";
import CollegeLink from "../Collegesuniversity/CollegeLink";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteAcc from "../../Candidate/Candidate/deleteAcc";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import DeleteCollege from "./DeleteCollege";
import { collegeLogoutUser } from "../../../appStore/CollegeSlice";
import NotificationComponent from "../NotificationComponent";
import CollegeNotificationComponent from "../CollegeNotificationComponent";

const CollegeHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null); // For notifications
    const [profileAnchorEl, setProfileAnchorEl] = useState(null); // For profile dropdown
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;
    const collegeuser = useSelector((state) => state.college);

    const collegeid =
        collegeuser?.collegeid || localStorage.getItem("collegeid");
    const collegetoken =
        collegeuser?.token || localStorage.getItem("collegeAccessToken");
    const collegen =
        collegeuser?.university_name || localStorage.getItem("collegename");
    const dispatch = useDispatch();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        dispatch(collegeLogoutUser()); // Dispatch the logout action
    };

    const notifications = [
        {
            image: "https://jobi-nextjs.vercel.app/_next/static/media/icon_36.d044b698.svg",
            message: "You have 3 new mails",
            time: "3 hours ago",
            unread: true,
        },
        {
            image: "https://jobi-nextjs.vercel.app/_next/static/media/icon_37.34c12156.svg",
            message: "You have 5 new mails",
            time: "6 hours ago",
            unread: false,
        },
        {
            image: "https://jobi-nextjs.vercel.app/_next/static/media/icon_38.2db06cc7.svg",
            message: "You have 7 new mails",
            time: "9 hours ago",
            unread: true,
        },
    ];

    const links = CollegeLink; // Dynamically choose the links

    // Handlers for notification dropdown
    const handleDropClick = (e) => setAnchorEl(e.currentTarget);
    const handleDropClose = () => setAnchorEl(null);

    // Handlers for profile dropdown
    const handleProfileClick = (e) => setProfileAnchorEl(e.currentTarget);
    const handleProfileClose = () => setProfileAnchorEl(null);

    // Drawer toggle handlers
    const toggleDrawer = (open) => () => setIsDrawerOpen(open);

    return (
        <Box
            sx={{
                width: "100%",
                height: "75px",
                position: "fixed",
                top: "0",
                zIndex: 999,
                background: "#313893",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "20px",
                }}
            >
                {/* Drawer Icon */}
                <IconButton
                    sx={{
                        display: "none",
                        "@media (max-width: 1300px)": {
                            display: "block",
                        },
                    }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>

                {/* Notification and Profile Icons */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginLeft: "auto",
                        marginRight: "400px",
                        "@media (max-width: 1080px)": {
                            marginLeft: 0,
                            marginRight: 0,
                        },
                    }}
                >
                    {/* Notification Icon 
          <IconButton onClick={handleDropClick}>
            <NotificationsNoneOutlinedIcon sx={{ color: 'white' }} />
          </IconButton>
      */}
                    <CollegeNotificationComponent token={collegetoken} />
                    {/* Notification Dropdown */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleDropClose}
                    >
                        {notifications.map((notification, index) => (
                            <MenuItem key={index} sx={{ gap: "15px" }}>
                                <img
                                    alt="icon"
                                    width="36"
                                    height="36"
                                    src={notification.image}
                                    style={{ color: "transparent" }}
                                />
                                <Box>
                                    <Typography variant="inherit">
                                        {notification.message}
                                    </Typography>
                                    <Typography variant="caption">
                                        {notification.time}
                                    </Typography>
                                </Box>
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* Profile Icon */}
                    <Box
                        onClick={handleProfileClick}
                        sx={{
                            width: "50px",
                            height: "50px",
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

                    {/* Profile Dropdown */}
                    <Menu
                        anchorEl={profileAnchorEl}
                        open={Boolean(profileAnchorEl)}
                        onClose={handleProfileClose}
                    >
                        {links.map((item, index) => (
                            <MenuItem key={index}>
                                <Link
                                    to={item.link}
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </MenuItem>
                        ))}
                        <MenuItem onClick={handleOpen}>
                            <DeleteOutlinedIcon sx={{ color: "red" }} />
                            <Typography variant="body2" color="textSecondary">
                                Delete Account
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <LogoutIcon sx={{ color: "black" }} />
                                Logout
                            </Link>
                        </MenuItem>
                    </Menu>

                    {/* Delete Account Modal */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <DeleteCollege onClose={handleClose} />
                    </Modal>
                </Box>

                {/* Drawer Menu */}
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{
                            width: 250,
                            background: "#313893",
                            minHeight: "100vh",
                        }}
                    >
                        {links.map((item, index) => (
                            <MenuItem key={index}>
                                <Link
                                    to={item.link}
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </MenuItem>
                        ))}
                        <MenuItem onClick={handleOpen}>
                            <Link>
                                <span>Delete Account</span>
                            </Link>
                            <Modal open={open} onClose={handleClose}>
                                <DeleteCollege onClose={handleClose} />
                            </Modal>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/"
                                onClick={handleLogout} // Add onClick to logout
                            >
                                <span>Logout</span>
                            </Link>
                        </MenuItem>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    );
};

export default CollegeHeader;
