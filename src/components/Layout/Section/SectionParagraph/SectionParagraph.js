import React from "react";
import TextContent from "./style";
import Text from "react-text";
import { isMobile } from "react-device-detect";
const SectionParagraph = props => {
  return (
    <TextContent className={isMobile ? "mobile" : "browser"}>
      <Text id={props.content}></Text>
    </TextContent>
  );
};

export default SectionParagraph;
