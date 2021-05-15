import React, { CSSProperties, FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
type Props = {
  src: string,
  alt?: string,
  style?: CSSProperties | undefined
}
const Image: FunctionComponent<Props> = ({src, alt, style}) => {
  return (
    <LazyLoadImage
      effect="blur"
      src={src}
      alt={alt}
      style={style}
    ></LazyLoadImage>
  );
};

export default Image;
