import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai';
import CardWrapper from './CardMediaWrapper';
import {
  StyledCardWrapper,
  StyledSecondaryText,
  StyledTitle,
} from './index.styled';

const PortfolioCard = ({ portfolio, onViewPortfolioDetail }) => {
  return (
    <CardWrapper onClick={() => onViewPortfolioDetail(portfolio)}>
      <div className='card-media-wrapper'>
        <StyledCardWrapper
          cover={<img alt='example' src={portfolio.srcImg} />}
          alt='Portfolio'
        />
        <div className='card-media-content'>
          <div className='icon'>
            <FiSearch />
          </div>
          <div className='icon'>
            <AiOutlineLink />
          </div>
        </div>
      </div>
      <div className='card-content'>
        <StyledTitle>{portfolio.title}</StyledTitle>
        <StyledSecondaryText>{portfolio.subTitle}</StyledSecondaryText>
      </div>
    </CardWrapper>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  portfolio: PropTypes.object,
  onViewPortfolioDetail: PropTypes.func,
};
