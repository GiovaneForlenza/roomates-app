import React from "react";
import "../Style/spacer.scss";

function Spacer({ height }) {
  return (
    <div className="spacerContainer" style={{ height: `${height}px` }}></div>
  );
}

export default Spacer;
