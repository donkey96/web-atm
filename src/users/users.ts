
export type userType = {
  name: string,
  credit: number,
  mail: string,
  pass: string,
  transactions: transactionData[] | null
}
export type transactionData = {
  date: string,
  transactionAmount: number,
  credit: number,
}

export const Users: userType[] = [
  {
    name: 'フグ田 サザエ',
    credit: 100000,
    mail: 'sazae@mail.com',
    pass: '12345678',
    transactions: [
      {date: '2021/08/21', transactionAmount: -100000, credit: 100000},
      {date: '2021/08/23', transactionAmount: +1100000, credit: 1200000},
      {date: '2021/09/03', transactionAmount: -700000, credit: 500000},
      {date: '2021/09/10', transactionAmount: -300000, credit: 200000},
      {date: '2021/09/20', transactionAmount: -100000, credit: 100000},
    ]
  },
  {
    name: '磯野 波平',
    credit: 5000000,
    mail: 'namihei@mail.com',
    pass: 'aaaaaaaa',
    transactions: [
      {date: '2021/07/13', transactionAmount: -100000, credit: 5000000},
      {date: '2021/07/19', transactionAmount: +500000, credit: 5500000},
      {date: '2021/07/20', transactionAmount: -1000000, credit: 4500000},
      {date: '2021/07/21', transactionAmount: -100000, credit: 4400000},
      {date: '2021/07/26', transactionAmount: +80000, credit: 4480000},
      {date: '2021/08/03', transactionAmount: -200000, credit: 4280000},
      {date: '2021/08/08', transactionAmount: -1000000, credit: 3280000},
      {date: '2021/08/09', transactionAmount: -1000000, credit: 2280000},
      {date: '2021/08/14', transactionAmount: +3000000, credit: 5280000},
      {date: '2021/08/15', transactionAmount: +1000000, credit: 6280000},
      {date: '2021/08/17', transactionAmount: -200000, credit: 6080000},
      {date: '2021/08/20', transactionAmount: +120000, credit: 6200000},
      {date: '2021/08/22', transactionAmount: +300000, credit: 6500000},
      {date: '2021/08/22', transactionAmount: -500000, credit: 6000000},
      {date: '2021/08/27', transactionAmount: -1500000, credit: 4500000},
      {date: '2021/09/01', transactionAmount: -1500000, credit: 3000000},
      {date: '2021/09/07', transactionAmount: +500000, credit: 3500000},
      {date: '2021/09/10', transactionAmount: +700000, credit: 4200000},
      {date: '2021/09/10', transactionAmount: +1000000, credit: 5200000},
      {date: '2021/09/18', transactionAmount: -100000, credit: 5100000},
      {date: '2021/09/20', transactionAmount: -100000, credit: 5000000},
    ]
  },
  {
    name: 'フグ田 マスオ',
    credit: 50000,
    mail: 'masuo@mail.com',
    pass: 'abcdefgh',
    transactions: [
      {date: '2021/08/21', transactionAmount: +210000, credit: 210000},
      {date: '2021/08/23', transactionAmount: -20000, credit: 190000},
      {date: '2021/09/03', transactionAmount: -20000, credit: 170000},
      {date: '2021/09/10', transactionAmount: -20000, credit: 150000},
      {date: '2021/09/20', transactionAmount: -100000, credit: 50000},
    ]
  },
  {
    name: '磯野 フネ',
    credit: 1000000000,
    mail: 'hune@mail.com',
    pass: 'qwertyui',
    transactions: [
      {date: '2021/08/21', transactionAmount: +10000000000, credit: 60000000000},
      {date: '2021/08/23', transactionAmount: -50000000000, credit: 10000000000},
      {date: '2021/09/03', transactionAmount: +2000000000, credit: 12000000000},
      {date: '2021/09/10', transactionAmount: -10000000000, credit: 2000000000},
      {date: '2021/09/20', transactionAmount: -1000000000, credit: 1000000000},
    ]
  },
  {
    name: 'フグ田 タラオ',
    credit: 0,
    mail: 'tarao@mail.com',
    pass: 'asdfghjk',
    transactions: []
  },
  {
    name: '磯野 カツオ',
    credit: 20,
    mail: 'katsuo@mail.com',
    pass: 'zxcvbnmm',
  transactions: [
  {date: '2021/08/21', transactionAmount: +500, credit: 500},
  {date: '2021/08/23', transactionAmount: -150, credit: 350},
  {date: '2021/09/03', transactionAmount: -100, credit: 250},
  {date: '2021/09/10', transactionAmount: -200, credit: 50},
  {date: '2021/09/20', transactionAmount: -30, credit: 20},
]
  },
{
    name: '磯野 ワカメ',
    credit: 2000000,
    mail: 'wakame@mail.com',
    pass: '87654321',
  transactions: [
    {date: '2021/08/21', transactionAmount: +50000000, credit: 50000000},
    {date: '2021/08/23', transactionAmount: -15000000, credit: 35000000},
    {date: '2021/09/03', transactionAmount: -10000000, credit: 25000000},
    {date: '2021/09/10', transactionAmount: -20000000, credit: 5000000},
    {date: '2021/09/20', transactionAmount: -3000000, credit: 2000000},
  ]
},

]