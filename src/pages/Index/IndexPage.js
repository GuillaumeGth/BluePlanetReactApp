import React, { Suspense, useState } from "react";
import Section from "../../components/Layout/Section";
import SectionParagraph from "../../components/Layout/Section/SectionParagraph";
import styled from "styled-components";
import SectionContent from "../../components/Layout/Section/SectionContent";
import SectionContentTitle from "../../components/Layout/Section/SectionContentTitle";
import FlexContainer from "../../components/Layout/FlexContainer";
import Paragraph from "../../components/Layout/Paragraph";
import CardControl from "../../components/Card";
import { isMobile, isBrowser } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
// const GoogleMap = React.lazy(() => import("../../components/GoogleMap"));
const Accordion = React.lazy(() => import("../../components/Accordion"));
const WelcomeImages = React.lazy(() => import("./WelcomeImages"));
const Form = React.lazy(() => import("../../components/Form"));
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "red",
      }}
    >
      <script>console.log('loading')</script>
    </div>
  );
};
const IndexPage = () => {
  const DivImages = styled.div`
    
    width: ${isMobile ? `${window.innerWidth}px` : "100%"};
    height: ${isMobile ? `400px` : "500px"};
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
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
    speed: 1000,
    slidesToShow: isBrowser ? 2 : 1,
    autoplay: true,
    accessibility: true,
  };
  const params2 = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: isBrowser ? 3 : 1,
    autoplay: true,
  };
  const [mainImagesLoaded, setMainImagesLoaded] = useState(false);
  return (
    <div>
      <Suspense fallback={Loader()}>
        <WelcomeImages
          loadingCallback={() => {
            setMainImagesLoaded(true);
          }}
        />
      </Suspense>
      <Section to="diving" title="diving">
        <SectionContent>
          <SectionContentTitle label="divingSectionTitle" />
          <SectionParagraph content="divingSectionContent"></SectionParagraph>
          {mainImagesLoaded && isMobile ? (
            <DivImages>
              <Slider {...params}>
                <img alt="img" src="img/ray-mobile.jpg" />
                <img alt="img" src="img/shark-mobile.jpg" />
                <img alt="img" src="img/turtle.jpg" />
              </Slider>
            </DivImages>
          ) : null}
        </SectionContent>
      </Section>
      {mainImagesLoaded && (
        <Suspense fallback={Loader()}>
          <Accordion visible={!isMobile}></Accordion>
        </Suspense>
      )}

      <Section to="bira" title="bira" color="blue">
        <SectionContent>
          <SectionContentTitle label="biraSectionTitle" />
          <SectionParagraph
            title="biraSectionTitle"
            content="biraSectionContent"
          ></SectionParagraph>
        </SectionContent>
      </Section>
      {mainImagesLoaded && (
            <DivImages>
              <Slider {...params}>
                <img alt="bira" src="img/bira2.jpg" />
                <img alt="bira 2" src="img/bira.jpeg" />
              </Slider>
            </DivImages>
          )}
      <Section title="aboutUsMenu" color="turquoise">
        <SectionContent>
          <SectionContentTitle label="aboutUsSectionSubTitle" />
          <SectionParagraph content="aboutUsSectionContentP1" />
          <SectionParagraph content="aboutUsSectionContentP2" />
        </SectionContent>
      </Section>
      {mainImagesLoaded && isMobile ? (
        <DivImages>
          <Slider {...params}>
            <img alt="dive center" src="img/dive-center-1.jpg" />
            <img alt="dive center" src="img/dive-center-2.jpg" />
            <img alt="dive center" src="img/dive-center-3.jpg" />
            <img alt="dive center" src="img/dive-center-4.jpg" />
          </Slider>
        </DivImages>
      ) : (
        <div className="dive-center" style={{ padding: "50px 100px" }}>
          {mainImagesLoaded && (
            <Slider {...params}>
              <img alt="dive center" src="img/dive-center-1.jpg" />
              <img alt="dive center" src="img/dive-center-2.jpg" />
              <img alt="dive center" src="img/dive-center-3.jpg" />
              <img alt="dive center" src="img/dive-center-4.jpg" />
            </Slider>
          )}
        </div>
      )}
      {/* {mainImagesLoaded && (
        <Suspense fallback={Loader()}>
          <GoogleMap
            lat={-5.559116}
            lng={120.24}
            zoom={12}
            markerLat={-5.60285}
            markerLng={120.4488}
          />
        </Suspense>
      )} */}
      <Section title="otherActivities" color="yellow">
        <SectionContent>
          <SectionContentTitle label="otherActivitiesSubTitle" />
          <Paragraph>
            <FlexContainer direction="row">
              <div
                style={{
                  display: "block",
                  width: `${isMobile ? `${window.innerWidth}px` : "auto"}`,
                  height: "500px",
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
          <Suspense fallback={Loader()}>
            <Form></Form>
          </Suspense>
        </SectionContent>
      </Section>
    </div>
  );
};

export default IndexPage;
