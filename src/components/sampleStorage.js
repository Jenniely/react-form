export const sampleProducts = [{
    id: 1,
    medias: [
    { link: 'https://res.cloudinary.com/jenniely/image/upload/v1612389786/coffee/layers_d4b9zu.png',
    alt: 'string'},{ link: '#',
    alt: 'string'}
    ],
    acidity: {
      title: 3,
    },
    price: 100.00,
    name: 'кофе ОНО',
    description: 'кофе депрессо',
    category_id: 1,
    packings: [
        '250 гр',
        '500 гр'
    ]
},
{
  id: 2,
  medias: [
  { link: 'https://res.cloudinary.com/jenniely/image/upload/v1612389786/coffee/layers_d4b9zu.png',
  alt: 'string'},{ link: '#',
  alt: 'string'}
  ],
  acidity: {
    title: 3,
  },
  price: 100.00,
  name: 'кофе ОНО',
  description: 'кофе руссиано',
  category_id: 1,
  packings: [
      '250 гр',
      '500 гр'
  ]
}, {
  id: 3,
  medias: [
  { link: 'https://res.cloudinary.com/jenniely/image/upload/v1612389786/coffee/layers_d4b9zu.png',
  alt: 'string'},{ link: '#',
  alt: 'string'}
  ],
  acidity: {
    title: 3,
  },
  price: 100.00,
  name: 'кофе ОНО',
  description: 'кофе депрессо',
  category_id: 1,
  packings: [
      '250 гр',
      '500 гр'
  ]
},
{
id: 4,
medias: [
{ link: 'https://res.cloudinary.com/jenniely/image/upload/v1612389786/coffee/layers_d4b9zu.png',
alt: 'string'},{ link: '#',
alt: 'string'}
],
acidity: {
  title: 3,
},
price: 100.00,
name: 'кофе ОНО',
description: 'кофе руссиано',
category_id: 1,
packings: [
    '250 гр',
    '500 гр'
]
}, 
]

export const bundles = [
    {
        id: 1,
        bundleTitle: 'Кофейный сет',
        bundleFeatures: [
            'Френч-пресс KingHOFF 0,8 л',
            'Ручная кофемолка Hario Ceramic Mill Mini',
            '250 г. кофе на выбор'
        ],
        bundlePrice: 249.90,
        bundleDelivery: 'Бесплатная доставка по городу',
        bundleImage: 'https://res.cloudinary.com/jenniely/image/upload/v1612389786/coffee/group_3_copy_2_4335_tqe28z.png'
    },
    {
        id: 2,
        bundleTitle: 'Подписка на кофе',
        bundleFeatures: [
            '3 сорта кофе 250г. на ваш выбор',
        ],
        bundlePrice: 44.90,
        bundleDelivery: 'Бесплатная доставка по городу',
        bundleImage: 'https://res.cloudinary.com/jenniely/image/upload/v1612389786/coffee/layers_d4b9zu.png'
    },
    {
        id: 3,
        bundleTitle: 'Капсульная кофемашина',
        bundleFeatures: [
            'Капсульная кофемашина Nespresso Essenza Mini D30;',
            '50 капсул The Welder Catherine'
        ],
        bundlePrice: 199.90,
        bundleDelivery: 'Бесплатная доставка по городу',
        bundleImage: 'https://res.cloudinary.com/jenniely/image/upload/v1612389786/coffee/group_3_copy_2_4335_tqe28z.png'
    },
]

export default {
    sampleProducts,
    bundles
}