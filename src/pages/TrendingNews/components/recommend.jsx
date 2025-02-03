import { Box, Typography } from '@mui/material';
import React from "react";


const data1 = [
    { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 },

]

const Recommend = () => {
    return (
        <Box sx={{ marginTop: 5, position: 'relative', background: 'white', boxShadow: '0px 4px 40px rgba(123, 144, 255, 0.10)', borderRadius: 7, overflow: 'hidden' }}>
            <Box sx={{
                marginTop: 4.5,
                textAlign: 'center', color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'
            }}>
                How likely are you to recommend collegecue to a friend or a colleague?
            </Box>
            <Box sx={{ marginTop: 3, marginLeft: 2, marginRight: 2, marginBottom: 3, display: 'flex', justifyContent: 'space-between' }}>
                <Box
                    sx={{ textAlign: 'center', color: '#333333', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
                    <Box
                        sx={{

                            width: 48, height: 18,
                            paddingTop: 2, paddingBottom: 2,
                            background: 'white', borderRadius: 24,
                            border: '0.50px #7B90FF solid',
                            justifyContent: 'center', alignItems: 'center',
                            display: 'inline-flex',
                        }}>
                        <Box sx={{ color: '#210366', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>1</Box>
                    </Box>
                    <Typography sx={{ marginTop: 1, textAlign: 'center', color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Not so likely</Typography>
                </Box>
                {data1.map((data) => {
                    return (
                        <Box
                            sx={{
                                width: 48, height: 18,
                                paddingTop: 2, paddingBottom: 2,
                                background: 'white', borderRadius: 24,
                                border: '0.50px #7B90FF solid',
                                justifyContent: 'center', alignItems: 'center',
                                display: 'inline-flex',
                            }}>
                            <Box sx={{ color: '#210366', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{data.number}</Box>
                        </Box>
                    )
                })
                }
                <Box
                    sx={{ textAlign: 'center', color: '#333333', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
                    <Box
                        sx={{
                            width: 48, height: 18,
                            paddingTop: 2, paddingBottom: 2,
                            background: 'white', borderRadius: 24,
                            border: '0.50px #7B90FF solid',
                            justifyContent: 'center', alignItems: 'center',
                            display: 'inline-flex',
                        }}>
                        <Box sx={{ color: '#210366', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>10</Box>
                    </Box>
                    <Typography sx={{ marginTop: 1, textAlign: 'center', color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}> Highly Likely</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Recommend;