import { Stack,Box, Container } from '@mui/material'
import React from 'react'
import Placement from '../Placement';
import ApplySection from "../Right/ApplySection";


const Part = () => {
  return (
    <>
    <Stack 
    display={"flex"}
    flexDirection={"row"}
    >
      <Placement/>
      <ApplySection/>
    </Stack>
    </>
  )
}

export default Part