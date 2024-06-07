import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import AppMenu from '@crema/components/AppMenu';
import {
  StyledRecentPatientBadge,
  StyledRecentPatientTable,
  StyledRecentPatientUserInfo,
  StyledRecentPatientUserInfoContent,
} from '../index.styled';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name, record) => (
      <StyledRecentPatientUserInfo>
        <Avatar src={record.profile_pic} />
        <StyledRecentPatientUserInfoContent>
          <h3>{record.name}</h3>
        </StyledRecentPatientUserInfoContent>
      </StyledRecentPatientUserInfo>
    ),
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'Assigned Dr',
    dataIndex: 'assignedDr',
    key: 'assignedDr',
  },
  {
    title: 'Admit Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => (
      <StyledRecentPatientBadge
        style={{
          color: record.color,
          backgroundColor: record.color + '44',
        }}
      >
        {record.status}
      </StyledRecentPatientBadge>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <AppMenu />,
  },
];

const PatientsTable = ({ recentPatients }) => {
  return (
    <StyledRecentPatientTable
      hoverColor
      data={recentPatients}
      columns={columns}
    />
  );
};

export default PatientsTable;

PatientsTable.defaultProps = {
  recentPatients: [],
};

PatientsTable.propTypes = {
  recentPatients: PropTypes.array,
};
