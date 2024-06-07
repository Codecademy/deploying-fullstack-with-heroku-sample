import React from 'react';
import { Tooltip } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import {
  BookOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import {
  StyledUserFooterAction,
  StyledUserFooterHireBtn,
  StyledUserFooterRemoveBtn,
  StyledUserModernCard,
  StyledUserModernContent,
  StyledUserModernFooter,
  StyledUserModernFooterChip,
  StyledUserModernFooterChipView,
  StyledUserModernHeader,
  StyledUserModernHeaderAction,
  StyledUserModernHeaderActionItem,
  StyledUserModernPara,
  StyledUserModernRow,
  StyledUserModernThumb,
} from './index.styled';

const ListItem = (props) => {
  const { user } = props;

  return (
    <StyledUserModernCard className='item-hover'>
      <StyledUserModernRow>
        <StyledUserModernThumb>
          <img src={user.image} alt='user' />
        </StyledUserModernThumb>

        <StyledUserModernContent>
          <StyledUserModernHeader>
            <h3>{user.name}</h3>

            <StyledUserModernHeaderAction>
              <StyledUserModernHeaderActionItem>
                <Tooltip
                  className='pointer'
                  title={<IntlMessages id='common.share' />}
                >
                  <ShareAltOutlined />
                </Tooltip>
              </StyledUserModernHeaderActionItem>

              <StyledUserModernHeaderActionItem>
                <Tooltip
                  className='pointer'
                  title={<IntlMessages id='common.bookmark' />}
                >
                  <BookOutlined />
                </Tooltip>
              </StyledUserModernHeaderActionItem>

              <StyledUserModernHeaderActionItem>
                <Tooltip
                  className='pointer'
                  title={<IntlMessages id='common.more' />}
                >
                  <MoreOutlined />
                </Tooltip>
              </StyledUserModernHeaderActionItem>
            </StyledUserModernHeaderAction>
          </StyledUserModernHeader>

          <StyledUserModernPara>{user.information}</StyledUserModernPara>

          <StyledUserModernFooter>
            <StyledUserModernFooterChipView>
              {user.skills.map((skill, index) => {
                return (
                  <StyledUserModernFooterChip
                    key={index}
                    // className={clsx('user-morden-footer-chip', {dark :  theme.palette.type === 'dark'})}
                  >
                    {skill}
                  </StyledUserModernFooterChip>
                );
              })}
            </StyledUserModernFooterChipView>

            <StyledUserFooterAction>
              <StyledUserFooterHireBtn type='primary'>
                <IntlMessages id='common.hire' />
              </StyledUserFooterHireBtn>
              <StyledUserFooterRemoveBtn>
                <IntlMessages id='mailApp.remove' />
              </StyledUserFooterRemoveBtn>
            </StyledUserFooterAction>
          </StyledUserModernFooter>
        </StyledUserModernContent>
      </StyledUserModernRow>
    </StyledUserModernCard>
  );
};

export default ListItem;

ListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
