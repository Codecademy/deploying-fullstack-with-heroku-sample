import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import MultipleSelection from "./MultipleSelection";
import MultipleSelectionSource from "./MultipleSelection?raw";
import GenerateTreeData from "./GenerateTreeData";
import GenerateTreeDataSource from "./GenerateTreeData?raw";
import Checkable from "./Checkable";
import CheckableSource from "./Checkable?raw";
import AsynchronousLoading from "./AsynchronousLoading";
import AsynchronousLoadingSource from "./AsynchronousLoading?raw";
import ShowTreeLine from "./ShowTreeLine";
import ShowTreeLineSource from "./ShowTreeLine?raw";

class TreeSelect extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Tree Select"
          refUrl="https://ant.design/components/tree-select/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="tree-a">
            <AppComponentCard
              title="Basic"
              description="The most basic usage."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="tree-b">
            <AppComponentCard
              title="Multiple Selection"
              description="Multiple selection usage."
              component={MultipleSelection}
              source={MultipleSelectionSource}
            />
          </Col>
          <Col xs={24} lg={12} key="tree-c">
            <AppComponentCard
              title="Generate Tree Data"
              description="The tree structure can be populated using treeData property. This is a quick and easy way to provide the tree content."
              component={GenerateTreeData}
              source={GenerateTreeDataSource}
            />
          </Col>
          <Col xs={24} lg={12} key="tree-d">
            <AppComponentCard
              title="Checkable"
              description="Multiple and checkable."
              component={Checkable}
              source={CheckableSource}
            />
          </Col>
          <Col xs={24} lg={12} key="tree-e">
            <AppComponentCard
              title="Asynchronous Loading"
              description="Asynchronous loading tree node."
              component={AsynchronousLoading}
              source={AsynchronousLoadingSource}
            />
          </Col>
          <Col xs={24} lg={12} key="tree-f">
            <AppComponentCard
              title="Show Tree Line"
              description="Use treeLine to show the line style."
              component={ShowTreeLine}
              source={ShowTreeLineSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default TreeSelect;
