import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

const studentlink = [
    { label: "Dashboard", link: "/job-portal/dashboard/student-dashboard", active: "dashboard", activemenu: "/", icon: <GridViewOutlinedIcon sx={{ color: 'white' }} /> },
    { label: "Profile", link: "/job-portal/dashboard/student-dashboard/myProfile", active: "profile", activemenu: "profile", icon: <PersonOutlineOutlinedIcon sx={{ color: 'white' }} /> },
    { label: "Jobs", link: "/job-portal/dashboard/student-dashboard/jobAlert", active: "jobalert", activemenu: "jobalert", icon: <AddAlertOutlinedIcon sx={{ color: 'white' }} /> },
    { label: "Saved Jobs", link: "/job-portal/dashboard/student-dashboard/savedJob", active: "savedJob", activemenu: "savedJob", icon: <BookmarkBorderOutlinedIcon sx={{ color: 'white' }} /> },
    { label: "Message", link: "/job-portal/dashboard/student-dashboard/messages", active: "message", activemenu: "message", icon: <EmailOutlinedIcon sx={{ color: 'white' }} /> },
    { label: "NEWS", link: "/job-portal/dashboard/student-dashboard/news", active: "news", activemenu: "news", icon: <NewspaperOutlinedIcon sx={{ color: 'white' }} /> },
    { label: "Student Loan", link: "/job-portal/dashboard/student-dashboard/loan", active: "loan", activemenu: "loan", icon: <CreditScoreOutlinedIcon sx={{ color: 'white' }} /> },
]

export default studentlink;