import React from 'react';
import {
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ReactComponent as YouTube } from '../../icons/YouTube.svg';
import { ReactComponent as Twitter } from '../../icons/Twitter.svg';
import { ReactComponent as Instagram } from '../../icons/Instagram.svg';
import { theme } from '../../theme';

export const Footer: React.FC = () => {
  const md = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Stack
      direction="row"
      width="100%"
      sx={{
        position: 'fixed',
        bottom: 0,
        bgcolor: 'primary.main',
        zIndex: 99,
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: md ? 0 : 6 }}
          height={60}
        >
          <Typography variant="h3" color="#404040">
            © WeR Ukraine {new Date().getFullYear()}
          </Typography>
          <Stack direction="row">
            <IconButton
              href="https://www.youtube.com/channel/UCOssjJx0Vm9kuEvxRKaMPBg"
              target="_blank"
            >
              <YouTube />
            </IconButton>
            <IconButton href="https://twitter.com/werukraine" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com/werukraine" target="_blank">
              <Instagram />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
