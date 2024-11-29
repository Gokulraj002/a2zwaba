import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome check icon
import whatsapp from "../../image/whats1.png"; // Replace with your actual image path

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center aos">
        {/* Left Content */}
        <div className="col-md-6 mt-2" data-aos="fade-down-right" >
          <h1 className="fw-bold mb-3">
            Build Your Business with <br /> 
            <span className="text-info">WhatsApp Business API</span>
          </h1>
          <hr className="text-success mb-4" style={{ width: "120px", height: "3px" }} />
          <ul className="list-unstyled para-color">
            <li className="mb-3 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-success me-3"
                
              />
              <span >Send bulk messages.</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-success me-3"
                
              />
              <span >Get a verified green tick.</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-success me-3"
                
              />
              <span >Increase your messaging limit.</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-success me-3"
                
              />
              <span >Setup bulk automated notifications.</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-success me-3"
                
              />
              <span >Showcase product catalogs & get payment.</span>
            </li>
          </ul>
          {/* <button className="btn btn-primary rounded-0 btn-lg mt-4">
            Sign Up for WhatsApp Business API Trial Now
          </button> */}
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center mt-5" data-aos="fade-down-left">
          <img
            src={whatsapp}
            alt="WhatsApp Business API "
            className=" w-100"
         
           
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
