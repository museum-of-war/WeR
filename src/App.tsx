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
  const [isNew, setIsNew] = useState(true);

  const localesMap: Record<AppLocale, any> = {
    en,
    ua,
  };
  const { locale } = useLocale();

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
          <Box
            position="relative"
            height="100vh"
            width="100vw"
            overflow="hidden"
            className="hide-scroll"
          >
            <Header />
            <Box
              boxSizing="border-box"
              sx={{
                position: 'absolute',
                top: 65,
                left: 0,
                bottom: 65,
                right: 0,
                overflow: 'auto',
              }}
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
          </Box>
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
};

// cleanup old version

// add partners
// add filters
// add tags
// add grain
