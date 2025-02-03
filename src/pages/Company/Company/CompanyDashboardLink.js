import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const CompanyDashboardLink=[
    {label:"Dashboard", link:"/job-portal/dashboard/company-dashboard", active:"dashboard", activemenu:"/", icon: <GridViewOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Profile", link:"/job-portal/dashboard/company-dashboard/companyProfile", active:"profile", activemenu:"profile", icon: <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />},
    {label:"My Job Post", link:"/job-portal/dashboard/company-dashboard/jobPost", active:"postjob", activemenu:"postjob", icon: <BookmarkBorderOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Submit Job Post", link:"/job-portal/dashboard/company-dashboard/submitJob", active:"submitjob", activemenu:"submitjob", icon: <SchoolOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Messages", link:"/job-portal/dashboard/company-dashboard/companyMessages", active:"message", activemenu:"message", icon: <EmailOutlinedIcon sx={{ color: 'white' }} />},
    {label:"MemberShip", link:"/job-portal/dashboard/company-dashboard/Membership", active:"member", activemenu:"member", icon: <WorkOutlineOutlinedIcon sx={{ color: 'white' }} />},
    {label:"Account Setting", link:"/job-portal/dashboard/company-dashboard/accountSettings", active:"setting", activemenu:"setting", icon: <SettingsRoundedIcon sx={{ color: 'white' }} />},
]

export default CompanyDashboardLink;