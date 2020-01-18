import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FlexContainer from "../../Layout/FlexContainer";
import {
  CaptionContainer,
  Mask,
  InstagramUnitContainer,
  Video,
  Img
} from "./style";

const InstagramUnit = props => {
  const getStyleAttribute = () => {
    var media = props.media.standard_resolution,
      width = media.width > 550 ? 550 : media.width,
      ratioWidth = width / media.width,
      height = media.height * ratioWidth;
    return { width: width, height: height };
  };

  return (
    <InstagramUnitContainer style={getStyleAttribute()} className="insta-unit">
      {props.type === "video" ? (
        <Video controls>
          <source src={props.src} />
        </Video>
      ) : (
        <>
          <Mask>
            <FlexContainer justify="end" className="flex-unit">
              <CaptionContainer>
                <FontAwesomeIcon color="#e24b4b" icon={faHeart} />
                {props.like}
              </CaptionContainer>
              <CaptionContainer>
                {props.location ? props.location.name : null}
              </CaptionContainer>
            </FlexContainer>
          </Mask>
          <Img
            style={getStyleAttribute()}
            src={props.src}
            alt={props.caption}
          />
        </>
      )}
    </InstagramUnitContainer>
  );
};

export default InstagramUnit;
