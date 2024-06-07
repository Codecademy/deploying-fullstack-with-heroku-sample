import React from 'react';
import { Avatar, Badge, Space } from 'antd';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import { StyledAvatarItem } from './withBadge.styled';

const WithBadge = () => {
  return (
    <Space wrap>
      <StyledAvatarItem>
        <Badge count={1}>
          <Avatar shape='square' icon={<UserOutlined />} />
        </Badge>
      </StyledAvatarItem>
      <span>
        <Badge dot>
          <Avatar shape='square' icon={<UserOutlined />} />
        </Badge>
      </span>
    </Space>
  );
};

export default WithBadge;
