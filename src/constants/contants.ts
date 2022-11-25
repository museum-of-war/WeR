import { TranslationKey } from '../components/message/Message';

export enum Region {
  Zakarpattia = 'Zakarpattia',
  Volyn = 'Volyn',
  Lviv = 'Lviv',
  IvanoFrankivsk = 'Ivano-Frankivsk',
  Rivne = 'Rivne',
  Khmelnytskyi = 'Khmelnytskyi',
  Ternopil = 'Ternopil',
  Chernivtsi = 'Chernivtsi',
  Vinnytsia = 'Vinnytsia',
  Crimea = 'Crimea',
  Kherson = 'Kherson',
  Chernihiv = 'Chernihiv',
  Kyiv = 'Kyiv',
  Zhytomyr = 'Zhytomyr',
  Cherkasy = 'Cherkasy',
  Kirovohrad = 'Kirovohrad',
  Mykolaiv = 'Mykolaiv',
  Odesa = 'Odesa',
  Sumy = 'Sumy',
  Poltava = 'Poltava',
  Kharkiv = 'Kharkiv',
  Luhansk = 'Luhansk',
  Donetsk = 'Donetsk',
  Dnipropetrovsk = 'Dnipropetrovsk',
  Zaporizhia = 'Zaporizhia',
}

export type Location = {
  location: TranslationKey;
  url: string;
  imageSrc: string;
  videoSrc: string;
  isLive?: boolean;
  region: Region;
};

export const TOURS: Location[] = [
  {
    location: 'locations.irpinBridge',
    url: '/Irpin-bridge',
    imageSrc: '/images/locations/irpinBridge.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/sp5UcE1Jvas',
    region: Region.Kyiv,
  },
  {
    location: 'locations.irpin',
    url: '/Irpin',
    imageSrc: '/images/locations/irpin.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/t1YmWr9N_aY',
    region: Region.Kyiv,
  },
  {
    location: 'locations.hostomel',
    url: '/Hostomel',
    imageSrc: '/images/locations/hostomel.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/YIuEJfws6jY',
    region: Region.Kyiv,
  },
  {
    location: 'locations.borodyanka',
    url: '/Borodyanka',
    imageSrc: '/images/locations/borodyanka.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/2UFvrVyz_30',
    region: Region.Kyiv,
  },
  {
    location: 'locations.rusaniv',
    url: '/Rusaniv',
    imageSrc: '/images/locations/rusaniv.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/WnINA4xO1Ew',
    region: Region.Kyiv,
  },
  {
    location: 'locations.moschun',
    url: '/Moschun',
    imageSrc: '/images/locations/moschun.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/Whw1s-8SA6s',
    region: Region.Kyiv,
  },
  {
    location: 'locations.bucha',
    url: '/Bucha',
    imageSrc: '/images/locations/bucha.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/FRA5xtZF4fQ',
    region: Region.Kyiv,
  },
];

export const VR_PLACES: {
  location: TranslationKey;
  videoSrc: string;
  imageSrc: string;
  region: Region;
}[] = [
  {
    location: 'vrPlaces.an225',
    videoSrc: 'https://youtube.com/embed/O4eUnYHSfL8',
    imageSrc: '/images/vrplaces/previews/an225.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.kapitanivka',
    videoSrc: 'https://youtube.com/embed/28EQP-geN-w',
    imageSrc: '/images/vrplaces/previews/kapitanivka.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.irpin',
    videoSrc: 'https://youtube.com/embed/CKKdGX7LRUE',
    imageSrc: '/images/vrplaces/previews/irpin.png', // preview
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.borodyanka',
    videoSrc: 'https://youtube.com/embed/esrcU6iIasU',
    imageSrc: '/images/vrplaces/previews/borodyanka.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.priymachenko_museum',
    videoSrc: 'https://youtube.com/embed/89N4MLOWttw',
    imageSrc: '/images/vrplaces/previews/priymachenko_museum.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.vorzel',
    videoSrc: 'https://youtube.com/embed/NvUt4cPw8Mk',
    imageSrc: '/images/vrplaces/previews/vorzel.png',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.rusaniv',
    videoSrc: 'https://youtube.com/embed/ugAPj-aqn-Y',
    imageSrc: '/images/vrplaces/previews/rusaniv.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.gas_station',
    videoSrc: 'https://youtube.com/embed/HnFNKTzrPkk',
    imageSrc: '/images/vrplaces/previews/gas_station.png',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.bucha_novus',
    videoSrc: 'https://youtube.com/embed/q_eJ5DR52mQ',
    imageSrc: '/images/vrplaces/previews/novus.png',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.bucha',
    videoSrc: 'https://youtube.com/embed/p-Lt8PtQywM',
    imageSrc: '/images/vrplaces/previews/bucha.jpg',
    region: Region.Kyiv,
  },
];

export const TEAM: { name: TranslationKey; position: TranslationKey }[] = [
  { name: 'team.VK.name', position: 'team.VK.position' },
  { name: 'team.andrienko.name', position: 'team.andrienko.position' },
  { name: 'team.revva.name', position: 'team.revva.position' },
  { name: 'team.abduvaliiev.name', position: 'team.abduvaliiev.position' },
  { name: 'team.pokhylenko.name', position: 'team.pokhylenko.position' },
  { name: 'team.novyk.name', position: 'team.novyk.position' },
  { name: 'team.polikashkin.name', position: 'team.polikashkin.position' },
];

export const LIVE_TOURS_CLASS_NAME = 'live-tours';
export const VR_PLACES_CLASS_NAME = 'vr-places';
export const ABOUT_US_CLASS_NAME = 'about-us';
export const USER_LANGUAGE_LS_KEY = 'USER_LANGUAGE';
export const GA_MEASUREMENT_ID = 'G-H6MQYL5SD8';

export type AppLocale = 'en' | 'ua';
