import  { useState } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';
import { StyledCalendar } from './Calendar.style';
import { useNavigate, useParams } from 'react-router-dom';
import './calendar.css';
import CustomToolbar from './CustomToolbar';
import TaskItem from './TaskItem';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';

const DragAndDropCalendar = withDragAndDrop(StyledCalendar);

const localizer = momentLocalizer(moment);

const TaskCalender = ({ taskList, onUpdateTask, onSetFilterText }) => {
  const navigate = useNavigate();
  const { folder, label } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  const onSelectDate = ({ start }) => {
    console.log('start: ', start);
    setSelectedDate(start);
  };

  const onOpenAddTask = (data) => {
    if (data) {
      onViewTaskDetail(data);
    } else {
      console.log('selectedDate', selectedDate);
    }
  };
  const resizeEvent = ({ event, start, end }) => {
    onUpdateTask({ ...event, startDate: start, endDate: end });
    console.log('resizeEvent: ', event, start, end);
  };

  const onViewTaskDetail = (task) => {
    if (folder) navigate(`/apps/calender/${folder}/${task.id}`);
    if (label) navigate(`/apps/calender/label/${label}/${task.id}`);
  };
  const moveEvent = ({ event, start, end }) => {
    onUpdateTask({ ...event, startDate: start, endDate: end });
  };

  const getEvents = () => {
    if (taskList?.length > 0)
      return taskList.map((task) => {
        return {
          ...task,
          title: task.title,
          start: task.startDate,
          end: task.endDate,
        };
      });
    return [];
  };
  return (
    <DragAndDropCalendar
      localizer={localizer}
      events={getEvents()}
      themeVariant='dark'
      views={['month', 'agenda']}
      tooltipAccessor={null}
      showMultiDayTimes
      resizable
      onEventResize={resizeEvent}
      onEventDrop={moveEvent}
      onSelectEvent={onOpenAddTask}
      components={{
        toolbar: (props) => (
          <AppsHeader>
            <CustomToolbar onSetFilterText={onSetFilterText} {...props} />
          </AppsHeader>
        ),
        event: (item) => <TaskItem key={item.key} item={item.event} />,
      }}
      popup
      selectable
      onSelectSlot={onSelectDate}
      defaultView='month'
    />
  );
};
export default TaskCalender;
TaskCalender.propTypes = {
  taskList: PropTypes.any,
  onUpdateTask: PropTypes.func,
  onSetFilterText: PropTypes.func,
};
