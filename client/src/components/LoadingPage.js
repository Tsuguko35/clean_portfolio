import React, { useContext, useEffect, useState } from "react";
import "../styles/small-components/loadingPage.css";
import { useLocation } from "react-router-dom";
import { ProjectContext } from "../context";
import LoadingBox from "./LoadingBox";

function LoadingPage() {
  const location = useLocation();
  const { openLoading, setOpenLoading } = useContext(ProjectContext);

  useEffect(() => {
    if (openLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openLoading]);

  useEffect(() => {
    setOpenLoading(false);
  }, [location.pathname]);

  return (
    <div
      id="loadingPage"
      className={`loadingPage ${openLoading ? "open" : ""}`}
    >
      <LoadingBox />
      <p>Loading</p>
    </div>
  );
}

export default LoadingPage;
