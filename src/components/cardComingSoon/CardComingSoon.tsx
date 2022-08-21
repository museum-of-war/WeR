import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Message } from '../message/Message';

export const CardComingSoon: React.FC = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    height="100%"
    sx={{
      borderTop: '2px solid #101010',
      borderBottom: '2px solid #101010',
      boxSizing: 'border-box',
    }}
  >
    <Typography variant="h3">
      <Message id="card.comingSoon" />
    </Typography>
  </Stack>
);
