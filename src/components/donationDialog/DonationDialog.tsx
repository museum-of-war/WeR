import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { BytesLike, ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useIntl } from 'react-intl';
import { Message, TranslationKey } from '../message/Message';
import { CloseModalButton } from '../closeModalButton/CloseModalButton';
import { ReactComponent as MetaMask } from '../../icons/meta-mask.svg';
import { Select } from '../select/Select';
import { CURRENCIES, Currency } from './constants';
import { useLocale } from '../../hooks/useLocale';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.REACT_APP_INFURA_API,
    },
  },
};

let web3Modal: Web3Modal | null = null;
const getWeb3Modal = () => {
  if (typeof window === 'undefined') return null;
  if (!web3Modal)
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
  return web3Modal;
};

const DonateButton: React.FC<{
  amount: number;
  currency: Currency;
  setAmount: (amount: number) => void;
}> = ({ amount, currency, setAmount }) => (
  <Button variant="text" onClick={() => setAmount(amount)}>
    {amount} {currency.toUpperCase()}
  </Button>
);

type DonationProps = {
  title: TranslationKey;
  address: string;
  open: boolean;
  onClose: () => void;
  multiCurrency?: boolean;
};
export const DonationDialog: React.FC<DonationProps> = ({
  title,
  address,
  open,
  onClose,
  multiCurrency,
}) => {
  const intl = useIntl();
  const [locale] = useLocale();
  const [amount, setAmount] = useState<number>();
  const [currency, setCurrency] = useState(Currency.Eth);
  const [isWalletModal, setIsWalletModal] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectAndDonate = useCallback(
    async (provider: string) => {
      const web3Modal = getWeb3Modal();

      if (!web3Modal) return;

      try {
        setIsConnecting(true);
        const externalProvider = await web3Modal.connectTo(provider);
        const ethersProvider = new ethers.providers.Web3Provider(
          externalProvider,
        );
        const signer = ethersProvider.getSigner();

        let data = undefined as BytesLike | undefined;

        try {
          const encoder = new TextEncoder();
          data = encoder.encode('via WeR');
        } catch (e) {
          // console.log(e);
        }

        const tx = await signer.sendTransaction({
          to: address,
          value: ethers.utils.parseEther('' + amount),
          data,
        });
        await tx.wait();

        onClose();
      } catch (error: any) {
        // alert(error?.error?.message ?? error?.message ?? error);
      } finally {
        setIsConnecting(false);
        web3Modal?.clearCachedProvider();
      }
    },
    [address, amount, onClose],
  );

  const handleMetaMask = useCallback(async () => {
    if (window.ethereum?.isMetaMask) {
      await connectAndDonate('injected');
    } else {
      const newWindow = window.open(
        'https://metamask.io/download/',
        '_blank',
        'noopener,noreferrer',
      );
      if (newWindow) newWindow.opener = null;
    }
  }, [connectAndDonate]);

  const handleWalletConnect = useCallback(async () => {
    await connectAndDonate('walletconnect');
  }, [connectAndDonate]);

  const handleContinue = useCallback(async () => {
    if (currency === Currency.Eth) {
      setIsWalletModal(true);
    } else {
      const response = await fetch(
        'https://restore.mkip.gov.ua/api/pay/pay-tranzzo',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify({
            locale,
            amount,
            currency: currency.toUpperCase(),
          }),
        },
      );
      console.log(response);
      const { data } = await response.json();
      console.log(data);
      window.open(data.redirect_url as string, '_blank')?.focus();
    }
  }, [currency, locale, amount]);

  const handleClose = () => {
    setIsWalletModal(false);
    setAmount(undefined);
    onClose();
  };

  useEffect(() => {
    setAmount(undefined);
  }, [currency]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <CloseModalButton onClick={handleClose} />
      <DialogTitle>
        <Message id={title} />
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Stack direction="column" spacing={1}>
            {isWalletModal ? (
              <>
                <Typography variant="body2">
                  <Message id="donate.walletNeeded" />
                </Typography>
              </>
            ) : (
              <Stack direction="column" spacing={2}>
                <Stack direction="row">
                  <TextField
                    variant="standard"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    value={amount ?? ''}
                    placeholder={intl.formatMessage({ id: 'donate.amount' })}
                    onChange={(e) => {
                      if (!isNaN(Math.abs(+e.target.value))) {
                        setAmount(Math.abs(+e.target.value));
                      }
                    }}
                    sx={{ flex: 1, height: '100%' }}
                  />
                  {multiCurrency && (
                    <Select
                      value={currency}
                      onChange={(event) =>
                        setCurrency(event.target.value as Currency)
                      }
                      sx={{ ml: 4 }}
                      inputProps={{ sx: { textTransform: 'uppercase' } }}
                    >
                      {CURRENCIES.map((currency) => (
                        <MenuItem
                          key={currency.name}
                          value={currency.name}
                          sx={{ textTransform: 'uppercase' }}
                        >
                          {currency.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Stack>
                <Stack direction="row">
                  {CURRENCIES.find(
                    ({ name }) => name === currency,
                  )?.defaultValues.map((value) => (
                    <DonateButton
                      amount={value}
                      currency={currency}
                      setAmount={setAmount}
                      key={value}
                    />
                  ))}
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>
      </DialogContent>
      {isWalletModal ? (
        <DialogActions sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button
            variant="outlined"
            disabled={isConnecting}
            onClick={handleMetaMask}
            sx={{
              width: {
                xs: '100%',
                sm: '45%',
              },
              justifyContent: 'flex-start',
            }}
          >
            <MetaMask style={{ width: 22, height: 'auto', marginRight: 16 }} />
            MetaMask
          </Button>
          <Button
            variant="outlined"
            disabled={isConnecting}
            onClick={handleWalletConnect}
            sx={{
              width: {
                xs: '100%',
                sm: '45%',
              },
              justifyContent: 'flex-start',
              marginTop: {
                xs: 2,
                sm: 0,
              },
              marginLeft: '0!important',
            }}
          >
            <img
              src="/images/icons/wallet-connect.png"
              alt="wallet connect"
              style={{ marginRight: 16, width: 22, height: 'auto' }}
            />
            WalletConnect
          </Button>
        </DialogActions>
      ) : (
        <DialogActions>
          <Button
            sx={{
              width: 'fit-content',
              minWidth: {
                xs: '100%',
                sm: 160,
              },
            }}
            variant="outlined"
            disabled={(amount ?? 0) <= 0}
            onClick={handleContinue}
          >
            <Message id="donate.continue" />
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};
