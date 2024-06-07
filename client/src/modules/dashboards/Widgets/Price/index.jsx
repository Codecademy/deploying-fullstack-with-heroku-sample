import React from 'react';
import { Slider } from 'antd';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { StyledPriceText } from './index.styled';

const Price = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const { messages } = useIntl();
  return (
    <AppCard title={messages['dashboard.price']}>
      <StyledPriceText>{`$${value[0]}mi - $${value[1]}mi`}</StyledPriceText>

      <Slider onChange={handleChange} range defaultValue={value} />
    </AppCard>
  );
};

export default Price;
