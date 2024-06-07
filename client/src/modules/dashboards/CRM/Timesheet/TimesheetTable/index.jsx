import React from 'react';
import PropTypes from 'prop-types';
import { StyledTicketSupportTable } from '../../TicketSupport/index.styled';
import { StyledFlex, StyledNumberWrapper } from '../index.styled';
import { Typography } from 'antd';

const columns = [
  {
    title: 'Project',
    dataIndex: 'id',
    key: 'id',
    render: (id, record) => (
      <StyledFlex>
        <StyledNumberWrapper>{id}</StyledNumberWrapper>
        <Typography.Title level={5}>{record.name}</Typography.Title>
      </StyledFlex>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Start time',
    dataIndex: 'start_time',
    key: 'start_time',
  },
  {
    title: 'Stop time',
    dataIndex: 'end_time',
    key: 'end_time',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
];

const TimesheetTable = ({ timesheet }) => {
  return (
    <StyledTicketSupportTable
      scroll={{ x: 'auto', y: 200 }}
      hoverColor
      data={timesheet}
      columns={columns}
    />
  );
};

export default TimesheetTable;

TimesheetTable.defaultProps = {
  timesheet: [],
};

TimesheetTable.propTypes = {
  timesheet: PropTypes.array,
};
