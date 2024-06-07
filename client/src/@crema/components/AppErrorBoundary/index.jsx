import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAppBoundary,
  StyledErrorBtn,
  StyledSomethingWentWrong,
  StyledTextWrapper,
} from './index.styled';
import ErrorIcon from './ErrorIcon';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('error: ', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('errorInfo: ', errorInfo);
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledAppBoundary>
          <ErrorIcon />
          <StyledSomethingWentWrong>
            Ah! Something went wrong.
          </StyledSomethingWentWrong>
          <StyledTextWrapper>
            Brace yourself till we get the error fixed.
          </StyledTextWrapper>
          <StyledTextWrapper>
            You may also refresh the page or try again later
          </StyledTextWrapper>

          <StyledErrorBtn
            type='primary'
            onClick={() => {
              window.location.reload();
            }}
          >
            Try Again
          </StyledErrorBtn>
        </StyledAppBoundary>
      );
    } else {
      return this.props.children;
    }
  }
}

AppErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppErrorBoundary;
