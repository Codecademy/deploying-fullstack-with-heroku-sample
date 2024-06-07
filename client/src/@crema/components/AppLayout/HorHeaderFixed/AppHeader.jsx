import React from 'react';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppMessages from '../../AppMessages';
import AppNotifications from '../../AppNotifications';
import { AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import {
  StyledAppHeaderHorFixed,
  StyledAppHeaderHorFixedMain,
  StyledAppHeaderHorMainFlex,
  StyledAppHorizontalNav,
  StyledContainer,
  StyledHeaderHorFixedSecDesktop,
  StyledHeaderHorFixedSecMobile,
  StyledHeaderSearchHorFixed,
} from './index.styled';
import { allowMultiLanguage } from '../../../constants/AppConst';
import { StyledDropdownWrapper } from '../index.styled';

const items = [
  { key: 1, label: <AppMessages /> },
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <AppLanguageSwitcher /> },
];

const AppHeader = ({ showDrawer, routesConfig }) => {
  const { messages } = useIntl();
  const { sidebarColorSet } = useSidebarContext();

  return (
    <StyledAppHeaderHorFixed
      style={{
        backgroundColor: sidebarColorSet.sidebarBgColor,
        color: sidebarColorSet.sidebarTextColor,
      }}
    >
      <StyledAppHeaderHorFixedMain>
        <StyledContainer className='container'>
          <StyledAppHeaderHorMainFlex>
            <a className='trigger' onClick={showDrawer}>
              <AiOutlineMenu />
            </a>
            <AppLogo hasSidebarColor />
            <StyledAppHorizontalNav routesConfig={routesConfig} />
            <StyledHeaderSearchHorFixed
              placeholder={messages['common.searchHere']}
            />

            <StyledHeaderHorFixedSecDesktop>
              {allowMultiLanguage && <AppLanguageSwitcher />}
              <AppMessages />
              <AppNotifications />
            </StyledHeaderHorFixedSecDesktop>
            <UserInfo />
            <StyledHeaderHorFixedSecMobile>
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
            </StyledHeaderHorFixedSecMobile>
          </StyledAppHeaderHorMainFlex>
        </StyledContainer>
      </StyledAppHeaderHorFixedMain>
    </StyledAppHeaderHorFixed>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
  routesConfig: PropTypes.array,
};
