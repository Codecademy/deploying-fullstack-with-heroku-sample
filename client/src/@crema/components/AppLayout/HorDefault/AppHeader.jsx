import React from 'react';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppMessages from '../../AppMessages';
import AppNotifications from '../../AppNotifications';
import NotificationBar from './NotificationBar';
import { AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import {
  StyledAppHeaderHor,
  StyledAppHeaderHorDesktop,
  StyledAppHorizontalNav,
  StyledContainer,
  StyledHeaderHorMain,
  StyledHeaderHorMainFlex,
  StyledHeaderHorMobile,
  StyledHeaderNavHor,
  StyledHeaderSearchHor,
} from './index.styled';
import { StyledDropdownWrapper } from '../index.styled';

import { allowMultiLanguage } from '../../../constants/AppConst';

const items = [
  { key: 1, label: <AppMessages /> },
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <AppLanguageSwitcher /> },
];

const AppHeader = ({ showDrawer, routesConfig }) => {
  const { messages } = useIntl();
  const { sidebarColorSet } = useSidebarContext();

  return (
    <StyledAppHeaderHor>
      <NotificationBar />

      <StyledHeaderHorMain>
        <StyledContainer>
          <StyledHeaderHorMainFlex>
            <a className='trigger' onClick={showDrawer}>
              <AiOutlineMenu />
            </a>
            <AppLogo />
            <StyledHeaderSearchHor
              placeholder={messages['common.searchHere']}
            />

            <StyledAppHeaderHorDesktop>
              {allowMultiLanguage && <AppLanguageSwitcher />}
              <AppMessages />
              <AppNotifications />
            </StyledAppHeaderHorDesktop>
            <UserInfo />
            <StyledHeaderHorMobile>
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
            </StyledHeaderHorMobile>
          </StyledHeaderHorMainFlex>
        </StyledContainer>
      </StyledHeaderHorMain>

      <StyledHeaderNavHor
        style={{
          backgroundColor: sidebarColorSet.sidebarBgColor,
          color: sidebarColorSet.sidebarTextColor,
        }}
      >
        <StyledContainer>
          <StyledAppHorizontalNav routesConfig={routesConfig} />
        </StyledContainer>
      </StyledHeaderNavHor>
    </StyledAppHeaderHor>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
  routesConfig: PropTypes.array,
};
