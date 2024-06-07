import React from 'react';
import PropTypes from 'prop-types';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { StyledPageVisitTable } from '../index.styled';

const columns = [
  {
    title: 'Page name',
    dataIndex: 'page',
    key: 'page',
  },
  {
    title: 'Page Views',
    dataIndex: 'pageView',
    key: 'pageView',
    render: (pageView) => (
      <span className='up-icon'>
        <CaretUpOutlined />
        {pageView}
      </span>
    ),
  },
  {
    title: 'Unique Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
    render: (visitors) => (
      <span className='down-icon'>
        <CaretDownOutlined />
        {visitors}
      </span>
    ),
  },
];

const VisitsTable = ({ visitsData }) => {
  return (
    <StyledPageVisitTable
      hoverColor
      data={visitsData}
      columns={columns}
      scroll={{ y: 450 }}
    />
  );
};

export default VisitsTable;

VisitsTable.defaultProps = {
  visitsData: [],
};

VisitsTable.propTypes = {
  visitsData: PropTypes.array,
};
