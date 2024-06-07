import React from 'react';
import MessageItem from './MessageItem';
import IntlMessages from '@crema/helpers/IntlMessages';

import { Dropdown, List } from 'antd';
import { AiOutlineMail } from 'react-icons/ai';
import {
  DropDownWrapper,
  StyledAppScrollbar,
  StyledHeaderMsgBtn,
  StyledHeaderMsgIcon,
  StyledHeaderMsgLink,
  StyledHeaderMsgLinkText,
} from './index.styled';
import { messages } from '@crema/mockapi/fakedb';

const items = [
  {
    key: 1,
    label: (
      <div className='header'>
        <IntlMessages id='dashboard.messages' />({messages.length})
      </div>
    ),
  },
  {
    key: 2,
    label: (
      <StyledAppScrollbar>
        <List
          dataSource={messages}
          renderItem={(item) => {
            return <MessageItem key={item.id} item={item} />;
          }}
        />
      </StyledAppScrollbar>
    ),
  },
  {
    key: 3,
    label: (
      <StyledHeaderMsgBtn type='primary'>
        <IntlMessages id='common.viewAll' />
      </StyledHeaderMsgBtn>
    ),
  },
];
const AppMessages = () => {
  return (
    <DropDownWrapper>
      <Dropdown
        menu={{ items }}
        overlayClassName='header-messages'
        getPopupContainer={(triggerNode) => triggerNode}
        trigger={['click']}
      >
        <StyledHeaderMsgLink onClick={(e) => e.preventDefault()}>
          <StyledHeaderMsgIcon>
            <AiOutlineMail />
          </StyledHeaderMsgIcon>
          <StyledHeaderMsgLinkText>
            <IntlMessages id='dashboard.messages' />
          </StyledHeaderMsgLinkText>
        </StyledHeaderMsgLink>
      </Dropdown>
    </DropDownWrapper>
  );
};

export default AppMessages;
