import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppCircularProgress from '@crema/components/AppCircularProgress';
import { useIntl } from 'react-intl';
import {
  StyledVisitorActionContent,
  StyledVisitorAnalysisAction,
  StyledVisitorAnalysisCard,
  StyledVisitorProgressView,
} from './index.styled';

const VisitorAnalysis = () => {
  const { messages } = useIntl();
  return (
    <StyledVisitorAnalysisCard
      title={messages['dashboard.visitorAnalysis']}
      heightFull
      actions={[
        <StyledVisitorAnalysisAction key={1}>
          <span className='dot' />
          <StyledVisitorActionContent>
            <p>
              <IntlMessages id='dashboard.visitorAnalysisContent' />
            </p>
          </StyledVisitorActionContent>
        </StyledVisitorAnalysisAction>,
      ]}
    >
      <StyledVisitorProgressView>
        <AppCircularProgress
          strokeColor='#F04F47'
          trailColor='rgb(214, 214, 214)'
          percent={59}
          strokeWidth={5}
          size={200}
        />
      </StyledVisitorProgressView>
    </StyledVisitorAnalysisCard>
  );
};

export default VisitorAnalysis;
