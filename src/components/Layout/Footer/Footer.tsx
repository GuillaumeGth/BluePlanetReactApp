import React from "react";
import "./style.scss";
type Props = {
  children: any
}
const FlexContainer = ({children}: Props) => {
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
      {children}
    </footer>
  );
};

export default FlexContainer;
