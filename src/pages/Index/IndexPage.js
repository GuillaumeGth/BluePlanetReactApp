import React from 'react';
import Section from '../../components/Layout/Section';
import SectionParagraph from '../../components/Layout/Section/SectionParagraph';
import styled from 'styled-components';
import Accordion from '../../components/Accordion';
import SectionContent from '../../components/Layout/Section/SectionContent';
import SectionContentTitle from '../../components/Layout/Section/SectionContentTitle';
import Form from '../../components/Form';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GoogleMap from '../../components/GoogleMap';
import CardControl from '../../components/Card';
import FlexContainer from '../../components/Layout/FlexContainer';
import Instagram from '../../components/Instagram';
import { createStore } from 'redux'
import ReduxApp from '../../Redux/reducers';
import {
  setActiveMenu
} from '../../Redux/actions';

const IndexPage = (props) => {  
  const store = createStore(ReduxApp);
  store.dispatch(setActiveMenu('index'));
  const DivImages = styled.div`
    display: flex;`;
    
  const BackgroundImg = styled.img`
    top: 0;
    left: 0;
    width: 100%;`;

  const LogoImg = styled.img`
    position: absolute;
    z-index: 1;
    margin: auto;
    width: 20%;
    top: 220px;`;

  const WelcomeImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;

  return (
    <div>
      <WelcomeImages>
          <LogoImg src="img/logo.png" alt="logo" />
          <BackgroundImg src="img/background.jpg" alt="logo" />
        </WelcomeImages>
        <Section title="diving">
          <SectionContent>
            <SectionContentTitle label="divingSectionTitle" />
            <SectionParagraph content="divingSectionContent"></SectionParagraph>                      
          </SectionContent>         
        </Section>
        <Accordion></Accordion>
        <Section title="bira" color="blue">
          <SectionContent>
            <SectionContentTitle label="biraSectionTitle" />
            <SectionParagraph title="biraSectionTitle" content="biraSectionContent"></SectionParagraph>    
            <DivImages><LazyLoadImage src="img/bira2.jpg"/><LazyLoadImage src="img/bira.jpeg"/></DivImages>               
          </SectionContent>
        </Section>
        <Section title="aboutUsMenu" color="turquoise">
          <SectionContent>
            <SectionContentTitle label="aboutUsSectionSubTitle" />
            <SectionParagraph content="aboutUsSectionContentP1" />
            <SectionParagraph content="aboutUsSectionContentP2" />
          </SectionContent>
        </Section>
        <GoogleMap lat={-5.559116} lng={120.240000} zoom={12} markerLat={-5.60285} markerLng={120.4488}/>
        <Section title="otherActivities" color="yellow">
          <SectionContent>
            <SectionContentTitle label="otherActivitiesSubTitle" />
            <FlexContainer direction="row">       
              <CardControl image="paddle.jpg" title="standUpPaddle" content="standUpPaddleDesc"/>
              <CardControl image="snorkeling.jpg" title="snorkeling" content="snorkelingDesc"/>
              <CardControl image="scooter.jpg" title="scooter" content="scooterDesc"/>
            </FlexContainer>
          </SectionContent>
        </Section>
        <Section title="contact">
          <SectionContent>
            <SectionContentTitle label="sendUsAMessage" />
            <Form></Form>
          </SectionContent>
        </Section>
        <Instagram />
    </div>
  )
}

export default IndexPage;