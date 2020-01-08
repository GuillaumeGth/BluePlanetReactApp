import React from 'react';
import Section from '../../components/Layout/Section';
import SectionContent from '../../components/Layout/Section/SectionContent';
import SectionContentTitle from '../../components/Layout/Section/SectionContentTitle';
import Form from '../../components/Form';
import PageContent from '../../components/Layout/PageContent';

const Contact = (props) => {  
  return (
    <PageContent>
      <Section title="contact">
        <SectionContent>
          <SectionContentTitle label="sendUsAMessage" />
          <Form></Form>
        </SectionContent>
      </Section>
    </PageContent>
  )
}

export default Contact;