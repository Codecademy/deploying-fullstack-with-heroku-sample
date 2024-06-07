import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import StatsCardWithGraph from './StatsCardWithGraph';
import ComparisonCard from './ComparisonCard';
import Sales from './Sales';
import YourAccount from './YourAccount';
import EarningInMonth from './EarningInMonth';
import MetricTitleLineGraphCard from './MetricTitleLineGraphCard';
import FloatingGraphs from './FloatingGraphs';
import Visits from './Visits';
import ProfileViews from './ProfileViews';
import WorkViews from './WorkViews';
import Stats from './Stats';
import SocialVisitors from './SocialVisitors';
import Subscriptions from './Subscriptions';

import AppPageMeta from '@crema/components/AppPageMeta';
import { blue, geekblue, grey, red } from '@ant-design/colors';
import { StyledMetricTitleLineView } from './index.styled';
import AppInfoView from '@crema/components/AppInfoView';
import StatsItemCard from '../CommonComponents/StatsItemCard';
import StatsDirCard from '../CommonComponents/StatsDirCard';

import ReportCard from '../ECommerce/ReportCard';
import VisitorPageView from '../Analytics/VisitorPageView';
import YourActivity from '../HealthCare/YourActivity';
import HeartRate from '../HealthCare/HeartRate';
import { useIntl } from 'react-intl';

const Metrics = () => {
  const [{ apiData: metricsData }] = useGetDataApi('/dashboard/metrics');
  const { messages } = useIntl();

  return (
    <>
      <AppPageMeta title='Metrics' />
      {metricsData ? (
        <div>
          <h2 className='card-outer-title'>
            <IntlMessages id='dashboard.metrics' />
          </h2>

          <AppRowContainer ease={'easeInSine'}>
            {metricsData.metricsStats.map((item, index) => (
              <Col xs={12} sm={12} lg={6} key={index}>
                <StatsItemCard stats={item} />
              </Col>
            ))}

            {metricsData.stateData.map((data) => (
              <Col xs={12} sm={12} lg={6} key={data.id}>
                <StatsDirCard data={data} />
              </Col>
            ))}
            {metricsData.reportData.map((data) => (
              <Col xs={12} sm={12} lg={6} key={data.id}>
                <ReportCard data={data} />
              </Col>
            ))}
            <Col xs={24} md={6}>
              <FloatingGraphs
                title={messages['dashboard.sales']}
                data={metricsData.metricsFloatingGraphData.salesData}
              />
            </Col>

            <Col xs={24} md={6}>
              <FloatingGraphs
                title={messages['dashboard.clients']}
                data={metricsData.metricsFloatingGraphData.clientsData}
              />
            </Col>

            <Col xs={24} md={6}>
              <FloatingGraphs
                title={messages['dashboard.revenue']}
                data={metricsData.metricsFloatingGraphData.revenueData}
              />
            </Col>

            <Col xs={24} md={6}>
              <FloatingGraphs
                title={messages['dashboard.newUser']}
                data={metricsData.metricsFloatingGraphData.newUserData}
              />
            </Col>

            <Col xs={24} lg={8} key={'e'}>
              <StatsCardWithGraph
                text={<IntlMessages id='dashboard.incomeLastYear' />}
                data={metricsData.incomeLastYear}
                type='incomeGraph'
                valueColor='#FFA940'
              />
            </Col>

            <Col xs={24} lg={8} key={'f'}>
              <StatsCardWithGraph
                text={<IntlMessages id='dashboard.webTraffic' />}
                data={metricsData.websiteTrafficData}
                bgColor='background.paper'
                type='trafficGraph'
                valueColor={red[6]}
              />
            </Col>

            <Col xs={24} lg={8} key={'g'}>
              <StatsCardWithGraph
                text={<IntlMessages id='dashboard.growthInRevenue' />}
                data={metricsData.revenueGrowthData}
                bgColor='background.paper'
                type='revenueGrowth'
                valueColor={blue[5]}
              />
            </Col>

            <Col xs={24} lg={6} key={'h'}>
              <ComparisonCard
                text={<IntlMessages id='dashboard.incrementInUsers' />}
                data={metricsData.incrementActiveUsers}
                type='activeUsers'
                valueColor='#4299E1'
              />
            </Col>

            <Col xs={24} lg={6} key={'i'}>
              <ComparisonCard
                text={<IntlMessages id='dashboard.extraRevenue' />}
                data={metricsData.extraRevenue}
                type='extraRevenue'
                valueColor='#4C51BF'
              />
            </Col>

            <Col xs={24} lg={6} key={'j'}>
              <ComparisonCard
                text={<IntlMessages id='dashboard.trafficRaise' />}
                data={metricsData.trafficRaise}
                type='trafficRaise'
                valueColor={blue[5]}
              />
            </Col>

            <Col xs={24} lg={6} key={'k'}>
              <ComparisonCard
                text={<IntlMessages id='dashboard.lessOrders' />}
                data={metricsData.lessOrders}
                type='lessOrders'
                valueColor={red[5]}
              />
            </Col>

            <Col xs={24} lg={8} key={'l'}>
              <Sales data={metricsData.salesData} />
            </Col>

            <Col xs={24} lg={8} key={'m'}>
              <YourAccount data={metricsData.accountData} />
            </Col>

            <Col xs={24} lg={8} key={'n'}>
              <EarningInMonth data={metricsData.earningInMonth} />
            </Col>

            <Col xs={24} lg={14} key={'o'}>
              <Subscriptions data={metricsData.subscriptionData} />
            </Col>

            <Col xs={24} lg={10} key={'p'}>
              <StyledMetricTitleLineView>
                <MetricTitleLineGraphCard
                  data={metricsData.metricsLineGraphData}
                  title={<IntlMessages id='dashboard.rides' />}
                  titleColor='rgb(73, 80, 87)'
                  valueColor={grey[5]}
                  differenceColor={red[5]}
                  bgColor='white'
                  graphColor='#4299E1'
                />
              </StyledMetricTitleLineView>

              <div>
                <MetricTitleLineGraphCard
                  data={metricsData.metricsLineGraphData}
                  title={<IntlMessages id='dashboard.visits' />}
                  titleColor='white'
                  valueColor={geekblue[3]}
                  differenceColor='white'
                  bgColor={geekblue[5]}
                  graphColor='#FFFFFF'
                />
              </div>
            </Col>

            <Col xs={24} lg={12} key={'z'}>
              <Visits data={metricsData.visitsData} />
            </Col>

            <Col xs={24} lg={12} key={'aa'}>
              <VisitorPageView data={metricsData.visitorsPageView} />
            </Col>

            <Col xs={24} lg={12} xl={6} key={'ab'}>
              <ProfileViews data={metricsData.profileViewsData} />
            </Col>

            <Col xs={24} lg={12} xl={6} key={'ac'}>
              <WorkViews data={metricsData.workViewsData} />
            </Col>

            <Col xs={24} lg={12} xl={6} key={'ad'}>
              <HeartRate data={metricsData.heartCard} />
            </Col>

            <Col xs={24} lg={12} xl={6} key={'ae'}>
              <YourActivity data={metricsData.yourActivity} />
            </Col>

            <Col xs={24} lg={12} key={'af'}>
              <Stats data={metricsData.statsGraph} />
            </Col>

            <Col xs={24} lg={12} key={'ag'}>
              <SocialVisitors data={metricsData.socialVisitorsData} />
            </Col>
          </AppRowContainer>
        </div>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default Metrics;
