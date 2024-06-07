import React from 'react';
import NotificationItem from '@crema/components/AppNotifications/NotificationItem';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { CloseOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';
import { StyledRecentActivityScrollbar } from './index.styled';

const RecentActivity = (props) => {
  const { data } = props;

  const { messages } = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.recentActivity']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }
    >
      <StyledRecentActivityScrollbar>
        <List
          dataSource={data}
          renderItem={(item) => {
            return <NotificationItem item={item} key={item.id} />;
          }}
        />
      </StyledRecentActivityScrollbar>
    </AppCard>
  );
};

export default RecentActivity;

RecentActivity.defaultProps = {
  data: [],
};

RecentActivity.propTypes = {
  data: PropTypes.array,
};
