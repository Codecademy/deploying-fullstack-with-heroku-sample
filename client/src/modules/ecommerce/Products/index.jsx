import React from 'react';
import ProductListing from './ProductListing';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';

import AppPageMeta from '@crema/components/AppPageMeta';
import ProductsSidebar from './ProductsSidebar';

export const VIEW_TYPE = {
  GRID: 'grid',
  LIST: 'list',
};

const Products = () => {
  const { messages } = useIntl();
  const [filterData, setFilterData] = React.useState({
    title: '',
    brand: [],
    ideaFor: [],
    discount: [],
    color: [],
    rating: [],
  });
  const [viewType, setViewType] = React.useState(VIEW_TYPE.GRID);
  return (
    <AppsContainer
      title={messages['sidebar.ecommerce.products']}
      sidebarContent={
        <ProductsSidebar
          filterData={filterData}
          setFilterData={setFilterData}
        />
      }
    >
      <AppPageMeta title='Products Listing' />
      <ProductListing
        filterData={filterData}
        viewType={viewType}
        setViewType={setViewType}
        setFilterData={setFilterData}
      />
    </AppsContainer>
  );
};

export default Products;
