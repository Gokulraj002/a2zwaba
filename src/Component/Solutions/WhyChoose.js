import React from "react";

const WhyChoose = ({ data }) => {
  return (
    <div className="bg-light">
      <div className="container py-5 ">
        <h2 className="text-center fw-bold mb-5 font1">{data.title}</h2>
        <div className="row g-4" para>
          {data.items.map((item) => (
            <div
              key={item.id}
              className="col-12 col-md-4 text-center"
              data-aos={item.anime}
            >
              <div className="card border-0 shadow-sm hover h-100">
                {/* Icon */}
                <div
                  className="card-body d-flex flex-column align-items-center"
                  style={{ padding: "2rem" }}
                >
                  <div
                    className=" mb-3"
                  
                  >
                    <i
                      className={`bi ${item.icon} iconcolor`}
                      style={{ fontSize: "40px" }}
                    ></i>
                  </div>
                  {/* Title */}
                  <h5 className="fw-bold text-dark mb-3">{item.title}</h5>
                  {/* Description */}
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
