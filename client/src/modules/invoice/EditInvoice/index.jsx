import React from 'react';
import AddInvoice from '../AddInvoice';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { isEmptyObject } from '@crema/helpers/ApiHelper';

const EditInvoicePage = () => {
  const { id } = useParams();
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
  const [{ apiData: selectedInv }] = useGetDataApi(
    '/api/invoice/detail',
    {},
    { id },
    true,
  );

  const onSave = (invoice) => {
    putDataApi('/api/invoice/list/update', infoViewActionsContext, { invoice })
      .then(() => {
        infoViewActionsContext.showMessage(
          'New Invoice has been udpated successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate('/invoice/invoices');
  };

  return (
    clientsList &&
    invoiceList?.length &&
    !isEmptyObject(selectedInv) && (
      <AddInvoice
        selectedInv={selectedInv}
        clientsList={clientsList}
        totalCount={invoiceList?.length || 0}
        invoiceSettings={invoiceSettings}
        onSave={onSave}
      />
    )
  );
};

export default EditInvoicePage;
