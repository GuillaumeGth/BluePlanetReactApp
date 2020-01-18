import React from "react";
import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = props => {
  return (
    <LazyLoadImage
      effect="blur"
      src={props.src}
      alt={props.alt}
      style={props.style}
    ></LazyLoadImage>
  );
};

export default Image;
