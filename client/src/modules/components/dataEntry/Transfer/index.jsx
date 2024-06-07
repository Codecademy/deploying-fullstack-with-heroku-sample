import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Search from "./Search";
import SearchSource from "./Search?raw";
import Advance from "./Advance";
import AdvanceSource from "./Advance?raw";
import CustomData from "./CustomData";
import CustomDataSource from "./CustomData?raw";
import OneWay from "./OneWay";
import OneWaySource from "./OneWay?raw";
import Pagination from "./Pagination";
import PaginationSource from "./Pagination?raw";
import TableTransfer from "./TableTransfer";
import TableTransferDemoSource from "./TableTransfer?raw";
import TreeTransferDemo from "./TreeTransfer";
import TreeTransferDemoSource from "./TreeTransfer?raw";

class Transfer extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Transfer"
          refUrl="https://ant.design/components/transfer/"
        />
        <AppRowContainer>
          <Col xs={24} xl={12} key="transfer-a">
            <AppComponentCard
              title="Basic"
              description="The most basic usage of Transfer involves providing the source data and target keys arrays, plus the rendering and some callback functions."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} xl={12} key="transfer-b">
            <AppComponentCard
              title="Search"
              description="Transfer with a search box."
              component={Search}
              source={SearchSource}
            />
          </Col>
          <Col xs={24} xl={12} key="transfer-c">
            <AppComponentCard
              title="Advance"
              description="Advanced Usage of Transfer."
              component={Advance}
              source={AdvanceSource}
            />
          </Col>
          <Col xs={24} xl={12} key="transfer-d">
            <AppComponentCard
              title="Custom Data"
              description="Custom each Transfer Item, and in this way you can render a complex datasource."
              component={CustomData}
              source={CustomDataSource}
            />
          </Col>
          <Col xs={24} xl={12} key="transfer-f">
            <AppComponentCard
              title="One Way"
              description="Use oneWay to makes Transfer to one way style."
              component={OneWay}
              source={OneWaySource}
            />
          </Col>

          <Col xs={24} xl={12} key="transfer-g">
            <AppComponentCard
              title="Tree Transfer Demo"
              description="Customize render list with Tree component."
              component={TreeTransferDemo}
              source={TreeTransferDemoSource}
            />
          </Col>
          <Col xs={24} xl={12} key="transfer-h">
            <AppComponentCard
              title="Table Transfer"
              description="Customize render list with Table component."
              component={TableTransfer}
              source={TableTransferDemoSource}
            />
          </Col>
          <Col xs={24} xl={12} key="transfer-i">
            <AppComponentCard
              title="Pagination"
              description="large count of items with pagination."
              component={Pagination}
              source={PaginationSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Transfer;
