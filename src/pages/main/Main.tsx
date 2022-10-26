import React from 'react';
import { Box } from '@mui/material';
import { Donate } from '../common/Donate';
import { LIVE_TOURS_CLASS_NAME, TOURS } from '../../constants/contants';
import { AboutUs } from './AboutUs';
import { Heading } from './Heading';
import { LiveTours } from './LiveTours';
import { VRPlaces } from './VRPlaces';
import { Partners } from './Partners';

export const Main: React.FC = () => (
  <Box>
    <Heading />
    <LiveTours
      heading="home.title.liveTours"
      className={LIVE_TOURS_CLASS_NAME}
      tours={TOURS}
    />
    <VRPlaces />
    <Donate />
    <AboutUs />
    <Partners />
  </Box>
);
