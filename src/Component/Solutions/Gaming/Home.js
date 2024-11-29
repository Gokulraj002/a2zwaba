import React from "react";
import gamingImage from "../../image/Solutions/game.png"; // Replace with your gaming-related image path

const Home = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Revolutionize Gaming with{" "}
              <span className="text-primary">SMS Solutions</span>
            </h1>
            <p className="text-muted">
              Enhance your gaming platform by leveraging SMS services to improve
              player engagement, streamline communications, and ensure real-time
              updates for gamers.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Send personalized in-game updates and notifications.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Share tournament schedules, results, and real-time updates.
                </span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Provide account recovery assistance through SMS.</span>
              </li>
            </ul>
            <button className="btn btn-primary mt-4 px-4 py-2 fw-bold">
              Learn More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={gamingImage}
              alt="Gaming SMS Services"
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
