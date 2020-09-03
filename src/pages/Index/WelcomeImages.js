import React from "react";
import Text from "react-text";
import styled from "styled-components";
import "./index.css";

const WelcomeImages = () => {
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
  return (
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
  );
};

export default WelcomeImages;
