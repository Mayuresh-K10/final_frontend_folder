import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Button } from '@mui/material';

function LikeDislikeButton({check,num,onClick}){
function likeColor(){ 
        if(check)return "#7B90FF";
        else return "#FF7900";
};
    return (
<Button variant='contained' sx={{
            borderRadius:'1.3rem',
            textTransform: "none",
            borderColor:'#7B90FF',
            borderWidth:'0.2rem',
            borderStyle:'solid',
            justifyContent:'center',
            textAlign:'center',
            margin:'1rem',
            fontFamily:'Poppins',
            fontSize:'1.125rem',
            fontWeight:'400',
            lineHeight:'1.375rem',
            letterSpacing:'0rem',
            color: likeColor(),
            backgroundColor:'transparent',
            cursor:'pointer',
            '&:hover':{
              backgroundColor:'#7B90FF',
              color:'white'
            }
          }} 
        onClick={onClick}>
            {check? <ThumbUpIcon/> : <ThumbDownIcon/> } &nbsp; {num}
          </Button>
    );
}

export default LikeDislikeButton;