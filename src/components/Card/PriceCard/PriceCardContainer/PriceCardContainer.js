import React from "react";
import FlexContainer from "../../../Layout/FlexContainer";
import PageTitle from "../../../Layout/PageTitle";
import PriceCard from "../PriceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isBrowser, isMobile } from "react-device-detect";
import styled from "styled-components";
const PriceCardContainer = props => {
  const params = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: isBrowser ? props.data.items.length : 1,
    autoplay: true
  };
  const browserWidth = props.data.items.length * 280;
  const containerWidth = isMobile
    ? window.innerWidth
    : browserWidth > window.innerWidth
    ? window.innerWidth
    : browserWidth;
  const Content = styled.div`
    padding-top: ${isBrowser ? "150" : "65"}px;
  `;
  const writeCards = () => {
    return props.data
      ? props.data.items.map((e, i) => {
          return (
            <PriceCard
              details={e.details}
              title={e.title}
              price={e.price}
              icon={e.icon}
              ribon={e.ribon}
              key={`funDivePriceCard_${i}`}
            />
          );
        })
      : null;
  };
  return (
    <Content>
      <FlexContainer
        width="full"
        direction="row"
        align="center"
        justify="center"
        wrap
      >
        <PageTitle label={props.data.title} />

        {isMobile ? (
          <div
            className="slider-container"
            style={{
              display: "block",
              width: containerWidth
            }}
          >
            <Slider {...params}>{writeCards()}</Slider>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {writeCards()}
          </div>
        )}
      </FlexContainer>
    </Content>
  );
};

export default PriceCardContainer;
