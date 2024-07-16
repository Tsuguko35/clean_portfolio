import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProjectContext } from "../context";

function DelayedLink({ to, children, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { openLoading, setOpenLoading } = useContext(ProjectContext);

  const handleClick = (event) => {
    event.preventDefault();
    if (location.pathname.toLowerCase() !== to.toLowerCase()) {
      setOpenLoading(true);
      const randomDelay = 1000 + Math.random() * 500; // 1 to 1.5 seconds in milliseconds

      setTimeout(() => {
        navigate(to);
      }, randomDelay);
    }
  };
  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export default DelayedLink;
