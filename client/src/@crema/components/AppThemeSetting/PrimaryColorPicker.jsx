// import React, {useState} from 'react';
// import {SketchPicker} from 'react-color';
// import {
//   useThemeActionsContext,
//   useThemeContext,
// } from '../../utility/AppContextProvider';
//
// const PrimaryColorPicker = () => {
//   const [visible, setVisibility] = useState(false);
//   const {primary, theme} = useThemeContext();
//   const {updateTheme} = useThemeActionsContext();
//
//   return (
//     <>
//       <div
//         className='custom-color-switch'
//         onClick={() => setVisibility(!visible)}>
//         <div className='custom-color-switch-color' />
//         <span>Primary</span>
//       </div>
//       {visible ? (
//         <div
//           className='primary-color-popover'
//           onClick={() => setVisibility(!visible)}>
//           <SketchPicker
//             color={primary}
//             onChangeComplete={(color) => {
//               theme.palette.primary.main = color.hex;
//               updateTheme(theme);
//             }}
//           />
//         </div>
//       ) : null}
//     </>
//   );
// };
//
// export default PrimaryColorPicker;
