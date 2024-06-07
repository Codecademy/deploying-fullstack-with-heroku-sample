import React, { useEffect, useState } from 'react';
import InvContentHeader from './InvContentHeader';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import InvoiceTable from '../InvoiceTable';
import { useLocation, useParams } from 'react-router-dom';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import AppLoader from '@crema/components/AppLoader';

const InvoiceList = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData: invoiceList, loading }, { setQueryParams, reCallAPI }] =
    useGetDataApi(
      '/api/invoice/list',
      {},
      { folder: params?.folder || 'all' },
      true,
    );

  const [page, setPage] = useState(0);

  const onPageChange = (event, value) => {
    setPage(value);
  };
  const [filterText, onSetFilterText] = useState('');

  const [checkedInvs, setCheckedInvs] = useState([]);

  useEffect(() => {
    setQueryParams({
      folder: params?.folder,
      page: page,
    });
  }, [page, pathname]);

  const onChangeStatus = (invoice, status) => {
    invoice.folderValue = status;

    putDataApi('/api/invoice/list/update', infoViewActionsContext, { invoice })
      .then(() => {
        reCallAPI();
        infoViewActionsContext.showMessage(
          'Invoice status udpated successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  console.log('invoiceList', invoiceList);
  return !isEmptyObject(invoiceList) ? (
    <>
      <AppsHeader>
        <InvContentHeader
          page={page}
          invoiceList={invoiceList || []}
          checkedInvs={checkedInvs}
          setCheckedInvs={setCheckedInvs}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
        />
      </AppsHeader>
      <AppsContent>
        <InvoiceTable
          invoiceData={invoiceList || []}
          loading={loading}
          onChangeStatus={onChangeStatus}
        />
      </AppsContent>
    </>
  ) : (
    <AppLoader />
  );
};

export default InvoiceList;
