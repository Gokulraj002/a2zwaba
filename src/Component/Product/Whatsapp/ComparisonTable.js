import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Try from '../../image/Whatsappp.png'
import Try1 from '../../image/Whats.png'

// JSON Data
const tableData = {
    title: "Compare WhatsApp Business Options",
    subtitle: "Key differences between WhatsApp Business App and API",
  headers: ["Feature", "WhatsApp Business App", "WhatsApp Business API"],
  rows: [
    {
      feature: "Automated Messages",
      app: {
        icon: "times",
        color: "red",
        text: "Not available"
      },
      api: {
        icon: "check",
        color: "green",
        text: "Setup Away, OOO, Welcome messages"
      }
    },
    {
      feature: "Send Bulk Notifications",
      app: {
        icon: "times",
        color: "red",
        text: "Not recommended, only 256 contacts at once"
      },
      api: {
        icon: "check",
        color: "green",
        text: "Yes. Setup & schedule messages in bulk"
      }
    },
    {
      feature: "Multi Agent Access",
      app: {
        icon: "times",
        color: "red",
        text: "Not accessible, only 1 login possible"
      },
      api: {
        icon: "check",
        color: "green",
        text: "Connect multiple agents at once"
      }
    },
    {
      feature: "Integration",
      app: {
        icon: "times",
        color: "red",
        text: "Not possible"
      },
      api: {
        icon: "check",
        color: "green",
        text: "Integrate with 200+ existing CRM"
      }
    },
    {
      feature: "Workflows Setup",
      app: {
        icon: "times",
        color: "red",
        text: "No setup available"
      },
      api: {
        icon: "check",
        color: "green",
        text: "Setup custom and pre-configured workflows"
      }
    },
    {
      feature: "Analytics",
      app: {
        icon: "times",
        color: "red",
        text: "Not possible"
      },
      api: {
        icon: "check",
        color: "green",
        text: "Get campaigns and agent analytics"
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
   <>
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
         <div class="table-responsive aos ">
           <table className="table table-bordered table-striped align-middle" data-aos='fade-up'>
             <thead data-aos='fade-right' data-aos-duration="2000">
               <tr>
                 {tableData.headers.map((header, index) => (
                   <th  className="p-3"
                     key={index}
                     style={{
                       backgroundColor: index === 0 ? "#f8f9fa" : "#008060",
                       color: index === 0 ? "#000000" : "#ffffff",
                       fontWeight: "600",
                       fontSize: "1rem",
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
                   <td  className="p-3">
                     {row.feature}
                   </td>
                   <td >
                     {getIcon(row.app.icon, row.app.color)}
                     {row.app.text}
                   </td>
                   <td >
                     {getIcon(row.api.icon, row.api.color)}
                     {row.api.text}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
    
    
         </div>
       
    
       </div>
     </div>
     
   <div className="container-fluid bg1  pt-5">
      <div className="row aos">
      <h2 className="head1 text-center ">Our Api Template</h2>

        <div className='col-12 col-md-6'data-aos='zoom-in'>
          <img src={Try} alt="Whatsapp" width={'100%'} />
        </div>
     <div className='col-12 col-md-6 d-grid'data-aos='zoom-in'>
          <div className="place-center">
            <img src={Try1} alt="Whatsapp" width={'100%'} className="" />
          </div>
        </div>
     </div>
   </div>
   </>
  );
};

export default ComparisonTable;
