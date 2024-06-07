import React from 'react';
import { portfolioData } from '@crema/mockapi/fakedb/extraPages';
import PortfolioDetail from './PortfolioDetail';

const PortFolioPage = () => {
  return <PortfolioDetail portfolioData={portfolioData} />;
};

export default PortFolioPage;
