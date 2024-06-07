import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import {
  StyledGraphItem,
  StyledMarketingCampaignTable,
  StyledMarketingUserInfo,
  StyledMarketingUserInfoContent,
} from '../index.styled';

const OrderTable = ({ marketingCampaignData }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <StyledMarketingUserInfo>
          <Avatar src={record.icon} />
          <StyledMarketingUserInfoContent>
            <h3>{record.name}</h3>
            <p>{record.description}</p>
          </StyledMarketingUserInfoContent>
        </StyledMarketingUserInfo>
      ),
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Spend',
      dataIndex: 'spent',
      key: 'spent',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Graph',
      dataIndex: 'graph',
      key: 'graph',
      align: 'center',
      render: (graph, record) => (
        <StyledGraphItem>
          <span>
            {record.growth ? (
              <img
                src={'/assets/images/dashboard/growth_icon.svg'}
                alt='growth_icon'
              />
            ) : (
              <img
                src={'/assets/images/dashboard/decries_icon.svg'}
                alt='decries_icon'
              />
            )}
          </span>
          <span style={{ color: `${record.growth ? '#0A8FDC' : '#F44D50'}` }}>
            {record.graph}
          </span>
          <span>{record.growth ? 'Up' : 'Down'}</span>
        </StyledGraphItem>
      ),
    },
  ];

  return (
    <StyledMarketingCampaignTable
      scroll={{ x: 'auto', y: 320 }}
      data={marketingCampaignData}
      columns={columns}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  marketingCampaignData: [],
};

OrderTable.propTypes = {
  marketingCampaignData: PropTypes.array,
};
