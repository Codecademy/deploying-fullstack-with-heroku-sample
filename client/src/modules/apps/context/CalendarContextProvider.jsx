import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useLocation, useParams } from 'react-router-dom';

const CalendarContext = createContext();
const CalendarActionsContext = createContext();

export const useCalendarContext = () => useContext(CalendarContext);

export const useCalendarActionsContext = () =>
  useContext(CalendarActionsContext);

export const CalendarContextProvider = ({ children }) => {
  const [filterData, setFilterData] = useState({
    status: [],
    priority: [],
  });
  const params = useParams();
  const { pathname } = useLocation();
  const [{ apiData: labelList }] = useGetDataApi('/api/calendar/labels/list');
  const [{ apiData: priorityList }] = useGetDataApi(
    '/api/calendar/priority/list',
  );
  const [{ apiData: staffList }] = useGetDataApi('/api/calendar/staff/list');
  const [{ apiData: folderList }] = useGetDataApi(
    '/api/calendar/folders/list',
    [],
  );
  const [{ apiData: statusList }] = useGetDataApi(
    '/api/calendar/status/list',
    [],
  );
  const [page, setPage] = useState(0);

  const [
    { apiData: taskLists, loading },
    { setQueryParams, setData: setCalenderData, reCallAPI },
  ] = useGetDataApi('/api/calendar/task/list', undefined, {}, false);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    setQueryParams({
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page: page,
    });
  }, [page, pathname]);

  const onPageChange = (event, value) => {
    setPage(value);
  };
  const getFilterData = () => {
    if (taskLists) {
      const data = taskLists.data.filter((task) => {
        let status = true;
        if (filterData.status.length > 0) {
          status = filterData.status.includes(task.status);
        }
        let priority = true;
        if (filterData.priority.length > 0) {
          priority = filterData.priority.includes(task.priority.id);
        }
        return status && priority;
      });
      return {
        data,
        count: data.length,
      };
    }
    return [];
  };

  return (
    <CalendarContext.Provider
      value={{
        labelList,
        priorityList,
        staffList,
        statusList,
        folderList,
        filterData,
        taskLists: getFilterData(),
        loading,
        page,
      }}
    >
      <CalendarActionsContext.Provider
        value={{
          setCalenderData,
          onPageChange,
          setQueryParams,
          reCallAPI,
          setPage,
          setFilterData,
        }}
      >
        {children}
      </CalendarActionsContext.Provider>
    </CalendarContext.Provider>
  );
};
export default CalendarContextProvider;

CalendarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
