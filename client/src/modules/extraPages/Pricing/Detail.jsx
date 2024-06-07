import React from "react";
import AppRowContainer from "@crema/components/AppRowContainer";
import PackageOneNew from "./PackageOneNew";
import LovePeople from "./LovePeople";
import PricingTable from "./PricingTable";
import PricingFaq from "./Faq";
import {
  pricingData,
  pricingFaq,
  tableData,
} from "@crema/mockapi/fakedb/extraPages";
import { Col, Row, Typography } from "antd";
import AppCard from "@crema/components/AppCard";
import {
  StyledHeading,
  StyledLovePeopleImgWrapper,
  StyledLovePeopleWrapper,
  StyledSwitchBtn,
  StyledSwitchBtnSuffix,
  StyledSwitchWrapper,
} from "./index.styled";

const PricingDetail = () => {
  const [billingFormat, setBillingFormat] = React.useState("month");

  return (
    <AppRowContainer>
      <Typography.Title
        level={1}
        style={{
          marginTop: 40,
          width: "100%",
          fontSize: 48,
          textAlign: "center",
        }}
      >
        Plans that fit your scale
      </Typography.Title>
      <Typography.Text
        type="secondary"
        style={{
          width: "100%",
          fontSize: "20px",
          textAlign: "center",
          marginBottom: "24px",
          color: "text.secondary",
        }}
      >
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </Typography.Text>
      <StyledSwitchWrapper>
        <StyledSwitchBtn
          className={billingFormat === "month" ? "active" : ""}
          onClick={() => setBillingFormat("month")}
        >
          Monthly billing
        </StyledSwitchBtn>
        <StyledSwitchBtn
          className={billingFormat === "year" ? "active" : ""}
          onClick={() => setBillingFormat("year")}
        >
          Yearly billing
        </StyledSwitchBtn>
        <StyledSwitchBtnSuffix>Save 20%</StyledSwitchBtnSuffix>
      </StyledSwitchWrapper>
      <Col xs={24}>
        <PackageOneNew
          billingFormat={billingFormat}
          pricing={pricingData.pricingOneNew}
        />
      </Col>
      <StyledLovePeopleWrapper>
        <StyledLovePeopleImgWrapper>
          <img src="/assets/images/heartglobe.svg" alt="heartglobe" />
        </StyledLovePeopleImgWrapper>
        <Typography.Title
          level={2}
          style={{
            margin: "auto",
            width: "40%",
            fontSize: 48,
            display: "block",
            textAlign: "center",
          }}
        >
          We love people who are changing the world
        </Typography.Title>
      </StyledLovePeopleWrapper>
      <Col xs={24}>
        <LovePeople data={pricingData.lovePeople} />
      </Col>
      <AppCard align="center">
        <StyledHeading>Compare our Plans</StyledHeading>
        <Row align="center">
          <Col lg={18} sm={24} md={24}>
            <PricingTable billingFormat={billingFormat} tableData={tableData} />
          </Col>
        </Row>
      </AppCard>
      <Col xs={24} style={{ marginTop: 28 }}>
        <PricingFaq pricingFaq={pricingFaq} />
      </Col>
    </AppRowContainer>
  );
};

export default PricingDetail;
