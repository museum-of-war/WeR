import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IntlProvider, ReactIntlErrorCode } from 'react-intl';
import { OnErrorFn } from '@formatjs/intl/src/types';
import { Box, ThemeProvider } from '@mui/material';
import { Main } from './pages/main/Main';
import { theme } from './theme';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { en } from './intl/en';
import { ua } from './intl/ua';
import { AppLocale, GA_MEASUREMENT_ID } from './constants/constants';
import { useLocale } from './providers/AppLocaleProvider';
import { About } from './pages/about/About';
import { Support } from './pages/support/Support';
import { Locations } from './pages/locations/Locations';
import { Location } from './pages/location/Location';

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
  return (
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
