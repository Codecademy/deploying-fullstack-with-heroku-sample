import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { List } from 'antd';
import { StyledReviewScrollbar } from './index.styled';

const Reviews = (props) => {
  const { data } = props;
  const { messages } = useIntl();

  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['common.reviews']}
    >
      <StyledReviewScrollbar>
        <List
          dataSource={data}
          renderItem={(item) => {
            return <ReviewItem key={item.id} item={item} />;
          }}
        />
      </StyledReviewScrollbar>
    </AppCard>
  );
};

export default Reviews;

Reviews.defaultProps = {
  data: [],
};

Reviews.propTypes = {
  data: PropTypes.array,
};
