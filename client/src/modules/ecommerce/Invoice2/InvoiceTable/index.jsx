import React from 'react';

import InvoiceColumns from './InvoiceColumns';
import { StyledInvoiceTable } from './index.styled';
import { invoiceData } from '@crema/mockapi/fakedb/extraPages';

const InvoiceTable = () => {
  return (
    <StyledInvoiceTable data={invoiceData.products} columns={InvoiceColumns} />
  );
};

export default InvoiceTable;
