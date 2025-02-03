import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import FoundingCollege from '../../components/Cards/FoundingCollegeCard';
import { FCCard } from './Data';
import College from "../../components/Buttons/FoundCollege";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import SearchButton from "../../components/Buttons/SearchButton";

const FoundColleges = () => {
  const results = [
    {
        label: "IIT",
        link: "#",
    },
    {
        label: "IIIT",
        link: "#",
    },
    {
        label: "IIM",
        link: "#",
    },
    {
        label: "NIT",
        link: "#",
    },
  ];

  return (
    <>
      <Box sx={{marginTop: '20px'}}>
        <Box sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        margin: "0px",
        justifyContent: "space-between",
        }}>
        <Box sx={{
            display: 'flex',
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '700',
            fontSize: '30px',
            color: '#41355D'
        }}>
            <Typography variant='inherit'>Found 19030 Colleges</Typography>
            <Box
                sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                }}
            >
            {results.map((result, index) => (
                <College key={index} dt={result.label} link={result.link} />
            ))}
            </Box>
        </Box>
        <Box
            sx={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            }}
        >
            <SearchButton />
            <ViewMoreButton />
        </Box>
        </Box>
        <Stack direction='column' flexWrap='wrap' justifyContent="center"
        alignItems="center" >
            {FCCard.map((val,index)=>{
                return(
                    <FoundingCollege
                    key={index}
                    id={val.id}
                    img={val.img}
                    heading={val.heading}
                    subheading={val.subheading}
                    btn1={val.btn1}
                    btn2={val.btn2}
                    btn3={val.btn3}
                    body1={val.body1}
                    body2={val.body2}
                    brochure={val.brochure}
                    enquire={val.enquire}
                    rating={val.rating}
                    />
                );
            })}
        </Stack>
      </Box>
    </>
  )
}

export default FoundColleges;
