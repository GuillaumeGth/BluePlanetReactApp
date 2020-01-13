import React from 'react';
import PageContent from '../../components/Layout/PageContent';
import FlexContainer from '../../components/Layout/FlexContainer';
import PageTitle from '../../components/Layout/PageTitle';
import PriceCard from '../../components/Card/PriceCard';
import styled from 'styled-components';
import Prices from '../../data/prices';
import PriceCardContainer from '../../components/Card/PriceCard/PriceCardContainer';
const Bira = (props) => {  
  return (
    // <PageContent>
      <FlexContainer fullWidth>
        <PriceCardContainer data={Prices.funDive}/>
        <PriceCardContainer data={Prices.classes}/>
        <PriceCardContainer data={Prices.advanceClasses}/>
        <PriceCardContainer data={Prices.activities}/>
      </FlexContainer>
    // </PageContent>
  )
}

export default Bira;