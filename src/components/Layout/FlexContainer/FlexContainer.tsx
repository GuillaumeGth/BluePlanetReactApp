import React, { FunctionComponent } from "react";
import Flex from "./style";
type Props = {
  visible?: boolean | null,
  direction?: string,
  align?: string,
  justify?: string,
  width?: string,
  wrap?: string,
  className?: string
}
const FlexContainer: FunctionComponent<Props> = ({visible,
   direction,
   align, 
   justify,
   width, 
   wrap, 
   className, 
   children}) => {
  let _visible = visible;
  _visible = typeof _visible === "undefined" ? true : visible;
  const getClass = (): string => {
    const _direction = direction === "row" ? "row" : "column",
      _align = align === "center" ? "align-center" : null,
      _justify =
        justify === "end"
          ? "justify-flex-end"
          : justify === "center"
          ? "justify-center"
          : "justify-flex-start",
      _width = typeof width === "string" ? `${width}-width` : null,
      _wrap = wrap ? "wrap" : null,
      classes = [_direction, _align, _justify, _width, _wrap];
    if (className) {
      className.split(" ").forEach(e => classes.push(e));
    }
    return classes.join(" ");
  };
  if (!_visible) return <></>;
  else return <Flex className={getClass()}>{children}</Flex>;
};

export default FlexContainer;
