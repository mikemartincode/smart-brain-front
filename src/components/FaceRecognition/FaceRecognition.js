import React from "react";
import "./FaceRecognition.css";

const BorderAllBoxes = props => {
  const Box = props.box;
  if (Box.length > 0) {
    let combineHtml = [];
    for (var i = 0; i < Box.length; i++) {
      combineHtml.push(
        <div
          key={Box[i].topRow}
          className="bounding_box"
          style={{
            top: Box[i].topRow,
            right: Box[i].rightCol,
            bottom: Box[i].bottomRow,
            left: Box[i].leftCol
          }}
        />
      );
    }
    return combineHtml;
  } else {
    // if box was empty return nothing
    return "";
  }
};

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          width="500px"
          height="auto"
          alt=""
        />
        <BorderAllBoxes box={box} />
      </div>
    </div>
  );
};

export default FaceRecognition;
