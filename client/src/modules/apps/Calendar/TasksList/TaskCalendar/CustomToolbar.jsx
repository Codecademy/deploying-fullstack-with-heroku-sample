import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { MdOutlineViewAgenda } from 'react-icons/md';
import {
  AiOutlineCalendar,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import { Button, Input, Space } from 'antd';
import { StyledFlex, StyledIconBtn } from './Calendar.style';
import { Fonts } from '@crema/constants/AppEnums';

// const IconBtn = styled(IconButton)(({ theme }) => {
//   return {
//     color: theme.palette.text.disabled,
//     backgroundColor: alpha(theme.palette.primary.main, 0.05),
//     padding: 8,
//     '&:hover, &:focus': {
//       color: theme.palette.primary.main,
//     },
//     '&.active': {
//       color: theme.palette.primary.main,
//     },
//   };
// });

const CustomToolbar = (props) => {
  const [viewState, setViewState] = useState('month');
  const { messages } = useIntl();

  function addMonths(date, months) {
    const d = date.getDate();
    date.setMonth(date.getMonth() + months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }
    console.log(date);
    return date;
  }

  function addWeeks(date, weeks) {
    date.setDate(date.getDate() + 7 * weeks);
    return date;
  }

  function addDays(date, days) {
    date.setDate(date.getDate() + days);
    console.log(date);
    return date;
  }

  /*
    const goToDayView = () => {
      props.onView('day');
      setViewState('day');
    };*/

  const goToAgenda = () => {
    props.onView('agenda');
    setViewState('agenda');
  }; /*
  const goToWeekView = () => {
    props.onView('week');
    setViewState('week');
  };*/
  const goToMonthView = () => {
    props.onView('month');
    setViewState('month');
  };

  const goToBack = () => {
    if (viewState === 'month') {
      props.onNavigate('prev', addMonths(props.date, -1));
    } else if (viewState === 'week') {
      props.onNavigate('prev', addWeeks(props.date, -1));
    } else {
      props.onNavigate('prev', addDays(props.date, -1));
    }
  };

  const goToNext = () => {
    if (viewState === 'month') {
      props.onNavigate('next', addMonths(props.date, +1));
    } else if (viewState === 'week') {
      props.onNavigate('next', addWeeks(props.date, +1));
    } else {
      props.onNavigate('next', addDays(props.date, +1));
    }
  };

  const goToToday = () => {
    const now = new Date();
    props.date.setMonth(now.getMonth());
    props.date.setYear(now.getFullYear());
    props.date.setDate(now.getDate());
    props.onNavigate('current');
  };

  return (
    <StyledFlex>
      <Space size={14}>
        <StyledIconBtn
          title='Month'
          icon={<AiOutlineCalendar size={20} />}
          onClick={goToMonthView}
          style={{ padding: 0 }}
        />

        <StyledIconBtn
          title='Agenda'
          icon={<MdOutlineViewAgenda size={20} />}
          onClick={goToAgenda}
          style={{ padding: 0 }}
        />
        <div style={{ marginRight: 12 }}>
          <Input.Search
            onChange={(event) => props.onSetFilterText(event.target.value)}
            placeholder={messages['common.searchHere']}
          />
        </div>
      </Space>

      <div style={{ fontWeight: Fonts.BOLD }}>
        {dayjs(props.date).format('DD/MM/YYYY')}
      </div>

      <Space size={14}>
        <StyledIconBtn
          title='Previous'
          icon={<AiOutlineLeft size={20} />}
          onClick={goToBack}
        />
        <Button style={{ maxHeight: 36 }} type='primary' onClick={goToToday}>
          today
        </Button>
        <StyledIconBtn
          title='Next'
          icon={<AiOutlineRight size={20} />}
          onClick={goToNext}
        />
      </Space>
    </StyledFlex>
  );
};

export default CustomToolbar;
CustomToolbar.propTypes = {
  onView: PropTypes.func,
  onNavigate: PropTypes.func,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onSetFilterText: PropTypes.func,
};
