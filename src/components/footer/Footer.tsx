import React from 'react';
import { Container, Stack, Typography } from '@mui/material';

export const Footer: React.FC = () => (
  <Container>
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height={96}
      mt={16}
    >
      <Typography variant="body2">
        Ⓒ {new Date().getFullYear()} All rights reserved
      </Typography>
      <Typography variant="body2">YouTube</Typography>
    </Stack>
  </Container>
);
// todo @current youtube link
