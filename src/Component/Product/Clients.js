import React from "react";
import './Client.css'
// Import all images
// import affirmLogo from "../image/affirm-logo.png";
// import footerBg from "../image/footer-bg-2.jpg";
// import logo from "../image/logo.png";
// import mastercardLogo from "../image/mastercard-logo.png";
import motherhood from "../image/motherhood.png";
import naidum from "../image/naidum.jpeg";
import nite from "../image/nite.png";
import client1 from "../image/ping4sms-client1.webp";
import client2 from "../image/ping4sms-client2.webp";
import client3 from "../image/ping4sms-client3.webp";
import client4 from "../image/ping4sms-client4.webp";
import client5 from "../image/ping4sms-client5.webp";
import client6 from "../image/ping4sms-client6.webp";
import client7 from "../image/ping4sms-client7.webp";
import client8 from "../image/ping4sms-client8.webp";
import client9 from "../image/ping4sms-client9.webp";
import client10 from "../image/ping4sms-client10.webp";
// import visaLogo from "../image/visa-logo.png";
// import whatsappLogo from "../image/whatsapp.webp";

const images = [

  motherhood,
  naidum,
  nite,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,

];

const Client = () => {
  return (
    <div className="container py-5 aos">
      <h2 className="text-center mb-4 fw-bold py-3">Our Trusted Clients</h2>
      <div className="marquee-container" data-aos='zoom-in-up'>
        <div className="marquee-content d-flex align-items-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Client ${index + 1}`}
              className="mx-4"
              style={{ height: "100px", objectFit: "contain" }}
            />
          ))}

          {/* Duplicate images for smooth infinite scrolling */}
          {images.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image}
              alt={`Client Duplicate ${index + 1}`}
              className="mx-3"
              style={{ height: "50px", objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
