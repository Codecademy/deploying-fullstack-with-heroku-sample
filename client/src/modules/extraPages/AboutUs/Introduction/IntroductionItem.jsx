import React from 'react';
import PropTypes from 'prop-types';
import { StyledIntroDesc, StyledIntroTitle } from './index.styled';

const IntroductionItem = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div style={{ marginRight: 20 }}>
        <img style={{ minWidth: 34 }} src={data.icon} alt='icon' />
      </div>
      <div>
        <StyledIntroTitle level={4}>{data.title}</StyledIntroTitle>
        <StyledIntroDesc>{data.description}</StyledIntroDesc>
      </div>
    </div>
  );
};

export default IntroductionItem;

IntroductionItem.propTypes = {
  data: PropTypes.object,
};
