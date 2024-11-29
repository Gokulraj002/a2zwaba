import React from "react";
import { Checkbox } from "antd";
import FormComponent from "./FormComponent";

const TryForFree = () => {
  const onFinish = (values) => {
    console.log("Try For Free Form values:", values);
  };

  return (
    <div className="container py-5 para-color">
      <div className="row aos">
        {/* Left Section */}
        <div className="col-md-6 d-grid" data-aos="fade-right">
          <div className="place-center">
            <h2 className="mb-4">Why Choose Us?</h2>
            <p>
              Empower your business communication with cutting-edge services
              designed to make interactions seamless and impactful. Here’s what you get:
            </p>
            <ul className="list-unstyled">
              {[
                "Automate your customer interactions with WhatsApp Business API (Waba).",
                "Deliver visually engaging messages with RCS for rich media.",
                "Send high-volume campaigns with our reliable Bulk SMS service.",
                "Reach your audience instantly through our Voice Call solutions.",
                "Enhance security and trust with lightning-fast OTP deliveries.",
                "Access detailed analytics and performance insights for better decision-making.",
                "Boost your conversions with personalized messaging and automation.",
                "Experience 24/7 dedicated support to keep your business running smoothly.",
              ].map((item, index) => (
                <li key={index} className="mb-2 pt-2">
                  <Checkbox checked />
                  <span className="ms-2 pt-3">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              <strong>Still thinking?</strong> Try our services risk-free and
              take your communication strategy to the next level. Experience the difference now!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6" data-aos="fade-left">
          <FormComponent
            title="Sign Up Now – It's Free!"
            buttonText="Try For Free Now"
            onFinish={onFinish}
          />
        </div>
      </div>
    </div>
  );
};

export default TryForFree;
