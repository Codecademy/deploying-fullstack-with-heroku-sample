import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import {
  StyledDealsTable,
  StyledDealsUserInfo,
  StyledDetailUserInfoContent,
} from '../index.styled';

const columns = [
  {
    title: 'No.',
    dataIndex: `id`,
    key: 'id',
    render: (id) => <span>{id}.</span>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <StyledDealsUserInfo>
        <Avatar src={name.logo} />
        <StyledDetailUserInfoContent>
          <h3>{name.name}</h3>
        </StyledDetailUserInfoContent>
      </StyledDealsUserInfo>
    ),
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },
];
const DealsTable = (props) => {
  const { dealsTableData } = props;

  return (
    <StyledDealsTable hoverColor data={dealsTableData} columns={columns} />
  );
};

export default DealsTable;

DealsTable.defaultProps = {
  dealsTableData: [],
};

DealsTable.propTypes = {
  dealsTableData: PropTypes.array,
};
