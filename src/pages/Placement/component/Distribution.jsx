import { Box, Container } from '@mui/material'
import img2 from "./img2.svg"
import img3 from "./img2.svg"
import React from 'react'

const Distribution = () => {
    return (
        <>
            <Container>
                <Box sx={{
                    width: "1269px",
                    height: "1052px",
                    top: "24319px",
                    gap: "40px",
                    marginTop: "40px"
                }}>
                    <img src={img2} alt='image' />

                </Box>

                <Box sx={{
                    width: "1272px",
                    height: "1171px",

                    padding: "10px 0px 10px 0px",
                    borderRadius: "28px",
                    gap: "40px",
                    marginTop: "40px"

                }}>
                <img src={img3} alt='image' />


                </Box>
            </Container>
        </>
    )
}

export default Distribution