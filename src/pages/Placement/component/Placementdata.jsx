import { Box,  Typography } from '@mui/material'
import React from 'react'

const Placementdata = () => {
  return (
    <>
            <Box sx={{
              width: "60%",
              height: "70px",
              borderRadius: "28px",
              border: "1px",
              border: "1px solid #210366",
              display: "flex",
              alignItems: "center",
              justifyContent:"space-evenly"
            }}>
              <Box sx={{
                width: "49px",
                height: "36px",
                borderRadius: "28px",
                border: "1px",
                // gap: "10px",
                border: "1px solid #FFFFFF",
                background: "linear-gradient(0deg,#FF7900,#FF7900)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Typography sx={{
                  fontFamily: "Inter",
                  fontSize: " 16px",
                  fontWeight: 500,
                  lineHeight: "16px",
                  letterSpacing: " 0em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}>164</Typography>
              </Box>
              <Box sx={{
                width: "289px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Typography sx={{

                }}>Number of Companies Participated

                </Typography>

              </Box>

            </Box>
    </>
  )
}

export default Placementdata