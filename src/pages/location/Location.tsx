import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import {
  Container,
  Dialog,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import copy from 'copy-to-clipboard';
import { GoBack } from '../../components/goBack/GoBack';
import { theme } from '../../theme';
import { useParams } from 'react-router-dom';
import { TOURS } from '../../constants/constants';
import { Message } from '../../components/message/Message';
import { Button } from '../../components/button/Button';
import { ReactComponent as Play } from '../../icons/Play.svg';
import { ReactComponent as Share } from '../../icons/Share.svg';
import { Card } from '../../components/card/Card';

export const Location: React.FC = () => {
  const md = useMediaQuery(theme.breakpoints.down('lg'));
  const { region, location } = useParams();
  const intl = useIntl();

  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const tour = TOURS.find((tour) => tour.id === location);

  if (!tour) return null;

  const otherItems = TOURS.filter((t) => t.id !== tour.id);
  const moreItems = [
    ...otherItems.filter((i) => i.region === region),
    ...otherItems.filter((i) => i.region !== region),
  ];

  return (
    <Container sx={{ height: 'calc(100% - 60px)' }}>
      <GoBack text="new.button.back.locations" location="/locations" />
      <Stack
        direction={md ? 'column' : 'row'}
        height="100%"
        alignItems={md ? undefined : 'flex-start'}
      >
        <Stack
          sx={{
            flexBasis: md ? '100%' : '75%',
            minWidth: md ? '100%' : '75%',
            position: 'relative',
          }}
        >
          <img
            src={tour.imageSrc}
            alt=""
            style={{
              objectFit: 'cover',
              display: 'flex',
              alignSelf: 'flex-start',
              maxWidth: '100%',
              borderRadius: '16px',
              width: '100%',
              height: '100%',
            }}
          />
          <Stack
            sx={{
              background:
                'linear-gradient(0deg, rgba(16, 16, 16, 0.64), rgba(16, 16, 16, 0.64))',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
          />
          <Stack sx={{ position: 'absolute', left: 16, bottom: 16, zIndex: 1 }}>
            <Typography variant="h2" textTransform="uppercase">
              <Message id={tour.location} />
            </Typography>
            <Stack direction="row">
              <Button sx={{ mt: 3.5 }} onClick={() => setOpen(true)}>
                <>
                  <Message id="new.location.button.play" />{' '}
                  <Play style={{ marginLeft: 12 }} />
                </>
              </Button>
              <Button
                isSecondary
                sx={{ mt: 3.5, ml: 1 }}
                onClick={() => {
                  copy(window.location.href);
                  setNotificationOpen(true);
                }}
              >
                <>
                  <Message id="new.location.button.share" />{' '}
                  <Share style={{ marginLeft: 12 }} />
                </>
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          position="relative"
          sx={{
            borderRadius: '16px',
            border: '1px solid #212121',
            ml: md ? 0 : 4,
            mt: md ? 4 : 0,
            flexBasis: md ? '100%' : '25%',
            height: '100%',
          }}
        >
          <Typography variant="h2" px={1.5} pt={3} textTransform="uppercase">
            <Message id="new.location.more" />
          </Typography>
          <Stack
            direction="column"
            maxHeight="100%"
            overflow="auto"
            position="absolute"
            top={65}
            left={0}
            right={0}
            bottom={0}
          >
            {moreItems.map((item) => (
              <Card
                key={item.id}
                location={item}
                width="100%"
                sx={{
                  '&:not(:first-of-type)': {
                    mt: 1,
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Dialog onClose={() => setOpen(false)} open={open} maxWidth="xl">
        <iframe
          width="100%"
          height="720"
          src={tour.videoSrc}
          title={intl.formatMessage({ id: tour.location })}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '80vw',
          }}
        />
      </Dialog>
      <Snackbar
        open={notificationOpen}
        autoHideDuration={2000}
        onClose={() => setNotificationOpen(false)}
        message="URL copied to clipboard"
      />
    </Container>
  );
};
