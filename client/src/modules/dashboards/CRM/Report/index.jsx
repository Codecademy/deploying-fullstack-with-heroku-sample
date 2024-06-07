import React from 'react';
import { Button, Typography } from 'antd';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppCard from '@crema/components/AppCard';
import {
  StyledAppCard,
  StyledButtonText,
  StyledFailTag,
  StyledImgWrapper,
  StyledSuccessTag,
  StyledTextContent,
} from './index.styled';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { MdPictureAsPdf } from 'react-icons/md';

const Report = () => {
  const { messages } = useIntl();

  return (
    <AppCard title={messages['dashboard.crm.report']}>
      <StyledAppCard>
        <div
          style={{
            display: 'flex',
          }}
        >
          <StyledImgWrapper>
            <img src='/assets/images/dashboard/chart_icon.svg' alt='chart' />
          </StyledImgWrapper>
          <StyledTextContent>
            <div
              style={{
                width: 'calc(100% - 60px)',
              }}
            >
              <Typography.Title level={2}>52%</Typography.Title>
              <Typography.Text
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  fontSize: 14,
                }}
              >
                <IntlMessages id='dashboard.crm.weeklyActivity' />
              </Typography.Text>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <StyledSuccessTag>
                33%
                <UpOutlined size={10} />
              </StyledSuccessTag>
            </div>
          </StyledTextContent>
        </div>
      </StyledAppCard>
      <StyledAppCard>
        <div
          style={{
            display: 'flex',
          }}
        >
          <StyledImgWrapper>
            <img src='/assets/images/dashboard/clock_icon.svg' alt='chart' />
          </StyledImgWrapper>
          <StyledTextContent>
            <div
              style={{
                width: 'calc(100% - 60px)',
              }}
            >
              <Typography.Title level={2}>11:56:33</Typography.Title>
              <Typography.Text
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  fontSize: 14,
                }}
              >
                <IntlMessages id='dashboard.crm.workedThisWeek' />
              </Typography.Text>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <StyledFailTag>
                18%
                <DownOutlined />
              </StyledFailTag>
            </div>
          </StyledTextContent>
        </div>
      </StyledAppCard>

      <div
        style={{
          marginBottom: 8,
        }}
      >
        <Button
          style={{
            width: '100%',
            height: 46,
            borderRadius: 16,
          }}
          type='primary'
          icon={<MdPictureAsPdf size={20} />}
          ghost
        >
          <StyledButtonText>
            <IntlMessages id='dashboard.crm.exportasPDF' />
          </StyledButtonText>
        </Button>
      </div>
    </AppCard>
  );
};

export default Report;
