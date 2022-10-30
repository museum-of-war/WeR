import { useCallback, useEffect, useState } from 'react';
import { AppLocale } from '../App';

const USER_LANGUAGE_LS_KEY = 'USER_LANGUAGE';

export const useLocale = () => {
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

  return [locale, handleSetLocale] as [AppLocale, (locale: AppLocale) => void];
};
