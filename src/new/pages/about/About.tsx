import React, { useState } from 'react';
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../theme';
import { Button } from '../../components/button/Button';
import { ReactComponent as Envelope } from '../../icons/Envelope.svg';
import { ReactComponent as ButtonArrow } from '../../icons/ButtonArrow.svg';
import { GoBack } from '../../components/goBack/GoBack';
import { TEAM } from '../../../constants/constants';
import { Message } from '../../../components/message/Message';
import { DonationDialog } from '../../components/donationDialog/DonationDialog';

export const About: React.FC = () => {
  const md = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);

  return (
    <Container
      sx={{
        position: 'relative',
        paddingBottom: '60px',
      }}
    >
      <GoBack text="new.button.back.home" location="/" />
      <Stack direction={md ? 'column' : 'row'}>
        <img
          src="/images/new/about.png"
          alt=""
          style={{
            borderRadius: '16px',
            flexBasis: md ? '100%' : '70%',
            minWidth: md ? '100%' : '70%',
            objectFit: 'contain',
            display: 'flex',
            alignSelf: 'flex-start',
            maxWidth: '100%',
          }}
        />
        <Stack
          sx={{
            borderRadius: '16px',
            border: '1px solid #212121',
            ml: md ? 0 : 4,
            mt: md ? 4 : 0,
            flexBasis: md ? '100%' : '30%',
            alignSelf: 'flex-start',
          }}
        >
          <Typography variant="h2" px={1.5} pt={3} textTransform="uppercase">
            <Message id="new.about.title1" />
          </Typography>
          <Typography
            pt={1}
            pb={3}
            px={1.5}
            sx={{ borderBottom: '1px solid #212121' }}
          >
            <Message id="new.about.description1" />
          </Typography>
          <Typography variant="h2" px={1.5} pt={3} textTransform="uppercase">
            <Message id="new.about.title2" />
          </Typography>
          <Typography pt={1} pb={3} px={1.5}>
            <Message id="new.about.description2" />
          </Typography>
          <Stack sx={{ borderBottom: '1px solid #212121' }}>
            {TEAM.map((teamMate, index) => (
              <Stack
                key={teamMate.name}
                direction="row"
                justifyContent="space-between"
                sx={{
                  borderBottom:
                    index === TEAM.length - 1 ? undefined : '1px solid #212121',
                  mx: 1.5,
                  py: 1.5,
                }}
              >
                <Typography>
                  <Message id={teamMate.name} />
                </Typography>
                <Typography variant="body2">
                  <Message id={teamMate.position} />
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack sx={{ borderBottom: '1px solid #212121' }}>
            <Typography variant="h2" px={1.5} pt={3} textTransform="uppercase">
              <Message id="new.about.title3" />
            </Typography>
            <Typography pt={1} px={1.5}>
              <Message id="new.about.description3" />
            </Typography>
            <Button
              sx={{ mt: 1.5, mx: 1.5, mb: 3 }}
              onClick={() => setOpen(true)}
            >
              <>
                <Message id="new.about.button.donation" />
                <ButtonArrow />
              </>
            </Button>
          </Stack>
          <Typography variant="h2" px={1.5} pt={3} textTransform="uppercase">
            <Message id="new.about.title4" />
          </Typography>
          <Typography pt={1} px={1.5}>
            <Message id="new.about.description4" />
          </Typography>
          <Button
            href="mailto:general@wer.travel"
            sx={{ mt: 1.5, mx: 1.5, mb: 3 }}
            isSecondary
          >
            <Message id="new.about.button.getInTouch" />
            <Envelope />
          </Button>
        </Stack>
      </Stack>
      <DonationDialog
        open={open}
        onClose={() => setOpen(false)}
        title="donate.recipient.wer.donate"
        address="0xFC215bB18cCE2E515C7A5406d42e1E0AFe3C0Fc3"
      />
    </Container>
  );
};
