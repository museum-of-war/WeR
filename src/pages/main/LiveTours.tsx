import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardComingSoon } from '../../components/cardComingSoon/CardComingSoon';
import { Message, TranslationKey } from '../../components/message/Message';
import { Location, TOURS } from '../../constants/contants';
import { Card } from '../../components/card/Card';

type LiveToursProps = {
  heading: TranslationKey;
  className?: string;
  tours: Location[];
};
export const LiveTours: React.FC<LiveToursProps> = ({
  heading,
  className,
  tours,
}) => {
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
    <Container
      sx={{
        mt: {
          xs: 8,
          sm: 12,
          md: 16,
        },
      }}
      className={className}
    >
      <Typography variant="h2">
        <Message id={heading} />
      </Typography>
      <Grid container spacing={6} sx={{ mt: 0 }} className="cards">
        {tours.map((tour) => (
          <Grid item key={tour.location} xs={12} sm={6} className="card">
            <Link to={tour.url} style={{ textDecoration: 'none' }}>
              <Card data={tour} />
            </Link>
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
