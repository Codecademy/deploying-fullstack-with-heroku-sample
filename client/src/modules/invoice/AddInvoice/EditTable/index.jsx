import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { getFormattedDate } from '@crema/helpers/DateHelper';
import { formatCurrency } from '@crema/helpers/StringHelper';
import { currencyList, quantityType, taxRates, taxType } from '../data';
import {
  StyledAddItem,
  StyledCloseBtn,
  StyledFlexWrapper,
  StyledSecondary,
  StyledSecondaryText,
} from './index.styled';
import { Col, DatePicker, Input, InputNumber, Select, Table } from 'antd';
import { GrClose } from 'react-icons/gr';
import dayjs from 'dayjs';
import { AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';

const { Column, ColumnGroup } = Table;

const today = dayjs().format('DD MMM YYYY');

const EditInvoiceTable = ({
  items,
  taxTypeData,
  taxRateData,
  currencyData,
  setCurrencyData,
  setItems,
  setTaxTypeData,
  setTaxRateData,
}) => {
  const onChangeLineItems = (index, key, value, nestedKey) => {
    const newItems = [...items];
    if (nestedKey) {
      if (nestedKey === 'duration')
        value = getFormattedDate(value, 'DD MMM YYYY');
      newItems[index][nestedKey][key] = value;
    } else {
      newItems[index][key] = value;
    }
    setItems(newItems);
  };

  const onDeleteLineItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const getTotal = () => {
    return (
      items.reduce((acc, item) => {
        return acc + item.total;
      }, 0) || 0
    );
  };

  return (
    <>
      <Table dataSource={items} pagination={false}>
        <ColumnGroup>
          <Column title='Pos' dataIndex='id' key='id' />
          <Column
            title='Task Name'
            dataIndex='name'
            key='name'
            render={(name, record, index) => (
              <Input
                autoFocus
                value={name || ''}
                placeholder='Name'
                onChange={(e) =>
                  onChangeLineItems(index, 'name', e.target.value)
                }
              />
            )}
          />
          <Column
            title='Duration'
            dataIndex='duration'
            key='duration'
            render={(duration, record, index) => (
              <div
                style={{ display: 'flex', whiteSpace: 'inherit !important' }}
              >
                <DatePicker.RangePicker
                  value={[
                    dayjs(record?.duration?.from),
                    dayjs(record?.duration?.to),
                  ]}
                  placeholder='From'
                  onChange={(value) => {
                    console.log('From', value);
                    onChangeLineItems(index, 'from', value[0], 'duration');
                    onChangeLineItems(index, 'to', value[1], 'duration');
                  }}
                  format='DD MMM YYYY'
                  clearIcon={false}
                />
              </div>
            )}
          />
          <Column
            title='Quantity'
            dataIndex='quantity'
            key='quantity'
            render={(quantity, record, index) => (
              <div style={{ display: 'flex' }}>
                <InputNumber
                  style={{ minWidth: 50 }}
                  value={record?.quantity?.value}
                  placeholder='Value'
                  onChange={(value) => {
                    onChangeLineItems(index, 'value', value, 'quantity');
                    onChangeLineItems(
                      index,
                      'total',
                      value * record?.unitPrice || 0,
                    );
                  }}
                />
                <Select
                  style={{ marginLeft: 10 }}
                  value={record?.quantity?.type}
                  onChange={(value) => {
                    onChangeLineItems(index, 'type', value, 'quantity');
                  }}
                >
                  {quantityType.map((quantity) => {
                    return (
                      <Select.Option
                        value={quantity.value}
                        key={quantity.value}
                      >
                        {quantity.label}
                      </Select.Option>
                    );
                  })}
                </Select>
              </div>
            )}
          />
          <Column
            title='Price Per Unit'
            dataIndex='unitPrice'
            key='unitPrice'
            render={(unitPrice, record, index) => (
              <InputNumber
                value={record?.unitPrice || 0}
                placeholder='Unit Price'
                onChange={(value) => {
                  onChangeLineItems(index, 'unitPrice', value);
                  onChangeLineItems(
                    index,
                    'total',
                    value * record?.quantity?.value || 0,
                  );
                }}
              />
            )}
          />
          <Column
            title='Sub Total'
            dataIndex='total'
            key='total'
            render={(total, record, index) => (
              <div
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
              >
                {formatCurrency(
                  record?.total || 0,
                  {
                    language: currencyData.language,
                    currency: currencyData.currency,
                  },
                  2,
                )}
                <StyledCloseBtn onClick={() => onDeleteLineItem(index)}>
                  <GrClose size={15} />
                </StyledCloseBtn>
              </div>
            )}
          />
        </ColumnGroup>
      </Table>

      <AppRowContainer gutter={2} style={{ marginTop: 40 }}>
        <Col xs={24} md={12}>
          <StyledAddItem
            onClick={() =>
              setItems([
                ...items,
                {
                  id: items.length + 1,
                  duration: { from: today, to: today },
                  quantity: {
                    type: 'fixed',
                    value: 1,
                  },
                },
              ])
            }
          >
            <AiOutlinePlus size={18} />
            <div style={{ marginLeft: 6, fontSize: 16 }}>Add Item</div>
          </StyledAddItem>
        </Col>
        <Col xs={24} md={10} style={{ marginLeft: 'auto', marginRight: 40 }}>
          <StyledSecondary>
            <div style={{ marginRight: 28, width: '100%' }}>Subtotal:</div>
            <div>
              {formatCurrency(
                getTotal(),
                {
                  language: currencyData.language,
                  currency: currencyData.currency,
                },
                2,
              )}
            </div>
          </StyledSecondary>
          <StyledFlexWrapper>
            <Select
              style={{ marginRight: 24, width: '100%' }}
              value={taxTypeData}
              onChange={(value) => setTaxTypeData(value)}
            >
              {taxType.map((quantity) => {
                return (
                  <Select.Option value={quantity.value} key={quantity.value}>
                    {quantity.label}
                  </Select.Option>
                );
              })}
            </Select>
            <Select
              style={{ marginRight: 24, width: '100%' }}
              value={taxRateData}
              onChange={(value) => setTaxRateData(value)}
            >
              {taxRates.map((quantity) => {
                return (
                  <Select.Option value={quantity.value} key={quantity.value}>
                    {quantity.label}
                  </Select.Option>
                );
              })}
            </Select>
            <StyledSecondaryText>
              {formatCurrency(
                getTotal() * taxRateData * 0.01,
                {
                  language: currencyData.language,
                  currency: currencyData.currency,
                },
                2,
              )}
            </StyledSecondaryText>
          </StyledFlexWrapper>
          {taxTypeData === 'cgst_sgst' && (
            <>
              <StyledSecondary>
                <div style={{ width: '50%' }} />
                <div style={{ marginLeft: 16, width: '50%' }}> CGST:</div>
                <div>
                  {formatCurrency(
                    (getTotal() * (taxRateData * 0.01)) / 2,
                    {
                      language: currencyData.language,
                      currency: currencyData.currency,
                    },
                    2,
                  )}
                </div>
              </StyledSecondary>
              <StyledSecondary>
                <div style={{ width: '50%' }} />
                <div style={{ marginLeft: 16, width: '50%' }}> SGST:</div>
                <div>
                  {formatCurrency(
                    (getTotal() * (taxRateData * 0.01)) / 2,
                    {
                      language: currencyData.language,
                      currency: currencyData.currency,
                    },
                    2,
                  )}
                </div>
              </StyledSecondary>
            </>
          )}
          <StyledSecondary>
            <div style={{ marginRight: 24, width: '50%' }}>Total:</div>
            <Select
              style={{ marginRight: 24, width: '50%' }}
              value={currencyData.currency}
              onChange={(value) => {
                const type = currencyList.find(
                  (item) => item.currency === value,
                );
                setCurrencyData(type);
              }}
            >
              {currencyList.map((quantity) => {
                return (
                  <Select.Option
                    value={quantity.currency}
                    key={quantity.currency}
                  >
                    {quantity.currency}
                  </Select.Option>
                );
              })}
            </Select>
            <div>
              {formatCurrency(
                getTotal() * (1 - taxRateData * 0.01),
                {
                  language: currencyData.language,
                  currency: currencyData.currency,
                },
                2,
              )}
            </div>
          </StyledSecondary>
        </Col>
      </AppRowContainer>
    </>
  );
};

EditInvoiceTable.propTypes = {
  items: PropTypes.array,
  taxTypeData: PropTypes.string,
  taxRateData: PropTypes.number,
  currencyData: PropTypes.object,
  setCurrencyData: PropTypes.func,
  setItems: PropTypes.func,
  setTaxTypeData: PropTypes.func,
  setTaxRateData: PropTypes.func,
};
export default EditInvoiceTable;
