import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import ListingTable from '../ListingTable';
import FilterItem from '../FilterItem';
import AppRowContainer from '@crema/components/AppRowContainer';
import AppCard from '@crema/components/AppCard';
import { Col, Input } from 'antd';
import {
  StyledOrderFooterPagination,
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderPagination,
} from '../../Orders/index.styled';
import { StyledTitle5 } from '../index.styled';

const ProductListing = () => {
  const { messages } = useIntl();
  const [filterData, setFilterData] = useState({
    title: '',
    inStock: [true, false],
    mrp: { start: 0, end: 30000 },
  });

  const [page, setPage] = useState(0);
  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi(
    '/api/ecommerce/list',
    [],
    {},
    false,
  );

  const { list, total } = apiData;

  const onChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setQueryParams({ filterData, page: page > 0 ? page - 1 : 0 });
  }, [filterData, page]);

  const searchProduct = (title) => {
    setFilterData({ ...filterData, title });
  };

  return (
    <>
      <StyledTitle5>
        {messages['sidebar.ecommerceAdmin.productListing']}
      </StyledTitle5>
      <AppRowContainer>
        <Col xs={24} lg={18}>
          <AppCard
            title={
              <AppsHeader>
                <StyledOrderHeader>
                  <StyledOrderHeaderInputView>
                    <Input
                      id='user-name'
                      placeholder='Search'
                      type='search'
                      onChange={(event) => searchProduct(event.target.value)}
                    />
                  </StyledOrderHeaderInputView>
                  <StyledOrderHeaderPagination
                    pageSize={10}
                    count={total}
                    page={page}
                    onChange={onChange}
                  />
                </StyledOrderHeader>
              </AppsHeader>
            }
          >
            <ListingTable productData={list || []} loading={loading} />
            <StyledOrderFooterPagination
              pageSize={10}
              count={total}
              page={page}
              onChange={onChange}
            />
          </AppCard>
        </Col>
        <Col xs={24} lg={6}>
          <FilterItem filterData={filterData} setFilterData={setFilterData} />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default ProductListing;
