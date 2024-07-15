import React, { useEffect } from "react";
import { Stars } from "../components";
import "../styles/landingPage.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { GetWindowWidth } from "../utils";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Landingpage() {
  const windowWidth = GetWindowWidth();

  useEffect(() => {
    document.title = "Jazpher Carpio";
  }, []);
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
        <div className="actions">
          <Link className="action-button" to={"/Contact"}>
            Contact Me!
          </Link>
          <Link className="action-button" to={"/Projects"}>
            See My Projects!
          </Link>
          {windowWidth < 768 && (
            <button className="action-button" to={"/Projects"}>
              <MdOutlineFileDownload />
              Resume
            </button>
          )}
        </div>
        <div className="socials">
          <Link to={"https://www.facebook.com/tsuguko34"} target="_blank">
            <FaFacebookSquare />
          </Link>
          <Link to={"www.linkedin.com/in/jazphercarpio"} target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
