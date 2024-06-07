import React from 'react';
import { useIntl } from 'react-intl';
import {
  StyledAppProgressCircular,
  StyledDollerIcon,
  StyledRevCircularProgress,
  StyledRevCircularProgressContent,
  StyledRevCirProgressContentBottom,
  StyledRevenueCard,
} from './index.styled';

const Revenue = () => {
  const { messages } = useIntl();

  return (
    <StyledRevenueCard title={messages['eCommerce.revenue']} heightFull>
      <StyledRevCircularProgress>
        <StyledAppProgressCircular
          strokeColor='#0A8FDC'
          percent={70}
          size='small'
          format={() => (
            <StyledRevCircularProgressContent>
              <div className='ant-row'>
                <StyledDollerIcon>$</StyledDollerIcon>
                <h3>600</h3>
              </div>
              <p>Sales</p>
            </StyledRevCircularProgressContent>
          )}
        />
      </StyledRevCircularProgress>
      <StyledRevCirProgressContentBottom>
        <div>
          <p>$ 2,000</p>
          <span>Target</span>
        </div>
        <div>
          <p>$ 1,500</p>
          <span>Current</span>
        </div>
      </StyledRevCirProgressContentBottom>
    </StyledRevenueCard>
  );
};

export default Revenue;
