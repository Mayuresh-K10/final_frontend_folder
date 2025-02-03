import { Box, Button, Divider, TextField } from '@mui/material';
import React from 'react';


const Comments = () => {

  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          width: "100%",
          height: 300,
          position: 'relative',
          background: 'white',
          boxShadow: '0px 4px 40px rgba(123, 144, 255, 0.10)',
          borderRadius: 8,
        }}>
        <Box sx={{ marginTop: 4, marginX: "auto", width: "100%" }}>
          <Box
            sx={{
              marginTop: '14px',
              paddingTop: 2,
              width: '100%',
              color: '#210366',
              fontSize: 20,
              fontWeight: '700',
              wordWrap: 'break-word',
              marginLeft: 2,
            }}>Comments</Box>
          <Divider sx={{ paddingTop: 2, marginBottom: "2rem", marginRight: "2rem" }} />
          <Box >
            <TextField
              id="standard-multiline-static"
              label=""
              multiline
              rows={4}
              placeholder='Write Your Comment'
              InputProps={{ style: { borderRadius: "30px", border: '1.50px #7B90FF solid' } }}
              style={{
                paddingLeft: 10,
                backgroundColor: 'white',
                width: "90%",
                height: 116,
                label: '23px',
                outline: "none"
              }}
            />
          </Box>
          <Box>
            <Button type="submit" style={{ background: '#FF7900', color: "white", borderRadius: 12, textTransform: 'none', marginTop: "1rem", marginLeft: "2rem" }} >Login to Add Comment</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Comments;