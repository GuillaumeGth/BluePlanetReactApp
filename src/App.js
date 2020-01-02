import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import SectionParagraph from './components/Section/SectionParagraph';
import styled from 'styled-components';
import Text from 'react-text';
import dictionary from './data/texts';
import Accordion from './components/Accordion';
import SectionContent from './components/Section/SectionContent';
import SectionContentTitle from './components/Section/SectionContentTitle';
import Form from './components/Form';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function App() {
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
    align-items: center;`

  return (
    <div className="App">
      <Text language="en" dictionary={dictionary}>      
        <Header></Header>
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
        <Section title="bira">
          <SectionContent>
            <SectionContentTitle label="biraSectionTitle" />
            <SectionParagraph title="biraSectionTitle" content="biraSectionContent"></SectionParagraph>    
            <DivImages><LazyLoadImage src="img/bira2.jpg"/><LazyLoadImage src="img/bira.jpeg"/></DivImages>               
          </SectionContent>
        </Section>
        <Section title="contact">
          <SectionContent>
            <SectionContentTitle label="sendUsAMessage" />
            <Form></Form>
          </SectionContent>
        </Section>
      </Text>
    </div>
  );
}

export default App;
