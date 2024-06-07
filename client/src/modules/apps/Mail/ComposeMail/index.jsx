import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledMailModal,
  StyledMailModalContent,
  StyledMailModalSuffix,
  StyledMailModalTo,
  StyledMainForm,
  StyledMainModalBtn,
  StyledMainModalFooter,
  StyledMainModalScrollbar,
} from "./index.styled";
import { postDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { generateRandomUniqueNumber } from "@crema/helpers/Common";
import JoditEditor from "jodit-react";

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  toolbar: true,
  minHeight: 300,
  maxHeight: 500,
  buttons: [
    "source",
    "|",
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "outdent",
    "indent",
    "|",
    "font",
    "fontsize",
    "paragraph",
    "|",
    "image",
    "video",
    "table",
    "link",
    "|",
    "align",
    "undo",
    "redo",
    "selectall",
    "cut",
    "copy",
    "|",
    "hr",
    "|",
    "print",
    "symbol",
    "about",
  ],
  uploader: {
    insertImageAsBase64URI: true,
    url: "/api/upload",
    format: "json",
    imagesExtensions: ["jpg", "png", "jpeg", "gif"],
    headers: {
      "X-CSRF-TOKEN": "CSFR-Token",
      Authorization: "Bearer <JSON Web Token>",
    },
  },
  style: {
    "& .jodit .jodit-status-bar": {
      background: "#29572E",
      color: "rgba(255,255,255,0.5)",
    },
  },
};
export const isValidEmail = (value) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const ComposeMail = (props) => {
  const { isComposeMail, onCloseComposeMail } = props;
  const infoViewActionsContext = useInfoViewActionsContext();
  const editor = useRef(null);
  const [isShowBcc, onShowBcc] = useState(false);

  const [isShowCC, onShowCC] = useState(false);

  const { messages } = useIntl();

  const onFinish = (values) => {
    const mail = {
      id: generateRandomUniqueNumber(),
      isChecked: false,
      isStarred: false,
      label: {
        id: 211,
        name: "Crema",
        alias: "crema",
        icon: <MailOutlined />,
      },
      messages: [
        {
          description: values.content ? values.content : "No Message",
          sender: {
            name: values.displayName ? values.displayName : values.username,
            email: values.username,
            profilePic: "",
          },
          to: [
            {
              id: 1,
              name: "Crema",
              email: "info@cremawork.com",
              profilePic: "",
            },
          ],
          cc: [],
          bcc: [],
          messageId: generateRandomUniqueNumber(),
          sentOn: dayjs().format("ddd, MMM DD, YYYY"),
          isRead: false,
          isStarred: false,
        },
      ],
      hasAttachments: false,
      isRead: true,
      folderValue: 122,
      sentOn: dayjs().format("llll"),
      subject: values.subject !== "" ? values.subject : "No Subject",
    };
    postDataApi("/api/mailApp/compose", infoViewActionsContext, { mail })
      .then(() => {
        infoViewActionsContext.showMessage("Mail Sent Successfully");
        onCloseComposeMail(false);
      })
      .catch((error) => {
        onCloseComposeMail(false);
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledMailModal
      title={messages["mailApp.compose"]}
      open={isComposeMail}
      width={800}
      onOk={isComposeMail}
      onCancel={() => onCloseComposeMail(false)}
      footer={false}
    >
      <StyledMainModalScrollbar>
        <StyledMainForm
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <StyledMailModalContent>
            <StyledMailModalTo
              name="username"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input email!",
                },
              ]}
            >
              <Input
                prefix={
                  <span className="mail-modal-prefix">
                    <IntlMessages id="common.to" />
                  </span>
                }
                suffix={
                  <StyledMailModalSuffix>
                    <span onClick={() => onShowCC(!isShowCC)}>
                      <IntlMessages id="common.cc" />
                    </span>

                    <span onClick={() => onShowBcc(!isShowBcc)}>
                      <IntlMessages id="common.bcc" />
                    </span>
                  </StyledMailModalSuffix>
                }
              />
            </StyledMailModalTo>

            {isShowCC ? (
              <Form.Item
                name="cc"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your cc!",
                  },
                ]}
              >
                <Input placeholder={messages["common.cc"]} />
              </Form.Item>
            ) : null}

            {isShowBcc ? (
              <Form.Item
                name="bcc"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your bcc!",
                  },
                ]}
              >
                <Input placeholder={messages["common.bcc"]} />
              </Form.Item>
            ) : null}
            <Form.Item
              name="subject"
              rules={[
                { required: true, message: "Please input your Subject!" },
              ]}
            >
              <Input placeholder={messages["common.subject"]} />
            </Form.Item>

            <Form.Item name="content">
              <JoditEditor
                ref={editor}
                placeholder={messages["common.writeContent"]}
                config={config}
                tabIndex={1} // tabIndex of textarea
                // onChange={(value) => setFieldValue("content", value)}
              />
            </Form.Item>
          </StyledMailModalContent>

          <StyledMainModalFooter>
            <StyledMainModalBtn type="primary" htmlType="submit">
              <IntlMessages id="common.send" />
            </StyledMainModalBtn>
          </StyledMainModalFooter>
        </StyledMainForm>
      </StyledMainModalScrollbar>
    </StyledMailModal>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
};
