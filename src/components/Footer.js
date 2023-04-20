import React from "react";
import "../styles/Navbar.css";

function Footer({ currentPage, handlePageChange }) {
  return (
    <nav className="my-footer">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          © 2023 Kayhan PortFolio | All rights reserved.
        </a>
      </div>
    </nav>
  );
}

export default Footer;
