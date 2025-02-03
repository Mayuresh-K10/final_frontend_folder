import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import SimpleDropDown from './DropDown';  

const DropDownFilter = ({ onFilterChange }) => {
  const [scholarshipData, setScholarshipData] = useState([]);
  const [dropDownData, setDropDownData] = useState([]);

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const fetchScholarships = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/api/scholarships?populate=*`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setScholarshipData(response.data.data);
    } catch (error) {
      console.error('Error fetching scholarship data:', error);
    }
  },[authToken,url]);

  useEffect(() => { fetchScholarships(); }, [onFilterChange,fetchScholarships]);

  useEffect(() => {
    if (scholarshipData.length > 0) {
      const filterOptions = [
        { type: 'Type', options: Array.from(new Set(scholarshipData.map(scholarship => scholarship.attributes.Type).filter(Boolean))) },
        { type: 'Level_Of_Study', options: Array.from(new Set(scholarshipData.map(scholarship => scholarship.attributes.Level_Of_Study).filter(Boolean))) },
        { type: 'Gender', options: Array.from(new Set(scholarshipData.map(scholarship => scholarship.attributes.Gender).filter(Boolean))) },
        { type: 'Deadline', options: Array.from(new Set(scholarshipData.map(scholarship => scholarship.attributes.Deadline).filter(Boolean))) },
        { type: 'Nationality', options: Array.from(new Set(scholarshipData.map(scholarship => scholarship.attributes.Nationality?.data?.attributes?.Nationality_Name).filter(Boolean))) },
      ];
      setDropDownData(filterOptions);
    }
  }, [scholarshipData,dropDownData]);

  const handleFilterChange = (type, value) => {
    onFilterChange(type, value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'start', height: 'auto', flexWrap: 'wrap', gap: '1rem', fontSize: '1rem', 
    '@media (max-width: 780px)': { flexDirection: 'column', alignItems: 'center', justifyContent: 'center',width:'80%' } }}>
      {dropDownData.map((menu, index) => <SimpleDropDown key={index} {...menu} onChange={handleFilterChange} />)}
    </Box>
  );
};

export default DropDownFilter;