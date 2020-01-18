import React from "react";
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
