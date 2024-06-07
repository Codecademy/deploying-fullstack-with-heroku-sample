// import React, {useState} from 'react';
// import {SketchPicker} from 'react-color';
// import {
//   useThemeActionsContext,
//   useThemeContext,
// } from '../../utility/AppContextProvider';
//
// const SidebarColorPicker = () => {
//   const [visible, setVisibility] = useState(false);
//   const {theme, sidebarColor} = useThemeContext();
//   const {updateTheme} = useThemeActionsContext();
//
//   return (
//     <>
//       <div
//         className='custom-color-switch'
//         onClick={() => setVisibility(!visible)}>
//         <div className='custom-color-switch-color sidebar-color-switch-color' />
//         <span>Sidebar</span>
//       </div>
//       {visible ? (
//         <div
//           className='primary-color-popover'
//           onClick={() => setVisibility(false)}>
//           <SketchPicker
//             color={sidebarColor}
//             onChangeComplete={(color) => {
//               theme.palette.sidebar.bgColor = color.hex;
//               updateTheme(theme);
//             }}
//           />
//         </div>
//       ) : null}
//     </>
//   );
// };
//
// export default SidebarColorPicker;
