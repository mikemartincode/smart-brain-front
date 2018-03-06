import React from "react";
import particleOptions from "./ParticlesOptions";
import Particles from "react-particles-js";
import "./Particles.css";
const particles = () => {
  return <Particles className="particles" params={particleOptions} />;
};

export default particles;
