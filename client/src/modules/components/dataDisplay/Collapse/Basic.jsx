import React from 'react';
import { Collapse, Space } from 'antd';
import { StyledP } from './basic.styled';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Basic = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header='This is panel header 1' key='1'>
          <StyledP>{text}</StyledP>
        </Panel>
        <Panel header='This is panel header 2' key='2'>
          <StyledP>{text}</StyledP>
        </Panel>
        <Panel header='This is panel header 3' key='3' collapsible='disabled'>
          <StyledP>{text}</StyledP>
        </Panel>
      </Collapse>
    </Space>
  );
};

export default Basic;
