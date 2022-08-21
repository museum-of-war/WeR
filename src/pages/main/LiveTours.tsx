import React, { useCallback, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Card } from '../../components/card/Card';
import { CardComingSoon } from '../../components/cardComingSoon/CardComingSoon';
import { TOURS } from '../../constants/contants';
import { Message, TranslationKey } from '../../components/message/Message';

type LiveToursProps = {
  heading: TranslationKey;
  className?: string;
};
export const LiveTours: React.FC<LiveToursProps> = ({ heading, className }) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const height = document.querySelector('.card')?.clientHeight;
      const target = document.querySelector('.coming-soon-card') as HTMLElement;

      if (target) {
        target.style.height = `${height}px`;
      }
    });
    const container = document.querySelector('.cards');

    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, []);

  return (
    <Container sx={{ mt: 16 }} className={className}>
      <Typography variant="h2">
        <Message id={heading} />
      </Typography>
      <Grid container spacing={6} sx={{ mt: 0 }} className="cards">
        {Object.values(TOURS).map((tour) => (
          <Grid item key={tour.location} xs={12} sm={6} className="card">
            <Card data={tour} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} className="coming-soon-card">
          <CardComingSoon />
        </Grid>
      </Grid>
    </Container>
  );
};
// todo @current more live tours amount
