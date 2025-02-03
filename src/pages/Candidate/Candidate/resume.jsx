import React, { useState } from "react";
import "./CSS/resume.css";
import {
  Card,
 
  Box,
  FormControl,
  InputLabel,
  Select,

  MenuItem,
  
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./header";
import { Link } from "react-router-dom";

const Resume = () => {
  // year dropdown

  const [fromContent, setFromContent] = useState("");
  const [fromYears] = useState([
    { value: 1, label: "2024" },
    { value: 2, label: "2023" },
    { value: 3, label: "2022" },
    { value: 4, label: "2021" },
    { value: 5, label: "2020" },
    { value: 6, label: "2019" },
    { value: 7, label: "2018" },
    // Add more years as needed
  ]);

  const handleFromContentChange = (event) => {
    setFromContent(event.target.value);
  };

  const [toContent, setToContent] = useState("");

  const [toYears] = useState([
    { value: 11, label: "2024" },
    { value: 12, label: "2023" },
    { value: 13, label: "2022" },
    { value: 14, label: "2021" },
    { value: 15, label: "2020" },
    { value: 16, label: "2019" },
    { value: 17, label: "2018" },
    // Add more years as needed
  ]);

  const handleToContentChange = (event) => {
    setToContent(event.target.value);
  };

  const skills = [
    "Figma",
    "HTML5",
    "Illustrator",
    "Adobe Photoshop",
    "WordPress",
    "jQuery",
    "Web Design",
    "Adobe XD",
    "CSS",
    // Add more skills as needed
  ];

  // dynamicity => from to

  return (
    <div>
      <div className="__variable_e76efa __variable_95782f">
        <div className="main-page-wrapper">
          <div className="dashboard-body">
            <div className="position-relative">
              <Header />

              <h2 className="main-title">My Resume</h2>

              <Box
                sx={{
                  margin: "25px",
                  borderRadius: "25px",
                  backgroundColor: "white",
                  height: "435px",
                  paddingTop: "0.020px",
                }}
              >
                <Card
                  sx={{
                    margin: "25px",
                    borderRadius: "25px",
                    backgroundColor: "#f0f5f3",
                  }}
                >
                  <div className="bg-white card-box border-20">
                    <h4 className="dash-title-three">Resume Attachment</h4>
                    <div className="dash-input-wrapper mb-20">
                      <label htmlFor="">CV Attachment*</label>
                      <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                        <span>MyCvResume.PDF</span>
                        <Link  className="remove-btn">
                          <i className="bi bi-x"></i>
                        </Link>
                      </div>
                      <div className="attached-file d-flex align-items-center justify-content-between">
                        <span>CandidateCV02.PDF</span>
                        <Link  className="remove-btn">
                          <i className="bi bi-x"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="dash-btn-one d-inline-block position-relative me-3">
                      <i className="bi bi-plus"></i>Upload CV
                      <input
                        type="file"
                        id="uploadCV"
                        placeholder=""
                        name="uploadCV"
                      />
                    </div>
                    <small>Upload file .pdf, .doc, .docx</small>
                  </div>
                </Card>
              </Box>

              <Box
                sx={{
                  margin: "25px",
                  borderRadius: "25px",
                  backgroundColor: "white",
                  height: "540px",
                  paddingTop: "0.25px",
                }}
              >
                <Card
                  sx={{
                    margin: "25px",
                    borderRadius: "25px",
                    backgroundColor: "#f0f5f3",
                  }}
                >
                  <div className="bg-white card-box border-20 mt-40">
                    <h4 className="dash-title-three">Brief Summary</h4>
                    <div className="dash-input-wrapper mb-35 md-mb-20">
                      <label htmlFor="">Summary*</label>
                      <textarea
                        className="size-lg"
                        placeholder="Write something interesting about you...."
                      ></textarea>
                      <div className="alert-text">
                        Brief description htmlFor your resume. URLs are hyperlinked.
                      </div>
                    </div>
                  </div>
                </Card>
              </Box>

              <Card
                sx={{
                  margin: "25px",
                  borderRadius: "25px",
                  backgroundColor: "white",
                }}
              >
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Education</h4>
                  <div
                    className="accordion dash-accordion-one"
                    id="accordionOne"
                  >
                    <Accordion
                      sx={{ bgcolor: "#f0f5f3" }}
                      className="accordion-item"
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        className="accordion-header"
                        id="headingOne"
                      >
                        Add Education*
                      </AccordionSummary>

                      <AccordionDetails className="accordion-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Title*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Product Designer (Google)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Academy*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Google Arts Collage &amp; University"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Year*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div style={{display:"flex",justifyContent:"space-evenly", flexDirection:"row"}} >
                              <Box
                                //sx={{minWidth: 200}}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl   sx={{minWidth: 150 ,bgcolor:"white",marginTop:"15px" }}>
                                  <InputLabel id="demo-simple-select-label-from-1">
                                    From
                                  </InputLabel>
                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label-from1"
                                    id="demo-simple-select-from1"
                                    value={fromContent}
                                    label="From"
                                    onChange={handleFromContentChange}
                                  >
                                    {fromYears.map((year) => (
                                      <MenuItem
                                        key={year.value}
                                        value={year.value}
                                        className="option"
                                      >
                                        {year.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Box>
                              <Box
                                //sx={{minWidth: 200}}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl  sx={{minWidth: 150 ,bgcolor:"white",marginTop:"15px"}}>
                                  <InputLabel id="demo-simple-select-label-to-1">
                                    To
                                  </InputLabel>
                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label-to1"
                                    id="demo-simple-select-to1"
                                    value={toContent}
                                    label="To"
                                    onChange={handleToContentChange}
                                  >
                                    {toYears.map((year) => (
                                      <MenuItem
                                        key={year.value}
                                        value={year.value}
                                        className="option"
                                      >
                                        {year.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Description*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <textarea
                                className="size-lg"
                                placeholder="Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion
                      sx={{ bgcolor: "#f0f5f3" }}
                      className="accordion-item"
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        className="accordion-header"
                        id="headingOne"
                      >
                        Add Education*
                      </AccordionSummary>

                      <AccordionDetails className="accordion-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Title*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Product Designer (Google)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Academy*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Google Arts Collage &amp; University"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Year*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div style={{display:"flex",justifyContent:"space-evenly", flexDirection:"row"}}>
                              <Box
                                sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl sx={{minWidth: 150 ,bgcolor:"white",marginTop:"15px"}}>
                                  <InputLabel id="demo-simple-select-label-from-2">
                                    From
                                  </InputLabel>
                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label-from2"
                                    id="demo-simple-select-from2"
                                    value={fromContent}
                                    label="From"
                                    onChange={handleFromContentChange}
                                  >
                                    {fromYears.map((year) => (
                                      <MenuItem
                                        key={year.value}
                                        value={year.value}
                                        className="option"
                                      >
                                        {year.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Box>
                              <Box
                                sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl sx={{minWidth: 150 ,bgcolor:"white",marginTop:"15px"}}>
                                  <InputLabel id="demo-simple-select-label-to-2">
                                    To
                                  </InputLabel>
                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label-to2"
                                    id="demo-simple-select-to2"
                                    value={toContent}
                                    label="To"
                                    onChange={handleToContentChange}
                                  >
                                    {toYears.map((year) => (
                                      <MenuItem
                                        key={year.value}
                                        value={year.value}
                                        className="option"
                                      >
                                        {year.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Description*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <textarea
                                className="size-lg"
                                placeholder="Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <Link
                    style={{ marginTop: "10px" }}
                    
                    className="dash-btn-one"
                  >
                    <i className="bi bi-plus"></i> Add more
                  </Link>
                </div>
              </Card>

              <Card style={{ margin: "25px", borderRadius: "25px" }}>
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Skills &amp; Experience</h4>
                  <div className="dash-input-wrapper mb-40">
                    <label htmlFor="">Add Skills*</label>
                    <div
                      style={{ backgroundColor: "#f0f5f3" }}
                      className="skills-wrapper"
                    >
                      

                      <ul className="style-none d-flex flex-wrap align-items-center">
                        {skills.map((skill, index) => (
                          <li key={index} className="is_tag">
                            <button>
                              {skill} <i className="bi bi-x"></i>
                            </button>
                          </li>
                        ))}
                        <li className="more_tag">
                          <button>+</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dash-input-wrapper mb-15">
                    <label htmlFor="">Add Work Experience*</label>
                  </div>
                  <div
                    className="accordion dash-accordion-one"
                    id="accordionTwo"
                  >
                    <Accordion
                      sx={{ backgroundColor: "#f0f5f3" }}
                      className="accordion-item"
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        className="accordion-header"
                        id="headingOne"
                      >
                        Experience 1*
                      </AccordionSummary>

                      <AccordionDetails className="accordion-body">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Title*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input
                                type="text"
                                placeholder="Lead Product Designer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">company*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <input type="text" placeholder="Amazon Inc" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Year*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div style={{display:"flex",justifyContent:"space-evenly", flexDirection:"row"}}>
                              <Box
                                //sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl sx={{minWidth: 150 ,bgcolor:"white",marginTop:"15px"}}>
                                  <InputLabel id="demo-simple-select-label-from-3">
                                    From
                                  </InputLabel>
                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label-from-3"
                                    id="demo-simple-select-from-3"
                                    value={fromContent}
                                    label="From"
                                    onChange={handleFromContentChange}
                                  >
                                    {fromYears.map((year) => (
                                      <MenuItem
                                        key={year.value}
                                        value={year.value}
                                        className="option"
                                      >
                                        {year.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Box>
                              <Box
                                //sx={{ minWidth: 120 }}
                                className="dash-input-wrapper mb-25"
                              >
                                <FormControl sx={{minWidth: 150 ,bgcolor:"white",marginTop:"15px"}}>
                                  <InputLabel id="demo-simple-select-label-to-3">
                                    To
                                  </InputLabel>
                                  <Select
                                    className="list"
                                    role="menubar"
                                    labelId="demo-simple-select-label-to-3"
                                    id="demo-simple-select-to-3"
                                    value={toContent}
                                    label="To"
                                    onChange={handleToContentChange}
                                  >
                                    {toYears.map((year) => (
                                      <MenuItem
                                        key={year.value}
                                        value={year.value}
                                        className="option"
                                      >
                                        {year.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="dash-input-wrapper mb-30 md-mb-10">
                              <label htmlFor="">Description*</label>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="dash-input-wrapper mb-30">
                              <textarea
                                className="size-lg"
                                placeholder="Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <Link
                    style={{ marginTop: "10px" }}
                    
                    className="dash-btn-one"
                  >
                    <i className="bi bi-plus"></i> Add more
                  </Link>
                </div>
              </Card>

              <div
                style={{ margin: "25px" }}
                className="button-group d-inline-flex align-items-center mt-30"
              >
                <Link  className="dash-btn-two tran3s me-3">
                  Save
                </Link>
                <Link  className="dash-cancel-btn tran3s">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Toastify"></div>
      </div>
    </div>
  );
};

export default Resume;
