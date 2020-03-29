import React from "react";
import Div from "./style";
import FlexContainer from "../FlexContainer";
import Text from "react-text";
import LinkControl from "../../Link";
import "./paragraph_style.scss";

const Paragraph = props => {
  return (
    <FlexContainer align="center" direction="row" className="paragraph">
      <Div>
        {props.label ? <Text id={props.label} /> : null}
        {props.link ? (
          <LinkControl
            className="paragraph-link"
            to={props.link}
            label={props.linkLabel}
          />
        ) : null}
        {props.children}
      </Div>
    </FlexContainer>
  );
};

export default Paragraph;
