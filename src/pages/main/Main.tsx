import React from 'react';
import { Box, Container, useMediaQuery } from '@mui/material';
import { SecondaryBlock } from './SecondaryBlock';
import { PrimaryBlock } from './PrimaryBlock';
import { theme } from '../../theme';

export const Main: React.FC = () => {
  const md = useMediaQuery(theme.breakpoints.down('lg'));
  const sm = useMediaQuery(theme.breakpoints.down('md'));

  return sm || md ? (
    <Box>
      <PrimaryBlock />
      <Box mx={2}>
        <SecondaryBlock />
      </Box>
    </Box>
  ) : (
    <Container sx={{ position: 'relative' }}>
      <PrimaryBlock />
      <SecondaryBlock />
    </Container>
  );
};
