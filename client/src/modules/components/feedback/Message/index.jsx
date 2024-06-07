import React, { Component } from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import OtherType from "./OtherType";
import OtherTypeSource from "./OtherType?raw";
import Customize from "./Customize";
import CustomizeSource from "./Customize?raw";
import Loading from "./Loading";
import LoadingSource from "./Loading?raw";
import CustomizedStyle from "./CustomizedStyle";
import CustomizedStyleSource from "./CustomizedStyle?raw";
import UpdateMessage from "./UpdateMessage";
import UpdateMessageSource from "./UpdateMessage?raw";

class Message extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title="Message"
          refUrl="https://ant.design/components/message/"
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key="message-a">
            <AppComponentCard
              title="Basic"
              description="Use message.useMessage to get contextHolder with context accessible issue."
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key="message-b">
            <AppComponentCard
              title="Other Type"
              description="Messages of success, error and warning types."
              component={OtherType}
              source={OtherTypeSource}
            />
          </Col>
          <Col xs={24} lg={12} key="message-c">
            <AppComponentCard
              title="Customize"
              description="The style and className are available to customize Message."
              component={Customize}
              source={CustomizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key="message-d">
            <AppComponentCard
              title="Loading"
              description="Display a global loading indicator, which is dismissed by itself asynchronously."
              component={Loading}
              source={LoadingSource}
            />
          </Col>
          <Col xs={24} lg={12} key="message-e">
            <AppComponentCard
              title="Customized Style"
              description="The style and className are available to customize Message."
              component={CustomizedStyle}
              source={CustomizedStyleSource}
            />
          </Col>
          <Col xs={24} lg={12} key="message-g">
            <AppComponentCard
              title="Update Message"
              description="Update message content with unique key."
              component={UpdateMessage}
              source={UpdateMessageSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Message;
