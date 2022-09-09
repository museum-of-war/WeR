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
    url: '/Kyiv',
    imageSrc: '/images/Irpin.png',
    videoSrc: '',
  },
  hostomel: {
    shortLocation: 'locations.hostomel.shortLocation',
    location: 'locations.hostomel.location',
    url: '/Hostomel',
    imageSrc: '',
    videoSrc: '',
  },
  bucha: {
    shortLocation: 'locations.bucha.shortLocation',
    location: 'locations.bucha.location',
    url: '/Bucha',
    imageSrc: '',
    videoSrc: '',
  },
  irpin: {
    shortLocation: 'locations.irpin.shortLocation',
    location: 'locations.irpin.location',
    url: '/Irpin',
    imageSrc: '/images/Irpin.png',
    isLive: true,
    videoSrc: '/videos/Irpin.mp4',
  },
  borodyanka: {
    shortLocation: 'locations.borodyanka.shortLocation',
    location: 'locations.borodyanka.location',
    url: '/Borodyanka',
    imageSrc: '',
    videoSrc: '',
  },
  moshchun: {
    shortLocation: 'locations.moshchun.shortLocation',
    location: 'locations.moshchun.location',
    url: '/Moshchun',
    imageSrc: '',
    videoSrc: '',
  },
  rusaniv: {
    shortLocation: 'locations.rusaniv.shortLocation',
    location: 'locations.rusaniv.location',
    url: '/Rusaniv',
    imageSrc: '',
    videoSrc: '',
  },
  ivankiv: {
    shortLocation: 'locations.ivankiv.shortLocation',
    location: 'locations.ivankiv.location',
    url: '/Ivankiv',
    imageSrc: '',
    videoSrc: '',
  },
  vorzel: {
    shortLocation: 'locations.vorzel.shortLocation',
    location: 'locations.vorzel.location',
    url: '/Vorzel',
    imageSrc: '',
    videoSrc: '',
  },
  stoyanka: {
    shortLocation: 'locations.stoyanka.shortLocation',
    location: 'locations.stoyanka.location',
    url: '/Stoyanka',
    imageSrc: '',
    videoSrc: '',
  },
  kapitanivka: {
    shortLocation: 'locations.kapitanivka.shortLocation',
    location: 'locations.kapitanivka.location',
    url: '/Kapitanivka',
    imageSrc: '',
    videoSrc: '',
  },
};

export const TOURS = [LOCATIONS.irpin, LOCATIONS.kyiv];

export const VR_PLACES: {
  location: TranslationKey;
  p360src: string;
  imageSrc: string;
}[] = [
  {
    location: 'vrPlaces.an225',
    p360src: '/images/vrplaces/pano/an225.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/an225.jpg',
  },
  {
    location: 'vrPlaces.borodyanka',
    p360src: '/images/vrplaces/pano/borodyanka.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/borodyanka.jpg',
  },
  {
    location: 'vrPlaces.bucha',
    p360src: '/images/vrplaces/pano/bucha.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/bucha.jpg',
  },
  {
    location: 'vrPlaces.kapitanivka',
    p360src: '/images/vrplaces/pano/kapitanivka.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/kapitanivka.jpg',
  },
  {
    location: 'vrPlaces.lukyanivka',
    p360src: '/images/vrplaces/pano/lukyanivka.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/kapitanivka.jpg',
  },
  {
    location: 'vrPlaces.mist_hostomel',
    p360src: '/images/vrplaces/pano/mist_hostomel.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/mist_hostomel.jpg',
  },
  {
    location: 'vrPlaces.moschun',
    p360src: '/images/vrplaces/pano/moschun.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/moschun.jpg',
  },
  {
    location: 'vrPlaces.priymachenko_museum',
    p360src: '/images/vrplaces/pano/priymachenko_museum.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/priymachenko_museum.jpg',
  },
  {
    location: 'vrPlaces.rusaniv',
    p360src: '/images/vrplaces/pano/rusaniv.jpg',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    // imageSrc: '/images/vrplaces/previews/rusaniv.jpg',
  },
];

//   vrPlaces.an225
//   vrPlaces.borodyanka
//   vrPlaces.bucha
//   vrPlaces.kapitanivka
//   vrPlaces.lukyanivka
//   vrPlaces.mist_hostomel
//   vrPlaces.moschun
//   vrPlaces.priymachenko_museum
//   vrPlaces.rusaniv

export const TEAM: { name: TranslationKey; position: TranslationKey }[] = [
  { name: 'team.VK.name', position: 'team.VK.position' },
  { name: 'team.andrienko.name', position: 'team.andrienko.position' },
  { name: 'team.revva.name', position: 'team.revva.position' },
  { name: 'team.abduvaliiev.name', position: 'team.abduvaliiev.position' },
  { name: 'team.pokhylenko.name', position: 'team.pokhylenko.position' },
];

export const USER_LANGUAGE_LS_KEY = 'USER_LANGUAGE';
export const LIVE_TOURS_CLASS_NAME = 'live-tours';
export const ABOUT_US_CLASS_NAME = 'about-us';
