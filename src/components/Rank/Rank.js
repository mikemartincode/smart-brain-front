import React from "react";
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div class="flex flex-column center w-two-thirds shadow-5 bg-lightest-blue o-80">
      <div className="center black fw6 f2">
        {`${name}, your current entry count is...`}
      </div>
      <div className="black fw6 f2 ma3">{entries}</div>
    </div>
  );
};

export default Rank;
