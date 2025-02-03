import React from 'react'
import { Box, Typography, Card, Stack } from "@mui/material";
import Button from '@mui/material/Button';

const Hdfc = () => {
  return (
    <>
     <Stack
     width={"85%"}
     display={"flex"}
     flexDirection={"row"}
    
     marginTop={2}
      >
        <Card
          style={{
            width: 248,
            height: 161,
            background: "white",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
            border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
            borderTopLeftRadius: 27,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 28,
          }}
        >
          <div
            style={{
              height: 32,
              background: "#E4E4E4",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                width: 170,
                textAlign: "center",
                color: "#210366",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "550",
                wordWrap: "break-word",
              }}
            >
              {" "}
              100% Paper Less Approved{" "}
            </Typography>
          </div>
            <img
                  style={{ width: 84, height: 35, marginTop: 20  }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
                  alt=""
                />

          <Typography
            sx={{
              textAlign: "center",
              color: "#210366",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "550",
              wordWrap: "break-word",
              marginTop: 3,
            }}
          >
            Historical Interest rates
          </Typography>
        </Card>

        <Card
          style={{
            width: 248,
            height: 161,
            background: "white",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
            border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
          }}
        >
          <Box
            style={{
              width: 140,
              height: 100,
              position: "relative",
              textAlign: "center",
              color: "#210366",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "550",
              wordWrap: "break-word",
              marginTop: 42,
              marginLeft: 6,
            }}
          >
            <div style={{ left: 4, top: 0 }}>Up to INR 7.50 Lacs:</div>
            <div style={{ left: 48, top: 33 }}>10.55%</div>
            <div style={{ left: 0, top: 66, marginTop: 20 }}>
              Above INR 7.50 Lacs:
            </div>
            <div style={{ left: 48, top: 99 }}>10.80%</div>
          </Box>
        </Card>
        <Card
          style={{
            width: 248,
            height: 161,
            background: "white",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
            border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              color: "#210366",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "550",
              wordWrap: "break-word",
              marginTop: 70,
            }}
          >
            15 years
          </Typography>
        </Card>
        <Card
          style={{
            width: 248,
            height: 161,
            background: "white",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
            border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#210366",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "550",
              lineHeight: 11.71,
              wordWrap: "break-word",
            }}
          >
            Student
          </div>
        </Card>
        <Card
          style={{
            width: 248,
            height: 161,
            background: "white",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
            border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
          }}
        >
          <div
            style={{
              width: 125,
              height: 84,
              position: "relative",
              textAlign: "center",
              color: "#210366",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
              marginTop:45,
              marginLeft:12,
            }}
          >
            <div style={{ left: 47, top: 33,}}>CSIS</div>
            <div style={{ left: 9, top: 0 ,  lineHeight: 3,}}>Padho Pardesh</div>
            <div style={{ left: 0, top: 60 , lineHeight: 1,}}>Skill Loan Scheme</div>
          </div>
        </Card>
        <Card
          sx={{
            width: 248,
            height: 161,
            background: "white",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
            border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
            alignItems:"center",
            
          }}
        >
          <Button variant="contained" sx={{width: 145, height: 35, background: '#FF7900', borderRadius: 10, marginTop:2, marginLeft:1}}>Details</Button>
          <Button variant="contained" sx={{width: 145, height: 35, background: '#FF7900', borderRadius: 10, marginTop:1, marginLeft:1}}>Compare</Button>
          <Button variant="contained" sx={{width: 145, height: 35, background: '#FF7900', borderRadius: 10, marginTop:1, marginLeft:1}}>Apply Now</Button>
          
        </Card>
      </Stack>
    </>
  )
}

export default Hdfc