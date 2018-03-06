import React from "react";
import "./Logo.css";
import Tilt from "react-tilt";
import Brain from "./brain.png";
const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 200, width: 200 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "20%" }} src={Brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
