import React from 'react';
import Google from '../image/brand/booking.png'

const HeaderTop = () => {
  return (
    <>
      <div className="header-top-bg d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center py-2">
          {/* Left Section */}
          <div className="d-flex align-items-center text-white">
            <small>
              Talk To Sales: <img src={Google} alt="flag" className="mx-2 w-25" />
              <small>+91- 9025026409</small>
            </small>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center text-white">
            {/* <small className="me-3">Newsroom</small> */}
            <small className="me-3">Contact Us</small>
            <small className="me-3">Support</small>
            <small>sales@a2zsms.in</small>
            {/* <small className="me-3">Login</small> */}
            {/* <select className="country-select">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
