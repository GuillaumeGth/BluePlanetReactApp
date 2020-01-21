import React from "react";
import Text from "react-text";
import { Title, SectionTitleControl, SectionChevron } from "./style";
import { isMobile } from "react-device-detect";

const SectionTitle = props => {
  return (
    <SectionTitleControl
      className={`${props.color} ${isMobile ? "mobile" : "browser"}`}
    >
      <Title>
        <Text id={props.label} />
      </Title>
      {isMobile ? (
        <img
          style={{ width: 35, marginTop: 10 }}
          src="img/icon/chevron_right.svg"
        />
      ) : (
        <SectionChevron>
          <img src="img/icon/raquo.svg" alt="chevron right" />
        </SectionChevron>
      )}
    </SectionTitleControl>
  );
};

export default SectionTitle;
