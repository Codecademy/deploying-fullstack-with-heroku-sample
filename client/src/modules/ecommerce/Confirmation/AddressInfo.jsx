import React from 'react';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import {
  StyledConfirmationCard,
  StyledConfirmationItem,
  StyledConfirmationReward,
  StyledConfirmationRewardButton,
  StyledConfirmationRewardRow,
  StyledConfirmationRewardTitle,
} from './index.styled';

const AddressInfo = ({ address }) => {
  return (
    <StyledConfirmationCard>
      <AppRowContainer>
        <Col xs={24} lg={12}>
          <StyledConfirmationItem>
            <h3>Delivery Address</h3>
            <h4>{address.name}</h4>
            <p>
              {address.addressLine}, {address.city}, {address.pin}
            </p>
          </StyledConfirmationItem>

          <StyledConfirmationItem>
            <h4>Phone number</h4>
            <p>{address.mobile}</p>
          </StyledConfirmationItem>
        </Col>
        <Col xs={24} lg={12}>
          <StyledConfirmationItem>
            <h3>Your Rewards</h3>

            <StyledConfirmationReward className='confirmation-address-reward'>
              <StyledConfirmationRewardRow>
                <img src={'/assets/images/ecommerce/sms-icon.png'} alt='sms' />
                <StyledConfirmationRewardTitle>
                  SMS updates at every step
                </StyledConfirmationRewardTitle>
              </StyledConfirmationRewardRow>
              <StyledConfirmationRewardButton type='primary'>
                Subscribe
              </StyledConfirmationRewardButton>
            </StyledConfirmationReward>

            <StyledConfirmationReward className='confirmation-address-reward'>
              <StyledConfirmationRewardRow>
                <img
                  src={'/assets/images/ecommerce/add-person.png'}
                  alt='sms'
                />
                <StyledConfirmationRewardTitle>
                  Order shared with 1 Person
                </StyledConfirmationRewardTitle>
              </StyledConfirmationRewardRow>
              <StyledConfirmationRewardButton type='primary'>
                Manage
              </StyledConfirmationRewardButton>
            </StyledConfirmationReward>
          </StyledConfirmationItem>
        </Col>
      </AppRowContainer>
    </StyledConfirmationCard>
  );
};

export default AddressInfo;

AddressInfo.propTypes = {
  address: PropTypes.object,
};
