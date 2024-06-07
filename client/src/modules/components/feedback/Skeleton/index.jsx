import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";
import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import ComplexCombination from "./ComplexCombination";
import ComplexCombinationSource from "./ComplexCombination?raw";
import ActiveAnimation from "./ActiveAnimation";
import ActiveAnimationSource from "./ActiveAnimation?raw";
import ButtonAavtarInputImage from "./ButtonAavtarInputImage";
import ButtonAavtarInputImageSource from "./ButtonAavtarInputImage?raw";
import ContainsSubComponent from "./ContainsSubComponent";
import ContainsSubComponentSource from "./ContainsSubComponent?raw";
import ListIcon from "./ListIcon";
import ListIconSource from "./ListIcon";

class Skeleton extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Skeleton"
          refUrl="https://ant.design/components/skeleton/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="skeleton-a">
            <AppComponentCard
              title="Basic"
              description="Show successful results."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="skeleton-b">
            <AppComponentCard
              title="ComplexCombination"
              description="Complex combination with avatar and multiple paragraphs."
              component={ComplexCombination}
              source={ComplexCombinationSource}
            />
          </Col>
          <Col xs={24} lg={12} key="skeleton-c">
            <AppComponentCard
              title="ActiveAnimation"
              description="Display active animation."
              component={ActiveAnimation}
              source={ActiveAnimationSource}
            />
          </Col>
          <Col xs={24} lg={12} key="skeleton-d">
            <AppComponentCard
              title="ContainsSubComponent"
              description="Skeleton contains sub component."
              component={ContainsSubComponent}
              source={ContainsSubComponentSource}
            />
          </Col>
          <Col xs={24} lg={12} key="skeleton-e">
            <AppComponentCard
              title="Button-Avatar-Input-Image"
              description="Skeleton Button, Avatar, Input and Image."
              component={ButtonAavtarInputImage}
              source={ButtonAavtarInputImageSource}
            />
          </Col>

          <Col xs={24} lg={12} key="skeleton-f">
            <AppComponentCard
              title="ListIcon"
              description="Skeleton contains sub component."
              component={ListIcon}
              source={ListIconSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Skeleton;
