import React from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { ABOUT_US_CLASS_NAME, TEAM } from '../../constants/contants';
import { Message } from '../../components/message/Message';

export const AboutUs: React.FC = () => (
  <Container
    sx={{
      mt: {
        xs: 12,
        sm: 14,
        md: 16,
      },
    }}
    className={ABOUT_US_CLASS_NAME}
  >
    <Typography variant="h2">
      <Message id="aboutUs.title" />
    </Typography>
    <Grid container spacing={6} sx={{ mt: 0 }}>
      <Grid item sm={12} md={6}>
        <Typography>
          <Message id="aboutUs.description1" />
        </Typography>
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography>
          <Message id="aboutUs.description2" />
        </Typography>
      </Grid>
      {TEAM.map((member) => (
        <Grid item key={member.name} xs={12} sm={6}>
          <Stack
            direction="column"
            sx={{
              borderTop: '2px solid #101010',
              height: '100%',
              boxSizing: 'border-box',
            }}
          >
            <Stack direction="column" alignItems="flex-start" height="100%">
              <Typography mt={3}>
                <Message id={member.name} />
              </Typography>
              <Typography sx={{ mt: 1, opacity: 0.5 }}>
                <Message id={member.position} />
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  </Container>
);
