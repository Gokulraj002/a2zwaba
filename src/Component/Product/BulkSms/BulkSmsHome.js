import React from "react";
import transactionalImage from "../../image/sms12.png"; // Replace with your transactional image path
import promotionalImage from "../../image/sms11.png"; // Replace with your promotional image path
import otpImage from "../../image/otp.png"; // Replace with your OTP image path

const BulkSmsHome = () => {
  return (
    <>
      {/* Transactional SMS Section */}
      <section
        className="bg2 mt-2"
        style={{
          // backgroundColor: "#f9f9f9",
          padding: "50px 0",
        }}
      >
        <div className="container para-color aos">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className=" fw-bold">
                Empower Your Business with{" "}
                <span className="text-primary">Transactional SMS</span>
              </h2>
              <p className="text-muted mb-4">
                Transactional SMS are used for sending important alerts,
                notifications, and transactional updates to customers. They are
                delivered instantly, even to DND (Do Not Disturb) numbers,
                ensuring critical information reaches the recipient on time.
              </p>
              <ul className="list-unstyled para-color">
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>Deliver to Non-DND Numbers</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span> Instant Delivery 24x7</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>Customized Sender ID</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span> Transactional Alerts and OTPs</span>
                </li>
              </ul>
              
            </div>

            {/* Right Image Section */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src={transactionalImage}
                alt="Transactional SMS"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotional SMS Section */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "50px 0",
        }}
      >
        <div className="container para-color">
          <div className="row align-items-center">
            {/* Right Image Section */}
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img
                src={promotionalImage}
                alt="Promotional SMS"
                className="w-100"
              />
            </div>

            {/* Left Content */}
            <div className="col-md-6" data-aos="fade-left">
              <h2 className=" fw-bold">
                Transform Your Reach with{" "}
                <span className="text-primary">Promotional SMS</span>
              </h2>

              <p className="text-muted mb-4">
                Promote your business effectively by sending bulk promotional
                messages to your audience. Whether it's a flash sale, discount
                offer, or event promotion, promotional SMS ensures your message
                gets delivered quickly and effectively to non-DND numbers.
              </p>
              <ul className="list-unstyled para-color">
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>Deliver to Non-DND Numbers</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>Schedule Messages</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>160 Characters per SMS</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>Cost-Effective Marketing</span>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>

      {/* OTP SMS Section */}
      <section
        className="bg3"
        style={{
          // backgroundColor: "#f9f9f9",
          padding: "50px 0",
        }}
      >
        <div className="container para-color">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold">
                Secure Your Business with <br></br>
                <span className="text-primary">OTP SMS Services</span>
              </h2>

              <p className="text-muted mb-4">
                OTP SMS services ensure secure verification and authentication
                for your users during transactions, logins, or password
                recovery. Delivered within seconds, OTPs provide a robust layer
                of security for critical processes.
              </p>
              <ul className="list-unstyled para-color">
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>Instant Delivery within 3 Seconds</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>DND & Non-DND Numbers</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>Retry Mechanism</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>High Priority Route</span>
                </li>
              </ul>
            </div>

            {/* Right Image Section */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img src={otpImage} alt="OTP SMS Services" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BulkSmsHome;
