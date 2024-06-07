import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { formatCurrency } from '@crema/helpers/StringHelper';
import { taxType } from '../../AddInvoice/data';
import { Col, Table } from 'antd';
import { getColumns } from './columns';
import {
  StyledSecondary,
  StyledSecondaryText,
} from '../../AddInvoice/EditTable/index.styled';
import PropTypes from 'prop-types';

const EditInvoiceTable = ({ items, currency, taxTypeData, taxRateData }) => {
  const taxLabelType = taxType.find((tax) => tax.value === taxTypeData).label;

  const currencyData = currency || {
    currency: 'INR',
    language: 'en-IN',
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
      <Table
        dataSource={items}
        columns={getColumns(currencyData)}
        pagination={false}
      />
      <AppRowContainer spacing={2} style={{ marginTop: 40 }}>
        <Col xs={24} md={10} style={{ marginLeft: 'auto', marginRight: 10 }}>
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
          <StyledSecondary>
            <div style={{ marginRight: 28, width: '100%' }}>
              {taxLabelType} ({taxRateData}%):
            </div>
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
          </StyledSecondary>
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
  currency: PropTypes.object,
  taxTypeData: PropTypes.string,
  taxRateData: PropTypes.number,
};

export default EditInvoiceTable;
