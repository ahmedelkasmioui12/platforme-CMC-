import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
     e.preventDefault();

    // Replace "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", and "YOUR_USER_ID" with your actual Email.js IDs
    emailjs
      .sendForm("gmail", "template_j6xt92q", e.target, "hK16NchcPLR5HNwMY")
      .then(
        (response) => {
          alert("Email sent successfully 😇 ", response);

          // Reset the form after successful submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="contact-container" style={{marginTop:"80px",width:"900px"}}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
