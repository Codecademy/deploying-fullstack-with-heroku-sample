import React from 'react';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  StyledAppBitbucketHeader,
  StyledBitbucketSearch,
  StyledTrigger,
} from './index.styled';

const AppHeader = ({ showDrawer }) => {
  const { messages } = useIntl();

  return (
    <StyledAppBitbucketHeader>
      <StyledTrigger onClick={showDrawer}>
        <AiOutlineMenu />
      </StyledTrigger>
      <AppLogo />
      <StyledBitbucketSearch placeholder={messages['common.searchHere']} />
    </StyledAppBitbucketHeader>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
