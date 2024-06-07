// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import {useDispatch} from 'react-redux';
// import {
//   onCognitoUserSignOut,
//   onJWTAuthSignout,
//   onSignOutAuth0User,
//   onSignOutFirebaseUser,
// } from '../../../redux/actions';
// import clsx from 'clsx';
// import {makeStyles} from '@material-ui/core';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Box from '@material-ui/core/Box';
// import {orange} from '@material-ui/core/colors';
// import {AuthType, Fonts, ThemeMode} from '../../constants/AppEnums';
// import Hidden from '@material-ui/core/Hidden';
//
// const useStyles = makeStyles((theme) => {
//   return {
//     crHeaderUser: {
//       backgroundColor: (props) =>
//         props.header ? 'transparent' : 'rgba(0,0,0,.08)',
//       paddingTop: 9,
//       paddingBottom: 9,
//       minHeight: 56,
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       [theme.breakpoints.up('sm')]: {
//         paddingTop: 10,
//         paddingBottom: 10,
//         minHeight: 70,
//       },
//     },
//     profilePic: {
//       fontSize: 24,
//       backgroundColor: orange[500],
//     },
//     userInfo: {
//       width: (props) => (!props.header ? 'calc(100% - 75px)' : '100%'),
//     },
//     userName: {
//       overflow: 'hidden',
//       textOverflow: 'ellipsis',
//       cursor: 'pointer',
//       whiteSpace: 'nowrap',
//       fontSize: 15,
//       fontWeight: Fonts.MEDIUM,
//       color: (props) =>
//         props.themeMode === ThemeMode.DARK || !props.header
//           ? 'white'
//           : '#313541',
//     },
//     pointer: {
//       cursor: 'pointer',
//     },
//   };
// });
//
// const HeaderUser = (props) => {
//   const {themeMode} = useThemeContext();
//   const dispatch = useDispatch();
//   const user = useAuthUser();
//
//   const getUserAvatar = () => {
//     if (user.displayName) {
//       return user.displayName.charAt(0).toUpperCase();
//     }
//     if (user.email) {
//       return user.email.charAt(0).toUpperCase();
//     }
//   };
//   const getUserAvatarView = () => {
//     if (user.photoURL) {
//       return <Avatar className={classes.profilePic} src={user.photoURL} />;
//     } else {
//       return <Avatar className={classes.profilePic}>{getUserAvatar()}</Avatar>;
//     }
//   };
//
//   const classes = useStyles({themeMode, header: props.header});
//
//   return (
//     <Box px={{xs: 2, xl: 6}} className={clsx(classes.crHeaderUser, '')}>
//       <Box display='flex' alignItems='center'>
//         <Hidden mdDown> {getUserAvatarView()}</Hidden>
//         <Box className={clsx(classes.userInfo, 'user-info')}>
//           <Box
//             display='flex'
//             alignItems='center'
//             justifyContent='space-between'>
//             <Hidden mdDown>
//               <Box ml={4} mb={1.5} className={classes.userName}>
//                 {user.displayName ? user.displayName : user.email}
//                 <Box
//                   fontSize={13}
//                   fontWeight={Fonts.LIGHT}
//                   color='text.secondary'>
//                   System Manager
//                 </Box>
//               </Box>
//             </Hidden>
//             <Box
//               ml={{md: 3}}
//               className={classes.pointer}
//               color={
//                 themeMode === ThemeMode.DARK || !props.header
//                   ? 'white'
//                   : '#313541'
//               }>
//               <Hidden mdDown>
//                 <ExpandMoreIcon onClick={handleClick} />
//               </Hidden>
//               <Hidden lgUp>
//                 <Box component='span' onClick={handleClick}>
//                   {getUserAvatarView()}
//                 </Box>
//               </Hidden>
//               <Menu id='simple-menu' keepMounted>
//                 <MenuItem>My account</MenuItem>
//                 <MenuItem
//                   onClick={() => {
//                     if (user && user.authType === AuthType.AWS_COGNITO) {
//                       dispatch(onCognitoUserSignOut());
//                     } else if (user && user.authType === AuthType.FIREBASE) {
//                       dispatch(onSignOutFirebaseUser());
//                     } else if (user && user.authType === AuthType.AUTH0) {
//                       dispatch(onSignOutAuth0User());
//                     } else if (user && user.authType === AuthType.JWT_AUTH) {
//                       dispatch(onJWTAuthSignout());
//                     }
//                   }}>
//                   Logout
//                 </MenuItem>
//               </Menu>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };
// export default HeaderUser;
// HeaderUser.defaultProps = {
//   header: true,
// };
