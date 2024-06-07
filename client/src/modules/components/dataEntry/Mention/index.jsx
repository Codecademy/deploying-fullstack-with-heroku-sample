import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import Placement from "./Placement";
import PlacementSource from "./Placement?raw";
import AsynchronousLoading from "./AsynchronousLoading";
import AsynchronousLoadingSource from "./AsynchronousLoading?raw";
import CustomizeSuggestions from "./CustomizeSuggestions";
import CustomizeSuggestionsSource from "./CustomizeSuggestions?raw";
import SuggestionContainer from "./SuggestionContainer";
import SuggestionContainerSource from "./SuggestionContainer?raw";
import Disabled from "./Disabled";
import DisabledSource from "./Disabled?raw";
import WithForm from "./WithForm";
import WithFormSource from "./WithForm?raw";

class Mention extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Mention"
          refUrl="https://ant.design/components/mention/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="mention-a">
            <AppComponentCard
              title="Basic"
              description="Basic usage."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="mention-b">
            <AppComponentCard
              title="Placement"
              description="Change the suggestions placement."
              component={Placement}
              source={PlacementSource}
            />
          </Col>
          <Col xs={24} lg={12} key="mention-c">
            <AppComponentCard
              title="AsynchronousLoading"
              description="async"
              component={AsynchronousLoading}
              source={AsynchronousLoadingSource}
            />
          </Col>
          <Col xs={24} lg={12} key="mention-d">
            <AppComponentCard
              title="CustomizeSuggestions"
              description="Customize Trigger Token by prefix props. Default to @, Array<string> also supported."
              component={CustomizeSuggestions}
              source={CustomizeSuggestionsSource}
            />
          </Col>
          <Col xs={24} lg={12} key="mention-h">
            <AppComponentCard
              title="SuggestionContainer"
              component={SuggestionContainer}
              source={SuggestionContainerSource}
            />
          </Col>
          <Col xs={24} lg={12} key="mention-i">
            <AppComponentCard
              title="Disabled"
              description="Configure disabled and readOnly."
              component={Disabled}
              source={DisabledSource}
            />
          </Col>
          <Col xs={24} lg={12} key="mention-j">
            <AppComponentCard
              title="WithForm"
              description="Controlled mode, for example, to work with Form."
              component={WithForm}
              source={WithFormSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Mention;
