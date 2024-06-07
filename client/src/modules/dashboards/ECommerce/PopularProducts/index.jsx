import React from 'react';
import AppCard from '@crema/components/AppCard';
import ProductCell from './ProductCell';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledPopularScrollbar, StyledPowerGrid } from './index.styled';
import AppSelect from '@crema/components/AppSelect';

const PopularProducts = ({ popularProducts }) => {
  const { messages } = useIntl();

  const handleSelectionType = () => {
    console.log('handleSelectionType');
  };

  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.popularProducts']}
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <StyledPopularScrollbar style={{ height: 355 }}>
        <StyledPowerGrid
          dataSource={popularProducts}
          renderItem={(data, index) => (
            <ProductCell key={'product-' + index} data={data} />
          )}
        />
      </StyledPopularScrollbar>
    </AppCard>
  );
};

export default PopularProducts;

PopularProducts.propTypes = {
  popularProducts: PropTypes.array,
};
