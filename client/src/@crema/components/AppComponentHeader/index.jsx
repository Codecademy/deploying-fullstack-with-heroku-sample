import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { LinkOutlined } from '@ant-design/icons';
import AppAnimate from '../AppAnimate';
import {
  StyledContainerHeader,
  StyledHeaderTitle,
  StyledTextBase,
  StyledTitleH3,
} from './index.styled';

const AppComponentHeader = ({ title, description, refUrl }) => {
  return (
    <AppAnimate animation='transition.slideDownIn' delay={200}>
      <StyledContainerHeader key={'header'}>
        <StyledHeaderTitle>
          <StyledTitleH3 level={3}>{title}</StyledTitleH3>
          {description ? (
            <StyledTextBase level={5}>{description}</StyledTextBase>
          ) : null}
        </StyledHeaderTitle>
        {refUrl ? (
          <div style={{ height: 30 }}>
            <Button
              type='primary'
              ghost
              style={{
                paddingTop: 8,
                lignHeight: 0,
              }}
              href={refUrl}
              icon={<LinkOutlined />}
              target='_blank'
            >
              Reference
            </Button>
          </div>
        ) : null}
      </StyledContainerHeader>
    </AppAnimate>
  );
};

export default AppComponentHeader;

AppComponentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  refUrl: PropTypes.string,
};
AppComponentHeader.defaultProps = {};
