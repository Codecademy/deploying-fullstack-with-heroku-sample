import React from 'react';
import PropTypes from 'prop-types';

import { StyledCurrencyWrapper, StyledInput } from './index.styled';
import { Fonts } from '@crema/constants/AppEnums';

const CurrencyField = ({
  value,
  onChange,
  coinColor,
  shortName,
  hideUSD = false,
}) => {
  const [active, setActive] = React.useState(false);

  return (
    <StyledCurrencyWrapper className={active ? 'active' : ''}>
      <p className='label'>Amount ({shortName})</p>
      <StyledInput
        value={value}
        bordered={false}
        onChange={(valueType) => onChange(valueType)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        addonBefore={
          hideUSD ? (
            ''
          ) : (
            <span
              style={{
                paddingTop: 15,
                fontWeight: Fonts.MEDIUM,
                fontSize: 14,
              }}
            >
              $
            </span>
          )
        }
        addonAfter={
          <span
            style={{
              color: coinColor,
              paddingTop: 15,
            }}
          >
            {shortName}
          </span>
        }
      />
    </StyledCurrencyWrapper>
  );
};

export default CurrencyField;

CurrencyField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  hideUSD: PropTypes.bool,
  value: PropTypes.any,
  shortName: PropTypes.string,
  coinColor: PropTypes.string,
};
