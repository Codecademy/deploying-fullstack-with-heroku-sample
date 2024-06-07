import React from 'react';
import AppCircularProgress from '@crema/components/AppCircularProgress';
import { StarFilled } from '@ant-design/icons';
import { Progress } from 'antd';
import {
  StyledProductDetailReviewCirProgressInside,
  StyledProductDetailReviewCirProgressView,
  StyledProductDetailReviewContent,
  StyledProductDetailReviewInfo,
  StyledProductDetailReviewitem,
  StyledProductDetailReviewResult,
} from '../index.styled';

const ReviewInfo = () => {
  return (
    <StyledProductDetailReviewInfo>
      <StyledProductDetailReviewCirProgressView>
        <AppCircularProgress
          className='appCircularProgress'
          trailColor='#d6d6d6'
          strokeColor='#49BD65'
          percent={70}
          size={150}
          format={() => (
            <StyledProductDetailReviewCirProgressInside>
              <h3>
                4.8 <StarFilled />
              </h3>
              <p>Overall rating</p>
            </StyledProductDetailReviewCirProgressInside>
          )}
        />
      </StyledProductDetailReviewCirProgressView>
      <StyledProductDetailReviewContent>
        <StyledProductDetailReviewitem>
          <span>5</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#49BD65'
            percent={70}
            showInfo={false}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <StyledProductDetailReviewResult>432</StyledProductDetailReviewResult>
        </StyledProductDetailReviewitem>
        <StyledProductDetailReviewitem>
          <span>4</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#49BD65'
            percent={30}
            showInfo={false}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <StyledProductDetailReviewResult>122</StyledProductDetailReviewResult>
        </StyledProductDetailReviewitem>
        <StyledProductDetailReviewitem>
          <span>3</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#FF9F00'
            percent={20}
            showInfo={false}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <StyledProductDetailReviewResult>20</StyledProductDetailReviewResult>
        </StyledProductDetailReviewitem>
        <StyledProductDetailReviewitem>
          <span>2</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#FF9F00'
            percent={30}
            showInfo={false}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <StyledProductDetailReviewResult>3</StyledProductDetailReviewResult>
        </StyledProductDetailReviewitem>
        <StyledProductDetailReviewitem>
          <span>1</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#FF6161'
            percent={40}
            showInfo={false}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <StyledProductDetailReviewResult>4</StyledProductDetailReviewResult>
        </StyledProductDetailReviewitem>
      </StyledProductDetailReviewContent>
    </StyledProductDetailReviewInfo>
  );
};

export default ReviewInfo;
