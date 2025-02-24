import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { CartProduct, CartState } from '../../types/cart';

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const savedCart = Cookies.get('cart');
const preloadedState: CartState = savedCart
  ? JSON.parse(savedCart)
  : initialState;

const cartSlice = createSlice({
  name: 'cart',
  initialState: preloadedState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
      Cookies.set('cart', JSON.stringify(state), { expires: 7 });
    },
    removeToCart: (state, action: PayloadAction<{ id: number }>) => {
      const itemId = action.payload.id;
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price;
        state.items.forEach((item) => {
          if (item.id === itemId) {
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              state.items = state.items.filter((item) => item.id !== itemId);
            }
          }
        });
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
