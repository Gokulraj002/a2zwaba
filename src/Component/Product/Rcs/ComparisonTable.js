import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// import RcsImage1 from '../../image/rcs11.png';
// import RcsImage2 from '../../image/rcs3.jpg';

// JSON Data
const tableData = {
  title: "Compare RCS Messaging Options",
  subtitle: "Key differences between SMS and RCS Messaging",
  headers: ["Feature", "SMS", "RCS Messaging"],
  rows: [
    {
      feature: "Rich Media Support",
      sms: {
        icon: "times",
        color: "red",
        text: "Only text messages and links"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Supports images, videos, and carousels"
      }
    },
    {
      feature: "Verified Sender",
      sms: {
        icon: "times",
        color: "red",
        text: "Not available"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Brand-verified sender with logo"
      }
    },
    {
      feature: "Suggested Replies and Actions",
      sms: {
        icon: "times",
        color: "red",
        text: "Not supported"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Interactive replies and quick actions"
      }
    },
    {
      feature: "Read Receipts",
      sms: {
        icon: "times",
        color: "red",
        text: "Not supported"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Track message reads in real-time"
      }
    },
    {
      feature: "Two-Way Communication",
      sms: {
        icon: "check",
        color: "green",
        text: "Supports replies"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Enhanced, real-time interaction"
      }
    },
    {
      feature: "Custom Branding",
      sms: {
        icon: "times",
        color: "red",
        text: "Not available"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Customized with brand colors and styles"
      }
    }
  ]
};

// Component
const ComparisonTable = () => {
  const getIcon = (icon, color) => {
    const iconMap = {
      check: faCheckCircle,
      times: faTimesCircle
    };

    return (
      <FontAwesomeIcon
        icon={iconMap[icon]}
        className="me-2"
        style={{ fontSize: "1.2rem", color }}
      />
    );
  };

  return (
    <div className="bg2">
      <div className="container py-5 aos">
        <h2 className="text-center fw-bold mb-3" style={{ color: "#203239" }}>
          {tableData.title}
        </h2>
        <h4
          className="text-center mb-4"
          style={{ color: "#203239", fontWeight: "400" }}
        >
          {tableData.subtitle}
        </h4>
        <div className="table-responsive aos">
          <table
            className="table table-bordered table-striped align-middle"
            data-aos="fade-up"
          >
            <thead data-aos="fade-right" data-aos-duration="2000">
              <tr>
                {tableData.headers.map((header, index) => (
                  <th
                    className="p-3"
                    key={index}
                    style={{
                      backgroundColor: index === 0 ? "#f8f9fa" : "#008060",
                      color: index === 0 ? "#000000" : "#ffffff",
                      fontWeight: "600",
                      fontSize: "1rem"
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody data-aos="fade-left" data-aos-duration="2000">
              {tableData.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="p-3">{row.feature}</td>
                  <td>
                    {getIcon(row.sms.icon, row.sms.color)}
                    {row.sms.text}
                  </td>
                  <td>
                    {getIcon(row.rcs.icon, row.rcs.color)}
                    {row.rcs.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <h2 className="head1 text-center py-3">Our RCS Messaging Templates</h2> */}
        </div>

        {/* <div className="row">
          <div className="col-12 col-md-6" data-aos="zoom-in">
            <img src={RcsImage1} alt="RCS Template 1" width="100%" />
          </div>
          <div className="col-12 col-md-6 d-grid" data-aos="zoom-in">
            <div className="place-center">
              <img src={RcsImage2} alt="RCS Template 2" width="100%" className="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ComparisonTable;
