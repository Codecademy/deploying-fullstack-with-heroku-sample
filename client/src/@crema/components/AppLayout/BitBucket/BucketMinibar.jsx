import React from 'react';
import { IoChatboxOutline } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import clsx from 'clsx';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import {
  StyledAppMinibarMain,
  StyledAppMiniScrollbar,
  StyledBucketMinibar,
  StyledBucketMinibarInner,
  StyledBucketMinibarLink,
  StyledBucketMinibarLogo,
  StyledBucketMinibarSetting,
} from './index.styled';

import { allowMultiLanguage } from '../../../constants/AppConst';

const BucketMinibar = () => {
  const { sidebarColorSet } = useSidebarContext();
  const { themeMode } = useThemeContext();
  return (
    <StyledBucketMinibar
      className={clsx({
        dark: themeMode === 'dark',
      })}
      style={{
        backgroundColor: sidebarColorSet.sidebarBgColor,
        color: sidebarColorSet.sidebarTextColor,
      }}
    >
      <StyledBucketMinibarInner>
        <StyledBucketMinibarLogo onClick={(e) => e.preventDefault()}>
          <img
            src={
              sidebarColorSet.mode === 'dark'
                ? '/assets/images/logo-white.png'
                : '/assets/images/logo.png'
            }
            alt='crema-logo'
          />
        </StyledBucketMinibarLogo>

        <StyledAppMiniScrollbar scrollToTop={false}>
          <StyledAppMinibarMain>
            <StyledBucketMinibarLink onClick={(e) => e.preventDefault()}>
              <AiOutlineSearch />
            </StyledBucketMinibarLink>

            {allowMultiLanguage && <AppLanguageSwitcher />}

            <StyledBucketMinibarLink onClick={(e) => e.preventDefault()}>
              <IoChatboxOutline />
            </StyledBucketMinibarLink>
            <StyledBucketMinibarLink onClick={(e) => e.preventDefault()}>
              <IoIosNotificationsOutline />
            </StyledBucketMinibarLink>
          </StyledAppMinibarMain>
          <StyledBucketMinibarSetting>
            <a onClick={(e) => e.preventDefault()}>
              <FiSettings />
            </a>
          </StyledBucketMinibarSetting>
        </StyledAppMiniScrollbar>
      </StyledBucketMinibarInner>
    </StyledBucketMinibar>
  );
};

export default BucketMinibar;
