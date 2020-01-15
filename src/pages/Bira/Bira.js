import React from 'react';
import PageContent from '../../components/Layout/PageContent';
import FlexContainer from '../../components/Layout/FlexContainer';
import PageTitle from '../../components/Layout/PageTitle';
import Paragraph from '../../components/Layout/Paragraph';
import BiraCard from '../../components/Card/BiraCard';


const Bira = (props) => {  
  return (
    <PageContent>
      <FlexContainer>
        <PageTitle label="bira" icon={<img src="/img/icon/island.svg" alt="island icon"/>} />
        <Paragraph label="biraDesc"/>
        <PageTitle label="whatToDoInBira"/>
        <Paragraph label="whatToDoInBiraDesc" />
        <BiraCard image="pinsi.jpg" title="pinsi" content="pinsiDesc" link="http://www.unesco.org/archives/multimedia/?pg=33&amp;s=films_details&amp;id=4661" linkLabel="here"/>
        <BiraCard title="cliffJumping" image="cliff_jumping.jpg" content="cliffJumpingDesc"/>
        <BiraCard title="mandalaRia" content="mandalaRiaDesc" image="cave.jpg"/>
        <BiraCard title="liukangIsland" content="liukangIslandDesc" image="liukanglu.jpg"/>
        <BiraCard title="puaJangoViewpoint" content="puaJangoViewpointDesc" image="pua_janggo.jpg"/>
        <PageTitle label="howToAccessBira" />
        <Paragraph label="howToAccessBiraDesc"/>
        <Paragraph label="howToAccessBiraDesc2"/>
      </FlexContainer>
    </PageContent>
  )
}

export default Bira;