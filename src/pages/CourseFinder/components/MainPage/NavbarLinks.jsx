import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = ({ content }) => {
  return (
    <>
      <Link to={`/${content.toLowerCase().replace(/\s/g, '')}`}
        style={{
          fontFamily: "Poppins",
          fontWeight: "600",
          color: "white",
          fontSize: "0.8rem",
          textDecoration: "none",
          textTransform: "capitalize",
          padding: "1.2rem 0.8rem",
          textAlign: "center"
        }}>{content}</Link>
    </>
  )
}

export default NavbarLinks