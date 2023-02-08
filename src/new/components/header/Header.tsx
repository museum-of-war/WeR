import React, { useEffect, useState } from 'react';
import {
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { theme } from '../../theme';
import { ReactComponent as Dot } from '../../icons/Dot.svg';
import { ReactComponent as Globe } from '../../icons/Globe.svg';
import { Button } from '../button/Button';
import { useLocale } from '../../../providers/AppLocaleProvider';
import { Message } from '../../../components/message/Message';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const md = useMediaQuery(theme.breakpoints.down('lg'));
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    if (!md) setMenuOpen(false);
  }, [md]);

  return (
    <Stack
      direction="row"
      width="100%"
      sx={{
        position: 'fixed',
        top: 0,
        borderBottom: '1px solid #212121',
        zIndex: 10,
        bgcolor: 'primary.main',
        boxSizing: 'border-box',
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: md ? 0 : 6 }}
          height={59}
        >
          {md && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon sx={{ color: '#eaeaea' }} />
            </IconButton>
          )}
          <Link href="/">
            <Stack direction="row" alignItems="center">
              <Dot className="blink" style={{ marginBottom: 3 }} />
              <Typography
                textTransform="uppercase"
                variant="h2"
                sx={{ mr: md ? 0.25 : 0.5 }}
              >
                wer ukraine
              </Typography>
            </Stack>
          </Link>
          {!md && (
            <Stack direction="row" alignItems="center">
              <Link href="/">
                <Typography ml={2.5} variant="h3">
                  <Message id="new.header.home" />
                </Typography>
              </Link>
              <Link href="/locations">
                <Typography ml={2.5} variant="h3">
                  <Message id="new.header.locations" />
                </Typography>
              </Link>
              <Link href="/about">
                <Typography ml={2.5} variant="h3">
                  <Message id="new.header.about" />
                </Typography>
              </Link>
              <Link href="/support">
                <Typography ml={2.5} variant="h3">
                  <Message id="new.header.support" />
                </Typography>
              </Link>
              {/*<Typography ml={2.5} variant="h3">*/}
              {/*  Get in touch*/}
              {/*</Typography>*/}
              <Typography ml={2.5} variant="h3" sx={{ opacity: 0.3 }}>
                <Message id="new.header.film" />
              </Typography>
            </Stack>
          )}
          <Stack direction="row" alignItems="center">
            {/*{md ? (*/}
            {/*  <IconButton>*/}
            {/*    <Volume />*/}
            {/*  </IconButton>*/}
            {/*) : (*/}
            {/*  <Button sx={{ display: 'flex', height: 40 }} isSecondary >*/}
            {/*    <Volume />*/}
            {/*  </Button>*/}
            {/*)}*/}
            {!md && (
              <Button
                sx={{ display: 'flex', height: 40, ml: 1.5 }}
                isSecondary
                onClick={() => setLocale(locale === 'en' ? 'ua' : 'en')}
              >
                {locale === 'en' ? 'Українська' : 'English'}
                <Globe style={{ height: 20 }} />
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{ width: '90vw' }}
      >
        <Stack
          width="50vw"
          direction="column"
          sx={{ background: '#101010', height: '100%' }}
        >
          <Button
            sx={{ display: 'flex', height: 40, mx: 2, mt: 3 }}
            isSecondary
            onClick={() => setLocale(locale === 'en' ? 'ua' : 'en')}
          >
            {locale === 'en' ? 'Українська' : 'English'}
            <Globe style={{ height: 20 }} />
          </Button>
          <Link href="/" py={3}>
            <Typography ml={2.5} variant="h3">
              <Message id="new.header.home" />
            </Typography>
          </Link>
          <Link href="/locations" py={3}>
            <Typography ml={2.5} variant="h3">
              <Message id="new.header.locations" />
            </Typography>
          </Link>
          <Link href="/about" py={3}>
            <Typography ml={2.5} variant="h3">
              <Message id="new.header.about" />
            </Typography>
          </Link>
          <Link href="/support" py={3}>
            <Typography ml={2.5} variant="h3">
              <Message id="new.header.support" />
            </Typography>
          </Link>
          {/*<Typography ml={2.5} variant="h3">*/}
          {/*  Get in touch*/}
          {/*</Typography>*/}
          <Typography ml={2.5} py={3} variant="h3" sx={{ opacity: 0.3 }}>
            The film [SOON]
          </Typography>
        </Stack>
      </Drawer>
    </Stack>
  );
};
