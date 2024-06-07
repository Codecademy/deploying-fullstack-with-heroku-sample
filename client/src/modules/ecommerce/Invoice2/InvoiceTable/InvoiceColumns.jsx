import React from 'react';
import { StyledInvoiceTruncateView } from './index.styled';

const InvoiceColumns = [
  {
    title: 'Item & Description',
    dataIndex: 'item',
    key: 'item',
    render: (item) => (
      <>
        <h6>{item.itemTitle}</h6>
        {item.desc ? (
          <StyledInvoiceTruncateView>
            <span className='text-truncate'>{item.desc}</span>
          </StyledInvoiceTruncateView>
        ) : null}
      </>
    ),
  },
  {
    title: 'Assignment Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

export default InvoiceColumns;
