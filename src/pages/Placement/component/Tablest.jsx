import { Table, TableContainer, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'


const Tablest = () => {
  return (
    <>
      <TableContainer>
      <Table>
        <Box sx={{
          width: "100%",
          height: "1521px",
          top: "3166px",
          marginTop: "40px",
          marginLeft: "186px",
          padding: "20px 0px 20px 3px",
          borderRadius: "28px",
          background: "#EEECFE",
        }}>
          <Box sx={{
            display: "flex"
          }}>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "336.4147033691406px",
              height: " 64px",
              top: "20px",
              left: "3px",
              background: "#7B90FF",
            }}>
              <Typography sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "111.49189758300781px",
                height: "26px",

                top: "45px",
                left: "128px",
                fontFamily: "Poppins",
                fontSize: " 20px",
                fontWeight: 700,
                lineHeight: "26px",
                letterSpacing: " 0em",
                color: "#FFFFFF",

              }}>
                Batch
              </Typography>
            </Box>

            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "335.4451904296875px",
              height: "64px",
              top: "20px",
              left: "339.4150390625px",
              background: "#210366"
            }}>
              <Typography sx={{

                fontFamily: "Poppins",
                fontSize: " 20px",
                fontWeight: 700,
                lineHeight: "26px",
                letterSpacing: " 0em",
                textAlign: "center",
                color: "#FFFFFF",
              }}>
                Placement Statistics <br />(2021-23)
              </Typography>

            </Box>

            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "336.4147033691406px",
              height: "64px",
              top: "20px",
              left: "674.85986328125px",
              background: "#210366"

            }}>
              <Typography sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "26px",
                letterSpacing: " 0em",
                textAlign: "center",
                color: "#FFFFFF",
              }}>Placement Statistics (2021-22)

              </Typography>
            </Box>
          </Box>

        </Box>
        </Table>
      </TableContainer>
    </>
  )
}

export default Tablest