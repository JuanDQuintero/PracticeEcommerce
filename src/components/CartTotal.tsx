import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Card from './Card';

const CartTotal: FC = (): ReactElement => {
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);
  return (
    <Card className="flex gap-2 flex-col h-fit p-8 min-w-fit bg-gray-100">
      {items.map((item) => {
        return (
          <span key={item.id}>
            <span className="font-bold">{item.quantity}</span> - {item.title}
          </span>
        );
      })}
      <p className="font-bold">Total Price:</p>
      <p>{totalPrice.toFixed(2)}$</p>
    </Card>
  );
};

export default CartTotal;
