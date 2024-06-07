import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import {
  StyleAiOutlineHomeIcon,
  StyledContactDetailModalItem,
  StyledContactDetailModalItemContent,
  StyledContactDetailModalItemTitle,
  StyledFiFacebookIcon,
  StyledOtherDetailItem,
  StyledOtherDetailItemContent,
  StyleFiTwitterIcon,
  StyleRiFoldersLineIcon,
} from './index.styled';

const OtherDetails = (props) => {
  const { contact } = props;

  return (
    <StyledContactDetailModalItem>
      <StyledContactDetailModalItemTitle>
        <IntlMessages id='common.otherDetails' />
      </StyledContactDetailModalItemTitle>

      <StyledContactDetailModalItemContent>
        <StyledOtherDetailItem>
          <StyleRiFoldersLineIcon />
          <StyledOtherDetailItemContent>
            {contact.company ? (
              contact.company
            ) : (
              <IntlMessages id='common.na' />
            )}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>

        <StyledOtherDetailItem>
          <StyleAiOutlineHomeIcon />
          <StyledOtherDetailItemContent>
            {contact.address ? (
              contact.address
            ) : (
              <IntlMessages id='common.na' />
            )}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>
        <StyledOtherDetailItem>
          <StyledFiFacebookIcon />
          <StyledOtherDetailItemContent>
            {contact.facebookId ? (
              contact.facebookId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>

        <StyledOtherDetailItem>
          <StyleFiTwitterIcon />
          <StyledOtherDetailItemContent>
            {contact.twitterId ? (
              contact.twitterId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>
      </StyledContactDetailModalItemContent>
    </StyledContactDetailModalItem>
  );
};

export default OtherDetails;

OtherDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};
