import React from 'react';
import { Container, Link, Stack, Typography } from '@mui/material';
import { Message } from '../message/Message';

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
        Ⓒ {new Date().getFullYear()} <Message id="footer.arr" />
      </Typography>
      <Link
        href="https://www.youtube.com/channel/UCOssjJx0Vm9kuEvxRKaMPBg"
        variant="body2"
        target="_blank"
      >
        YouTube
      </Link>
    </Stack>
  </Container>
);
