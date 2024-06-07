import React from 'react';
import AddInvoice from './AddInvoice';
import { postDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { useNavigate } from 'react-router-dom';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { StyledTypographyWrapper } from '../index.styled';

const AddInvoicePage = () => {
  const navigate = useNavigate();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData: clientsList }] = useGetDataApi(
    '/api/invoice/clients',
    {},
    {},
    true,
  );
  const [{ apiData: invoiceSettings }] = useGetDataApi(
    '/api/invoice/settings',
    {},
    {},
    true,
  );

  const [{ apiData: invoiceList }] = useGetDataApi(
    '/api/invoice/list',
    {},
    {},
    true,
  );
  const onSave = (invoice) => {
    postDataApi('/api/invoice/list/add', infoViewActionsContext, { invoice })
      .then(() => {
        infoViewActionsContext.showMessage(
          'New Invoice has been created successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate('/invoice/invoices');
  };

  return (
    clientsList &&
    invoiceList?.length && (
      <StyledTypographyWrapper>
        <AddInvoice
          clientsList={clientsList}
          totalCount={invoiceList?.length || 0}
          invoiceSettings={invoiceSettings}
          onSave={onSave}
        />
      </StyledTypographyWrapper>
    )
  );
};

export default AddInvoicePage;
