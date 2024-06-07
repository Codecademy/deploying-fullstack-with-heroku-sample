import React from 'react';
import languageData from './data';

import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import { LayoutDirection } from '@crema/constants/AppEnums';
import {
  useLocaleActionsContext,
  useLocaleContext,
} from '@crema/context/AppContextProvider/LocaleContextProvider';
import { useLayoutActionsContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import { IoLanguageOutline } from 'react-icons/io5';
import {
  StyledLangBtn,
  StyledLangIcon,
  StyledLangItem,
  StyledLangText,
} from './index.styled';

const AppLanguageSwitcher = () => {
  const { rtlLocale, locale } = useLocaleContext();
  const { updateLocale } = useLocaleActionsContext();
  const { updateDirection } = useLayoutActionsContext();

  const changeLanguage = (language) => {
    if (rtlLocale.indexOf(language.locale) !== -1) {
      updateDirection(LayoutDirection.RTL);
    } else {
      updateDirection(LayoutDirection.LTR);
    }
    updateLocale(language);
  };

  const items = languageData.map((language, index) => {
    return {
      key: index,
      label: (
        <StyledLangItem key={index} onClick={() => changeLanguage(language)}>
          <i className={`flag flag-24 flag-${language.icon}`} />
          <h4>{language.name}</h4>
        </StyledLangItem>
      ),
    };
  });

  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        overlayStyle={{ zIndex: 1052 }}
      >
        <StyledLangBtn
          className='ant-dropdown-link langBtn'
          onClick={(e) => e.preventDefault()}
        >
          <StyledLangIcon>
            <IoLanguageOutline />
          </StyledLangIcon>
          <StyledLangText className='lang-text'>{locale.name}</StyledLangText>
        </StyledLangBtn>
      </Dropdown>
    </>
  );
};

export default AppLanguageSwitcher;

AppLanguageSwitcher.defaultProps = {
  iconOnly: false,
};

AppLanguageSwitcher.propTypes = {
  iconOnly: PropTypes.bool,
};
