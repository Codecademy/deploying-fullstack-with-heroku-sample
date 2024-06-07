import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col, Tooltip } from 'antd';
import {
  DollarOutlined,
  InfoCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import {
  StyledDeliveryInput,
  StyledProductDeliveryInfoPara,
  StyledProductDetailItemTitle,
  StyledProductDetailService,
  StyledProductDetailServicePara,
} from './index.styled';

const DeliveryInfo = () => {
  return (
    <AppRowContainer>
      <Col xs={24} sm={12}>
        <StyledProductDetailItemTitle>Deliver to</StyledProductDetailItemTitle>
        <StyledDeliveryInput id='delivery-pin-code' placeholder='Pin Code' />

        <StyledProductDeliveryInfoPara>
          Delivery in 5-7 days | <span className='text-green'>Free</span>
          <span className='text-secondary'>$40</span>
        </StyledProductDeliveryInfoPara>
        <p className='mb-0'>If ordered before 2:05 AM </p>
      </Col>

      <Col xs={24} sm={12}>
        <StyledProductDetailItemTitle>Services</StyledProductDetailItemTitle>

        <StyledProductDetailService>
          <Tooltip title='Return policy'>
            <SyncOutlined style={{ color: '#0A8FDC', fontSize: 14 }} />
          </Tooltip>
          <StyledProductDetailServicePara>
            30 Day Return Policy
            <Tooltip title='info'>
              <InfoCircleOutlined
                style={{ color: '#A0A5B9', fontSize: 14, marginLeft: 12 }}
              />
            </Tooltip>
          </StyledProductDetailServicePara>
        </StyledProductDetailService>

        <StyledProductDetailService>
          <Tooltip title='COD Available'>
            <DollarOutlined style={{ color: '#0A8FDC', fontSize: 14 }} />
          </Tooltip>
          <StyledProductDetailServicePara>
            Cash on Delivery available{' '}
            <Tooltip title='info'>
              <InfoCircleOutlined
                style={{ color: '#A0A5B9', fontSize: 14, marginLeft: 12 }}
              />
            </Tooltip>
          </StyledProductDetailServicePara>
        </StyledProductDetailService>
      </Col>
    </AppRowContainer>
  );
};

export default DeliveryInfo;
