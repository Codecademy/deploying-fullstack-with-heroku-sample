import React from 'react';
import { Dropdown } from 'antd';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppMessages from '../../AppMessages';
import AppNotifications from '../../AppNotifications';
import PropTypes from 'prop-types';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import UserInfo from '../components/UserInfo';
import {
  StyledAppUserHeader,
  StyledAppUserHeaderSearch,
  StyledAppUserHeaderSectionDesktop,
  StyledAppUserHeaderSectionMobile,
} from './index.styled';
import { StyledDropdownWrapper } from '../index.styled';
import { allowMultiLanguage } from '../../../constants/AppConst';

const items = [
  { key: 1, label: <AppMessages /> },
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <AppLanguageSwitcher /> },
];

const AppHeader = ({ isCollapsed, onToggleSidebar }) => {
  const { messages } = useIntl();

  return (
    <StyledAppUserHeader>
      <a className='trigger' onClick={() => onToggleSidebar(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      <StyledAppUserHeaderSearch placeholder={messages['common.searchHere']} />
      <StyledAppUserHeaderSectionDesktop>
        {allowMultiLanguage && <AppLanguageSwitcher />}
        <AppMessages />
        <AppNotifications />
      </StyledAppUserHeaderSectionDesktop>
      <UserInfo />
      <StyledAppUserHeaderSectionMobile>
        <StyledDropdownWrapper>
          <Dropdown
            menu={{ items }}
            overlayClassName='dropdown-wrapper'
            getPopupContainer={(triggerNode) => triggerNode}
            trigger={['click']}
          >
            <a
              className='ant-dropdown-link-mobile'
              onClick={(e) => e.preventDefault()}
            >
              <FiMoreVertical />
            </a>
          </Dropdown>
        </StyledDropdownWrapper>
      </StyledAppUserHeaderSectionMobile>
    </StyledAppUserHeader>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  onToggleSidebar: PropTypes.func,
  isCollapsed: PropTypes.bool,
};
