import React from "react";
import "./style.scss";

const FlexContainer = props => {
  return (
    <div className="footer">
      <span>
        powered by{" "}
        <a
          href="https://www.linkedin.com/in/guillaume-zarb-95a7087a/"
          target="blank"
        >
          Guillaume Z.
        </a>
      </span>
      <span>© 2020 Blue Planet Dive Resort. All rights reserved.</span>
      {props.children}
    </div>
  );
};

export default FlexContainer;
