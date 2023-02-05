import React from 'react';
import { Container } from '@mui/material';
import { SecondaryBlock } from './SecondaryBlock';
import { PrimaryBlock } from './PrimaryBlock';

export const Main: React.FC = () => {
  return (
    <Container
      sx={{
        position: 'relative',
        paddingBottom: '60px',
      }}
    >
      <PrimaryBlock />
      <SecondaryBlock />
    </Container>
  );
};
