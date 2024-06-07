import React from "react";
import AppRowContainer from "@crema/components/AppRowContainer";
import AppAnimate from "@crema/components/AppAnimate";
import { useGetDataApi } from "@crema/hooks/APIHooks";

import WelcomeCard from "./WelcomeCard";
import StateCard from "./StateCard";
import SalesState from "./SalesState";
import VisitorPageView from "./VisitorPageView";
import ActiveVisitors from "./ActiveVisitors";
import TopSelling from "./TopSelling";
import TicketsSupport from "./TicketsSupport";
import InfoWidget from "./InfoWidget";
import PageVisits from "./PageVisits";
import OrderNTransaction from "./OrderNTransaction";
import TrafficSource from "./TrafficSource";
import AppLoader from "@crema/components/AppLoader";
import { Col } from "antd";

const Analytics = () => {
  const [{ apiData: analyticsData, loading }] = useGetDataApi(
    "/dashboard/analytics",
  );

  return loading ? (
    <AppLoader />
  ) : (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppRowContainer interval={120} ease={"easeInSine"}>
        <Col xs={24} lg={12} className="mb-0" key={"a"}>
          <AppRowContainer interval={120}>
            <Col xs={24}>
              <WelcomeCard data={analyticsData.welcomeCard} />
            </Col>
            <Col xs={24} sm={12} key={"c"}>
              <StateCard data={analyticsData.revenueCards[0]} />
            </Col>
            <Col xs={24} sm={12} key={"d"}>
              <StateCard data={analyticsData.revenueCards[1]} />
            </Col>
          </AppRowContainer>
        </Col>
        <Col xs={24} lg={12} key={"e"}>
          <SalesState
            salesState={analyticsData.salesState}
            saleChartData={analyticsData.salesChartData}
          />
        </Col>
        <Col xs={24} lg={16} xxl={18} key={"f"}>
          <VisitorPageView data={analyticsData.visitorsPageView} />
        </Col>
        <Col xs={24} lg={8} xxl={6} key={"g"}>
          <ActiveVisitors data={analyticsData.activeVisitors} />
        </Col>

        <Col xs={24} lg={12} className="mb-0" key={"j"}>
          <AppRowContainer>
            <Col xs={24}>
              <TicketsSupport tickets={analyticsData.tickets} />
            </Col>
            {analyticsData.infoWidgets.map((data, index) => (
              <Col xs={24} sm={8} key={"l" + index}>
                <InfoWidget data={data} />
              </Col>
            ))}
          </AppRowContainer>
        </Col>
        <Col xs={24} lg={12} key={"m"}>
          <PageVisits pageVisits={analyticsData.pageVisits} />
        </Col>
        <Col xs={24} lg={18} key={"n"}>
          <OrderNTransaction transactionData={analyticsData.transactionData} />
        </Col>
        <Col xs={24} lg={6} key={"o"}>
          <TrafficSource trafficData={analyticsData.trafficData} />
        </Col>
        <Col xs={24} lg={12} key={"h"}>
          <TopSelling products={analyticsData.topSellingProduct} />
        </Col>
      </AppRowContainer>
    </AppAnimate>
  );
};

export default Analytics;
