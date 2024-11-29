import React from "react";
import realEstateImage from "../../image/Solutions/Estate.png"; // Replace with your image path

const Home = () => {
  return (
    <section className="py-5 ">
      <div className="container ">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Boost Your Real Estate with{" "}
              <span className="text-primary">Bulk SMS Marketing!</span>
            </h1>
            <p className="">
              Instantly share property updates, reach targeted buyers, and send
              timely reminders about site visits and offers. Connect with
              thousands quickly and affordably to grow your business today!
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                Share property listings and offers instantly.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                Connect with thousands of buyers cost-effectively.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                Send messages based on location and preferences.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                Notify clients about site visits and payment schedules..
                </span>
              </li>
              
            </ul>
            {/* <button className="btn btn-primary mt-4 px-4 py-2 fw-bold">
              Learn More
            </button> */}
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={realEstateImage}
              alt="Real Estate SMS Services"
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
