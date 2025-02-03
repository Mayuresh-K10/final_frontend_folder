import React from 'react';
import Img7 from './images/Img7.png';
import Img8 from './images/Img8.png';
import Img9 from './images/Img9.png';
import Img10 from './images/Img10.png';
import Img11 from './images/Img11.png';
import Img12 from './images/Img12.png';
import Img13 from './images/Img13.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const MainHeadData=[
    {
        id:1,
        typo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
      
    },
]
const Paragraphs=[
    {
        id:1,
        typo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
      
    },
    {
        id:2,
        typo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
    }
]
const Dates=[
    {
        id:1,
        dates:"26 april, 2023",
        typo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa "
    },
    {
        id:2,
        dates:"25 april, 2023",
        typo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa "
    },
    {
        id:3,
        dates:"22 april, 2023",
        typo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa "
    }
]

const Persondata = [
    {
        id:1,
        name:"Epil Gargi",
        date:"Apr 25, 2023",
        pic:Img7
    }
]

const HostelNotificationData = [
    {
        id: 1,
        img: Img7,
        src: "",
        name: "TAPMI Manipal is inviting application for admission in PhD Program. In Management for the academic year 2023-24; Apply till May 01 ...Read More",
        date: "April 17, 2023",
    },
    {
        id: 2,
        img: Img8,
        src: "",
        name: "Kristu Jayanti College is inviting application for admission in UG, PG & LLB Programs for the academic year 2023-24; Check Details Here ...Read More",
        date: "Mar 29, 2023",
    },
    {
        id: 3,
        img: Img9,
        src: "NIT Surathkal MBA Admission 2023-25 Open; Apply till May 10",
        name: "NIT Surathkal is inviting application for admission in MBA program for the academic year 2023-25; Apply till May 10 ...Read More",
        date: "Mar 27, 2023",
    },
    {
        id: 4,
        img: Img10,
        src: "",
        name: "SIBM Bangalore is inviting application for admission in EMBA program for the academic year 2023-24; Apply till May 15 ...Read More",
        date: "Mar 25, 2023",
    },
]

const HostelNewsData = [
    {
        id: 1,
        img: Img11,
        name: "IIM Bangalore to Introduce the TCI IIMB Supply Chain Sustainability Lab",
        date: "1 Day Ago"
    },
    {
        id: 2,
        img: Img12,
        name: "Two IIM Bangalore PGP Students Earn NTU India Connect Fellowships",
        date: "3 Days Ago"
    },
    {
        id: 3,
        img: Img13,
        name: "IIM Bangalore to Host XVIII International Conference on Public Policy and Management",
        date: "1 Week Ago"
    },
]

const HostelDetailsData = [
    {
        id: 1,
        heading: "IIM Bangalore Hostels Salient Features",
        content: "Basic facilities like a stable WiFi, Cafeteria and Mess, Bank / ATM etc. form an inseparable part of IIM Bangalore Hostels. Some of the salient features at IIM Bangalore Hostels are as follows:-",
        link: ""
    },
    {
        id: 2,
        heading: "IIM Bangalore Hostel Rooms",
        content: "The rooms at IIM Bangalore Hostels are well lit and furnished with bed, table, chair, cupboard etc. for a luxurious living.",
        link: "IIM Bangalore Faculty"
    },
    {
        id: 3,
        heading: "Stable Wi-Fi Connectivity",
        content: "A stable Wi-Fi connection is available for students to access the internet and online facilities for learning and entertainment.",
        link: ""
    },
    {
        id: 4,
        heading: "Mess and Cafeteria",
        content: "A well maintained mess for providing regular meals to students while at IIM Bangalore Hostels. A cafeteria for hosting all time snacks, parties and events among peer groups is an added bonus.",
        link: ""
    },
    {
        id: 5,
        heading: "LAN Connection",
        content: "Students living at IIM Bangalore Hostels have access to fully functional LAN and intercom connection which connects the different blocks within the campus.",
        link: "IIM Bangalore Admissions 2023"
    },
    {
        id: 6,
        heading: "Medical Facility / Hospital",
        content: "IIM Bangalore Hostels inhibit Medical facilities through a hospital established within the campus. There are medical insurance facilities available for the health security of students.",
        link: ""
    },
    {
        id: 7,
        heading: "Bank / ATMs",
        content: "IIM Bangalore campus has suitable facilities for students, allowing them to make easy transactions and money transfers through Banks and ATMs within IIM Bangalore Hostels.",
        link: ""
    },
    {
        id: 8,
        heading: "Fully Automatic Washing Machines",
        content: "Fully automated machines for students are available to manage hygiene of their clothes as a part of their day-to-day routine.",
        link: ""
    },
    {
        id: 9,
        heading: "Music Room & Recreation Room",
        content: "The students have access to recreation and music rooms common for all to enjoy get-togethers, informal discussions and hosting parties etc.",
        link: ""
    },
    {
        id: 10,
        heading: "Laundry & Ironing Services",
        content: "To save time and avoid any accidents, students have the facility to use the laundry and ironing services led by the housekeeping staff at IIM Bangalore Hostels.",
        link: ""
    },
    {
        id: 11,
        heading: "Sports",
        content: "There are ample sports facilities for students to relish and build up their skills like Basketball, Badminton, etc. For more details click here IIM Bangalore Cutoff.",
        link: ""
    },
    {
        id: 12,
        heading: "Gymnasium",
        content: "A well maintained gymnasium for the fitness freaks is available with all sorts of equipment.",
        link: ""
    },
    {
        id: 13,
        heading: "Fully Functional Library",
        content: "A fully functional library is available for students access to the various online databases to study along with books, journals etc.",
        link: ""
    },
    {
        id: 14,
        heading: "Guest Room/ Waiting Rooms",
        content: "Guest cum waiting rooms are available for the visitors visiting IIM Bangalore Hostels and campus. The rooms are equally facilitated to ensure a comfortable stay.",
        link: "IIM Bangalore Reviews"
    },
    {
        id: 15,
        heading: "Parking Space",
        content: "Proper parking spaces for students with vehicles is also an added merit at IIM Bangalore Hostel.",
        link: ""
    },
]

const HostelFacultiesData = [
    {
        id: 1,
        heading: "Prof. Rajalaxmi Kamath",
        content: "Professor, Department of Centre for Public Policy"
    },
    {
        id: 2,
        heading: "Prof. Deepak Malghan",
        content: "Professor, Department of Centre for Public Policy"
    },
    {
        id: 3,
        heading: "Prof. Shabana Mitra",
        content: "Professor, Department of Centre for Public Policy"
    },
]

const HostelLearnCoursesData = [
    {
        id: 1,
        course: "PGPM",
        icon: <ChevronRightIcon />
    },
    {
        id: 2,
        course: "Ph.D Finance & Accounts",
        icon: <ChevronRightIcon />
    },
    {
        id: 3,
        course: "Ph.D Marketing",
        icon: <ChevronRightIcon />
    },
    {
        id: 4,
        course: "Ph.D Economics",
        icon: <ChevronRightIcon />
    },
    {
        id: 5,
        course: "Ph.D Strategy",
        icon: <ChevronRightIcon />
    },
]

export {Persondata,HostelNotificationData, HostelNewsData, HostelDetailsData, HostelFacultiesData, HostelLearnCoursesData, MainHeadData, Dates, Paragraphs};