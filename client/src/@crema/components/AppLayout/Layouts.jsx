import HorDefault from './HorDefault';
import MiniSidebar from './MiniSidebar';
import DrawerLayout from './DrawerLayout';
import Standard from './Standard';
import BitBucket from './BitBucket';
// import HorLightNav from './HorLightNav';
import HorDarkLayout from './HorDarkLayout';
import Default from './Default';
import HeaderUserLayout from './UserHeader';
import HeaderUserMiniLayout from './UserMiniHeader';
import MiniSidebarToggle from './MiniSidebarToggle';
import { NavStyle } from '@crema/constants/AppEnums';
import HorHeaderFixed from './HorHeaderFixed';

const Layouts = {
  [NavStyle.STANDARD]: Standard,
  [NavStyle.DEFAULT]: Default,
  [NavStyle.HEADER_USER]: HeaderUserLayout,
  [NavStyle.HEADER_USER_MINI]: HeaderUserMiniLayout,
  [NavStyle.MINI_SIDEBAR_TOGGLE]: MiniSidebarToggle,
  [NavStyle.MINI]: MiniSidebar,
  [NavStyle.DRAWER]: DrawerLayout,
  [NavStyle.BIT_BUCKET]: BitBucket,
  [NavStyle.H_DEFAULT]: HorDefault,
  [NavStyle.HOR_HEADER_FIXED]: HorHeaderFixed,
  [NavStyle.HOR_DARK_LAYOUT]: HorDarkLayout,
};
export default Layouts;
