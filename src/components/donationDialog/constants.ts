export enum Currency {
  Eth = 'eth',
  Usd = 'usd',
  Uah = 'uah',
}
export const CURRENCIES = [
  {
    name: Currency.Eth,
    defaultValues: [0.1, 0.3, 0.5, 1],
  },
  // {
  //   name: Currency.Usd,
  //   defaultValues: [100, 200, 500, 1000],
  // },
  {
    name: Currency.Uah,
    defaultValues: [100, 500, 1000, 3000],
  },
];
