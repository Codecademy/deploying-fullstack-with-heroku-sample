import React, { useState } from 'react';
import { Badge, Button, Space, Switch } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { StyledAntBadgeGroup, StyledHeadExampleDiv } from './index.styled';

const ButtonGroup = Button.Group;

const Dynamic = () => {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const onChange = (show) => {
    setShow(show);
  };

  return (
    <Space direction='vertical'>
      <StyledAntBadgeGroup>
        <Badge count={count}>
          <StyledHeadExampleDiv />
        </Badge>
        <ButtonGroup>
          <Button onClick={decline}>
            <MinusOutlined />
          </Button>
          <Button onClick={increase}>
            <PlusOutlined />
          </Button>
        </ButtonGroup>
      </StyledAntBadgeGroup>
      <StyledAntBadgeGroup style={{ marginTop: 10 }}>
        <Badge dot={show}>
          <StyledHeadExampleDiv />
        </Badge>
        <Switch onChange={onChange} checked={show} />
      </StyledAntBadgeGroup>
    </Space>
  );
};

export default Dynamic;
