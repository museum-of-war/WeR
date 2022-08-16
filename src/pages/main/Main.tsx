import React from 'react';
import { Heading } from './Heading';
import { LiveTours } from './LiveTours';
import { AboutUs } from './AboutUs';
import { Donate } from '../common/Donate';
import { Box, Container } from '@mui/material';

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
    <LiveTours heading="Live Tours" />
    <Donate />
    <AboutUs />
  </Box>
);
