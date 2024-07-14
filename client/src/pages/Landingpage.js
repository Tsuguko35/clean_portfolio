import React from "react";
import { Stars } from "../components";
import "../styles/landingPage.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Landingpage() {
  return (
    <div id="landingPage" className="landingPage">
      <Stars />
      <div className="wrapper">
        <div className="text-content">
          <p className="label">Hello I'm,</p>
          <p className="title">Jazpher Carpio</p>
          <p className="cursive">
            <Typewriter
              options={{
                strings: ["Web Developer", "Fullstack Developer"],
                deleteSpeed: 100,
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="socials"></div>
        <div className="actions">
          <Link className="action-button" to={"/Contact"}>
            Contact Me!
          </Link>
          <Link className="action-button" to={"/Projects"}>
            See My Projects!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
