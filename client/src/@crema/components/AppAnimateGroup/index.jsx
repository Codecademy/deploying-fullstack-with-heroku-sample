import React from 'react';
import PropTypes from 'prop-types';
// import { VelocityTransitionGroup } from 'velocity-react';
// import 'velocity-animate/velocity.ui';

// const enterAnimationDefaults = {
//   animation: 'transition.fadeIn',
//   stagger: 50,
//   duration: 200,
//   display: null,
//   visibility: 'visible',
//   delay: 0,
// };

// const leaveAnimationDefaults = {
//   animation: 'transition.slideUpOut',
//   backwards: 150,
//   duration: 200,
//   display: null,
//   visibility: 'visible',
//   delay: 0,
// };

function AppAnimateGroup({ ...props }) {
  return <div {...props}>{props.children}</div>;
}

AppAnimateGroup.propTypes = {
  children: PropTypes.node,
};

// AppAnimateGroup.defaultProps = {
//   enter: enterAnimationDefaults,
//   leave: leaveAnimationDefaults,
//   easing: [0.4, 0.0, 0.2, 1],
//   runOnMount: true,
//   enterHideStyle: {
//     visibility: 'visible',
//   },
//   enterShowStyle: {
//     visibility: 'hidden',
//   },
// };

export default AppAnimateGroup;
