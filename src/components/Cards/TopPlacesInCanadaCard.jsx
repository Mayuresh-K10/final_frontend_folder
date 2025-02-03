import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function TopPlacesInCanada({ props, country }) {
  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Link to={`/study-abroad/${country}/${props.place}`}>
        <Box
          sx={{
            marginTop: '20px',
            borderRadius: '12px',
            boxShadow: '0px 0px 40px 0px #7B90FF26',
            padding: '30px',
            width: '150px',
            height: '180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={props.img} alt="@Bharat_Tech" style={{ width: '80px', height: '70px' }} />
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '12px',
              color: '#210366',
              textAlign: 'center',
              marginTop: '1rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {props.place}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
