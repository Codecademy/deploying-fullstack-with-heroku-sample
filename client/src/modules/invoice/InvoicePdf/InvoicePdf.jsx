import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppRowContainer from '@crema/components/AppRowContainer';
import dayjs from 'dayjs';

import InvoiceTable from './InvoiceTable';
import { downloadPdf } from '@crema/helpers/FileHelper';
import { Button, Col, Divider, Typography } from 'antd';
import { StyledFlexWrapper, StyledFlexWrapper1 } from './index.styled';
import {
  StyledBankAccountWrapper,
  StyledPrimaryText2,
} from '../AddInvoice/index.styled';
import { DownloadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const InvoicePdf = ({ selectedInv, clientsList, invoiceSettings }) => {
  const selectedClient = clientsList.find(
    (item) => item.id === selectedInv.clientId,
  );

  const invDate = dayjs(selectedInv.idt);
  const dueDate = dayjs(selectedInv.dueDate);
  const dueDays = dueDate.diff(invDate, 'days');

  return (
    <AppCard title='Invoice' style={{ width: '70%', margin: 'auto' }}>
      <div id='pdfdiv'>
        <div style={{ padding: '40px 16px' }}>
          <AppRowContainer gutter={5}>
            <Col xs={24} md={10}>
              <div
                style={{
                  position: 'relative',
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Title level={4}>
                  {selectedClient?.name}
                </Typography.Title>
                <Typography.Title
                  level={5}
                  style={{ marginTop: 12, marginBottom: 12 }}
                >
                  {selectedClient?.firstName} {selectedClient?.lastName}
                </Typography.Title>
                <div style={{ marginBottom: 8 }}>
                  {selectedClient?.steetName}{' '}
                  {selectedClient?.steetName.length > 0 && ' , '}
                  {selectedClient?.city}{' '}
                  {selectedClient?.city.length > 0 && ' , '}
                  {selectedClient?.zipCode}{' '}
                  {selectedClient?.zipCode.length > 0 && ' , '}
                  {selectedClient?.state}{' '}
                  {selectedClient?.state.length > 0 && ' , '}
                  {selectedClient?.country}
                </div>
                {selectedClient?.vatId && (
                  <div style={{ marginBottom: 2 }}>
                    VAT ID: {selectedClient?.vatId}
                  </div>
                )}
              </div>
            </Col>
            {invoiceSettings?.general && (
              <Col
                xs={24}
                md={12}
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ width: '50%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 3 }}>
                    {invoiceSettings.general.agencyName}
                  </Typography.Title>
                  <Typography.Title level={4} style={{ marginBottom: 12 }}>
                    {invoiceSettings.general.agencyName}
                  </Typography.Title>
                  <div style={{ marginBottom: 12 }}>
                    <div>{invoiceSettings.general.streetName}</div>
                    <div>{invoiceSettings.general.state}</div>
                    <div>
                      {invoiceSettings.general.zipCode}{' '}
                      {invoiceSettings.general.country}
                    </div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div>{invoiceSettings.general.phoneNumber}</div>
                    <div>{invoiceSettings.invoicing.email}</div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div>VAT ID: {invoiceSettings.accounting.vatId}</div>
                    <div>Tax ID: {invoiceSettings.accounting.taxId}</div>
                  </div>
                </div>
                {invoiceSettings?.invoicing && (
                  <div style={{ width: '50%', marginLeft: 16 }}>
                    {invoiceSettings.invoicing.logo && (
                      <img
                        src={invoiceSettings.invoicing.logo}
                        alt='logo'
                        style={{ width: 70, height: 'auto' }}
                      />
                    )}
                  </div>
                )}
              </Col>
            )}
          </AppRowContainer>
          <Typography.Title level={3} style={{ marginBottom: 12 }}>
            Invoice
          </Typography.Title>
          <StyledFlexWrapper>
            <StyledFlexWrapper1>
              <span style={{ marginRight: 8 }}>Invoice ID:</span>
              <div>{selectedInv.inum}</div>
            </StyledFlexWrapper1>
            <StyledFlexWrapper1>
              <span style={{ marginRight: 8 }}>Invoice Date:</span>
              <div>{selectedInv.idt}</div>
            </StyledFlexWrapper1>
          </StyledFlexWrapper>
          <div style={{ marginBottom: 16 }}>{selectedInv.introductionText}</div>
        </div>

        <InvoiceTable
          items={selectedInv.items}
          taxTypeData={selectedInv.taxType}
          taxRateData={selectedInv.tax}
          currency={selectedInv?.currency}
        />

        <div style={{ padding: '40px 16px' }}>
          <div
            style={{
              borderRadius: 8,
              padding: 4,
            }}
          >
            <Typography.Title level={4} style={{ marginBottom: 4 }}>
              Payment Terms
            </Typography.Title>
            <div style={{ marginBottom: 16 }}>
              Please Pay within {dueDays} days of receiving this invoice.
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>{selectedInv.conclusionText}</div>
          <Divider />

          {invoiceSettings?.accounting && (
            <StyledBankAccountWrapper>
              <Typography.Title level={4} style={{ marginBottom: 16 }}>
                Bank Account
              </Typography.Title>
              <StyledPrimaryText2>
                <div>Receiver: {invoiceSettings.accounting.accountHolder}</div>
                <div>Bank Name: {invoiceSettings.accounting.bankName}</div>
                <div>
                  Country of bank: {invoiceSettings.accounting.countryOfBank}
                </div>
                <div>
                  Account Number: {invoiceSettings.accounting.accountNumber}
                </div>
                <div>SWIFT/BIC: {invoiceSettings.accounting.swiftBic}</div>
                <div>IFSC: {invoiceSettings.accounting.ifsc}</div>
              </StyledPrimaryText2>
            </StyledBankAccountWrapper>
          )}
        </div>
      </div>
      <Button
        style={{ display: 'block', marginLeft: 'auto', marginTop: 16 }}
        type='primary'
        onClick={() => downloadPdf()}
        icon={<DownloadOutlined />}
      >
        Download Invoice
      </Button>
    </AppCard>
  );
};

InvoicePdf.propTypes = {
  selectedInv: PropTypes.object,
  clientsList: PropTypes.array,
  invoiceSettings: PropTypes.object,
};

export default InvoicePdf;
