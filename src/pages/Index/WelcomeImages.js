import React, { useState } from "react";
import styled from "styled-components";
const WelcomeImages = (props) => {
  const BackgroundImg = styled.img`
    top: 0;
    left: 0;
    width: 100%;
  `;
  const WelcomeImages = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
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
        <BackgroundImg
          onLoad={() => {
            setLoaded(true);
            if (props.loadingCallback) {
              props.loadingCallback();
            }
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
