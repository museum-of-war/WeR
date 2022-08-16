import React from 'react';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';

const RECIPIENTS = [
  { title: 'United 24', url: '' },
  { title: 'Come Back Alive Foundation', url: '' },
  { title: 'Serhii Prytula Foundation', url: '' },
];
export const Donate: React.FC = () => (
  <Container sx={{ mt: 16 }}>
    <Typography variant="h2">Donate to Ukraine</Typography>
    <Grid container spacing={6} sx={{ mt: 0 }}>
      {RECIPIENTS.map((recipient) => (
        <Grid item key={recipient.title} sm={12} md={6}>
          <Stack
            direction="column"
            sx={{
              borderTop: '2px solid #101010',
              borderBottom: '2px solid #101010',
              cursor: 'pointer',
              height: '100%',
              boxSizing: 'border-box',
            }}
          >
            <Stack direction="column" alignItems="flex-start" height="100%">
              <Typography variant="h3" mt={4} mb={6}>
                {recipient.title}
              </Typography>
              <Button sx={{ mt: 'auto', mb: 6 }} variant="outlined">
                Go To Website
              </Button>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  </Container>
);
// todo @current donations links
