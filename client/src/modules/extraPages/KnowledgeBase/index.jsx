import React, { useState } from 'react';

import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimate from '@crema/components/AppAnimate';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledKnowBase,
  StyledKnowBaseHeader,
  StyledKnowDivider,
  StyledKnowSearch,
} from './index.styled';
import { installationData, salesData } from '@crema/mockapi/fakedb/extraPages';
import Sales from './Sales';
import Installation from './Installation';

const KnowledgeBase = () => {
  const { messages } = useIntl();

  const [filterText, setFilterText] = useState('');

  const saleQueries =
    filterText !== ''
      ? salesData.filter((data) => data.ques.includes(filterText))
      : salesData;

  const installationQueries =
    filterText !== ''
      ? installationData.filter((data) => data.ques.includes(filterText))
      : installationData;

  const onSearch = (value) => console.log(value);

  return (
    <StyledKnowBase>
      <AppPageMeta title='Knowledge Base' />

      <AppAnimate
        animation='transition.slideUpIn'
        delay={200}
        style={{ height: 'auto' }}
      >
        <StyledKnowBaseHeader key='a'>
          <h2>
            <IntlMessages id='knowledge.howHelp' />
          </h2>

          <StyledKnowSearch
            placeholder={messages['knowledge.AppSkeleton']}
            onSearch={onSearch}
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
          />
        </StyledKnowBaseHeader>
      </AppAnimate>
      <StyledKnowDivider />

      <Sales saleQueries={saleQueries} />

      <Installation installationQueries={installationQueries} />
    </StyledKnowBase>
  );
};

export default KnowledgeBase;
