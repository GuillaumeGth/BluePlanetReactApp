import React from "react";
import SectionTitle from "./SectionTitle";
import SectionControl from "./style";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
const Section = props => {
  return (
    <SectionControl className={isMobile ? "mobile" : "browser"}>
      {props.to ? (
        <Link to={props.to} style={{ textDecoration: "none" }}>
          <SectionTitle label={props.title} color={props.color}></SectionTitle>
        </Link>
      ) : (
        <>
          <SectionTitle label={props.title} color={props.color}></SectionTitle>
        </>
      )}

      {props.children}
    </SectionControl>
  );
};

export default Section;
