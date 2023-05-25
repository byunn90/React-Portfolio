import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../styles/Navbar.css";

function Footer({ currentPage, handlePageChange }) {
  return (
    <nav className="my-footer">
      <div className="social-icons ml-auto">
        <a href="https://github.com/byunn90">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kayhan-mamak-5423b4262/">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100080817559358">
          <FaFacebook />
        </a>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <a className="navbar-brand">
          © 2023 Kayhan PortFolio | All rights reserved.
        </a>
      </div>
    </nav>
  );
}

export default Footer;
