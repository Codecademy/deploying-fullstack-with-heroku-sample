import React from 'react';
import AppCircularProgress from '@crema/components/AppCircularProgress';
import PropTypes from 'prop-types';
import {
  StyledLearningAction,
  StyledLearningContent,
  StyledLearningItems,
  StyledLearningItemsInfo,
  StyledLearningThumb,
} from './index.styled';

const LearningItem = ({ course }) => {
  return (
    <StyledLearningItems className='item-hover' key={course.id}>
      <StyledLearningItemsInfo>
        <StyledLearningThumb>
          <img alt='' src={course.icon} />
        </StyledLearningThumb>
        <StyledLearningContent>
          <h3>{course.title}</h3>
          <p>{course.desc}</p>
        </StyledLearningContent>
      </StyledLearningItemsInfo>

      <StyledLearningAction>
        <AppCircularProgress
          strokeColor='#0A8FDC'
          trailColor='rgb(214, 214, 214)'
          percent={course.percentage}
          size={45}
        />
      </StyledLearningAction>
    </StyledLearningItems>
  );
};

export default LearningItem;

LearningItem.propTypes = {
  course: PropTypes.object,
};
