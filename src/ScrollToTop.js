import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for location changes
import { FaArrowUp } from "react-icons/fa"; // Import icon for scroll button

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation(); // To detect route changes

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setShowScrollTop(true); 
      } else {
        setShowScrollTop(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <>
      {showScrollTop && (
        <div
        className="bounce-in-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
