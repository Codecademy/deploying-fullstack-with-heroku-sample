import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import WithIcon from "./WithIcon";
import WithIconSource from "./WithIcon?raw";
import ConfiguringSeparator from "./ConfiguringSeparator";
import ConfiguringSeparatorSource from "./ConfiguringSeparator?raw";
import ReactRouter from "../Breadcrumb/ReactRouter";
import ReactRouterSource from "../Breadcrumb/ReactRouter?raw";
import BreadCrumb from "./BreadCrumb";
import BreadCrumbSource from "../Breadcrumb/BreadCrumb?raw";
import Configuring from "./Configuring";
import ConfiguringSource from "../Breadcrumb/Configuring?raw";

const Breadcrumb = () => {
  return (
    <>
      <AppComponentHeader
        title="Breadcrumb"
        refUrl="https://ant.design/components/breadcrumb/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="breadcrumb-a">
          <AppComponentCard
            title="Basic"
            description="The simplest usage."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="breadcrumb-b">
          <AppComponentCard
            title="WithIcon"
            description="The icon should be placed in front of the text."
            component={WithIcon}
            source={WithIconSource}
          />
        </Col>
        <Col xs={24} lg={12} key="breadcrumb-c">
          <AppComponentCard
            title="ConfiguringSeparator"
            description="The separator can be customized by setting the separator property: separator='>'."
            component={ConfiguringSeparator}
            source={ConfiguringSeparatorSource}
          />
        </Col>

        <Col xs={24} lg={12} key="breadcrumb-d">
          <AppComponentCard
            title="React Router"
            description="Used together with react-router@6+."
            component={ReactRouter}
            source={ReactRouterSource}
          />
        </Col>
        <Col xs={24} lg={12} key="breadcrumb-e">
          <AppComponentCard
            title="Bread Crumb"
            description="Breadcrumbs support drop down menu."
            component={BreadCrumb}
            source={BreadCrumbSource}
          />
        </Col>
        <Col xs={24} lg={12} key="breadcrumb-f">
          <AppComponentCard
            title="Configuring"
            description="The separator can be customized by setting the separator property: Breadcrumb.Separator."
            component={Configuring}
            source={ConfiguringSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};
export default Breadcrumb;
