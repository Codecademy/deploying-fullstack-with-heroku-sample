import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useLocation } from 'react-router-dom';

export const ViewMode = {
  List: 'list',
  Calendar: 'calendar',
};

const TodoContext = createContext();
const TodoActionsContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const useTodoActionsContext = () => useContext(TodoActionsContext);

export const TodoContextProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState(ViewMode.List);
  const { pathname } = useLocation();
  const path = pathname.split('/');
  const [{ apiData: labelList }] = useGetDataApi('/api/todo/labels/list');
  const [{ apiData: priorityList }] = useGetDataApi('/api/todo/priority/list');
  const [{ apiData: staffList }] = useGetDataApi('/api/todo/staff/list');
  const [{ apiData: folderList }] = useGetDataApi('/api/todo/folders/list', []);
  const [{ apiData: statusList }] = useGetDataApi('/api/todo/status/list', []);
  const [page, setPage] = useState(0);

  const [
    { apiData: taskLists, loading },
    { setQueryParams, setData: setTodoData, reCallAPI },
  ] = useGetDataApi('/api/todo/task/list', undefined, {}, false);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    setQueryParams({
      type: path[path.length - 2],
      name: path[path.length - 1],
      page: page,
    });
  }, [page, pathname]);

  const onPageChange = (page) => {
    setPage(page - 1);
  };

  return (
    <TodoContext.Provider
      value={{
        labelList,
        priorityList,
        staffList,
        statusList,
        folderList,
        taskLists,
        loading,
        page,
        viewMode,
      }}
    >
      <TodoActionsContext.Provider
        value={{
          setTodoData,
          onPageChange,
          setQueryParams,
          reCallAPI,
          setPage,
          setViewMode,
        }}
      >
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
