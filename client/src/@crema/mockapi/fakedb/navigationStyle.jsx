import {
  LayoutType,
  MenuStyle,
  NavStyle,
  ThemeMode,
} from '@crema/constants/AppEnums';

export const navStyles = [
  {
    id: 1,
    alias: NavStyle.DEFAULT,
    image: '/assets/images/navigationStyle/default.svg',
  },
  {
    id: 2,
    alias: NavStyle.BIT_BUCKET,
    image: '/assets/images/navigationStyle/bit_bucket.svg',
  },
  {
    id: 3,
    alias: NavStyle.STANDARD,
    image: '/assets/images/navigationStyle/standard.svg',
  },
  {
    id: 4,
    alias: NavStyle.DRAWER,
    image: '/assets/images/navigationStyle/drawer.svg',
  },
  {
    id: 5,
    alias: NavStyle.MINI,
    image: '/assets/images/navigationStyle/mini.svg',
  },
  {
    id: 6,
    alias: NavStyle.MINI_SIDEBAR_TOGGLE,
    image: '/assets/images/navigationStyle/mini-sidebar-toggle.svg',
  },
  {
    id: 7,
    alias: NavStyle.HEADER_USER,
    image: '/assets/images/navigationStyle/user-header.svg',
  },
  {
    id: 8,
    alias: NavStyle.HEADER_USER_MINI,
    image: '/assets/images/navigationStyle/user-mini-header.svg',
  },
  {
    id: 9,
    alias: NavStyle.H_DEFAULT,
    image: '/assets/images/navigationStyle/hor-header-fixed.svg',
  },
  {
    id: 10,
    alias: NavStyle.HOR_HEADER_FIXED,
    image: '/assets/images/navigationStyle/h-default.svg',
  },
  {
    id: 11,
    alias: NavStyle.HOR_DARK_LAYOUT,
    image: '/assets/images/navigationStyle/hor-dark-layout.svg',
  },
];
export const sidebarBgImages = [
  {
    id: 1,
    image: '/assets/images/sidebar/thumb/1.png',
  },
  {
    id: 2,
    image: '/assets/images/sidebar/thumb/2.png',
  },
  {
    id: 3,
    image: '/assets/images/sidebar/thumb/3.png',
  },
  {
    id: 4,
    image: '/assets/images/sidebar/thumb/4.png',
  },
  {
    id: 5,
    image: '/assets/images/sidebar/thumb/5.png',
  },
  {
    id: 6,
    image: '/assets/images/sidebar/thumb/6.png',
  },
];

export const menuStyles = [
  {
    id: 1,
    alias: MenuStyle.DEFAULT,
    image: '/assets/images/sidebar/menu/1.svg',
  },
  {
    id: 2,
    alias: MenuStyle.STANDARD,
    image: '/assets/images/sidebar/menu/2.svg',
  },
  {
    id: 3,
    alias: MenuStyle.ROUNDED,
    image: '/assets/images/sidebar/menu/3.svg',
  },
  {
    id: 4,
    alias: MenuStyle.ROUNDED_REVERSE,
    image: '/assets/images/sidebar/menu/4.svg',
  },
  {
    id: 5,
    alias: MenuStyle.CURVED_MENU,
    image: '/assets/images/sidebar/menu/5.svg',
  },
];

export const sidebarBgColors = [
  {
    id: 0,
    color: '#313541',
  },
  {
    id: 1,
    color: '#7C4D30',
  },
  {
    id: 2,
    color: '#905EAE',
  },
  {
    id: 3,
    color: '#639F52',
  },
  {
    id: 4,
    color: '#5A63C8',
  },
  {
    id: 5,
    color: '#9C27B0',
  },
  {
    id: 6,
    color: '#673AB7',
  },
];
export const sidebarColors = [
  {
    id: 0,
    sidebarBgColor: '#f6f8f9',
    sidebarTextColor: 'rgba(0, 0, 0, 0.60)',
    sidebarHeaderColor: '#f6f8f9',
    sidebarMenuSelectedBgColor: '#00905F',
    sidebarMenuSelectedTextColor: 'rgba(255, 255, 255, 0.87)',
    mode: ThemeMode.LIGHT,
  },
  {
    id: 1,
    sidebarBgColor: '#313541',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 2,
    sidebarBgColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#639F52',
    sidebarMenuSelectedBgColor: '#639F52',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.DARK,
  },
  {
    id: 3,
    sidebarBgColor: '#fff',
    sidebarTextColor: 'rgba(0, 0, 0, 0.87)',
    sidebarHeaderColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.LIGHT,
  },
  {
    id: 4,
    sidebarBgColor: '#fff',
    sidebarTextColor: 'rgba(0, 0, 0, 0.87)',
    sidebarHeaderColor: '#fff',
    sidebarMenuSelectedBgColor: '#313541',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.LIGHT,
  },
  {
    id: 5,
    sidebarBgColor: '#fff',
    sidebarTextColor: 'rgba(0, 0, 0, 0.87)',
    sidebarHeaderColor: '#fff',
    sidebarMenuSelectedBgColor: '#079CE9',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.LIGHT,
  },
  {
    id: 6,
    sidebarBgColor: '#313541',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#FD933A',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 7,
    sidebarBgColor: '#079CE9',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#313541',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.DARK,
  },
  {
    id: 8,
    sidebarBgColor: '#1B9E85',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 9,
    sidebarBgColor: '#FD933A',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 10,
    sidebarBgColor: '#F0464D',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 11,
    sidebarBgColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#313541',
    sidebarMenuSelectedBgColor: '#639F52',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.DARK,
  },
  {
    id: 12,
    sidebarBgColor: '#7C4D30',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#313541',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 14,
    sidebarBgColor: '#639F52',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#313541',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 15,
    sidebarBgColor: '#5A63C8',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#313541',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 16,
    sidebarBgColor: '#9C27B0',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#313541',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 17,
    sidebarBgColor: '#673AB7',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#313541',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 18,
    sidebarBgColor: '#079CE9',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
  {
    id: 19,
    sidebarBgColor: '#1B9E85',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#313541',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.DARK,
  },
  {
    id: 20,
    sidebarBgColor: '#FD933A',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#313541',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.DARK,
  },
  {
    id: 21,
    sidebarBgColor: '#F0464D',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#313541',
    sidebarMenuSelectedTextColor: '#fff',
    mode: ThemeMode.DARK,
  },
];

export const sidebarHeaderBgColors = [
  {
    id: 0,
    color: '#313541',
  },
  {
    id: 1,
    color: '#7C4D30',
  },
  {
    id: 2,
    color: '#905EAE',
  },
  {
    id: 3,
    color: '#639F52',
  },
  {
    id: 4,
    color: '#5A63C8',
  },
  {
    id: 5,
    color: '#9C27B0',
  },
  {
    id: 6,
    color: '#673AB7',
  },
];
export const sidebarSelectedMenuBgColors = [
  {
    id: 0,
    color: '#F4F7FE',
  },
  {
    id: 1,
    color: '#7C4D30',
  },
  {
    id: 2,
    color: '#905EAE',
  },
  {
    id: 3,
    color: '#639F52',
  },
  {
    id: 4,
    color: '#5A63C8',
  },
  {
    id: 5,
    color: '#9C27B0',
  },
  {
    id: 6,
    color: '#673AB7',
  },
];

export const sidebarMenuSelectedTextColors = [
  {
    id: 0,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  {
    id: 1,
    color: '#FFFFFF',
  },
];

export const layoutTypes = [
  {
    id: 1,
    alias: LayoutType.FULL_WIDTH,
    image: '/assets/images/layouts/full-width.svg',
  },
  {
    id: 2,
    alias: LayoutType.BOXED,
    image: '/assets/images/layouts/boxed.svg',
  },
  {
    id: 3,
    alias: LayoutType.FRAMED,
    image: '/assets/images/layouts/framed.svg',
  },
];
