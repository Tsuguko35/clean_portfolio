import React, { useRef, useState } from "react";
import "../../styles/small-components/contactForm.css";
import emailjs from "emailjs-com";
import LoadingDot from "../LoadingDot";

function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setSubmit(true);
    emailjs
      .sendForm(
        "service_2n6x5qe",
        "template_5w6vx2b",
        form.current,
        "pJMPMP0XK7HM6Ao7t"
      )
      .then(
        () => {
          setSubmit(false);
          setSubmitStatus("success");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setSubmit(false);
          setSubmitStatus("error");
        }
      );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contactForm"
      className="contactForm"
    >
      <div className="custom-input">
        <p className="label">Name</p>
        <input
          name="name"
          type="text"
          value={formData.name}
          placeholder="Your name"
          onChange={handleChange}
          disabled={submit}
          required
        />
      </div>
      <div className="custom-input">
        <p className="label">Email Address</p>
        <input
          name="email"
          type="text"
          value={formData.email}
          placeholder="Your email address"
          onChange={handleChange}
          disabled={submit}
          required
        />
      </div>
      <div className="custom-input">
        <p className="label">Message</p>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your message here..."
          onChange={handleChange}
          disabled={submit}
          required
        ></textarea>
      </div>
      <button type="submit" disabled={submit}>
        {submit ? <LoadingDot /> : "Submit"}
      </button>
      <div className="status-holder">
        {submitStatus === "success" && (
          <p className="success-indicator success">Message Sent!</p>
        )}
        {submitStatus === "error" && (
          <p className="success-indicator error">An Error Occured!</p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
