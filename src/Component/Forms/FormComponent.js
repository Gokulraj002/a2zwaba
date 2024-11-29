import React from "react";
import { Form, Input, Select, Button, notification } from "antd";
import axios from "axios";

const { Option } = Select;

const FormComponent = ({ title, buttonText }) => {
  // Create a form instance to control the form
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Append access key to form data
      const data = { ...values, access_key: "1e5d118a-e389-42db-99d1-a16d8fab4be3" };

      // Send form data to Web3Forms
      const response = await axios.post("https://api.web3forms.com/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Your form has been submitted successfully!",
        });

        // Reset the form fields
        form.resetFields();
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "There was an error submitting your form. Please try again later.",
      });
    }
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h3 className="mb-3 text-center">{title}</h3>
      <p className="text-center">Get started in just a few steps and go live within minutes.</p>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        {/* Name */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter Your Name" />
        </Form.Item>

        {/* Company */}
        <Form.Item
          label="Company"
          name="company"
          rules={[{ required: true, message: "Please enter your company name" }]}
        >
          <Input placeholder="Enter Your Company Name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email", type: "email" },
          ]}
        >
          <Input placeholder="Enter Your Email Address" />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: "Please enter your phone number" }]}
        >
          <Input addonBefore="+91" placeholder="Enter Your Phone Number" />
        </Form.Item>

        {/* Services Interested */}
        <Form.Item
          label="Services Interested"
          name="services"
          rules={[{ required: true, message: "Please select at least one service" }]}
        >
          <Select mode="multiple" placeholder="Select Services" allowClear>
            <Option value="Waba Service">Waba Service</Option>
            <Option value="RCS Service">RCS Service</Option>
            <Option value="Bulk SMS Service">Bulk SMS Service</Option>
            <Option value="Voice Call Service">Voice Call Service</Option>
            <Option value="OTP Service">OTP Service</Option>
          </Select>
        </Form.Item>

        {/* Industry */}
        <Form.Item
          label="Industry"
          name="industry"
          rules={[{ required: true, message: "Please select your industry" }]}
        >
          <Select placeholder="Select Industry">
            <Option value="Technology">Technology</Option>
            <Option value="Finance">Finance</Option>
            <Option value="Healthcare">Healthcare</Option>
            <Option value="E-commerce">E-commerce</Option>
          </Select>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
