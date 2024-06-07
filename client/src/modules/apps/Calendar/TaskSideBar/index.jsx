import React from 'react';
import AddNewTask from '../AddNewTask';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppsSideBarFolderItem from '@crema/components/AppsSideBarFolderItem';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/components/AppSkeleton/SidebarListSkeleton';
import FilterItem from './FilterItem';
import TaskLabelItem from './LabelItem';
import {
  useCalendarActionsContext,
  useCalendarContext,
} from '../../context/CalendarContextProvider';
import {
  StyledPlusOutlined,
  StyledTodoScrollbar,
  StyledTodoSidebarContent,
  StyledTodoSidebarHeader,
  StyledTodoSidebarList,
  StyledTodoSidebarTitle,
} from './index.styled';
import { Button } from 'antd';

const TaskSideBar = () => {
  const { labelList, folderList, priorityList, statusList, filterData } =
    useCalendarContext();
  const { setFilterData } = useCalendarActionsContext();

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  return (
    <>
      <StyledTodoSidebarHeader>
        <Button
          ghost
          type='primary'
          icon={<StyledPlusOutlined style={{ marginRight: 8 }} />}
          onClick={onOpenAddTask}
        >
          <IntlMessages id='todo.addNewTask' />
        </Button>
      </StyledTodoSidebarHeader>
      <StyledTodoScrollbar>
        <StyledTodoSidebarContent>
          <StyledTodoSidebarList itemLayout='horizontal'>
            <AppList
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/calender/${item.alias}`}
                />
              )}
            />
          </StyledTodoSidebarList>
          <StyledTodoSidebarTitle>Labels</StyledTodoSidebarTitle>
          <StyledTodoSidebarList aria-label='main mailbox folders'>
            <AppList
              data={labelList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(label) => (
                <TaskLabelItem key={label.id} label={label} />
              )}
            />
          </StyledTodoSidebarList>
          <StyledTodoSidebarTitle>Priority</StyledTodoSidebarTitle>
          <StyledTodoSidebarList aria-label='main mailbox folders'>
            <AppList
              data={priorityList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(priority) => (
                <FilterItem
                  key={priority.id}
                  item={priority}
                  checked={filterData.priority}
                  onChange={(checked, id) =>
                    setFilterData({
                      ...filterData,
                      priority: checked
                        ? filterData.priority.concat(id)
                        : filterData.priority.filter((data) => data !== id),
                    })
                  }
                />
              )}
            />
          </StyledTodoSidebarList>
          <StyledTodoSidebarTitle>Status</StyledTodoSidebarTitle>
          <AppList
            data={statusList}
            ListEmptyComponent={
              <ListEmptyResult
                loading={true}
                placeholder={<SidebarPlaceholder />}
              />
            }
            renderItem={(status) => (
              <FilterItem
                key={status.id}
                item={status}
                checked={filterData.status}
                onChange={(checked, id) =>
                  setFilterData({
                    ...filterData,
                    status: checked
                      ? filterData.status.concat(id)
                      : filterData.status.filter((data) => data !== id),
                  })
                }
              />
            )}
          />
        </StyledTodoSidebarContent>
      </StyledTodoScrollbar>
      <AddNewTask
        isAddTaskOpen={isAddTaskOpen}
        onCloseAddTask={onCloseAddTask}
      />
    </>
  );
};

export default TaskSideBar;
