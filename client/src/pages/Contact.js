import React from "react";
import "../styles/contact.css";
import { ContactForm } from "../components";
import { MdAlternateEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";

function Contact() {
  return (
    <div id="contact" className="contact page-container">
      <div className="wrapper">
        <header>
          <p className="title">Contact</p>
          <p className="label">Let's Work Together</p>
        </header>
        <div className="contact-container">
          <div className="details">
            <p>
              If you are interested in hiring me or working with me, please feel
              free to contact me via email or through my social media accounts.
              I look forward to hearing from you soon!
            </p>
            <div className="socials">
              <div className="social">
                <MdAlternateEmail />
                <p>carpio.johnjazpher.dc.3188@gmail.com</p>
              </div>
              <div className="social">
                <SlPhone />
                <p>(+63)999 353 7510</p>
              </div>
            </div>
          </div>
          <div className="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
