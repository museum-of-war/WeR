import React, { useState } from 'react';
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../theme';
import { Button } from '../../components/button/Button';
import { ReactComponent as ButtonArrow } from '../../icons/ButtonArrow.svg';
import { GoBack } from '../../components/goBack/GoBack';
import { DonationDialog } from '../../components/donationDialog/DonationDialog';
import { Recipient, RECIPIENTS_NEW } from '../../../pages/common/constants';
import { Message } from '../../../components/message/Message';

export const Support: React.FC = () => {
  const md = useMediaQuery(theme.breakpoints.down('lg'));
  const sm = useMediaQuery(theme.breakpoints.down('md'));
  const [activeRecipient, setActiveRecipient] = useState<Recipient | null>(
    null,
  );

  return (
    <Container>
      <GoBack text="new.button.back.home" location="/" />
      <Stack
        direction={md ? 'column' : 'row'}
        sx={{
          maxHeight: sm ? '150px' : md ? '300px' : 'auto',
        }}
      >
        <img
          src="/images/new/support.png"
          alt=""
          style={{
            borderRadius: '16px',
            flexBasis: md ? '100%' : '70%',
            minWidth: md ? '100%' : '70%',
            height: '100%',
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
          {RECIPIENTS_NEW.map((recipient, index) => (
            <Stack
              key={recipient.title}
              sx={{
                borderBottom: index === 0 ? '1px solid #212121' : undefined,
              }}
            >
              {/*<img*/}
              {/*  src={recipient.logo}*/}
              {/*  width={130}*/}
              {/*  alt={intl.formatMessage({ id: recipient.title })}*/}
              {/*/>*/}
              {/*<MinCult style={{ padding: 12 }} />*/}
              <recipient.logoNew style={{ padding: 12 }} />
              <Typography
                variant="h2"
                px={1.5}
                pt={3}
                textTransform="uppercase"
              >
                <Message id={recipient.title} />
              </Typography>
              <Typography pt={1} px={1.5}>
                <Message id={recipient.description} />
              </Typography>
              <Button
                sx={{ mt: 1.5, mx: 1.5, mb: 3 }}
                onClick={() => {
                  setActiveRecipient(recipient);
                }}
              >
                <>
                  <Message id="new.support.button.donate" /> <ButtonArrow />
                </>
              </Button>
            </Stack>
          ))}
          {/*<Stack>*/}
          {/*  <Dronarium style={{ padding: 12 }} />*/}
          {/*  <Typography variant="h2" px={1.5} pt={3} textTransform="uppercase">*/}
          {/*    Dronarium*/}
          {/*  </Typography>*/}
          {/*  <Typography pt={1} px={1.5}>*/}
          {/*    DRONARIUM is the first training center for drone pilots in*/}
          {/*    Ukraine, where graduates get practical experience of operating*/}
          {/*    UAVs in a wide variety of conditions, in-depth study of aviation*/}
          {/*    law, Ukrainian legislation and international law in the field of*/}
          {/*    UAVs. All this makes graduates of the academy reliable defenders*/}
          {/*    of the Ukrainian sky and accurate eyes in the sky. You can support*/}
          {/*    the academy and accelerate the approach of victory - by sending a*/}
          {/*    donation of any amount.*/}
          {/*  </Typography>*/}
          {/*  <Button sx={{ mt: 1.5, mx: 1.5, mb: 3 }} onClick={() => {}}>*/}
          {/*    <>*/}
          {/*      Make a donation <ButtonArrow />*/}
          {/*    </>*/}
          {/*  </Button>*/}
          {/*</Stack>*/}
        </Stack>
      </Stack>
      {activeRecipient && (
        <DonationDialog
          open
          onClose={() => setActiveRecipient(null)}
          title={activeRecipient.donateToTitle}
          address={activeRecipient.ethAddress}
          multiCurrency={activeRecipient.multiCurrency}
        />
      )}
    </Container>
  );
};
