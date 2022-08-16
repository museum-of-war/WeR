import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Card } from '../../components/card/Card';
import { CardComingSoon } from '../../components/cardComingSoon/CardComingSoon';
import { TOURS } from '../../constants/contants';

type LiveToursProps = {
  heading: string;
};
export const LiveTours: React.FC<LiveToursProps> = ({ heading }) => (
  <Container sx={{ mt: 16 }}>
    <Typography variant="h2">{heading}</Typography>
    <Grid container spacing={6} sx={{ mt: 0 }}>
      {Object.values(TOURS).map((tour) => (
        <Grid item key={tour.location} sm={12} md={6}>
          <Card data={tour} />
        </Grid>
      ))}
      <Grid item sm={12} md={6}>
        <CardComingSoon />
      </Grid>
    </Grid>
  </Container>
);
// todo @current more live tours amount
// todo @current add link
