import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import NoBorder from "./NoBorder";
import NoBorderSource from "./NoBorder?raw";
import Simple from "./Simple";
import SimpleSource from "./Simple?raw";
import Customize from "./Customize";
import CustomizeSource from "./Customize?raw";
import Column from "./Column";
import ColumnSource from "./Column?raw";
import LoadingCard from "./LoadingCard";
import LoadingCardSource from "./LoadingCard?raw";
import Grid from "./Grid";
import GridSource from "./Grid?raw";
import InnerCard from "./InnerCard";
import InnerCardSource from "./InnerCard?raw";
import WithTabs from "./WithTabs";
import WithTabsSource from "./WithTabs?raw";
import SupportMore from "./SupportMore";
import SupportMoreSource from "./SupportMore?raw";

const Cards = () => {
  return (
    <>
      <AppComponentHeader
        title="Cards"
        refUrl="https://ant.design/components/cards/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="card-a">
          <AppComponentCard
            title="Basic"
            description="A basic card containing a title, content and an extra corner content. Supports two sizes: default and small."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-b">
          <AppComponentCard
            title="Simple Card"
            description="A simple card only containing a content area."
            component={Simple}
            source={SimpleSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-c">
          <AppComponentCard
            title="Customize"
            description="You can use Card.Meta to support more flexible content."
            component={Customize}
            source={CustomizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-d">
          <AppComponentCard
            title="Support More"
            description="A Card that supports cover, avatar, title and description."
            component={SupportMore}
            source={SupportMoreSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-e">
          <AppComponentCard
            title="Loading Card"
            description="Shows a loading indicator while the contents of the card is being fetched."
            component={LoadingCard}
            source={LoadingCardSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-f">
          <AppComponentCard
            title="No Border"
            component={NoBorder}
            description="A borderless card on a gray background."
            source={NoBorderSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-g">
          <AppComponentCard
            title="Column"
            description="Shows a loading indicator while the contents of the card is being fetched."
            component={Column}
            source={ColumnSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-h">
          <AppComponentCard title="Grid" component={Grid} source={GridSource} />
        </Col>
        <Col xs={24} lg={12} key="card-i">
          <AppComponentCard
            title="Inner Card"
            description="It can be placed inside the ordinary card to display the information of the multilevel structure."
            component={InnerCard}
            source={InnerCardSource}
          />
        </Col>
        <Col xs={24} lg={12} key="card-j">
          <AppComponentCard
            title="With Tabs"
            description="More content can be hosted."
            component={WithTabs}
            source={WithTabsSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Cards;
