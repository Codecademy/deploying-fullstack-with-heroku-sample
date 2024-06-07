import React, { useEffect, useState } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppInfoView from '@crema/components/AppInfoView';
import { Input, Modal } from 'antd';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledCustomerFooterPagination,
  StyledCustomerHeader,
  StyledCustomerHeaderPagination,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,
} from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import CustomerTable from './CustomerTable';
import EditCustomer from './EditCustomer';

const Customers = () => {
  const { messages } = useIntl();
  const [
    {
      apiData: { customers, customerCount },
      loading,
    },
    { setQueryParams },
  ] = useGetDataApi('/api/ecommerce/customers', {}, {}, false);

  console.log('customers', customers, customerCount);
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AppPageMeta title='Customers' />
      <AppsContainer
        title={messages['sidebar.ecommerce.customers']}
        fullView
        type='bottom'
      >
        <AppsHeader key={'wrap'}>
          <StyledCustomerHeader>
            <StyledCustomerInputView>
              <Input
                id='user-name'
                placeholder='Search'
                type='search'
                onChange={onSearchOrder}
              />
            </StyledCustomerInputView>
            <StyledCustomerHeaderRight>
              <StyledCustomerHeaderPagination
                pageSize={10}
                count={customerCount}
                page={page}
                onChange={onChange}
              />
            </StyledCustomerHeaderRight>
          </StyledCustomerHeader>
        </AppsHeader>

        <AppsContent
          key={'wrap1'}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <CustomerTable loading={loading} customers={customers} />
        </AppsContent>

        <StyledCustomerFooterPagination
          key={'wrap2'}
          pageSize={10}
          count={customerCount}
          page={page}
          onChange={onChange}
        />
      </AppsContainer>

      <Modal
        title={messages['ecommerce.addCustomer']}
        open={isModalVisible}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <EditCustomer />
      </Modal>

      <AppInfoView />
    </>
  );
};

export default Customers;
