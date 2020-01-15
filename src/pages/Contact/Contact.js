import React from 'react';
import Paragraph from '../../components/Layout/Paragraph';
import FlexContainer from '../../components/Layout/FlexContainer';
import PageTitle from '../../components/Layout/PageTitle';
import Form from '../../components/Form';
import PageContent from '../../components/Layout/PageContent';

const Contact = (props) => {  
  return (
    <PageContent>
      <FlexContainer fullWidth>
      <PageTitle label="howToAccessBira"/>
      <Paragraph label="howToAccessBiraDesc"/>
      <Paragraph label="howToAccessBiraDesc2"/>
      <PageTitle label="contactInfo"/>
        <Form></Form>
      </FlexContainer>
    </PageContent>
  )
}

export default Contact;