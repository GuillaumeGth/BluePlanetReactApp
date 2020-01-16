import React from "react";
import styled from "styled-components";
import Text from "react-text";
import "./card.css";
import Paragraph from "../../Layout/Paragraph";

const BiraCard = props => {
  const Img = styled.img`
    width: 100%;
  `;
  return (
    <div className="blog-container pinsi">
      <div className="blog-header">
        <div className="blog-cover">
          <Img src={"/img/" + props.image} />
        </div>
      </div>

      <div className="blog-body">
        <div className="blog-title">
          <div className="yellow x-large section-title horizontal-divider">
            <Text id={props.title} />
          </div>
        </div>
        <div className="blog-summary">
          <Paragraph
            label={props.content}
            link={props.link}
            linkLabel={props.linkLabel}
          />
        </div>
      </div>
    </div>
  );
};

export default BiraCard;
