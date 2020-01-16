import React from "react";
import "./Marker.css";

const Marker = props => {
  return (
    <div>
      <div className="pin bounce" />
      <div className="pulse" />
    </div>
  );
};

export default Marker;
