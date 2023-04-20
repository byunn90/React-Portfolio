import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="my-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          Kayhan PortFolio
        </a>
        <ul className="nav-links d-flex align-items-center">
          <li className="nav-item active">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
