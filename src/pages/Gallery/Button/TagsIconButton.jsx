import { Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function TagsIconButton({buttonName,onclick}){
  const [flag, setFlag] = useState(false);
  function handleClick(e){
    e.stopPropagation();
    setFlag(!flag);
    onclick();
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
    <Button variant='contained'  onClick={handleClick} size="small" endIcon={flag? <ExpandLessIcon/>:<ExpandMoreIcon/>} sx={{
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
      {buttonName}</Button>
);
}

export default TagsIconButton;