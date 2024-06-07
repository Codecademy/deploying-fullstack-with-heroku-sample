import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import { BiArchiveIn, BiArrowBack } from 'react-icons/bi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi';
import { MdLabelOutline } from 'react-icons/md';
import { AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai';
import AppIconButton from '@crema/components/AppIconButton';
import {
  StyledMailDetailActionHeader,
  StyledMailDetailArrow,
} from '../index.styled';
import { putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { useMailContext } from '../../../context/MailContextProvider';

const MailDetailHeader = ({ selectedMail, onUpdateSelectedMail }) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { labelList } = useMailContext();
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onSelectLabel = (key) => {
    const mail = selectedMail;
    mail.label = labelList.find(
      (label) => label.id.toString() === key.toString(),
    );
    putDataApi('/api/mailApp/mail/', infoViewActionsContext, { mail })
      .then(() => {
        onUpdateSelectedMail(mail);
        infoViewActionsContext.showMessage('Mail Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeMailFolder = (type) => {
    putDataApi('/api/mailApp/update/folder', infoViewActionsContext, {
      mailIds: [selectedMail.id],
      type,
    })
      .then(() => {
        selectedMail.folderValue = type;
        onUpdateSelectedMail(selectedMail);
        infoViewActionsContext.showMessage('Mail Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeReadStatus = () => {
    const mail = selectedMail;
    mail.isRead = false;
    putDataApi('/api/mailApp/mail/', infoViewActionsContext, { mail })
      .then((data) => {
        onUpdateSelectedMail(data);
        navigate(-1);
        infoViewActionsContext.showMessage(
          mail.isRead
            ? 'Mail Marked as Read Successfully'
            : 'Mail Marked as Unread Successfully',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeStarredStatus = () => {
    const mail = selectedMail;
    mail.isStarred = !mail.isStarred;
    putDataApi('/api/mailApp/update/starred', infoViewActionsContext, {
      mailIds: [mail.id],
      status: mail.isStarred,
    })
      .then(() => {
        onUpdateSelectedMail(mail);
        infoViewActionsContext.showMessage(
          mail.isStarred
            ? 'Mail Marked as Starred Successfully'
            : 'Mail Marked as Unstarred Successfully',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const menuItems = labelList.map((label, index) => {
    return {
      key: index,
      label: <span onClick={() => onSelectLabel(label.id)}>{label.name}</span>,
    };
  });

  const menuMoveTo = [
    {
      key: '01',
      label: (
        <span onClick={onChangeReadStatus}>
          <IntlMessages id='mailApp.markAsUnread' />
        </span>
      ),
    },
    {
      key: '02',
      label: (
        <span onClick={onChangeStarredStatus}>
          {selectedMail.isStarred ? (
            <IntlMessages id='mailApp.markAsNotImportant' />
          ) : (
            <IntlMessages id='mailApp.markAsImportant' />
          )}
        </span>
      ),
    },
  ];

  if (!selectedMail) return null;
  return (
    <>
      <StyledMailDetailArrow
        title={<IntlMessages id='common.back' />}
        icon={<BiArrowBack />}
        onClick={onClickBackButton}
      />
      <h5 className='mb-0 text-truncate'>
        {selectedMail.subject ? selectedMail.subject : null}
      </h5>
      <StyledMailDetailActionHeader>
        <AppIconButton
          title={<IntlMessages id='common.archive' />}
          icon={<BiArchiveIn />}
          onClick={() => onChangeMailFolder(127)}
        />

        <AppIconButton
          title={<IntlMessages id='common.reportSpam' />}
          icon={<AiOutlineInfoCircle />}
          onClick={() => onChangeMailFolder(125)}
        />

        <AppIconButton
          title={<IntlMessages id='common.trash' />}
          icon={<AiOutlineDelete />}
          onClick={() => onChangeMailFolder(126)}
        />

        <AppIconButton
          title={<IntlMessages id='mailApp.markAsUnread' />}
          icon={<HiOutlineMailOpen />}
          onClick={() => onChangeReadStatus()}
        />

        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
          <Button type='circle'>
            <MdLabelOutline />
          </Button>
        </Dropdown>

        <Dropdown menu={{ items: menuMoveTo }} trigger={['click']}>
          <Button type='circle'>
            <FiMoreVertical />
          </Button>
        </Dropdown>
      </StyledMailDetailActionHeader>
    </>
  );
};

export default MailDetailHeader;

MailDetailHeader.propTypes = {
  selectedMail: PropTypes.object.isRequired,
  onUpdateSelectedMail: PropTypes.func,
};
