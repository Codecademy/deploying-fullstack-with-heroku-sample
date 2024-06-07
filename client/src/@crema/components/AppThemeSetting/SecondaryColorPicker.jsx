// import React, {useState} from 'react';
// import {SketchPicker} from 'react-color';
// import {
//   useThemeActionsContext,
//   useThemeContext,
// } from '../../utility/AppContextProvider';
//
// const SecondaryColorPicker = () => {
//   const [visible, setVisibility] = useState(false);
//   const {theme, secondary} = useThemeContext();
//   const {updateTheme} = useThemeActionsContext();
//
//   return (
//     <>
//       <div
//         className='custom-color-switch'
//         onClick={() => setVisibility(!visible)}>
//         <div className='custom-color-switch-color secondary-color-switch-color' />
//         <span>Secondary</span>
//       </div>
//       {visible ? (
//         <div
//           className='primary-color-popover'
//           onClick={() => setVisibility(false)}>
//           <SketchPicker
//             color={secondary}
//             onChangeComplete={(color) => {
//               theme.palette.secondary.main = color.hex;
//               updateTheme(theme);
//             }}
//           />
//         </div>
//       ) : null}
//     </>
//   );
// };
//
// export default SecondaryColorPicker;
