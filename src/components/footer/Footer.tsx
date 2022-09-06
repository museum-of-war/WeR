import React from 'react';
import { Container, Link, Stack, Typography } from '@mui/material';
import { Message } from '../message/Message';

export const Footer: React.FC = () => (
  <Container>
    <Stack
      alignItems="center"
      justifyContent="space-between"
      height={{ xs: '100%', sm: 96 }}
      mt={{
        xs: 1,
        sm: 12,
        md: 16,
      }}
      direction={{ xs: 'column-reverse', sm: 'row' }}
      py={{ xs: 2, sm: 0 }}
    >
      <Typography variant="body2" mt={{ xs: 1, sm: 0 }}>
        Ⓒ {new Date().getFullYear()} <Message id="footer.arr" />
      </Typography>
      <Stack direction={{ sx: 'column', sm: 'row' }} alignItems="center">
        <Link
          sx={{ ml: 2, mt: { xs: 1, sm: 0 } }}
          href="https://www.youtube.com/channel/UCOssjJx0Vm9kuEvxRKaMPBg"
          variant="body2"
          target="_blank"
        >
          YouTube
        </Link>
        <Link
          sx={{ ml: 2, mt: { xs: 1, sm: 0 } }}
          href="https://twitter.com/werukraine"
          variant="body2"
          target="_blank"
        >
          Twitter
        </Link>
        <Link
          sx={{ ml: 2, mt: { xs: 1, sm: 0 } }}
          href="https://instagram.com/werukraine"
          variant="body2"
          target="_blank"
        >
          Instagram
        </Link>
        <Link
          sx={{ ml: 2, mt: { xs: 1, sm: 0 } }}
          href="https://www.reddit.com/u/WeRUkraine"
          variant="body2"
          target="_blank"
        >
          Reddit
        </Link>
        <Link
          sx={{ ml: 2, mt: { xs: 1, sm: 0 } }}
          href="https://medium.com/@wer.ukraine"
          variant="body2"
          target="_blank"
        >
          Medium
        </Link>
      </Stack>
    </Stack>
  </Container>
);
