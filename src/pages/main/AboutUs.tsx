import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { ABOUT_US_CLASS_NAME, TEAM } from '../../constants/contants';
import { Message } from '../../components/message/Message';
import { DonationDialog } from '../../components/donationDialog/DonationDialog';

export const AboutUs: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
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
      <Grid container spacing={6} sx={{ mt: 0 }}>
        <Grid item sm={12} md={6}>
          <Typography variant="h3">
            <Message id="aboutUs.supportUs.title" />
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 4 }}
            onClick={() => setOpen(true)}
          >
            <Message id="aboutUs.supportUs.button" />
          </Button>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography variant="h3">
            <Message id="aboutUs.contactUs" />
          </Typography>
          <Stack sx={{ mt: 4, textDecoration: 'underline' }}>
            <Link href="mailto:general@wer.travel">general@wer.travel</Link>
          </Stack>
        </Grid>
      </Grid>
      <DonationDialog
        open={open}
        onClose={() => setOpen(false)}
        title={'donate.recipient.wer.donate'}
        address={'0xFC215bB18cCE2E515C7A5406d42e1E0AFe3C0Fc3'}
      />
    </Container>
  );
};
