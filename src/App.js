import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Section from './components/Section.js';
import SectionParagraph from './components/SectionParagraph.js';
import styled from 'styled-components';
import Text from 'react-text';
import dictionary from './data/texts';

function App() {

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
          <SectionParagraph title="divingSectionTitle" content="divingSectionContent"></SectionParagraph>
        </Section>
        <Section title="bira"></Section>
        <Section title="contact"></Section>
      </Text>
    </div>
  );
}

export default App;
