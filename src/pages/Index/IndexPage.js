import React from "react";
import Text from "react-text";
import Section from "../../components/Layout/Section";
import SectionParagraph from "../../components/Layout/Section/SectionParagraph";
import styled from "styled-components";
import Accordion from "../../components/Accordion";
import SectionContent from "../../components/Layout/Section/SectionContent";
import SectionContentTitle from "../../components/Layout/Section/SectionContentTitle";
import Form from "../../components/Form";
import GoogleMap from "../../components/GoogleMap";
import CardControl from "../../components/Card";
import FlexContainer from "../../components/Layout/FlexContainer";
import Instagram from "../../components/Instagram";
import Paragraph from "../../components/Layout/Paragraph";
import { isMobile, isBrowser } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const IndexPage = props => {
  const DivImages = styled.div`
    width: ${isMobile ? `${window.innerWidth}px` : "1300px"};
    height: ${isMobile ? `400px` : "500px"};
    display: block;
  `;

  const BackgroundImg = styled.img`
    top: 0;
    left: 0;
    width: 100%;
  `;

  const LogoImg = styled.img`
    position: absolute;
    z-index: 1;
    margin: auto;
    width: 20%;
    top: 220px;
  `;

  const WelcomeImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Legend = styled.div`
    font-family: "Amatic SC";
    font-size: 6em;
    position: absolute;
    top: 1.7em;
    color: white;
    text-align: center;
    width: 100%;
  `;
  const params = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: isBrowser ? 2 : 1,
    autoplay: true
  };
  const params2 = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: isBrowser ? 3 : 1,
    autoplay: true
  };
  return (
    <div>
      <WelcomeImages>
        <Legend className="welcome-text">
          <Text id="welcomeToBira" />
        </Legend>
        <LogoImg src="img/logo.png" alt="logo" className="logo" />
        <BackgroundImg
          className="welcome-img"
          src="img/background.jpg"
          alt="logo"
        />
      </WelcomeImages>
      <Section to="diving" title="diving">
        <SectionContent>
          <SectionContentTitle label="divingSectionTitle" />
          <SectionParagraph content="divingSectionContent"></SectionParagraph>
          {isMobile ? (
            <DivImages>
              <Slider {...params}>
                <img alt="img" src="img/ray-mobile.jpg" />
                <img alt="img" src="img/shark-mobile.jpg" />
                <img alt="img" src="img/turtle-mobile.jpg" />
              </Slider>
            </DivImages>
          ) : null}
        </SectionContent>
      </Section>
      <Accordion visible={!isMobile}></Accordion>
      <Section to="bira" title="bira" color="blue">
        <SectionContent>
          <SectionContentTitle label="biraSectionTitle" />
          <SectionParagraph
            title="biraSectionTitle"
            content="biraSectionContent"
          ></SectionParagraph>
          <DivImages>
            <Slider {...params}>
              <img alt="img" src="img/bira2.jpg" />
              <img alt="img" src="img/bira.jpeg" />
            </Slider>
          </DivImages>
        </SectionContent>
      </Section>
      <Section title="aboutUsMenu" color="turquoise">
        <SectionContent>
          <SectionContentTitle label="aboutUsSectionSubTitle" />
          <SectionParagraph content="aboutUsSectionContentP1" />
          <SectionParagraph content="aboutUsSectionContentP2" />
        </SectionContent>
      </Section>
      <GoogleMap
        lat={-5.559116}
        lng={120.24}
        zoom={12}
        markerLat={-5.60285}
        markerLng={120.4488}
      />
      <Section title="otherActivities" color="yellow">
        <SectionContent>
          <SectionContentTitle label="otherActivitiesSubTitle" />
          <Paragraph>
            <FlexContainer direction="row">
              <div
                style={{
                  display: "block",
                  width: `${isMobile ? `${window.innerWidth}px` : "auto"}`,
                  height: "500px"
                }}
              >
                <Slider {...params2}>
                  <CardControl
                    image="paddle.jpg"
                    title="standUpPaddle"
                    content="standUpPaddleDesc"
                  />
                  <CardControl
                    image="snorkeling.jpg"
                    title="snorkeling"
                    content="snorkelingDesc"
                  />
                  <CardControl
                    image="scooter.jpg"
                    title="scooter"
                    content="scooterDesc"
                  />
                </Slider>
              </div>
            </FlexContainer>
          </Paragraph>
        </SectionContent>
      </Section>
      <Section to="contact" title="contact">
        <SectionContent width={isMobile ? "full" : "auto"}>
          <SectionContentTitle label="sendUsAMessage" />
          <Form></Form>
        </SectionContent>
      </Section>
      <Instagram visible={isBrowser} />
    </div>
  );
};

export default IndexPage;
