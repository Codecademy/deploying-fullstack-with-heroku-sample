import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import PropTypes from 'prop-types';
import InnovationImgWrapper from './InnovationImgWrapper';
import {
  StyledInnovation,
  StyledSecondaryText,
  StyledTitle3,
  StyledTitle5,
  StyledTitlewrapper5,
  StyledWrapper,
} from './index.styled';
import { Button, Col } from 'antd';

const Innovation = ({ innovation }) => {
  return (
    <StyledInnovation>
      <AppRowContainer>
        <Col xs={24} md={12}>
          <InnovationImgWrapper>
            <img src={innovation.srcImg} alt='innovation' />
            <div className='innovation-img-content'>
              <StyledTitle5>{innovation.brandSubTitle}</StyledTitle5>
              <StyledTitle3>{innovation.brandTitle}</StyledTitle3>
            </div>
          </InnovationImgWrapper>
        </Col>
        <Col xs={24} md={12}>
          <StyledWrapper>
            <StyledTitlewrapper5>{innovation.title}</StyledTitlewrapper5>
            <StyledSecondaryText>{innovation.description}</StyledSecondaryText>
            <Button type='primary'>Explore Website</Button>
          </StyledWrapper>
        </Col>
      </AppRowContainer>
    </StyledInnovation>
  );
};

export default Innovation;

Innovation.propTypes = {
  innovation: PropTypes.object,
};
