import { TranslationKey } from '../../components/message/Message';
import { ReactComponent as Dronarium } from '../../new/icons/Dronarium.svg';
import { ReactComponent as MinCult } from '../../new/icons/MinCult.svg';

export type Recipient = {
  title: TranslationKey;
  donateToTitle: TranslationKey;
  ethAddress: string;
  url: string;
  logo: string;
  logoNew?: any;
  description: TranslationKey;
  requisites: { key: string; value: string }[];
  multiCurrency?: boolean;
};
export const RECIPIENTS: Recipient[] = [
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
    multiCurrency: true,
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
export const RECIPIENTS_NEW: Recipient[] = [
  {
    title: 'new.support.title1',
    donateToTitle: 'new.support.description1',
    ethAddress: '0xc47f5F962b6816d204cb6DbFfbC78d146b42d66c',
    url: '',
    logo: '/images/donate/mincult.png',
    logoNew: MinCult,
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
    multiCurrency: true,
  },
  {
    title: 'new.support.title2',
    donateToTitle: 'new.support.description2',
    ethAddress: '0x0a677927534E0654F89FFA256B9558b578D1cA04',
    url: '',
    logo: '/images/donate/dronarium.png',
    logoNew: Dronarium,
    description: 'donate.recipient.dronarium.description',
    requisites: [
      { key: 'BTC', value: 'bc1qq8czgefcjj0s2zqdr8zgj2lwdljxr0e2xktcla' },
      { key: 'BTC legacy', value: '1GiBv7EC3Te1ztK6KB16H8VrVyqXfQZwd5' },
      { key: 'ETH', value: '0x0a677927534E0654F89FFA256B9558b578D1cA04' },
    ],
  },
];
