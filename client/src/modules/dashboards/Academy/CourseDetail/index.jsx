import React from 'react';
import AppCard from '@crema/components/AppCard';
import CourseGraph from './CourseGraph';
import PropTypes from 'prop-types';
import AppMenu from '@crema/components/AppMenu';
import {
  StyledCourseDetailContent,
  StyledCourseDetailHeader,
  StyledCourseDetailHeaderInfo,
  StyledCourseDetailThumb,
} from './index.styled';

const CourseDetail = ({ course }) => {
  const getTitle = () => (
    <StyledCourseDetailHeader>
      <StyledCourseDetailThumb alt='' src={course.thumb} />
      <StyledCourseDetailHeaderInfo>
        <h3 className='text-truncate'>{course.title}</h3>
        <p className='mb-0 text-truncate'>{course.level}</p>
      </StyledCourseDetailHeaderInfo>
    </StyledCourseDetailHeader>
  );

  return (
    <AppCard title={getTitle()} extra={<AppMenu />}>
      <StyledCourseDetailContent>
        <div>
          <h4>{course.coveredDuration}</h4>
          <p>Lecture of</p>
          <p>{course.totalDuration}</p>
        </div>
        <div>
          <h4>{course.coveredPractice}</h4>
          <p>Practice of</p>
          <p>{course.totalPractice}</p>
        </div>

        <CourseGraph data={course.graphData} />
      </StyledCourseDetailContent>
    </AppCard>
  );
};

export default CourseDetail;

CourseDetail.propTypes = {
  course: PropTypes.object,
};
