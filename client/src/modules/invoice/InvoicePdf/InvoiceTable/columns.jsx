import React from 'react';
import { formatCurrency } from '@crema/helpers/StringHelper';

export const getColumns = (currencyData) => [
  {
    title: 'Pos',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Task Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    render: (text, record) =>
      `${record?.duration?.from} To ${record?.duration?.to}`,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (text, record) =>
      `${record?.quantity?.value}
      ${
        record?.quantity?.type !== 'fixed'
          ? `${record?.quantity?.type}${record?.quantity?.value > 1 ? 's' : ''}`
          : ''
      }`,
  },
  {
    title: 'Price Per Unit',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    render: (text, record) => (
      <>
        {record?.unitPrice}{' '}
        {record?.quantity?.type !== 'fixed'
          ? `per ${record?.quantity?.type}`
          : ''}
      </>
    ),
  },
  {
    title: 'Sub Total',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    render: (text, record) => (
      <>
        {formatCurrency(
          record?.total || 0,
          {
            language: currencyData.language,
            currency: currencyData.currency,
          },
          2,
        )}
      </>
    ),
  },
];
