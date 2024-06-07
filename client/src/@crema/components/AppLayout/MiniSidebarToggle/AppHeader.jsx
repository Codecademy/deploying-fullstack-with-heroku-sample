import React from 'react';
import { Dropdown } from 'antd';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import PropTypes from 'prop-types';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppMessages from '../../AppMessages';
import AppNotifications from '../../AppNotifications';
import { FiMoreVertical } from 'react-icons/fi';
import {
  StyledHeaderMiniSecDesktop,
  StyledHeaderMiniSecMobile,
  StyledHeaderMiniSidebar,
  StyledHeaderSearchMinibar,
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
    <StyledHeaderMiniSidebar className='app-header-mini-sidebar'>
      {React.createElement(
        isCollapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
        {
          className: 'trigger',
          onClick: onToggleSidebar,
        },
      )}
      <AppLogo />

      <StyledHeaderSearchMinibar placeholder={messages['common.searchHere']} />
      <StyledHeaderMiniSecDesktop>
        {allowMultiLanguage && <AppLanguageSwitcher />}
        <AppMessages />
        <AppNotifications />
      </StyledHeaderMiniSecDesktop>
      <StyledHeaderMiniSecMobile>
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
      </StyledHeaderMiniSecMobile>
    </StyledHeaderMiniSidebar>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  isCollapsed: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};
