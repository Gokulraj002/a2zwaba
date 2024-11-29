import React from "react";
import FormComponent from "./FormComponent";
import Timeline from "./TimeLine";

const RequestDemo = () => {
  const onFinish = (values) => {
    console.log("Request Demo Form values:", values);
  };

  return (
    <>
      <Timeline />
      <div className="container py-5 w-50 mx-auto">
        <FormComponent
          title="Request Your Demo"
          buttonText="Request Demo"
          onFinish={onFinish}
        />
      </div>
    </>
  );
};

export default RequestDemo;
