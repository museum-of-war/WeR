import React, { useState } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Message, TranslationKey } from '../../components/message/Message';
import { useIntl } from 'react-intl';
import { DonationDialog } from '../../components/donationDialog/DonationDialog';
import { Recipient, RECIPIENTS } from './constants';

export const Donate: React.FC = () => {
  const [activeRecipient, setActiveRecipient] = useState<Recipient | null>(
    null,
  );
  const intl = useIntl();

  return (
    <Container
      sx={{
        mt: {
          xs: 12,
          sm: 14,
          md: 16,
        },
      }}
    >
      <Typography variant="h2">
        <Message id="donate.title" />
      </Typography>
      {RECIPIENTS.map((recipient) => (
        <Stack
          key={recipient.title}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={8}
          sx={{
            borderTop: '2px solid #101010',
            borderBottom: '2px solid #101010',
            cursor: 'pointer',
            height: '100%',
            boxSizing: 'border-box',
            py: 8,
            mt: 6,
          }}
        >
          <Stack direction="column" width={{ xs: '100%', sm: '50%' }}>
            <img
              src={recipient.logo}
              width={130}
              alt={intl.formatMessage({ id: recipient.title })}
            />
            <Typography variant="h3" mt={4} mb={6}>
              <Message id={recipient.title} />
            </Typography>
            <Button
              sx={{
                mt: 'auto',
                width: '222px',
                minWidth: 160,
                background: '#000000',
                color: '#ffffff'
              }}
              variant="outlined"
              onClick={() => {
                setActiveRecipient(recipient);
              }}
            >
              <Message id="donate.button.donate" />
            </Button>
          </Stack>
          <Stack
            width={{ xs: '100%', sm: '50%' }}
            ml={{ sm: '48px !important' }}
          >
            <Typography fontSize={{ sm: "16px" }} lineHeight={{ sm: "24px" }}>
              <Message id={recipient.description} />
            </Typography>
          </Stack>
        </Stack>
      ))}
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
