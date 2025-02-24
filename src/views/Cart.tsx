import Cookies from 'js-cookie';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import Card from '@components/Card';
import CartTotal from '@components/CartTotal';
import ItemCart from '@components/ItemCart';
import { RootState } from '../store/store';

const Cart: FC = (): ReactElement => {
  const { items } = useSelector((state: RootState) => state.cart);

  if (items.length === 0) {
    Cookies.remove('cart');
    return (
      <Card className="p-8 flex items-center justify-center">
        <h3>Your Cart is empty.</h3>
      </Card>
    );
  }

  return (
    <Card className="w-full px-20">
      <div className="p-8 space-y-2 flex justify-between">
        <ItemCart />
        <CartTotal />
      </div>
    </Card>
  );
};

export default Cart;
