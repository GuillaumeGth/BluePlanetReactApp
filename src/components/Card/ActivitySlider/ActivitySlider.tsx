import React, { FunctionComponent } from "react";
import CardControl from "./../Card"
import {Settings} from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isBrowser, isMobile } from "react-device-detect";

const ActivitySlider: FunctionComponent = () => {
  const params2: Settings = {
    dots: true,
    lazyLoad: "progressive",
    infinite: true,
    speed: 500,
    slidesToShow: isBrowser ? 3 : 1,
    autoplay: true,
  };
  if (isMobile)
 return ( <Slider {...params2}>
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
                </Slider>);
  
  return (<div style={{display: "flex", flex: "1"}}>
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
    /></div>);
  }

export default ActivitySlider;
