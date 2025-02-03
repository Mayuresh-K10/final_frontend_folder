import React, { useState } from "react";
import { Card, Box, Typography, Button, FormControl, Pagination, InputLabel, Select, MenuItem } from "@mui/material";
import { Link } from 'react-router-dom';
import { useBookmarks } from '../Context/BookmarkContext';


const JobSaved = ({ savedJobs = [], onDelete }) => {
  const [sortby, setSortby] = React.useState('');
  const [sortAction] = React.useState([
    { value: 1, sortBy: 'New' },
    { value: 2, sortBy: 'Category' },
    { value: 3, sortBy: 'Job type' },
  ]);

  const handleSortbyChange = (e) => {
    setSortby(e.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDropClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (jobId) => {
    if (typeof onDelete === 'function') {
      onDelete(jobId);
    } else {
      console.error('onDelete is not a function');
    }
  };
  const { bookmarkedJobs, removeBookmark } = useBookmarks() || {};

  return (
    <Box sx={{
      width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
      '@media(max-width:1300px)': { borderTopLeftRadius: '0px' }
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
        '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
      }}>
        <Box
          sx={{
            borderRadius: '50px', backgroundColor: '#313893', width: '100%', height: 'auto'
          }}>
          <Card
            sx={{
              borderRadius: '50px', backgroundColor: 'white', padding: '20px',
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
              <h4 style={{ color: '#313893' }}>Saved Jobs</h4>
              <Box sx={{ minWidth: 120, marginTop: "25px" }} className="dash-input-wrapper mb-25">
                <FormControl fullWidth>
                  <InputLabel id="sortby-select-label">Sort By:</InputLabel>
                  <Select
                    labelId="sortby-select-label"
                    id="sortby-select"
                    value={sortby}
                    label="Sort By"
                    onChange={handleSortbyChange}
                  >
                    <MenuItem value="latest">Latest</MenuItem>
                    <MenuItem value="oldest">Oldest</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default JobSaved;
