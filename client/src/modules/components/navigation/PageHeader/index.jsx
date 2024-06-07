import React from "react";
import { Col } from "antd";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";
import BasicPageHeader from "./BasicPageHeader";
import BasicPageHeaderSource from "./BasicPageHeader?raw";
import WhiteBackgroundMode from "./WhiteBackgroundMode";
import WhiteBackgroundModeSource from "./WhiteBackgroundMode?raw";
import UseWithBreadcrumbs from "./UseWithBreadcrumbs";
import UseWithBreadcrumbsSource from "./UseWithBreadcrumbs?raw";
import CompleteExample from "./CompleteExample";
import CompleteExampleSource from "./CompleteExample?raw";
import VariousFormsOfPageHeader from "./VariousFormsOfPageHeader";
import VariousFormsOfPageHeaderSource from "./VariousFormsOfPageHeader?raw";
import Responsive from "./Responsive";
import ResponsiveSource from "./Responsive?raw";

const PageHeader = () => {
  return (
    <>
      <AppComponentHeader
        title="PageHeader"
        refUrl="https://ant.design/components/afix/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="page-a">
          <AppComponentCard
            title="Basic"
            description="Standard header, suitable for use in scenarios that require a brief description."
            component={BasicPageHeader}
            source={BasicPageHeaderSource}
          />
        </Col>
        <Col xs={24} lg={12} key="page-b">
          <AppComponentCard
            title="Use With Bread crumbs"
            description="With breadcrumbs, it is suitable for deeper pages, allowing users to navigate quickly."
            component={UseWithBreadcrumbs}
            source={UseWithBreadcrumbsSource}
          />
        </Col>
        <Col xs={24} lg={12} key="page-c">
          <AppComponentCard
            title="Complete Example"
            description="Show all props provided by PageHeader."
            component={CompleteExample}
            source={CompleteExampleSource}
          />
        </Col>
        <Col xs={24} lg={12} key="page-d">
          <AppComponentCard
            title="Responsive"
            description="Under different screen sizes, there should be different performance"
            component={Responsive}
            source={ResponsiveSource}
          />
        </Col>
        <Col xs={24} lg={12} key="page-e">
          <AppComponentCard
            title="Various Forms Of Page Header"
            description="Use the operating area and customize the sub-nodes, suitable for use in the need to display some complex information to help users quickly understand the information and operations of this page."
            component={VariousFormsOfPageHeader}
            source={VariousFormsOfPageHeaderSource}
          />
        </Col>
        <Col xs={24} lg={12} key="page-f">
          <AppComponentCard
            title="White Background Mode"
            description="The default PageHeader is a transparent background. In some cases, PageHeader needs its own background color."
            component={WhiteBackgroundMode}
            source={WhiteBackgroundModeSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default PageHeader;
