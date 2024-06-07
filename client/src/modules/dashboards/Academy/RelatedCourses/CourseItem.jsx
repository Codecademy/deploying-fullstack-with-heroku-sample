import React from 'react';
import PropTypes from 'prop-types';
import { EyeOutlined } from '@ant-design/icons';
import {
  StyledCourseView,
  StyledRelatedCourseAction,
  StyledRelatedCourseItem,
  StyledRelatedCourseThumb,
} from './index.styled';

const CourseItem = ({ data }) => {
  return (
    <StyledRelatedCourseItem>
      <StyledRelatedCourseThumb>
        <img src={data.image} alt={data.title} />
      </StyledRelatedCourseThumb>
      <h4>{data.title}</h4>
      <StyledRelatedCourseAction>
        <p>{data.author}</p>
        <StyledCourseView>
          <EyeOutlined />
          <span>{data.views} views</span>
        </StyledCourseView>
      </StyledRelatedCourseAction>
    </StyledRelatedCourseItem>
  );
};

export default CourseItem;

CourseItem.propTypes = {
  data: PropTypes.object,
};
