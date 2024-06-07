import React from 'react';
import BtcGraph from './BtcGraph';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import {
  StyledBtcCard,
  StyledBtcFooter,
  StyledBtcItem,
  StyledBtcItemTitle,
} from './index.styled';

const BtcVolumeCurrency = (props) => {
  const { data } = props;

  const { messages } = useIntl();
  return (
    <StyledBtcCard heightFull title={messages['dashboard.btcVolumeByCurency']}>
      <BtcGraph data={data} />
      <StyledBtcFooter>
        {data.map((item) => {
          return (
            <StyledBtcItem key={item.id}>
              <StyledBtcItemTitle style={{ color: item.color }}>
                {item.value}
              </StyledBtcItemTitle>
              <p>{item.name}</p>
            </StyledBtcItem>
          );
        })}
      </StyledBtcFooter>
    </StyledBtcCard>
  );
};

export default BtcVolumeCurrency;

BtcVolumeCurrency.defaultProps = {
  data: [],
};

BtcVolumeCurrency.propTypes = {
  data: PropTypes.array,
};
