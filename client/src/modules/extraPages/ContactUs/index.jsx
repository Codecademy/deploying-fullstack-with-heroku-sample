import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import { StyledContactSimpleMap } from './index.styled';
import AppAnimate from '@crema/components/AppAnimate';
import { contactUsData } from '@crema/mockapi/fakedb/extraPages';
import ContactUsForm from './ContactUsForm';
import SendMessage from './SendMessage';
import Address from './Address';
import SimpleMap from './SimpleMap';

const ContactUs = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppCard>
        <StyledContactSimpleMap>
          <SimpleMap />
        </StyledContactSimpleMap>
        <SendMessage sendMessage={contactUsData.sendMessage} />
        <AppRowContainer>
          <Col xs={24} md={12}>
            <ContactUsForm />
          </Col>
          <Col xs={24} md={12}>
            <Address />
          </Col>
        </AppRowContainer>
      </AppCard>
    </AppAnimate>
  );
};

export default ContactUs;
