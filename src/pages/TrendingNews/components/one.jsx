import React from "react";
import { Box, Typography } from '@mui/material';


const One = ({oneData}) => {
    const { text,  questions } = oneData;

    return (
        <Box>
            <Box>
                <Typography sx={{
                    marginTop: 4, color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'
                }}>
                    {text}
                </Typography>
            </Box>
            {questions.map((qna, index) => (
                <Box key={index}>
                    <Box>
                        <Typography sx=
                            {{ marginTop: 4.5, color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>
                            {qna.question}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx=
                            {{ marginTop: 2, color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>
                            {qna.answer}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default One;
