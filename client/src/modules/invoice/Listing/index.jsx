import React from 'react';
import InvoiceSideBar from './InvoiceSideBar';
import InvoiceList from './InvoiceList';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';

const InvoiceListing = () => {
  const { messages } = useIntl();

  return (
    <AppsContainer
      title={messages['sidebar.invoice']}
      sidebarContent={<InvoiceSideBar />}
    >
      <InvoiceList />
    </AppsContainer>
  );
};

export default InvoiceListing;
