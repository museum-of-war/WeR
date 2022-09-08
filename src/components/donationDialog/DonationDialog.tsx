import React, { useCallback, useState } from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Stack,
    Typography,
} from '@mui/material';
import { BytesLike, ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Message, TranslationKey } from '../message/Message';
import { useIntl } from 'react-intl';

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
    onClose: (event: any, reason: string) => void;
};
export const DonationDialog: React.FC<DonationProps> = ({ title, address, open, onClose }) => {
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
                  console.log(e);
              }

              const tx = await signer.sendTransaction({
                  to: address,
                  value: ethers.utils.parseEther('' + ethAmount),
                  data,
              });
              await tx.wait();
              onClose({}, 'Successfully sent');
          } catch (error: any) {
              alert(error?.error?.message ?? error?.message ?? error);
          }
          finally {
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
            const newWindow = window.open('https://metamask.io/download/', '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
        }
    }, [connectAndDonate]);

    const handleWalletConnect = useCallback(async () => {
        await connectAndDonate('walletconnect');
    }, [connectAndDonate]);

    const DonateButton = (amount: number) => (
      <Button variant="text" onClick={() => setEthAmount(amount)}>
          {amount} ETH
      </Button>
    );

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
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
                                <Stack direction="row" spacing={2}>
                                    <Button
                                      variant="outlined"
                                      disabled={isConnecting}
                                      onClick={handleMetaMask}
                                    >
                                        MetaMask
                                    </Button>
                                    <Button
                                      variant="outlined"
                                      disabled={isConnecting}
                                      onClick={handleWalletConnect}
                                    >
                                        WalletConnect
                                    </Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <Stack direction="row" spacing={2}>
                                    <TextField
                                      variant="standard"
                                      type="number"
                                      value={ethAmount || ''}
                                      label={intl.formatMessage({ id: 'donate.amount' })}
                                      onChange={e => setEthAmount(+e.target.value)}
                                    />
                                    {DonateButton(0.1)}
                                    {DonateButton(0.3)}
                                    {DonateButton(0.5)}
                                    {DonateButton(1)}
                                </Stack>
                                <Button
                                  variant="outlined"
                                  disabled={(ethAmount ?? 0) <= 0}
                                  onClick={() => setIsWalletModal(true)}
                                >
                                    <Message id="donate.continue" />
                                </Button>
                            </>
                        )}
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};
