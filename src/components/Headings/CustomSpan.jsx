import { Typography } from '@mui/material'
import React from 'react'

const CustomSpan = ({ children, onClick, color, bgColor }) => {
    return (
        <Typography variant="p" sx={{
            color: color || '#210366',
            fontFamily: 'Poppins',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '0.89375rem',
            textTransform: 'uppercase',
            display: "inline-flex",
            gap: "0.5rem",
            alignItems: "center"
        }} onCLick={onClick}>
            {children}
        </Typography>
    )
}

export default CustomSpan
