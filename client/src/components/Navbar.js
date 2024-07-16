import React, { useEffect, useState } from "react";
import { routes } from "../config";
import "../styles/navbar.css";
import "../styles/small-components/hamburgerIcon.css";
import { useLocation } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { GetWindowWidth } from "../utils";
import myCV from "../assets/Jazpher_Carpio_CV.pdf";
import DelayedLink from "./DelayedLink";

function Navbar() {
  const location = useLocation();
  const windowWidth = GetWindowWidth();
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const paths = ["/projects", "/contact", "/about"];
  const haveWhiteBackground = paths.find(
    (path) => location.pathname.toLowerCase() === path
  );

  const isActive = !routes.some((route) => {
    return location.pathname.toLowerCase() === route.path.toLowerCase();
  });

  useEffect(() => {
    setOpenNavMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    if (openNavMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNavMenu]);

  return (
    <nav id="navbar" className={`navbar ${haveWhiteBackground ? "white" : ""}`}>
      <div className="wrapper for-navbar">
        <DelayedLink to={"/"} className="logo">
          <img
            src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720936144/Clean_Portfolio/bhok94iojzabjs1ypd1q.webp"
            alt=""
          />
        </DelayedLink>
        {windowWidth >= 768 && (
          <ul className="navbar">
            <li>
              <DelayedLink
                to={"/"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/" || isActive
                    ? "active"
                    : ""
                }`}
              >
                Home
              </DelayedLink>
            </li>
            <li>
              <DelayedLink
                to={"/Projects"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/projects"
                    ? "active"
                    : ""
                }`}
              >
                Projects
              </DelayedLink>
            </li>
            <li>
              <DelayedLink
                to={"/About"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/about" ? "active" : ""
                }`}
              >
                About
              </DelayedLink>
            </li>
            <li>
              <DelayedLink
                to={"/Contact"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </DelayedLink>
            </li>
            <li>
              <a
                href={myCV}
                download="Jazpher Carpio - CV"
                className="nav-item"
              >
                <MdOutlineFileDownload />
                Resume
              </a>
            </li>
          </ul>
        )}
        {windowWidth < 768 && (
          <React.Fragment>
            <div className="hamburger-button">
              <div
                onClick={() => setOpenNavMenu(!openNavMenu)}
                id={`nav-icon3`}
                className={`${openNavMenu ? "open" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={`navbar mobile ${openNavMenu ? "open" : ""}`}>
              <li>
                <DelayedLink
                  to={"/"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/" || isActive
                      ? "active"
                      : ""
                  }`}
                >
                  Home
                </DelayedLink>
              </li>
              <li>
                <DelayedLink
                  to={"/Projects"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/projects"
                      ? "active"
                      : ""
                  }`}
                >
                  Projects
                </DelayedLink>
              </li>
              <li>
                <DelayedLink
                  to={"/About"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/about" ? "active" : ""
                  }`}
                >
                  About
                </DelayedLink>
              </li>
              <li>
                <DelayedLink
                  to={"/Contact"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/contact"
                      ? "active"
                      : ""
                  }`}
                >
                  Contact
                </DelayedLink>
              </li>
              <li>
                <a
                  href={myCV}
                  download="Jazpher Carpio - CV"
                  className="nav-item"
                >
                  <MdOutlineFileDownload />
                  Resume
                </a>
              </li>
            </ul>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
