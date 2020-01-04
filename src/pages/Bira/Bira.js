import React from 'react';
import Section from '../../components/Section';
import SectionContent from '../../components/Section/SectionContent';
import SectionContentTitle from '../../components/Section/SectionContentTitle';
import Form from '../../components/Form';

const Diving = (props) => {  
  return (
    <Section title="contact">
      <SectionContent>
        <SectionContentTitle label="sendUsAMessage" />
        <Form></Form>
      </SectionContent>
    </Section>
  )
}

export default Diving;