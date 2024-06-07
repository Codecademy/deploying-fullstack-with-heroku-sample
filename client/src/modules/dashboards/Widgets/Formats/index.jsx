import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { Radio } from 'antd';
import { StyledFormatRadioGroup } from './index.styled';

const Formats = ({ data }) => {
  const { messages } = useIntl();

  return (
    <AppCard heightFull title={messages['dashboard.formats']}>
      <StyledFormatRadioGroup name='radiogroup' defaultValue={data[0].id}>
        {data.map((item) => {
          return (
            <Radio key={item.id} value={item.name}>
              {item.name}
            </Radio>
          );
        })}
      </StyledFormatRadioGroup>
    </AppCard>
  );
};

export default Formats;

Formats.defaultProps = {
  data: [],
};

Formats.propTypes = {
  data: PropTypes.array,
};
