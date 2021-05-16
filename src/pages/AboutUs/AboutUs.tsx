import React, { FunctionComponent } from "react";
import FlexContainer from "../../components/Layout/FlexContainer";
import PageContent from "../../components/Layout/PageContent";
import PageTitle from "../../components/Layout/PageTitle";
import Paragraph from "../../components/Layout/Paragraph";
import styled from "styled-components";
import LinkControl from "../../components/Link";
import Text from "react-text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isBrowser } from "react-device-detect";
import Image from "../../components/Image";
const AboutUs: FunctionComponent =  () => {
  return (
    <PageContent>
      <FlexContainer justify="center" align="center" width="full">
        <PageTitle label="aboutUsTitle"/>      
        <Paragraph label="aboutUsP1" />
        <PageTitle label="aboutUsMission"/>      
        <Paragraph label="aboutUsP2" />
        <PageTitle label="aboutUsPlasticTitle"/>      
        <Paragraph label="aboutUsPlastic" />
      </FlexContainer>
    </PageContent>
  );
};

export default AboutUs;
