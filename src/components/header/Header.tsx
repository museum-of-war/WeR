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

import { Message } from '../message/Message';
import {
  ABOUT_US_CLASS_NAME,
  VR_PLACES_CLASS_NAME,
  LIVE_TOURS_CLASS_NAME,
} from '../../constants/contants';
import { ReactComponent as Menu } from '../../icons/menu.svg';
import { useLocale } from '../../providers/AppLocaleProvider';

export const Header: React.FC = () => {
  const { locale, setLocale } = useLocale();
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
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  useEffect(() => {
    if (!md) {
      setShowMenu(false);
    }
  }, [md]);

  return (
    <Container
      sx={{
        display: 'flex',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 10,
        height: '96px',
      }}
    >
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <img src="/images/logo_white.svg" alt="logo" height={46} />
        </Link>
        {md ? (
          <IconButton onClick={() => setShowMenu(true)}>
            <Menu />
          </IconButton>
        ) : (
          <Box
            sx={{
              '& > button, a': {
                color: '#ffffff',
              },
            }}
          >
            <Link mr={6} onClick={() => scrollToSection(LIVE_TOURS_CLASS_NAME)}>
              <Message id="header.liveTours" />
            </Link>
            <Link mr={6} onClick={() => scrollToSection(VR_PLACES_CLASS_NAME)}>
              <Message id="header.vrPlaces" />
            </Link>
            <Link mr={6} onClick={() => scrollToSection(ABOUT_US_CLASS_NAME)}>
              <Message id="header.aboutUs" />
            </Link>
            <Button
              variant="outlined"
              sx={{
                width: 75,
                borderColor: locale === 'en' ? '#ffffff' : 'transparent',
                ':hover': {
                  borderColor: locale === 'en' ? '#ffffff' : 'transparent',
                },
              }}
              onClick={() => setLocale('en')}
            >
              EN
            </Button>
            <Button
              variant={locale === 'ua' ? 'outlined' : undefined}
              sx={{
                width: 75,
                borderColor: locale === 'ua' ? '#ffffff' : 'transparent',
                ':hover': {
                  borderColor: locale === 'ua' ? '#ffffff' : 'transparent',
                },
              }}
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
