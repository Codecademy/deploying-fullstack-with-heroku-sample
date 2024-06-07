import React from "react";
import AppCard from "@crema/components/AppCard";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";
import { Link } from "react-router-dom";
import AppPageMeta from "@crema/components/AppPageMeta";
import QueueAnim from "rc-queue-anim";
import DeliveryAddress from "./DeliveryAddress";
import PaymentInfo from "./PaymentInfo";
import OrderSummary from "../OrderSummary";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import {
  StyledCheckoutCardTitle,
  StyledCheckoutOrderSummary,
} from "./index.styled";
import { StyledLinkBtn } from "../Confirmation/index.styled";

const Checkout = () => {
  const [{ apiData: cartItems }] = useGetDataApi("/api/cart/get", []);

  return (
    <>
      <AppPageMeta title="Checkout" />
      <QueueAnim style={{ zIndex: 3 }} type="scale">
        <h2 className="page-title" key="title">
          <IntlMessages id="sidebar.ecommerce.checkout" />
        </h2>
      </QueueAnim>
      <AppRowContainer>
        <Col xs={24} lg={16}>
          <AppAnimate animation="transition.slideLeftIn" delay={200}>
            <AppCard
              key="cardLeft"
              title={
                <StyledCheckoutCardTitle>
                  Delivery Address
                </StyledCheckoutCardTitle>
              }
            >
              <DeliveryAddress />
            </AppCard>
          </AppAnimate>
        </Col>
        <Col xs={24} lg={8}>
          <AppAnimate animation="transition.slideRightIn" delay={200}>
            <div key="checkoutRight">
              <StyledCheckoutOrderSummary>
                <OrderSummary cartItems={cartItems} />
              </StyledCheckoutOrderSummary>
              <PaymentInfo />
              <StyledLinkBtn type="primary" style={{ marginTop: 16 }}>
                <Link to="/apps/ecommerce/confirmation">CheckOut</Link>
              </StyledLinkBtn>
            </div>
          </AppAnimate>
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Checkout;
