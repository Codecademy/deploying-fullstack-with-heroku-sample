import React from 'react';
import PropTypes from 'prop-types';
import WhatsHappenItem from './WhatsHappenItem';
import { useIntl } from 'react-intl';
import { StyledWhatHappenCard } from './index.styled';

const WhatsHappen = ({ whatsHappen }) => {
  const { messages } = useIntl();

  return (
    <StyledWhatHappenCard
      className='no-card-space-ltr-rtl'
      title={messages['wall.whatsHappening']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}
    >
      <div>
        {whatsHappen.map((data) => (
          <WhatsHappenItem data={data} key={data.id} />
        ))}
      </div>
    </StyledWhatHappenCard>
  );
};

export default WhatsHappen;

WhatsHappen.propTypes = {
  whatsHappen: PropTypes.array,
};
