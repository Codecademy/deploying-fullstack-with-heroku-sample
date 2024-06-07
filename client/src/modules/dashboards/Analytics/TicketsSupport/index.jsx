import React from 'react';

import PropTypes from 'prop-types';

import { Collapse, Progress } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {
  StyledTicketSupportAction,
  StyledTicketSupportCard,
  StyledTicketSupportCollapse,
  StyledTicketSupportCollapseItem,
  StyledTicketSupportOpen,
} from './index.styled';

function callback(key) {
  console.log(key);
}

const genExtra = ({ data }) => (
  <>
    <span> {data.opened} Open</span>
  </>
);

const TicketsSupport = ({ tickets }) => {
  return (
    <StyledTicketSupportCard
      className='no-card-space'
      actions={[
        <StyledTicketSupportAction key={1}>
          <ClockCircleOutlined style={{ fontSize: 16 }} />
          <span>Last update 30 min ago</span>
        </StyledTicketSupportAction>,
      ]}
    >
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        accordion
        onChange={callback}
        items={tickets.map((data) => {
          return {
            key: data.id,
            header: data.name,

            extra: genExtra({ data }),
            children: (
              <StyledTicketSupportCollapse>
                <StyledTicketSupportCollapseItem>
                  <StyledTicketSupportOpen>Open</StyledTicketSupportOpen>
                  <div className='ant-row ant-row-middle'>
                    <Progress
                      percent={data.overAllPercentage.open}
                      status='active'
                      strokeColor='#5ABE20'
                      trailColor='rgb(214, 214, 214)'
                      size='small'
                    />
                  </div>
                </StyledTicketSupportCollapseItem>
                <StyledTicketSupportCollapseItem>
                  <StyledTicketSupportOpen>Closed</StyledTicketSupportOpen>
                  <div className='ant-row ant-row-middle'>
                    <Progress
                      percent={data.overAllPercentage.close}
                      status='active'
                      strokeColor='#F44D54'
                      trailColor='rgb(214, 214, 214)'
                      size='small'
                    />
                  </div>
                </StyledTicketSupportCollapseItem>
                <StyledTicketSupportCollapseItem>
                  <StyledTicketSupportOpen>On Hold</StyledTicketSupportOpen>
                  <div className='ant-row ant-row-middle'>
                    <Progress
                      percent={data.overAllPercentage.hold}
                      status='active'
                      strokeColor='#F59821'
                      trailColor='rgb(214, 214, 214)'
                      size='small'
                    />
                  </div>
                </StyledTicketSupportCollapseItem>
              </StyledTicketSupportCollapse>
            ),
          };
        })}
      />
    </StyledTicketSupportCard>
  );
};

export default TicketsSupport;

TicketsSupport.propTypes = {
  tickets: PropTypes.array,
};
