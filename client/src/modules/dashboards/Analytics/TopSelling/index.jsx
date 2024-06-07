import React from 'react';
import ProductCell from './ProductCell';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { StyledTopSellingCard } from './index.styled';

const TopSelling = ({ products }) => {
  const { messages } = useIntl();
  return (
    <StyledTopSellingCard
      className='no-card-space-ltr-rtl'
      heightFull
      title={messages['dashboard.analytics.topSellingProducts']}
      actions={[<span key={1}>{'+12 ' + messages['common.more']}</span>]}
    >
      <List
        dataSource={products}
        renderItem={(data, index) => <ProductCell key={index} data={data} />}
      />
    </StyledTopSellingCard>
  );
};

export default TopSelling;

TopSelling.propTypes = {
  products: PropTypes.array,
};
