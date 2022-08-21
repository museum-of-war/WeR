/* eslint-disable */
import React, { useLayoutEffect, useMemo } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { LOCATIONS } from '../../constants/contants';
import { Message } from '../../components/message/Message';

export const Heading: React.FC = () => {
  const intl = useIntl();

  const cities = useMemo(() => {
    return [
      intl.locale === 'en' ? 'War as it sees' : 'Війна, як вона є',
      ...Object.values(LOCATIONS).map((place) =>
        intl.formatMessage({ id: place.shortLocation }),
      ),
    ];
  }, [intl.locale]);

  useLayoutEffect(() => {
    let cityIndex = 0;
    let letterIndex = 0;
    let interval: any;
    let timeout: any;

    const textEl = document.querySelector('#text');
    const cursorEl = document.querySelector('#cursor');

    const typingHandler = () => {
      if (!textEl || !cursorEl) return;

      const text = cities[cityIndex].substring(0, letterIndex + 1);
      textEl.innerHTML = text;
      letterIndex++;

      if (text === cities[cityIndex]) {
        // @ts-ignore
        // cursorEl.style.display = 'none';

        clearInterval(interval);
        timeout = setTimeout(() => {
          interval = setInterval(deletionHandler, 100);
        }, 1000);
      }
    };

    const deletionHandler = () => {
      if (!textEl || !cursorEl) return;

      const text = cities[cityIndex].substring(0, letterIndex - 1);
      textEl.innerHTML = text;
      letterIndex--;

      if (text === '') {
        clearInterval(interval);

        if (cityIndex == cities.length - 1) cityIndex = 0;
        else cityIndex++;

        letterIndex = 0;

        timeout = setTimeout(() => {
          // @ts-ignore
          // cursorEl.style.display = 'inline-block';
          interval = setInterval(typingHandler, 150);
        }, 200);
      }
    };

    interval = setInterval(typingHandler, 150);

    return () => {
      if (textEl) {
        textEl.innerHTML = '';
      }
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [intl.locale]);

  return (
    <Container>
      <Stack direction="column" alignItems="center" position="relative">
        <Box overflow="hidden" width="100%" height={464}>
          <video
            src="/videos/MainBanner.mp4"
            webkit-playsinline="true"
            controls={false}
            muted
            loop
            autoPlay
            style={{ width: '100%', marginTop: -128 }}
          />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          left={0}
          right={0}
          top={0}
          bottom={0}
          sx={{
            bgcolor: 'primary.main',
            opacity: 0.7,
          }}
        />
        <Stack
          position="absolute"
          zIndex={2}
          left={0}
          right={0}
          top={0}
          bottom={0}
          alignItems="center"
          justifyContent="center"
          display="inline-flex"
          direction="row"
        >
          <Typography variant="h1" color="white" id="text" />
          <Box id="cursor" />
        </Stack>
      </Stack>
      <Stack
        mt={16}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <Stack direction="column" flexBasis="35%" pr={6}>
          <Typography variant="h2">
            {' '}
            <Message id="heading.title" />
          </Typography>
          <Typography mt={4}>
            <Message id="heading.description" />
          </Typography>
        </Stack>
        <Stack flexBasis="65%">
          <img src="/images/Map.png" alt="map" style={{ maxWidth: '100%' }} />
        </Stack>
      </Stack>
    </Container>
  );
};
