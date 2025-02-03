import React from "react";
import { Box} from '@mui/material';

const Content = ({ contentsData }) => {
    return (
        <>
            {contentsData.map((part, index) => {
                return (
                    <Box key={index}>
                        <Box sx={{
                            marginTop: 3.5, color: '#210366', fontSize: 20, fontWeight: '600', wordWrap: 'break-word'
                        }}>
                            {part.heading}
                        </Box>
                        <Box sx={{
                            marginTop: 2, color: '#210366', fontSize: 14, fontWeight: '400', wordWrap: 'break-word'
                        }}>
                            {part.Description}
                        </Box>
                    </Box>

                )
            }
            )
            }
        </>
    )
}
export default Content;