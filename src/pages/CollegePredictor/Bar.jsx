import {Box, Button, Stack } from '@mui/material'
import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import character1 from './Assets/character1.png'
import character2 from './Assets/character2.png'
import character3 from './Assets/character3.png'
import character4 from './Assets/character4.png'

const Bar = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <> 
    <Stack  
    display={"flex"}
    flexDirection={"row"}
    flexWrap={"wrap"}
    gap={"6rem"}
  >
    
         
      <Stack
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        
      sx={{
        width: "65%",background: '#F2F3F6', borderRadius:3,boxShadow:3,marginTop:"1.5rem",
        '@media (max-width:800px)': {
          width : '100%',
        },
        '@media (min-width:800px)': {
          width : '65%',
          height : 60,
        },
    }}>

        <Box sx={{
          display : 'flex',
          flexDirection : 'row',
          justifyContent : 'space-between',
          width : '90%',
          gap : '2vw',
          '@media (max-width:800px)': {
            display : 'flex',
            flexDirection : 'column',
            gap : '0',
          },
        }}>
         <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ width:"27%",height:30,background: 'white', borderRadius: 1, border: '1px #7B90FF solid',marginTop:"1rem",
          '@media (max-width:800px)': {
            width : '100%',
          },
          '@media (min-width:800px)': {
            width : '100%',
          },
        }}
        >
          <MenuItem value="">
            <em>Select Courses</em>
          </MenuItem>
          <MenuItem value={10}>Btech</MenuItem>
          <MenuItem value={20}>MBA</MenuItem>
          <MenuItem value={30}>MTech</MenuItem>
          <MenuItem value={50}>MCA</MenuItem>
          <MenuItem value={60}>BCA</MenuItem>
          <MenuItem value={70}>Bsc</MenuItem>
          <MenuItem value={80}>Msc</MenuItem>
          <MenuItem value={90}>BBA</MenuItem>
          <MenuItem value={100}>MBA</MenuItem>
        </Select>

        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ width:"27%", height:30,background: 'white', borderRadius: 1, border: '1px #7B90FF solid',marginTop:"1rem",
          '@media (max-width:800px)': {
            width : '100%',
          },
          '@media (min-width:800px)': {
            width : '100%',
          },
        }}
        >
          <MenuItem value="">
            <em>Select College</em>
          </MenuItem>
          <MenuItem value={10}>ABC college</MenuItem>
          <MenuItem value={20}>RD college</MenuItem>
          <MenuItem value={30}>MS College</MenuItem>
        </Select>

        <Button variant='contained' sx={{ width :"25%", height:30,background: '#FF7900',fontSize:12, borderRadius: 1,marginTop : '1rem',
        '@media (max-width:800px)': {
          width : '100%',
          marginBottom : '3vh',
        },
        '@media (min-width:800px)': {
          width : '100%',
        },
      }}> Find College</Button>
        </Box>
    </Stack>
        <Stack display={"flex"}
        flexDirection={"row"}
        gap={"0.7rem"}
>
            <img src={character1} alt="" style={{height:120}} />
            <img src={character2} alt="" style={{height:120}} />
            <img src={character3} alt="" style={{height:120}} />
            <img src={character4} alt="" style={{height:120}} />
        </Stack>
    </Stack>
    
    </>
  )
}

export default Bar