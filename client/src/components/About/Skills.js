import React from "react";
import "../../styles/small-components/skills.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiMongodb, SiPhpmyadmin, SiFirebase } from "react-icons/si";

function Skills() {
  return (
    <div id="skills-container" className="skills-container">
      <div className="skills">
        <div className="skill">
          <FaHtml5 />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaCss3 />
          <p>CSS</p>
        </div>
        <div className="skill">
          <IoLogoJavascript />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact />
          <p>React.js</p>
        </div>
        <div className="skill">
          <FaNodeJs />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <FaPhp />
          <p>PHP</p>
        </div>
        <div className="skill">
          <SiMysql />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <SiPhpmyadmin />
          <p>phpMyAdmin</p>
        </div>
        <div className="skill">
          <SiFirebase />
          <p>Firebase</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
