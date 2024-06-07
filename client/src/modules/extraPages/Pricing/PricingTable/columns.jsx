import React from 'react';
import { CheckCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { StyledAmount, StyledBtn } from './index.styled';
import { Typography } from 'antd';

const checkStyle = { color: '#12B76A', height: '16px', width: '16px' };
export const getColumns = (billingFormat) => [
  {
    dataIndex: 'title',
    key: 'title',
    render: (text, _, index) => {
      return index === 1 || index === 8 || index === 17 ? (
        <Typography.Link style={{ fontWeight: 'bolder' }}>
          {text}
        </Typography.Link>
      ) : index === 0 || index === 22 ? (
        <p></p>
      ) : (
        <>
          <span>{text}</span>
          <QuestionCircleOutlined
            style={{
              marginLeft: 10,
              color: `${({ theme }) => theme.palette.gray[400]}`,
            }}
          />
        </>
      );
    },
    onCell: (_, index) => ({
      colSpan: index === 1 || index === 8 || index === 17 ? 3 : 1,
    }),
  },

  {
    title: 'Free',
    dataIndex: 'free',
    key: 'free',
    align: 'center',
    width: '25%',

    render: (text, record, index) => {
      return index === 0 ? (
        <>
          <StyledAmount>$0</StyledAmount>
          <span>per {billingFormat}</span>
          <p style={{ fontSize: '0.9em' }}>
            Basic features for up to 10 employees with everything you need.
          </p>
          <StyledBtn style={{ borderColor: text }}>Try Now</StyledBtn>
        </>
      ) : index === 22 ? (
        <StyledBtn style={{ borderColor: text }}>Try Now</StyledBtn>
      ) : text === 'Y' ? (
        <CheckCircleOutlined style={checkStyle} />
      ) : record.free === 'N' ? (
        '-'
      ) : (
        text
      );
    },
  },
  {
    title: 'Basic',

    dataIndex: 'basic',
    key: 'basic',
    align: 'center',
    width: '25%',

    render: (text, record, index) => {
      return index === 0 ? (
        <>
          <StyledAmount>$69</StyledAmount>
          <span>per {billingFormat}</span>
          <p style={{ fontSize: '0.9em' }}>
            Advanced features and reporting, better workflows and automation.
          </p>
          <StyledBtn style={{ borderColor: text }}>Buy Now</StyledBtn>
        </>
      ) : index === 22 ? (
        <StyledBtn style={{ borderColor: text }}>Buy Now</StyledBtn>
      ) : text === 'Y' ? (
        <CheckCircleOutlined style={checkStyle} />
      ) : record.basic === 'N' ? (
        '-'
      ) : (
        text
      );
    },
  },
  {
    title: 'Pro',
    dataIndex: 'pro',
    key: 'pro',
    align: 'center',
    width: '25%',
    render: (text, record, index) => {
      return index === 0 ? (
        <>
          <StyledAmount>$349</StyledAmount>
          <span>per {billingFormat}</span>
          <p style={{ fontSize: '0.9em' }}>
            Personalised service and enterprise security for large teams.
          </p>
          <StyledBtn style={{ borderColor: text }}>Buy Now</StyledBtn>
        </>
      ) : index === 22 ? (
        <StyledBtn style={{ borderColor: text }}>Buy Now</StyledBtn>
      ) : text === 'Y' ? (
        <CheckCircleOutlined style={checkStyle} />
      ) : record.pro === 'N' ? (
        '-'
      ) : (
        text
      );
    },
  },
];
