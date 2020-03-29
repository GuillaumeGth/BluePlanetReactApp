import React from "react";
import FlexContainer from "../../components/Layout/FlexContainer";
import PageContent from "../../components/Layout/PageContent";
import PageTitle from "../../components/Layout/PageTitle";
import Paragraph from "../../components/Layout/Paragraph";
import styled from "styled-components";
import LinkControl from "../../components/Link";
import Text from "react-text";
import { isMobile } from "react-device-detect";
const Accommodation = props => {
  const Contact = styled.span`
    padding: 8px;
    font-size: 1.5rem;
  `;
  const H2 = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 400;
  `;
  return (
    <PageContent>
      <FlexContainer justify="center" align="center" width="full">
        <PageTitle
          label="accommodationMenu"
          icon={
            isMobile ? (
              false
            ) : (
              <img src="/img/icon/camping.svg" alt="accommodation icon" />
            )
          }
        />
        <Paragraph label="accommodationDesc" />
        <H2>Bara Beach Bungalows :</H2>
        <Paragraph label="baraBeachBungalowsDesc">
          <FlexContainer
            width="full"
            direction="row"
            align="center"
            justify="center"
          >
            <LinkControl
              to="https://www.bara-beach.com"
              target="blank"
              label="www.bara-beach.com"
              noTranslate
            />
            <Contact>
              <Text id="thatYouCanContactAt" />
            </Contact>
            <LinkControl
              to="mailto:info@bara-beach.com"
              label="info@bara-beach.com"
              noTranslate
            />
          </FlexContainer>
        </Paragraph>

        <H2>Phinisi Hostel Bira :</H2>
        <Paragraph label="phinsiHostelBiraDesc">
          <FlexContainer
            width="full"
            direction="row"
            align="center"
            justify="center"
          >
            <LinkControl
              to="https://www.phinisi-hostel.com"
              target="blank"
              label="www.phinisi-hostel.com"
              noTranslate
            />
            <Contact>
              <Text id="thatYouCanContactAt" />
            </Contact>
            <LinkControl
              to="mailto:tevanahousereef@gmail.com"
              label="info@phinisi-hostel.com"
              noTranslate
            />
          </FlexContainer>
        </Paragraph>

        <H2>Tevana House Reef :</H2>
        <Paragraph label="tevenaHouseReefDesc">
          <FlexContainer
            width="full"
            direction="row"
            align="center"
            justify="center"
          >
            <LinkControl
              to="https://www.tevanahousereef.com"
              target="blank"
              label="www.tevanahousereef.com"
              noTranslate
            />
            <Contact>
              <Text id="thatYouCanContactAt" />
            </Contact>
            <LinkControl
              to="mailto:info@bara-beach.com"
              label="tevanahousereef@gmail.com"
              noTranslate
            />
          </FlexContainer>
        </Paragraph>
      </FlexContainer>
    </PageContent>
  );
};

export default Accommodation;
