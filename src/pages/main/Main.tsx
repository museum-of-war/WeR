import React from 'react';
import { Box, Container } from '@mui/material';
import { Donate } from '../common/Donate';
import { LIVE_TOURS_CLASS_NAME } from '../../constants/contants';
import { AboutUs } from './AboutUs';
import { Heading } from './Heading';
import { LiveTours } from './LiveTours';
import { VRPlaces } from './VRPlaces';
import { Partners } from './Partners';

export const Main: React.FC = () => (
  <Box>
    <Container>
      <Box
        sx={{
          borderTop: '2px solid',
          pb: 8,
        }}
      />
    </Container>
    <Heading />
    <LiveTours
      heading="home.title.liveTours"
      className={LIVE_TOURS_CLASS_NAME}
    />
    <VRPlaces />
    <Donate />
    <AboutUs />
    <Partners />
  </Box>
);
