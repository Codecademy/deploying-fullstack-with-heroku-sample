import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import defaultConfig, { defaultTheme } from "@crema/constants/defaultConfig";
import PropTypes from "prop-types";
import { LayoutDirection } from "@crema/constants/AppEnums";

const ThemeContext = createContext(undefined);
const ThemeActionsContext = createContext(undefined);

export const useThemeContext = () => useContext(ThemeContext);

export const useThemeActionsContext = () => useContext(ThemeActionsContext);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme.theme);
  const [themeMode, updateThemeMode] = useState(defaultConfig.themeMode);
  const [themeStyle, updateThemeStyle] = useState(defaultConfig.themeStyle);

  const updateTheme = useCallback((theme) => {
    console.log("updateTheme th", theme);
    setTheme(theme);
  }, []);

  useEffect(() => {
    if (theme.direction === LayoutDirection.RTL) {
      document.body.setAttribute("dir", LayoutDirection.RTL);
    } else {
      document.body.setAttribute("dir", LayoutDirection.LTR);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeStyle,
        themeMode,
      }}
    >
      <ThemeActionsContext.Provider
        value={{
          updateTheme,
          updateThemeStyle,
          updateThemeMode,
        }}
      >
        {children}
      </ThemeActionsContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
