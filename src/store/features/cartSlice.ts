import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types/cart';

interface CartState {
  items: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
    },
    removeToCart: (state, action: PayloadAction<Product>) => {
      const itemId = action.payload.id;
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => itemId !== item.id);
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
