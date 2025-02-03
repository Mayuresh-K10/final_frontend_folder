import SortIcon from '@mui/icons-material/Sort';
import { Button, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function TwoIconButton({buttonName}){
    
  const [flag, setFlag] = useState(false);
  function handleClick(e){
    e.stopPropagation();
    setFlag(!flag);
  }

  function bgColor(){
  if(flag)return '#FF7900';
  else return '#7B90FF';
  }
  function inColor(){
    if(flag)return '#FF7900';
    else return '#210366';
    }
return(
    <Button variant='contained'  onClick={handleClick} size="small" startIcon={<SortIcon/>} endIcon={flag? <ExpandLessIcon/>:<ExpandMoreIcon/>} sx={{
        borderRadius:'0.5rem',
        textTransform: "none",
        borderColor:bgColor(),
        borderWidth:'0.2rem',
        borderStyle:'solid',
        fontSize:'0.75rem',
        justifyContent:'center',
        textAlign:'center',
        fontFamily:'Poppins',
        margin:"1rem",
        fontWeight:'500',
        lineHeight:'1.1375rem',
        letterSpacing:'0rem',
        color: inColor(),
        backgroundColor:'transparent',
        cursor:'pointer',
        '&:hover':{
          backgroundColor:bgColor(),
          color:'white'
        }
      }}> 
    
  <Typography sx={{
    fontSize:'0.75rem',
    fontFamily:'Poppins',
    fontWeight:'700',
    marginRight:'0.5rem'
  }}>
      {buttonName}
  </Typography>
     Relevance
      </Button>
);
}

export default TwoIconButton;
