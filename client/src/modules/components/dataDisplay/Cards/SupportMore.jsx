import React from 'react';
import { Avatar, Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const SupportMore = () => {
  return (
    <Card
      cover={
        <img
          alt='example'
          src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        />
      }
      actions={[
        <SettingOutlined key='1' />,
        <EditOutlined key='2' />,
        <EllipsisOutlined key='3' />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
        }
        title='Card title'
        description='This is the description'
      />
    </Card>
  );
};

export default SupportMore;
