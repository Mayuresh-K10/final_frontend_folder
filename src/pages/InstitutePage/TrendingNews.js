import React from 'react';
import img1 from './image-trendingNews/img1.png';
import img2 from './image-trendingNews/img2.png';
import img3 from './image-trendingNews/img3.png';
import img4 from './image-trendingNews/img4.png';
import imgTop from "./image-trendingNews/imgTop.png"
import imgTop2 from "./image-trendingNews/imgTop2.png"

import myLogo1 from './image-trendingNews/myLogo1.png';
import myLogo2 from './image-trendingNews/myLogo2.png';
import myLogo3 from './image-trendingNews/myLogo3.png';



const topData = {
    imgTop: imgTop,
    imgTop2: imgTop2,
    author: 'Akanksha Singh',
    updatedOn: 'June 9th, 2023 05:30 AM IST'
};

const OneData = {
    text: "Mr. Rajesh Kumar is the HOD Academics at KMS College of IT and Management and is a Research Scholar at present. He has done B.com, M.Sc (IT), M.tech (IT), MCP, DISM, Pursuing Ph.D and has over 15 years of experience in teaching.",
    //image: oneImage,
    questions: [
        {
            "question": "Being a Faculty of the KMS College, what are your roles and responsibilities towards the students?",
            "answer": "Being a faculty of the college, my roles and responsibilities include completing the syllabus within the stipulated time, reporting to the class on time, utilizing classroom assessment techniques, developing test questions in consultation with the course coordinator Evaluates tests (if appropriate, based on the type of test), Prepares and executes Lesson Plan, Completing syllabus within the stipulated time, Maintain attendance record of students, Provides information about job opportunities in their respective field to placement cell, Guide students on career opportunities and Maintain teachers’ handbook."
        },
        {
            "question": "How do you tend to establish healthy relations with the students and fellow faculty?",
            "answer": "I maintain a healthy relationship with the students by Knowing their story, Talking to students (in class and outside of class), explicitly valuing the child over the content, Playing games with them, setting them up for success and assuming the best in every student. With fellow faculty members, I maintain healthy relations by Showing Courtesy and Respect, following the Demonstrate Initiative and updating teachers on Your Plans and Goals."
        }
    ]
}

const partsData = [
    {
        "image": myLogo1,
        "heading": "Lovely Professional University",
        "Description": "India's Top Ranked University with Best Placements | 3 Cr Highest Package",
        "SubDes": "Admissions Open for 2023"
    },
    {
        "image": myLogo2,
        "heading": "Welingkar Institute of Management Development",
        "Description": "1st Ranked Private B-School in Mumbai",
        "SubDes": "Admissions Open for AY 2023-25"
    },
    {
        "image": myLogo3,
        "heading": "Collegecue Review Rewards",
        "Description": "Write a Review & Earn Up To",
        "SubDes": "₹500"
    }
]

const contentsData = [
    {
        heading: 'How do you try to bring in a practical approach towards subjects and make it industry oriented?',
        Description: ['I try to bring in a practical approach by making my students visit various sites related to subjects, Giving presentations and video demonstrations, Giving hand-on experiences, By combining theory approaches with practical and Providing projects and case studies.', <br />, 'Check KMS College Of IT And Management Courses & Fees']

    },

    {
        heading: 'How do you strategize the curriculum and how often it gets updated to make it beneficial for the students?',
        Description: 'I focus on the students rather than on creating the best lesson plan. The ultimate goal should be to do what’s best for the learners. I also make sure to Talk to other experts, teachers, etc., from the industry and consider their inputs and Make use of technology to design the curriculum. I Avoid pre-packaged curriculum and make sure that the curriculum needs to be tailor made for the intended outcome.',

    },
    {
        heading: 'How do you help your student to cope up with the competition being so high in the outside world?',
        Description: "I help my students by the following ways: Accentuate the positive, Set expectations and consequences, Introduce competition, Introduce collaboration, Connect to their world, Plug into technology, Get parents involved, and Get students involved.",

    },
    {
        heading: 'Do you have any extracurricular activities/ programs to enhance the skills of the students or expose them to real world challenges?',
        Description: 'Yes we have some extracurricular activities and programs. Some sports/ games, annual programs, fashion shows, farewell parties, freshers introductions etc. so that students can release their stress and enjoy free time in college. To enhance the skills of the students we organize the different activities like workshops/ seminars/guest lectures/ field trips/industry/quiz contests/ training etc.',

    },
    {
        heading: 'What are the challenges you faced/ are facing to uplift the quality of education of your department?',
        Description: 'The challenge may be to manage equity and diversity in a technology-mediated market framework of expansion; The curriculum relevance, quality of learning and employment outcomes will continue to be a challenge. Several initiatives and heavy investments made in Internationalisation create challenges.',
    },
    {
        heading: 'When you came to college, what was your vision and how are you trying to achieve the same?',
        Description: 'I always come on time to the college, I always maintain my punctuality. My vision is to be an honest, empathetic and impactful teacher and to be recognized internationally within my organization. I am committed to growing as a teacher and delivering value-added projects to the students. My mission is to create and lead a dream organization where everyone is playing to their strengths.',
    },
    {
        heading: 'How does the curriculum of your department/college ensure the best practice of the industry?',
        Description: 'The curriculum of our college is the best in ways including Preparation of Timetable: Class wise, Laboratory-wise, Class room-wise and Individual, Preparation of Schedule of Instruction (Teaching Plan), Attendance Monitoring: (Course-wise, Class-wise, Percentage-wise), Syllabus coverage Monitoring, Continuous Assessment, Internal Examination schedule, result analysis, Upload of tech talk, concept video, open ended experiments, assignments, question bank, definitions and terminology, e-learning/Early Learning Readiness Video lectures, lecture notes, powerpoint presentations, class handouts.',
    },
    {
        heading: 'What are the interventions and approaches you bring in apart from curriculum to train/teach the students?',
        Description: 'Some of the interventions include Behavioural Interventions, Collaborative Interventions, One-to-One Interventions, Classroom-Based Interventions, Social, Emotional and Wellbeing Interventions, Peer Tutoring and Metacognition and Self-Regulation Homework.',
    },
    {
        heading: 'What valuable advice would you like to the students for them to have a prosperous career ahead?',
        Description: 'I advise students to Seek internship opportunities, Consider taking part in a work-study program, Grow your skills and knowledge, Get an early start, Keep your skills up-to-date, Stay focused, Find a balance with your personal life.',
    },

]

const HostelNotificationData = [
    {
        id: 1,
        img: img1,
        src: "",
        name: "TAPMI Manipal is inviting application for admission in PhD Program. In Management for the academic year 2023-24; Apply till May 01 ...Read More",
        date: "April 17, 2023",
    },
    {
        id: 2,
        img: img2,
        src: "",
        name: "Kristu Jayanti College is inviting application for admission in UG, PG & LLB Programs for the academic year 2023-24; Check Details Here ...Read More",
        date: "Mar 29, 2023",
    },
    {
        id: 3,
        img: img3,
        src: "NIT Surathkal MBA Admission 2023-25 Open; Apply till May 10",
        name: "NIT Surathkal is inviting application for admission in MBA program for the academic year 2023-25; Apply till May 10 ...Read More",
        date: "Mar 27, 2023",
    },
    {
        id: 4,
        img: img4,
        src: "",
        name: "SIBM Bangalore is inviting application for admission in EMBA program for the academic year 2023-24; Apply till May 15 ...Read More",
        date: "Mar 25, 2023",
    },
]
export { HostelNotificationData, topData, OneData, partsData, contentsData };