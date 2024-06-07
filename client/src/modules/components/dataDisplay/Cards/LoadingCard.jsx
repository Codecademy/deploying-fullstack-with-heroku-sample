import React from 'react';
import { Avatar, Card, Skeleton, Space, Switch } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { StyledLoadingCard } from './loadingCard.styled';

const { Meta } = Card;

class LoadingCard extends React.Component {
  state = {
    loading: true,
  };

  onChange = (checked) => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <Space direction='vertical'>
        <Switch checked={!loading} onChange={this.onChange} />

        <StyledLoadingCard
          style={{ width: 300, marginTop: 16 }}
          loading={loading}
        >
          <Meta
            avatar={
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            }
            title='Card title'
            description='This is the description'
          />
        </StyledLoadingCard>

        <StyledLoadingCard
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              title='Card title'
              description='This is the description'
            />
          </Skeleton>
        </StyledLoadingCard>
      </Space>
    );
  }
}

export default LoadingCard;
