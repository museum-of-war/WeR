import React from 'react';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Message, TranslationKey } from '../../components/message/Message';

const RECIPIENTS: { title: TranslationKey; url: string }[] = [
  // { title: 'United 24', url: '' },
  // { title: 'Come Back Alive Foundation', url: '' },
  { title: 'donate.recipient.prytula', url: 'https://prytulafoundation.org/' },
];
export const Donate: React.FC = () => (
  <Container
    sx={{
      mt: {
        xs: 6,
        sm: 10,
        md: 16,
      },
    }}
  >
    <Typography variant="h2">
      <Message id="donate.title" />
    </Typography>
    <Grid container spacing={6} sx={{ mt: 0 }}>
      {RECIPIENTS.map((recipient) => (
        <Grid item key={recipient.title} xs={12} sm={6}>
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
                <Message id={recipient.title} />
              </Typography>
              <Button sx={{ mt: 'auto', mb: 6 }} variant="outlined">
                <Message id="donate.button.goToWebSite" />
              </Button>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  </Container>
);
