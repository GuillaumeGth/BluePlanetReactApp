import React from "react";
import "./style.scss";

const FlexContainer = (props) => {
  return (
    <footer className="footer">
      <span>
        powered by{" "}
        <a
          href="https://www.linkedin.com/in/guillaume-zarb-95a7087a/"
          target="blank"
        >
          Guillaume Z.
        </a>
      </span>
      <span>
        © {new Date().getFullYear()} Blue Planet Dive Resort. All rights
        reserved.
      </span>
      {props.children}
    </footer>
  );
};

export default FlexContainer;
