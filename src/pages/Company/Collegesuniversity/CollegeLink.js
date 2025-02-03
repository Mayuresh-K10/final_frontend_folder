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
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';

const CollegeLink=[
    {label:"Dashboard", link:"/job-portal/dashboard/college-dashboard", active:"dashboard", activemenu:"/", icon: <GridViewOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Profile", link:"/job-portal/dashboard/college-dashboard/collegeProfile", active:"profile", activemenu:"profile", icon: <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />},
    {label:"LMS", link:"https://lms.collegecue.com/admin/login", active:"job", activemenu:"job", icon: <SystemSecurityUpdateGoodOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Posted Job", link:"/job-portal/dashboard/college-dashboard/jobPost", active:"job", activemenu:"job", icon: <BookmarkBorderOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Add Job", link:"/job-portal/dashboard/college-dashboard/submitJob", active:"addjob", activemenu:"addjob", icon: <SchoolOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Messages", link:"/job-portal/dashboard/college-dashboard/collegemessage", active:"message", activemenu:"message", icon: <EmailOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Membership", link:"/job-portal/dashboard/college-dashboard/Membership", active:"membership", activemenu:"membership", icon: <WorkOutlineOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Account Setting", link:"/job-portal/dashboard/college-dashboard/accountSettings", active:"setting", activemenu:"setting", icon: <SettingsRoundedIcon sx={{ color: 'white' }} />},
]

export default CollegeLink;