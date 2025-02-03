import React, { useState, useEffect } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ResponseModal from "./ResponseModal"; // Import the ResponseModal component

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [responseMessages, setResponseMessages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 750);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const url= process.env.REACT_APP_BACKEND_FIREBASE_URL;
  const handleSearch = async (page = 1) => {
    try {
      const response = await axios.get(`${url}/search`, {
        params: { q: searchQuery, page: page }
      });
      setResponseMessages(response.data.results);
      setTotalPages(response.data.total_pages); // Assume the API returns total_pages
      setModalOpen(true);
      setCurrentPage(page); // Update currentPage to current page
    } catch (error) {
      console.error("Error searching:", error);
      setResponseMessages([{ error: "Error searching. Please try again." }]);
      setModalOpen(true);
    }
  };

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
    if (searchQuery.trim() !== "") {
      handleSearch();
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setResponseMessages([]); // Clear response messages
    setCurrentPage(1); // Reset currentPage to 1 when closing modal
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleSearch(newPage);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: expanded ? 250 : 50,
          height: 50,
          borderRadius: "20px",
          transition: "width 0.2s ease-in-out",
          backgroundColor: expanded ? "#e0e0e0" : "transparent",
          boxShadow: "none",
          '@media (max-width:800px)': {
            marginY: '0.55rem',
            width: expanded ? 180 : 50,
            marginLeft: expanded ? '1rem' : '0rem'
          }
        }}
      >
        <IconButton onClick={handleExpand} sx={{ display: expanded ? "none" : "block", marginY: "auto", '@media (max-width:800px)': {
            marginTop: '-0.25rem'
          } }}>
          <SearchIcon sx={{ marginTop: "6px", color: expanded ? "white" : "lightgray", '@media (max-width:800px)': {
            marginTop: '0.55rem'
          } }} />
        </IconButton>
        <input
          placeholder="Search..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            display: expanded ? "block" : "none",
            width: "73%",
            padding: "10px",
            outline: "none",
            border: "none",
            backgroundColor: "transparent",
          }}
        />
        <IconButton onClick={handleCollapse} sx={{ display: expanded ? "block" : "none" }}>
          <SearchIcon />
        </IconButton>
      </Paper>
      
      <ResponseModal 
        open={modalOpen} 
        handleClose={handleCloseModal} 
        messages={responseMessages} 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </Box>
  );
};

export default SearchBar;
