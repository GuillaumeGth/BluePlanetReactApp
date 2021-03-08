import React, { FunctionComponent } from "react";
import Content from "./style";
const PageContent: FunctionComponent = ({children}) => {
  return <Content>{children}</Content>;
};
export default PageContent;
