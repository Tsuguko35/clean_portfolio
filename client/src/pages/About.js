import React, { useEffect } from "react";
import "../styles/about.css";
import { Skills } from "../components";

function About() {
  useEffect(() => {
    document.title = "Jazpher Carpio | About";
  }, []);
  return (
    <div id="about" className="about page-container">
      <div className="wrapper">
        <header className="animate">
          <div className="text-content">
            <p>Hello,</p>
            <p>I'm Jazpher</p>
            <p>Carpio</p>
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719105225/Portfolio_Files/hmppayoiaarwqdk43ks5.webp"
              alt="Pfp"
            />
          </div>
        </header>
        <div className="title-label animate" style={{ animationDelay: "0.6s" }}>
          <p className="title">About</p>
          <p className="label">A little bit about who I am</p>
        </div>
        <p className="paragraph animate" style={{ animationDelay: "0.6s" }}>
          I am a passionate Full Stack Developer with expertise in HTML, CSS,
          JavaScript, React.js, Node.js, PHP, MySQL, and MongoDB. My journey in
          web development has equipped me with a robust understanding of both
          front-end and back-end technologies, enabling me to create dynamic,
          responsive, and user-friendly web applications. With a strong
          foundation in front-end technologies, I build intuitive interfaces,
          while my back-end skills ensure efficient server-side logic and secure
          data management. I am always eager to learn and stay updated with the
          latest industry trends, ready to tackle innovative projects and
          deliver creative solutions.
        </p>
        <div className="title-label animate" style={{ animationDelay: "0.6s" }}>
          <p className="title">Skills</p>
          <p className="label">Skills and Proficiencies</p>
        </div>

        {/* Skills Component */}
        <Skills />
      </div>
    </div>
  );
}

export default About;
