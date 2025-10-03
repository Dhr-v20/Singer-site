// import React from "react";

// export default function Contact() {
//   return <> <h2>Contact</h2>
//   <p>Email: singer@email.com</p>
//   <p>Phone: +91 9876543210</p>
//   </>;
// }


import React, { useState } from "react";
import emailjs from "emailjs-com";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID",   // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.number,
          message: formData.message,
          to_email: "dhruvprajapati20503@gmail.com"
        },
        "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", number: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">Fill out the form below to get in touch.</p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Enter your number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
