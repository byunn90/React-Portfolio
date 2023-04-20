import React, { useState } from "react";
import Contact from "./pages/Contact";
import Navbar from "./NavBar";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  // if home page render home
  // if about page render about page
  // if Blog page render blog page
  // Usestate is also set to Home
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    // if (currentPage === "About") {
    //   return <About />;
    // }
    if (currentPage === "Home") {
      return <Home />;
    }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}
