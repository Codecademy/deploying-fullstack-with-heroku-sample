import React from 'react';

import clsx from 'clsx';
import AppList from '@crema/components/AppList';
import { StyledTimeWrapper } from './index.styled';

const TimeSelection = () => {
  return (
    <div
      style={{
        minWidth: 70,
      }}
    >
      <AppList
        data={['1H', '1D', '7D', '15D', '1M']}
        renderItem={(data) => (
          <StyledTimeWrapper
            key={data}
            className={clsx({
              active: data === '1D',
            })}
          >
            {data}
          </StyledTimeWrapper>
        )}
      />
    </div>
  );
};

export default TimeSelection;
