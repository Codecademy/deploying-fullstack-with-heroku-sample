import React from 'react';
import InvoicePdf from './InvoicePdf';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import { StyledTypographyWrapper } from '../index.styled';

const InvoicePdfPage = () => {
  const { id } = useParams();

  const [{ apiData: invoiceSettings }] = useGetDataApi(
    '/api/invoice/settings',
    {},
    {},
    true,
  );

  const [{ apiData: clientsList }] = useGetDataApi(
    '/api/invoice/clients',
    {},
    {},
    true,
  );

  const [{ apiData: selectedInv }] = useGetDataApi(
    '/api/invoice/detail',
    {},
    { id },
    true,
  );

  return (
    clientsList?.length > 0 &&
    !isEmptyObject(invoiceSettings) &&
    !isEmptyObject(selectedInv) && (
      <StyledTypographyWrapper>
        <InvoicePdf
          selectedInv={selectedInv}
          clientsList={clientsList}
          invoiceSettings={invoiceSettings}
        />
      </StyledTypographyWrapper>
    )
  );
};

export default InvoicePdfPage;
