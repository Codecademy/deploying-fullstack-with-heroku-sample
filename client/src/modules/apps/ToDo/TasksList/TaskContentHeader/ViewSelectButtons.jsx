import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { BarsOutlined, CalendarOutlined } from '@ant-design/icons';
import AppIconButton from '@crema/components/AppIconButton';
import { useIntl } from 'react-intl';
import { StyledTodoViewSelect } from '../index.styled';

const ViewSelectButtons = ({ pageView, onChangePageView }) => {
  const { messages } = useIntl();
  return (
    <StyledTodoViewSelect>
      <AppIconButton
        className={clsx({
          active: pageView === 'calendar',
        })}
        onClick={() => onChangePageView('calendar')}
        title={messages['sidebar.dataDisplay.calender']}
        icon={<CalendarOutlined />}
      />

      <AppIconButton
        title={messages['sidebar.ecommerce.listView']}
        className={clsx({
          active: pageView === 'list',
        })}
        icon={<BarsOutlined />}
        onClick={() => onChangePageView('list')}
      />
    </StyledTodoViewSelect>
  );
};

export default ViewSelectButtons;

ViewSelectButtons.propTypes = {
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
