import React from "react";
import "./Navigation.css";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="" style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 fw7 link dim black pr4 underline pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="h3" style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 fw7 link dim black pr4 underline pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="pr4 f3 fw7 link dim black underline pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
