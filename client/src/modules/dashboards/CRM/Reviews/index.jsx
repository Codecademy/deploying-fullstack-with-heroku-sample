import React from 'react';
import ReviewsGraph from './ReviewsGraph';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledReviewContent,
  StyledReviewGraph,
  StyledReviewsCard,
} from './index.styled';

const Reviews = ({ reviewGraphData }) => {
  return (
    <StyledReviewsCard>
      <StyledReviewContent>
        <h3>
          <IntlMessages id='common.reviews' />
        </h3>
        <h4>34,042</h4>
        <p>
          <IntlMessages id='dashboard.reviewText' />
        </p>
      </StyledReviewContent>
      <StyledReviewGraph>
        <ReviewsGraph reviewGraphData={reviewGraphData} />
      </StyledReviewGraph>
    </StyledReviewsCard>
  );
};

export default Reviews;

Reviews.defaultProps = {
  reviewGraphData: [],
};

Reviews.propTypes = {
  reviewGraphData: PropTypes.array,
};
