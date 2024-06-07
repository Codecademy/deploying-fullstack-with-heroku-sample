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
import {
  StyledDrawerLayoutHeader,
  StyledDrawerLayoutHeaderDesk,
  StyledDrawerLayoutHeaderMobile,
  StyledDrawerLayoutHeaderSearch,
} from './index.styled';
import { StyledDropdownWrapper } from '../index.styled';

import { allowMultiLanguage } from '../../../constants/AppConst';

const items = [
  { key: 1, label: <AppMessages /> },
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <AppLanguageSwitcher /> },
];

const AppHeader = ({ showDrawer }) => {
  const { messages } = useIntl();
  console.log('testing');
  return (
    <StyledDrawerLayoutHeader>
      <a className='trigger' onClick={showDrawer}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      <StyledDrawerLayoutHeaderSearch
        placeholder={messages['common.searchHere']}
      />
      <StyledDrawerLayoutHeaderDesk>
        {allowMultiLanguage && <AppLanguageSwitcher />}
        <AppMessages />
        <AppNotifications />
      </StyledDrawerLayoutHeaderDesk>
      <StyledDrawerLayoutHeaderMobile>
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
      </StyledDrawerLayoutHeaderMobile>
    </StyledDrawerLayoutHeader>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
