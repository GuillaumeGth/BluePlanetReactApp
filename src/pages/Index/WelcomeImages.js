import React, { useState } from "react";
import Text from "react-text";
import styled from "styled-components";
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
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      {!loaded ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "10",
          }}
        />
      ) : null}
      <WelcomeImages>
        {loaded && (
          <>
            <Legend className="welcome-text">
              <Text id="welcomeToBira" />
            </Legend>
            <LogoImg src="img/logo.png" alt="logo" className="logo" />
          </>
        )}
        <BackgroundImg
          onLoad={() => {
            console.log("test");
            setLoaded(true);
          }}
          className="welcome-img"
          src="img/background.jpg"
          alt="logo"
        />
      </WelcomeImages>
    </div>
  );
};

export default WelcomeImages;
