import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const RatingBox = ({ children }) => {
  return (
    <Typography sx={{
        textAlign: "center",
        height: "45px",
        width: "45px",
        borderRadius: "50px",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "700",
        color: "rgba(33, 3, 102, 1)",
        display: "flex",
        border: "1px solid rgba(0, 0, 0, 0.125)"
    }}>
      {children}
    </Typography>
  );
};

RatingBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RatingBox;
