import { Button } from '@mui/material'
import React from 'react'

const ViewMoreBtn = ({btnText}) => {
    return (
        <>
            <Button variant='text'
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '1rem',
                    textTransform: 'none',
                    fontWeight: '500',
                    letterSpacing: '0rem',
                    borderWidth: '4px',
                    borderRadius: '10px',
                    borderStyle: 'solid',
                    borderColor: '#7B90FF',
                    
                    color: '#41355D',
                    backgroundColor: 'white',
                    padding: '0.5rem 1.5em',
                    margin: '1rem', 
                    '&:hover': {
                        backgroundColor: '#7B90FF',
                        color: 'white',
                       
                    },
                    
                    
                }} >
                {btnText}
            </Button>
        </>
    )
}

export default ViewMoreBtn
