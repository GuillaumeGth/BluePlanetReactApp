import React, { useState } from "react";
import Text from "react-text";
import "./card.css";
import { Redirect } from "react-router-dom";

const PriceCard = props => {
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/contact" />;
    }
  };
  const buttonClickHandler = e => {
    setRedirect(true);
  };
  return (
    <>
      {renderRedirect()}
      <div className="table-price">
        {props.ribon ? (
          <span className="soldout">
            <Text id={props.ribon} />
          </span>
        ) : null}
        <div className="pic-item">
          <img src={`/img/icon/${props.icon}.svg`} alt={props.title} />
          <button
            type="button"
            onClick={buttonClickHandler}
            className="best-choice"
          >
            <Text id="book" />
          </button>
        </div>
        <div className="description">
          <h1 className="title">{props.title}</h1>
          <span className="price">{`${props.price} Rp`} </span>
          {props.desc ? (
            <span className="desc">
              <Text id={props.desc} />
            </span>
          ) : null}
          {props.details ? (
            <span className="details">
              <Text id={props.details} />
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default PriceCard;
