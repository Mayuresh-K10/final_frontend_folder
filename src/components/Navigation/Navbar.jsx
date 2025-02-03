import React from "react";
// import logo from "../../Assets/cc2.svg";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import ExploreForm from "./ExploreForm";
import imgs from "./components/6.webp";
import topcourses from "./components/1.webp";
import news from "./components/3.webp";
import educationloan from "./components/9.webp";
import qanda from "./components/15.webp";
import testseries from "./components/16.webp";
import coursefinder from "./components/17.webp";
import review from "./components/4.webp";
import writeareview from "./components/7.webp";
import institute from "./components/12.webp";
import collegepredictor from "./components/14.webp";
import practicequestion from "./components/18.webp";
import scholarship from "./components/10.webp";
import job from "./components/11.webp";
import TopNews from "./TopNews";

import SearchBar from "../SearchBar";

const drawerWidth = 240;

const currentYear = new Date().getFullYear();

const navItems = [
    { label: "Top Colleges & Universities", link: "/top-universities" },
    { label: `Admission ${currentYear}`, link: "/admission" },
    { label: "Exams", link: "/entrance-exam" },
    { label: "Study Abroad", link: "/study-abroad" },
];

function Navbar(props) {
    const logo = `${process.env.PUBLIC_URL}/Assets/cc2.svg`;

    const { window } = props;

    const isMobile = useMediaQuery("(max-width:900px)");
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [openExplore, setOpenExplore] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorE2, setAnchorE2] = useState(null);
    const [openNotification, setOpenNotification] = useState(false);

    const handleNotificationClick = (e) => {
        setOpenNotification(!openNotification);
        setAnchorE2(e.currentTarget);
    };
    const handleNotificationClose = () => {
        setOpenNotification(false);
        setAnchorE2(null);
    };

    const handleExploreClick = (e) => {
        setOpenExplore(!openExplore);
        setAnchorEl(e.currentTarget);
    };

    const handlePopoverClose = () => {
        setOpenExplore(false);
        setAnchorEl(null);
    };

    const [isAdmin, setIsAdmin] = useState(false);

    const handleAdminLogin = () => {
        setIsAdmin(true);
    };

    const dropdownItems = [
        { label: "Top Courses", link: "/choose-courses", logo: topcourses },
        { label: "Reviews", link: "/review", logo: review },
        { label: "News", link: "/news", logo: news },
        { label: "Write A Review", link: "/write-review", logo: writeareview },
        {
            label: "Education Loan",
            link: "/education-loan",
            logo: educationloan,
        },
        { label: "Institutes", link: "/institutes", logo: institute },
        { label: "Q&A", link: "/qa", logo: qanda },
        {
            label: "College Predictor",
            link: "/collegePredictor",
            logo: collegepredictor,
        },
        { label: "Test Series", link: "/test-series", logo: testseries },
        {
            label: "Practice Questions",
            link: "/practice-questions",
            logo: practicequestion,
        },
        { label: "Course Finder", link: "/course-finder", logo: coursefinder },
        { label: "Scholarships", link: "/scholarships", logo: scholarship },
        { label: "Job Portal", link: "/job-portal", logo: job },
        // dashboardItem,
    ];

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ justifyContent: "space-between" }}
        >
            <Divider />
            <List>
                {navItems.map((item, itemIndex) => (
                    <ListItem key={itemIndex} disablePadding>
                        <ListItemButton>
                            <Link
                                to={item.link}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    sx={{ textTransform: "none" }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                {dropdownItems.map((item, itemIndex) => (
                    <ListItem key={itemIndex} disablePadding>
                        <ListItemButton>
                            <Link
                                to={item.link}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    sx={{ textTransform: "none" }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {isMobile ? (
                <Box
                    component="nav"
                    sx={{ backgroundColor: "#313893", width: "100%" }}
                >
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Box>
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt=""
                                    width="120px"
                                    height="auto"
                                    style={{
                                        marginLeft: "1rem",
                                        objectFit: "contain",
                                    }}
                                />
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px",
                            }}
                        >
                            <SearchBar />
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, color: "white" }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Box>
            ) : (
                <Box
                    component="nav"
                    sx={{ backgroundColor: "#313893", width: "100%" }}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link to="/">
                            <img
                                src={logo}
                                alt="CollegeCue"
                                width="200px"
                                height="auto"
                                style={{
                                    marginLeft: "1rem",
                                    objectFit: "contain",
                                }}
                            />
                        </Link>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "20px",
                                marginRight: "5rem",
                                marginLeft: "5rem",
                            }}
                        >
                            {navItems.map((item, itemIndex) => (
                                <Button
                                    href={item.link}
                                    key={itemIndex}
                                    sx={{
                                        color: "#fff",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "20px",
                            }}
                        >
                            <Box>
                                <SearchBar />
                            </Box>
                            <Button
                                onClick={handleExploreClick}
                                startIcon={<AppsIcon />}
                                aria-label="Explore"
                                sx={{
                                    color: "white",
                                    textTransform: "capitalize",
                                    position: "relative",
                                    "& .MuiButton-endIcon": {},
                                }}
                            >
                                Explore
                            </Button>
                            <Popover
                                open={openExplore}
                                anchorEl={anchorEl}
                                onClose={handlePopoverClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                slotProps={{
                                    paper: {
                                        sx: {
                                            borderRadius: "30px",
                                            boxShadow:
                                                "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                            // marginTop: "25px",
                                        },
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        // marginTop:"10rem",
                                        bgcolor: "#D1E0ED",
                                        paddingTop: "0.7rem",
                                        paddingLeft: "0.7rem",
                                        paddingRight: "0.7rem",
                                        paddingBottom: "1rem",
                                        maxHeight: "700px",
                                        overflowY: "auto",
                                        "&::-webkit-scrollbar": {
                                            width: "8px",
                                        },
                                        "&::-webkit-scrollbar-track": {
                                            backgroundColor: "inherit",
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            backgroundColor: "#A9B4BF",
                                            borderRadius: "6px",
                                        },
                                        "&::-webkit-scrollbar-thumb:hover": {
                                            backgroundColor: "#BCC9D5",
                                        },
                                    }}
                                >
                                    <ExploreForm
                                        isAdmin={isAdmin}
                                        dropdownItems={dropdownItems}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    >
                                        <img
                                            src={imgs}
                                            alt="Collegecue logo"
                                            width="100px"
                                            height="100px"
                                            style={{
                                                objectFit: "contain",
                                                alignSelf: "center",
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Popover>
                            {/* Notification Section */}
                            <IconButton
                                aria-label="Notification"
                                color="inherit"
                                onClick={handleNotificationClick}
                            >
                                <Badge color="secondary" variant="dot">
                                    <NotificationsIcon
                                        sx={{ color: "white" }}
                                    />
                                </Badge>
                            </IconButton>
                            <Popover
                                open={openNotification}
                                anchorE1={anchorE2}
                                onClose={handleNotificationClose}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                                transformOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                slotProps={{
                                    paper: {
                                        sx: {
                                            borderRadius: "20px",
                                            boxShadow:
                                                "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                            left: "945px !important",
                                            top: "80px !important",
                                        },
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        // marginTop:"10rem",
                                        maxWidth: "400px",
                                        bgcolor: "#D1E0ED",
                                        paddingTop: "0.5rem",
                                        paddingLeft: "0.5rem",
                                        paddingRight: "0rem",
                                        paddingBottom: "1rem",
                                        maxHeight: "500px",
                                        overflowY: "auto",
                                        "&::-webkit-scrollbar": {
                                            width: "8px",
                                        },
                                        "&::-webkit-scrollbar-track": {
                                            backgroundColor: "inherit",
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            backgroundColor: "#A9B4BF",
                                            borderRadius: "6px",
                                        },
                                        "&::-webkit-scrollbar-thumb:hover": {
                                            backgroundColor: "#BCC9D5",
                                        },
                                    }}
                                >
                                    <TopNews
                                        isAdmin={isAdmin}
                                        dropdownItems={dropdownItems}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    ></Box>
                                </Box>
                            </Popover>
                            {/* Login Button Section */}
                            <Button
                                href="/login"
                                aria-label="login"
                                className="log"
                                sx={{
                                    padding: "10px",
                                    borderRadius: "5.5px",
                                    color: "white",
                                    height: "2.50rem",
                                    width: "5.25rem", // Add your desired width here
                                    position: "relative",
                                    top: "0.25rem",
                                    border: "3px solid transparent",
                                    backgroundColor: "#E4441A",
                                    transition: " 500ms ease 0ms",
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "black",
                                        boxShadow:
                                            "0px 0px 127px -14px rgba(228,66,26,1)",
                                        border: "3px solid #E4441A",
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </Box>
                    </Toolbar>
                </Box>
            )}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    <Button
                        href="/login"
                        aria-label="login"
                        className="log"
                        sx={{
                            position: "relative",
                            left: "5rem",
                            padding: "10px",
                            marginY: "1.5rem",
                            borderRadius: "5%",
                            color: "white",
                            width: "4.25rem", // Add your desired width here
                            backgroundColor: "#E4441A",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "black",
                                boxShadow:
                                    "0px 0px 127px -14px rgba(228,66,26,1)",
                            },
                        }}
                    >
                        Login
                    </Button>
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default React.memo(Navbar);
