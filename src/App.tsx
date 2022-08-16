import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Main } from './pages/main/Main';
import { Location } from './pages/location/Location';
import { theme } from './theme';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:locationUrl" element={<Location />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </ThemeProvider>
);
// todo @current add translation
// todo @current about us
// todo @current live tours page
// todo @current mobile
// todo @current favicon
// todo @current meta