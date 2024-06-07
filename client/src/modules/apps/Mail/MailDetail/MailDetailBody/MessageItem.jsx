import React, { useState } from "react";
import { Popover, Space, Tooltip } from "antd";
import AppIconButton from "@crema/components/AppIconButton";
import IntlMessages from "@crema/helpers/IntlMessages";
import { HiOutlineReply } from "react-icons/hi";
import AppsStarredIcon from "@crema/components/AppsStarredIcon";
import { RiShareForwardLine } from "react-icons/ri";
import PropTypes from "prop-types";
import ReplyMail from "./ReplyMail";
import { BiChevronDown } from "react-icons/bi";
import { getFormattedDate } from "@crema/helpers/DateHelper";
import {
  StyledMailDescItem,
  StyledMailDescName,
  StyledMailDescPopBody,
  StyledMailDetailAvatar,
  StyledMailDetailBodyHeader,
  StyledMailDetailBodyHeaderAction,
  StyledMailDetailBreakAll,
  StyledMailDetailDate,
  StyledMailDetailDesc,
  StyledMailDetailMsgContent,
  StyledMailDetailSubjectHeaderAction,
  StyledMailDetailUser,
  StyledMailDetailUserContent,
  StyledMailDetailUserDesc,
} from "../index.styled";
import { getStringFromHtml } from "@crema/helpers/StringHelper";

const MessageItem = ({
  message,
  mailLength,
  index,
  onSubmitMail,
  onChangeStarred,
}) => {
  const [isExpanded, setExpanded] = useState(mailLength === index + 1);

  const [{ isReply, isForward }, onSelectMethod] = useState({
    isReply: false,
    isForward: false,
  });

  const onGetMailDate = (date) => {
    return getFormattedDate(date);
  };

  const mailDescription = () => {
    return (
      <StyledMailDescPopBody>
        <StyledMailDescItem>
          <StyledMailDescName>from:</StyledMailDescName>
          <span>
            <strong>{message.sender.name}</strong>
            <span style={{ fontSize: 12 }}> {`<${message.sender.email}>`}</span>
          </span>
        </StyledMailDescItem>
        <StyledMailDescItem>
          <StyledMailDescName>reply-to:</StyledMailDescName>
          <span>{message.to[0].email}</span>
        </StyledMailDescItem>
        <StyledMailDescItem>
          <StyledMailDescName>date:</StyledMailDescName>
          <span>{onGetMailDate()}</span>
        </StyledMailDescItem>
        <StyledMailDescItem>
          <StyledMailDescName>subject:</StyledMailDescName>
          <span>how you get new orders easily</span>
        </StyledMailDescItem>
      </StyledMailDescPopBody>
    );
  };

  const getHeaderDescription = () => {
    if (isExpanded) {
      return (
        <Tooltip title={message.to.map((user) => user.name)} placement="bottom">
          <Popover
            placement="bottomLeft"
            content={mailDescription}
            trigger="click"
          >
            <span
              className="pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              {`to ${message.to.map((user) => user.email).toString()}`}
              <span style={{ marginTop: 5, fontSize: 18 }}>
                <BiChevronDown />
              </span>
            </span>
          </Popover>
        </Tooltip>
      );
    } else {
      return (
        <StyledMailDetailUserDesc
          className="text-truncate"
          style={{ display: "block" }}
        >
          {getStringFromHtml(message.description)}
        </StyledMailDetailUserDesc>
      );
    }
  };

  const getSenderImage = () => {
    return message.sender.profilePic;
  };

  return (
    <StyledMailDetailMsgContent>
      <StyledMailDetailBodyHeader
        onClick={() => {
          if (mailLength !== index + 1) setExpanded(!isExpanded);
        }}
      >
        <StyledMailDetailUser>
          <StyledMailDetailAvatar src={getSenderImage()} />

          <StyledMailDetailUserContent>
            <Space size={0}>
              <h3 className="mb-0">{message.sender.name}</h3>
              {isExpanded ? (
                <StyledMailDetailBreakAll>{`<${message.sender.email}>`}</StyledMailDetailBreakAll>
              ) : null}
            </Space>
            <div>{getHeaderDescription()}</div>
          </StyledMailDetailUserContent>
        </StyledMailDetailUser>

        <StyledMailDetailBodyHeaderAction>
          <StyledMailDetailDate>
            {onGetMailDate(message.sentOn)}
          </StyledMailDetailDate>
          <StyledMailDetailSubjectHeaderAction>
            {isExpanded ? (
              <AppIconButton
                title={<IntlMessages id="common.reply" />}
                icon={<HiOutlineReply />}
                onClick={() =>
                  onSelectMethod({ isReply: true, isForward: false })
                }
              />
            ) : null}

            <AppsStarredIcon
              title={<IntlMessages id="common.starred" />}
              item={message}
              onChange={(status, item) => {
                // e.stopPropagation();
                onChangeStarred(item, status);
              }}
            />

            {isExpanded ? (
              <AppIconButton
                title={<IntlMessages id="common.forward" />}
                icon={<RiShareForwardLine />}
                onClick={() =>
                  onSelectMethod({ isReply: false, isForward: true })
                }
              />
            ) : null}
          </StyledMailDetailSubjectHeaderAction>
        </StyledMailDetailBodyHeaderAction>
      </StyledMailDetailBodyHeader>

      {isExpanded ? (
        <StyledMailDetailDesc>
          <div dangerouslySetInnerHTML={{ __html: `${message.description}` }} />
        </StyledMailDetailDesc>
      ) : null}
      {isReply || isForward ? (
        <ReplyMail
          isForward={isForward}
          message={message}
          index={index}
          onDeleteDraft={() =>
            onSelectMethod({
              isReply: false,
              isForward: false,
            })
          }
          onSubmitMail={(message, index) => {
            onSelectMethod({
              isReply: false,
              isForward: false,
            });
            onSubmitMail(message, index);
          }}
        />
      ) : null}
    </StyledMailDetailMsgContent>
  );
};

export default React.memo(MessageItem);

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  mailLength: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onSubmitMail: PropTypes.func.isRequired,
  onChangeStarred: PropTypes.func.isRequired,
};
