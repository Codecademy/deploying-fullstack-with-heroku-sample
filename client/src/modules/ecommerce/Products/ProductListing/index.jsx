import React, { useEffect, useState } from 'react';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import {
  StyledProductListMainContent,
  StyledProductListView,
} from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import PropTypes from 'prop-types';
import { VIEW_TYPE } from '../index';
import ProductHeader from '../ProductHeader';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';

const ProductListing = ({
  filterData,
  viewType,
  setViewType,
  setFilterData,
}) => {
  const [page, setPage] = useState(0);
  const [{ apiData: ecommerceList, loading }, { setQueryParams }] =
    useGetDataApi('/api/ecommerce/list', [], {}, false);
  const searchProduct = (title) => {
    setFilterData({ ...filterData, title });
  };

  const onPageChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    setQueryParams({ filterData, page });
  }, [filterData]);

  return (
    <StyledProductListView>
      <AppsHeader>
        <ProductHeader
          viewType={viewType}
          onChange={searchProduct}
          setViewType={setViewType}
          onPageChange={onPageChange}
        />
      </AppsHeader>

      <AppsContent>
        <StyledProductListMainContent>
          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid
              ecommerceList={ecommerceList?.list}
              loading={loading}
            />
          ) : (
            <ProductList
              ecommerceList={ecommerceList?.list}
              loading={loading}
            />
          )}
        </StyledProductListMainContent>
      </AppsContent>
    </StyledProductListView>
  );
};

export default ProductListing;

ProductListing.propTypes = {
  filterData: PropTypes.object,
  viewType: PropTypes.string,
  setViewType: PropTypes.func,
  setFilterData: PropTypes.func,
};
