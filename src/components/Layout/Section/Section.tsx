import React, { FunctionComponent } from "react";
import SectionTitle from "./SectionTitle";
import SectionControl from "./style";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
type Props = {
  to: string,
  title: string,
  color: string,
  noMargin: boolean
}
const Section: FunctionComponent<Props >= ({to, title, color, children, noMargin = false}) => {
  return (
    <SectionControl className={isMobile ? "mobile" : "browser"}>
      {to ? (
        <Link to={to} style={{ textDecoration: "none" }}>
          <SectionTitle label={title} color={color}></SectionTitle>
        </Link>
      ) : (
        <>
          <SectionTitle label={title} color={color}></SectionTitle>
        </>
      )}

      {children}
    </SectionControl>
  );
};

export default Section;
