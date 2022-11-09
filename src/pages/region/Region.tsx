import React, { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ReactComponent as Arrow } from '../../icons/arrow-white.svg';
import { Donate } from '../common/Donate';
import { theme } from '../../theme';
import { LiveTours } from '../main/LiveTours';
import {
  LIVE_TOURS_CLASS_NAME,
  Region,
  TOURS,
  VR_PLACES,
} from '../../constants/contants';
import { Card } from '../../components/card/Card';
import { VideoModal } from '../common/VideoModal';

export const RegionComponent: React.FC = () => {
  const { regionId } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const xs = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = useCallback((videoSrc: string) => {
    setVideoSrc(videoSrc);
    setOpen(true);
  }, []);

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
          src="/images/irpin.png"
          style={{ height: '100%', objectFit: 'cover' }}
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
        <Stack direction="row" alignItems="center" my={6}>
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
        <Typography variant="h2" color="white">
          {regionId}
        </Typography>
      </Container>
      <Box>
        <LiveTours
          heading="home.title.liveTours"
          className={LIVE_TOURS_CLASS_NAME}
          tours={TOURS.filter((tour) => tour.region === (regionId as Region))}
        />
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
            {VR_PLACES.filter(
              (VRPlace) => VRPlace.region === (regionId as Region),
            ).map((place) => (
              <Grid
                item
                key={place.location}
                xs={6}
                sm={3}
                className="card"
                onClick={() => handleOpen(place.videoSrc)}
              >
                <Card data={place} isSmall disableArrow />
              </Grid>
            ))}
          </Grid>
          {open && (
            <VideoModal
              handleClose={() => setOpen(false)}
              videoSrc={videoSrc}
            />
          )}
        </Container>
      </Box>
      {/*<LiveTours heading="location.title.moreLiveTours" tours={[]} />*/}
      <Donate />
    </Box>
  );
};
