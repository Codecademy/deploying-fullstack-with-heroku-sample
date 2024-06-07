import AppCard from '@crema/components/AppCard';
import AppRowContainer from '@crema/components/AppRowContainer';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import EditInvoiceTable from './EditTable';
import { getFormattedDate } from '@crema/helpers/DateHelper';
import { currencyList, taxRates, taxType } from './data';
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Input,
  InputNumber,
  Select,
  Typography,
} from 'antd';
import {
  StyledBankAccountWrapper,
  StyledClientWrapper,
  StyledCloseBtn,
  StyledDueWrapper,
  StyledInumWrapper,
  StyledItdWrapper,
  StyledPrimaryText,
  StyledPrimaryText2,
} from './index.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';

const AddInvoice = ({
  selectedInv,
  totalCount,
  clientsList,
  invoiceSettings,
  onSave,
}) => {
  const [currencyData, setCurrencyData] = useState(currencyList[0]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editInum, setEditInum] = useState(false);
  const [editIdt, setShowIdt] = useState(false);
  const [items, setItems] = useState([]);
  const [invoiceNo, setInvoiceNo] = useState(
    dayjs().format('YYYY-MM-DD') + '-' + (Number(totalCount) + 1),
  );
  const [invoiceDate, setInvoiceDate] = useState(dayjs().format('DD/MM/YYYY'));

  const [introductionText, setIntroductionText] = useState('');
  const [editIntroductionText, setEditIntroductionText] = useState(false);

  const [editDueDays, setEditDueDays] = useState(false);
  const [dueDays, setDueDays] = useState(30);
  const [conclusionText, setConclusionText] = useState('');
  const [editConclusionText, setEditConclusionText] = useState(false);
  const [taxTypeData, setTaxTypeData] = useState(taxType[0].value);
  const [taxRateData, setTaxRateData] = useState(taxRates[0].value);

  useEffect(() => {
    if (selectedInv) {
      const client = clientsList.find(
        (item) => item.id === selectedInv.clientId,
      );
      setSelectedClient(client);
      setItems(selectedInv.items);
      setInvoiceNo(selectedInv.inum);
      setInvoiceDate(selectedInv.idt);
      setIntroductionText(selectedInv.introductionText);
      setConclusionText(selectedInv.conclusionText);
      setTaxTypeData(selectedInv.taxType);
      setTaxRateData(selectedInv.tax);
    }
  }, [selectedInv]);

  const onSubmit = () => {
    const totalAmount = items.reduce((acc, item) => acc + item.total, 0);
    onSave({
      id: selectedInv ? selectedInv.id : totalCount + 1,
      clientId: selectedClient?.id || '',
      clientName: selectedClient?.name || '',
      inum: invoiceNo,
      idt: dayjs(invoiceDate, 'DD/MM/YYYY').format('DD MMM YYYY'),
      dueDate: dayjs(invoiceDate, 'DD/MM/YYYY')
        .add(dueDays, 'days')
        .format('DD MMM YYYY'),
      amount: totalAmount - totalAmount * taxRateData * 0.01,
      folderValue: 120,
      tax: taxRateData,
      taxType: taxTypeData,
      currency: currencyData,
      introductionText,
      conclusionText,
      items,
    });
  };

  return (
    <AppCard title='Invoice' style={{ width: '70%', margin: 'auto' }}>
      <div style={{ padding: '40px 16px' }}>
        <AppRowContainer gutter={5}>
          <Col xs={24} md={12}>
            {!selectedClient ? (
              <Select
                placeholder='Add Client'
                value={selectedClient}
                onChange={(value) =>
                  setSelectedClient(
                    clientsList.find((item) => item.id === value),
                  )
                }
                style={{ width: '80%' }}
              >
                {clientsList.map((label) => {
                  return (
                    <Select.Option value={label.id} key={label.id}>
                      {label.name}
                    </Select.Option>
                  );
                })}
              </Select>
            ) : (
              <StyledClientWrapper>
                <StyledCloseBtn
                  className='closeBtn'
                  onClick={() => setSelectedClient(null)}
                >
                  <GrClose size={15} />
                </StyledCloseBtn>
                <Typography.Title level={4}>
                  {selectedClient.name}
                </Typography.Title>
                <Typography.Title
                  level={4}
                  style={{ marginTop: 12, marginBottom: 12 }}
                >
                  {selectedClient.firstName} {selectedClient.lastName}
                </Typography.Title>
                <div style={{ marginBottom: 8 }}>
                  {selectedClient.steetName}{' '}
                  {selectedClient.steetName.length > 0 && ' , '}
                  {selectedClient.city}{' '}
                  {selectedClient.city.length > 0 && ' , '}
                  {selectedClient.zipCode}{' '}
                  {selectedClient.zipCode.length > 0 && ' , '}
                  {selectedClient.state}{' '}
                  {selectedClient.state.length > 0 && ' , '}
                  {selectedClient.country}
                </div>
                <div style={{ marginBottom: 8 }}>
                  VAT ID: {selectedClient.vatId}
                </div>
              </StyledClientWrapper>
            )}
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
                <Typography.Title level={4} style={{ marginBottom: 12 }}>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <StyledInumWrapper editInum={editInum}>
            <span style={{ marginRight: 8 }}>Invoice ID:</span>
            {editInum ? (
              <Input
                autoFocus
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                onBlur={() => setEditInum(false)}
              />
            ) : (
              <div onClick={() => setEditInum(true)}>{invoiceNo}</div>
            )}
          </StyledInumWrapper>
          <StyledItdWrapper editIdt={editIdt}>
            <span style={{ marginRight: 8 }}>Invoice Date:</span>
            {editIdt ? (
              <DatePicker
                autoFocus
                value={dayjs(invoiceDate, 'DD/MM/YYYY')}
                onChange={(value) => {
                  setInvoiceDate(getFormattedDate(value, 'DD/MM/YYYY'));
                  setShowIdt(false);
                }}
                onBlur={() => setShowIdt(false)}
                clearIcon={false}
              />
            ) : (
              <div onClick={() => setShowIdt(true)}>{invoiceDate}</div>
            )}
          </StyledItdWrapper>
        </div>
        <div style={{ marginBottom: 16 }}>
          {editIntroductionText ? (
            <Input
              value={introductionText}
              onChange={(e) => setIntroductionText(e.target.value)}
              onBlur={() => setEditIntroductionText(false)}
            />
          ) : introductionText?.length > 0 ? (
            <div onClick={() => setEditIntroductionText(true)}>
              {introductionText}
            </div>
          ) : (
            <StyledPrimaryText onClick={() => setEditIntroductionText(true)}>
              <AiOutlinePlus size={18} />
              <div style={{ marginLeft: 8, fontSize: 16 }}>
                Add Introduction text (Optional)
              </div>
            </StyledPrimaryText>
          )}
        </div>
      </div>

      <EditInvoiceTable
        items={items}
        setItems={setItems}
        taxTypeData={taxTypeData}
        taxRateData={taxRateData}
        setTaxTypeData={setTaxTypeData}
        setTaxRateData={setTaxRateData}
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
      />

      <div style={{ padding: '40px 16px' }}>
        <div style={{ marginBottom: 16 }}>
          {editDueDays ? (
            <InputNumber
              value={dueDays}
              onChange={(value) => setDueDays(value || 0)}
              onBlur={() => setEditDueDays(false)}
            />
          ) : (
            <StyledDueWrapper
              editDueDays={editDueDays}
              onClick={() => setEditDueDays(true)}
            >
              <Typography.Title level={4} style={{ marginBottom: 4 }}>
                Payment Terms
              </Typography.Title>
              <Typography.Text style={{ marginBottom: 16 }}>
                Please Pay within {dueDays} days of receiving this invoice.
              </Typography.Text>
            </StyledDueWrapper>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          {editConclusionText ? (
            <Input
              autoFocus
              value={conclusionText}
              onChange={(e) => setConclusionText(e.target.value)}
              onBlur={() => setEditConclusionText(false)}
            />
          ) : conclusionText?.length > 0 ? (
            <div onClick={() => setEditConclusionText(true)}>
              {conclusionText}
            </div>
          ) : (
            <StyledPrimaryText onClick={() => setEditConclusionText(true)}>
              <AiOutlinePlus size={18} />
              <div style={{ marginLeft: 8, fontSize: 16 }}>
                Add concluding text (Optional)
              </div>
            </StyledPrimaryText>
          )}
        </div>
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
        <Button
          style={{ display: 'block', marginLeft: 'auto' }}
          type='primary'
          onClick={onSubmit}
        >
          {selectedInv ? 'Update' : 'Send'} Invoice
        </Button>
      </div>
    </AppCard>
  );
};

AddInvoice.propTypes = {
  selectedInv: PropTypes.object,
  totalCount: PropTypes.number,
  clientsList: PropTypes.array,
  invoiceSettings: PropTypes.object,
  onSave: PropTypes.func,
};
export default AddInvoice;
