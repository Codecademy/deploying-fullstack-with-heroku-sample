import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppScrollbar from '@crema/components/AppScrollbar';
import AppList from '@crema/components/AppList';
import TodoCell from './TodoCell';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const ToDoLists = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.crm.toDoLists']}
      className='no-card-space-ltr-rtl'
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <AppScrollbar style={{ paddingLeft: 20, paddingRight: 20 }}>
        <AppList
          data={data}
          renderItem={(todo) => <TodoCell key={todo.id} todo={todo} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default ToDoLists;

ToDoLists.propTypes = {
  data: PropTypes.array,
};
