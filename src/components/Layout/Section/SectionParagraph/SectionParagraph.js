import React from "react";
import TextContent from "./style";
import Text from "react-text";

const SectionParagraph = props => {
  return (
    <TextContent>
      <Text id={props.content}></Text>
    </TextContent>
  );
};

export default SectionParagraph;
