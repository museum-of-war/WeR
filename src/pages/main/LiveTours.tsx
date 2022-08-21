import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Card } from '../../components/card/Card';
import { CardComingSoon } from '../../components/cardComingSoon/CardComingSoon';
import { TOURS } from '../../constants/contants';
import { Message, TranslationKey } from '../../components/message/Message';

type LiveToursProps = {
  heading: TranslationKey;
  className?: string;
};
export const LiveTours: React.FC<LiveToursProps> = ({ heading, className }) => (
  <Container sx={{ mt: 16 }} className={className}>
    <Typography variant="h2">
      <Message id={heading} />
    </Typography>
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
