import React from "react";
import Text from "react-text";
import "./card.css";
import Img from "./style";

const DivingCard = props => {
  return (
    <div className={"blog-card" + (props.alt ? " alt" : "")}>
      <div className="meta">
        <div className="photo">
          <Img src={"/img/" + props.image} alt={props.title} />
        </div>
        <ul className="details">
          {props.price ? <li className="author">{props.price}</li> : null}
          {props.date ? (
            <li className="date">
              <Text id={props.date} />
            </li>
          ) : null}
        </ul>
      </div>
      <div className="description">
        <h1>
          <Text id={props.title} />
        </h1>
        {props.age ? <h2>({props.age})</h2> : null}
        <p>
          <Text id={props.desc} />
        </p>
      </div>
    </div>
  );
};

export default DivingCard;
