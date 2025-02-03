import React from 'react'
import { Box, Typography } from '@mui/material'

const HeadText = ({ headText,justify}) => {
    return (
        <Box sx={{
            display:"flex",
            justifyContent:justify,
            width:"100%",
            paddingY:"1.5rem",
        }}>
            <Typography
                sx={{
                    fontSize: '2.4rem',
                    fontWeight: 700,
                    fontStyle : 'bold',
                    color: '#48639e',
                    textTransform:"uppercase",
                    wordWrap:"break-word"
                }}
            >
                {headText}
            </Typography>
        </Box>
    )
}

export default HeadText
