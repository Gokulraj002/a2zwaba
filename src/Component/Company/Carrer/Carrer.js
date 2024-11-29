import React from "react";
import Banner from '../../image/Carrer-Banner.jpeg'
import Carrer from '../../image/carrer.jpeg'

const CareersPage = () => {
  const backgroundImage ={Banner}
  const openPositions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "We are looking for a talented Frontend Developer to join our team. You'll work with React.js and other modern libraries to create stunning web applications.",
    },
    {
      title: "Backend Developer",
      location: "Bangalore",
      description:
        "Join our backend team to build robust APIs and server-side solutions using Node.js and other cutting-edge technologies.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Remote",
      description:
        "Looking for a creative digital marketer to handle campaigns, SEO, and social media marketing.",
    },
    {
      title: "Product Designer",
      location: "bangalore",
      description:
        "We're hiring a product designer with experience in UX/UI design to create seamless and beautiful user experiences.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div
        className="text-white text-center py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
      >
        <h1 className="display-4 fw-bold">Careers at Our Company</h1>
        <p className="lead">
          Join us and help build the future with cutting-edge technology and
          creativity.
        </p>
      </div>

      {/* Why Join Us Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Why Join Us?</h2>
        <div className="row">
          <div className="col-md-6 d-grid">
            <div className="place-center">
              <p>
                At our company, we believe in nurturing talent and providing a
                collaborative environment where innovation thrives. We’re not
                just a workplace – we’re a community of passionate professionals
                shaping the future.
              </p>
              <ul>
                <li>Flexible work environment with remote options.</li>
                <li>Opportunities for career growth and learning.</li>
                <li>Health and wellness benefits.</li>
                <li>Collaborate with industry-leading professionals.</li>
                <li>Work on impactful projects that matter.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={Carrer}
              alt="Why Join Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Open Positions</h2>
        <div className="row">
          {openPositions.map((position, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="p-4 border rounded shadow-sm bg-light">
                <h5 className="fw-bold">{position.title}</h5>
                <p className="text-muted">{position.location}</p>
                <p>{position.description}</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div
        className="text-white py-5"
        style={{
          backgroundColor: "#007bff",
        }}
      >
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Ready to Join Us?</h3>
          <p className="mb-4">
            Submit your resume today and start your journey with us!
          </p>
          <button className="btn btn-light btn-lg">Submit Resume</button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
