import React, { useState } from 'react';
import AppInfoView from '@crema/components/AppInfoView';

import IntlMessages from '@crema/helpers/IntlMessages';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import AppAnimate from '@crema/components/AppAnimate';
import AppPageMeta from '@crema/components/AppPageMeta';
import { StyledFaqHeader, StyledFaqSection } from './index.styled';
import FaqSideBar from './FaqSideBar/index';
import FaqList from './FaqList';
import {
  generalFaq,
  installationFaq,
  licenseFaq,
  pricingFaq,
  supportFaq,
} from '@crema/mockapi/fakedb/extraPages';

const FAQ = () => {
  const [dataValue, setDataValue] = useState(generalFaq);
  const [selectionId, setSelectionId] = useState(101);

  const onGetFaqData = (value) => {
    setSelectionId(value);
    switch (value) {
      case 101:
        setDataValue(generalFaq);
        break;

      case 102:
        setDataValue(installationFaq);
        break;

      case 103:
        setDataValue(pricingFaq);
        break;

      case 104:
        setDataValue(licenseFaq);
        break;

      case 105:
        setDataValue(supportFaq);
        break;
      default: {
        break;
      }
    }
  };

  return (
    <>
      <AppPageMeta title='FAQ' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledFaqSection key='a'>
          <StyledFaqHeader>
            <h2>
              <IntlMessages id='faq.heading' />
            </h2>
            <p>
              <IntlMessages id='faq.content' />
            </p>
          </StyledFaqHeader>

          <AppRowContainer type='bottom'>
            <Col xs={24} md={8} lg={6} key='a'>
              <FaqSideBar
                onGetFaqData={onGetFaqData}
                selectionId={selectionId}
              />
            </Col>

            <Col xs={24} md={16} lg={18} key='b'>
              <FaqList faqList={dataValue} />
              <AppInfoView />
            </Col>
          </AppRowContainer>
        </StyledFaqSection>
      </AppAnimate>
    </>
  );
};

export default FAQ;
