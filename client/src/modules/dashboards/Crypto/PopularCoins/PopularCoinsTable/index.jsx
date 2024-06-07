import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { red } from '@ant-design/colors';
import {
  StyledPopularCoinTable,
  StyledPopularCoinUserInfo,
  StyledPopularCoinUserInfoContent,
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
      <StyledPopularCoinUserInfo>
        <Avatar
          src={name.image}
          style={{ backgroundColor: name.image ? name.color : red[5] }}
        />
        <StyledPopularCoinUserInfoContent>
          <h3>{name.title}</h3>
        </StyledPopularCoinUserInfoContent>
      </StyledPopularCoinUserInfo>
    ),
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCap',
    key: 'marketCap',
  },
  {
    title: 'Volume 24h',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: '24h %',
    dataIndex: 'h',
    key: 'h',
  },
];

const PopularCoinsTable = (props) => {
  const { popularCoins } = props;

  return (
    <StyledPopularCoinTable hoverColor data={popularCoins} columns={columns} />
  );
};

export default PopularCoinsTable;

PopularCoinsTable.defaultProps = {
  popularCoins: [],
};

PopularCoinsTable.propTypes = {
  popularCoins: PropTypes.array,
};
