import React from "react";
import Img7 from "./images/Img7.png";
import Img8 from "./images/Img8.png";
import Img9 from "./images/Img9.png";
import Img10 from "./images/Img10.png";
import Img11 from "./images/Img11.png";
import Img12 from "./images/Img12.png";
import Img13 from "./images/Img13.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image1 from "./images/image 63.png";
import HostelImg from "./images/hostel.png";

export const name = "";

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
];

const HostelNewsData = [
  {
    id: 1,
    img: Img11,
    name: " to Introduce the TCI IIMB Supply Chain Sustainability Lab",
    date: "1 Day Ago",
  },
  {
    id: 2,
    img: Img12,
    name: "Two  PGP Students Earn NTU India Connect Fellowships",
    date: "3 Days Ago",
  },
  {
    id: 3,
    img: Img13,
    name: " to Host XVIII International Conference on Public Policy and Management",
    date: "1 Week Ago",
  },
];

const HostelDetailsData = [
  {
    id: 1,
    heading: " Hostels Salient Features",
    content:
      "Basic facilities like a stable WiFi, Cafeteria and Mess, Bank / ATM etc. form an inseparable part of  Hostels. Some of the salient features at  Hostels are as follows:-",
    link: "",
  },
  {
    id: 2,
    heading: " Hostel Rooms",
    content:
      "The rooms at  Hostels are well lit and furnished with bed, table, chair, cupboard etc. for a luxurious living.",
    link: "",
  },
  {
    id: 3,
    heading: "Stable Wi-Fi Connectivity",
    content:
      "A stable Wi-Fi connection is available for students to access the internet and online facilities for learning and entertainment.",
    link: "",
  },
  {
    id: 4,
    heading: "Mess and Cafeteria",
    content:
      "A well maintained mess for providing regular meals to students while at  Hostels. A cafeteria for hosting all time snacks, parties and events among peer groups is an added bonus.",
    link: "",
  },
  {
    id: 5,
    heading: "LAN Connection",
    content:
      "Students living at  Hostels have access to fully functional LAN and intercom connection which connects the different blocks within the campus.",
    link: "",
  },
  {
    id: 6,
    heading: "Medical Facility / Hospital",
    content:
      " Hostels inhibit Medical facilities through a hospital established within the campus. There are medical insurance facilities available for the health security of students.",
    link: "",
  },
  {
    id: 7,
    heading: "Bank / ATMs",
    content:
      " campus has suitable facilities for students, allowing them to make easy transactions and money transfers through Banks and ATMs within  Hostels.",
    link: "",
  },
  {
    id: 8,
    heading: "Fully Automatic Washing Machines",
    content:
      "Fully automated machines for students are available to manage hygiene of their clothes as a part of their day-to-day routine.",
    link: "",
  },
  {
    id: 9,
    heading: "Music Room & Recreation Room",
    content:
      "The students have access to recreation and music rooms common for all to enjoy get-togethers, informal discussions and hosting parties etc.",
    link: "",
  },
  {
    id: 10,
    heading: "Laundry & Ironing Services",
    content:
      "To save time and avoid any accidents, students have the facility to use the laundry and ironing services led by the housekeeping staff at  Hostels.",
    link: "",
  },
  {
    id: 11,
    heading: "Sports",
    content:
      "There are ample sports facilities for students to relish and build up their skills like Basketball, Badminton, etc. For more details click here  Cutoff.",
    link: "",
  },
  {
    id: 12,
    heading: "Gymnasium",
    content:
      "A well maintained gymnasium for the fitness freaks is available with all sorts of equipment.",
    link: "",
  },
  {
    id: 13,
    heading: "Fully Functional Library",
    content:
      "A fully functional library is available for students access to the various online databases to study along with books, journals etc.",
    link: "",
  },
  {
    id: 14,
    heading: "Guest Room/ Waiting Rooms",
    content:
      "Guest cum waiting rooms are available for the visitors visiting  Hostels and campus. The rooms are equally facilitated to ensure a comfortable stay.",
    link: "",
  },
  {
    id: 15,
    heading: "Parking Space",
    content:
      "Proper parking spaces for students with vehicles is also an added merit at  Hostel.",
    link: "",
  },
];

const HostelFacultiesData = [
  {
    id: 1,
    heading: "Prof. Rajalaxmi Kamath",
    content: "Professor, Department of Centre for Public Policy",
  },
  {
    id: 2,
    heading: "Prof. Deepak Malghan",
    content: "Professor, Department of Centre for Public Policy",
  },
  {
    id: 3,
    heading: "Prof. Shabana Mitra",
    content: "Professor, Department of Centre for Public Policy",
  },
];

const HostelLearnCoursesData = [
  {
    id: 1,
    course: "PGPM",
    icon: <ChevronRightIcon />,
  },
  {
    id: 2,
    course: "Ph.D Finance & Accounts",
    icon: <ChevronRightIcon />,
  },
  {
    id: 3,
    course: "Ph.D Marketing",
    icon: <ChevronRightIcon />,
  },
  {
    id: 4,
    course: "Ph.D Economics",
    icon: <ChevronRightIcon />,
  },
  {
    id: 5,
    course: "Ph.D Strategy",
    icon: <ChevronRightIcon />,
  },
];

export const hostelInfo = {
  pageTitle: "",
  fee: "₹80 k - ₹ 3.76 l",
  description: ` Hostel is a 5-minute walk from Institute.  Hostel consists of 10
    Hostel Blocks, 1 Executive Block and Executive Accommodation at Management Development Center (MDC). All the
    students of the institute are provided with Accommodation on Campus in a Well-appointed Single Room in the Hostels.
     Hostel fees is INR 80K for single student and INR 3.76 for family accommodation.  Hostel Fees
    may very depending on factors like room accupancy type-single or twin sharing, AC / Non-AC etc.`,
  image: Image1,
  tableOfContent: [
    " Hostels Fees Structure",
    " Hostels Details",
    " Hostels Salient Features",
  ],
};

export const Hostelfees = {
  title: " Hostel Fees Structure",
  description: "The details for  Hostels is as follows:-",
  tableData: [
    {
      title: "Hostel (dorm) Room Rent and Service",
      cost: "INR 20,000 per term",
    },
    { title: "Charge/term", cost: "Single Room Occupancy" },
    { title: "Students Mess (Veg Food)", cost: "INR 30,000 per month" },
  ],
  linkText: "To know more click here",
  linkDestination: "",
  image: HostelImg,
};

export const HostelDetail = [
  { component: "Hostel Blocks", availability: 10 },
  { component: "Executive Block", availability: 1 },
  { component: "Executive Accommodation Block - At MDC", availability: 1 },
];

export {
  HostelNotificationData,
  HostelNewsData,
  HostelDetailsData,
  HostelFacultiesData,
  HostelLearnCoursesData,
};
