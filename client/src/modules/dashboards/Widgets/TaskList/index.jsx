import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { Button, List } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { StyledTaskListScrollbar } from './index.styled';

const TaskList = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.taskList']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }
    >
      <StyledTaskListScrollbar>
        <List
          dataSource={data}
          renderItem={(item) => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </StyledTaskListScrollbar>
    </AppCard>
  );
};

export default TaskList;

TaskList.defaultProps = {
  data: [],
};

TaskList.propTypes = {
  data: PropTypes.array,
};
