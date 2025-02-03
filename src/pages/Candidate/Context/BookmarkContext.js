import React, { createContext, useState, useContext } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const addBookmark = (job) => {
    setBookmarkedJobs((prev) => [...prev, job]);
  };

  const removeBookmark = (jobId) => {
    setBookmarkedJobs((prev) => prev.filter((job) => job.id !== jobId));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedJobs, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);
