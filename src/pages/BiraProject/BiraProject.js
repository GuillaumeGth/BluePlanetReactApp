import React from 'react';
import Text from 'react-text';
import styled from 'styled-components';
import PageContent from '../../components/Layout/PageContent';
import Link from '../../components/Link';
import FlexContainer from '../../components/Layout/FlexContainer';
import PageTitle from '../../components/Layout/PageTitle';
import Paragraph from '../../components/Layout/Paragraph';


const BiraProject = (props) => {
  const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;`;
  const ListItem = styled.li`
    width: 46%;
    padding: 12px;
    font-size: .8em;
    margin: 1px;
    background: rgba(0, 0, 0, .06);`;
  const List2 = styled.ul`
    margin: 0;
    padding: 2rem;
    font-size: 1.4rem;`;
  const ListItem2 = styled.li`
    ${List2}.not-include &{
      border-left: 7px solid #db3939 !important;
    }
    list-style-type: none;
    padding: 10px;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.25);
    border-left: 7px solid #55cd09;
    border-radius: 2px;
    min-height: 60px;
    margin: 0 0 9px 0;
    font-size: .9em;
    display: flex;
    align-items: center;
    transition: .4s;
    position: relative;
    padding-left: 43px;`;
  return (
    <PageContent>
      <FlexContainer fullWidth>
        <PageTitle label="biraprojectTitle" />
        <PageTitle isSubTitle label="biraprojectSubTitle" />
        <Paragraph label="biraprojectP1"/>
        <Paragraph label="biraprojectP2"/>
        <PageTitle isSubTitle label="biraprojectMenu" />
        <Paragraph label="biraprojectP3"/>
        <Paragraph label="biraprojectP4"/>
        <Paragraph label="biraprojectP5"/>
        <PageTitle label="lifeAsAnIntern" />
        <PageTitle isSubTitle label="whyBecomeAnDM" />
        <Paragraph label="whyBecomeAnDMP1"/>
        <Paragraph label="whyBecomeAnDMP2"/>
        <Paragraph label="whyBecomeAnDMP3"/>
        <PageTitle isSubTitle label="currentProject" />
        <Paragraph>
          <List>
            <ListItem><Text id="currentProjectListItem1"/></ListItem>
            <ListItem><Text id="currentProjectListItem2"/></ListItem>
            <ListItem><Text id="currentProjectListItem3"/></ListItem>
            <ListItem><Text id="currentProjectListItem4"/></ListItem>
            <ListItem><Text id="currentProjectListItem5"/></ListItem>
            <ListItem><Text id="currentProjectListItem6"/></ListItem>
          </List>
        </Paragraph>
        <Paragraph label="forMoreInfo" />
        <PageTitle isSubTitle label="whoCanApply" />
        <Paragraph label="whoCanApplyP1"/>
        <PageTitle isSubTitle label="programFees" />
        <Paragraph label="programFeesP1"/>
        <FlexContainer direction="row">
          <FlexContainer>
            <List2>
              <ListItem2 data-text-code="allPackageIncludeListItem2">Airport pick up and transfer from Makasar to project headquarters at Blue Planet Dive Resort</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem1">Shared accommodation</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem3">Dive Master Course Fees</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem4">5 ecology specialty courses</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem5">2 program shirts</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem6">VISA assistance</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem7">Pre arrival training materials and manuals</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem8">Pre arrival support</ListItem2>
            </List2>
          </FlexContainer>
          <FlexContainer>
            <List2 className="not-include">
              <ListItem2 data-text-code="allPackageIncludeListItem2">Airport pick up and transfer from Makasar to project headquarters at Blue Planet Dive Resort</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem1">Shared accommodation</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem3">Dive Master Course Fees</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem4">5 ecology specialty courses</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem5">2 program shirts</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem6">VISA assistance</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem7">Pre arrival training materials and manuals</ListItem2>
              <ListItem2 data-text-code="allPackageIncludeListItem8">Pre arrival support</ListItem2>
            </List2>
          </FlexContainer>
        </FlexContainer>
        <Paragraph label="forMoreInfoackage"/>
        <PageTitle isSubTitle label="howToApply" />
        <Paragraph label="howToApplyP1"/>
        <Paragraph>
          <FlexContainer direction="row">
            <Text id="applyOnline" />
            <Link to="https://indooceanproject.org/apply-now/" noTranslate label="indooceanproject.org"></Link>
          </FlexContainer>
        </Paragraph>
        <Paragraph>
          <FlexContainer direction="row">
            <Text id="orContact" />
            <Link externalLink to="mailto:info@indooceanproject.org" noTranslate label="Indo Ocean Project"></Link>
          </FlexContainer>
        </Paragraph>
      </FlexContainer>
    </PageContent>
  )
}

export default BiraProject;