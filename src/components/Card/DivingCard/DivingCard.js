import React, { useState } from "react";
import Text from "react-text";
import "./card.css";
import { Img, TitleContainer, Tag } from "./style";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { isMobile } from "react-device-detect";
import { Redirect } from "react-router-dom";

const DivingCard = props => {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/contact" />;
    }
    return null;
  };
  const onClickHandler = () => {
    setRedirect(true);
  };
  return (
    <div
      className={`blog-card ${props.alt ? "alt" : null} ${
        isMobile ? "mobile" : null
      }`}
    >
      <div className="meta">
        <div className="photo">
          <Img src={"/img/" + props.image} alt={props.title} />
        </div>
      </div>
      <div className="description">
        <TitleContainer>
          <h1>
            <Text id={props.title} />
          </h1>
          {renderRedirect()}
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={onClickHandler}
          >
            Book This Class
          </Button>
        </TitleContainer>
        {props.age ? <h2>({props.age})</h2> : null}
        <p>
          <Text id={props.desc} />
        </p>
        <div className="info-container">
          {props.date ? (
            <div className="date">
              <FontAwesomeIcon
                style={{ margin: "0 10px" }}
                variant=""
                icon={faClock}
              />
              <Text id={props.date} />
            </div>
          ) : null}
          {props.info ? (
            <div className="info">
              <Text id={props.info} />
            </div>
          ) : null}
          {props.price ? <Tag>{props.price}</Tag> : null}
        </div>
      </div>
    </div>
  );
};

export default DivingCard;
