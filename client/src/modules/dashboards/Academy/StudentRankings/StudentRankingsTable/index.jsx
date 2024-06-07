import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStudentAvatar,
  StyledStudentBadge,
  StyledStudentInfo,
  StyledStudentTableContainer,
  StyledStudentTitle,
} from '../index.styled';

const StudentRankingsTable = ({ studentRankings }) => {
  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <StyledStudentInfo>
          <StyledStudentAvatar src={record.profile_pic} size={40} />
          <StyledStudentTitle>{record.name}</StyledStudentTitle>
        </StyledStudentInfo>
      ),
    },
    {
      title: 'Course ID',
      dataIndex: 'courseId',
      key: 'courseId',
    },
    {
      title: 'Course Name',
      dataIndex: 'courseName',
      key: 'courseName',
    },
    {
      title: 'Total Grade',
      dataIndex: 'totalGrade',
      key: 'totalGrade',
      render: (totalGrade) => <span>{totalGrade} point</span>,
    },
    {
      title: 'Ranking',
      dataIndex: 'ranking',
      key: 'ranking',
      render: (ranking) => <span>Ranking {ranking}</span>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => <StyledStudentBadge>{category}</StyledStudentBadge>,
    },
  ];

  return (
    <StyledStudentTableContainer
      hoverColor
      data={studentRankings}
      columns={columns}
    />
  );
};

export default StudentRankingsTable;

StudentRankingsTable.defaultProps = {
  studentRankings: [],
};

StudentRankingsTable.propTypes = {
  studentRankings: PropTypes.array,
};
