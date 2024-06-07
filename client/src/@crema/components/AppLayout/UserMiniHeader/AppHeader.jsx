import React from 'react';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppMessages from '../../AppMessages';
import AppNotifications from '../../AppNotifications';
import UserInfo from '../components/UserInfo';
import {
  StyledAppUserMinibar,
  StyledUserMiniHeaderSearch,
  StyledUserMiniSectionDesktop,
  StyledUserMiniSectionMobile,
} from './index.styled';
import { StyledDropdownWrapper } from '../index.styled';
import { allowMultiLanguage } from '../../../constants/AppConst';

const items = [
  { key: 1, label: <AppMessages /> },
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <AppLanguageSwitcher /> },
];

const AppHeader = () => {
  const { messages } = useIntl();

  return (
    <StyledAppUserMinibar className='app-userMiniHeader'>
      <AppLogo />

      <StyledUserMiniHeaderSearch placeholder={messages['common.searchHere']} />
      <StyledUserMiniSectionDesktop>
        {allowMultiLanguage && <AppLanguageSwitcher />}
        <AppMessages />
        <AppNotifications />
      </StyledUserMiniSectionDesktop>
      <UserInfo />
      <StyledUserMiniSectionMobile>
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
      </StyledUserMiniSectionMobile>
    </StyledAppUserMinibar>
  );
};

export default AppHeader;

AppHeader.propTypes = {};
