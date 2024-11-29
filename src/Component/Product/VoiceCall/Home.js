import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome check icon
import Images from '../../image/Call.png'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container pb-5">
      <div className="row align-items-center aos">
        {/* Left Content */}
       <div className=" col-md-6 d-grid">
         <div className=" place-center" data-aos='fade-right'>
           <h1 className="fw-bold mb-3">
             Enhance Communication with <br />
             <span className="text-primary">Bulk Voice Call API</span>
           </h1>
           <hr
             className="text-success mb-4"
             style={{ width: "120px", height: "3px" }}
           />
           <ul className="list-unstyled para-color">
             <li className="mb-3 d-flex align-items-center">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary me-3"
                 
               />
               <span className="">
                 Send thousands of voice calls in minutes.
               </span>
             </li>
             <li className="mb-3 d-flex align-items-center">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary me-3"
                 
               />
               <span className="">
                 Reach customers with pre-recorded messages.
               </span>
             </li>
             <li className="mb-3 d-flex align-items-center">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary me-3"
                 
               />
               <span className="">
                 Automate reminders, surveys, and promotions.
               </span>
             </li>
             <li className="mb-3 d-flex align-items-center">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary me-3"
                 
               />
               <span className="">
                 Enjoy seamless API integration for voice services.
               </span>
             </li>
             <li className="mb-3 d-flex align-items-center">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary me-3"
                 
               />
               <span className="">
                 Measure campaign performance with real-time analytics.
               </span>
             </li>
           </ul>
           <Link to="/try-for-free/">
           <button className="btn btn-primary rounded-0 btn-lg mt-4">
             Sign Up for Bulk Voice Call API Trial Now
           </button>
           </Link>
         </div>
       </div>

        {/* Right Image */}
        <div className="col-md-6 text-center mb-4" data-aos='fade-left'>
          <img
            src={Images}
            alt="Bulk Voice Call"
            className="aos w-75"
            // style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
