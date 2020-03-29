import React from "react";
import DivingCard from "../../components/Card/DivingCard";
import PageContent from "../../components/Layout/PageContent";
import FlexContainer from "../../components/Layout/FlexContainer";
import PageTitle from "../../components/Layout/PageTitle";
import Paragraph from "../../components/Layout/Paragraph";
import styled from "styled-components";
const Diving = props => {
  const cards = [
    {
      cards: [
        {
          desc: "funDiveDesc",
          title: "funDive",
          info: "10off5+dive",
          price: "490 000 Rp",
          image: "fundive.jpg"
        }
      ]
    },
    {
      category: "courses",
      cards: [
        {
          desc: "discoverScubaDivingDesc",
          title: "discoverScubaDiving",
          date: "oneDay",
          price: "750 000 Rp",
          age: "10YRS+",
          image: "discover.jpg"
        },
        {
          desc: "bubblemakerDesc",
          title: "bubblemaker",
          price: "750 000 Rp",
          info: "8+9YRS",
          image: "kids.jpg"
        },
        {
          desc: "openWaterDesc",
          title: "openWater",
          price: "4 900 000 Rp",
          date: "3_4Days",
          age: "10+YRS",
          image: "openwater.jpg"
        },
        {
          desc: "scubaDiverDesc",
          title: "scubaDiver",
          price: "2 800 000 Rp",
          date: "twoDays",
          age: "10+YRS",
          image: "sccubadiver.jpg"
        },
        {
          desc: "advanceAdventurerDesc",
          title: "advanceAdventurer",
          price: "3 900 000 Rp",
          date: "twoDays",
          age: "12+YRS",
          image: "sccubadiver.jpg"
        },
        {
          desc: "reactRightRescueDesc",
          title: "reactRightRescue",
          price: "6 400 000 Rp",
          date: "3_4Days",
          age: "12+YRS",
          image: "reactright.jpg"
        },
        {
          desc: "divemasterDesc",
          title: "divemaster",
          date: "4weeksMin",
          age: "18+YRS",
          image: "divemaster.jpg"
        }
      ]
    }
  ];
  const Img = styled.img`
    width: 80px;
  `;
  return (
    <PageContent>
      <FlexContainer>
        <PageTitle
          label="diveMenu"
          icon={<Img src="/img/icon/diving-flag.svg" alt="diving flag" />}
        />
        <Paragraph
          label="divingSectionContent"
          link="prices"
          linkLabel="here"
        />
        {cards.map(e => {
          let alt = false;
          return (
            <div key={`diving_card_category_${e.category}`}>
              {e.category ? <PageTitle label={e.category} /> : null}
              {e.cards.map(c => {
                alt = !alt;
                return (
                  <DivingCard
                    key={`diving_card_${c.desc}`}
                    desc={c.desc}
                    title={c.title}
                    date={c.date}
                    price={c.price}
                    image={c.image}
                    alt={alt}
                  />
                );
              })}
            </div>
          );
        })}
        {/* <DivingCard
          desc="funDiveDesc"
          title="funDive"
          date="10off5+dive"
          price="490 000 Rp"
          image="fundive.jpg"
        />
        <PageTitle label="courses" />
        <DivingCard
          desc="discoverScubaDivingDesc"
          title="discoverScubaDiving"
          date="oneDay"
          price="750 000 Rp"
          age="10YRS+"
          image="discover.jpg"
        />
        <DivingCard
          desc="bubblemakerDesc"
          title="bubblemaker"
          price="750 000 Rp"
          age="8+9YRS"
          image="kids.jpg"
        />
        <DivingCard
          desc="openWaterDesc"
          title="openWater"
          price="4 900 000 Rp"
          date="3_4Days"
          age="10+YRS"
          image="openwater.jpg"
        />
        <DivingCard
          desc="scubaDiverDesc"
          title="scubaDiver"
          price="2 800 000 Rp"
          date="twoDays"
          age="10+YRS"
          image="sccubadiver.jpg"
        />
        <DivingCard
          desc="advanceAdventurerDesc"
          title="advanceAdventurer"
          price="3 900 000 Rp"
          date="twoDays"
          age="12+YRS"
          image="sccubadiver.jpg"
        />
        <DivingCard
          desc="reactRightRescueDesc"
          title="reactRightRescue"
          price="6 400 000 Rp"
          date="3_4Days"
          age="12+YRS"
          image="reactright.jpg"
        />
        <DivingCard
          desc="divemasterDesc"
          title="divemaster"
          date="4weeksMin"
          age="18+YRS"
          image="divemaster.jpg"
        /> */}
      </FlexContainer>
    </PageContent>
  );
};

export default Diving;
