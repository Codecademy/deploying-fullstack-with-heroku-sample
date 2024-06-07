import React from "react";
import PropTypes from "prop-types";
import {
  useSidebarActionsContext,
  useSidebarContext,
} from "@crema/context/AppContextProvider/SidebarContextProvider";
import { MenuStyle, NavStyle, ThemeMode } from "@crema/constants/AppEnums";
import clsx from "clsx";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import AppSelectedIcon from "../../../AppSelectedIcon";
import defaultConfig from "@crema/constants/defaultConfig";
import {
  StyledMenuColorCell,
  StyledMenuColorCellContent,
  StyledMenuColorCellHeader,
  StyledMenuColorCellHeaderAvatar,
  StyledMenuColorCellHeaderContent,
  StyledMenuColorCellHeaderContentLine,
  StyledMenuColorCellItem,
  StyledMenuColorCellItemSelected,
} from "./index.styled";

const MenuColorCell = ({ sidebarColors }) => {
  console.log("sidebarColors: ", sidebarColors);
  const { sidebarColorSet, menuStyle } = useSidebarContext();
  const { updateSidebarColorSet } = useSidebarActionsContext();
  const {
    sidebarBgColor,
    sidebarTextColor,
    sidebarMenuSelectedBgColor,
    sidebarMenuSelectedTextColor,
  } = sidebarColorSet;
  const { navStyle } = useLayoutContext();

  return (
    <StyledMenuColorCell
      style={{
        border:
          sidebarColors.mode === ThemeMode.LIGHT
            ? `solid 2px ${defaultConfig.sidebar.borderColor}`
            : `solid 2px ${sidebarColors.sidebarBgColor}`,
      }}
      onClick={() => updateSidebarColorSet(sidebarColors)}
    >
      {navStyle === NavStyle.DEFAULT ? (
        <StyledMenuColorCellHeader
          style={{
            backgroundColor: sidebarColors.sidebarHeaderColor,
            borderBottom: `solid 1px ${sidebarColors.sidebarTextColor}`,
          }}
        >
          <StyledMenuColorCellHeaderAvatar
            style={{
              border: `solid 1px ${sidebarColors.sidebarTextColor}`,
            }}
          />
          <StyledMenuColorCellHeaderContent>
            <StyledMenuColorCellHeaderContentLine
              style={{
                backgroundColor: sidebarColors.sidebarTextColor,
              }}
            />
            <StyledMenuColorCellHeaderContentLine
              style={{
                backgroundColor: sidebarColors.sidebarTextColor,
              }}
            />
          </StyledMenuColorCellHeaderContent>
        </StyledMenuColorCellHeader>
      ) : null}
      <StyledMenuColorCellContent
        style={{
          backgroundColor: sidebarColors.sidebarBgColor,
        }}
      >
        <StyledMenuColorCellItem
          style={{
            color: sidebarColors.sidebarTextColor,
          }}
        >
          Menu-1
        </StyledMenuColorCellItem>
        <StyledMenuColorCellItem
          style={{
            color: sidebarColors.sidebarTextColor,
          }}
        >
          Menu-2
        </StyledMenuColorCellItem>
        <StyledMenuColorCellItemSelected
          className={clsx({
            "rounded-menu": menuStyle === MenuStyle.ROUNDED,
            "rounded-menu-reverse": menuStyle === MenuStyle.ROUNDED_REVERSE,
            "standard-menu": menuStyle === MenuStyle.STANDARD,
            "default-menu": menuStyle === MenuStyle.DEFAULT,
            "curved-menu": menuStyle === MenuStyle.CURVED_MENU,
          })}
          style={{
            backgroundColor: sidebarColors.sidebarMenuSelectedBgColor,
            color: sidebarColors.sidebarMenuSelectedTextColor,
          }}
        >
          Selected Menu
        </StyledMenuColorCellItemSelected>
        <StyledMenuColorCellItem
          style={{
            color: sidebarColors.sidebarTextColor,
          }}
        >
          Menu-4
        </StyledMenuColorCellItem>
      </StyledMenuColorCellContent>
      {sidebarColors.sidebarBgColor === sidebarBgColor &&
      sidebarColors.sidebarTextColor === sidebarTextColor &&
      sidebarColors.sidebarMenuSelectedBgColor === sidebarMenuSelectedBgColor &&
      sidebarColors.sidebarMenuSelectedTextColor ===
        sidebarMenuSelectedTextColor ? (
        <AppSelectedIcon
          isCenter={false}
          backgroundColor={sidebarMenuSelectedBgColor}
          color={sidebarMenuSelectedTextColor}
        />
      ) : null}
    </StyledMenuColorCell>
  );
};

export default MenuColorCell;
MenuColorCell.propTypes = { sidebarColors: PropTypes.object };
