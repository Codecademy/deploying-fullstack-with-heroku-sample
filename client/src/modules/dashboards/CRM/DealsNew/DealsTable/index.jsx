import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Avatar, Typography } from 'antd';
import {
  StyledDealsTable,
  StyledDealsUserInfo,
  StyledDetailUserInfoContent,
} from '../../Deals/index.styled';
import { blue, green, red } from '@ant-design/colors';
import { StyledProgress } from '../index.styled';

const getProgressColor = (progress) => {
  switch (progress) {
    case 'Pending':
      return `${red[6]}`;

    case 'Approved':
      return `${blue[5]}`;

    case 'Application':
      return `${green[6]}`;

    default:
      return `${red[6]}`;
  }
};

const columns = [
  {
    title: <IntlMessages id='common.num' />,
    dataIndex: `id`,
    key: 'id',
    render: (id) => <span>{id}</span>,
  },
  {
    title: <IntlMessages id='common.name' />,
    dataIndex: 'name',
    key: 'name',
    render: (name, record) => (
      <StyledDealsUserInfo>
        {record.logo ? (
          <Avatar
            style={{ marginRight: 12, width: 34, height: 34 }}
            src={record.logo}
          />
        ) : (
          <Avatar style={{ marginRight: 12, width: 34, height: 34 }}>
            {record.name[0].toUpperCase()}
          </Avatar>
        )}
        <StyledDetailUserInfoContent>
          <h3> {record.name}</h3>
        </StyledDetailUserInfoContent>
      </StyledDealsUserInfo>
    ),
  },
  {
    title: <IntlMessages id='common.type' />,
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: <IntlMessages id='common.amount' />,
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => <Typography.Text strong>{amount}</Typography.Text>,
  },
  {
    title: <IntlMessages id='common.progress' />,
    dataIndex: 'progress',
    key: 'progress',
    render: (progress) => {
      return (
        <StyledProgress
          style={{
            color: getProgressColor(progress),
            backgroundColor: getProgressColor(progress) + '33',
          }}
        >
          {progress}
        </StyledProgress>
      );
    },
  },
  {
    title: <IntlMessages id='common.created' />,
    dataIndex: 'created',
    key: 'created',
  },
];

const DealsTable = (props) => {
  const { dealsTableData } = props;

  return (
    <StyledDealsTable
      scroll={{ x: 'auto', y: 205 }}
      hoverColor
      data={dealsTableData}
      columns={columns}
    />
  );
};

export default DealsTable;

DealsTable.defaultProps = {
  dealsTableData: [],
};

DealsTable.propTypes = {
  dealsTableData: PropTypes.array,
};
