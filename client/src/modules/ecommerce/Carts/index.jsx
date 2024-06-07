import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../OrderSummary';

import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Button, Col } from 'antd';
import AppAnimate from '@crema/components/AppAnimate';
import AppPageMeta from '@crema/components/AppPageMeta';
import QueueAnim from 'rc-queue-anim';
import { StyledCartsFooter } from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import CartTable from './CartTable';

const Carts = () => {
  const navigate = useNavigate();

  const [{ apiData, loading }, { setData }] = useGetDataApi(
    '/api/cart/get',
    [],
    {},
  );

  return (
    <>
      <AppPageMeta title='Carts' />
      <QueueAnim style={{ zIndex: 3 }} type='scale'>
        <h2 className='page-title' key='title'>
          <IntlMessages id='sidebar.ecommerce.cart' />
        </h2>
      </QueueAnim>
      <AppRowContainer>
        <Col xs={24} lg={16}>
          <AppAnimate animation='transition.slideLeftIn' delay={200}>
            <AppCard
              key='a'
              className='no-card-space-ltr-rtl'
              actions={[
                <StyledCartsFooter key={1}>
                  <Button
                    type='primary'
                    onClick={() => {
                      navigate('/apps/ecommerce/products');
                    }}
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    className='btn-secondary'
                    onClick={() => {
                      navigate('/apps/ecommerce/checkout');
                    }}
                  >
                    Checkout
                  </Button>
                </StyledCartsFooter>,
              ]}
            >
              <CartTable
                cartItems={apiData}
                loading={loading}
                setTableData={setData}
              />
            </AppCard>
          </AppAnimate>
        </Col>
        <Col xs={24} lg={8}>
          <OrderSummary cartItems={apiData} key='b' />{' '}
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Carts;
