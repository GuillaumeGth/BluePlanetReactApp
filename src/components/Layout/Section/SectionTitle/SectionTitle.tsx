import React, { FunctionComponent } from "react";
import Text from "react-text";
import { Title, SectionTitleControl, SectionChevron } from "./style";
import { isMobile } from "react-device-detect";
type Props = {
  color: string,
  label: string
}
const SectionTitle: FunctionComponent<Props> = ({color, label}) => {
  return (
    <SectionTitleControl
      className={`${color} ${isMobile ? "mobile" : "browser"}`}
    >
      <Title>
        <Text id={label} />
      </Title>
      {isMobile ? (
        <img
          style={{ width: 35, marginTop: 10 }}
          src="img/icon/chevron_right.svg"
          alt=""
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
