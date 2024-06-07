import AppRowContainer from '@crema/components/AppRowContainer';
import React from 'react';
import { Col, Collapse, theme, Typography } from 'antd';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { StyledPrimaryText, StyledSecondaryText } from './index.styled';
import PropTypes from 'prop-types';

const PricingFaq = ({ pricingFaq }) => {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <AppRowContainer>
      <Col xs={24} sm={10}>
        <StyledPrimaryText>Support</StyledPrimaryText>
        <Typography.Title
          level={2}
          style={{ marginTop: 8, marginBottom: 8, fontSize: 36 }}
        >
          FAQs
        </Typography.Title>
        <StyledSecondaryText>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </StyledSecondaryText>
      </Col>
      <Col xs={24} sm={14}>
        <Collapse
          style={{
            background: 'transparent',
          }}
          bordered={false}
          expandIcon={({ isActive }) =>
            isActive ? (
              <AiOutlineMinusCircle size={20} />
            ) : (
              <AiOutlinePlusCircle size={20} />
            )
          }
          expandIconPosition='end'
          items={pricingFaq.map((item) => {
            return {
              key: item.id,
              label: item.ques,
              children: <div>{item.ans}</div>,
              style: panelStyle,
            };
          })}
        ></Collapse>
      </Col>
    </AppRowContainer>
  );
};

export default PricingFaq;

PricingFaq.propTypes = {
  pricingFaq: PropTypes.array,
};
