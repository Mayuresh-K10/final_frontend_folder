import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";
function SaveAndNext(){
    return (<Box width="100%" display="flex" flexDirection="row" gap="1.5rem" marginTop="3rem" marginBottom="2rem" sx={{justifyContent:"space-between"}}>
    <Button  variant="contained" href="/stepseven"sx={{width:"250px",height:"45px", borderRadius:"12px", color:"white"}}>previous</Button>
    <Button  variant="contained" href="/stepeightone"sx={{width:"250px",height:"45px", borderRadius:"12px",bgcolor:"#FFA500", color:"white"}}>Skip and Continue</Button> 
    </Box>

    )
}
export default SaveAndNext