import React from "react";
import PageContent from "../../components/Layout/PageContent";
import FlexContainer from "../../components/Layout/FlexContainer";
import PageTitle from "../../components/Layout/PageTitle";
import Paragraph from "../../components/Layout/Paragraph";
import Link from "../../components/Link";
import Image from "../../components/Image";

const Insurance = (props) => {
  return (
    <PageContent>
      <FlexContainer>
        <PageTitle label="insurance" />
        <Paragraph label="insuranceP1" />
        <Paragraph label="insuranceP2" />
        <Paragraph label="insuranceP3" />
        <Paragraph label="insuranceP4" />
        <Paragraph label="insuranceP5" />

        <Link
          style={{ margin: "30px", display: "flex", flexDirection: "column" }}
          to="https://www.diveassure.com/en-intl/home/?pid=16356"
          externalLink={true}
          label="insuranceP6"
        >
          <Image src="img/insurance_banner.jpg" alt="insurance banner" />
        </Link>
      </FlexContainer>
    </PageContent>
  );
};

export default Insurance;
