import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppLocale } from '../../App';
import { Message } from '../message/Message';
import {
  ABOUT_US_CLASS_NAME,
  LIVE_TOURS_CLASS_NAME,
} from '../../constants/contants';
import { ReactComponent as Menu } from '../../svg/Menu.svg';

type HeaderProps = {
  setLocale: (locale: AppLocale) => void;
  locale: AppLocale;
};
export const Header: React.FC<HeaderProps> = ({ setLocale, locale }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = async (selector: string) => {
    if (pathname !== '/') {
      await navigate('/');
    }
    const node = document.querySelector(`.${selector}`);

    if (node) {
      setTimeout(() => {
        node.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  useEffect(() => {
    if (!md) {
      setShowMenu(false);
    }
  }, [md]);

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
        {md ? (
          <IconButton onClick={() => setShowMenu(true)}>
            <Menu />
          </IconButton>
        ) : (
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
        )}
      </Stack>
      <Drawer anchor="right" open={showMenu} onClose={() => setShowMenu(false)}>
        <Stack
          sx={{ minWidth: '65vw' }}
          direction="column"
          spacing={5}
          pl={5}
          pt={5}
        >
          <Link onClick={() => scrollToSection(LIVE_TOURS_CLASS_NAME)}>
            <Message id="header.liveTours" />
          </Link>
          <Link onClick={() => scrollToSection(ABOUT_US_CLASS_NAME)}>
            <Message id="header.aboutUs" />
          </Link>
          <Stack direction="row" spacing={5}>
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
          </Stack>
        </Stack>
      </Drawer>
    </Container>
  );
};
