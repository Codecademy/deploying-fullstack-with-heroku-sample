import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import BasicComment from "./BasicComment";
import BasicCommentSource from "./BasicComment?raw";
import UsageWithList from "./UsageWithList";
import UsageWithListSource from "./UsageWithList?raw";
import NestedComments from "./NestedComments";
import NestedCommentsSource from "./NestedComments?raw";
import ReplyEditor from "./ReplyEditor";
import ReplyEditorSource from "./ReplyEditor?raw";

const Comment = () => {
  return (
    <>
      <AppComponentHeader
        title="Comment"
        refUrl="https://ant.design/components/comment/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="comment-a">
          <AppComponentCard
            title="BasicComment"
            description="A basic comment with author, avatar, time and actions."
            component={BasicComment}
            source={BasicCommentSource}
          />
        </Col>
        <Col xs={24} lg={12} key="comment-b">
          <AppComponentCard
            title="Reply Editor"
            description="Comment can be used as an editor, so the user can customize the contents of the component."
            component={ReplyEditor}
            source={ReplyEditorSource}
          />
        </Col>
        <Col xs={24} lg={12} key="comment-c">
          <AppComponentCard
            title="Usage With List"
            description="Displaying a series of comments using the antd List Component."
            component={UsageWithList}
            source={UsageWithListSource}
          />
        </Col>
        <Col xs={24} lg={12} key="comment-d">
          <AppComponentCard
            title="Nested Comments"
            description="Comments can be nested."
            component={NestedComments}
            source={NestedCommentsSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Comment;
