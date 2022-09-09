import React, { useState } from 'react';
import {
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { Message, TranslationKey } from '../../components/message/Message';
import { useIntl } from 'react-intl';
import { DonationDialog } from '../../components/donationDialog/DonationDialog';

type Recipient = {
  title: TranslationKey;
  donateToTitle: TranslationKey;
  ethAddress: string;
  url: string;
  logo: string;
  description: TranslationKey;
  requisites: { key: string; value: string }[];
};
const RECIPIENTS: Recipient[] = [
  {
    title: 'donate.recipient.mincult.title',
    donateToTitle: 'donate.recipient.mincult.donate',
    ethAddress: '0xc47f5F962b6816d204cb6DbFfbC78d146b42d66c',
    url: '',
    logo: '/images/donate/mincult.png',
    description: 'donate.recipient.mincult.description',
    requisites: [
      {
        key: 'Bitcoin (BTC)',
        value: 'bc1q70c7wqzqqhk0nzrux80c0etzhdhydqmkda79g9',
      },
      {
        key: 'Ethereum (ETH) and Tether (USDT ERC-20)',
        value: '0xc47f5F962b6816d204cb6DbFfbC78d146b42d66c',
      },
      {
        key: 'Tether (USDT TRC20)',
        value: 'TFc9GzkEK3dz9aB8K3pxxGuDPAGHZBzQqt',
      },
    ],
  },
  {
    title: 'donate.recipient.dronarium.title',
    donateToTitle: 'donate.recipient.dronarium.donate',
    ethAddress: '0x0a677927534E0654F89FFA256B9558b578D1cA04',
    url: '',
    logo: '/images/donate/dronarium.png',
    description: 'donate.recipient.dronarium.description',
    requisites: [
      { key: 'BTC', value: 'bc1qq8czgefcjj0s2zqdr8zgj2lwdljxr0e2xktcla' },
      { key: 'BTC legacy', value: '1GiBv7EC3Te1ztK6KB16H8VrVyqXfQZwd5' },
      { key: 'ETH', value: '0x0a677927534E0654F89FFA256B9558b578D1cA04' },
    ],
  },
];

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
              sx={{ mt: 'auto', width: 'fit-content', minWidth: 160 }}
              variant="outlined"
              onClick={() => {
                setActiveRecipient(recipient);
              }}
            >
              <Message id="donate.button.donate" />
            </Button>
          </Stack>
          <Stack width={{ xs: '100%', sm: '50%' }}>
            <Typography>
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
        />
      )}
    </Container>
  );
};
