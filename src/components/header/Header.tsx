import React from 'react';
import { Box, Button, Container, Link, Stack } from '@mui/material';
import { AppLocale } from '../../App';
import { Message } from '../message/Message';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ABOUT_US_CLASS_NAME,
  LIVE_TOURS_CLASS_NAME,
} from '../../constants/contants';

type HeaderProps = {
  setLocale: (locale: AppLocale) => void;
  locale: AppLocale;
};
export const Header: React.FC<HeaderProps> = ({ setLocale, locale }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = async (selector: string) => {
    if (pathname !== '/') {
      await navigate('/');
    }
    const node = document.querySelector(`.${selector}`);

    if (node) {
      node.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={96}
      >
        <Link href="/">
          <img src="/images/Logo.png" alt="logo" height={48} />
        </Link>
        <Box>
          <Link mr={6} onClick={() => scrollToSection(LIVE_TOURS_CLASS_NAME)}>
            <Message id="header.liveTours" />
          </Link>
          <Link mr={6} onClick={() => scrollToSection(ABOUT_US_CLASS_NAME)}>
            <Message id="header.aboutUs" />
          </Link>
          <Button
            variant={locale === 'en' ? 'outlined' : undefined}
            sx={{ width: 75 }}
            onClick={() => setLocale('en')}
          >
            EN
          </Button>
          <Button
            variant={locale === 'ua' ? 'outlined' : undefined}
            sx={{ width: 75 }}
            onClick={() => setLocale('ua')}
          >
            UA
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
