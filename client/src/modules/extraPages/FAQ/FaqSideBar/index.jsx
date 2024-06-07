import React from 'react';
import {
  DollarOutlined,
  FileTextOutlined,
  FrownOutlined,
  SettingOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import SideBarItem from './SideBarItem';
import { StyledFaqSidebarCard, StyledFaqSidebarList } from '../index.styled';

const faqFolderList = [
  { id: 101, name: <IntlMessages id='faq.general' />, icon: <SyncOutlined /> },
  {
    id: 102,
    name: <IntlMessages id='knowledge.installation' />,
    icon: <SettingOutlined />,
  },
  {
    id: 103,
    name: <IntlMessages id='faq.pricing' />,
    icon: <DollarOutlined />,
  },
  {
    id: 104,
    name: <IntlMessages id='faq.licenseTypes' />,
    icon: <FileTextOutlined />,
  },
  {
    id: 105,
    name: <IntlMessages id='faq.support' />,
    icon: <FrownOutlined />,
  },
];

const FaqSideBar = ({ onGetFaqData, selectionId }) => {
  return (
    <StyledFaqSidebarCard>
      <h3>
        <IntlMessages id='faq.queries' />
      </h3>
      <StyledFaqSidebarList aria-label='main mailbox folders'>
        {faqFolderList.map((item) => {
          return (
            <SideBarItem
              key={item.id}
              item={item}
              selectionId={selectionId}
              onGetFaqData={onGetFaqData}
            />
          );
        })}
      </StyledFaqSidebarList>
    </StyledFaqSidebarCard>
  );
};

export default FaqSideBar;

FaqSideBar.propTypes = {
  selectionId: PropTypes.number,
  onGetFaqData: PropTypes.func,
};
