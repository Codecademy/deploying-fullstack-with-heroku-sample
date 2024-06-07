
import PropTypes from 'prop-types';

const AppAnimate = (props) => {
  return <div>{props.children}</div>;
};

AppAnimate.propTypes = {
  children: PropTypes.node,
};

// AppAnimate.defaultProps = {
//   animation: 'transition.fadeIn',
//   runOnMount: true,
//   targetQuerySelector: null,
//   interruptBehavior: 'stop',
//   visibility: 'visible',
//   duration: 400,
//   delay: 100,
//   easing: [0.4, 0.0, 0.2, 1],
//   display: null,
//   setRef: undefined,

//   // duration: 400,
//   // easing: "swing",
//   queue: '',
//   begin: undefined,
//   progress: undefined,
//   complete: undefined,
//   // display: undefined,
//   // visibility: undefined,
//   loop: false,
//   // delay: false,
//   mobileHA: true,
// };

export default AppAnimate;
