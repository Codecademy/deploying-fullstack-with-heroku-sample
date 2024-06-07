import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, List } from 'antd';
import { StyledTaskListItem } from './index,styled';

// const getData = (data) => {
//   if (isBreakPointDown('xl')) {
//     return data.slice(0, 5);
//   } else {
//     return data.slice(0, 6);
//   }
// };

const TaskList = (props) => {
  const { todayTaskData } = props;
  const [taskList, handleList] = useState(todayTaskData);

  const handleChange = (e, task) => {
    task.isChecked = e.target.checked;
    const list = todayTaskData.map((item) =>
      item.id === task.id ? task : item,
    );
    handleList(list);
  };

  return (
    <List
      dataSource={taskList}
      renderItem={(task) => {
        return (
          <StyledTaskListItem key={task.id} className='item-hover'>
            <List.Item.Meta
              avatar={
                <Checkbox
                  color='primary'
                  checked={task.isChecked}
                  onChange={(e) => handleChange(e, task)}
                />
              }
              title={task.task}
              description={task.date}
            />
          </StyledTaskListItem>
        );
      }}
    />
  );
};

export default TaskList;

TaskList.defaultProps = {
  todayTaskData: [],
};

TaskList.propTypes = {
  todayTaskData: PropTypes.array,
};
