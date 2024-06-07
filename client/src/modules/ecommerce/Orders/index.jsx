import React, { useEffect, useState } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppInfoView from '@crema/components/AppInfoView';
import { Input } from 'antd';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledOrderFooterPagination,
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderPagination,
  StyledOrderHeaderRight,
} from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { StyledLinkBtn } from '../Confirmation/index.styled';
import OrderTable from './OrderTable';

const Orders = () => {
  const navigate = useNavigate();
  const { messages } = useIntl();
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');

  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi(
    '/api/ecommerce/orders',
    {},
    {},
    false,
  );

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

  return (
    <>
      <AppPageMeta title='Orders' />
      <AppsContainer
        title={messages['eCommerce.recentOrders']}
        type='bottom'
        fullView
      >
        <AppsHeader>
          <StyledOrderHeader>
            <StyledOrderHeaderInputView>
              <Input
                id='user-name'
                placeholder='Search'
                type='search'
                onChange={onSearchOrder}
              />
            </StyledOrderHeaderInputView>
            <StyledOrderHeaderRight>
              <StyledLinkBtn
                type='primary'
                onClick={() => {
                  navigate('/apps/ecommerce/products');
                }}
              >
                Continue Shopping
              </StyledLinkBtn>

              <StyledOrderHeaderPagination
                pageSize={10}
                count={apiData?.count}
                page={page}
                onChange={onChange}
              />
            </StyledOrderHeaderRight>
          </StyledOrderHeader>
        </AppsHeader>

        <AppsContent
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <OrderTable loading={loading} orderData={apiData?.data || []} />
        </AppsContent>

        <StyledOrderFooterPagination
          pageSize={10}
          count={apiData?.count}
          page={page}
          onChange={onChange}
        />
      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default Orders;
