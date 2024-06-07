import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledInvoice,
  StyledInvoiceCard,
  StyledInvoiceContainer,
  StyledInvoiceFooterTitle,
} from './index.styled';
import AppAnimate from '@crema/components/AppAnimate';
import Header from './Header';
import InvoiceTable from './InvoiceTable';

const Invoice2 = () => {
  return (
    <>
      <AppPageMeta title='Invoice' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledInvoice key='invoice2'>
          <StyledInvoiceContainer>
            <StyledInvoiceCard className='no-card-space'>
              <Header />
              <InvoiceTable />
            </StyledInvoiceCard>
            <StyledInvoiceFooterTitle>
              <IntlMessages id='invoice.thankYou' />
            </StyledInvoiceFooterTitle>
          </StyledInvoiceContainer>
        </StyledInvoice>
      </AppAnimate>
    </>
  );
};

export default Invoice2;
