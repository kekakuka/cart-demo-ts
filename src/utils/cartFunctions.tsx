import { ListItem, Product } from '../model/products';

const cart: string | null = 'cart';

export const addToCart = (listItems: ListItem[], product: Product) => {
  let result;
  if (listItems.find((oneItem) => oneItem.id === product.id)) {
    result = listItems.map((oneItem) => {
      if (oneItem.id === product.id) {
        return { ...oneItem, quantity: oneItem.quantity + 1 };
      }
      return oneItem;
    });
  } else {
    result = [...listItems, { ...product, quantity: 1 }];
  }

  localStorage.setItem(cart, JSON.stringify(result));
  return result;
};
export const removeFromCart = (listItems: ListItem[], id: number) => {
  const result = listItems.filter((oneItem) => oneItem.id !== id);

  localStorage.setItem(cart, JSON.stringify(result));
  return result;
};
export const clearCart = () => {
  localStorage.setItem(cart, JSON.stringify([]));
  return [];
};

export const getLocalStorageCart: () => ListItem[] = () => {
  return localStorage.getItem(cart) ? JSON.parse(localStorage.getItem(cart)!) : [];
};

export const calculateTotalPrice = (listItems: ListItem[]) => {
  return listItems.reduce((currentPrice, item) => currentPrice + item.price * item.quantity, 0);
};

export const calculateTotalNumbers = (listItems: ListItem[]) => {
  return listItems.reduce((currentNumber, item) => currentNumber + item.quantity, 0);
};
