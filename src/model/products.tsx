import a from '../image/a.png';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ListItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  { id: 1, name: 'Sledgehammer', price: 125.76, image: a },
  {
    id: 2,
    name: 'Axe',
    price: 190.51,
    image: a,
  },
  {
    id: 3,
    name: 'Bandsaw',
    price: 562.14,
    image: a,
  },
  {
    id: 4,
    name: 'Chisel',
    price: 13.9,
    image: a,
  },
  {
    id: 5,
    name: 'Hacksaw',
    price: 19.45,
    image: a,
  },
  {
    id: 6,
    name: 'Sword',
    price: 1239.45,
    image: a,
  },
  {
    id: 7,
    name: 'Tank',
    price: 76719.45,
    image: a,
  },
];
