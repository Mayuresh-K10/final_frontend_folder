import React, { useState } from "react";
//import "../Assets/CSS/style.css";
import { FormControl, Select, MenuItem, Box } from "@mui/material";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const JobHeroSection = () => {


  const [selectedJob, setSelectedJob] = useState();
  const [selectJobs] = useState([
    { value: 1, label: "Developer" },
    { value: 2, label: "Coder" },
    { value: 3, label: "Finance" },
    { value: 4, label: "Accounting" },
    { value: 5, label: "Design" },
    { value: 6, label: "Aist" },
    { value: 7, label: "Applicatiortn" },
    // Add more countries as needed
  ]);

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectLoctaion] = useState([
    { value: 21, label: "Mumbai" },
    { value: 22, label: "Banglore" },
    { value: 23, label: "Delhi" },
    { value: 24, label: "Heyderabad" },
    { value: 25, label: "Pune" },
    { value: 26, label: "Luckhnow" },
    { value: 27, label: "Jaipur" },
    // Add more countries as needed
  ]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

 


  return (
    <Box className="hero-banner-four position-relative pt-170 lg-pt-150 pb-300 lg-pb-150 md-pb-100" sx={{ '@media (max-width:600px)': { marginBottom: '20rem' } }}>
      <div className="container">
        <div className="position-relative pb-70 sm-pb-20">
          <div className="row">
            <Box sx={{
              width: "60%", display: 'flex', flexDirection: 'column', gap:"10px",
              '@media (max-width:600px)': { gap: '50px' }
            }} className="col-xxl-7 col-lg-8 m-auto text-center">
              <Typography

                data-wow-delay="0.3s"
                sx={{
                  marginTop: "-20px",
                  height: "10vh",
                  visibility: "visible; animation-delay: 0.3s",
                  fontSize: "75px",
                  fontWeight: "300",
                  lineHeight: "75px",
                  textAlign: "center",
                  '@media (max-width:800px)': {
                    fontSize: '50px',
                    marginTop: '-100px',
                    marginBottom: '30px'
                  }
                }}
              >
                Job Listing
              </Typography>
              <Typography
                className="text-md mt-25 mb-45 md-mb-30 wow fadeInUp"
                data-wow-delay="0.4s"
                sx={{

                  visibility: "visible; animation-delay: 0.4s",
                  fontSize: "25px",
                  fontWeight: "300",
                  width: "50vw",
                  marginTop:"15px",
                  '@media (width:800px)': {
                    fontSize: "12px",
                  },

                }}
              >
                We delivered blazing fast & striking work solution
              </Typography>
            </Box>
          </div>
          <Box>
            <Box sx={{ width: '100%', display: 'block', marginLeft:'auto', marginRight:'auto', marginTop:"1rem",
          '@media (max-width:600px)': {
            position: 'absolute',
            marginTop: "5rem",
            marginLeft:'-9rem'
          }}}>
              <div className="row">
                <div className="col-xxl-8 col-xl-9 col-lg-10 m-auto">
                  <div
                    className="job-search-one style-two position-relative wow fadeInUp"
                    data-wow-delay="0.5s"
                    style={{ visibility: "visible; animation-delay: 0.5s" }}
                  >
                   {/*  <form style={{ width: "57vw", marginLeft: "220px",marginTop:"25px", backgroundColor:"#fff" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", 
                    '@media (max-width:600px)':{
                      display:'flex',
                      flexDirection:'column',
                      
                      } }}>
                     <div className="col-md-3">
                        <Box sx={{ width: "15vw", 
                        '@media (max-width:600px)':{
                          width:'100%',
                          textAlign:'left'
                        }
                       }}  className="input-box">
                          <div className="label" style={{color:"black"}}>Job Categories</div>
                          
                          <FormControl  fullWidth>
                            <Select
                              
                              labelId="job-label"
                              id="job-select"
                              value={selectedJob}
                              onChange={handleJobChange}
                              sx={{
                                boxShadow: "none",
                                ".MuiOutlinedInput-notchedOutline": {
                                  border: 0,
                                },
                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: 0,
                                  },
                                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: 0,
                                  },
                                  
                              }}
                            >
                              {selectJobs.map((job) => (
                                <MenuItem
                                  key={job.value}
                                  value={job.value}
                                  className="option"
                                >
                                  {job.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div className="col-md-3">
                      <Box sx={{ width: "15vw", 
                        '@media (max-width:600px)':{
                          width:'100%',
                          textAlign:'left'
                        }
                       }}  className="input-box">
                          <div className="label"style={{color:"black"}}>Location</div>
                          
                          <FormControl fullWidth>
                              
                              <Select
                                className="list"
                                role="menubar"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedLocation}
                                label="Location"
                                onChange={handleLocationChange}
                                sx={{
                                  boxShadow: "none",
                                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                    {
                                      border: 0,
                                    },
                                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      border: 0,
                                    },
                                }}
                              >
                                {selectLoctaion.map((location) => (
                                  <MenuItem
                                    key={location.value}
                                    value={location.value}
                                    className="option"
                                  >
                                    {location.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>

                        </Box>
                      </div>
                      <div className="col-md-3">
                        <Box
                          sx={{ width: "12vw",
                          '@media (max-width:600px)':{
                            width:'100%',
                            textAlign:'left'}  }}
                          className="input-box border-left"
                        >
                          <div className="label" style={{color:"black"}}>Keywords or Title</div>
                          <input
                            placeholder="Skills..."
                            style={{marginTop:"10px", backgroundColor:"transparent"}}
                            className="keyword"
                            type="text"
                          />
                        </Box>
                      </div>
                      <Box
                        sx={{ marginTop: "30px",
                        '@media(max-width:600px)':{
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center'
                        }
                       }}
                        className="col-md-3 sm-mb-10 sm-mt-10"
                      >
                        <Link to="/job-portal/job">
                        <button
                          type="submit"
                          className="text-uppercase btn-five border6 tran3s m-auto"
                        >
                          Search
                        </button>
                        </Link>
                      </Box>
                    </Box>
                  </form> */}


                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
      <img
        alt="screen"
        loading="lazy"
        width="114"
        height="96"
        decoding="async"
        dataNimg="1"
        className="lazy-img shapes shape_01"

        src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_10.9b4a1e76.png&amp;w=256&amp;q=75"
        style={{ color: "transparent" }}
      />
      <img
        alt="screen"
        loading="lazy"
        width="82"
        height="71"
        decoding="async"
        dataNimg="1"
        className="lazy-img shapes shape_02"

        src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_11.a550bf48.png&amp;w=256&amp;q=75"
        style={{ color: "transparent" }}
      />
      <img
        alt="screen"
        loading="lazy"
        width="78"
        height="63"
        decoding="async"
        dataNimg="1"
        className="lazy-img shapes shape_03"

        src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_12.249998d2.png&amp;w=256&amp;q=75"
        style={{ color: "transparent" }}
      />
      <img
        alt="screen"
        loading="lazy"
        width="108"
        height="87"
        decoding="async"
        dataNimg="1"
        className="lazy-img shapes shape_04"

        src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_13.c1c3ecd6.png&amp;w=256&amp;q=75"
        style={{ color: "transparent" }}
      />
    </Box>
  );

};

export default JobHeroSection;