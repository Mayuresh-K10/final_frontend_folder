import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Chip,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Sample data for multiple courses
const bscCourses = [
    {
        id: 1,
        title: "Bachelor of Science [B.Sc] (Statistics)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 471,
    },
    {
        id: 2,
        title: "Bachelor of Science [B.Sc] (Mathematics)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 320,
    },
    {
        id: 3,
        title: "Bachelor of Science [B.Sc] (Physics)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 289,
    },
    {
        id: 4,
        title: "Bachelor of Science [B.Sc] (Chemistry)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 402,
    },
    {
        id: 5,
        title: "Bachelor of Science [B.Sc] (Biology)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 350,
    },
    {
        id: 6,
        title: "Bachelor of Science [B.Sc] (Computer Science)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 278,
    },
    {
        id: 7,
        title: "Bachelor of Science [B.Sc] (Botany)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 180,
    },
    {
        id: 8,
        title: "Bachelor of Science [B.Sc] (Zoology)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 199,
    },
    {
        id: 9,
        title: "Bachelor of Science [B.Sc] (Geology)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 150,
    },
    {
        id: 10,
        title: "Bachelor of Science [B.Sc] (Environmental Science)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 132,
    },
    {
        id: 11,
        title: "Bachelor of Science [B.Sc] (Microbiology)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 210,
    },
    {
        id: 12,
        title: "Bachelor of Science [B.Sc] (Biotechnology)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 260,
    },
    {
        id: 13,
        title: "Bachelor of Science [B.Sc] (Agriculture)",
        duration: "4 Years",
        type: "Full Time",
        colleges: 340,
    },
    {
        id: 14,
        title: "Bachelor of Science [B.Sc] (Horticulture)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 180,
    },
    {
        id: 15,
        title: "Bachelor of Science [B.Sc] (Forestry)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 120,
    },
    {
        id: 16,
        title: "Bachelor of Science [B.Sc] (Home Science)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 250,
    },
    {
        id: 17,
        title: "Bachelor of Science [B.Sc] (Nutrition)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 220,
    },
    {
        id: 18,
        title: "Bachelor of Science [B.Sc] (Food Technology)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 170,
    },
    {
        id: 19,
        title: "Bachelor of Science [B.Sc] (Textile)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 110,
    },
    {
        id: 20,
        title: "Bachelor of Science [B.Sc] (Marine Science)",
        duration: "3 Years",
        type: "Full Time",
        colleges: 90,
    },
];

// Styled Components
const Container = styled("div")(({ theme }) => ({
    padding: 20,
    backgroundColor: "#f9f9f9",
}));

const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative",
    borderRadius: "8px",
    border: "1px solid #ddd",
    transition: "box-shadow 0.3s",
    "&:hover": {
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
}));

const AdPlaceholder = styled("div")(({ theme }) => ({
    height: 100,
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    color: "#666",
    border: "1px dashed #ccc",
    borderRadius: "8px",
}));

function CoursesList() {
    return (
        <Container>
            <Grid container spacing={3}>
                {bscCourses.map((course, index) => (
                    <React.Fragment key={course.id}>
                        <Grid item xs={12} sm={6} md={4}>
                            <StyledCard>
                                <CardContent>
                                    <Typography variant="h6">
                                        {course.title}
                                    </Typography>
                                    <Grid
                                        container
                                        spacing={1}
                                        alignItems="center"
                                        style={{ marginTop: 10 }}
                                    >
                                        <Grid item>
                                            <Chip
                                                icon={<AccessTime />}
                                                label={course.duration}
                                                size="small"
                                                style={{
                                                    backgroundColor: "#e0f7fa",
                                                    marginRight: 8,
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Chip
                                                label={course.type}
                                                size="small"
                                                style={{
                                                    backgroundColor: "#ffecb3",
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Button
                                        variant="contained"
                                        color="warning"
                                        style={{ marginTop: 20 }}
                                    >
                                        <Link to="/login">Apply Now</Link>
                                    </Button>
                                    <Typography
                                        style={{
                                            position: "absolute",
                                            top: 2,
                                            right: 5,
                                            color: "#ff6f00",
                                            fontWeight: "bold",
                                            fontSize: "15px",
                                        }}
                                    >
                                        {course.colleges} Colleges
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                        {(index + 1) % 4 === 0 && (
                            <Grid item xs={12}>
                                <AdPlaceholder>
                                    Advertisement Space
                                </AdPlaceholder>
                            </Grid>
                        )}
                    </React.Fragment>
                ))}
            </Grid>
        </Container>
    );
}

export default CoursesList;

// import React from 'react';
// import { Card, CardContent, Typography, Button, Grid, Chip } from '@mui/material';
// import { School, AccessTime } from '@mui/icons-material';

// // Sample data for multiple courses
// const bscCourses = [
//   { id: 1, title: "Bachelor of Science [B.Sc] (Statistics)", duration: "3 Years", type: "Full Time", colleges: 471 },
//   { id: 2, title: "Bachelor of Science [B.Sc] (Mathematics)", duration: "3 Years", type: "Full Time", colleges: 320 },
//   { id: 3, title: "Bachelor of Science [B.Sc] (Physics)", duration: "3 Years", type: "Full Time", colleges: 289 },
//   { id: 4, title: "Bachelor of Science [B.Sc] (Chemistry)", duration: "3 Years", type: "Full Time", colleges: 402 },
//   { id: 5, title: "Bachelor of Science [B.Sc] (Biology)", duration: "3 Years", type: "Full Time", colleges: 350 },
//   { id: 6, title: "Bachelor of Science [B.Sc] (Computer Science)", duration: "3 Years", type: "Full Time", colleges: 278 },
//   { id: 7, title: "Bachelor of Science [B.Sc] (Botany)", duration: "3 Years", type: "Full Time", colleges: 180 },
//   { id: 8, title: "Bachelor of Science [B.Sc] (Zoology)", duration: "3 Years", type: "Full Time", colleges: 199 },
//   { id: 9, title: "Bachelor of Science [B.Sc] (Geology)", duration: "3 Years", type: "Full Time", colleges: 150 },
//   { id: 10, title: "Bachelor of Science [B.Sc] (Environmental Science)", duration: "3 Years", type: "Full Time", colleges: 132 },
//   { id: 11, title: "Bachelor of Science [B.Sc] (Microbiology)", duration: "3 Years", type: "Full Time", colleges: 210 },
//   { id: 12, title: "Bachelor of Science [B.Sc] (Biotechnology)", duration: "3 Years", type: "Full Time", colleges: 260 },
//   { id: 13, title: "Bachelor of Science [B.Sc] (Agriculture)", duration: "4 Years", type: "Full Time", colleges: 340 },
//   { id: 14, title: "Bachelor of Science [B.Sc] (Horticulture)", duration: "3 Years", type: "Full Time", colleges: 180 },
//   { id: 15, title: "Bachelor of Science [B.Sc] (Forestry)", duration: "3 Years", type: "Full Time", colleges: 120 },
//   { id: 16, title: "Bachelor of Science [B.Sc] (Home Science)", duration: "3 Years", type: "Full Time", colleges: 250 },
//   { id: 17, title: "Bachelor of Science [B.Sc] (Nutrition)", duration: "3 Years", type: "Full Time", colleges: 220 },
//   { id: 18, title: "Bachelor of Science [B.Sc] (Food Technology)", duration: "3 Years", type: "Full Time", colleges: 170 },
//   { id: 19, title: "Bachelor of Science [B.Sc] (Textile)", duration: "3 Years", type: "Full Time", colleges: 110 },
//   { id: 20, title: "Bachelor of Science [B.Sc] (Marine Science)", duration: "3 Years", type: "Full Time", colleges: 90 },
// ];

// function CoursesList() {
//   return (
//     <div style={{ padding: 20 }}>
//       <Grid container spacing={3}>
//         {bscCourses.map((course, index) => (
//           <>
//             <Grid item xs={12} sm={6} md={4} key={course.id}>
//               <Card variant="outlined" style={{ position: 'relative' }}>
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     {course.title}
//                   </Typography>
//                   <Grid container spacing={1} alignItems="center" style={{ marginTop: 10 }}>
//                     <Grid item>
//                       <Chip
//                         icon={<AccessTime />}
//                         label={course.duration}
//                         size="small"
//                         style={{ backgroundColor: "#e0f7fa" }}
//                       />
//                     </Grid>
//                     <Grid item>
//                       <Chip
//                         label={course.type}
//                         size="small"
//                         style={{ backgroundColor: "#ffecb3" }}
//                       />
//                     </Grid>
//                   </Grid>
//                   <Button variant="contained" color="warning" style={{ marginTop: 20 }}>
//                     Apply Now
//                   </Button>
//                   <Typography
//                     variant="subtitle1"
//                     style={{ position: 'absolute', top: 10, right: 10, color: '#ff6f00', fontWeight: 'bold' }}
//                   >
//                     {course.colleges} Colleges
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             {/* Insert an ad placeholder every 4 cards */}
//             {(index + 1) % 4 === 0 && (
//               <Grid item xs={12}>
//                 <div style={{
//                   height: 100,
//                   backgroundColor: '#f0f0f0',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '1.2rem',
//                   color: '#666',
//                   border: '1px dashed #ccc',
//                 }}>
//                   Advertisement Space
//                 </div>
//               </Grid>
//             )}
//           </>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default CoursesList;
