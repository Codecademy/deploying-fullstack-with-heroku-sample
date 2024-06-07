import React from 'react';
import AppCard from '@crema/components/AppCard';
import PropTypes from 'prop-types';

import { BiBasket } from 'react-icons/bi';
import { FcGraduationCap, FcReading } from 'react-icons/fc';
import { GiBookshelf } from 'react-icons/gi';
import {
  StyledGeneralStats,
  StyledGeneralStatsAvatar,
  StyledGeneralStatsBadge,
  StyledGeneralStatsContent,
} from './index.styled';

const getIcon = (iconType) => {
  switch (iconType) {
    case 'BiBasket':
      return <BiBasket color='#9E49E6' className='icon' />;
    case 'FcGraduationCap':
      return <FcGraduationCap color='#0A8FDC' className='icon' />;
    case 'GiBookshelf':
      return <GiBookshelf color='#49BD65' className='icon' />;
    default:
      return <FcReading color='#9E49E6' className='icon' />;
  }
};

const GeneralStats = ({ stats }) => {
  return (
    <AppCard heightFull className='card-hover'>
      <StyledGeneralStats>
        <StyledGeneralStatsAvatar style={{ backgroundColor: stats.bgcolor }}>
          {getIcon(stats.icon)}
        </StyledGeneralStatsAvatar>
        <StyledGeneralStatsContent>
          <div>
            <h3>{stats.count}</h3>
            <p className='text-truncate'>{stats.title}</p>
          </div>
          <StyledGeneralStatsBadge
            style={{ backgroundColor: stats.bgcolor, color: stats.badgeColor }}
          >
            {stats.new}
          </StyledGeneralStatsBadge>
        </StyledGeneralStatsContent>
      </StyledGeneralStats>
    </AppCard>
  );
};

export default GeneralStats;

GeneralStats.defaultProps = {};

GeneralStats.propTypes = {
  stats: PropTypes.object,
};
