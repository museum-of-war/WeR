import { TranslationKey } from '../components/message/Message';

export enum Region {
  Cherkasy = 'cherkasy',
  Chernihiv = 'chernihiv',
  Chernivtsi = 'chernivtsi',
  Crimea = 'crimea',
  Dnipropetrovsk = 'dnipropetrovsk',
  Donetsk = 'donetsk',
  IvanoFrankivsk = 'ivano-frankivsk',
  Kharkiv = 'kharkiv',
  Kherson = 'kherson',
  Khmelnytskyi = 'khmelnytskyi',
  Kirovohrad = 'kirovohrad',
  Kyiv = 'kyiv',
  KyivCity = 'kyiv-city',
  Luhansk = 'luhansk',
  Lviv = 'lviv',
  Mykolaiv = 'mykolaiv',
  Odesa = 'odessa',
  Poltava = 'poltava',
  Rivne = 'rivne',
  Sumy = 'sumy',
  Ternopil = 'ternopil',
  Vinnytsia = 'vinnytsia',
  Volyn = 'volyn',
  Zakarpattia = 'zakarpattia',
  Zaporizhia = 'zaporizhia',
  Zhytomyr = 'zhytomyr',
}

export type Location = {
  location: TranslationKey;
  // todo remove
  url: string;
  imageSrc: string;
  videoSrc: string;
  isLive?: boolean;
  region: Region;
  id: string;
};

export const TOURS: Location[] = [
  {
    location: 'locations.irpinBridge',
    url: '/Irpin-bridge',
    imageSrc: '/images/locations/irpinBridge.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/sp5UcE1Jvas?autoplay=1',
    region: Region.Kyiv,
    id: 'irpinBridge',
  },
  {
    location: 'locations.irpin',
    url: '/Irpin',
    imageSrc: '/images/locations/irpin.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/t1YmWr9N_aY',
    region: Region.Kyiv,
    id: 'irpin',
  },
  {
    location: 'locations.hostomel',
    url: '/Hostomel',
    imageSrc: '/images/locations/hostomel.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/YIuEJfws6jY',
    region: Region.Kyiv,
    id: 'hostomel',
  },
  {
    location: 'locations.borodyanka',
    url: '/Borodyanka',
    imageSrc: '/images/locations/borodyanka.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/2UFvrVyz_30',
    region: Region.Kyiv,
    id: 'borodyanka',
  },
  {
    location: 'locations.rusaniv',
    url: '/Rusaniv',
    imageSrc: '/images/locations/rusaniv.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/WnINA4xO1Ew',
    region: Region.Kyiv,
    id: 'rusaniv',
  },
  {
    location: 'locations.moschun',
    url: '/Moschun',
    imageSrc: '/images/locations/moschun.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/Whw1s-8SA6s',
    region: Region.Kyiv,
    id: 'moschun',
  },
  {
    location: 'locations.bucha',
    url: '/Bucha',
    imageSrc: '/images/locations/bucha.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/FRA5xtZF4fQ',
    region: Region.Kyiv,
    id: 'bucha',
  },
  {
    location: 'locations.kupiansk',
    url: '/Kupiansk',
    imageSrc: '/images/locations/kupiansk.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/Vuhtk93Sb08',
    region: Region.Kharkiv,
    id: 'kupiansk',
  },
  {
    location: 'locations.izyumGrave',
    url: '/Izyum-grave',
    imageSrc: '/images/locations/izyumGrave.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/IT_ZNAI4pR0',
    region: Region.Kharkiv,
    id: 'izyumGrave',
  },
  {
    location: 'locations.izyum',
    url: '/Izyum',
    imageSrc: '/images/locations/izyum.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/1NfT3rdvEtE',
    region: Region.Kharkiv,
    id: 'izyum',
  },
  {
    location: 'locations.saltivka',
    url: '/Saltivka',
    imageSrc: '/images/locations/saltivka.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/EvU5ZjN9Qms',
    region: Region.Kharkiv,
    id: 'saltivka',
  },
  {
    location: 'locations.ruskiTyshky',
    url: '/RuskiTyshky',
    imageSrc: '/images/locations/ruskiTyshky.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/S7BIcPE_hMw',
    region: Region.Kharkiv,
    id: 'ruskiTyshky',
  },
  {
    location: 'locations.dnipro',
    url: '/Dnipro',
    imageSrc: '/images/locations/dnipro.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/SPeyg8OIEDw',
    region: Region.Dnipropetrovsk,
    id: 'dnipro',
  },
];

export const EVENT_COORDINATES = [
  {
    region: Region.Kharkiv,
    coordinates: ['35%', '79%'],
    events: TOURS.filter((tour) => tour.region === Region.Kharkiv).length,
  },
  {
    region: Region.Kyiv,
    coordinates: ['21%', '43%'],
    events: TOURS.filter((tour) => tour.region === Region.Kyiv).length,
  },
  {
    region: Region.Dnipropetrovsk,
    coordinates: ['48%', '70%'],
    events: TOURS.filter((tour) => tour.region === Region.Dnipropetrovsk)
      .length,
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
    imageSrc: '/images/vrplaces/previews/irpin.png',
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
  { name: 'new.team.VK.name', position: 'new.team.VK.position' },
  { name: 'new.team.andrienko.name', position: 'new.team.andrienko.position' },
  {
    name: 'new.team.abduvaliiev.name',
    position: 'new.team.abduvaliiev.position',
  },
  { name: 'new.team.kandul.name', position: 'new.team.kandul.position' },
  { name: 'new.team.baidala.name', position: 'new.team.baidala.position' },
  { name: 'new.team.novyk.name', position: 'new.team.novyk.position' },
  {
    name: 'new.team.polikashkin.name',
    position: 'new.team.polikashkin.position',
  },
];

export const LIVE_TOURS_CLASS_NAME = 'live-tours';
export const VR_PLACES_CLASS_NAME = 'vr-places';
export const ABOUT_US_CLASS_NAME = 'about-us';
export const USER_LANGUAGE_LS_KEY = 'USER_LANGUAGE';
export const GA_MEASUREMENT_ID = 'G-H6MQYL5SD8';

export type AppLocale = 'en' | 'ua';
