import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import {
  StyledButton,
  StyledFlex,
  StyledProjectDescription,
  StyledProjectWrapper,
  StyledSecondaryText,
  StyledSecondaryText2,
  StyledServiceTitle,
  StyledServiceWrapper,
  StyledTitle4,
  StyledTitleWrapper2,
} from './index.styled';

const ProjectDescription = ({ projectDescription }) => {
  return (
    <StyledProjectWrapper>
      <StyledProjectDescription>
        <AppRowContainer>
          <Col xs={24} md={8}>
            <StyledTitleWrapper2>
              <IntlMessages id='extraPages.projectDescription' />
            </StyledTitleWrapper2>
            <div>
              {projectDescription.service.map((service, index) => (
                <StyledServiceWrapper key={index}>
                  <StyledServiceTitle>{service.title}</StyledServiceTitle>
                  <StyledSecondaryText>{service.subTitle}</StyledSecondaryText>
                </StyledServiceWrapper>
              ))}
            </div>
          </Col>
          <Col xs={24} md={16}>
            <StyledTitle4>
              <IntlMessages id='extraPages.sbonTimelessStaplesIdentity' />
            </StyledTitle4>
            <StyledFlex>
              {projectDescription.content.map((data, index) => (
                <StyledSecondaryText2 key={index}>
                  {data.line}
                </StyledSecondaryText2>
              ))}
            </StyledFlex>
            <StyledButton>YourDomin.com</StyledButton>
          </Col>
        </AppRowContainer>
      </StyledProjectDescription>
    </StyledProjectWrapper>
  );
};

export default ProjectDescription;

ProjectDescription.propTypes = {
  projectDescription: PropTypes.object,
};
