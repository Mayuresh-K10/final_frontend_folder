import React, { useState } from "react";
import JobAlert from "./jobAlert";
import JobSaved from "./jobSaved";
import { BookmarkProvider } from "../Context/BookmarkContext";

const JobManagement = () => {
  
  return (
     <BookmarkProvider>
      <JobAlert />
      <JobSaved />
    </BookmarkProvider>
  );
};

export default JobManagement;
