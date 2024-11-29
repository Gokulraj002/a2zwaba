import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const pricingData = [
    {
      package: "Silver Package",
      calls: "5,000 Call",
      originalPrice: "₹1800",
      discount: "50%",
      finalPrice: "₹1200",
      color: "primary",
      features: [
        "100% Delivery",
        "Failed Refund",
        "API Available",
        "Lifetime Validity",
        "3Hrs Retry Enabled",
      ],
      anime:'zoom-in-right',
    },
    {
      package: "Gold Package",
      calls: "10,000 Call",
      originalPrice: "₹9000",
      discount: "50%",
      finalPrice: "₹6000",
      color: "primary",
      features: [
        "100% Delivery",
        "Failed Refund",
        "API Available",
        "Lifetime Validity",
        "3Hrs Retry Enabled",
      ],
      anime:'zoom-in',

    },
    {
      package: "Diamond Package",
      calls: "25,000 Call",
      originalPrice: "₹18,000",
      discount: "50%",
      finalPrice: "₹12,000",
      color: "primary",
      features: [
        "100% Delivery",
        "Failed Refund",
        "API Available",
        "Lifetime Validity",
        "3Hrs Retry Enabled",
      ],
      anime:'zoom-in',

    },
    {
      package: "Platinum Package",
      calls: "50,000 Call",
      originalPrice: "₹67,500",
      discount: "50%",
      finalPrice: "₹40,500",
      color: "primary",
      features: [
        "100% Delivery",
        "Failed Refund",
        "API Available",
        "Lifetime Validity",
        "3Hrs Retry Enabled",
      ],
      anime:'zoom-in-left',

    },
  ];

  return (
    <div className="py-5 bg2">
      <h2 className="text-center py-3 head1">
        Choose the Best Plan for <br />
        Your Voice Call Needs
      </h2>

      {/* Pricing Cards */}
      <div className="container pt-2">
        <div className="row justify-content-center aos">
          {pricingData.map((item, index) => (
            <div className="col-md-3 mb-4" data-aos={item.anime} key={index}>
              <div className="card shadow border-0">
                <div
                  className={`card-header bg-${item.color} text-white text-center`}
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item.package}
                </div>
                <div className="card-body text-center">
                  <h4 className="text-primary">{item.calls}</h4>
                  <p className="text-muted">
                    <s>{item.originalPrice}</s>{" "}
                    <span className="badge bg-light text-primary">
                      SAVE {item.discount}
                    </span>
                  </p>
                  <h4 className="fw-bold">{item.finalPrice}</h4>
                  <hr />
                  <ul className="list-unstyled">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="mb-2 d-flex justify-content-between align-items-center para-color2"
                      >
                        <span className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-success me-2"
                          />
                          {feature}
                        </span>
                        <FontAwesomeIcon
                          icon={faQuestionCircle}
                          className="text-muted"
                          style={{ fontSize: "0.9rem" }}
                        />
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn btn-${item.color} text-white fw-bold w-100 mt-3`}
                    style={{ borderRadius: "20px" }}
                  >
                    Buy Now <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
