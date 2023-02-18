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
    location: 'new.location.irpin',
    url: '/Irpin',
    imageSrc: '/images/locations/irpin.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/t1YmWr9N_aY',
    region: Region.Kyiv,
    id: 'irpin',
  },
  {
    location: 'new.location.hostomel',
    url: '/Hostomel',
    imageSrc: '/images/locations/hostomel.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/YIuEJfws6jY',
    region: Region.Kyiv,
    id: 'hostomel',
  },
  {
    location: 'new.location.borodyanka',
    url: '/Borodyanka',
    imageSrc: '/images/locations/borodyanka.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/2UFvrVyz_30',
    region: Region.Kyiv,
    id: 'borodyanka',
  },
  {
    location: 'new.location.rusaniv',
    url: '/Rusaniv',
    imageSrc: '/images/locations/rusaniv.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/WnINA4xO1Ew',
    region: Region.Kyiv,
    id: 'rusaniv',
  },
  {
    location: 'new.location.moschun',
    url: '/Moschun',
    imageSrc: '/images/locations/moschun.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/Whw1s-8SA6s',
    region: Region.Kyiv,
    id: 'moschun',
  },
  {
    location: 'new.location.bucha',
    url: '/Bucha',
    imageSrc: '/images/locations/bucha.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/FRA5xtZF4fQ',
    region: Region.Kyiv,
    id: 'bucha',
  },
  {
    location: 'new.location.kupiansk',
    url: '/Kupiansk',
    imageSrc: '/images/locations/kupiansk.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/Vuhtk93Sb08',
    region: Region.Kharkiv,
    id: 'kupiansk',
  },
  {
    location: 'new.location.izyumGrave',
    url: '/Izyum-grave',
    imageSrc: '/images/locations/izyumGrave.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/IT_ZNAI4pR0',
    region: Region.Kharkiv,
    id: 'izyumGrave',
  },
  {
    location: 'new.location.izyum',
    url: '/Izyum',
    imageSrc: '/images/locations/izyum.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/1NfT3rdvEtE',
    region: Region.Kharkiv,
    id: 'izyum',
  },
  {
    location: 'new.location.saltivka',
    url: '/Saltivka',
    imageSrc: '/images/locations/saltivka.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/EvU5ZjN9Qms',
    region: Region.Kharkiv,
    id: 'saltivka',
  },
  {
    location: 'new.location.ruskiTyshky',
    url: '/RuskiTyshky',
    imageSrc: '/images/locations/ruskiTyshky.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/S7BIcPE_hMw',
    region: Region.Kharkiv,
    id: 'ruskiTyshky',
  },
  {
    location: 'new.location.dnipro',
    url: '/Dnipro',
    imageSrc: '/images/locations/dnipro.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/SPeyg8OIEDw',
    region: Region.Dnipropetrovsk,
    id: 'dnipro',
  },
  {
    location: 'new.location.hostomelAirport',
    url: '/HostomelAirport',
    imageSrc: '/images/locations/an225.jpg',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/O4eUnYHSfL8',
    region: Region.Kyiv,
    id: 'hostomelAirport',
  },
  {
    location: 'new.location.kapitanivka',
    url: '/Kapitanivka',
    imageSrc: '/images/locations/kapitanivka.jpg',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/28EQP-geN-w',
    region: Region.Kyiv,
    id: 'kapitanivka',
  },
  {
    location: 'new.location.irpinHouseOfCulture',
    url: '/IrpinHouseOfCulture',
    imageSrc: '/images/locations/irpin.png',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/CKKdGX7LRUE',
    region: Region.Kyiv,
    id: 'irpinHouseOfCulture',
  },
  {
    location: 'new.location.borodyanka1',
    url: '/Borodyanka_1',
    imageSrc: '/images/locations/borodyanka.jpg',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/esrcU6iIasU',
    region: Region.Kyiv,
    id: 'borodyanka1',
  },
  {
    location: 'new.location.priymachenkoMuseum',
    url: '/PriymachenkoMuseum',
    imageSrc: '/images/locations/priymachenko_museum.jpg',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/89N4MLOWttw',
    region: Region.Kyiv,
    id: 'priymachenkoMuseum',
  },
  {
    location: 'new.location.vorzel',
    url: '/Vorzel',
    imageSrc: '/images/locations/vorzel.png',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/NvUt4cPw8Mk',
    region: Region.Kyiv,
    id: 'vorzel',
  },
  {
    location: 'new.location.rusaniv1',
    url: '/Rusaniv_1',
    imageSrc: '/images/locations/rusaniv.jpg',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/ugAPj-aqn-Y',
    region: Region.Kyiv,
    id: 'rusaniv1',
  },
  {
    location: 'new.location.gasStation',
    url: '/GasStation',
    imageSrc: '/images/locations/gas_station.png',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/HnFNKTzrPkk',
    region: Region.Kyiv,
    id: 'gasStation',
  },
  {
    location: 'new.location.buchaNovus',
    url: '/BuchaNovus',
    imageSrc: '/images/locations/novus.png',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/q_eJ5DR52mQ',
    region: Region.Kyiv,
    id: 'buchaNovus',
  },
  {
    location: 'new.location.bucha1',
    url: '/Bucha_1',
    imageSrc: '/images/locations/bucha.jpg',
    isLive: false,
    videoSrc: 'https://youtube.com/embed/p-Lt8PtQywM',
    region: Region.Kyiv,
    id: 'bucha1',
  },
  {
    location: 'new.location.druzhkivka',
    url: '/Druzhkivka',
    imageSrc: '/images/locations/druzhkivka.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/SNmVoJPUB5g',
    region: Region.Donetsk,
    id: 'druzhkivka',
  },
  {
    location: 'new.location.druzhkivkaSchool',
    url: '/Druzhkivka_school',
    imageSrc: '/images/locations/druzhkivkaSchool.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/5fZX8TFDwjg',
    region: Region.Donetsk,
    id: 'druzhkivkaSchool',
  },
  {
    location: 'new.location.kramatorsk',
    url: '/Kramatorsk',
    imageSrc: '/images/locations/kramatorsk.webp',
    isLive: false,
    videoSrc: 'https://www.youtube.com/embed/9HLZlsLXfjQ',
    region: Region.Donetsk,
    id: 'kramatorsk',
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
  {
    region: Region.Donetsk,
    coordinates: ['54%', '85%'],
    events: TOURS.filter((tour) => tour.region === Region.Donetsk).length,
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
    imageSrc: '/images/locations/an225.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.kapitanivka',
    videoSrc: 'https://youtube.com/embed/28EQP-geN-w',
    imageSrc: '/images/locations/kapitanivka.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.irpin',
    videoSrc: 'https://youtube.com/embed/CKKdGX7LRUE',
    imageSrc: '/images/locations/irpin.png',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.borodyanka',
    videoSrc: 'https://youtube.com/embed/esrcU6iIasU',
    imageSrc: '/images/locations/borodyanka.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.priymachenko_museum',
    videoSrc: 'https://youtube.com/embed/89N4MLOWttw',
    imageSrc: '/images/locations/priymachenko_museum.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.vorzel',
    videoSrc: 'https://youtube.com/embed/NvUt4cPw8Mk',
    imageSrc: '/images/locations/vorzel.png',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.rusaniv',
    videoSrc: 'https://youtube.com/embed/ugAPj-aqn-Y',
    imageSrc: '/images/locations/rusaniv.jpg',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.gas_station',
    videoSrc: 'https://youtube.com/embed/HnFNKTzrPkk',
    imageSrc: '/images/locations/gas_station.png',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.bucha_novus',
    videoSrc: 'https://youtube.com/embed/q_eJ5DR52mQ',
    imageSrc: '/images/locations/novus.png',
    region: Region.Kyiv,
  },
  {
    location: 'vrPlaces.bucha',
    videoSrc: 'https://youtube.com/embed/p-Lt8PtQywM',
    imageSrc: '/images/locations/bucha.jpg',
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
  {
    name: 'new.team.boiko.name',
    position: 'new.team.boiko.position',
  },
  {
    name: 'new.team.temborska.name',
    position: 'new.team.temborska.position',
  },
  {
    name: 'new.team.zubova.name',
    position: 'new.team.zubova.position',
  },
];

export const LIVE_TOURS_CLASS_NAME = 'live-tours';
export const VR_PLACES_CLASS_NAME = 'vr-places';
export const ABOUT_US_CLASS_NAME = 'about-us';
export const USER_LANGUAGE_LS_KEY = 'USER_LANGUAGE';
export const GA_MEASUREMENT_ID = 'G-H6MQYL5SD8';

export type AppLocale = 'en' | 'ua';
