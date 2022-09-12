import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Message } from '../../components/message/Message';

const PARTNERS = [
  '/images/partners/meta_history.png',
  '/images/partners/army_inform.png',
  '/images/partners/media_inventor.png',
  '/images/partners/nova_film.png',
];
export const Partners: React.FC = () => (
  <Container
    sx={{
      mt: {
        xs: 12,
        sm: 14,
        md: 16,
      },
    }}
  >
    <Typography variant="h2">
      <Message id="partners.title" />
    </Typography>
    <Box
      sx={{
        mt: 6,
        borderTop: '2px solid #101010',
        borderBottom: '2px solid #101010',
      }}
    >
      <Grid
        container
        spacing={8}
        sx={{
          mt: 0,
          pb: 8,
        }}
      >
        {PARTNERS.map((partner) => (
          <Grid item xs={6} md={6} lg={3} key={partner}>
            <Stack justifyContent="center" height="100%" px="25%">
              <img
                src={partner}
                alt=""
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);
