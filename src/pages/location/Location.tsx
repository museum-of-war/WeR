import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../svg/ArrowWhite.svg';
import { LOCATIONS } from '../../constants/contants';
import { Donate } from '../common/Donate';
import { LiveTours } from '../main/LiveTours';

export const Location: React.FC = () => {
  const { locationUrl } = useParams();

  const location = Object.values(LOCATIONS).find(
    (place) => place.url === locationUrl,
  );

  if (!location) return null;

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
          height: 464,
          overflow: 'hidden',
        }}
      >
        <img
          src={location.imageSrc}
          alt={location.location}
          style={{ minWidth: '100%' }}
        />
      </Box>
      <Container sx={{ zIndex: 1, position: 'relative', pt: 6 }}>
        <Stack direction="row" alignItems="center">
          <Arrow />
          <Typography variant="body2" ml={2} color="white">
            Back
          </Typography>
        </Stack>
        <Typography variant="h2" color="white">
          {location.location}
        </Typography>
        <video
          src={location.videoSrc}
          width="100%"
          style={{ marginTop: 40 }}
          controls
        />
        <LiveTours heading="location.title.moreLiveTours" />
        <Donate />
      </Container>
    </Box>
  );
};
