import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from '@mui/material';

export const Facul = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Typography
          sx={{
            paddingTop: '20px',
            paddingBottom: '4px',
            color: '#7B90FF',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '26px', /* 144.444% */
            textTransform: 'capitalize',
            marginLeft: '52px',
          }}
        >{post.name}</Typography>
        <Typography
          sx={{
            paddingTop: '1.8px',
            paddingBottom: '1.8px',
            color: '#FF7900',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '15.6px',
            textTransform: 'capitalize',
            marginLeft: '52px',
          }}
        >{post.designation}</Typography>
        <Typography
          sx={{
            paddingTop: '3.3px',
            paddingBottom: '3.3px',
            flexDirection: 'column',
            justifyContent: 'center',
            flexShrink: 0,
            color: '#210366',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20.6px',
            textTransform: 'capitalize',
            marginLeft: '52px',
          }}
        >{post.detail}</Typography>
      </Box>
    </motion.div>
  );
};
