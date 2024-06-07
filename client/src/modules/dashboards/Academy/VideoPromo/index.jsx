import React from 'react';
import PropTypes from 'prop-types';
import { ClockCircleOutlined, CloudDownloadOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import {
  StyledBorderRightBefore,
  StyledReactPlayer,
  StyledReactPlayerView,
  StyledVideoPromo,
  StyledVideoPromoCard,
  StyledVideoPromoHeader,
  StyledVideoPromoHeaderAction,
  StyledVideoPromoHeaderContent,
  StyledVideoPromoHeaderIcon,
  StyledVideoPromoTabs,
  StyledVideoTabsAction,
  StyledVideoTabsActionLeft,
  StyledVideoTabsActionRight,
  StyledVideoTabsContent,
} from './index.styled';

const tabs = [
  { key: 1, label: 'Class Detail', children: 'class' },
  { key: 2, label: 'Assignments', children: 'assignments' },
  { key: 3, label: 'Projects', children: 'projects' },
  { key: 4, label: 'Exams', children: 'exams' },
];

const VideoPromo = ({ videoPromo }) => {
  function callback(key) {
    console.log(key);
  }

  return (
    <StyledVideoPromoCard heightFull>
      <StyledReactPlayerView>
        <StyledReactPlayer
          controls={true}
          url='https://www.youtube.com/embed/X1dz0xRbSJc'
        />
      </StyledReactPlayerView>
      <StyledVideoPromo>
        <StyledVideoPromoHeader>
          <StyledVideoPromoHeaderContent>
            <h3>{videoPromo.title}</h3>
            <p>
              <StyledBorderRightBefore>
                {videoPromo.owner}
              </StyledBorderRightBefore>
              <StyledBorderRightBefore>
                {videoPromo.category}
              </StyledBorderRightBefore>
              <span className='text-primary'>+ Follow Mentor</span>
            </p>
          </StyledVideoPromoHeaderContent>
          <StyledVideoPromoHeaderAction>
            <StyledVideoPromoHeaderIcon>
              <ClockCircleOutlined />
            </StyledVideoPromoHeaderIcon>
            <StyledVideoPromoHeaderIcon className='cloud'>
              <CloudDownloadOutlined />
            </StyledVideoPromoHeaderIcon>
          </StyledVideoPromoHeaderAction>
        </StyledVideoPromoHeader>

        <StyledVideoPromoTabs
          defaultActiveKey='1'
          onChange={callback}
          items={tabs}
        />

        {videoPromo.assignments.map((item, index) => (
          <StyledVideoTabsContent key={index}>
            <h4>{`${index + 1}. ${item.title} `}</h4>
            <p>{item.desc}</p>
            <StyledVideoTabsAction>
              <StyledVideoTabsActionLeft>
                <Button
                  size='small'
                  className='btn-primary-outline'
                  style={{ fontSize: 10, whiteSpace: 'nowrap' }}
                >
                  See Calendar
                </Button>
                <Button
                  size='small'
                  style={{ fontSize: 10, whiteSpace: 'nowrap' }}
                  type='primary'
                >
                  View details
                </Button>
              </StyledVideoTabsActionLeft>
              <StyledVideoTabsActionRight>
                <span>{item.students} Students enrolled</span>
                <span className='text-secondary'>
                  {item.daysLeft} Days left
                </span>
              </StyledVideoTabsActionRight>
            </StyledVideoTabsAction>
          </StyledVideoTabsContent>
        ))}
      </StyledVideoPromo>
    </StyledVideoPromoCard>
  );
};

export default VideoPromo;

VideoPromo.propTypes = {
  videoPromo: PropTypes.object,
};
