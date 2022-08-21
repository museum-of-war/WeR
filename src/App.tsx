import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IntlProvider, ReactIntlErrorCode } from 'react-intl';
import { OnErrorFn } from '@formatjs/intl/src/types';
import { ThemeProvider } from '@mui/material';
import { Main } from './pages/main/Main';
import { Location } from './pages/location/Location';
import { theme } from './theme';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { USER_LANGUAGE_LS_KEY } from './constants/contants';
import { en } from './intl/en';
import { ua } from './intl/ua';

const onError: OnErrorFn = (error) => {
  if (error.code === ReactIntlErrorCode.MISSING_DATA) {
    return;
  }
};

export type AppLocale = 'en' | 'ua';
export const App: React.FC = () => {
  const [locale, setLocale] = useState<AppLocale>('ua');

  useEffect(() => {
    const locale = localStorage.getItem(USER_LANGUAGE_LS_KEY);

    if (locale) {
      setLocale(locale as AppLocale);
    } else {
      if (navigator.language === 'ua-UA') {
        setLocale('ua');
      } else {
        setLocale('en');
      }
    }
  }, [setLocale]);

  const handleSetLocale = useCallback((locale: AppLocale) => {
    setLocale(locale);
    localStorage.setItem(USER_LANGUAGE_LS_KEY, locale);
  }, []);

  const localesMap: Record<AppLocale, any> = {
    en,
    ua,
  };

  return (
    <BrowserRouter>
      <IntlProvider
        messages={localesMap[locale]}
        locale={locale}
        onError={onError}
      >
        <ThemeProvider theme={theme}>
          <Header setLocale={handleSetLocale} locale={locale} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:locationUrl" element={<Location />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};
// todo @current live tours page
// todo @current mobile
// todo @current favicon
// todo @current meta
// todo @current translations
// todo @current VR places
