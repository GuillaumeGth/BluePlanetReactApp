import React from "react";
import FlexContainer from "../../components/Layout/FlexContainer";
import prices from "../../data/prices";
import PriceCardContainer from "../../components/Card/PriceCard/PriceCardContainer";

const Prices = props => {
  return (
    // <PageContent>
    <FlexContainer width="full">
      <PriceCardContainer data={prices.funDive} />
      <PriceCardContainer data={prices.classes} />
      <PriceCardContainer data={prices.advanceClasses} />
      <PriceCardContainer data={prices.activities} />
    </FlexContainer>
    // </PageContent>
  );
};

export default Prices;
