import React, { useEffect, useState } from "react";
import { routes } from "../config";
import "../styles/navbar.css";
import "../styles/small-components/hamburgerIcon.css";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { GetWindowWidth } from "../utils";

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

  return (
    <nav id="navbar" className={`navbar ${haveWhiteBackground ? "white" : ""}`}>
      <div className="wrapper for-navbar">
        <Link to={"/"} className="logo">
          <img
            src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720936144/Clean_Portfolio/bhok94iojzabjs1ypd1q.webp"
            alt=""
          />
        </Link>
        {windowWidth >= 768 && (
          <ul className="navbar">
            <li>
              <Link
                to={"/"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/" || isActive
                    ? "active"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/Projects"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/projects"
                    ? "active"
                    : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/About"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/about" ? "active" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/Contact"}
                className={`nav-item ${
                  location.pathname.toLowerCase() === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="nav-item">
                <MdOutlineFileDownload />
                Resume
              </div>
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
                <Link
                  to={"/"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/" || isActive
                      ? "active"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/Projects"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/projects"
                      ? "active"
                      : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={"/About"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/about" ? "active" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/Contact"}
                  className={`nav-item ${
                    location.pathname.toLowerCase() === "/contact"
                      ? "active"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <div className="nav-item">
                  <MdOutlineFileDownload />
                  Resume
                </div>
              </li>
            </ul>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
