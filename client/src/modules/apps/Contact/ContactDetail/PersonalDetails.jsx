import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import {
  StyleAiOutlineGlobalIcon,
  StyleAiOutlineShoppingIcon,
  StyledContactDetailModalItem,
  StyledContactDetailModalItemContent,
  StyledContactDetailModalItemTitle,
  StyledOtherDetailItem,
  StyledOtherDetailItemContent,
  StyleFiMailIcon,
  StyleFiPhoneIcon,
} from './index.styled';

const PersonalDetails = ({ contact }) => {
  return (
    <StyledContactDetailModalItem>
      <StyledContactDetailModalItemTitle>
        <IntlMessages id='contactApp.personalDetails' />
      </StyledContactDetailModalItemTitle>

      <StyledContactDetailModalItemContent>
        <StyledOtherDetailItem>
          <StyleFiMailIcon />
          <StyledOtherDetailItemContent>
            {contact.email}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>

        <StyledOtherDetailItem>
          <StyleFiPhoneIcon />
          <StyledOtherDetailItemContent>
            {contact.contact}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>

        <StyledOtherDetailItem>
          <StyleAiOutlineGlobalIcon />
          <StyledOtherDetailItemContent>
            {contact.website ? (
              contact.website
            ) : (
              <IntlMessages id='common.na' />
            )}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>

        <StyledOtherDetailItem>
          <StyleAiOutlineShoppingIcon />
          <StyledOtherDetailItemContent>
            {contact.birthday ? (
              contact.birthday
            ) : (
              <IntlMessages id='common.na' />
            )}
          </StyledOtherDetailItemContent>
        </StyledOtherDetailItem>
      </StyledContactDetailModalItemContent>
    </StyledContactDetailModalItem>
  );
};

export default PersonalDetails;

PersonalDetails.propTypes = {
  contact: PropTypes.object,
};
