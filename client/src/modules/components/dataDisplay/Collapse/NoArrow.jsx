import React from 'react';
import { Collapse, Space } from 'antd';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const NoArrow = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header='This is panel header with arrow icon' key='1'>
          <p>{text}</p>
        </Panel>
        <Panel
          showArrow={false}
          header='This is panel header with no arrow icon'
          key='2'
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Space>
  );
};

export default NoArrow;
