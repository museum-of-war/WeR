import React from 'react';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Card } from '../../components/card/Card';
import { TEAM } from '../../constants/contants';

export const AboutUs: React.FC = () => (
  <Container sx={{ mt: 16 }}>
    <Typography variant="h2">About Us</Typography>
    <Grid container spacing={6} sx={{ mt: 0 }}>
      <Grid item sm={12} md={6}>
        <Typography>
          We are a team of volunteers, who have crowdfunded and bought cool
          drones and filmed the cities of Ukraine after their deoccupation. Our
          project aims to keep the world's eyes wide open on the war in Ukraine.
        </Typography>
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography>
          On this site you can watch VR videos with an augmented reality helmet
          – a rough reality, which will get no prize for film directing or
          editing.
        </Typography>
      </Grid>
      {TEAM.map((member) => (
        <Grid item key={member.name} sm={12} md={6}>
          <Stack
            direction="column"
            sx={{
              borderTop: '2px solid #101010',
              height: '100%',
              boxSizing: 'border-box',
            }}
          >
            <Stack direction="column" alignItems="flex-start" height="100%">
              <Typography mt={3}>{member.name}</Typography>
              <Typography sx={{ mt: 1, opacity: 0.5 }}>
                {member.position}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  </Container>
);
