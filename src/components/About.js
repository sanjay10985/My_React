import React from "react";

function About({ img }) {
  return (
    <div className="about">
      <h1>{img.text}</h1>
      <img src={img.image} alt="" />
    </div>
  );
}

export default About;
