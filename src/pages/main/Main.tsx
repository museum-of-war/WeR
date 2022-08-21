import React from 'react';
import { Heading } from './Heading';
import { LiveTours } from './LiveTours';
import { AboutUs } from './AboutUs';
import { Donate } from '../common/Donate';
import { Box, Container } from '@mui/material';
import { LIVE_TOURS_CLASS_NAME } from '../../constants/contants';

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
    <Donate />
    <AboutUs />
  </Box>
);
