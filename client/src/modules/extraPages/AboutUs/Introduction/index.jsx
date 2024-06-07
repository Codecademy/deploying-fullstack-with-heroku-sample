import React from 'react';
import PropTypes from 'prop-types';
import IntroductionItem from './IntroductionItem';
import {
  StyledCard,
  StyledCardMedia,
  StyledCardWraper,
  StyledIntroWrapper,
  StyledPrimarySubTitle,
  StyledPrimaryTitle,
  StyledTitleWrapper,
} from './index.styled';

const Introduction = ({ introduction }) => {
  return (
    <StyledCard>
      <StyledCardMedia src={introduction.srcImg} alt='introduction' />
      <StyledCardWraper>
        <StyledTitleWrapper>
          <StyledPrimarySubTitle level={5}>
            {introduction.subTitle}
          </StyledPrimarySubTitle>
          <StyledPrimaryTitle level={2}>
            {introduction.title}
          </StyledPrimaryTitle>
        </StyledTitleWrapper>
        <StyledIntroWrapper>
          {introduction.introductionList.map((introduction, index) => (
            <div className='introduction-item' key={index}>
              <IntroductionItem data={introduction} />
            </div>
          ))}
        </StyledIntroWrapper>
      </StyledCardWraper>
    </StyledCard>
  );
};

export default Introduction;

Introduction.propTypes = {
  introduction: PropTypes.object,
};
