import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IntlProvider, ReactIntlErrorCode } from 'react-intl';
import { OnErrorFn } from '@formatjs/intl/src/types';
import { Box, ThemeProvider } from '@mui/material';
import { Main as OldMain } from './pages/main/Main';
import { Main } from './new/pages/main/Main';
import { Location as LocationOld } from './pages/location/Location';
import { VRPlaces } from './pages/places/VRPlaces';
import { theme as oldTheme } from './theme';
import { theme } from './new/theme';
import { Header as HeaderOld } from './components/header/Header';
import { Header } from './new/components/header/Header';
import { Footer as FooterOld } from './components/footer/Footer';
import { Footer } from './new/components/footer/Footer';
import { en } from './intl/en';
import { ua } from './intl/ua';
import { RegionComponent as Region } from './pages/region/Region';
import { AppLocale, GA_MEASUREMENT_ID } from './constants/constants';
import { useLocale } from './providers/AppLocaleProvider';
import { About } from './new/pages/about/About';
import { Support } from './new/pages/support/Support';
import { Locations } from './new/pages/locations/Locations';
import { Location } from './new/pages/location/Location';

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
  const [isNew, setIsNew] = useState(false);

  const localesMap: Record<AppLocale, any> = {
    en,
    ua,
  };
  const { locale } = useLocale();

  useEffect(() => {
    const isNew = localStorage.getItem('new');

    if (isNew) {
      setIsNew(true);
    }
  }, []);

  return !isNew ? (
    <BrowserRouter>
      <IntlProvider
        messages={localesMap[locale]}
        locale={locale}
        onError={onError}
      >
        <ThemeProvider theme={oldTheme}>
          <HeaderOld />
          <Routes>
            <Route path="/" element={<OldMain />} />
            <Route path="/location/:locationUrl" element={<LocationOld />} />
            <Route path="/region/:regionId" element={<Region />} />
            <Route path="/vr-places" element={<VRPlaces />} />
          </Routes>
          <FooterOld />
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <IntlProvider
        messages={localesMap[locale]}
        locale={locale}
        onError={onError}
      >
        <ThemeProvider theme={theme}>
          <Header />
          <Box
            paddingTop="60px"
            paddingBottom="60px"
            boxSizing="border-box"
            height="100%"
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
              <Route path="/locations" element={<Locations />} />
              <Route
                path="/location/:region/:location"
                element={<Location />}
              />
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};

// cleanup old version
// add banners to donate/about
// add translations
// change navigate to a

// add partners
// add filters
// add tags
// add grain
