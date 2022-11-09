import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IntlProvider, ReactIntlErrorCode } from 'react-intl';
import { OnErrorFn } from '@formatjs/intl/src/types';
import { ThemeProvider } from '@mui/material';
import { Main } from './pages/main/Main';
import { Location } from './pages/location/Location';
import { VRPlaces } from './pages/places/VRPlaces';
import { theme } from './theme';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { en } from './intl/en';
import { ua } from './intl/ua';
import { RegionComponent as Region } from './pages/region/Region';
import { AppLocale, GA_MEASUREMENT_ID } from './constants/contants';
import { useLocale } from './providers/AppLocaleProvider';

ReactGA.initialize(GA_MEASUREMENT_ID);

const onError: OnErrorFn = (error) => {
  if (error.code === ReactIntlErrorCode.MISSING_DATA) {
    return;
  }
};

export const App: React.FC = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
    });
  }, []);

  const localesMap: Record<AppLocale, any> = {
    en,
    ua,
  };
  const { locale } = useLocale();

  return (
    <BrowserRouter>
      <IntlProvider
        messages={localesMap[locale]}
        locale={locale}
        onError={onError}
      >
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/location/:locationUrl" element={<Location />} />
            <Route path="/region/:regionId" element={<Region />} />
            <Route path="/vr-places" element={<VRPlaces />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};

// todo @current add Google Analytics for donations
// todo @current add Google Analytics for VR places
