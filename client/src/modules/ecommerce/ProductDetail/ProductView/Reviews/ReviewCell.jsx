import React from 'react';
import { Button } from 'antd';
import { DislikeOutlined, LikeOutlined, StarFilled } from '@ant-design/icons';
import {
  StyledProductDetailCellAction,
  StyledProductDetailCellAvatar,
  StyledProductDetailCellTime,
  StyledProductDetailReviewCell,
  StyledProductDetailReviewCellBadge,
  StyledProductDetailReviewCellContent,
  StyledProductDetailReviewCellInfo,
} from '../index.styled';

const ReviewCell = () => {
  return (
    <StyledProductDetailReviewCell className='item-hover'>
      <StyledProductDetailReviewCellInfo>
        <StyledProductDetailCellAvatar
          alt='user image'
          src={'/assets/images/avatar/A1.jpg'}
        />

        <StyledProductDetailReviewCellContent>
          <h3>
            <StyledProductDetailReviewCellBadge>
              5 <StarFilled />
            </StyledProductDetailReviewCellBadge>
            Parmar Ravikumar
          </h3>
          <p>
            If several languages coalesce, the grammar of the resulting language
          </p>
          <StyledProductDetailCellTime>5 hrs ago</StyledProductDetailCellTime>
        </StyledProductDetailReviewCellContent>
      </StyledProductDetailReviewCellInfo>
      <StyledProductDetailCellAction>
        <Button type='text'>
          <LikeOutlined style={{ fontSize: 16 }} />
        </Button>
        345
        <Button type='text'>
          <DislikeOutlined style={{ fontSize: 16 }} />
        </Button>
        13
      </StyledProductDetailCellAction>
    </StyledProductDetailReviewCell>
  );
};
export default ReviewCell;
