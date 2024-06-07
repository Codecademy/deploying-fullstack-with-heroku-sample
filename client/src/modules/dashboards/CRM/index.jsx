import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import AppAnimate from '@crema/components/AppAnimate';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import SocialMediaAdvertise from './SocialMediaAdvertise';
import GoalProgress from './GoalProgress';
import TicketSupport from './TicketSupport';
import VisitorsPageViews from './VisitorsPageViews';
import EmailMarketing from './EmailMarketing';
import OpportunitiesWon from './OpportunitiesWon';
import DealsNew from './DealsNew';
import RecentActivities from './RecentActivities';
import Report from './Report';
import TeamState from './TeamState';
import Timesheet from './Timesheet';
import ToDoLists from './ToDoLists';
import TopLeaders from './TopLeaders';
import TotalVisitor from './TotalVisitor';
import AppLoader from '@crema/components/AppLoader';
import { Col } from 'antd';
import StatsDirCard from '../CommonComponents/StatsDirCard';

const CRM = () => {
  const [{ apiData: crmData, loading }] = useGetDataApi('/dashboard/crm');

  return loading ? (
    <AppLoader />
  ) : (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppRowContainer delay={150}>
        {crmData.stateData.map((data) => (
          <Col key={data.id} xs={24} sm={12} lg={6}>
            <StatsDirCard data={data} />
          </Col>
        ))}

        <Col xs={24} lg={16} key={'a'}>
          <VisitorsPageViews data={crmData.visitorPageView} />
        </Col>
        <Col xs={24} lg={8} key={'c'}>
          <OpportunitiesWon data={crmData.opportunitiesWonGraphData} />
        </Col>
        {crmData.teamStateData.map((data) => (
          <Col key={data.id} xs={24} md={12} lg={6}>
            <TeamState data={data} />
          </Col>
        ))}
        <Col xs={24} md={14} xl={18} key={'d'}>
          <TopLeaders topLeaders={crmData.topLeaders} />
        </Col>
        <Col xs={24} md={10} xl={6} key={'e'}>
          <EmailMarketing emailMarketing={crmData.emailMarketing} />
        </Col>
        <Col lg={24} xl={18} className='mb-0'>
          <AppRowContainer>
            <Col md={24} lg={16}>
              <AppRowContainer>
                <Col xs={24}>
                  <Timesheet timesheet={crmData.timesheet} />
                </Col>
                <Col xs={24} className='mb-0'>
                  <ToDoLists data={crmData.todoLists} />
                </Col>
              </AppRowContainer>
            </Col>
            <Col md={24} lg={8}>
              <AppRowContainer>
                <Col xs={24} sm={12} lg={24}>
                  <Report />
                </Col>
                <Col xs={24} sm={12} lg={24} className='mb-0'>
                  <SocialMediaAdvertise
                    socialMediaData={crmData.socialMediaData}
                  />
                </Col>
              </AppRowContainer>
            </Col>
          </AppRowContainer>
        </Col>
        <Col lg={24} xl={6}>
          <RecentActivities data={crmData.recentActivities} />
        </Col>
        <Col lg={24} xl={16}>
          <DealsNew dealsTableData={crmData.dealsTableData} />
        </Col>
        <Col lg={24} xl={8}>
          <TotalVisitor totalVisitors={crmData.totalVisitors} />
        </Col>
        <Col lg={24} xl={16}>
          <TicketSupport ticketSupportData={crmData.ticketSupportData} />
        </Col>
        <Col lg={24} xl={8}>
          <GoalProgress progressGraphData={crmData.progressGraphData} />
        </Col>
      </AppRowContainer>
    </AppAnimate>
  );
};

export default CRM;
