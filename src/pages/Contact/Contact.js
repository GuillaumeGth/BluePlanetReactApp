import React from 'react';
import Paragraph from '../../components/Layout/Paragraph';
import FlexContainer from '../../components/Layout/FlexContainer';
import PageTitle from '../../components/Layout/PageTitle';
import Form from '../../components/Form';
import Link from '../../components/Link';
import PageContent from '../../components/Layout/PageContent';
import Text from 'react-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import GoogleMap from '../../components/GoogleMap';
import { faAt, faPhone, faHourglassHalf, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {  
  const Div = styled.div`font-size: 1.4em;
    margin: 3px 30px;
    width: 100%;`;
  const FaIcon = styled(FontAwesomeIcon)`
    margin: 0 10px 0 0;
  `;
  return (
    <PageContent>
      <FlexContainer fullWidth>
      <PageTitle label="howToAccessBira"/>
      <Paragraph label="howToAccessBiraDesc"/>
      <Paragraph label="howToAccessBiraDesc2"/>
      <PageTitle label="contactInfo"/>
      <FlexContainer>
        <FlexContainer direction="row">
          <Div>
            <FaIcon icon={faAt} />
            <span>Email: contact@blueplanetdiveresort.com</span>
          </Div>
        </FlexContainer>
        <FlexContainer direction="row">
          <Div>
            <FaIcon icon={faPhone} />
            <span>+62 819 4975 8080</span>
          </Div>   
        </FlexContainer>
        <FlexContainer direction="row">
          <Div>
            <FaIcon icon={faHourglassHalf} />
            <span><Text id="openHours" /></span>
          </Div>
        </FlexContainer>
        <FlexContainer direction="row">
          <Div>
            <FaIcon icon={faMapMarkerAlt} />
            <span><Text id="address" /><Link noTranslate label="jalang bara Bira, Sulawesi Selatan, Indonesia" 
                    to="https://www.google.com/maps/search/jalang+bara+Bira,+Sulawesi+Selatan,+Indonesia/@-5.6117125,120.4433497,15z/data=!3m1!4b1"/></span>
          </Div>
        </FlexContainer>
      </FlexContainer>
      <PageTitle label="sendUsAMessage"/>
      <Form></Form>
      <GoogleMap lat={-5.559116} lng={118.240000} zoom={12} markerLat={-5.60285} markerLng={120.4488}/>
      </FlexContainer>
    </PageContent>
  )
}

export default Contact;