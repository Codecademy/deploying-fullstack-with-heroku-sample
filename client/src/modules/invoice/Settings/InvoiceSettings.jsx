import IntlMessages from '@crema/helpers/IntlMessages';
import React from 'react';
import Invoicing from './Invoicing';
import General from './General';
import Accounting from './Accounting';
import AppCard from '@crema/components/AppCard';
import { Tabs } from 'antd';
import { StyledFormWrapper } from './index.styled';
import PropTypes from 'prop-types';

const InvoiceSettings = ({ defaultSettings, onUpdateSettings }) => {
  const items = [
    {
      key: '1',
      label: <IntlMessages id='faq.general' />,
      children: defaultSettings?.general && (
        <StyledFormWrapper>
          <General
            settings={defaultSettings?.general}
            onUpdateSettings={onUpdateSettings}
          />
        </StyledFormWrapper>
      ),
    },
    {
      key: '2',
      label: <IntlMessages id='invoice.invoicing' />,
      children: defaultSettings?.invoicing && (
        <StyledFormWrapper>
          <Invoicing
            settings={defaultSettings?.invoicing}
            onUpdateSettings={onUpdateSettings}
          />
        </StyledFormWrapper>
      ),
    },
    {
      key: '3',
      label: <IntlMessages id='invoice.accounting' />,
      children: defaultSettings?.accounting && (
        <StyledFormWrapper>
          <Accounting
            settings={defaultSettings?.accounting}
            onUpdateSettings={onUpdateSettings}
          />
        </StyledFormWrapper>
      ),
    },
  ];
  return (
    <AppCard title='Settings'>
      <Tabs items={items} />
    </AppCard>
  );
};

InvoiceSettings.propTypes = {
  defaultSettings: PropTypes.object,
  onUpdateSettings: PropTypes.func,
};

export default InvoiceSettings;
