import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const { pathname, search, hash } = useLocation();

  return (
    <div>
      <h1>About</h1>
      <p>This is example basic project for react router.</p>
      {search === "?detail=true" && <p>set about detail</p>}
    </div>
  );
};

export default About;
