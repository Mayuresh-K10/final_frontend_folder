import { Box, Button, Typography } from '@mui/material';
import React from "react";
import Notification from './Notification';


const Side = () => {

    return (
        <Box>
            <Button style={{ marginTop: 28, width: 400, height: 54, padding: 10, background: '#7B90FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                <Typography style={{ color: 'white', fontSize: 17, fontFamily: 'Inter', fontWeight: '700', textTransform: 'capitalize', lineHeight: 44, wordWrap: 'break-word' }}>Apply Now</Typography>
            </Button>
            <Button style={{ marginTop: 10, marginBottom: '-10px', width: 400, height: 54, padding: 10, background: '#FF7900', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                <Typography style={{ color: 'white', fontSize: 17, fontFamily: 'Inter', fontWeight: '700', textTransform: 'capitalize', lineHeight: 44, wordWrap: 'break-word' }}>Ask A Question </Typography>
            </Button>
            <Notification />
        </Box>

    )
}
export default Side;
