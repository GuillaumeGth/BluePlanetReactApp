import React from "react";
import Text from "react-text";
import SectionContentTitleControl from "./style";
import { isBrowser } from "react-device-detect";
const SectionContentTitle = props => {
  return (
    <SectionContentTitleControl className={isBrowser ? "browser" : "mobile"}>
      <Text id={props.label}></Text>
    </SectionContentTitleControl>
  );
};

export default SectionContentTitle;
