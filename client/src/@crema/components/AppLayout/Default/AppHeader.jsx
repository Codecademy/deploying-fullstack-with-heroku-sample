import React from 'react';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppMessages from '../../AppMessages';
import AppNotifications from '../../AppNotifications';
import PropTypes from 'prop-types';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  StyledAppHeader,
  StyledAppHeaderSectionDesk,
  StyledAppHeaderSectionMobile,
  StyledHeaderSearch,
} from './index.styled';
import { Dropdown } from 'antd';
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
    <StyledAppHeader>
      <a className='trigger' onClick={() => onToggleSidebar(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      <StyledHeaderSearch placeholder={messages['common.searchHere']} />
      <StyledAppHeaderSectionDesk>
        {allowMultiLanguage && <AppLanguageSwitcher />}
        <AppMessages />
        <AppNotifications />
      </StyledAppHeaderSectionDesk>
      <StyledAppHeaderSectionMobile>
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
      </StyledAppHeaderSectionMobile>
    </StyledAppHeader>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  onToggleSidebar: PropTypes.func,
  isCollapsed: PropTypes.bool,
};
