import { TranslationKey } from '../components/message/Message';

export const LOCATIONS: Record<
  string,
  {
    shortLocation: TranslationKey;
    location: TranslationKey;
    url: string;
    imageSrc: string;
    videoSrc: string;
    isLive?: boolean;
  }
> = {
  kyiv: {
    shortLocation: 'locations.kyiv.shortLocation',
    location: 'locations.kyiv.location',
    url: 'Kyiv',
    imageSrc: '/images/Irpin.png',
    videoSrc: '',
  },
  hostomel: {
    shortLocation: 'locations.hostomel.shortLocation',
    location: 'locations.hostomel.location',
    url: 'Hostomel',
    imageSrc: '',
    videoSrc: '',
  },
  bucha: {
    shortLocation: 'locations.bucha.shortLocation',
    location: 'locations.bucha.location',
    url: 'Bucha',
    imageSrc: '',
    videoSrc: '',
  },
  irpin: {
    shortLocation: 'locations.irpin.shortLocation',
    location: 'locations.irpin.location',
    url: 'Irpin',
    imageSrc: '/images/Irpin.png',
    isLive: true,
    videoSrc: '/videos/Irpin.mp4',
  },
  borodyanka: {
    shortLocation: 'locations.borodyanka.shortLocation',
    location: 'locations.borodyanka.location',
    url: 'Borodyanka',
    imageSrc: '',
    videoSrc: '',
  },
  moshchun: {
    shortLocation: 'locations.moshchun.shortLocation',
    location: 'locations.moshchun.location',
    url: 'Moshchun',
    imageSrc: '',
    videoSrc: '',
  },
  rusaniv: {
    shortLocation: 'locations.rusaniv.shortLocation',
    location: 'locations.rusaniv.location',
    url: 'Rusaniv',
    imageSrc: '',
    videoSrc: '',
  },
  ivankiv: {
    shortLocation: 'locations.ivankiv.shortLocation',
    location: 'locations.ivankiv.location',
    url: 'Ivankiv',
    imageSrc: '',
    videoSrc: '',
  },
  vorzel: {
    shortLocation: 'locations.vorzel.shortLocation',
    location: 'locations.vorzel.location',
    url: 'Vorzel',
    imageSrc: '',
    videoSrc: '',
  },
  stoyanka: {
    shortLocation: 'locations.stoyanka.shortLocation',
    location: 'locations.stoyanka.location',
    url: 'Stoyanka',
    imageSrc: '',
    videoSrc: '',
  },
  kapitanivka: {
    shortLocation: 'locations.kapitanivka.shortLocation',
    location: 'locations.kapitanivka.location',
    url: 'Kapitanivka',
    imageSrc: '',
    videoSrc: '',
  },
};

export const TOURS = [LOCATIONS.irpin, LOCATIONS.kyiv];

export const TEAM: { name: TranslationKey; position: TranslationKey }[] = [
  { name: 'team.andrienko.name', position: 'team.andrienko.position' },
  { name: 'team.VK.name', position: 'team.VK.position' },
  { name: 'team.revva.name', position: 'team.revva.position' },
  { name: 'team.abduvaliiev.name', position: 'team.abduvaliiev.position' },
  { name: 'team.pokhylenko.name', position: 'team.pokhylenko.position' },
];

export const USER_LANGUAGE_LS_KEY = 'USER_LANGUAGE';
export const LIVE_TOURS_CLASS_NAME = 'live-tours';
export const ABOUT_US_CLASS_NAME = 'about-us';
