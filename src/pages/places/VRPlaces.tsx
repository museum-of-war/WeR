import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { ReactComponent as Arrow } from '../../icons/arrow-white.svg';
import { VR_PLACES } from '../../constants/constants';
import { Donate } from '../common/Donate';
import { Message, TranslationKey } from '../../components/message/Message';
import { Card } from '../../components/card/Card';
import { VideoModal } from '../common/VideoModal';

export const VRPlaces: React.FC = () => {
  const theme = useTheme();
  const { locationUrl } = useParams();
  const navigate = useNavigate();
  const intl = useIntl();
  const xs = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    videoSrc: '',
    location: '' as TranslationKey,
  });

  const handleOpen = useCallback(
    ({
      videoSrc,
      location,
    }: {
      videoSrc: string;
      location: TranslationKey;
    }) => {
      setData({ videoSrc, location });
      setOpen(true);
    },
    [],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationUrl]);

  return (
    <Box position="relative" minHeight="100%">
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 0,
          height: { xs: 284, sm: 384, md: 464 },
          overflow: 'hidden',
        }}
      >
        <Box
          position="absolute"
          sx={{
            width: '100%',
            height: '100%',
            background: '#101010',
            zIndex: 1,
            opacity: 0.7,
          }}
        />
        <img
          width="100%"
          src={VR_PLACES[0].imageSrc}
          alt={intl.formatMessage({ id: VR_PLACES[0].location })}
          style={{ minWidth: '100%', maxWidth: '100%' }}
        />
      </Box>
      <Container
        sx={{
          zIndex: 1,
          position: 'relative',
          height: { xs: 284, sm: 384, md: 464 },
        }}
      >
        <Box
          sx={{
            borderBottom: '2px solid #ffffff',
            pb: 12,
          }}
        />
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mt: { xs: 3, sm: 6 } }}
        >
          <IconButton onClick={() => navigate('/')} sx={{ ml: -1 }}>
            <Arrow height={xs ? 24 : 48} width={xs ? 24 : 48} />
          </IconButton>
          <Typography
            variant="body2"
            ml={2}
            color="white"
            onClick={() => navigate('/')}
            sx={{ cursor: 'pointer' }}
          >
            Back
          </Typography>
        </Stack>
        <Typography variant="h2" color="white" sx={{ mt: { xs: 3, sm: 6 } }}>
          <Message id="vrplaces.title" />
        </Typography>
      </Container>
      <Container
        sx={{
          marginTop: {
            xs: 0,
            sm: 6,
            md: 10,
          },
        }}
      >
        <Grid container spacing={6} sx={{ mt: 0 }} className="cards">
          {VR_PLACES.map((place) => (
            <Grid
              item
              key={place.location}
              xs={6}
              sm={3}
              className="card"
              onClick={() =>
                handleOpen({
                  videoSrc: place.videoSrc,
                  location: place.location,
                })
              }
            >
              <Card data={place} isSmall disableArrow />
            </Grid>
          ))}
        </Grid>
        {open && <VideoModal handleClose={() => setOpen(false)} data={data} />}
      </Container>
      <Donate />
    </Box>
  );
};
