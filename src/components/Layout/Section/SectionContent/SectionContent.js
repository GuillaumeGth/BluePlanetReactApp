import React from "react";
import SectionContentControl from "./style";
import { isMobile } from "react-device-detect";
const SectionContent = props => {
  return (
    <SectionContentControl
      className={`${props.fullWidth ? "full-width" : ""} ${
        isMobile ? "mobile" : "browser"
      }`}
    >
      {props.children}
    </SectionContentControl>
  );
};

export default SectionContent;
