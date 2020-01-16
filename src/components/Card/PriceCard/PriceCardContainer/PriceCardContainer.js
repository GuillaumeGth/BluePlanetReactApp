import React from "react";
import FlexContainer from "../../../Layout/FlexContainer";
import PageTitle from "../../../Layout/PageTitle";
import PriceCard from "../PriceCard";

const PriceCardContainer = props => {
  return (
    <FlexContainer
      fullWidth
      direction="row"
      align="center"
      justify="center"
      wrap
    >
      <PageTitle label={props.data.title} />
      {props.data
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
        : null}
    </FlexContainer>
  );
};

export default PriceCardContainer;
