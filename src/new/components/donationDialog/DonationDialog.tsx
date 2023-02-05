import React, { useCallback, useEffect, useState } from 'react';
import {
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
import { ReactComponent as MetaMask } from '../../../icons/meta-mask.svg';
import { CURRENCIES, Currency } from './constants';
import { Message, TranslationKey } from '../../../components/message/Message';
import { useLocale } from '../../../providers/AppLocaleProvider';
import { CloseModalButton } from '../closeModalButton/CloseModalButton';
import { Button } from '../button/Button';
import { ReactComponent as ButtonArrow } from '../../icons/ButtonArrow.svg';

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
  <Button
    isSecondary
    onClick={() => setAmount(amount)}
    sx={{ '&:not(:first-of-type)': { ml: 1 }, flexBasis: '25%' }}
  >
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
  const { locale } = useLocale();
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
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: 'cors',
          body: new URLSearchParams({
            locale: locale === 'ua' ? 'uk' : 'en',
            amount: amount?.toString() || '',
            currency: currency.toUpperCase(),
          }).toString(),
        },
      );
      const { data } = await response.json();

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
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <CloseModalButton onClick={handleClose} />
      <DialogTitle sx={{ borderBottom: '1px solid #212121', p: 1.5 }}>
        <Message id={title} />
      </DialogTitle>
      <DialogContent sx={{ borderBottom: '1px solid #212121', p: 0 }}>
        <Stack direction="column">
          {isWalletModal ? (
            <>
              <Typography p={1.5}>
                <Message id="donate.walletNeeded" />
              </Typography>
            </>
          ) : (
            <Stack direction="column">
              {multiCurrency && (
                <Stack
                  direction="column"
                  sx={{ borderBottom: '1px solid #212121' }}
                  p={1.5}
                >
                  <Typography>Payment method</Typography>
                  <Stack direction="row" mt={1}>
                    {CURRENCIES.map((c) => (
                      <Button
                        key={c.name}
                        value={c.name}
                        isSecondary={c.name !== currency}
                        onClick={() => setCurrency(c.name)}
                        sx={{
                          '&:not(:first-of-type)': { ml: 1 },
                        }}
                      >
                        {c.name}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              )}
              <Stack direction="column" sx={{ py: 1, px: 1.5 }}>
                <Typography>Specify the amount</Typography>
                <TextField
                  variant="outlined"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  value={amount ?? ''}
                  placeholder={intl.formatMessage({ id: 'donate.amount' })}
                  onChange={(e) => {
                    if (!isNaN(Math.abs(+e.target.value))) {
                      setAmount(Math.abs(+e.target.value));
                    }
                  }}
                  sx={{
                    flex: 1,
                    height: '100%',
                    mt: 1,
                    '& *': { borderRadius: '8px' },
                  }}
                />
              </Stack>
              <Stack direction="row" sx={{ py: 1, px: 1.5 }}>
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
      </DialogContent>
      {isWalletModal ? (
        <DialogActions
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            p: 1.5,
            justifyContent: 'space-between',
          }}
        >
          <Button
            disabled={isConnecting}
            onClick={handleMetaMask}
            isSecondary
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
            disabled={isConnecting}
            onClick={handleWalletConnect}
            isSecondary
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
        <DialogActions sx={{ p: 1.5 }}>
          <Button
            sx={{
              width: '100%',
              '& *': { opacity: (amount ?? 0) <= 0 ? 0.6 : 1 },
            }}
            disabled={(amount ?? 0) <= 0}
            onClick={handleContinue}
          >
            <>
              <Typography>Confirm and pay</Typography>
              <ButtonArrow />
            </>
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};
