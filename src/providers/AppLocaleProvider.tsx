import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AppLocale, USER_LANGUAGE_LS_KEY } from '../constants/contants';

const AppLocaleContext = createContext({
  locale: 'ua' as AppLocale,
  setLocale: (locale: AppLocale) => {},
});

export const AppLocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  return (
    <AppLocaleContext.Provider
      value={{
        locale,
        setLocale: handleSetLocale,
      }}
    >
      {children}
    </AppLocaleContext.Provider>
  );
};

export const useLocale = () => useContext(AppLocaleContext);
