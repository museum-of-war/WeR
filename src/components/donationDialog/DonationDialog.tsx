import React, { useCallback, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Stack,
  Typography,
  DialogActions,
} from '@mui/material';
import { BytesLike, ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Message, TranslationKey } from '../message/Message';
import { useIntl } from 'react-intl';
import { CloseModalButton } from '../closeModalButton/CloseModalButton';
import { ReactComponent as MetaMask } from '../../icons/MetaMask.svg';

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

type DonationProps = {
  title: TranslationKey;
  address: string;
  open: boolean;
  onClose: () => void;
};
export const DonationDialog: React.FC<DonationProps> = ({
  title,
  address,
  open,
  onClose,
}) => {
  const intl = useIntl();
  const [ethAmount, setEthAmount] = useState<number>();
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
          value: ethers.utils.parseEther('' + ethAmount),
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
    [address, ethAmount, onClose],
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

  const handleClose = () => {
    setIsWalletModal(false);
    setEthAmount(undefined);
    onClose();
  };

  const DonateButton: React.FC<{ amount: number }> = ({ amount }) => (
    <Button variant="text" onClick={() => setEthAmount(amount)}>
      {amount} ETH
    </Button>
  );

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
              <>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    variant="standard"
                    type="number"
                    value={ethAmount || ''}
                    label={intl.formatMessage({ id: 'donate.amount' })}
                    onChange={(e) => setEthAmount(Math.abs(+e.target.value))}
                    sx={{ flex: 1 }}
                  />
                  <DonateButton amount={0.1} />
                  <DonateButton amount={0.3} />
                  <DonateButton amount={0.5} />
                  <DonateButton amount={1} />
                </Stack>
              </>
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
              src="/images/icons/WalletConnect.png"
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
            disabled={(ethAmount ?? 0) <= 0}
            onClick={() => setIsWalletModal(true)}
          >
            <Message id="donate.continue" />
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};
