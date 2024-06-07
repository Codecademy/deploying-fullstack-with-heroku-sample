import { useState } from "react";

import dayjs from "dayjs";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Checkbox, Tooltip } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import AppsStarredIcon from "@crema/components/AppsStarredIcon";
import AppIconButton from "@crema/components/AppIconButton";
import IntlMessages from "@crema/helpers/IntlMessages";
import { BiArchiveIn } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdLabelOutline } from "react-icons/md";

import {
  StyledMailDesc,
  StyledMailListAction,
  StyledMailListActionBtn,
  StyledMailListAvatar,
  StyledMailListCheckbox,
  StyledMailListContent,
  StyledMailListDate,
  StyledMailListItem,
  StyledMailListStarted,
  StyledMailListSub,
  StyledMailListSubTitle,
  StyledMailListTime,
  StyledMailListTitle,
  StyledMailTag,
  StyledMailTagView,
} from "../index.styled";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { getStringFromHtml } from "@crema/helpers/StringHelper";
import { getFormattedDate } from "@crema/helpers/DateHelper";

const MailListItem = (props) => {
  const {
    mail,
    checkedMails,
    onChangeCheckedMails,
    onChangeStarred,
    onViewMailDetail,
    onRemoveItem,
    onUpdateItem,
  } = props;

  const [isChecked, setIsChecked] = useState(false);
  const messages = mail.messages.length;
  const infoViewActionsContext = useInfoViewActionsContext();

  const onGetMailDate = () => {
    const date = mail.messages[messages - 1].sentOn;
    if (
      dayjs(date, "ddd, MMM DD, YYYY").format() ===
      dayjs("ddd, MMM DD, YYYY").format()
    ) {
      return getFormattedDate(date, "LT");
    } else {
      return date.split(",")[1];
    }
  };

  const getSenderName = () => {
    if (messages === 1) {
      return mail.messages[0].sender.name;
    } else if (messages === 2) {
      return `${mail.messages[0].sender.name}, ${mail.messages[1].sender.name}(2)`;
    } else {
      return `${mail.messages[0].sender.name}, ${
        mail.messages[messages - 2].sender.name
      }, ${mail.messages[messages - 1].sender.name}(${messages}})`;
    }
  };

  const getDescription = () => {
    return mail.messages[messages - 1].description;
  };

  const onChangeMailFolder = (type) => {
    mail.folderValue = type;
    putDataApi("/api/mailApp/update/folder", infoViewActionsContext, {
      mailIds: [mail.id],
      type,
    })
      .then(() => {
        onRemoveItem(mail);
        infoViewActionsContext.showMessage("Mail Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeReadStatus = () => {
    mail.isRead = !mail.isRead;
    putDataApi("/api/mailApp/mail/", infoViewActionsContext, { mail })
      .then((data) => {
        onUpdateItem(data);
        console.log("onChangeReadStatus: ", data);
        infoViewActionsContext.showMessage(
          data.isRead
            ? "Mail Marked as Read Successfully"
            : "Mail Marked as Unread Successfully",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const getSenderImage = () => {
    if (messages === 1) {
      return mail.messages[0].sender.profilePic;
    } else if (messages === 2) {
      return mail.messages[1].sender.profilePic;
    } else {
      return mail.messages[2].sender.profilePic;
    }
  };
  console.log("mail: ", mail);
  return (
    <StyledMailListItem
      key={mail.id}
      className={clsx("item-hover", { mailRead: mail.isRead })}
      onClick={() => onViewMailDetail(mail)}
    >
      <StyledMailListContent>
        <StyledMailListCheckbox onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedMails.includes(mail.id)}
            onChange={() => {
              setIsChecked(!isChecked);
              onChangeCheckedMails(!isChecked, mail.id);
            }}
          />
        </StyledMailListCheckbox>
        <StyledMailListStarted onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon
            item={mail}
            onChange={() => onChangeStarred(!mail.isStarred, mail)}
          />
        </StyledMailListStarted>
        <StyledMailListAvatar src={getSenderImage()} alt={getSenderImage()} />
        <StyledMailListTitle className="text-truncate">
          {getSenderName()}
        </StyledMailListTitle>
        <StyledMailListTime className="mail-list-time">
          {mail.hasAttachments ? <PaperClipOutlined /> : null}
          <StyledMailListDate className="text-truncate">
            {onGetMailDate(mail.sentOn)}
          </StyledMailListDate>
        </StyledMailListTime>
      </StyledMailListContent>
      <StyledMailListAction>
        <StyledMailListSub className="mail-list-sub">
          <StyledMailListSubTitle>{mail.subject}</StyledMailListSubTitle>
          <StyledMailDesc className="text-truncate">
            {getStringFromHtml(getDescription())}
          </StyledMailDesc>
        </StyledMailListSub>
        {mail.label ? (
          <StyledMailTagView className="mail-tag-view">
            <Tooltip title={mail.label.name} placement="top">
              <StyledMailTag style={{ color: mail.label.color }}>
                <MdLabelOutline />
              </StyledMailTag>
            </Tooltip>
          </StyledMailTagView>
        ) : null}
        <StyledMailListTime className="mail-list-time">
          {mail.hasAttachments ? <PaperClipOutlined /> : null}
          <StyledMailListDate className="text-truncate">
            {onGetMailDate()}
          </StyledMailListDate>
        </StyledMailListTime>
        <StyledMailListActionBtn className="mail-list-btn-action">
          <AppIconButton
            title={<IntlMessages id="common.archive" />}
            icon={<BiArchiveIn />}
            onClick={() => onChangeMailFolder(127)}
          />
          <AppIconButton
            title={<IntlMessages id="common.trash" />}
            icon={<AiOutlineDelete />}
            onClick={() => onChangeMailFolder(126)}
          />
          <AppIconButton
            title={
              mail.isRead ? (
                <IntlMessages id="mailApp.markAsUnread" />
              ) : (
                <IntlMessages id="mailApp.markAsRead" />
              )
            }
            icon={mail.isRead ? <FiMail /> : <HiOutlineMailOpen />}
            onClick={onChangeReadStatus}
          />
          <AppIconButton
            title={<IntlMessages id="common.reportSpam" />}
            icon={<AiOutlineInfoCircle />}
            onClick={() => onChangeMailFolder(125)}
          />
        </StyledMailListActionBtn>
      </StyledMailListAction>
    </StyledMailListItem>
  );
};

export default MailListItem;

MailListItem.defaultProps = {
  labelList: [],
  checkedMails: [],
};

MailListItem.propTypes = {
  mail: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedMails: PropTypes.array,
  onChangeCheckedMails: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onViewMailDetail: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onUpdateItem: PropTypes.func,
};
