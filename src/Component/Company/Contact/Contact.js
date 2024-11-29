import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Form, Input, Checkbox, Button } from "antd"; // Importing Ant Design components
import { Link } from "react-router-dom";
import Contact from '../../image/Contact.jpg'

const ContactPage = () => {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/6366829999", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sales@a2zsms.in";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:6366829999";
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/company/103567741/admin/dashboard/",
      "_blank"
    );
  };

  const onFinish = (values) => {
    console.log("Form Data:", values);
    // Add form submission logic here
  };

  return (
    <>
      <div className="bg2"
        style={{
          backgroundImage:
            `url(${Contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid py-5">
          <div className="container ">
            <div className="row" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <div className="d-flex mb-3 flex-column">
                <h1 className="text-center mt-4 text-white">
                  Helping you is our priority
                </h1>
              </div>
              <div className="col-lg-4 col-md-12 text-white ps-4">
                <div className="mb-4 mt-md-3">
                  <h2 className="h3 ms-2 text-white">Contact Information</h2>
                  <p className="opacity-75 ms-2 text-white">
                    <small>
                      Fill out the form and we will get back to you within 24
                      hours.
                    </small>
                  </p>
                </div>
                <div className="d-flex flex-column px-0">
                  <ul className="m-0 p-0">
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span
                        style={{ cursor: "pointer" }}
                        className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2 text-white"
                      >
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handlePhoneClick}
                      >
                        +91 63668 29999
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <span
                        style={{ cursor: "pointer" }}
                        className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2 text-white"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handleEmailClick}
                      >
                        sales@a2zsms.in
                      </span>
                    </li>
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2 text-white">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                      <Link
                        to="#"
                        className="text-decoration-none"
                        style={{ color: "white" }}
                      >
                        Address: 183, 2nd Floor, G Block opposite to Reliance
                        Trends, Sahakara Nagar Main rd, Byatarayanapura,
                        Bengaluru, Karnataka 560092
                      </Link>
                    </li>
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span
                        style={{ cursor: "pointer" }}
                        className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2 text-white"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handleWhatsappClick}
                      >
                        Whatsapp
                      </span>
                    </li>
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span
                        style={{ cursor: "pointer" }}
                        className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2 text-white"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handleLinkedinClick}
                      >
                        LinkedIn
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 px-5 rounded-3">
                <Form
                  name="contact-form"
                  layout="vertical"
                  onFinish={onFinish}
                  autoComplete="off"
                  size="large"
                >
                  <Form.Item
                    label={<span className="text-white">Name</span>}
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>

                  <Form.Item
                    label={<span className="text-white">Email</span>}
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    label={<span className="text-white">Phone</span>}
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your phone number" />
                  </Form.Item>

                  <Form.Item
                    label={<span className="text-white">Note</span>}
                    name="note"
                  >
                    <Input.TextArea
                      rows={3}
                      placeholder="Enter your message or note"
                    />
                  </Form.Item>

                  <Form.Item
                    name="consent"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error(
                                  "You must agree to the terms and conditions"
                                )
                              ),
                      },
                    ]}
                  >
                    <Checkbox className="text-white">
                      I hereby authorize to send notifications via
                      SMS/Messages/Promotional/Informational messages and agree
                      to the{" "}
                      <Link to="/termsandcondition">Terms of Service</Link> and{" "}
                      <Link to="/privacypolicies">Privacy Policy</Link>.
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-100">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
