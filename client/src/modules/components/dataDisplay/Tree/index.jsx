import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Multiple from "./Multiple";
import MultipleSource from "./Multiple?raw";
import Placement from "./Placement";
import PlacementSource from "./Placement?raw";
import Asynchronous from "./Asynchronous";
import AsynchronousSource from "./Asynchronous?raw";
import ShowTree from "./ShowTree";
import ShowTreeSource from "./ShowTree?raw";
import TreeLine from "./TreeLine";
import TreeLineSource from "./TreeLine?raw";

const Tree = () => {
  return (
    <>
      <AppComponentHeader
        title="Tree"
        refUrl="https://ant.design/components/tree/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="tree-a">
          <AppComponentCard
            title="Basic"
            description="The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tree-b">
          <AppComponentCard
            title="ShowTree"
            description="ShowTree Tree."
            component={ShowTree}
            source={ShowTreeSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tree-c">
          <AppComponentCard
            title="Multiple selection usage."
            component={Multiple}
            source={MultipleSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tree-d">
          <AppComponentCard
            title="Placement"
            description="Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode."
            component={Placement}
            source={PlacementSource}
          />
        </Col>

        <Col xs={24} lg={12} key="tree-e">
          <AppComponentCard
            title="Asynchronous loading"
            description="To load data asynchronously when click to expand a treeNode."
            component={Asynchronous}
            source={AsynchronousSource}
          />
        </Col>
        <Col xs={24} lg={12} key="tree-i">
          <AppComponentCard
            title="Tree Line"
            description="Tree with connected line between nodes, turn on by showLine, customize the preseted icon by switcherIcon."
            component={TreeLine}
            source={TreeLineSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tree;
