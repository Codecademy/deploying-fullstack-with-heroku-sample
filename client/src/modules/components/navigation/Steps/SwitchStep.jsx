import React from 'react';
import { Button, message, Space, Steps } from 'antd';

import { StyledStepContent, StyledStepsAction } from './SwitchStep.styled';

const { Step } = Steps;

const items = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const SwitchStep = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Steps current={current} items={items}>
        {items.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <StyledStepContent>{items[current].content}</StyledStepContent>
      <StyledStepsAction>
        {current < items.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current === items.length - 1 && (
          <Button
            type='primary'
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </StyledStepsAction>
    </Space>
  );
};

export default SwitchStep;
